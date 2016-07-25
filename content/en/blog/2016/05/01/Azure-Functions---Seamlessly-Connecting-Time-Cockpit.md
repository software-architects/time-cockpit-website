---
layout: blog
title: Azure Functions - Seamlessly Connecting Time Cockpit
teaser: In nearly every time cockpit implementation project, we have to integrate time cockpit with upstream and downstream systems like CRM, accounting, billing, etc. Additionally, customers want to automate workflows like handling working time violations or vacation requests. In the past, we typically used Azure WebJobs for that. Recently, Microsoft announced an improved successor -  Azure Functions. In this blog article we introduce Azure Functions and show how they can be used with time cockpit.
author: Rainer Stropek
date: 2016-05-01
bannerimage: /content/images/blog/2016/04/function-hero-image-small.jpg
lang: en
permalink: /blog/2016/05/01/Azure-Functions---Seamlessly-Connecting-Time-Cockpit
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/function-hero-image.jpg" />
</p><p class="imageCaption">Image source: <a href="https://flic.kr/p/8tHxFC" target="_blank">https://flic.kr/p/8tHxFC</a>, <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons</a> License</p><p>In nearly every time cockpit implementation project, we have to integrate time cockpit with upstream and downstream systems like CRM, accounting, billing, etc. Additionally, customers want to automate workflows like handling working time violations or vacation requests. In the past, we typically used <a href="https://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/" target="_blank">Azure WebJobs</a> for that. Recently, Microsoft announced an improved successor: <a href="https://azure.microsoft.com/en-us/services/functions/" target="_blank">Azure Functions</a>. In this blog article we introduce Azure Functions and show how they can be used with time cockpit.</p><h2>Background Information</h2><p>The original intent of Azure WebJobs was to make it simple for web site developers to automate background processing. Imaging you develop your company's website and you want to automatically create small thumbnail images from uploaded high-res pictures. Azure WebJobs were created for tasks like that. You can create them in various programming languages (e.g. C#, Node.js, batch scripts) and they have a scheduler built-in.</p><p>However, Azure WebJobs don't necessarily process data of the web site they are hosted in. Essentially, they are just pieces of code that can read, process, and write data from any location. Being part of the <a href="https://azure.microsoft.com/en-us/services/app-service/" target="_blank">Azure App Service</a> product, WebJobs have a free pricing tier for applications that don't need much memory and processor time. If all you need is to transfer data from one SaaS system (e.g. time cockpit) to another SaaS system (e.g. billing), you will need only very few resources. Therefore, free WebJobs were the perfect tool for the job - until Azure Functions came out recently.</p><p>Let's look at an example. Like some of our customers, we use <a href="https://www.zendesk.com" target="_blank">Zendesk</a> for handling customer support. A scheduled Azure WebJob could care for regularly polling Zendesk using its <a href="https://developer.zendesk.com/rest_api/docs/core/introduction" target="_blank">RESTful Web API</a>. It could find detect new support tickets and create them in time cockpit using <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">time cockpit's Web API</a>.</p><p class="showcase">Note that Azure AppServices support accessing on premise systems via <a href="https://azure.microsoft.com/en-us/documentation/articles/integration-hybrid-connection-overview/" target="_blank">Hybrid Connections</a>. You can find an example in our blog article <a href="~/blog/2015/05/18/Integrating-On-Premise-Resources-Into-Time-Cockpit-" target="_blank">Integrating On-Premise Resources Into Time Cockpit</a>.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/timecockpit-zendesk-webjob.png" />
</p><p>Another use case for a WebJob could be sending out notification emails e.g. in case of a budget overrun. A scheduled Azure WebJob could use time cockpit's RESTful web API to regularly search for critical projects. It could then use an email services like e.g. <a href="http://mandrill.com/" target="_blank">Mandrill</a> to send notifications.</p><p class="showcase">You can find an example for a script sending out notification emails in in our blog articles <a href="~/blog/2014/05/30/Warning-Emails-in-Case-of-Budget-Overrun" target="_blank">Warning Emails in Case of Budget Overrun</a>.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/time-cockpit-email-notification.png" />
</p><h2>Enter Azure Functions</h2><p>As you can see, Azure WebJobs are a very useful and versatile tool. However, they have some drawbacks, too. Here are some examples:</p><ul>
  <li>WebJobs were originally intended as helpers for background processing in the context of a web app. It feels somehow strange that you have to create a web app just to get to a WebJob. WebJobs often don't come to people's minds when they don't want a website but just a way of connecting two SaaS applications.</li>
  <li>You have to develop a WebJob's code in a separate editor or development environment. Then, you have to package it in a ZIP file. That ZIP file can be uploaded to your Azure Web App. This is an unnecessarily complex workflow. Wouldn't it be nice to have an online editor where you can just write your script directly in the browser?</li>
  <li>Today, many SaaS solutions offer <a href="https://en.wikipedia.org/wiki/Webhook" target="_blank">Webhooks</a>. They can call downstream systems via HTTP whenever data is changed. With that, integration solution do no longer have to poll. They get actively called whenever something important happens. WebJobs offer some functionality in that direction, but it is far from perfect.</li>
