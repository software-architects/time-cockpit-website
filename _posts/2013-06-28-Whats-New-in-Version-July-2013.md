---
layout: blog
title: What's New in Version July 2013
excerpt: This month we improved the performance of initial synchronization. Especially when you already have collected lots of signals on multiple devices, the initial sync on a new device may take more than an hour. In the July version we managed to increase sync performance for our own time cockpit users (yes, we are eating our own dog food) from nearly one hour to approximately 15 minutes.
author: Karin Huber
date: 2013-06-28
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2013/06/28/Whats-New-in-Version-July-2013
---

<h2>Synchronization Performance</h2><p>This month we improved the performance of initial synchronization. Especially when you already have collected lots of signals on multiple devices, the initial sync on a new device may take more than an hour. In the July version we managed to increase sync performance for our own time cockpit users (yes, we are eating our own dog food) from nearly one hour to approximately 15 minutes.</p><p>The following chart shows the improvement for a user with 22.000 time sheet entries, 29.000 signal blobs and a total of 57.000 operations from version June 2013 to version July 2013:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/06/SyncPerfCustomerA.png" alt="Performance Improvements in Synchronization" title="Performance Improvements in Synchronization" />
</p><p>
  <a href="/blog/2013/06/25/Faster-Synchronization-in-Time-Cockpit-July-2013" title="Improved Synchronization Performance">Read more about how we improved sync performance ...</a>
</p><h2>Other Changes</h2><h3>Improved Tooltip for Actual and Planned Working Time</h3><p>In previous versions you had to hover over each single bar in the working hours bar charts to get details about your actual and planned workings hours per day, week or month. In the new version we have consolidated all information into one tooltip. Additionally, we now show the deviation in the bar chart instead of actual and planned working time. Let us know if there is additional information you want to see in the bar charts or in the tooltip!</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/06/WorkingHoursTooltip.png" alt="New tooltip for working hours" title="New tooltip for working hours" />
</p><h3>FIXED: Combo Box is Empty after Typing a Text that does not exist in Silverlight</h3><p>If you typed a text in a combo box and no matching result was found, the combo box deleted the text, but the next time you opened the combo box, no values were available.</p><h3>FIXED: Actions with Type Condition and Minimum Number of Items = 0 were not Displayed</h3><p>Actions with a type condition that had a minimum number of required selected items of 0 were not available in the ribbon as long as no item was selected.</p><h3>FIXED: Automatically Generated Scripts did not Include DefaultValueExpession and EvaluateDefaultValueExpression</h3><p>When creating scripts for model entities we now include the DefaultValueExpression and the EvaluateDefaultValueExpression. Additionally, localization information now is also included.</p><h3>FIXED: Default Values for Action Parameter Forms were not set</h3><p>When you have built a form to allow users to input parameters for actions, default values were not considered. Additionally, we have always used the default form for an entity object instead of using the specified action form.</p><h3>FIXED: User Note Tracker did not Open Input Forms for Notes and new Time Sheet Entries in Foreground</h3><p>In the new version the input forms for notes and new time sheet entries are always opened in foreground when you hit the specified shortcuts. The default shortcuts are CTRL + SHIFT + N and CTRL + SHIFT + T, but you can change them in the signal tracker configuration.</p>