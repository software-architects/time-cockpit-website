---
layout: blog
title: What's New in Version April 2014
excerpt: For this version we have put the finishing touches to our new reporting feature. We have reached two goals -  First, you are now able to add custom reports to every list in time cockpit. The reports are automatically synchronized to all other users in your account, so everybody can open the reports directly in the embedded viewer or as PDF, Excel or Word. Second, we prepared three reports that will help you analyzing time sheet records and invoicing data.
author: Karin Huber
date: 2014-03-31
bannerimage: 
lang: en
tags: [time cockpit]
permalink: /blog/2014/03/31/Whats-New-in-Version-April-2014
---

<p>The new version April 2014 (1.23) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Reporting</h2><p>For this version we have put the finishing touches to our new reporting feature. We have reached two goals:</p><ul>
  <li>First, you are now able to add custom reports to every list in time cockpit. The reports are automatically synchronized to all other users in your account, so everybody can open the reports directly in the embedded viewer or as PDF, Excel or Word.</li>
  <li>Second, we prepared three reports that will help you analyzing time sheet records and invoicing data.</li>
</ul><h3>Add Reports to Lists</h3><p>Last month we have released a preview of the feature that allows you to <a href="http://www.timecockpit.com/blog/2014/02/27/Building-Custom-Reports-in-Time-Cockpit" title="Build custom reports in time cockpit">build custom reports</a> for every list in time cockpit. In the new version we have added the option to share your reports with your colleagues. After building and testing your report as described in <a title="Build custom reports in time cockpit" href="http://www.timecockpit.com/blog/2014/02/27/Building-Custom-Reports-in-Time-Cockpit">build custom reports</a>, select "Save Report" in the split menu of the report.</p><p>
  <img title="Save Report for all Users" src="{{site.baseurl}}/content/images/blog/2014/03/save-report.png" alt="Save Report for all Users" />
</p><p>You have to set the name for the report. Additionally, you may specify an expression for the visibility of the report and a sort order in the <em>Advanced Settings</em>.</p><p>
  <img title="Report Properties" src="{{site.baseurl}}/content/images/blog/2014/03/report-properties.png" alt="Report Properties" />
</p><h3>Time Report</h3><p>We have added a new item in the navigation menu for "Users" called "Time Report". The Time Report shows the attendance, working and break time for an employee for each day in a selected time range. </p><p>
  <img title="Time Report" src="{{site.baseurl}}/content/images/blog/2014/03/time-report-list.png" alt="Time Report" />
</p><p>In addition to the standard list you will get an additional item above the list called "Time Report". If offers a printable report that can be exported as PDF, Microsoft Excel or Microsoft Word file.</p><p>
  <img title="Printable Time Report" src="{{site.baseurl}}/content/images/blog/2014/03/time-report.png" alt="Printable Time Report" />
</p><h3>Reports for Invoices</h3><p>There are two new reports for the list of "Outgoing Invoices". The first report shows the sales trend over time. Blue bars indicate revenue of paid invoices and orange bars indicate outstanding invoices.</p><p>
  <img title="Sales Trend" src="{{site.baseurl}}/content/images/blog/2014/03/sales-trend.png" alt="Sales Trend" />
</p><p>The second report shows the sales trend per customer and project. In the gray lines you will find the customers with their portion of the total sales and the development over time. In the white lines below the revenue of the customer is split into projects.</p><p>
  <img title="Revenue per Customer" src="{{site.baseurl}}/content/images/blog/2014/03/revenue-per-customer.png" alt="Revenue per Customer" />
</p><h2>Other Improvements</h2><h3>Better Alert in Lists When Only Top 500 Items are Loaded
<br /></h3><p>When only the first 500 items were loaded in a list, we showed a very unobtrusive notification in the bottom right corner in previous versions which has been easily overlooked. Now, we have moved the notification above the list and colored it red.</p><p>
  <img title="Show all rows in list" src="{{site.baseurl}}/content/images/blog/2014/03/show-all-rows.png" alt="Show all rows in list" />
</p><h3>Warning When Items Cannot be Deleted</h3><p>In time cockpit you can specify read-only expressions for entities that indicate that items must not be modified or deleted if they fulfill the read-only expression. We ship, for example, a read-only expression for time sheet entries that states that invoiced time sheet cannot be modified or deleted.</p><p>So far, it was not possible to delete such items, but we did not show any notification that the item could not be deleted. In the new version we now inform you, that your delete operation went wrong.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/03/delete-not-possible-warning.png" />
</p>