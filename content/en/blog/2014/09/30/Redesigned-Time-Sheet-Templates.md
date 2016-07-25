---
layout: blog
title: Redesigned Time Sheet Templates
teaser: Time cockpit has had support for time sheet templates for years. For this version we have completely redesigned this concept and added support for scripts. That enables fascinating new possibilities for integrating time cockpit with external systems.
author: Rainer Stropek
date: 2014-09-30
bannerimage: /content/images/blog/2014/09/Templates06.png
lang: en
permalink: /blog/2014/09/30/Redesigned-Time-Sheet-Templates
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/09/6305470569_3b362c3de8_o.jpg" />Image source: <a href="https://flic.kr/p/aBcbHP" target="_blank">https://flic.kr/p/aBcbHP</a>, under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons</a> License</div><h2>Introduction to Time Sheet Templates</h2><p>Time cockpit has had support for time sheet templates for years. Until the last version, templates could be found in time cockpit's ribbon:</p><p>
  <img src="{{site.baseurl}}/content/images/tour/graphical_calendar/template_bookings.png" />
</p><p>You can add templates manually by right-clicking an existing timesheet record and selecting <em>Save as template</em>:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/SaveAsTemplate.png" />
</p><p>The other option has been to write <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL queries</a> to generate templates from other sources (e.g. templates for time sheet records based on customer orders). We will get back to this option later.</p><p>Templates make it very easy to create time sheet records. Just mark the template booking and add a time sheet record in the usual way (e.g. double-click, drag &amp; drop, clicking <em>Add</em> in the ribbon, etc.). Time cockpit will pre-fill the new time sheet record with data from the template. This is useful if you regularly book identical or quite similar times (e.g. if you spend half of the week at a single customer).</p><h2>What Changed?</h2><p>In the latest time cockpit version we completely redesigned time sheet templates. The two most important changes visible to you as an end user are:</p><ol>
  <li>We moved the templates away from the ribbon into a separate tab.</li>
  <li>We now support <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripts</a> as a data source for time sheet templates. As script allow you to access nearly any data source (locally installed and available via web), this open endless possibilities for generating templates from other applications.</li>
</ol><h2>The New Template Tab</h2><p>The first item became necessary because of two reasons. The first one was available space. We heared from customers that templates are quite popular and useful. However, the ribbon offered only very limited space. Users had to scroll and it was easy to get lost. The second one is the upcoming new web version of time cockpit that we are currently working on. The menu system we plan for the future will not support the layout of time sheet templates as it was in the ribbon. So it will be necessary to find a different, hopefully better place for them anyway.</p><p>By default, the new version of time cockpit displays your templates in the lower right corner or the screen:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:0d004f36-2170-4641-8028-7bb0ad9701e8" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="500" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1080" />
</function><p>You can grab the header of the <em>Templates</em> tab and drag it to a different location:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/Templates02.png" />
</p><p>If you have lots of templates, you can place the tab over or side by side to the <em>Signals</em> tab. In that case you can use the entire screen height for signals and/or templates:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/Templates03.png" />
</p><p>The perfect place for templates really depends on your screen size and the amount of templates you have. Therefore time cockpit gives you the freedom to arrange your tabs as you like. Of course time cockpit will remember the placement and put the Templates tab were you left it when you restart the application.</p><h2>Script Template Sources</h2><h3>TCQL Template Sources</h3><p>Time cockpit has been offering the option to generate time sheet templates from <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL queries</a> for quite a while. Here are some example for what you could do with that functionality:</p><ul>
  <li>Imagine that you import customer orders as time cockpit projects. Each project has a start and an end date. You could display a time sheet template for each project active on the currently selected date in the graphical time sheet calendar.</li>
  <li>You could generate time sheet templates based on time sheet records entered in the last 15 days as it is likely that you will create similar bookings again (e.g. because you work on your current projects over the course of multiple days).</li>
</ul><p>Let's look at the TCQL code for the latter of the two:</p>{% highlight javascript %}/*
The following TCQL query returns all project/location combinations for which
time sheet records exist in the last 15 days. It is used to generate time
sheet templates as it is likely that you will pick one of these projects
for your next time sheet.
*/
From T In APP_Timesheet.Include('Task.Project.Customer').Include('Project.Customer')
Where
    /* Current user */
    T.APP_UserDetail.APP_UserDetailUuid = Environment.CurrentUser.UserDetailUuid
    /* Time sheets of the last 15 days */
     And T.APP_BeginTime >= :AddDays(:Today(), -15)
Select New With
{
    T.APP_Project,
     T.APP_Location,
    .ResultTitle = :DisplayValue(T.APP_Project),
    .ResultSortOrder = :DisplayValue(T.APP_Project),
    .NumberOfItems = Count() /* Just to enforce distinct project/location combinations */
}{% endhighlight %}<p>If you develop your own TCQL query for template generation, it is good practice to first try the query in time cockpit's administration module as shown in the following screenshot:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:89a4e1e4-eb76-4665-b19a-12d0f231013b" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function><p>Did you recognize the result columns <em>ResultTitle</em> and <em>ResultOrder</em> in the query shown above? You probably have guessed what they are for.</p><ul>
  <li>
    <em>ResultTitle</em> controls the description of the template in time cockpit's calendar.</li>
  <li>
    <em>ResultOrder</em> defines the order of the templates.</li>
  <li>
    <em>ResultAlwaysOpenForm</em> is a third option. It controls whether the time sheet form opens whenever you create a time sheet based on this template. If you set it to <em>True</em>, the time sheet form always opens. If it is <em>False</em>, the time sheet form only opens if mandatory data is missing (e.g. start time, end time, other mandatory fields).</li>
