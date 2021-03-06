---
layout: blog
title: What's New in Version February 2016
excerpt: Office 365 is a very successful cloud service from Microsoft. Millions of people all over the globe use it for emails, document management, communication, etc. This month, we added an out-of-the-box integration with Office 365 to time cockpit's HTML5 timesheet calendar. See all your Outlook appointments in time cockpit and turn them into timesheet records with a simple double-click.
author: Rainer Stropek
date: 2016-01-31
bannerimage: /content/images/blog/2016/01/time-cockpit-february-2016.png
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: /de/blog/2016/01/31/Was-ist-neu-in-der-Version-Februar-2016
permalink: /blog/2016/01/31/Whats-New-in-Version-February-2016
---

<p>The new version February 2016 (1.45) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Summary</h2><h3>Database Migration</h3><p>In January, we finally migrated all our production databases in Microsoft Azure from the old web/business-edition-model to new v12 database servers.</p><p>Time cockpit's version February 2016 has been optimized for the new database servers. We made enhancements to time cockpit's internal synchronization algorithm. This change significantly reduces the necessary server resources during synchronization and therefore speeds up the process.</p><p class="showcase">Because of this change, we really ask you to upgrade your full client to the latest version. This helps us keeping operational costs and therefore time cockpit's monthly fee as low as it currently is.</p><p>The new version February 2016 (1.45) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><p>
  <a href="~/account/download">Get the new version ...</a>
  <br />
  <a href="~/blog/2016/01/31/Hello-Database-Pools">Read more about the new database pools ...</a>
</p><h3>Office 365 Integration</h3><p>
  <a href="https://products.office.com/" target="_blank">Office 365</a> is a very successful cloud service from Microsoft. Millions of people all over the globe use it for emails, document management, communication, etc. This month, we added an out-of-the-box integration with Office 365 to <a href="http://web.timecockpit.com" target="_blank">time cockpit's HTML5 timesheet calendar</a>. See all your Outlook appointments in time cockpit and turn them into timesheet records with a simple double-click.</p><h3>Full Client and Self-Service Portal Enhancements</h3><p>In addition to extending the HTML5 client, we also enhanced the full-client and time cockpit's administration website:</p><ol>
  <li>In the past, you could work with time cockpit offline without synchronization for up to 30 days. After that period, time cockpit assumed that the computer is not used anymore and prevented further synchronizations. To reactivate, you have to reset time cockpit and do a full sync. In response to concrete customer demand, we extended the period without sync to 60 days. However, a regular warning message appears after 30 days without synchronization.</li>
  <li>Since time cockpit was first released years ago, we published quite a large number of software versions. This led to inconveniently long wait times whenever you want to get a download link for the latest time cockpit full client on <a href="~/sign-in" target="_blank">time cockpit's self-service portal</a>. This month, we significantly enhanced this feature. Now it takes you a much shorter time to get the latest and greatest time cockpit full client download link.</li>
</ol><h2>Office 365 Integration in Time Cockpit's Timesheet Calendar</h2><p>Enabling the Office 365 integration in time cockpit's timesheet calendar is simple. You do not need to install any software or make administrative changes to time cockpit or Office 365. You just have to follow these simple steps:</p><h3>Enable Calendar Integration</h3><p>Open the drop-down menu of your username in the right-upper corner of <a href="https://web.timecockpit.com" target="_blank">time cockpit's HTML5 client</a>. Select <em>Enable / Disable Plugins</em>.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/enable-disable-plugins.png" />
</p><p>Activate the Office 365 Calendar plugin:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/active-office-365-calendar.png" />
</p><h3>Sign in to Office 365</h3><p>Navigate back to time cockpit's timesheet calendar. Time cockpit will ask you whether you want to authenticate with Office 365 so that time cockpit can read your calendar items.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/sign-in-confirmation.png" />
</p><p>If you click <em>Confirm</em>, time cockpit will redirect you to Office 365's login screen. Please sign in with your Office 365 credentials.</p><p class="showcase">Note that for security and privacy reasons, time cockpit will <strong>not</strong> receive or store your Office 365 credentials. Time cockpit only gets a time-limited access token for Office 365. This token is <strong>not</strong> transmitted to or stored in the time cockpit cloud.</p><p>If you sign in from time cockpit for the first time, a consent screen similar to the one below is shown. Please accept it if you want to display Office 365 calendar items in time cockpit.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:5841428d-60e0-4aa0-8a51-b6a454f47712" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><h3>Work with Calendar Items in Time Cockpit</h3><p>Whenever time cockpit is loading data from Office 365, a loading indicator appears in the right lower corner of your timesheet calendar:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/loading-indicator.png" />
</p><p>Calendar items from Office 365 are displayed in light gray in your timesheet calendar. Hover over them to see more details. Double-click them to turn them into timesheet records. Time cockpit will automatically copy date, time, description and location from your calendar into the timesheet record.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/calendar-items.png" />
</p><h3>Video</h3><p>The following animation shows the process of connecting time cockpit with Office 365:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/office-365-calendar-in-time-cockpit.gif" />
</p>