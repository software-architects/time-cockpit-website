---
layout: blog
title: Get Notified When a Project is Exceeding Its Budget
teaser: In this blog post we show you how to customize time cockpit so that project managers are notified via e-mail if a threshold of hours spent on a project is exceeded.
author: Alexander Huber
date: 2012-11-23
bannerimage: 
lang: en
permalink: /blog/2012/11/23/Get-Notified-When-a-Project-is-Exceeding-Its-Budget
---

<p xmlns="http://www.w3.org/1999/xhtml">Tracking the time you spend on your projects or tasks is helpful in many ways. First of all, it allows you to bill your customers for your services on an hourly basis. But it can be also quite helpful for project management. If you have projects that are either fixed price or capped, you are likely to define a budget in hours that is, the effort you plan to spend on a project. With the budget in place, accurate time tracking helps you to monitor the spent hours.</p><p xmlns="http://www.w3.org/1999/xhtml">In this blog post I would like to show you how to customize time cockpit so project managers are notified via e-mail if a threshold of hours spent on a project is exceeded. It will need the following steps to set up time cockpit to alert you when a certain budget threshold is exceeded:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Assign a project manager to a project</li>
  <li>Create an IronPython script that sends a notification mail to a project manager</li>
  <li>Schedule the script to run periodically</li>
</ol><h2 xmlns="http://www.w3.org/1999/xhtml">Assign a Project Manager to a Project</h2><p xmlns="http://www.w3.org/1999/xhtml">First, we need to be able to assign a project manager to a project. To achieve that, add a new relation to <em>UserDetail</em> to the <em>Project</em> entity. You can find a detailed description about how to do that in our online <a href="http://help.timecockpit.com/?topic=html/c64adad3-3ddb-49a9-b7f8-c9eff1a984ac.htm" title="Online Documenation">documentation</a>. In the following screenshot you see how the <em>Project</em> entity will look like after we added a relation to <em>UserDetail</em>.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/Blog Assets/Projectmanager.png" title="Project Entity" alt="Project Entity" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Further, we need to change the <em>Project</em> form to be able to assign a given user to a project as project manager. Again, you can find detailed information on how to define your own custom forms and lists in our online <a href="http://help.timecockpit.com/?topic=html/e50f3f06-9cfd-4dc2-bdeb-c56039045465.htm" title="Online Documenation">documentation</a>. Here I just like to show you how the project form could look like and the markup to define the given form. If you have not customized the project form already, you can copy the markup from the default form and create a new form. Otherwise add the ProjectManager BoundCell to your customized form.</p>{% highlight javascript %}&lt;Form ModelEntityName=&quot;APP_Project&quot; xmlns=&quot;clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data&quot;&gt;
  &lt;Tab Header=&quot;Project&quot;&gt;
    &lt;Section Header=&quot;General&quot;&gt;
      &lt;SectionColumn&gt;
        &lt;BoundCell Content=&quot;=Current.APP_Customer&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_Code&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_ProjectName&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.USR_Projectmanager&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_ExternalProjectCode&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_StartDate&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_EndDate&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_Description&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_Closed&quot; /&gt;
      &lt;/SectionColumn&gt;
    &lt;/Section&gt;
    &lt;Section Header=&quot;Budget&quot;&gt;
      &lt;SectionColumn&gt;
        &lt;BoundCell Content=&quot;=Current.APP_BudgetInHours&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_Budget&quot; /&gt;
      &lt;/SectionColumn&gt;
    &lt;/Section&gt;
    &lt;Section Header=&quot;Billing&quot;&gt;
      &lt;SectionColumn&gt;
        &lt;BoundCell Content=&quot;=Current.APP_Billable&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_FixedPrice&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_HourlyRateCustomer&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_HourlyRate&quot; /&gt;
        &lt;BoundCell Content=&quot;=Current.APP_InvoicingRules&quot; /&gt;
      &lt;/SectionColumn&gt;
    &lt;/Section&gt;
  &lt;/Tab&gt;
  &lt;BackReferenceTab BackReference=&quot;Invoices&quot; /&gt;
