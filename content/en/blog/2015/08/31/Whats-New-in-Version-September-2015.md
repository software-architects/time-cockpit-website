---
layout: blog
title: What's New in Version September 2015
teaser: This month, the graphical time sheet calendar of our HTML5 client preview made a huge step forward. We worked hard to add many of the features you love from time cockpit's full client. Additionally, the HTML5 client received a complete makeover. In this blog article we summarize what has changed since last month. We hope you like our work and encourage you to give the new HTML5 client a try. 
author: Rainer Stropek
date: 2015-08-31
bannerimage: /content/images/blog/2015/08/time-cockpit-september-2015.png
lang: en
permalink: /blog/2015/08/31/Whats-New-in-Version-September-2015
---

<p>The new version September 2015 (1.40) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.<br /></p><p>This month, the graphical time sheet calendar of our HTML5 client preview made a huge step forward. We worked hard to add many of the features you love from time cockpit's full client. Additionally, the HTML5 client received a complete makeover. In this blog article we summarize what has changed since last month. We hope you like our work and encourage you to give the new HTML5 client a try.<br /></p><p class="showcase">Do you want to try time cockpit's HTML5 client but you have no time cockpit account or you do not want to use preview software with your production environment? We have a solution for you: Use the URL <a href="https://web.timecockpit.com/DemoLogin" target="_blank">https://web.timecockpit.com/DemoLogin</a> to access a demo environment with demo data. You will not be prompted for user and password. The link will lead you directly to the HTML5 demo.</p><h2>Working Hours Charts
<br /></h2><p>Time cockpit contains powerful functions for calculating planned and actual hours of work. When doing the calculations, time cockpit considers a person's employment contract, vacations, holidays, sick leaves, compensatory time off, etc. In time cockpit's graphical time sheet calendar, the user sees a summary of the working hour calculation results. This month we added the working time summary to the HTML5 preview.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/08/working-hours.png" />
</p><p>If you look closely at the screenshot above, you might notice a difference compared to the working time chart in time cockpit's full client: Lump sum overtime is now included. Here is how this new feature of the working time chart works:</p><ul>
  <li>If you specify a value in <em>Included Overtime Hours per Month</em> for a user (see menu item <em>Users / User Information / User Details / Weekly Hours of Work</em>), it is now visualized in the bar chart. In the screen shot above you see a slightly lighter area at the right end of the bars. This represents the lump sum overtime payment.</li>
  <li>You can expand the details for the working hours beneath the bar charts. The numbers also show included overtime. In the screen shot above you can see that the planned hours of work for calendar week 35 is between 38.50 and 40.94 hours. The difference comes from the specified value in <em>Included Overtime Hours per Month</em>.</li>
  <li>If you hover over the chart, you will see absolute values instead of the deviation.</li>
</ul><p class="showcase">Note that time cockpit's online help contains a detailed <a href="https://help.timecockpit.com/?topic=html/d0ca12b0-d108-433b-8b2c-92d37d29fc02.htm" target="_blank">description of planned hours of work and overtime calculation</a>.</p><h2>Formatting Profiles</h2><p>While the working time chart described in the previous chapter focuses on the internal view (e.g. how many hours did I work?), formatting profiles are often used for external-oriented KPIs (e.g. how many hours were billable? how long did I work for which customer?). A basic version of formatting profiles has been part of time cockpit's HTML5 preview for some months. This month we added the KPI results to formatting profiles (e.g. number of hours, revenue, etc.).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/08/formatting-profile-values.png" />
</p><p class="showcase">Are formatting profiles new to you? Time cockpit's online help contains a detailed <a href="https://help.timecockpit.com/?topic=html/95b1ce59-c4ec-461a-ba9b-cb978295c3de.htm" target="_blank">description about how to configure formatting profiles</a>.</p><h2>Time Sheet Templates</h2><p>Templates make it very easy to create time sheet records. Time cockpit pre-fills new time sheet records with data from the selected template. This is useful if you regularly book identical or quite similar times (e.g. if you spend half of the week at a single customer). This month, we added support for time sheet templates to the HTML5 client. Either double-click a template or drag it to the calendar (mouse or touch). A pre-filled time sheet form will open. Note that at the moment it is not possible to create new templates in the HTML5 Client, you can only use the templates that you defined in the full client.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/08/timesheet-templates.gif" />
</p><p class="showcase">Are time sheet templates new to you? We wrote a blog article that <a href="http://www.timecockpit.com/blog/2014/09/30/Redesigned-Time-Sheet-Templates" target="_blank">describes how to create templates</a>.</p><h2>Time-Off in Calendar</h2><p>The calendar now shows time off like vacation or legal holidays. At the moment it is not possible to add and edit such data in the calendar. You have to switch to the corresponding lists to create new vacation, legal holidays or sick leave entries.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/08/vacation.png" />
</p><h2>Grouping Context-Menu</h2><p>We did not only focus on time sheet calendar enhancements this month. We also invested some time to improve the user experience for people who primarily work with tabular views. You can now right-click on group headers to get a context menu with the following options:</p><ul>
  <li>
    <em>Collapse/expand group</em>: Use these command to hide/show the details of the selected group.</li>
  <li>
    <em>Move group down/up</em>: Change the grouping order by moving the selected grouping criteria down/up.</li>
  <li>
    <em>Remove group</em>: Remove the selected grouping.</li>
</ul><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/08/grouping-2.gif" />
</p><h3>General Layout Changes</h3><p>Above the things mentioned above, we made various design changes to make the HTML5 client easier to use. Here are some examples:<br /></p><ul>
  <li>Forms are no longer opened on the right side of the screen, they are now centered.
<br /></li>
  <li>We redesigned colors, fonts, margins, etc. of the menu, headings, etc.
<br /></li>
  <li>We moved the Usersnap tool to the upper right corner. You can use it to give visual feedback about the HTML5 client.
<br /></li>
</ul><p>Do you like our changes? We would love to hear your feedback.</p>