---
layout: blog
title: What's New in Version June 2014
excerpt: This month we improved sync handling in time cockpit's full client and added support for booking compensatory time. The June 2014 version is fully compatible down to version March 2013 (1.10) so team members need not to upgrade all at the same time.
author: Rainer Stropek
date: 2014-05-30
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2014/05/30/Whats-New-in-Version-June-2014
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2014/05/SyncStatusBar.png" />
</p><p>The new version June 2014 (1.25) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously. </p><h2>Synchronization Enhancements</h2><p>Time cockpit's support for offline work is a feature that our frequently travelling customers love. They use time cockpit even at places with no or very limited internet connection (e.g. in the train, on an airport while waiting on their flight). Time cockpit stores all changes in a local, encrypted file and synchronizes them when the time cockpit server can be reached again.</p><p>Customers have told us that they sometimes come into trouble if they are offline for a longer period of time. Because of the <span lang="EN-US">possibility</span> to work offline seamlessly, they forget to go online (e.g. via a hotel WLAN) and sync outstanding changes. This might be especially important when then backoffice team creates invoices at the end of the month.</p><p>In the new version we made it much easier to detected unsynced changes and trigger a sync. Time cockpit will show you in the status bar (see also screenshot above) how many unsynced changes you have in your local database. Note that the number only counts local changes, not changes on the server that have not been synced down to your computer yet.</p><p>If you see unsynced changes and you do not want to wait until time cockpit automatically triggers a sync (happens regularly, interval can be changed in time cockpit's <em>Options</em> dialog), you can now initiate synchronization with a single mouse click on <em>Synchronize Data</em>. No dialog pops up, time cockpit just starts sync'ing in the background and you can continue working.</p><h2>Compensatory Time Off</h2><p>Time cockpit has been able to handle overtime agreements for quite a long time. However, many customers have told us that they would like a function to explicitly book compensatory time so that their time sheet calendar would not be empty on such a day. We added this function to time cockpit in the latest release.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:5f74abf1-19ab-44a3-b2f4-ab5c6264d868" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p>Interested in this new function? We wrote a <a href="http://www.timecockpit.com/blog/2014/05/30/New-Compensatory-Time-Off-Feature" target="_blank">dedicated blog article</a> that describes in detail how it works.</p><h2>OData Web API</h2><p>Beside our work on time cockpit's core functionality, we constantly improve our brand new <a href="http://www.timecockpit.com/blog/2014/04/27/Adding-Web-to-our-API" target="_blank">OData Web API</a>. No, it is still not final but we are making great progress. Did you already try the new API? We would love to hear about your experiences and feature requests.</p>