---
layout: blog
title: SQL Server Compact Timed Out Waiting for a Lock
excerpt: First of all, a big thank you to our customers! Since we have added the feature to send error reports via email, we have received lots of information from you. Please keep on sending us your problems with time cockpit, so we can learn what we should improve. We really appreciate your feedback.  We definitely had one frontrunner in your error reports -  SQL Server Compact timed out waiting for a lock.
author: Karin Huber
date: 2013-03-28
bannerimage: 
bannerimagesource: 
lang: en
tags: [SQLCE,time cockpit]
ref: 
permalink: /blog/2013/03/28/SQL-Server-Compact-Timed-Out-Waiting-for-a-Lock
---

<p>First of all, a big thank you to our customers! Since we have added the feature to send error reports via email, we have received lots of information from you. Please keep on sending us your problems with time cockpit, so we can learn what we should improve. We really appreciate your feedback.</p><p>We definitely had one frontrunner in your error reports: <span class="inlineCode">SQL Server Compact timed out waiting for a lock.</span></p>{% highlight text %}SQL Server Compact timed out waiting for a lock. 
The default lock time is 2000ms for devices and 5000ms for desktops. 
The default lock timeout can be increased in the connection string using the ssce: 
default lock timeout property. 

[ Session id = 5,Thread id = 3384,Process id = 6656,Table name = SYS_SyncConfig,
Conflict type = u lock (x blocks),Resource = RID: 1048:0 ]{% endhighlight %}<h2>Cause of Error</h2><p>
  <span class="floatRight">
    <img src="{{site.baseurl}}/content/images/blog/2013/03/SynchronizationInProgress.png" alt="Synchronization of the client and server database is currently in progress" title="Synchronization is in progress" />
  </span>This error usually occurs when you are saving a time sheet entry or some other data, and at the same time data is downloaded from the server during synchronization. In this case the database is locked until all data is downloaded. When synchronization has finished you are able to save you data again.</p><p>You can easily check if synchronization is currently in progress in the lower left corner of time cockpit. If saving data fails, just wait until you will see in the status bar that synchronization has finished. Then save your data again.</p><h2>Resolution</h2><p>In the next version of time cockpit (planned for May 2013) we will try to avoid this error message by waiting for the synchronization to finish before saving your data. And if synchronization really takes longer, we will at least show you a better error message.</p>