&lt;/Form&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">The result of the above markup will look like the following form. For spacing reasons, the screenshot only shows the first half of the actual form.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/Blog Assets/ProjectForm.png" alt="Project Form" title="Project Form" />
</p><p xmlns="http://www.w3.org/1999/xhtml">So now everything is set up to assign users to projects as project managers. In the next step we will write some IronPyhton code that notifies the project manager if a project budget is exceeded.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Create an IronPython Script that Sends a Notification Mail to the Project Manager</h2><p xmlns="http://www.w3.org/1999/xhtml">Before we get to the more meaty part, we need a couple of imports to be able to send the notification mails. The interesting imports for mailing are in the System.Net namespace. </p>{% highlight javascript %}clr.AddReference(&quot;System.Core&quot;)
import System
from System.Net.Mail import *;
from System.Net import NetworkCredential;
from System.Net.Mime import ContentType;
from System.Text import Encoding;
from System.Linq import Enumerable
from System import Func
clr.ImportExtensions(System.Linq){% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Now that we have all the necessary imports, we need to configure the SMTP server we want to use for sending mails. In the following snippet we have defined a dedicated function that does that for us. All you need to do is configure your SMTP server accordingly by inserting your username and password and the SMTP host name.</p>{% highlight javascript %}def setupSmtpServer():
    smtpServer = SmtpClient();
    smtpServer.Credentials = NetworkCredential(&quot;user&quot;, &quot;pass&quot;);
    smtpServer.Host = &quot;smtp.yourmailserver.com&quot;;
    smtpServer.Port = 25;
    return smtpServer{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">The next step for our notification system is getting all the projects that have exceeded a certain threshold of effort. The following snippet fetches all projects where the <em>BudgetInHours</em> is set. For each project with a budget in hours we sum up the duration of time sheet entries assigned to that project. Note that the function takes a parameter <em>thresholdInPercent</em>. The parameter is used to filter for all projects that exceed this threshold.</p>{% highlight javascript %}def getExceededProjects(thresholdInPercent):
    existingProjects = Context.Select(&quot;&quot;&quot;From T In Timesheet
        Where T.Project.BudgetInHours &lt;&gt; Null And T.NoBilling = False
        Select New With
        {
            T.Project.ProjectUuid,
            T.Project.Code,
            T.Project.Projectmanager,
            T.Project.BudgetInHours,
            .SumEffort = Sum(T.DurationInHours)
        }
        &quot;&quot;&quot;)
    
    return existingProjects.Where(lambda v: (v.SumEffort &gt;= v.BudgetInHours * thresholdInPercent)).ToDictionary(lambda c: c.Code, lambda c: c){% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Now that we have all the helper functions in place we can bring it all together. In the snippet below, we fetch all projects where the actual effort is 80% or higher of planned budget of hours. </p>{% highlight javascript %}try:
    server = setupSmtpServer()
    
    #get projects that got to 80% of the budget
    threshold = 0.8
    projects = getExceededProjects(threshold)
    for p in projects:
        mail = getMailMessage( 
                    &quot;manager@contoso.com&quot;, 
                    p.Value.Projectmanager.Username,  
                    String.Format(&quot;{0} reached {1}%&quot;, p.Key, threshold * 100),  
                    String.Format(&quot;Project &lt;b&gt;{0}&lt;/b&gt; reached &lt;b&gt;{1} %&lt;/b&gt; of the planned effort. &lt;br/&gt;The budget in hours was {2}. &lt;br/&gt;The actual effort is {3} hours!&quot;, p.Key, threshold * 100, p.Value.BudgetInHours, p.Value.SumEffort))
        server.Send(mail);

    print &quot;done&quot;
except Exception, e:
    raise{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">So all that is left to do is to schedule the whole script and run it periodically. You can find detailed information on how to do that in our online <a href="http://help.timecockpit.com/?topic=html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" title="Online Documentation">documentation</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">Now, whenever a project is nearing its budget of hours, the responsible project manager is notified via mail and can act accordingly. </p><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="{{site.baseurl}}/content/images/blog/2012/11/NotifyProjectManager.py" title="Notify Project Manager">Download the full IronPython script</a>
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Next Steps</h2><p xmlns="http://www.w3.org/1999/xhtml">As you can see, implementing a simple notification email is quite easy. It will be sufficient for a lot of scenarios. However, if you have business process management software (e.g. SharePoint workflows, PROLOGICS FireStart, Workflows in Microsoft DynamicsCRM) in place, you could also trigger a workflow or business process instead.</p>