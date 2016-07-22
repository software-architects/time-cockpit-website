---
layout: blog
title: Importing JIRA Issues as Time Cockpit Tasks
teaser: Time cockpit allows you to assign time bookings to tasks and projects. If you are using JIRA for planning and bug tracking, this article shows you how to import issues from JIRA into time cockpit in order to use them for time booking. This can be achieved by using the REST API provided by JIRA and a small python script in time cockpit.
author: Simon Opelt
date: 2013-04-30
bannerimage: 
lang: en
permalink: /blog/2013/04/30/Importing-JIRA-Issues-as-Time-Cockpit-Tasks
---

<h2 xmlns="http://www.w3.org/1999/xhtml">Overview</h2><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="http://www.atlassian.com/software/jira/overview" target="_blank">JIRA</a> is an issue tracking system which can be extended for agile teams by using <a href="http://www.atlassian.com/software/greenhopper/overview" target="_blank">GreenHopper</a>. It can be used for <a href="http://en.wikipedia.org/wiki/Scrum_(development)" target="_blank">Scrum</a> or <a href="http://en.wikipedia.org/wiki/Kanban_(development)" target="_blank">Kanban</a> and is adaptable to the details of your development process.</p><p xmlns="http://www.w3.org/1999/xhtml">To be able to create time sheet entries assigned to JIRA tasks they first have to be imported into time cockpit. We are planning to have this feature out of the box as well as a matching <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">signal tracker</a>, but for now it can be added via an IronPython <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">script</a> or a time cockpit <a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" target="_blank">action</a>. This article shows how to implement an action that imports JIRA tasks into time cockpit.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="http://www.timecockpit.com/blog/2013/05/31/TFS-Work-Items-as-Time-Cockpit-Tasks">A similar article is available which shows you how to import work items if you are using TFS.</a>
</p><p xmlns="http://www.w3.org/1999/xhtml">The full sample can be found at <a href="https://github.com/software-architects/TimeCockpit.Scripts/blob/master/TimeCockpit.Tasks.Jira/TimeCockpit.Tasks.Jira.py" target="_blank">our github repository</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Changes to the Data Model</h2><p xmlns="http://www.w3.org/1999/xhtml">To create a link between the projects in JIRA and time cockpit and to store the additional information contained in a JIRA issue several changes to the data model are necessary.</p><p xmlns="http://www.w3.org/1999/xhtml">The entity <strong>APP_Project</strong> has to be extended by an additional text property called <strong>JiraProject</strong> which will optionally (nullable) contain the <em>Key</em> of the corresponding JIRA project.</p><p xmlns="http://www.w3.org/1999/xhtml">Because JIRA issues might contain lots of additional (customizable) fields we picked a reasonable set for this example. We extended <strong>APP_Task</strong> by the following properties (all using the default setting except where stated otherwise):</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <strong>JiraUpdated</strong> (date time property) will contain the timestamp of the last change of the issue in JIRA which was already imported to the corresponding time cockpit task.</li>
  <li>
    <strong>JiraType</strong> (text property) contains the human-readable issue type (e.g. Bug, Story).</li>
  <li>
    <strong>JiraStatus</strong> (text property) contains the current human-readable status of the issue (e.g. Fixed).</li>
  <li>
    <strong>JiraLink</strong> (text property, maximum length 500) contains a hyperlink to the issue in JIRA's web frontend.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">To make additional use of the new properties (besides filtering or in interactive queries) the <a href="http://help.timecockpit.com/?topic=html/b24c40b5-05ce-4d71-8e62-751382eabd0e.htm" target="_blank">lists</a> and <a href="http://help.timecockpit.com/?topic=html/e50f3f06-9cfd-4dc2-bdeb-c56039045465.htm" target="_blank">forms</a> would have to be changed accordingly. This would for example allow to add an <em>UrlCell</em> to the form/list which shows a hyperlink to quickly jump into JIRA when working in time cockpit.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Simple JIRA Queries in IronPython</h2><p xmlns="http://www.w3.org/1999/xhtml">The <a href="https://developer.atlassian.com/display/JIRADEV/JIRA+REST+APIs" target="_blank">REST API provided by JIRA</a> can be accessed using .NET's <a href="http://msdn.microsoft.com/library/system.web.aspx" target="_blank">System.Web</a>, <a href="http://msdn.microsoft.com/library/system.net.aspx" target="_blank">System.Net</a> and <a href="http://json.codeplex.com/" target="_blank">Json.NET</a> which are all provided within time cockpit's scripting environment. The following sample contains two simple classes representing a JIRA issue (with all the fields relevant for this use-case) as well as the API access itself. It only uses basic authentication which requires a username and password which should be changed to <a href="http://en.wikipedia.org/wiki/OAuth" target="_blank">OAuth</a> for more critical production scenarios.</p>{% highlight javascript %}# JIRA API
