---
layout: blog
title: What's New in Version June 2015
excerpt: May has been the second month in a row where we focused our development efforts predominantly on the new HTML5 time tracking calendar. We think the calendar has reached a state where it provides real value even for productive time booking. Give it a try, we would love to hear your feedback.
author: Karin Huber
date: 2015-05-29
bannerimage: /content/images/blog/2015/05/time-cockpit-june-2015.png
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: /de/blog/2015/05/29/Was-ist-neu-in-der-Version-Juni-2015
permalink: /blog/2015/05/29/Whats-New-in-Version-June-2015
---

<p>The new version June 2015 (1.37) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>HTML5 Time Tracking Calendar
<br /></h2><p>May has been the second month in a row where we focused our development efforts predominantly on the <a href="https://web.timecockpit.com" target="_blank">new HTML5 time tracking calendar</a>. There are still many functions you know from the existing full- and Silverlight-clients that have not made it into the HTML5 version yet. However, we think the calendar has reached a state where it provides real value even for productive time booking (e.g. accessing time cockpit from a customer's PC that has no Silverlight installed). Give it a try, we would love to hear your feedback. Please note that customers who extensively customized time cockpit will still face some issues in the HTML5 preview. Don't hesitate to <a href="mailto:support@timecockpit.com">inform us</a> about problems you have with the HTML5 client. We will do our very best to make sure you can benefit from time cockpit's new browser client as soon as possible.</p><p>In this blog article we summarize the features we added during the last weeks:<br /></p><h3>Drag &amp; Drop
<br /></h3><p>It is now possible to move and resize time sheet entries with the mouse. The following operations are possible:</p><ul>
  <li>
    <strong>Resize</strong>: If you move the mouse cursor over the top or bottom border of an time sheet entry the resize cursor will appear. Now you can click and move the mouse until you have reached the desired size.
<br /></li>
  <li>
    <strong>Move</strong>: Move the mouse cursor over the time sheet entry so that no resize cursor is visible. If the time sheet entry is too small, zoom in the calendar until you can grab the entry. Then click the mouse and move the time sheet entry to the desired location.</li>
  <li>
    <strong>Copy</strong>: Copying time sheet entries works just like moving them. Additionally, you have to press CTRL before releasing the left mouse button. A small plus sign next to the cursor will indicate, that the time sheet entry will be copied instead of moved.</li>
</ul><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-time-sheet-entry-with-mouse.gif" />
</p><p>You can cancel all three operations by pressing ESC before releasing the left mouse button.</p><p>One operation you might know from the full client is still missing - you cannot draw new time sheet entries with the mouse for a desired timespan. We plan to add this popular feature soon. Currently you can only double click the desired begin time. This will open a time sheet form.</p><h3>Copy</h3><p>Additionally to copying items with the mouse, there is a new icon above the calendar to create a copy of the currently selected time sheet entry. You can use it to copy entries e.g. from one month to another.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-time-sheet-entry.png" />
</p><h3>Working Hours Chart</h3><p>There is a very early preview of the working hour charts in the new version. We have not made a final decision how the new working hour charts will look like, but we hope in the meantime, the preliminary charts will help you when using the new HTML5 calendar.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/working-hours-chart.png" />
</p><h3>Now Indicator</h3><p>The current time is marked with a red line. If you are doing your time booking in realtime, this is good indicator for the last end time to use.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/now-indicator.png" />
</p><h2>Lists &amp; Forms</h2><h3>Copy Items</h3><p>Just like in the new calendar, it is now possible to create copies of the currently selected item in lists. There is a new icon in the toolbar above lists:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-entity.png" />
</p><p>The opened form shows an indicator in the right upper corner, noting that you deal with a copy of an existing item:<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-item-form.png" />
</p><h3>Dependent Comboboxes in Filters</h3><p>By now, only the forms to add or edit items could use dependent comboboxes like for example customer and project. That means the project combobox is empty as long as no customer is selected. When a customer is selected, all projects for the customer are loaded and displayed in the combobox. Filter forms in lists work very similar to the edit forms of items, but dependent comboboxes did not work. We removed that limitation in this month's version of the HTML5 client.</p><h3>Default Values in Forms</h3><p>Time cockpit contains a powerful system of default value. Of course you can specify static values that are used when creating new items. Above that, time cockpit's data model supports formulas for default values. With that, time cockpit can suggest a value depending on your input in other fields of the corresponding item. We have some larger customers who make heavy use of this time cockpit feature. Until this month's release, the HTML5 client did not support the advanced default value logic. This month we added the functionality. </p><h2>Additional Enhancements</h2><h3>Add or Delete Users</h3><p>At the moment it is not possible to add or delete users in the time cockpit application. Instead, you have to go to the website <a href="http://www.timecockpit.com">http://www.timecockpit.com</a>, log in and go to the account administration. There you can manage the users for your account. In the new HTML5 version you will now get an informative message if you try to change user data directly in the time cockpit application.</p>