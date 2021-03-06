---
layout: blog
title: Importing Data from Visual Studio Online Using Web Hooks
teaser: We at software architects adapt time cockpit to the needs of our customers every day. Most of our customers have well established processes or tools in place which drive their business. Time cockpit offers multiple options for integrating with upstream systems like Visual Studio Online (VSO), Jira, or Dynamics NAV. Today we want to describe how you can connect time cockpit to VSO using web hooks.
author: Alexander Huber
date: 2015-03-30
bannerimage: /content/images/blog/2015/03/webhooks_550.png
lang: en
permalink: /blog/2015/03/30/Importing-Data-from-Visual-Studio-Online-Using-Web-Hooks
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/03/webhooks_1000.png" style="width: 100%;" />
</p><p>Although time cockpit is a standard product, it was designed from the beginning to be easily customizable. In fact, we at software architects adapt time cockpit to the needs of our customers every day. Most of our customers have well established processes or tools in place which drive the customers' business. Those processes or tools will not be replaced just because a new time tracking tool like time cockpit is introduced (although there is a good deal of process optimization and data consolidation sometimes). On the other hand, time cockpit cannot live on its own in larger companies. It lives from base data already stored in some other system. </p><p>When we start a time cockpit customization project with a customer there are certain questions we always ask. Some of the questions are:</p><ul>
  <li>What is the scope you are tracking your time on (project, task, customer...)?</li>
  <li>How is your company structured and what roles are there?</li>
  <li>What reports do you need to run your business?</li>
  <li>And, perhaps most importantly: <strong>What upstream/downstream systems do you have that exchange data with time cockpit?</strong></li>
</ul><p>To integrate data from upstream systems, we usually implement little pieces of source code that read data from e.g. a SQL database or a web service and import it into time cockpit. However, recently we implemented two imports that were a bit more challenging: </p><ul>
  <li>An import that pushes data from <a href="https://www.visualstudio.com/products/what-is-visual-studio-online-vs" target="_blank"><em>Microsoft Visual Studio Online</em></a> into time cockpit using via <em>Web Hooks</em>.</li>
  <li>An import that runs in Microsoft Azure but connects to an on-premise <a href="http://www.microsoft.com/en-us/dynamics/erp-nav-overview.aspx" target="_blank"><em>Microsoft Dynamics NAV</em></a> database.</li>
</ul><br /><h2>Microsoft Azure Web Jobs</h2><p>To perform imports or exports periodically (from e.g. <em>Visual Studio Online</em> or a SQL database), we usually implement so called <a href="http://www.hanselman.com/blog/IntroducingWindowsAzureWebJobs.aspx">Azure WebJobs</a>. Web jobs are similar to scheduled tasks in Windows only that they run in the cloud in <a href="http://azure.microsoft.com" target="_blank">Microsoft Azure</a>. The nice thing is that they are (at the moment of this writing) completely free. The only thing you need to do as a developer is to create your own Microsoft Azure subscription and add a web app. </p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:b15be08c-0200-4cfc-a1ac-d6024163fae1" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function><p>In the free web app you can add your web jobs. For our integration scenarios we implement simple console applications (*.exe) that are uploaded to Microsoft Azure. However, you can upload various other executable resources (<a href="http://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/" target="_blank">list of supported formats</a>).</p><p>When uploading your console applications you can choose from three different schedules. You can</p><ol>
  <li>run your web job <em>on demand</em></li>
  <li>run your web job <em>on a specific schedule</em></li>
  <li>run your web job <em>contiuously</em></li>
</ol><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:2b256395-6bf9-4e4e-836c-cb0a5b91628d" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function><h2>A Push Scenario with Web Hooks</h2><p>For most of our customers we implement web jobs that run on schedule. They fetch data from a given source and import it into time cockpit with our <a href="~/blog/2014/09/26/Accessing-Time-Cockpits-OData-Web-API-With-Visual-Studio" target="_blank">OData API</a>. The web jobs are scheduled to run e.g. once per day or every three hours, but not continuously.</p><p>One of our new customers uses <a href="https://www.visualstudio.com/pricing/visual-studio-online-pricing-vs" target="_blank">Visual Studio Online</a> (VSO) heavily. They use VSO to e.g. manage the work items of multiple scrum teams. Of course, VSO would offer a <a href="https://www.visualstudio.com/en-us/integrate/api/overview">REST API</a> that can be used to read work items from. So it would not be a problem to write a web job that fetches new work items from VSO e.g. every few hours. However, there are two drawbacks of such a polling approach:</p><ol>
  <li>A VSO user is needed to connect and read work items. Time cockpit would need to manage the user credentials in a secure way.</li>
  <li>In a worst case scenario it would take the configured amout of hours of the web job for a new work item to be imported. That is not very convenient if users want to quickly create their time records for the newly created work items.</li>
