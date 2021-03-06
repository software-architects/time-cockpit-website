---
layout: blog
title: What's New in Version June 2016
teaser: This month we have put our focus on these two topcis -  handling time-off in the time tracking calendar and better usibility of lists. You do not need to leave the time tracking calendar anymore to manage time off like vacation or sick leave. In lists you now have much better grouping functionality, especially when dates are affected.
author: Karin Huber
date: 2016-05-31
bannerimage: /content/images/blog/2016/05/time-cockpit-june-2016.png
lang: en
permalink: /blog/2016/05/31/Whats-New-in-Version-June-2016
---

<h2>Overview</h2><p>This month we have put our focus on these two topcis: handling time-off in the time tracking calendar and better usibility of lists. You do not need to leave the time tracking calendar anymore to manage time off like vacation or sick leave. In lists you now have much better grouping functionality, especially when dates are affected.</p><p>As last month we have put all effort in the new HTML5 client so there is no new Full Client available this month.<br /></p><ul>
  <li>
    <a href="#timeoff">Time Off in Calendar</a>
  </li>
  <li>
    <a href="#grouping">Grouping in Lists</a>
  </li>
  <li>
    <a href="#hidecolumns">Hide Columns in Lists</a>
  </li>
  <li>
    <a href="#sessiontimeout">Session Timeout</a>
  </li>
  <li>
    <a href="#extensions">HTML5 Extensions</a>
  </li>
  <li>
    <a href="#sandbox">Testing Data Model Extensions in a Sandbox</a>
  </li>
</ul><h2>
  <a name="timeoff" id="timeoff" class="mce-item-anchor"></a>Time Off in Calendar</h2><p>A lot or users spend most of their time in the time tracking calendar of time cockpit. To reduce the need for switching to other modules in the application, it is now possible to maintain time off like vacations, sick leave or compensatory time directly in the calendar.</p><p>There is a new area between the header of the calendar and the time sheet entries, that shows full-day time off items like multi-day vacations or sick-leave. If a time off item only lasts a few hours, it is displayed directly in the calendar.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/05/time-off-in-calendar.png" />
</p><p>You have multiple ways to create new time off items:</p><ul>
  <li>You can use the context menu in the calendar or in the new time off area.</li>
  <li>You can use the new calendar icon in the toolbar above the calendar.</li>
</ul><h2>
  <a name="grouping" id="grouping" class="mce-item-anchor"></a>Grouping in Lists</h2><p>Grouping in lists became much easier this month: there is a new arrow icon in each header column that allows you to use a column as group.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/05/grouping-in-lists.gif" />
</p><p>You can add multiple groups, swap them or expand and collapse all items of a group with the context menu at group level.</p><h3>Grouping by Year, Month or Day</h3><p>For date columns we have a special new feature that is only available in the HTML5 client. You can chose whether you want the default grouping behavior, or you can group your data by the year, month or day of the selected date.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/05/group-by-month.png" />
</p><h2>
  <a name="hidecolumns" id="hidecolumns" class="mce-item-anchor"></a>Hide Columns in Lists</h2><p>Another new feature in lists allows you to hide columns. There is a new icon in the toolbar that shows all available columns. Uncheck a column to remove it from the table below.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/05/hide-columns.png" />
</p><p>Additionally, there is also a "Hide" button in the menu of each column header.</p><h2>
  <a name="sessiontimeout" id="sessiontimeout" class="mce-item-anchor"></a>Session Timeout</h2><p>Within the lasts months we had the problem, that authentication was required multiple times during a working day in the HTML5 client. In the new version you should stay authenticated for 24 hours. Every time you use the application, the expiration time span is extended, so it needs 24 hours of inactivity to ask the HTML5 client for authentication again. If you are booking your working time continously during your day, you should be able keep you session active for a whole work week.<br /></p><h2>
  <a name="extensions" id="extensions" class="mce-item-anchor"></a>HTML5 Extensions</h2><p>During the last month we have worked hard to allow custom extensions in the HTML5 client. Finally, our first extension is finished. It is about a resource planning solution for our customer <a href="http://www.cubido.at/" title="cubido" target="_blank">cubido</a>. There are three custom views that allow managers to enter resource planning data per employee, customer, project and task, and view analyses either by employee or by customer.</p><p>
  <img title="Resource planning in time cockpit" src="{{site.baseurl}}/content/images/blog/2016/05/resource-planning-data-entry.png" />
</p><p>The new views are seamlessly embedded in the menu like the calendar or lists in time cockpit. They are opened in an <em>IFrame</em> below the menu, so the custom code can be deployed to any location (e.g. customer-specific web app in <em>Microsoft Azure</em>).</p><p class="showcase">If you want to write custom extensions for your time cockpit account, please contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We would be happy to guide you through the first steps.</p><h2>
  <a name="sandbox" id="sandbox" class="mce-item-anchor"></a>Testing Data Model Extensions in a Sandbox</h2><p>If you are customizing the time cockpit data model, sometimes it may be helpful to have a test environment with all your productive data to test your modifications before you deploy them in your productive environment. We are now able to offer a sandbox environment that is a copy of your productive environment.<br /></p><p>
  <a href="~/blog/2016/05/27/Playing-in-the-Sandbox" title="Sandbox environment">Read more ...</a>
</p>