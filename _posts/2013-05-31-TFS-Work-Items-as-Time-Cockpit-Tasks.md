---
layout: blog
title: TFS Work Items as Time Cockpit Tasks
excerpt: If you are using Team Foundation Server for your daily development and planning work time cockpit can provide you with some information from TFS via the signal trackers (e.g. checked in code). Using python scripting and the TFS client SDK you can also query the work items for your projects and store them as time cockpit tasks. This will allow you keep track of your working time based on TFS projects and work items.
author: Simon Opelt
date: 2013-05-31
bannerimage: 
lang: en
tags: [Iron Python,TFS,time cockpit]
permalink: /blog/2013/05/31/TFS-Work-Items-as-Time-Cockpit-Tasks
---

<h2>Overview</h2><p>Microsoft <a href="http://www.microsoft.com/visualstudio/eng/products/visual-studio-team-foundation-server-2012" target="_blank">Team Foundation Server</a> and its hosted counterpart <a href="http://tfs.visualstudio.com/" target="_blank">Team Foundation Service</a> offer lots of different features for everyday development tasks. Besides version control, continuous integration and test management, work item tracking is an important feature. To make use of the information stored in your TFS work items and to be able to book your times on these items they have to be imported into time cockpit. This article shows how to create a simple IronPython <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">script</a> or time cockpit <a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" target="_blank">action</a> that queries TFS work items and stores them as time cockpit tasks.</p><p>
  <a href="http://www.timecockpit.com/blog/2013/04/30/Importing-JIRA-Issues-as-Time-Cockpit-Tasks">A similar article is available which shows you how to import issues if you are using JIRA.</a>
