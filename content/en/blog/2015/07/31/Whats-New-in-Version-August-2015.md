---
layout: blog
title: What's New in Version August 2015
author: Karin Huber
bannerimage: /images/blog/2015/07/time-cockpit-august-2015.png
permalink: /2015/07/31/Whats-New-in-Version-August-2015
---

<p xmlns="http://www.w3.org/1999/xhtml">The new version August 2015 (1.39) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><p xmlns="http://www.w3.org/1999/xhtml">We have lots of new features and improvements in time cockpit this month: A new feature for monitoring working time violations, lots of enhancements in the HTML5 preview including full support for reports, and a bunch of performance optimizations for Full and HTML5 client.</p><h2 xmlns="http://www.w3.org/1999/xhtml">HTML5 Client &amp; Full Client</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Working Time Violations
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">Many of our customers use time cockpit to validate the working time of their employees against legal requirements. In the new version we have added a list of all violations with a link to the corresponding time sheet entries. [TODO: add link] Read more ...<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/07/working-time-violations.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">HTML5 Client</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Reports</h3><p xmlns="http://www.w3.org/1999/xhtml">In the new version of the HTML5 client you can now use the <a href="~/blog/2014/03/31/Custom-Reporting-in-Time-Cockpit-is-Final">reporting feature</a> that you <span lang="EN-US">probably </span> know from Full and Silverlight Clients. In terms of reporting, the HTML5 client now offers the same functionality as the existing Silverlight client:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Every list can automatically be exported as PDF, Excel and Word (<em>Print View</em> in menu). You do not have to create a report <span lang="EN-US">definition </span> for that.</li>
  <li>If you have specific requirements (e.g. charts, specific groupings, sums, etc.), you can create and upload custom report definitions for every list. The HTML5 client lets users view and export reports based on your custom report definitions. Note that you have to use the Full Client to upload custom report definitions.
<br /></li>
</ul><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Do you want to know more about how you can create custom reports in time cockpit? <a href="http://www.timecockpit.com/blog/2014/03/31/Custom-Reporting-in-Time-Cockpit-is-Final" target="_blank">Read more...</a></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/07/time-report-pdf.png" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Time Sheet Calendar</h3><p xmlns="http://www.w3.org/1999/xhtml">In the time sheet calendar we have made two improvements this month:<br /></p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>You can zoom in and out with <em>Ctrl + Plus</em> resp. <em>Ctrl + Minus</em>. Additionally you can use the mouse wheel while pressing the <em>Ctrl</em> key.</li>
  <li>Time cockpit allows you to specify an expression for the form that is opened in the time sheet calendar. In the new version this expression can even contain a reference to the selected time sheet entry. So you can open different forms for e.g. travel time and working time.
<br /><img src="{{site.baseurl}}/images/blog/2015/07/time-sheet-form-expression.png" /></li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">Actions
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">The HTML5 preview has been supporting actions in lists for some months. This month we have added support for actions <em>in forms</em>. Additionally, we now support all types of <em>ActionCells</em> that allow you to execute an action by clicking on a hyperlink in a list or form.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/07/actions-in-list-and-form.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Full Client</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Importer Improvements</h3><p xmlns="http://www.w3.org/1999/xhtml">For the importer we have made some minor improvements:<br /></p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>We skip rows with an empty primary key.</li>
  <li>When the header in the import sample file has changed we ask before updating the import definition because this can lead to invalid import definitions.</li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">Performance Optimizations</h3><p xmlns="http://www.w3.org/1999/xhtml">We have made the following changes to improve performance. Some changes only affect the Full Client, others are also relevant for the HTML5 Client.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>It is now possible to specify include directives in triggers. By now, triggers always reloaded the affected entity objects from the database including all relations. If you know that a triggers does not need all relations, you now can specify an include clause with the actually needed relations.</li>
  <li>We have changed the time tracking calendar and combobox handling in filters and forms to remove all <em>LayoutUpdated</em> events in WPF. On some computers this caused quite a lot of CPU load in the past.</li>
  <li>We have made several improvements to load the data model faster from the database.</li>
</ul>