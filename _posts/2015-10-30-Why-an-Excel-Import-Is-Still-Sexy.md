---
layout: blog
title: Why an Excel Import Is Still Sexy
excerpt: It is true, there are lots of ways to get data in and out of time cockpit, the most advanced one being the OData Web API. Still, there are scenarios where an Excel import plays strong. First, you do not need to have any programming skills to import data. Time cockpit can generate an empty sample file. You just need to fill the file with your data and let time cockpit do the rest. And let’s be honest, Excel is ubiquitous and nearly everyone knows how to work with it. In this blog article I describe scenarios in which many time cockpit customers use our Excel importing feature.
author: Alexander Huber
date: 2015-10-30
bannerimage: /content/images/blog/2015/09/Sexy_Importer.png
bannerimagesource: 
lang: en
tags: [About]
ref: 
permalink: /blog/2015/10/30/Why-an-Excel-Import-Is-Still-Sexy
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/10/dancers-309871_1280.png" />
</p><p>It is true, there are lots of ways to get data in and out of time cockpit, the most advanced one being the <a href="~/blog/2014/09/26/Accessing-Time-Cockpits-OData-Web-API-With-Visual-Studio" target="_blank">OData Web API</a>. Still, there are scenarios where an Excel import plays strong. First, you do not need to have any programming skills to import data. Time cockpit can generate an empty sample file. You just need to fill the file with your data and let time cockpit do the rest. And let’s be honest, Excel is ubiquitous and nearly everyone knows how to work with it. In this blog article I describe scenarios in which many time cockpit customers use our Excel importing feature.<br /></p><p class="showcase">This month we added the Excel import feature to time cockpit's <a href="https://web.timecockpit.com" target="_blank">HTML5 client</a>. <a href="http://www.timecockpit.com/blog/2015/10/30/How-to-Use-the-Excel-Import-in-the-HTML-5-Web-Client" target="_blank">Read more about how importing Excel files work in HTML5 ...</a><br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/check-importer-results.png" />
</p><h2>Importer Scenarios</h2><h3>Incorporate Freelancers</h3><p>Some of our bigger customers employee freelancers to handle work peaks more efficiently. Like conventional employees, the work of freelancers needs to be billed to customers. That means that freelancers need to track their time one way or another, but they do not necessarily need to track time with time cockpit. Perhaps they use another tool or just use Excel to track time.</p><p>On the other hand, our customers do not want to create dedicated users in time cockpit for freelancers. This can have various reasons, but most commonly, they do not want to give access to all project- and billing information to external employees.</p><p>For those cases, our customers use the Excel importer. They just send out an Excel template file to the freelancers that needs to be filled. At the end of the month, freelancers just send the complete Excel file to an internal who uses time cockpit's importer to load the time sheet entries into time cockpit. Processes like project controlling or billing are then aware of the external time sheet entries. You can work with the time sheets of your freelancers as it were internal employees.</p><p class="showcase">Please be aware that although you do not give access to time cockpit to a freelancer, you need to create a time cockpit user for him or her.</p><h3>Mass Updates</h3><p>When dealing with master data, you will need to update a large amount of data records sooner or later. Imagine that you have thousands of customers in time cockpit. Each customer has a phone number, but the phone number does not conform to a given pattern. Your task is to make all the phone numbers compliant to the given pattern.</p><p>Of course you could use time cockpit’s built-in <a href="https://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripting language</a> Iron Python to perform the updates, but if you are not so much into scripting, the Excel importer will be your tool of choice. You can just export all the customers in an Excel file, perform the updates in the Excel file and import your cleansed data again.</p><p class="showcase">The importer is able to insert new entries, but also to update existing ones.</p><h3>Migrating Data Between Systems</h3><p>When we introduce time cockpit for a new customer, we seldom start on the green field. When customers of a certain size decide to use time cockpit, there are usually a lot of existing systems that serve as data sources for time cockpit. Examples are systems like MS Dynamics NAV, CRM systems like MS Dynamics CRM, MS Sharepoint or SAP. And often also legacy time tracking software that time cockpit is to replace :-). Most customers do not want to omit their historical time tracking data for the following reasons:</p><ul>
  <li>The historical time tracking data represents the actual hours of work of a user which is used to calculate overtime</li>
  <li>The reporting capabilities of time cockpit may give new insights on bases of the historical time tracking data.</li>
</ul><p>To migrate data between systems you could implement web jobs, but usually we only do that for periodic imports.<br />Customers who want to migrate data without our help can export data from their old systems and import it into time cockpit. Often, customers use the opportunity to increase data quality and consistency (e.g. remove duplicates etc.) and import just clean data into time cockpit. One of our customers used the time cockpit importer to load about 150k time sheet entries into time cockpit.</p><h2>Conclusion</h2><p>Agreed, there are other ways to load data into time cockpit which are fancier (see OData Web API). But if you need a pragmatic and reliable way that most users can relate to you might consider the time cockpit Excel importer. The advantages at a glance:</p><ul>
  <li>Excel is a quite common data exchange format. Excel files and the corresponding import definitions are self-describing and thus easy to understand.</li>
  <li>The importer requires no programming/scripting skills. Users can perform import tasks themselves.</li>
  <li>The importer is a standard interface that lets you import any data you like to manage in time cockpit. No dedicated import jobs interfaces to be developed.</li>
  <li>Result logs of past imports are stored historically.</li>
</ul><h2>Further Reading</h2><ul>
  <li>
    <a href="~/blog/2015/10/30/How-to-Use-the-Excel-Import-in-the-HTML-5-Web-Client" target="_blank">How to use the Excel Import in the HTML 5 Web Client</a>
  </li>
  <li>
    <a href="https://help.timecockpit.com/html/ee560e49-e503-4d80-9167-2e6533f50dbe.htm" target="_blank">Online documentation</a>
  </li>
  <li>
    <a href="~/blog/2014/08/29/Compound-Keys-in-Excel-Import" target="_blank">Importer improvements</a>
  </li>
  <li>
    <a href="~/blog/2015/06/29/How-to-Automate-Time-Cockpit%E2%80%99s-Importer" target="_blank">How to automate the importer</a>
  </li>
</ul>