---
layout: blog
title: How We Build and Run Time Cockpit Web Preview
excerpt: Last month we proudly launched the first public preview of the upcoming HTML5 client for time cockpit. When we started developing the new platform many months ago, we also decided that we had to rethink our entire build and operation processes. In this blog article I invite you to take a look behind the scenes of time cockpit web development. Additionally, I want to summarize our lessons learned.
author: Rainer Stropek
date: 2014-12-30
bannerimage: /content/images/blog/2014/12/Clouds.jpg
bannerimagesource: 
lang: en
tags: [Azure,time cockpit,Visual Studio]
permalink: /blog/2014/12/30/How-We-Build-and-Run-Time-Cockpit-Web-Preview
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2014/12/Clouds.jpg" />
</p><p>Last month we proudly launched the first public preview of the upcoming HTML5 client for time cockpit. When we started developing the new platform many months ago, we decided that we had to rethink our entire build and operation processes. In this blog article I invite you to take a look behind the scenes of time cockpit web development. Additionally, I want to summarize our lessons learned.</p><h2>Where We Started</h2><h3>On-Premise TFS</h3><p>Before we started developing the time cockpit web preview (plus underlying web services), our development process relied on an on-premise <a href="http://msdn.microsoft.com/en-us/vstudio/ff637362.aspx" target="_blank">Microsoft Team Foundation Server</a> (TFS). It had been the workhorse for time cockpit development for years. We customized it to a great extent (e.g. custom build process) in order to automate as many processes as possible.</p><p>Functionally, we were happy with our TFS. However, we were not happy with the time necessary to keep our TFS up and running. We are software developers and we want to focus on building time cockpit. Caring for an on-premise TFS server had been a task nobody in our team was passionate for.</p><h3>Microsoft Azure Cloud Services</h3><p>As you might know, time cockpit had been running in Microsoft’s cloud platform Azure since the very first days. At that time, <a href="http://azure.microsoft.com/en-us/services/cloud-services/" target="_blank">Cloud Services</a> were the technology of choice for running web sites and services on Azure.</p><p>Azure Cloud Services enabled us to forget about installing, maintaining, and running the web server clusters for time cockpit. Over the years, Cloud Services have proven to be extremely stable and reliable. However, there are drawbacks, too. The topic that we dislike most is deployment time.</p><h2>What We Wanted to Change</h2><p>Moving from WPF, Silverlight, and XAML to plugin-free web technology is a major milestone for us. So we decided that we want to take the opportunity and bring our development process to a next level as well.</p><p class="showcase">We defined three major goals for next generation time cockpit web development:</p><ol>
  <li>
    <strong>Get rid of the on-premise TFS.</strong>
    <br />
 Move source code control and automated build into the cloud (<a href="http://www.visualstudio.com/" target="_blank">Visual Studio Online</a>).</li>
  <li>
    <strong>Switch</strong> from Azure Cloud Services <strong>to <a href="http://azure.microsoft.com/en-us/services/websites/" target="_blank">Azure Websites</a> and enhance continuous deployment.</strong></li>
  <li>Start using innovative quality assurance methods like <strong>Data Driven Quality (DDQ) and Test-in-Production (TiP)</strong>.</li>
</ol><p>Following our <a href="http://en.wikipedia.org/wiki/Kanban_(development)" target="_blank">Kanban</a>-way of working, we decided to aim at achieving the above goals step by step. The following diagram shows the structure of time cockpit’s development and production environment as it is today. We are still continuously improving it. The following paragraphs describe different aspects of the diagram in more details.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/12/InfoDiagramBuild.png" />
</p><h2>Moving Source Control and Build to the Cloud</h2><p>Admittedly, we don’t like running servers. Therefore, we love ready-made platforms that allow us to focus on our core job: building the world’s greatest time tracking platform. We decided to give up our on-premise TFS in favor of Microsoft’s cloud service Visual Studio Online. In the project we had to make some hard decisions:</p><ol>
  <li>
    <strong>We did not migrate TFS history.</strong>
    <br />
 Migrating the entire history stored in TFS would have been a huge project for us. We decided to make a clear cut.</li>
  <li>
    <strong>We did not migrate legacy projects.</strong>
    <br />
 We decided to start the new web development projects in Visual Studio Online. Legacy code that will be deprecated in the next few months will never be migrated into the cloud. Migration of existing projects that will remain active is still work in progress.</li>
  <li>
    <strong>We switched from TFS version control to Git.</strong>
    <br />
 In our experience, Git is great for cloud scenarios. If you are on the road or you have troubles with your internet connection, you always have your entire source code repository with you.</li>
  <li>
    <strong>We automated more processes.</strong>
    <br />
 While deployment of NuGet packages and cloud services had been a (partly) manual process with our on-premise TFS, we decided to raise the level of automation when switch to Visual Studio Online’s hosted build controller.</li>