</p><p>The full sample can be found at <a href="https://github.com/software-architects/TimeCockpit.Scripts/blob/master/TimeCockpit.Tasks.TFS/TimeCockpit.Tasks.TFS.py" target="_blank">our github repository</a>.</p><h2>Changes to the Data Model</h2><p>For querying the work items a TFS server URI as well as the names of the team projects to import are required. To store this information the following properties have to be added to the <strong>APP_Project</strong> entity in time cockpit:</p><ul>
  <li>
    <strong>TfsServer</strong> (Text, nullable, 1000 characters) to store the URI to the TFS server (e.g. <em>https://timecockpitdemo.visualstudio.com/DefaultCollection</em>)</li>
  <li>
    <strong>TfsProject</strong> (Text, nullable, 100 characters) to store the team project name (e.g. <em>Demo</em>, <em>Development</em>)</li>
  <li>
    <strong>TfsLastUpdate</strong> (DateTime, nullable) to keep track of the latest known updated work items</li>
</ul><div>To make use of these new properties they have to be added to the list and form as well.</div><div>If required lots of other customizations could be made in <strong>APP_Project</strong> and <strong>APP_Task</strong> (e.g. estimated effort, work item type) but for the sake of simplicity we keep this example to a minimum.</div><h2>TFS API in Python</h2><p>A TFS server can be accessed via the team foundation client which is shipped with Visual Studio and Team Explorer. You can have a look at the <a href="http://help.timecockpit.com/html/a4c60754-23c4-47a9-91c6-bf99652ccd7d.htm#Prerequisites" target="_blank">TFS signal tracker prerequisites</a> should you require additional information on DLLs, supported versions and download sources.</p><p>The following snippet shows an IronPython helper class for TFS access. The constructor takes the server URI as an argument. The <strong>connect</strong> method establishes a connection and ensures that authentication succeeded. The method <strong>query_work_items</strong> takes a project name and last update date as parameters to build and execute a work item query. The result is a collection of work items which is returned by the function.</p><p>All the heavy lifting concerning web requests, serialization and authentication is handled by the TFS client.</p>{% highlight python %}# Simple TFS API wrapper
class TFS(object):
    def __init__(self, uri):
        from System import Uri
        self.uri = Uri(uri)
        self._connected = False

    def connect(self):
        import clr
        clr.AddReferenceToFileAndPath(r"C:\Program Files (x86)\Microsoft Visual Studio 11.0\Common7\IDE\ReferenceAssemblies\v2.0\Microsoft.TeamFoundation.dll")
        clr.AddReference("Microsoft.TeamFoundation.Client.dll")
        clr.AddReference("Microsoft.TeamFoundation.VersionControl.Client.dll")
        clr.AddReference("Microsoft.TeamFoundation.WorkItemTracking.Client.dll")
        from Microsoft.TeamFoundation.Client import WindowsCredential, TfsClientCredentials, TfsTeamProjectCollection
        tfsCreds = TfsClientCredentials(WindowsCredential(), True)
        self.server = TfsTeamProjectCollection(self.uri, tfsCreds)
        if self.server is None:
            raise InvalidOperationException("Could not get TFS server for " + self.uri + ".")

        self.server.EnsureAuthenticated();

        if not self.server.HasAuthenticated:
            raise InvalidOperationException("TFS could not authenticate.")
    
        self._connected = True

    def query_work_items(self, projectName, fromDate):
        from Microsoft.TeamFoundation.WorkItemTracking.Client import WorkItemStore
        from System.Collections.Generic import Dictionary

        if not self._connected:
            raise InvalidOperationException("TFS not connected.")
        
        workItemStore = self.server.GetService(clr.GetClrType(WorkItemStore))

        if workItemStore is None:
            raise InvalidOperationException("Could not get WorkItemStore.")

        parameters = Dictionary[String, String]()
        parameters.Add("Project", projectName)
        query = "Select [Id], [Title], [Changed Date] From WorkItems Where [System.TeamProject] = @Project"
        if fromDate is not None:
            query = query + " And [Changed Date] >= '" + fromDate.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture) + "'"

        query = query + " Order By [Changed Date] Asc"

        return workItemStore.Query(query, parameters){% endhighlight %}<p>Please note that while being a bad practice to use string concatenation or string builders for handling parameters there are situations where it is unavoidable. As seen in line 40 the project name is handled via the parameters collection. If the date is passed as a parameter there can be several issues related to culture info and date formats. If the <a href="http://msdn.microsoft.com/library/system.datetime.aspx" target="_blank">DateTime</a> is added as a string the API will complain that compared types (String vs. DateTime) are not compatible. If the parameters dictionary is changed to <em>Dictionary[String, Object]</em> the API will implicitly call <a href="http://msdn.microsoft.com/library/zdtaw1bw.aspx" target="_blank">ToString</a> which will result in an invalid date format in most cases.</p><h2>Creating and Updating Tasks</h2><p>Now that TFS connectivity can be easily handled we need to look at which projects need to be updated, query the data and update the corresponding objects in time cockpit. The following sample does so by executing the following steps:</p><ul>
  <li>Get all projects with TFS meta information.</li>
  <li>Group the projects by TFS servers to avoid redundant connection attempts.</li>
  <li>For each TFS server and project the work items changed since the last update are queried.

<ul><li>The existing time cockpit tasks corresponding to the TFS work items are selected.</li><li>The necessary create or update operations are executed. Newly created tasks will be assigned to the correct project.</li><li>By looking at the latest update timestamp of all changed work items we determine the maximum update date and store it in the time cockpit project.</li></ul></li>
</ul>{% highlight python %}# get all projects relevant to the TFS import
tfsProjects = dc.Select("From P In Project Where :IsNullOrEmpty(P.TfsServer) = False And :IsNullOrEmpty(P.TfsProject) = False Select P")

# get all the different TFS servers used in the projects
projectsByServer = tfsProjects.GroupBy(lambda p: p.TfsServer)

