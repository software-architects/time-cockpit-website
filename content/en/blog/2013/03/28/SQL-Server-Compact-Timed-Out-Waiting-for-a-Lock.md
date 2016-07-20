---
layout: blog
title: SQL Server Compact Timed Out Waiting for a Lock
author: Karin Huber
bannerimage: 
permalink: /2013/03/28/SQL-Server-Compact-Timed-Out-Waiting-for-a-Lock
---

<p xmlns="http://www.w3.org/1999/xhtml">First of all, a big thank you to our customers! Since we have added the feature to send error reports via email, we have received lots of information from you. Please keep on sending us your problems with time cockpit, so we can learn what we should improve. We really appreciate your feedback.</p><p xmlns="http://www.w3.org/1999/xhtml">We definitely had one frontrunner in your error reports: <span class="inlineCode">SQL Server Compact timed out waiting for a lock.</span></p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="SQL Server Compact timed out waiting for a lock. &#xA;The default lock time is 2000ms for devices and 5000ms for desktops. &#xA;The default lock timeout can be increased in the connection string using the ssce: &#xA;default lock timeout property. &#xA;&#xA;[ Session id = 5,Thread id = 3384,Process id = 6656,Table name = SYS_SyncConfig,&#xA;Conflict type = u lock (x blocks),Resource = RID: 1048:0 ]" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="text" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Cause of Error</h2><p xmlns="http://www.w3.org/1999/xhtml">
  <span class="floatRight">
    <img src="{{site.baseurl}}images/blog/2013/03/SynchronizationInProgress.png" alt="Synchronization of the client and server database is currently in progress" title="Synchronization is in progress" />
  </span>This error usually occurs when you are saving a time sheet entry or some other data, and at the same time data is downloaded from the server during synchronization. In this case the database is locked until all data is downloaded. When synchronization has finished you are able to save you data again.</p><p xmlns="http://www.w3.org/1999/xhtml">You can easily check if synchronization is currently in progress in the lower left corner of time cockpit. If saving data fails, just wait until you will see in the status bar that synchronization has finished. Then save your data again.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Resolution</h2><p xmlns="http://www.w3.org/1999/xhtml">In the next version of time cockpit (planned for May 2013) we will try to avoid this error message by waiting for the synchronization to finish before saving your data. And if synchronization really takes longer, we will at least show you a better error message.</p>