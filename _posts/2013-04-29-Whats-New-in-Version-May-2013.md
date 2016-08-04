---
layout: blog
title: What's New in Version May 2013
excerpt: In this version of time cockpit we made the usage of actions more convenient. All actions that can be executed on a time sheet are now available from the ribbon menu in the time sheet calendar.
author: Alexander Huber
date: 2013-04-29
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2013/04/29/Whats-New-in-Version-May-2013
---

<h2>Actions Available in the Time Sheet Calendar</h2><p>In this version of time cockpit we made using <a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" title="Actions" target="_blank">actions</a> more convenient. Until now, actions where only available in lists in the master data module or in the context menu of a form. This was often tedious, because if you just wanted to perform a quick operation on a time sheet entry you had to switch to the master data module.</p><p>Now, actions that can be executed on time sheet entries (e.g. <em>Create Invoice</em>) or actions that are not restricted to a certain entity can be run directly from the time sheet calendar. </p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/04/Time Sheet_2013-04-29_17-25-48.png" alt="Time sheet calendar actions" title="Time sheet calendar actions" />
</p><p>Like actions in the master data module, actions in the time sheet calendar are context-sensitive. The <em>Create Invoice</em> action for example is only applicable if at least on time sheet entry is selected. The action <em>Send Vacation Confirmation Mail</em> on the other hand, is not restricted and can be executed without selecting a time sheet entry.</p><p>
  <a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" title="Actions" target="_blank">Read more about actions in the online documentation ...</a>
</p><h2>SQL Server Compact Timed Out Waiting for a Lock</h2><p>Since we have added the feature to send error reports via email, we have received the message that SQL Server CE times out numerous times. Big thanks to all who sent us error reports. Keep the error feedback coming!</p><p>This error usually occurs when you are saving a time sheet entry or some other data, and at the same time data is downloaded from the server during synchronization. In this case the database is locked until all data is downloaded. When synchronization has finished you are able to save your data again. This issue occurs very scarcly and can be solved by saving your time sheet entry again. However, this is rather inconvenient for users.</p><p>Therefore, we have implemented a retry mechanism in this version. If a you run into a database lock while creating a time sheet entry, time cockpit retries to save your time sheet entry three times (see screenshot).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/04/Time Sheet_2013-04-30_09-39-34.png" alt="Timeout while saving time sheet entry" title="Timeout while saving time sheet entry" />
</p><p>
  <span style="color: rgb(37, 160, 218); font-size: 20px; line-height: 20px;" data-mce-style="color: #25a0da; font-size: 20px; line-height: 20px;">Other Improvements</span>
</p><ul>
  <li>The fallback mechanism for multilingualism did not work correctly in the online client.</li>
  <li>Date and time properties are exported in the correct format again. In previous versions date time properties were transformed to strings.</li>
  <li>Multilingualism is correctly handled in the filter area of Excel when data is exported from time cockpit.</li>
</ul>