</ul><p>Once you have created and tested the TCQL query for your templates, you can add it to the list of templates using the menu item <em>Timesheet Templates</em> in time cockpit's <em>Management</em> module:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/Templates05.png" />
</p><h3>Script Sources</h3><p>Script sources are new in the latest version of time cockpit. They work similarly to the TCQL templates sources described above. The difference is that you create a Python script to generate time sheet templates instead of a TCQL query. As you might know, time cockpit's scripting engine is very powerful when it comes to accessing external data. COM, databases, REST web APIs, all those data exchange technologies are available. Therefore, script sources enable you to create time sheet templates based on any internal or external data.</p><h3>Script Source Example: Outlook Tasks</h3><p>Let's look at an example. The following script creates time sheet templates based on your Outlook tasks. If you completed an Outlook task today, it is likely that you have to create a corresponding time sheet record. Therefore it makes perfect sense to suggest time sheet templates for Outlook tasks.</p><p>
  {% highlight javascript %}# Use Outlook's COM object model to access tasks
clr.AddReference("Microsoft.Office.Interop.Outlook")
from Microsoft.Office.Interop.Outlook import *
from System.Collections.Generic import List

# A script template source has to consist of exactly one method.
def getTimesheets(templateQueryContext):
    def EnumerateFolders(folder, condition):
        for email in folder.Items.Restrict(condition):
            entity = modelEntity.CreateEntityObject()
            status = "OPEN" if email.TaskCompletedDate == DateTime(4501, 1, 1) else "DONE"
            
            entity.Description = email.Subject
            entity.ResultTitle = status + ": " + email.Subject
            entity.ResultSortOrder = status + ": " + email.Subject
            result.Add(entity)
            
        for childFolder in folder.Folders:
            EnumerateFolders(childFolder, condition)
    
    # Setup a data structure that holds the templates' data
    modelEntity = ModelEntity({ "Name": "Result" })
    modelEntity.Properties.Add(TextProperty({ "Name": "Description" }))
    modelEntity.Properties.Add(TextProperty({ "Name": "ResultTitle" }))
    modelEntity.Properties.Add(TextProperty({ "Name": "ResultSortOrder" }))
    
    # Create a helper variable that will receive the resulting templates
    result = List[EntityObject]()
    
    date = templateQueryContext.BeginTime.ToString("d")
    
    # Create an Outlook application object
    application = ApplicationClass()
    
    # Enumerate over all tasks and create templates from it
    taskFolder = application.Session.GetDefaultFolder(OlDefaultFolders.olFolderTasks)
    condition = "([Complete] = true and [DateCompleted] = '" + date + "') or ([Complete] = false and [DueDate] <= '" + date + "')"
    
    for task in taskFolder.Items.Restrict(condition):
        entity = modelEntity.CreateEntityObject()
        status = "OPEN" if task.Status == 0 else "DONE"
    
        entity.Description = task.Subject
        entity.ResultTitle = status + ": " + task.Subject
        entity.ResultSortOrder = status + ": " + task.Subject
        result.Add(entity)
    
    # Enumerate over tasks based on emails
    emailFolder = application.Session.GetDefaultFolder(OlDefaultFolders.olFolderInbox)
    condition = "[TaskDueDate] = '" + date + "' or [TaskCompletedDate] = '" + date + "'"
    
    EnumerateFolders(emailFolder, condition)
    
    # Return the result
    templateQueryContext.Templates = result{% endhighlight %}If you are not familiar with programming Outlook, you find more information in <a href="http://msdn.microsoft.com/en-us/library/office/ff866465(v=office.15).aspx" target="_blank">Microsoft's Developer Network</a>.</p><p>Note that the method creating the templates receives one parameter: <em>templateQueryContext</em>. This object has the following properties:</p><ul>
  <li>
    <em>DataContext</em>: Current <a href="http://help.timecockpit.com/?topic=html/192adccd-0d7d-1feb-0805-6e74ba296c9c.htm" target="_blank">DataContext</a> (server or client). Use this data context if you need to load time cockpit data in your script.</li>
  <li>
    <em>UserDetailUuid</em>: Guid of the current user.</li>
  <li>
    <em>TimesheetUuid</em>: Guid of the currently selected time sheet record. Might be <em>Null</em> if the user has not selected a time sheet record in the graphical calendar.</li>
  <li>
    <em>BeginTime</em>: Currently selected begin time (00:00 if no particular item like time sheet record or signal has been selected, otherwise the begin time of the selected item).</li>
  <li>
    <em>EndTime</em>: Currently selected end time (23:59:59 if no particular item like time sheet record or signal has been selected, otherwise the end time of the selected item).</li>
</ul><p>This is how the Outlook tasks are displayed in time cockpit. Note that the script only displays tasks that were completed on the selected date or that are due.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/Templates06.png" />
</p><div></div>