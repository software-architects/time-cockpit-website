---
layout: blog
title: What's New in Version March 2016
excerpt: In the new version we have focused on two topics. First, we have improved the working time report by adding overtime and remaining vacation entitlement. Second, we have extended the Office 365 integration with the HTML5 time sheet calendar by sent emails.
author: Karin Huber
date: 2016-02-29
bannerimage: /content/images/blog/2016/02/time-cockpit-march-2016.png
lang: en
tags: [time cockpit]
ref: /de/blog/2016/02/29/Was-ist-neu-in-der-Version-März-2016
permalink: /blog/2016/02/29/Whats-New-in-Version-March-2016
---

<p>The new version March 2016 (1.46) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Overview</h2><h3>Full Client</h3><ul>
  <li>
    <a href="#working-time-report">Working Time Report</a>
  </li>
  <li>
    <a href="#additional-improvements">Additional Improvements and Bug Fixes</a>
  </li>
</ul><h3>HTML5 Client</h3><ul>
  <li>
    <a href="#sent-emails">Office 365 Integration in Time Cockpit's Timesheet Calendar</a>
  </li>
  <li>
    <a href="#edit-timesheet-templates">Edit Time Sheet Templates</a>
  </li>
  <li>
    <a href="#hide-timesheet-templates">Hide Time Sheet Templates</a>
  </li>
  <li>
    <a href="#new-versions">Information About New Versions</a>
  </li>
</ul><h2>Full Client</h2><h3>
  <a id="working-time-report" name="working-time-report" class="mce-item-anchor"></a>Working Time Report</h3><p>We have enhanced the working time report by two new sections for overtime and vacations. So you can keep track of your current overtime hours and your remaining vacation entitlement easily.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/time-report-overtime-vacation.png" />
</p><p>
  <a href="~/blog/2016/02/29/Time-Report-With-Overtime-and-Vacation-Entitlement">Read more about the working time report enhancements ...</a>
</p><h3>
  <a id="additional-improvements" name="additional-improvements" class="mce-item-anchor"></a>Additional Improvements and Bug Fixes
<br /></h3><p>We have added some enhancements and fixes for minor bugs in time cockpit's full client this month:</p><ul>
  <li>Improved stability of long running initial synchronizations (slow internet connection or lots of existing data)</li>
  <li>Better handling of database migrations in the signal tracker</li>
  <li>Truncate windows titles larger than 4000 characters to avoid signal tracker issues</li>
  <li>Additional configurability in working time violation handling: WorkingTimeValidation.ConsiderWorkingTimeWeights</li>
  <li>Use DateTime2 for parameters to retain high precision values</li>
  <li>Prevent setting entity object collections as member value for relations (fail early instead of in database layer)</li>
</ul><h2>HTML5 Client</h2><h3>
  <a id="sent-emails" name="sent-emails" class="mce-item-anchor"></a>Office 365 Integration in Time Cockpit's Timesheet Calendar
<br /></h3><p>Last month we started to incorporate Office 365 calendar items into time cockpit (see <a href="~/blog/2016/01/31/Whats-New-in-Version-February-2016">What's New in Version February 2015</a>). This month we have added another Office 365 service to the time tracking calendar - sent emails. To enable this new feature, go to the plugins page.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/time-cockpit-plugins.png" />
</p><p>There you can enable and disable the plugins for Office 365 calendar items and sent mails.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/time-cockpit-enable-plugins.png" />
</p><p>After enabling the new plugin you will will see a gray diamond left to the time sheet entries area for each sent email. Hover over the diamond to see the time, recipient and subject of the sent email.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/time-tracking-calendar-with-office365-items.png" />
</p><h3>
  <a id="edit-timesheet-templates" name="edit-timesheet-templates" class="mce-item-anchor"></a>Edit Time Sheet Templates
<br /></h3><p>Another feature of the time cockpit full client finally made it to HTML5 - administration of time sheet templates. In the new version you can right-click on a time sheet entry to save it as template.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/save-time-sheet-entry-as-template.png" />
</p><p>The template will appear in the left area under "My Templates". There you can also edit or delete your templates.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/edit-or-remove-time-sheet-templates.png" />
</p><h3>
  <a id="hide-timesheet-templates" name="hide-timesheet-templates" class="mce-item-anchor"></a>Hide Time Sheet Templates</h3><p>If you do not use one or another category of the time sheet templates very often, you can now collapse theses categories. One the one hand this makes it easier to find your actually used templates. And on the other hand it also improves performance of the calendar as collapsed categories are not loaded when switching the selected day or selecting a time sheet entry.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/collapse-time-sheet-templates.png" />
</p><h3>
  <a id="new-versions" name="new-versions" class="mce-item-anchor"></a>Information About New Versions</h3><p>We ship improvements for the HTML5 client at least once a week. Sometimes you will get daily updates. To let you know when a new version is available, we have added a notification to the main menu at the top of the application. There will appear an orange exclamation mark next to your name if a newer version is available.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/new-version-menu.png" />
</p><p>When you open the menu you will see a link to load the new version.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/02/new-version-menu-expanded.png" />
</p>