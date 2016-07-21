---
layout: blog
title: What's New in Version December 2015
author: Karin Huber
bannerimage: /images/blog/2015/11/time-cockpit-december-2015.png
permalink: /2015/11/30/Whats-New-in-Version-December-2015
---

<p xmlns="http://www.w3.org/1999/xhtml">The new version December 2015 (1.43) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Full-Text Search</h2><p xmlns="http://www.w3.org/1999/xhtml">A new feature made it into the HTML5 client this month: full-text search. There is a magnifier icon at the right side over the table. Click on the icon or press CTRL + F to search within the result table. You can search for all text columns in the table.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/11/full-text-search.gif" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Please note that the browser's find function is not able to find all matching data in the result table. The result table may contain hundreds or even thousands of rows. Technically spoken, the result table is virtualized - that means that only currently visible items on the screen are rendered because otherwise, the browser would become very slow. But that also means, the browser is not able to find rows that are not currently rendered. Please use time cockpit's new full-text search to really get all results.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Grouping and Sorting</h2><p xmlns="http://www.w3.org/1999/xhtml">In the new version we have improved the grouping behavior.:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>The expand and collapse status of aggregated rows is retained across applying new filter parameters, full-text search or sorting.</li>
  <li>The number of items per aggregate row is updated correctly when using full-text search.</li>
  <li>Aggregates are updated correctly when applying new filter parameters or using full-text search.</li>
  <li>The default sort order of detail rows is now correct.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/11/grouping.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Full Client Bug Fixes</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Synchronization</h3><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit does not allow to synchronize devices with the server that have not synchronized data for more than 30 days because this may lead to inconsistent data. In previous versions of time cockpit it was still possible to synchronize with the server by installing a new version of time cockpit. In this cases the client could have kept data that was already deleted on the server which leaded to further synchronization problems. In the new version we have fixed this bug and force the client to reload data from the server.</p><p xmlns="http://www.w3.org/1999/xhtml">If you are not able to synchronize your device within 30 days you have to reload all data from the server by running the configuration wizard of time cockpit. Please find all instructions on how the run the wizard in the <a href="https://help.timecockpit.com/?topic=html/252608c7-8762-4745-ad68-b495fbf0a17f.htm" target="_blank">time cockpit help</a> (see "Resetting the Configuration").</p><h3 xmlns="http://www.w3.org/1999/xhtml">Time Sheet Calendar</h3><p xmlns="http://www.w3.org/1999/xhtml">We have fixed an error that occurred, when a time sheet entry was created based on an Outlook Calendar item with a very long location text. In the new version the location text is trimmed correctly.<br /></p><h3 xmlns="http://www.w3.org/1999/xhtml">Outlook Signals</h3><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>In some scenarios Outlook Calendar items were not displayed because of differing language settings.</li>
  <li>Wrong system clock settings and language settings caused repeated processing of email items, which may have caused performance and memory problems. If this issue occurred on your PC, we recommend to delete all sent email signals.</li>
  <li>The default polling interval for sent emails has been increased from 5 to 15 minutes.</li>
</ul>