---
layout: blog
title: What's New in Version February 2014
excerpt: In this release of time cockpit we focused on sync and Excel importer. Time cockpit now provides better information about synchronization conflicts and allows you to easily resolve them. We also redesigned the sync dialog making it cleaner and easier to understand. Finally, we improved the Excel importer to support not only importing new records, but also updating existing ones.
author: Alexander Huber
date: 2014-01-29
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2014/01/29/Whats-New-in-Version-February-2014
---

<p>In this release of time cockpit we focused on sync and Excel importer. Time cockpit now provides better information about synchronization conflicts and allows you to easily resolve them. We also redesigned the sync dialog making it cleaner and easier to understand. Finally, we improved the Excel importer to support not only importing new records, but also updating existing ones.</p><h2>Importer Improvements</h2><p>Out of the box time cockpit ships with a powerful importer that can import both CSV and Microsoft Excel files. In previous versions the importer could only be used to import new records. In the new version February 2014 we have improved the importer to also support updating existing records. <a href="~/blog/2014/01/28/Importer-Improvements" title="Importer improvements in version February 2014">Read more about the importer improvements ...</a></p><p>
  <img title="Updated Record" src="{{site.baseurl}}/content/images/blog/2014/01/Updated Record.png" alt="Updated Record" />
</p><h2>Sync Improvements</h2><p>In this version we cleaned and simplified the sync dialog stripping it of all unnecessary information. In the case of synchronization errors, time cockpit now provides more helpful information. </p><p>
  <img title="New Sync Dialog" src="{{site.baseurl}}/content/images/blog/2014/01/New Sync Dialog.png" alt="New Sync Dialog" />
</p><p>Time cockpit distinguishes between different causes of errors:</p><ul>
  <li>No internet connection: <em>Authentication service is not available. Please check your internet connection.</em></li>
  <li>Port 1433 issue: <em>Synchronization has failed because the server database is not reachable. Please make sure that outbound traffic on port 1433 is allowed in your firewall</em>.</li>
  <li>Conflict handling: Time cockpit cannot synchronize your data if someone deleted a record (e. g. a project) but you still have pending changes on relating records (e. g. timesheet records). Previously, time cockpit displayed a <em>foreign key error</em> but you had to manually find the affected rows. The new time cockpit version makes it much easier to identify and correct synchronization conflicts. 
<br /><br /><img title="Sync Dialog with Conflict" src="{{site.baseurl}}/content/images/blog/2014/01/ConflictingSyncDialog.png" alt="Sync Dialog with Conflict" /><br />
 In the new version, we show you a list of conflicting items and hyperlinks to open the records. In the above screenshot we have a conflicting time sheet entry that is booked on a project that does not exist anymore. Click <em>edit</em> and the time sheet entry opens up. In the error message you will see which value causes the conflict. From there it should be easy to resolve the conflict.
<br /><br /><img title="Conflicting Time Sheet Entry" src="{{site.baseurl}}/content/images/blog/2014/01/Conflicting TS.png" alt="Conflicting Time Sheet Entry" /></li>
</ul><h2>Bug Fixes</h2><ul>
  <li>When the time sheet calendar is displayed in day view, the buttons &lt; and &gt; top right now switch days instead of weeks.</li>
  <li>If the <em>USR_TimesheeUserDetailSelectionList</em> is configured wrongly it will not prevent time cockpit from starting anymore. The <em>USR_TimesheeUserDetailSelectionList</em> can be used to filter the user combobox in the left bar of the time sheet calendar.</li>
</ul>