class Issue(object):
    def __init__(self, key=None, type=None, summary=None, link=None, status=None, updated=None, timeOriginalEstimate=None, subTaskKeys=None):
        self.Key = key
        self.Type = type
        self.Summary = summary
        self.Link = link
        self.Status = status
        self.Updated = updated
        self.TimeOriginalEstimate = timeOriginalEstimate
        self.SubTaskKeys = subTaskKeys

class Jira(object):
    def __init__(self, repository, username, password):
        from System import Uri
        self.repository = Uri(repository)
        self.username = username
        self.password = password
        self.requestedFields = [ &quot;summary&quot;, &quot;issuetype&quot;, &quot;status&quot;, &quot;updated&quot;, &quot;timeoriginalestimate&quot;, &quot;subtasks&quot; ]

    def search(self, jql):
        clr.AddReference(&quot;System.Web&quot;)
        from System.Web import HttpUtility
        from System.Net import HttpWebRequest
        from System.IO import StreamReader
        clr.AddReference(&quot;Newtonsoft.Json&quot;)
        from Newtonsoft.Json import JsonTextReader
        from Newtonsoft.Json.Linq import JObject
        from System import Decimal
        import Newtonsoft.Json
        clr.ImportExtensions(Newtonsoft.Json.Linq)
        usernamepw = Convert.ToBase64String(Encoding.UTF8.GetBytes(String.Format(&quot;{0}:{1}&quot;, self.username, self.password)))

        fieldsparam = String.Join(&quot;,&quot;, self.requestedFields)
        requestUri = String.Format(&quot;{0}rest/api/2/search?jql={1}&amp;fields={2}&quot;, self.repository.AbsoluteUri, HttpUtility.UrlEncode(jql), fieldsparam)
        Logger.Write(LogLevel.Verbose, &quot;Jira.Search: {0}&quot;, requestUri)

        request = HttpWebRequest.Create(requestUri)
        request.ContentType = &quot;application/json&quot;

        request.Headers.Add(&quot;Authorization&quot;, &quot;Basic &quot; + usernamepw)

        request.Method = &quot;GET&quot;
        with request.GetResponse() as response:
            with StreamReader(response.GetResponseStream()) as sr:
                with JsonTextReader(sr) as jr:
                    result = JObject.Load(jr)
                    issues = result[&quot;issues&quot;]

                    items = list()
                    for issue in issues:
                        item = Issue()
                        item.Key = Newtonsoft.Json.Linq.Extensions.Value[String](issue[&quot;key&quot;])
                        fields = issue[&quot;fields&quot;]
                        item.Updated = Newtonsoft.Json.Linq.Extensions.Value[DateTime](fields[&quot;updated&quot;])

                        # transform seconds to hours
                        estimate = Newtonsoft.Json.Linq.Extensions.Value[System.Object](fields[&quot;timeoriginalestimate&quot;])

                        if estimate is not None:
                            estimate = Newtonsoft.Json.Linq.Extensions.Value[Decimal](fields[&quot;timeoriginalestimate&quot;])
                            estimate = estimate / (60.0 * 60.0)

                        item.TimeOriginalEstimate = estimate
                        status = fields[&quot;status&quot;]
                        item.Status = Newtonsoft.Json.Linq.Extensions.Value[String](status[&quot;name&quot;])
                        item.Summary = Newtonsoft.Json.Linq.Extensions.Value[String](fields[&quot;summary&quot;])
                        type = fields[&quot;issuetype&quot;]
                        item.Type = Newtonsoft.Json.Linq.Extensions.Value[String](type[&quot;name&quot;])
                        item.Link = self.repository.ToString() + &quot;browse/&quot; + item.Key

                        subTasks = fields[&quot;subtasks&quot;]
                        item.SubTaskKeys = System.Linq.Enumerable.Cast[JObject](subTasks).Select(lambda t: Newtonsoft.Json.Linq.Extensions.Value[String](t[&quot;key&quot;])).ToArray[String]()
                        items.Add(item)

                    return items;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Note that the <em>Jira</em> class currently only supports a single method <em>search</em> accepting a <a href="https://confluence.atlassian.com/display/JIRA/Advanced+Searching" target="_blank">JQL query</a> and returning a list of matching <em>Issue</em> instances. It is implemented by first building a get request containing the query, setting the authentication, getting the result and parsing it through Json.NET.</p><h2 xmlns="http://www.w3.org/1999/xhtml">One-Way Syncing the Data</h2><p xmlns="http://www.w3.org/1999/xhtml">The basic workflow of the core import functionality consists of the following steps:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Get all time cockpit projects which have a <em>JiraProject</em> name set.</li>
  <li>For each found project:

