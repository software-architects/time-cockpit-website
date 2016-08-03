---
layout: blog
title: What's New in Version August 2013
excerpt: This month we have focused on the performance of the time sheet calendar, especially the performance when editing time sheet entries. Until now time cockpit always reloaded all time sheet entries for the selected month after editing, adding or deleting a time sheet entry. Additionally, time cockpit reloaded all time sheet templates, because every change could cause changes in the templates. This was even true when only moving or resizing a time sheet entry in the calendar.
author: Karin Huber
date: 2013-07-31
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
permalink: /blog/2013/07/31/Whats-New-in-Version-August-2013
---

<h2>Time Sheet Calendar Performance</h2><p>This month we have focused on the performance of the time sheet calendar, especially the performance when editing time sheet entries. Until now time cockpit always reloaded all time sheet entries for the selected month after editing, adding or deleting a time sheet entry. Additionally, time cockpit reloaded all time sheet templates, because every change could cause changes in the templates. This was even true when only moving or resizing a time sheet entry in the calendar.</p><p>In the new version we have reduced the amount of data to reload as far as possible. When moving or resizing time cockpit only saves the changed time sheet entry and does not reload data anymore. This saves more than 80% of the required time for saving time sheet entries. After editing, adding or deleting a time sheet entry we only reload the changed time sheet entry instead of loading the whole month. Additionally, time sheet templates are now loaded much faster.</p><h2 class="BlogHeader">Google Latitude will be Retiring on August 9th</h2><p>Google has decided that they will be retiring Google Latitude on August 9th 2013. Unfortunately, this will break the <a href="~/blog/2013/05/31/Whats-New-in-Version-June-2013" title="Location History in Time Cockpit">location history feature we have introduced in time cockpit June 2013</a> as a beta version. At the moment we are thinking about alternatives but to date it seems, that we will have to remove the location feature for the next few versions until we will find an appropriate replacement.</p><h2>Other Changes</h2><h3>Performance of Excel Export</h3><p>Until now we have adjusted the width of all columns in the generated excel to the content of the columns. In the new version we only adjust the width by the content of the first 200 rows. With this change we could increase the performance dramatically.</p><h3>FIXED: FormatPattern in Calculated Properties of Type DateTime</h3><p>In previous versions it was not possible to set the FormatPattern for calculated properties that returned objects of type Date or DateTime.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/07/DateTimeFormatPattern.png" alt="DateTime Format Pattern for Calculated Properties" title="DateTime Format Pattern for Calculated Properties" />
</p><h3>FIXED: Guid Comparison in Custom Filter</h3><p>In previous version it was not possible to select a Guid property in the advanced filters area and compare it to a Guid value.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/07/FilterGuid.png" alt="Compare Guids" title="Compare Guids" />
</p>