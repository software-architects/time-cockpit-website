---
layout: blog
title: Warning Emails in Case of Budget Overrun
excerpt: Regularly, customers ask us how to send emails when certain things happen in time cockpit (e.g. project runs out of budget, user creates time sheet record for a month that has already been billed, etc.). In this blog post we show how this can be done with a few lines of script code and our OData Web API.
author: Rainer Stropek
date: 2014-05-30
bannerimage: 
lang: en
tags: [Azure,OData,time cockpit]
permalink: /blog/2014/05/30/Warning-Emails-in-Case-of-Budget-Overrun
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/05/ProjectOverrunSample/ProjectOverrunTitle.jpg" />Image source: <a href="https://www.flickr.com/photos/angrylambie/3410110305/" target="_blank">https://www.flickr.com/photos/dok1/6555922825/</a>, under <a href="https://creativecommons.org/licenses/by/2.0/deed.de" target="_blank">Creative Commons</a> License</div><h2>Introduction</h2><p>Regularly, customers ask us how to send emails when certain things happen in time cockpit (e.g. project runs out of budget, user creates time sheet record for a month that has already been billed, etc.). In this blog post we show how this can be done with a few lines of script code and the following <span lang="EN-US">ingredients</span>:</p><ul>
  <li>We are going to use our <a href="http://www.timecockpit.com/blog/2014/04/27/Adding-Web-to-our-API" target="_blank">OData Web API</a> to query all projects that have a budget overrun.
</li>
  <li>For sending nicely formatted emails, we are going to use the <a href="http://mandrill.com/" target="_blank">Mandrill</a> service. We use this service in lots of projects and are quite happy with it.</li>
  <li>We schedule our script in Microsoft Azure. For that, we use <a href="http://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/" target="_blank">Azure's WebJob</a> feature. This would only cost us a few dollars per month.</li>
</ul><p>Please note that the code in this blog article is just to demonstrate the approach. It lacks of many features (e.g. error handling) that would be needed for production.</p><p class="showcase">You are interested in such automatisms for time cockpit but you do not feel comfortable with JavaScript, nodejs, Azure &amp; Co.? Contact us at <a href="mailto:support@timecockpit.com,">support@timecockpit.com,</a> we would be more than happy to help.</p><h2>The Query</h2><p>New to time cockpit extensibility? If yes, take a look at <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL, time cockpit's domain-specific query language</a>.</p><p>For our example we need to find all projects where the total number of hours is greater than the projects' budget. The following screenshot shows how to develop the query in time cockpit's <em>Administration</em> module (click to enlarge):</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:44f8551b-b499-4b56-bc73-8192fecdc92f" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><h2>The Script</h2><p>The JavaScript script for querying time cockpit and sending the mails is quite simple. Here is the code including comments describing what is done:</p>{% highlight javascript %}// Get the necessary node modules (needle for http post, mandrill for emails)
var needle = require('needle');
var mandrill = require('mandrill-api/mandrill');

// Query for finding all projects with budget overrun
var tcql = { 
    "query": "From P In Project \
        Where (From T In P.Timesheets Select New With { .TotalHours = Sum(T.DurationInHours) }) > P.BudgetInHours \
        Select New With { \
            P.Code, \
            P.Description, \
            P.BudgetInHours, \
            .TotalEffectiveHours = (From T In P.Timesheets Select New With { .TotalHours = Sum(T.DurationInHours) }) \
        }" };
var dataToSend = JSON.stringify(tcql);