<ul><li>Get the maximum last updated JIRA timestamp of the tasks related to the current project.</li><li>Query all JIRA issues for the current project that have changed since the last import.</li><li>Insert or update a task in time cockpit for each JIRA issue.</li></ul></li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Of course there are some more details in the sample like transaction handling, exception handling, logging, batch-based selection of existing tasks and checks which avoid updating tasks if the corresponding issue only has changes in fields not relevant for us.</p>{% highlight javascript %}commit = True
timeDelta = 0.01

jira = Jira(&quot;https://....atlassian.net/&quot;, &quot;...&quot;, &quot;...&quot;)
jiraProjects = dc.Select(&quot;From P In Project Where :IsNullOrEmpty(P.JiraProject) = False Select P&quot;)

for jiraProject in jiraProjects:
    dc.BeginTransaction()
    try:
        jiraName = jiraProject.JiraProject
        Logger.Write(LogLevel.Information, &quot;JiraImport: Handling project '{0}'&quot;, jiraName)
        projectUuid = jiraProject.ProjectUuid

        lastUpdated = dc.SelectSingleWithParams({ &quot;Query&quot;: &quot;From T In Task Where T.Project = @ProjectUuid Select New With { .LastUpdated = Max(T.JiraUpdated) }&quot;, &quot;@ProjectUuid&quot;: projectUuid }).LastUpdated
        if lastUpdated is None:
            lastUpdated = DateTime(1970, 1, 1)
        
        jqlAdditionalCondition = String.Format(&quot; and updated &gt;= '{0}' order by updated asc&quot;, lastUpdated.ToString(&quot;yyyy-MM-dd HH:mm&quot;, CultureInfo.InvariantCulture))
        jql = String.Format(&quot;project='{0}'{1}&quot;, jiraName, jqlAdditionalCondition)
        issues = jira.search(jql).ToDictionary(lambda i: i.Key)

        if issues.Any():
            query = String.Format(&quot;From T In Task.Include(*) Where T.Project = @ProjectUuid And T.Code In ({0}) Select T&quot;, String.Join(&quot;, &quot;, issues.Select(lambda i: String.Format('&quot;{0}&quot;', i.Key)).ToArray()))
            tasks = dc.SelectWithParams({ &quot;Query&quot;: query, &quot;@ProjectUuid&quot;: projectUuid }).GroupBy(lambda t: t.Code).ToDictionary(lambda g: g.Key, lambda g: g.Single())

            newIssues = issues.Keys.Except(tasks.Keys).ToArray()
            updatedIssues = issues.Keys.Except(newIssues).ToArray()
        
            Logger.Write(LogLevel.Information, &quot;JiraImport: {0} new issues, {1} updated issues for query {2}&quot;, newIssues.Length, updatedIssues.Length, jql)
        
            for key in newIssues:
                issue = issues[key]
                task = dc.CreateTask()
                task.APP_BudgetInHours = issue.TimeOriginalEstimate
                task.APP_Code = issue.Key
                task.APP_Project = jiraProject
                task.USR_JiraLink = issue.Link
                task.USR_JiraStatus = issue.Status
                task.USR_JiraType = issue.Type
                task.USR_JiraUpdated = issue.Updated
                task.APP_Description = issue.Summary
                Logger.Write(LogLevel.Information, &quot;JiraImport: Adding task {0}&quot;, key)
                dc.SaveObject(task)

            for key in updatedIssues:
                changed = False
                task = tasks[key]
                issue = issues[key]

                if task.APP_BudgetInHours &lt;&gt; issue.TimeOriginalEstimate:
                    if (task.APP_BudgetInHours is None and issue.TimeOriginalEstimate is not None) or (task.APP_BudgetInHours is not None and issue.TimeOriginalEstimate is None) or (abs(task.APP_BudgetInHours - issue.TimeOriginalEstimate) &gt; timeDelta):
                        Logger.Write(LogLevel.Verbose, &quot;JiraImport: Changed property for task {0}: {1}&quot;, key, &quot;TimeOriginalEstimate&quot;)
                        task.APP_BudgetInHours = issue.TimeOriginalEstimate
                        changed = True
                if task.USR_JiraLink &lt;&gt; issue.Link:
                    Logger.Write(LogLevel.Verbose, &quot;JiraImport: Changed property for task {0}: {1}&quot;, key, &quot;Link&quot;)
                    task.USR_JiraLink = issue.Link
                    changed = True
                if task.USR_JiraStatus &lt;&gt; issue.Status:
                    Logger.Write(LogLevel.Verbose, &quot;JiraImport: Changed property for task {0}: {1}&quot;, key, &quot;Status&quot;)
                    task.USR_JiraStatus = issue.Status
                    changed = True
                if task.USR_JiraType &lt;&gt; issue.Type:
                    Logger.Write(LogLevel.Verbose, &quot;JiraImport: Changed property for task {0}: {1}&quot;, key, &quot;Type&quot;)
                    task.USR_JiraType = issue.Type
                    changed = True
                if task.USR_JiraUpdated &lt;&gt; issue.Updated:
                    Logger.Write(LogLevel.Verbose, &quot;JiraImport: Changed property for task {0}: {1}&quot;, key, &quot;Updated&quot;)
                    task.USR_JiraUpdated = issue.Updated
                    changed = True
                if task.APP_Description &lt;&gt; issue.Summary:
                    Logger.Write(LogLevel.Verbose, &quot;JiraImport: Changed property for task {0}: {1}&quot;, key, &quot;Summary&quot;)
                    task.APP_Description = issue.Summary
                    changed = True

                if changed:
                    Logger.Write(LogLevel.Information, &quot;JiraImport: Updating task {0}&quot;, key)
                    dc.SaveObject(task)
                else:
                    Logger.Write(LogLevel.Information, &quot;JiraImport: Skipping unchanged task {0}&quot;, key)

        if commit:
            dc.TryCommitTransaction()
        else:
            dc.TryRollbackTransaction()
    except System.Exception, e:
        dc.TryRollbackTransaction()
        Logger.Write(LogLevel.Warning, &quot;JiraImport: Exception while handling {0}: {1}\r\n{2}&quot;, jiraProject.JiraProject, e.Message, e.StackTrace){% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Wrap-Up</h2><p xmlns="http://www.w3.org/1999/xhtml">The shown example can be put together to form a script which can be <a href="http://help.timecockpit.com/?topic=html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" target="_blank">scheduled</a> or a time cockpit action which can be interactively executed. This ensures that your JIRA issues are usually just there when you need to book times on them or you can trigger an import for the few corner cases where you need an issue to be available earlier than the next import.</p><p xmlns="http://www.w3.org/1999/xhtml">There are lots of things that can be improved or adapted for production use (e.g. most installations currently only return 50 items per query which means that the query would have to be run in a loop until no new items are discovered) but this article should give an overview of what is possible.</p>