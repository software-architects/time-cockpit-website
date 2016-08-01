---
layout: blog
title: How to Create a Custom Form for an Action Parameter
excerpt: In our last blogpost (see here), we covered how to create actions with parameters. We described how to create an action, how to define exececution conditions and of course, how to create action parameters. As we mentioned in our last blogpost, time cockpit auto-generates a form for each parameter entity that is used with an action. However, it is also possible to define custom forms for action parameters. For creating a customely defined form, the following steps are necessary.
author: Alexander Huber
date: 2010-07-28
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
permalink: /blog/2010/07/28/How-to-Create-a-Custom-Form-for-an-Action-Parameter
---

<div class="sf_postContent" id="ctl00_ctl00_ContentArea_Content_BlogPosts1_ctl00_ctl00_pnlContent">
  <p>In our last blogpost (see <a href="/Blog/2010/07/26/How-to-Create-an-Action-That-Takes-Parameters-">here</a>), we covered how to create actions with parameters. We described how to create an action, how to define exececution conditions and of course, how to create action parameters. As we mentioned in our last blogpost, time cockpit auto-generates a form for each parameter entity that is used with an action. However, it is also possible to define custom forms for action parameters. For creating a customely defined form, the following steps are necessary.</p>
  <ul>
    <li>Creating a new form</li>
    <li>Editing the markup</li>
    <li>Assigning the form to a parameter entity</li>
  </ul>
  <p>In the following, we describe the steps in more detail, but beforehand, we want to take a quick glimpse at our <span class="InlineCode">UpdateTimesheet</span> action again. As you may remember, we have created an action with a parameter, but with no specific form for the parameter. As you can see in the below screenshot, the combobox for choosing a form for the <span class="InlineCode">UpdateTimesheetParameter</span> entity is empty. This is because the <span class="InlineCode">UpdateTimesheetParameter</span> has no corresponding form yet. We are going to change that now.</p>
  <p align="center">
    <img alt="No form set" src="{{site.baseurl}}/content/images/blog/2010/07/no_form.png" class="     mceC1Focused" />
  </p>
  <h2>Creating a form</h2>
  <p>In order to create a new form, we need to switch to the "Server" context. By right-clicking on <span class="InlineCode">Forms</span>, we can create a new form <span class="InlineCode">UpdateTimesheetParameterForm</span>. Besides entering the name, we must assign the form to an entity. When we hit save, we are presented with a split-pane. The upper pane holds the markup of the new form, whereas the lower pane shows the graphical result of the markup. As you may have noticed, time cockpit generated default markup code representing the properties and relations of an entity, in our case <span class="InlineCode">UpdateTimesheetParameterForm</span>.</p>
  <p align="center">
    <img alt="Creating a form" src="{{site.baseurl}}/content/images/blog/2010/07/new_parameter_form.png" class="  " />
  </p>
  <h2>Editing the markup</h2>
  <p>In the upper pane, we can now edit the markup as we desire. For demonstration purposes, we introduced an new <span class="InlineCode">Tab</span> that is one represents the description and the other represents the user, just to show you what is possible. Further we changed a view headers to show other texts (see screenshots below). Of course, you could introduce other types of cells for other types of properties (see help). Now that we are done with editing our form, we can save the form. The lower pane now shows the graphical result of the markup. You can see that we now have a form that contains two tabs and it shows the updated texts.</p>
  <p align="center">
    <img alt="Editing the markup" src="{{site.baseurl}}/content/images/blog/2010/07/markup_parameter_form.png" class="  " />
  </p>
  <h2>Assigning the form to a parameter entity</h2>
  <p>To be able to use the <span class="InlineCode">UpdateTimesheetParameterForm</span> in our action, we need to reopen the <span class="InlineCode">UpdateTimesheet</span> action for edit again. Please keep in mind that the reopening of the action is necessary for the changes to the model (the creation of the form) take effect. If we change to the parameter section in the edit pane of our action, we can now choose the <span class="InlineCode">UpdateTimesheetParameterForm</span> from the combobox. Please mind that we can only choose from those forms, which have been created for the <span class="InlineCode">UpdateTimesheetParameter</span> entity. After we have saved the action, we have replaced the auto-generated parameter dialog with our customly designed one.</p>
  <p align="center">
    <img alt="Assigning the form to a parameter entity" src="{{site.baseurl}}/content/images/blog/2010/07/set_parameter_form.png" class="  " />
  </p>
  <p>When we run a query against our timesheets and call the <span class="InlineCode">Update Timesheet</span> action, we can see, that time cockpit does not present us the auto-generated parameter dialog, but our customized <span class="InlineCode">UpdateTimesheetParameterForm</span>.</p>
  <p align="center">
    <img alt="Customized form" src="{{site.baseurl}}/content/images/blog/2010/07/customized_form.png" class="   " />
  </p>
</div>