</ol><p>One possible solution is using so called <em>web hooks</em>. According to <a href="http://en.wikipedia.org/wiki/Webhook" target="_blank">Wikipeda</a> a web hook is ... </p><p class="showcase">"... a method of augmenting or altering the behavior of a <a title="Web page" href="http://en.wikipedia.org/wiki/Web_page">web page</a>, or <a title="Web application" href="http://en.wikipedia.org/wiki/Web_application">web application</a>, with custom <a title="Callback (computer programming)" href="http://en.wikipedia.org/wiki/Callback_(computer_programming)">callbacks</a>. These callbacks may be maintained, modified, and managed by third-party users and developers who may not necessarily be affiliated with the originating website or application."</p><p>But how can a web hook be used to implement a push import scenario? In VSO you can define various web hooks (actually web hooks are called <em>service hooks</em> in VSO) which post some JSON messages to a given message queue (in our scenario an <em>Azure Storage Queue</em>) whenever a certain event happens in VSO. The events we are interested in for our integration scenario are <em>Work item created</em> and <em>Work item updated</em>.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:8f5b3010-3444-4c03-b7fd-6fae5467cf69" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function><h3>Configuring a Web Hook</h3><p>The following screenshot shows the important configuration step of the <em>Work item created</em> web hook. The important settings for the web hook are:</p><ul>
  <li>
    <em>Storage account name</em>: Specifies the name of the Azure storage account that contains the message queue you want the web hook to post the messages to.</li>
  <li>
    <em>Storage account key</em>: Specifies the key of the Azure storage account that contains the message queue you want the web hook to post the messages to.</li>
  <li>
    <em>Queue name</em>: Name of the message queue the web hook posts the messages to.</li>
</ul><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:2ba77be7-06fe-4ed4-83b7-6f0d0631d0e1" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function><p>And that's basically it. Whenever a work item is created in VSO the web hook posts a JSON message to the message queue. </p><h3>
  {% highlight javascript %}{
    "id":"416a5d89-9a7d-4116-a476-e1b53b0a7989",
    "eventType":"workitem.created",
    "publisherId":"tfs",
    "message":null,
    "detailedMessage":null,
    "resource":{
        "id":99,
        "rev":2,
        "fields":{
            "System.AreaPath":"customer.TimeCockpit",
            "System.TeamProject":"customer.TimeCockpit",
            "System.IterationPath":"customer.TimeCockpit",
            "System.WorkItemType":"Product Backlog Item",
            "System.State":"New",
            "System.Reason":"New backlog item",
            "System.CreatedDate":"2015-03-25T14:13:33.74Z",
            "System.CreatedBy":"Alexander Huber <alexander.huber@software-architects.at>",
            "System.ChangedDate":"2015-03-25T14:13:34.247Z",
            "System.ChangedBy":"Alexander Huber <alexander.huber@software-architects.at>",
            "System.Title":"US2",
            "Microsoft.VSTS.Common.BacklogPriority":999968378.0,
            "WEF_6FEC0B85A7B44F0A9E5C593CFB2B9923_Kanban.Column":"New",
            "WEF_6FEC0B85A7B44F0A9E5C593CFB2B9923_Kanban.Column.Done":false
        },
        "_links":{
            "self":{
                "href":"https://timecockpit.visualstudio.com/DefaultCollection/_apis/wit/workItems/99"
            },
            "workItemUpdates":{
                "href":"https://timecockpit.visualstudio.com/DefaultCollection/_apis/wit/workItems/99/updates"
            },
            "workItemRevisions":{
                "href":"https://timecockpit.visualstudio.com/DefaultCollection/_apis/wit/workItems/99/revisions"
            },
            "workItemHistory":{
                "href":"https://timecockpit.visualstudio.com/DefaultCollection/_apis/wit/workItems/99/history"
            },
            "html":{
                "href":"https://timecockpit.visualstudio.com/web/wi.aspx?pcguid=788898a5-293e-4f98-95ec-76745e3546b0&id=99"
            },
            "workItemType":{
                "href":"https://timecockpit.visualstudio.com/DefaultCollection/5433c2ed-09b4-4c16-93e1-08b440c6f9b1/_apis/wit/workItemTypes/Product%20Backlog%20Item"
            },
            "fields":{
                "href":"https://timecockpit.visualstudio.com/DefaultCollection/_apis/wit/fields"
            }
        },
        "url":"https://timecockpit.visualstudio.com/DefaultCollection/_apis/wit/workItems/99"
    },
    "resourceVersion":"1.0",
    "resourceContainers":{
        "collection":{
            "id":"788898a5-293e-4f98-95ec-76745e3546b0"
        },
        "account":{
            "id":"95d4d3b2-7815-4e93-a7be-b8f353767e88"
        },
        "project":{
            "id":"5433c2ed-09b4-4c16-93e1-08b440c6f9b1"
        }
    },
    "createdDate":"2015-03-25T14:13:33.5133467Z"
}{% endhighlight %}Processing a Web Hook Message</h3><p>As mentioned earlier, there are different types of web jobs. To process the message that was posted by the web hook we use a web job that runs continuously. Whenever the web job discovers a new entry in the message queue, it picks up the message and processes it. </p><p>As for the console application that is continuously run by the web job, we want to share three code snippets that help you get started. First, you need to configure the credentials that are used to connect to the Microsoft Azure Storage account that contains the queue receiving the web hook messages. The credentials are configured in your <em>App.config</em> file and may look like the following:</p><p>
  {% highlight xml %}<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <connectionStrings>
        <!-- The format of the connection string is "DefaultEndpointsProtocol=https;AccountName=NAME;AccountKey=KEY" -->
        <!-- For local execution, the value can be set either in this config file or through environment variables -->
        <add name="AzureWebJobsDashboard" connectionString="DefaultEndpointsProtocol=https;AccountName=XXX;AccountKey=XXX" />
        <add name="AzureWebJobsStorage" connectionString="DefaultEndpointsProtocol=https;AccountName=XXX;AccountKey=XXX" />
    </connectionStrings>
    ...