for serverProjects in projectsByServer:
    tfs = TFS(serverProjects.Key)
    tfs.connect()
    for project in serverProjects:
        dc.BeginTransaction()
        try:
            updatedItems = tfs.query_work_items(project.TfsProject, project.TfsLastUpdate)
            if updatedItems.Count == 0:
                Logger.Write(LogLevel.Verbose, "No updates for project '{0}'.", project.Code)
                continue

            lastUpdate = project.TfsLastUpdate;
            maxUpdate = project.TfsLastUpdate

            for item in updatedItems:
                id = str(item.Id)
                if lastUpdate is None or item.ChangedDate >= lastUpdate:

                    # try to retrieve existing task from time cockpit
                    task = dc.SelectSingleWithParams({ "Query": "From T In Task Where T.Project = @ProjectUuid And T.Code = @Code Select T", "@Code": id, "@ProjectUuid": project.ProjectUuid })
                    if task is None:
                        Logger.Write(LogLevel.Information, "Creating task '{0}' for project '{1}'.", id, project.Code)
                        task = dc.CreateTask()
                        task.Code = id
                        task.Project = project

                    if task.Description != item.Title:
                        Logger.Write(LogLevel.Information, "Updating title of task '{0}' for project '{1}' from '{2}' to '{3}'.", id, project.Code, task.Description, item.Title)
                        task.Description = item.Title
                    
                    dc.SaveObject(task)

                if maxUpdate is None or item.ChangedDate > maxUpdate:
                    maxUpdate = item.ChangedDate

            # update the latest known update timestamp for the project
            if project.TfsLastUpdate != maxUpdate:
                Logger.Write(LogLevel.Information, "Updating project update date for '{0}' from '{1}' to '{2}'.", project.Code, project.TfsLastUpdate, maxUpdate)
                project.TfsLastUpdate = maxUpdate
                dc.SaveObject(project)
            if commit:
                dc.TryCommitTransaction()
            else:
                dc.TryRollbackTransaction()
        except Exception, e:
            dc.TryRollbackTransaction()
            Logger.Write(LogLevel.Error, "Error while handling '{0}': {1}", project.TfsProject, e.message){% endhighlight %}<h2>Example</h2><p>We ran this script using a demo project hosted in a Team Foundation Services account. Several work items of different types and with different descriptions were created.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/05/tfs0.png" alt="First TFS Work Items" title="First TFS Work Items" />
</p><p>After running our script we can have a look at the <em>Time Cockpit.UI.log</em> file to check if all the items have been created as expected and that the last update date is also changed accordingly.</p>{% highlight text %}Creating task '12' for project 'Demo Project'.
Updating title of task '12' for project 'Demo Project' from '' to 'Simple Bug'.
Creating task '13' for project 'Demo Project'.
Updating title of task '13' for project 'Demo Project' from '' to 'My Backlog Item'.
Creating task '14' for project 'Demo Project'.
Updating title of task '14' for project 'Demo Project' from '' to 'Important Feature'.
Updating project update date for 'Demo Project' from '' to '05/22/2013 22:05:45'.{% endhighlight %}<p>We then changed item <strong>12 "Simple Bug"</strong> to have a new title and ran the script again.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/05/tfs1.png" alt="Changed TFS Work Items" title="Changed TFS Work Items" />
</p><p>The log file shows that only the modified work item has been processed by the script.</p>{% highlight text %}Updating title of task '12' for project 'Demo Project' from 'Simple Bug' to 'Simple Bug (added more info)'.
Updating project update date for 'Demo Project' from '05/22/2013 22:05:45' to '05/23/2013 14:43:26'.{% endhighlight %}<p>Looking at the list of tasks in time cockpit we see that our project now has the latest version of all the work items and we are ready to assign our time bookings to these tasks.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/05/tfs2.png" alt="Work Items as Tasks" title="Work Items as Tasks" />
</p><h2>Wrap-Up</h2><p>This example shows a small and simple import from TFS. It can be extended to include more information in the import or to push back information to TFS (e.g. actual efforts calculated by aggregating the time bookings per task). We are also evaluating to add this functionality as an out of the box feature for time cockpit and would love to hear your feedback.</p>