</ol><p class="showcase">We have been using Visual Studio Online for time cockpit for nearly a year now and we are very happy with the service. Together with <a href="http://www.myget.org/" target="_blank">myget</a>, the service we use for hosting our NuGet packages, the new cloud development environment perfectly supports our highly automated, agile way of working.</p><h2>Azure Websites Instead of Cloud Services</h2><p>Azure Websites immediately caught our attention when they came out. Compared to Cloud Services, Azure Websites take over even more management tasks. Additionally, they offers great integration with Visual Studio Online. Here is how the development process works:</p><ol>
  <li>Once a feature has been developed locally, the developer commits the changes to a DEV branch.</li>
  <li>The DEV branch is built and automated tests are running. If this process succeeds, the build result is installed into a DEV website on Azure.</li>
  <li>The DEV website is used internally for testing purposes. For that, it is connected to DEV databases.</li>
  <li>Once the feature has been successfully installed and tested in DEV, changes are committed to a PRODUCTION branch.</li>
  <li>The PRODUCTION branch is built and automated tests are running. If this process succeeds, the build result is installed into a staging slot of the PRODUCTION website on Azure.</li>
  <li>The staging slot is used internally and by early adopters. For that, it is connected to PRODUCTION databases.</li>
  <li>Once the feature has been successfully installed and tested in the staging slot, we use Azure Websites’ VIP swap functionality to put the new release into production. In case of any problems, we can easily switch back to the previous release.</li>
</ol><p class="showcase">If you are interested in the details of staged deployments with Azure Websites, you can <a href="http://azure.microsoft.com/en-us/documentation/articles/web-sites-staged-publishing/" target="_blank">read more here</a>.</p><p>To be honest, the process as outlined above is not live for all our projects. There are still some (preview) parts of time cockpit that rely on some manual steps instead of automated workflows. But that’s fine for us. As mentioned above, we follow the Kanban principles of incremental, evolutionary change.</p><h2>Data Driven Quality and Test in Production</h2><p class="showcase">If DDQ and TiP are new concepts for you, I recommend watching <a href="http://vimeo.com/95570706" target="_blank">Seth Eliot’s (Microsoft) presentation</a> on that topic.</p><p>Testing and quality assurance is a very important but also hard topic for all development teams including us. Where does test automation pay off? How to detect and fix bugs that made it into production as fast as possible? How to enable short iteration times while keeping the software quality high?</p><p>In the past, we often followed our gut feeling (sometimes also referred to as the <a href="http://whatis.techtarget.com/definition/HiPPOs-highest-paid-persons-opinions" target="_blank">HiPPO</a> principle) when it comes to software quality. We thought that we have a good feeling for what features are most important to our customers and where they typically have problems with time cockpit. We decided to move to a much more data-driven approach. For that, we defined some goals that will heavily influence our development in the upcoming months:</p><ol>
  <li>Gather aggregated, statistical usage data to understand which features are most important for our users. We will use that data to prioritize our development and test automation work.</li>
  <li>Complement synthetic tests (automated and manual) with test-in-production approaches (e.g. internal testers aka “<a href="http://en.wikipedia.org/wiki/Eating_your_own_dog_food" target="_blank">doogfooding</a>”, beta testers and early adopters, A/B testing, etc.).</li>
  <li>Add more and more telemetry to time cockpit so that we detect and solve problems in production faster.</li>
  <li>Make reporting of bugs and enhancement requests easier for customers. This feedback is an important factor for prioritization of work.</li>
</ol><h2>Summary: Focus is Important</h2><p class="showcase">If I had to summarize the motto of all the steps we decided to take, it would be: focus.</p><p>Instead of managing internal systems, we want to focus on building great software for our customers. Ready-made platform offerings in the cloud help us a lot in that direction.</p><p>You can have the most efficient development processes, features that nobody use remain a waste of time. We want to focus on the things that our customers care for or that are blocking our customers from making the most of time cockpit.</p>