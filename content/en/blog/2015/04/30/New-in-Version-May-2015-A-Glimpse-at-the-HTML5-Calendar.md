---
layout: blog
title: New in Version May 2015, A Glimpse at the HTML5 Calendar
author: Karin Huber
bannerimage: /images/blog/2015/04/time-cockpit-may-2015.png
permalink: /2015/04/30/New-in-Version-May-2015-A-Glimpse-at-the-HTML5-Calendar
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/04/time-tracking-calendar-week.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">The new version May 2015 (1.36) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Time Tracking Calendar
<br /></h2><p xmlns="http://www.w3.org/1999/xhtml">As promised, we continuously invest in the upcoming HTML5 version of time cockpit. We also frequently publish updated preview releases as soon as they have reached a state where it makes sense for customers to try it.</p><p xmlns="http://www.w3.org/1999/xhtml">This month we can proudly offer you a first glimpse at the upcoming time sheet calendar in HTML5. Granted, it is still missing quite a lot of the features that you know from the production versions. However, building the basic foundations for the graphical time calendar took some time. Now they are here and we can start adding feature by feature in the following weeks and months.</p><p xmlns="http://www.w3.org/1999/xhtml">This is how the current state of development looks like:<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/04/time-tracking-calendar.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Supported Functionality
<br /></h2><p xmlns="http://www.w3.org/1999/xhtml">The version we released a few days ago supports the following functions:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Display time sheet entries per user</li>
  <li>Color time sheet entries according to the selected <a href="https://help.timecockpit.com/?topic=html/95b1ce59-c4ec-461a-ba9b-cb978295c3de.htm" target="_blank">formatting profile</a></li>
  <li>Navigate in the calendar either by clicking on the arrows to move one week back or forth or by clicking on the date in the header</li>
  <li>Change the zoom level</li>
  <li>Add, edit and delete time sheet entries as shown in the following screen shot:
<br /><img src="{{site.baseurl}}images/blog/2015/04/edit-time-sheet-entry.png" /></li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Additional Enhancements in the HTML5 Client </h2><h3 xmlns="http://www.w3.org/1999/xhtml">Session Timeout
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">In the new version you will not have to re-authenticate every hour. Instead, we have moved to a sliding expiration of 8 hours. That means, only when you have not used time cockpit for more than 8 hours, you will need to re-authenticate.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Relation Lists</h3><p xmlns="http://www.w3.org/1999/xhtml">When configuring forms you can display relations either by a simple <em>BoundCell</em>, which automatically determines how to load the data for the relation, or you can specify a <em>RelationCell</em> that indicates which list to use for loading the data. Additionally, it is possible to specify a default list for relations. Until now, we did not consider the specified list for the relation and loaded all relation data automatically. In the new version, all types of relation lists except lists that contain Python scripts to load the data.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Default Values</h3><p xmlns="http://www.w3.org/1999/xhtml">Support for default values when creating new entities has been improved in the version. We have fixed some scenarios where default values deleted already entered values by the user.</p>