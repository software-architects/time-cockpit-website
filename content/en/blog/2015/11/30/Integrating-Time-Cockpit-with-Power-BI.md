---
layout: blog
title: Integrating Time Cockpit with Power BI
teaser: Time cockpit is a great platform for managing time- and project-related data. Microsoft’s Power BI shines when it comes to data visualization and interactive dashboards. Wouldn’t it be nice to integrate both systems to get the best of both worlds? For this month’s newsletter, we have created a sample showing how simple it is to connect both systems’ web APIs. Watch the video in the blog article to find out how the integration sample works. Additionally, the blog article contains links to the sample code. Feel free to use it as a starting point for exporting your time cockpit data to Power BI.
author: Rainer Stropek
date: 2015-11-30
bannerimage: /content/images/blog/2015/11/power-bi.png
lang: en
permalink: /blog/2015/11/30/Integrating-Time-Cockpit-with-Power-BI
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2015/11/power-bi-time-cockpit-1.png?mw=900" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Data Analysis and Reporting in Time Cockpit</h2><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit contains different functionalities to analyze your time-tracking data:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>You can use time cockpit’s list engine to explore data in a highly customizable grid. It supports interactive filtering, sorting, grouping including subtotals and totals, hyperlinks to other lists, etc.</li>
  <li>If you prefer Excel, you can export lists into an Excel file and use e.g. Pivot Tables to create reports and charts.</li>
  <li>Some of customers have implemented Data Warehouses where they integrate data from different sources including time cockpit. They use specialized data analysis and reporting tools with it.</li>
</ol><h2 xmlns="http://www.w3.org/1999/xhtml">Power BI</h2><p xmlns="http://www.w3.org/1999/xhtml">In the last months, Microsoft has strongly invested in a SaaS tool for self-service data analysis called <a href="https://powerbi.microsoft.com/en-us/" target="_blank">Power BI</a>. It contains a full client for data analysis professionals as well as a web client that end users can use to create interactive reports and dashboards.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2015/11/power-bi-time-cockpit-2.png?mw=900" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Power BI’s web client is integrated in Microsoft’s <a href="https://products.office.com/de-AT/" target="_blank">Office 365</a> offering. All you need to use it is a browser. Therefore, it is platform-independent.</p><p xmlns="http://www.w3.org/1999/xhtml">To start, you can make use of Power BI’s free pricing tier. Compared to the professional edition, it is a bit limited in terms of functionality and storage. However, it is a great option to get started and evaluate whether Power BI provides value for you.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Integrating Time Cockpit Power BI</h2><p xmlns="http://www.w3.org/1999/xhtml">You have two options how to use Power BI together with time cockpit:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Time cockpit offers an OData-compliant web service layer. Power BI’s full client can handle OData. Therefore, you can access time cockpit live using this protocol. We have written about this option in the past.</li>
  <li>If you want to use Power BI’s web client, you need to export your time cockpit data into a Power BI Dataset. This gives you great performance as Power BI can optimize the data for online analysis (OLAP) and not – like time cockpit has to – for supporting operational business processes (OLTP).</li>
