---
layout: blog
title: What's New in Version April 2014
author: Karin Huber
bannerimage: 
permalink: /2014/03/31/Whats-New-in-Version-April-2014
---

<p xmlns="http://www.w3.org/1999/xhtml">The new version April 2014 (1.23) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Reporting</h2><p xmlns="http://www.w3.org/1999/xhtml">For this version we have put the finishing touches to our new reporting feature. We have reached two goals:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>First, you are now able to add custom reports to every list in time cockpit. The reports are automatically synchronized to all other users in your account, so everybody can open the reports directly in the embedded viewer or as PDF, Excel or Word.</li>
  <li>Second, we prepared three reports that will help you analyzing time sheet records and invoicing data.</li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">Add Reports to Lists</h3><p xmlns="http://www.w3.org/1999/xhtml">Last month we have released a preview of the feature that allows you to <a href="http://www.timecockpit.com/blog/2014/02/27/Building-Custom-Reports-in-Time-Cockpit" title="Build custom reports in time cockpit">build custom reports</a> for every list in time cockpit. In the new version we have added the option to share your reports with your colleagues. After building and testing your report as described in <a title="Build custom reports in time cockpit" href="http://www.timecockpit.com/blog/2014/02/27/Building-Custom-Reports-in-Time-Cockpit">build custom reports</a>, select "Save Report" in the split menu of the report.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Save Report for all Users" src="{{site.baseurl}}images/blog/2014/03/save-report.png" alt="Save Report for all Users" />
</p><p xmlns="http://www.w3.org/1999/xhtml">You have to set the name for the report. Additionally, you may specify an expression for the visibility of the report and a sort order in the <em>Advanced Settings</em>.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Report Properties" src="{{site.baseurl}}images/blog/2014/03/report-properties.png" alt="Report Properties" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Time Report</h3><p xmlns="http://www.w3.org/1999/xhtml">We have added a new item in the navigation menu for "Users" called "Time Report". The Time Report shows the attendance, working and break time for an employee for each day in a selected time range. </p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Time Report" src="{{site.baseurl}}images/blog/2014/03/time-report-list.png" alt="Time Report" />
</p><p xmlns="http://www.w3.org/1999/xhtml">In addition to the standard list you will get an additional item above the list called "Time Report". If offers a printable report that can be exported as PDF, Microsoft Excel or Microsoft Word file.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Printable Time Report" src="{{site.baseurl}}images/blog/2014/03/time-report.png" alt="Printable Time Report" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Reports for Invoices</h3><p xmlns="http://www.w3.org/1999/xhtml">There are two new reports for the list of "Outgoing Invoices". The first report shows the sales trend over time. Blue bars indicate revenue of paid invoices and orange bars indicate outstanding invoices.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Sales Trend" src="{{site.baseurl}}images/blog/2014/03/sales-trend.png" alt="Sales Trend" />
</p><p xmlns="http://www.w3.org/1999/xhtml">The second report shows the sales trend per customer and project. In the gray lines you will find the customers with their portion of the total sales and the development over time. In the white lines below the revenue of the customer is split into projects.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Revenue per Customer" src="{{site.baseurl}}images/blog/2014/03/revenue-per-customer.png" alt="Revenue per Customer" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Other Improvements</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Better Alert in Lists When Only Top 500 Items are Loaded
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">When only the first 500 items were loaded in a list, we showed a very unobtrusive notification in the bottom right corner in previous versions which has been easily overlooked. Now, we have moved the notification above the list and colored it red.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img title="Show all rows in list" src="{{site.baseurl}}images/blog/2014/03/show-all-rows.png" alt="Show all rows in list" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Warning When Items Cannot be Deleted</h3><p xmlns="http://www.w3.org/1999/xhtml">In time cockpit you can specify read-only expressions for entities that indicate that items must not be modified or deleted if they fulfill the read-only expression. We ship, for example, a read-only expression for time sheet entries that states that invoiced time sheet cannot be modified or deleted.</p><p xmlns="http://www.w3.org/1999/xhtml">So far, it was not possible to delete such items, but we did not show any notification that the item could not be deleted. In the new version we now inform you, that your delete operation went wrong.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2014/03/delete-not-possible-warning.png" />
</p>