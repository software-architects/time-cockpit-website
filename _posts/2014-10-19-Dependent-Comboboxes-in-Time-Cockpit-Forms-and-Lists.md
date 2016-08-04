---
layout: blog
title: Dependent Comboboxes in Time Cockpit Forms and Lists
excerpt: Comboboxes that depend on each other are a common requirement in time cockpit. Example -  Once a customer is selected, the project combobox should only contain the selected customer's projects. Configuring dependent comboboxes isn't complex. This blog article describes how you can do it in custom forms and lists.
author: Rainer Stropek
date: 2014-10-19
bannerimage: /content/images/blog/2014/10/Filtered Combobox.png
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2014/10/19/Dependent-Comboboxes-in-Time-Cockpit-Forms-and-Lists
---

<p>Comboboxes that depend on each other are a common requirement in time cockpit. Example: Once a customer is selected, the project combobox should only contain the selected customer's projects. Configuring dependent comboboxes isn't complex. This blog article describes how you can do it in custom forms and lists.</p><h2>BoundCell vs. RelationCell</h2><p>If you generate a form in time cockpit, each property and each relation becomes a <a href="http://help.timecockpit.com/?topic=html/f8066acc-858f-6f42-927d-41c3d81de7de.htm" target="_blank"><em>BoundCell</em></a>. This cell type lets time cockpit decide which control to use based on the bound model entity. If you bind the cell to a date field, a date picker will appear. If you bind it to a text field, a textbox will appear and its size will depend on the text field's maximum length. If you bind the cell to a relation between to entities, a combobox will appear and you can use it to select the related entity.</p><p>The following example shows two <em>BoundCell</em> elements in a filter form. Note that <em>FilterPath</em> reference relations in both cases. Because of that, the filter form will display two comboboxes (one with customers and one with projects).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/BoundCell.png" />
</p><p>Here is another example from time cockpit's <em>Timesheet</em> form. It will show a combobox with all means of transport:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/BoundCell2.png" />
</p><p>
  <em>BoundCell</em> makes it super-easy to implement the typical case. However, if you want to configure details like dependent comboboxes you have to change the cell type to <a href="http://help.timecockpit.com/?topic=html/0bc0dca0-3146-0767-90a6-7b6eb5d4ee86.htm" target="_blank"><em>RelationCell</em></a>. Internally, <em>BoundCell</em> becomes a <em>RelationCell</em> automatically if you bind it to a relation.</p><p class="showcase">So your first step for creating dependent comboboxes is to change <em>BoundCell</em> into <em>RelationCell</em> for that combobox that depends on another field in your form.</p><h2>Conditions</h2><p>Dependent combobox are filtered based on other inputs in the same form. An example are the comboboxes <em>Project</em> and <em>Task</em> in time cockpit's <em>Timesheet</em> form. Every project has 0..n tasks, every task can be assigned to a project. Therefore it makes sense to filter the available tasks to only those tasks that are assigned to the selected project. The combobox with tasks will be empty as long as the user hasn't selected a project:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/EmptyCombobox.png" />
</p><p>The combobox will contain a filtered list of tasks when the user has selected a project:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/Filtered Combobox.png" />
</p><p>If you add a <em>RelationCell</em> to a form, time cockpit will show all records that the current user has access to. To filter the combobox as shown above, the <em>RelationCell</em> supports a property called <a href="http://help.timecockpit.com/?topic=html/2faf2106-d425-353f-4066-5072a25c81cf.htm" target="_blank"><em>Condition</em></a>. It allows you to specify a <a href="http://help.timecockpit.com/?topic=html/90177304-8489-4e9b-9c55-4e92533f3f9c.htm" target="_blank">TCQL</a> condition that should be added to the query when looking for the records displayed in the combobox. Lets walk this through using an example: The following TCQL query will return all tasks:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/AllTasksTcql.png" />
</p><p>If we want to display only the tasks for project <em>Adventure.Recruiting Training</em>, the TCQL query would have to be extended with a <em>WHERE</em> clause (note: <em>{c6976761-6904-...}</em> is the internal ID of the project):</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/FilteredTasks.png" />
</p><p>The <em>Condition</em> property of the <em>RelationCell</em> allows us to specify exactly that filter. The following screenshot analyzes time cockpit's definition of the <em>Project</em> and <em>Task RelationCell</em> elements in the Timesheet form (click to enlarge):</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:8b57d170-e0e5-4bcf-b60b-9869c1ef4f2f" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><p class="showcase">Note that you need not reference other fields in the <em>Condition</em>. You can also specify constant filters like shown in the <em>Project</em> combobox above (only displays projects that are not closed).</p><h2>LookupCondition</h2><p>Beside <em>Condition</em>, <em>RelationCell</em> has a second property related to dependent comboboxes: <a href="http://help.timecockpit.com/?topic=html/76a72992-5a69-d274-506a-05a33cf14494.htm" target="_blank"><em>LookupCondition</em></a>. It controls the condition that is applied when the user clicks on the <em>Open list with details</em> button:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/ListDetails.png" />
</p><p>In most cases, <em>LookupCondition</em> will be set to the same value as <em>Condition</em> so that both lists contain the same content. However, you might want to display a less restricted list if the user clicks on <em>Open list with details</em>. In this case specify a different expression in <em>LookupCondition</em> or skip it entirely to display all records without filtering.</p><h2>Conditions in Filter Forms</h2><p>Generally, combobox conditions in filter forms work just like conditions in other forms. However, there is one important difference: You have to give the source combobox a <em>FilterParameterName</em> so that you can reference its value in the condition expression. The following screenshot shows how this is done (click to enlarge):</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:b2f62bfe-c4d9-4fec-93a2-9e10b80752c7" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><h2>Having Problems - Contact us</h2><p>Having problems with defining your forms and lists? Too technical for you? <a href="http://www.timecockpit.com/help-support/contact-us" target="_blank">Contact us</a> to get support or let our professional services team assist you in tailoring time cockpit to your specific needs.</p>