</ol><p xmlns="http://www.w3.org/1999/xhtml">For option two, some of our customers have used time cockpit’s Excel exporter in the past. So they had to perform multiple manual steps to get data from one system into the other. This process can be automated as time cockpit and Power BI offer web services. All you need is a small script that reads data from time cockpit’s web services and writes it using Power BI’s web services. For this month’s newsletter we created a sample demonstrating how this could work.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Video</h2><p xmlns="http://www.w3.org/1999/xhtml">The following video contains a walk-through for how to get and use the sample:</p><div class="videoWrapper" xmlns="http://www.w3.org/1999/xhtml">
  <iframe width="800" height="600" src="https://www.youtube.com/embed/VPEQx1qazHI?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div><h2 xmlns="http://www.w3.org/1999/xhtml">Source Code</h2><p xmlns="http://www.w3.org/1999/xhtml">You can find the <a href="https://github.com/software-architects/time-cockpit-powerbi-export" target="_blank">source code of our sample on Github</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">In the video above you see that you need just a single method call to transfer the result of one time cockpit query to Power BI. Take a look at <a href="https://github.com/software-architects/time-cockpit-powerbi-export/blob/master/app.ts" target="_blank">app.ts</a> to see how it works.</p><p xmlns="http://www.w3.org/1999/xhtml">If you are a programmer and you are interested in the details, look into importer.ts. Feel free to adopt it to your specific needs. If you find bugs or make extensions that might be useful for other users, you can also send us pull requests.</p><p xmlns="http://www.w3.org/1999/xhtml">If you just want to use Power BI and do not want to deal with source code, contact us. Our time cockpit consultants would be happy to assist you integrating time cockpit with Power BI.</p><p xmlns="http://www.w3.org/1999/xhtml">Here are some additional resources for developers who want to learn more about programming Power BI:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Developer Portal Power BI
<br /><a href="https://powerbi.microsoft.com/en-us/developers" target="_blank">https://powerbi.microsoft.com/en-us/developers</a></li>
  <li>Get started creating a Power BI app
<br /><a href="https://msdn.microsoft.com/en-US/library/mt186372.aspx" target="_blank">https://msdn.microsoft.com/en-US/library/mt186372.aspx</a></li>
  <li>Authenticate to Power BI service
<br /><a href="https://msdn.microsoft.com/en-US/library/mt203565.aspx" target="_blank">https://msdn.microsoft.com/en-US/library/mt203565.aspx</a></li>
  <li>Power BI REST API reference
<br /><a href="https://msdn.microsoft.com/en-US/library/mt147898.aspx" target="_blank">https://msdn.microsoft.com/en-US/library/mt147898.aspx</a></li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Prerequisites</h2><p xmlns="http://www.w3.org/1999/xhtml">To get, build, and use the sample, you need the following prerequisites (there is a free option for all of them):</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Install the latest version of <a href="https://nodejs.org/en/" target="_blank">Node.js</a> on your computer.</li>
  <li>Install the latest version of <a href="https://git-scm.com/" target="_blank">Git</a> on your computer. As an alternative you could use a graphical Git client like <a href="https://www.visualstudio.com/" target="_blank">Visual Studio</a>, <a href="https://www.sourcetreeapp.com/" target="_blank">Source Tree</a>, <a href="https://desktop.github.com/" target="_blank">Github Desktop</a>, etc.</li>
  <li>To automate the data exchange, you will need a subscription of <a href="https://azure.microsoft.com/en-us/" target="_blank">Microsoft Azure</a>.</li>
</ol><h2 xmlns="http://www.w3.org/1999/xhtml">Building and Using the Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">The process of how to use the sample is described in details in the video above. Here is a short summary:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Clone the <a href="https://github.com/software-architects/time-cockpit-powerbi-export" target="_blank">sample repository from Github</a>.</li>
  <li>Open a command or terminal window and navigate to the directory into which you cloned the repository.</li>
  <li>Load the necessary Node.js packages using the command npm install</li>
  <li>Load the necessary TypeScript Definitions using the command tsd reinstall --save (if this is the first time you use tsd, you first have to install it using the command npm install -g tsd)</li>
  <li>Now you can compile the TypeScript code into JavaScript using the command node node_modules\typescript\bin\tsc</li>
  <li>Rename run-sample.cmd to run.cmd</li>
  <li>Open run.cmd in an editor and fill in the necessary data (e.g. credentials to access Power BI and time cockpit, application information from Azure Active Directory; for details see video above).</li>
  <li>Run the script run.cmd. After that, your time cockpit data should be in Power BI.</li>
</ol><br xmlns="http://www.w3.org/1999/xhtml" /><br xmlns="http://www.w3.org/1999/xhtml" /><br xmlns="http://www.w3.org/1999/xhtml" />