</ul><p>In reaction to these drawbacks, Microsoft recently announce a brand new Azure Feature: <a href="https://azure.microsoft.com/en-us/services/functions/">Azure Functions</a>. They solve all the problems mentioned above.</p><p class="showcase">Although the final pricing of Azure Functions has not been announced yet, Microsoft has already made it clear that there will be a free tier again. So just like with WebJobs in the past, you will get small integration scripts for free with Azure Functions, too. Read more about <a href="https://azure.microsoft.com/en-us/pricing/details/functions/" target="_blank">pricing of Azure Functions</a>.</p><h2>Sample</h2><p>Enough theory, let's look at an example. Note that you need an Azure subscription if you want to follow along. Although you have to enter a credit card to prove that you are a real person, Azure functions are free. You will net get charged as long as you just use free services. You can even protect yourself from unpleasant surprises by setting up a <a href="https://azure.microsoft.com/en-us/pricing/spending-limits/" target="_blank">spending limit for Azure</a>.</p><h3>Setting up Azure Functions</h3><p>
  <a href="https://functions.azure.com/signin" target="_blank">Start here with Azure Functions</a>:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/create-first-azure-function.png?mw=1920" />
</p><p>Once you create your first function as shown above, Azure will create a new App Service called <em>AzureFunctions-WestEurope</em>. It is a regular Azure App Service so you can configure, monitor and maintain it as usual.</p><p class="showcase">You are new to Azure App Services? I recently did a workshop about it at the .NET Summit in Munich. Feel free to use <a href="rstropek.github.io/DotNetSummitAzureAppServices/" target="_blank">the slides of my Azure App Services workshop</a> as a starting point for exploring this great Azure service.</p><h3>Creating Your First Function</h3><p>In our example, we create a timer-based function. It is called regularly based on a time schedule that you can define. Timer functions are the easiest way to start with Azure Functions. Once you master them, move on to more elaborate scenarios like Webhooks or queue-based system integrations.</p><p>Let's start by creating a new function from scratch:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/create-function-step-1.png" />
</p><p>Next, we select the appropriate template. As you can see, there are lots of templates available that make it easier for you to start. As mentioned above, we are using a timer functions to begin with. The programming language in this example will be C#:</p><p class="showcase">Note that the schedule is defined based on a <a href="https://en.wikipedia.org/wiki/Cron#CRON_expression" target="_blank">Cron expression</a>. There are many Cron expression builders available on the web (e.g. <a href="http://www.cronmaker.com/" target="_blank">Cronmaker</a>).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/create-function-step-2.png" />
</p><h3>Sample Code</h3><p>The good news is that you don't need to write a complete C# application for Azure Functions. It uses C# Scripts instead (came recently with Visual Studio 2015 Update 1; <a href="https://msdn.microsoft.com/en-us/magazine/mt614271.aspx" target="_blank">read more about C# Scripting</a>). Of course, the code of the function depends on your specific needs. However, here is a sample script querying time cockpit's <em>Country</em> table and writing the result to the function's log. You can use it as a starting point to create your time cockpit integration script.</p>{% highlight javascript %}#r "System.Configuration"
#r "Newtonsoft.Json"

using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json; 

const string timeCockpitBaseUrl = "https://api.timecockpit.com";

public static string Base64Encode(string plainText) => Convert.ToBase64String(Encoding.UTF8.GetBytes(plainText));

public static async Task Run(TimerInfo myTimer, TraceWriter log)
{
    string timeCockpitAuth = ${body}quot;{ConfigurationManager.AppSettings["tcUser"]}:{ConfigurationManager.AppSettings["tcPassword"]}";
    using (var client = new HttpClient())
    { 
        var queryObject = new { query = "From C In Country Select C" };
        using (var request = new HttpRequestMessage
            {
                RequestUri = new Uri(${body}quot;{timeCockpitBaseUrl}/select"),
                Method = HttpMethod.Post,
                Content = new StringContent(JsonConvert.SerializeObject(queryObject), Encoding.UTF8, "application/json")
            })
        {
            request.Headers.Add("Authorization", ${body}quot;Basic {Base64Encode(timeCockpitAuth)}");
            
            using (var response = await client.SendAsync(request)) 
            {
                log.Verbose(await response.Content.ReadAsStringAsync());
            }
        }
    }
}{% endhighlight %}<h3>Handling Secrets</h3><p>Whenever you access time cockpit (same is true for many other systems), you need to authenticate using user and password, a token or something similar.</p><p class="showcase">Never write such security-critical setting directly in your code!</p><p>You should store such secrets in your function's <em>Application Settings</em> instead. Here is where you can find them:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/functions-app-settings.png" />
</p><p>Here you see how you enter time cockpit user and password for our sample script:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/04/functions-user-password-settings.png" />
</p><h3>Run Your Function</h3><p>That's it. You can run your function manually or wait until the scheduler starts it.</p><h2>Summary</h2><p>Azure Functions are a great way of automating SaaS integration scenarios. Whenever you used WebJobs for that in the past, consider Azure Functions in the future.</p><p class="showcase">Questions regarding integrating time cockpit with your systems? Feel free to contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We would be happy to help!</p>