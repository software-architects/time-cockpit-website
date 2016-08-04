---
layout: blog
title: Understanding Time Cockpit's Excel Export
teaser: Today we had a potential customer having difficulites with the excel export. I agree that there are some rough edges and therefore some more explanation of how the excel export works -  Basically there are two variants of exports -  Templated and direct. Internally this corresponds to time cockpit reading an exisiting template or creating a default template from the entity type that is to be exported. Therefore I will only explain the templated version, because the non-templated version works the same, just that time cockpit generates a template for you instead of you specifying the template.
author: Philipp Aumayr
date: 2010-07-07
bannerimage: 
lang: en
permalink: /blog/2010/07/07/Understanding-Time-Cockpits-Excel-Export
---

<p>Today we had a potential customer having difficulites with the excel export. I agree that there are some rough edges and therefore some more explanation of how the excel export works: Basically there are two variants of exports: Templated and direct. Internally this corresponds to time cockpit reading an exisiting template or creating a default template from the entity type that is to be exported. Therefore I will only explain the templated version, because the non-templated version works the same, just that time cockpit generates a template for you instead of you specifying the template.</p><p>Lets assume we want to export the list of all time sheets. In the german version we can find that list under the name "Zeitbuchungen".</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2010/07/Zeitbuchungen_list.png" class="    " />
</p><p>As you can see there are a few columns having names like "Benutzer", "Beginnzeit". In our data model these are the friendly names. The List itself is defined with the name APP_DefaultTimesheetList (which has the friendly name "Zeitbuchungen"). Lets take a look at how that list is defined: right-click on the name of the list (APP_DefaultTimesheetList) and choose "Edit list". In the top register row, select "Listdefinition". You should see something similar to this, without the yellow and red markings, which I will explain in a second:</p><p>
  <img alt="List definition" src="{{site.baseurl}}/content/images/blog/2010/07/list_definition.png" class="      " />
</p><p>So the text in the list definition, contains, well, the definition of the list. This is XML markup, which I guess a few of you might be quite familiar with. I will extract that piece of code (we can argue whether it's code or not somewhere else) again for your convenience. I broke the query part into multiple lines, to not mess up all of the layout:</p>{% highlight xml %}<List AllowDelete="True" AllowEdit="True" AutoGenerateColumns="False" 
       EditFormName="APP_TimesheetForm" ModelEntityName="APP_Timesheet" 
       Query="From Current In APP_Timesheet
                 .Include('APP_UserDetail').Include('APP_Task.APP_Project.APP_Customer')
                 .Include('APP_Project.APP_Customer').Include('APP_Invoice') 
              Order By Current.APP_BeginTime 
              Select Current" 
       xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data">
  <BoundCell Content="=Current.APP_UserDetail" Header="Benutzer" />
  <BoundCell Content="=Current.APP_BeginTime" Header="Beginnzeit" />
  <BoundCell Content="=Current.APP_EndTime" Header="Endzeit" />
  <BoundCell Content="=Current.APP_Description" Header="Beschreibung der Tätigkeit" />
  <BoundCell Content="=Current.APP_Location" Header="Arbeitsort" />
  <BoundCell Content="=Current.APP_Project" Header="Projekt" />
  <BoundCell Content="=Current.APP_Task" Header="Tätigkeit" />
  <NumericCell Content="=Current.APP_HourlyRateActual" Header="Effektiver Stundensatz" 
    NumberFormatPattern="#,##0.00" />
  <BoundCell Content="=Current.APP_Billable" Header="Verrechenbar" />
  <BoundCell Content="=Current.APP_Billed" Header="Verrechnet" />
</List>{% endhighlight %}<p>If you look at the XML it defines a list consisting of a BoundCell as well as a NumericCell. The list itself has a few properties such as Query, ModelEntityName, AllowEdit and Delete, etc. The most interesting here is the Query property. It defines the query to be executed against the database to retrieve the data required to show the list. In non-programmer lingo, if we want somebody to give us a List of something, we use a question ("hey give me a list of something."). Here, this is done by the Query. Of course, we cannot (yet) use plain english to formulate those queries, therefore we use a language that time cockpit and we can speak: TCQL. Now, most of you familiar with SQL will see a lot of similarities, and actually TCQL is translated into SQL and executed against the database. But lets stay simple. I will not go much further into TCQL in this post, but will definitely cover it in another blog entry.</p><div>The TCQL statement here is this, which basically gives us all APP_Timesheets and orders them by the BeginTime.</div>{% highlight sql %}From Current In APP_Timesheet
.Include('APP_UserDetail')
.Include('APP_Task.APP_Project.APP_Customer')
.Include('APP_Project.APP_Customer')
.Include('APP_Invoice') 
Order By Current.APP_BeginTime 
Select Current{% endhighlight %}<p>So the result from this query is a list of timesheets. Every timesheet contains quite a few properties like a Description, the Project it belongs to, if it is billable, the user for this timesheet, etc. How does this correspond to the excel export? Well if you are using a template, the Expressions you write are evaluated against the timesheet. Note that I say expressions are evaluated. You can use all the power that TCQL expressions provide, therefore modify / transforming the data before it is written into the excel sheet. If you want to include the first name of the user, write <strong>[Current.APP_UserDetail.APP_Firstname]</strong>, if you want to prepend something use <strong>["Firstname:" + Current.APP_UserDetail.APP_Firstname]</strong>. As you can see, it is very flexible here, allowing you to adjust data before exporting.</p><p>So how do we create the template? Few easy steps: Make up your mind, what you want to export. Decide upon the list (or defined a new list if you need to), and take a look at what properties are available and what the names of the properties are. Note that this must not be the friendly names, the real names are the ones that count here. Open up excel and then into one row write one expression per column. Finally mark all cells and defined a name for that region, named TemplateRow. Why is this necessary? This makes it possible for the exporter to find the location where you want to export the data to within the spread sheet. At the end, the basic template should look something like this:</p><p>
  <img alt="simple excel template" src="{{site.baseurl}}/content/images/blog/2010/07/excel_template.png" class="  " />
</p><p>Here we want to export the First and last names of the list of timesheets. This will still create one row per entry in the list. Note the defined name when marking the region. Now to use this template, open the list of timesheets and export it using the template. You will see that the destination file gets filled with the first and last names of timesheets related user (I selected 4 of my timesheets here, and exported the selection):</p><p>
  <img alt="excel exported" src="{{site.baseurl}}/content/images/blog/2010/07/excel_exported (1).png" />
</p><p>To sum up, while time cockpit exporter is not the easiest to start with (especially if you haven't gotten a grip on TCQL and expressions yet), it is quite powerful in combination with excel pivot tables. This post only scratched the surface of the data model behind time cockpit, and a lot more of the data model is covered in the documentation (<a title="HowTo: Modifying The Model" href="http://help.timecockpit.com/html/07396c38-8cb8-45da-a303-549bdf323fe9.htm">here</a> and <a title="time cockpit Query Language (TCQL)" href="http://help.timecockpit.com/html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm">here</a>), but as they are currently only available in german, I will cover some of the topics in some more blog entries within the next days and weeks.</p>