// Send query to time cockpit's OData Web API
needle.post(
    "https://apipreview.timecockpit.com/select", 
    dataToSend,
    { 
        // Add your time cockpit user/password here
        username: "youruser@yourcompany.com", 
        password: "Y0urP@ssw0rd",
        auth: "basic",
        headers : {
            accept: "application/json",
            "Content-Type": "application/json"
        }
        
    },
    function(err, resp, body) {
        // Create a mandrill client using mandrill's SDK
        var mandrill_client = new mandrill.Mandrill('K4blHXQqhN3I6gZc0FHtpw');
        
        // The email content is driven by a template. Here we set up the
        // merge fields used in the template.
        var mergeVariables = [{
                "name": "PROJECTNAME",
                "content": null // will be filled inside the following loop
            }];
        var template_name = "Project Overrun";
        var message = {
            // In practice you might want to replace the recipient to e.g.
            // the project manager stored in time cockpit's database. For demo
            // purposes we use a static email address here.
            "to": [{ "email": "rainer@timecockpit.com" }],
            "merge": true,
            "global_merge_vars": mergeVariables
        };
        
        // Loop over all projects with budget overrun
        for(var counter = 0; counter < body.value.length; counter++) {
            // Set merge field
            mergeVariables[0].content = body.value[counter].USR_Code;

            // Print a status message
            console.log("Sending message concerning overrun in project " + body.value[counter].USR_Code);
    
            // Send email using Mandrill
            mandrill_client.messages.sendTemplate({
                "template_name": template_name, 
                "template_content": null, 
                "message": message});
        }
    });{% endhighlight %}<p>The script uses two nodejs modules: <em>needle</em> for sending http requests and the <em>mandrill</em> SDK for sending emails through the Mandrill service. We need to make these two modules available for our script. Therefore we create a <em>package.json</em> file:</p>{% highlight javascript %}{
  "name": "ProjectOverrunSample",
  "version": "0.1.0",
  "dependencies": {
    "mandrill-api": "1.0.x",
    "needle": "0.7.x"
  }
}{% endhighlight %}<p>That's it. That's all the code you need. You can test this script on your local machine. To make that easier, we created a batch file:</p>{% highlight text %}call npm install
call node SendEmail.js{% endhighlight %}<function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:1b26ebe3-9bcd-4843-b3ce-df2291f6f291" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ImageMaxWidth" value="1920" />
</function><h2>Setting Up Mandrill</h2><p>As mentioned above, we use the <a href="http://mandrill.com/">Mandrill</a> service to send emails. It allows us to setup a template for emails and merge it with data from time cockpit (similar to a mail merge in Microsoft Word). The following screenshot shows the sample template that we have created for this demo (click to enlarge). Note the merge field <em>*|PROJECTNAME|*</em>. You can find this merge field name in the script shown above, too.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:b906748b-2619-444f-a962-30604a20b2d8" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ImageMaxWidth" value="1920" />
</function><h2>Scheduling the Script in Azure</h2><p>In order to let the script run regularly, you could schedule it on a local PC or server. An alternative is to schedule it as a use <a href="http://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/" target="_blank">WebJob</a> in Microsoft Azure. WebJobs are very convenient. You just have to put everything you need (in our case the script, the package.json file and the batch file) in a ZIP file, upload it to Azure and specify the schedule. That's it.</p><p>Here are the steps you have to do:</p><ul>
  <li>
    <a href="http://azure.microsoft.com/en-us/pricing/free-trial/" target="_blank">Get an Azure subscription</a> if you do not already have one.</li>
  <li>Login to <a href="https://manage.windowsazure.com" target="_blank">Azure's management portal</a>.</li>
  <li>Create a Website
<br /><function name="Composite.Media.ImageGallery.Slimbox2"><param name="MediaImage" value="MediaArchive:c8fae3cf-db1b-49f1-b215-c39aceb063c1" /><param name="ThumbnailMaxWidth" value="800" /><param name="ImageMaxWidth" value="1920" /></function></li>
  <li>Click on <em>WebJobs</em> and create a new job. You will have to upload the ZIP file mentioned above.
<br /><img src="{{site.baseurl}}/content/images/blog/2014/05/ProjectOverrunSample/CreateWebJob.png" /></li>
  <li>If you want, you can setup a schedule for the WebJob. For debugging purposes you can run it on demand, too (click to enlarge):
<br /><function name="Composite.Media.ImageGallery.Slimbox2"><param name="MediaImage" value="MediaArchive:885ff480-2823-4225-bf77-ecdf5595d010" /><param name="ThumbnailMaxWidth" value="800" /><param name="ImageMaxWidth" value="1920" /></function></li>
</ul><p>Congratulations, mission completed. Your script will now run regularly and inform your project managers in case of budget overruns.</p>