</configuration>{% endhighlight %}Next, we need to tell the web job that it should listen for changes in the message queue and run the actual functions that process the message. The heavily lifting is done by the  <em>JobHost<strong>.</strong></em> The <em>JobHost</em> is configured in the <em>main</em> method of our console application that we use to process the web hook messages and uses the connection strings from our <em>App.config</em> file.</p>{% highlight c# %}using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;

class Program
{
    static void Main()
    {
        var config = new JobHostConfiguration();
        config.Queues.BatchSize = 1; // no concurrent invocation
        var host = new JobHost(config);
        host.RunAndBlock();
    }
}{% endhighlight %}<p>Last, we need to tell the <em>JobHost</em> what method to run when a new JSON message is discovered in the message queue. You can call the function that does the processing whatever you like, but it needs to fulfill the following two requirements:</p><ol>
  <li>The method that processes the message needs to be <em>static</em> (at the time of writing).</li>
  <li>The method that processes the message needs to have a parameter that is decorated with the <em>QueueTrigger</em> attribute.</li>
</ol>{% highlight c# %}public static void ProcessQueueMessage([QueueTrigger("vso-work-item")] string message, TextWriter log)
{
    var command = JObject.Parse(message);
    if (command.Property("eventType") == null)
    {
        Console.Error.WriteLine("Could not determine event type for message: {0}", message);
        return;
    }

    var eventType = (string)command["eventType"];
    var url = string.Empty;
    switch (eventType)
    {
        case "workitem.created":
            CreateWorkItem(command, log);
            break;
        case "workitem.updated":
            UpdateWorkItem(command, log);
            break;
        default:
            Console.Error.WriteLine("Unexpected event type {1} for message: {0}", message, eventType);
            break;
    }
}{% endhighlight %}<p>The above listing shows some sample code that can be used to process a VSO web hook message. The most imporant part of the code is the <em>QueueTrigger</em> attribute. As mentioned earlier, it tells the <em>JobHost</em> to execute it whenever it discovers a new message in the message queue. Also note that in the attribute you tell the JobHost which queue it should actually listen to.</p><p>Of course the processing of the JSON message depends on the given use case. As for our integration scenario, we parse the JSON message and decide whether the message represents an update or a create. If the message represents a create operation, we create a corrensponding task in time cockpit. If the message represents an update operation, we update the given task in time cockpit with the values from VSO. </p>