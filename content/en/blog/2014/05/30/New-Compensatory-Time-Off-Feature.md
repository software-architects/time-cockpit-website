---
layout: blog
title: New Compensatory Time Off Feature
teaser: Time cockpit has been able to handle overtime agreements for quite a long time. However, many customers have told us that they would like a function to explicitly book compensatory time so that their time sheet calendar would not be empty on such a day. We added this function to time cockpit in the latest release.
author: Rainer Stropek
date: 2014-05-30
bannerimage: 
lang: en
permalink: /blog/2014/05/30/New-Compensatory-Time-Off-Feature
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/05/CompTime/CompTimeHeader.jpg" />Image source: <a href="https://www.flickr.com/photos/rtadlock/2716877199/" target="_blank">https://www.flickr.com/photos/dok1/6555922825/</a>, under <a href="https://creativecommons.org/licenses/by/2.0/deed.de" target="_blank">Creative Commons</a> License</div><h2>Overtime</h2><p>Our customers have different ways to handle overtime. Depending on the country, they can freely make custom arrangements with employees or have to stick to overtime labor laws. If employees get compensated for overtime, there are basically two options:</p><ul>
  <li>Employees get overtime pay.</li>
  <li>Employees take time off (aka <em>time off in lieu</em>, <em>compensatory time</em>; in German called <em>Zeitausgleich</em>).</li>
</ul><h2>New <em>Compensatory Time</em> Feature in Time Cockpit</h2><p>Time cockpit has been able to handle both approaches for quite a long time. In the second case, employees just had not to book anything during compensatory time. Their time sheet calendar would be empty for the corresponding time span. Time cockpit would automatically compare the planned time and the effective working hours and detect that everything is ok.</p><p>However, many customers have told us that they would prefer a function to explicitly book compensatory time so that their time sheet calendar would not be empty on such a day. This also enables them to create compensatory time bookings in advance so that colleagues know that they will not be in the office.</p><p>In the June 2014 release we implemented this feature. You can now book compensatory time and time cockpit visualizes it in the time sheet calendar (click on images to enlarge).</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:5f74abf1-19ab-44a3-b2f4-ab5c6264d868" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:89f7a675-feaf-4dc4-8c49-15acd7ec4842" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p>Let’s take a closer look at how this new functionality works.</p><h2>The Basis: Planned Working Hours</h2><p>In time cockpit, you can configure the planned hours of work per employee. Note that time cockpit supports various scenarios:</p><ul>
  <li>The planned working time for a certain employee may change over time. She might work 20h per week while studying at the university and change to a 40h week after she graduates. In this case, create multiple entries in <em>Weekly Hours of Work</em> and set <em>Valid From</em> and <em>Valid To</em> accordingly.</li>
  <li>Part time employees might not be present every day. In time cockpit, you can set the planned working hours per weekday, not just for the entire week.</li>
  <li>Some customers have arrangements with their employees that a certain number of overtime hours per month is included in the salary (in German “Überstundenpauschale”). For this case use time cockpit’s field <em>Included Overtime Hours per Month</em>.</li>
</ul><p>The following screenshot shows how to configure working hours in time cockpit (click to enlarge):</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:3349d5f8-1942-4666-96d3-ebbc30c40dd4" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><h2>Working Time Statistics</h2><p>Once the planned working time has been set up and you have created your time sheet records, time cockpit informs you of your working time status.</p><h3>Time Sheet Calendar</h3><p>The time sheet calendar contains bullet charts indicating whether you are over or under your planned working time. The following screenshot shows an example. In this case, Time Smith worked more than the planned 7.7h on the selected day. He didn’t work as much as planned in the selected week (28.5h instead of 38.5). However, everything is ok for the month (171.13h effective working time vs. 169.4h planned).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/05/CompTime/WorkingTimeBulletChart.png" />
</p><p>By hovering over the chart, you get a tabular view of the working time statistic:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/05/CompTime/WorkingTimeInCalendar.png" />
</p><h3>Overtime Statistic</h3><p>More detailed statistics are available in the <em>Users</em> menu. The following two screenshots show the reports which come out of the box. Note that time cockpit is highly extensible. Without any programming, you can add additional lists and even add nicely formatted print layouts, too. If you want to know more about time cockpit’s extensibility features, please contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/05/CompTime/TargetActualComparison.png" />
</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/05/CompTime/OvertimeStatistic.png" />
</p><h2>Calculation Logic</h2><p>The <a href="http://help.timecockpit.com/?topic=html/d0ca12b0-d108-433b-8b2c-92d37d29fc02.htm" target="_blank">time cockpit online help</a> contains a detailed description of how overtime is calculated.</p><p>Technically, you do not need to book compensatory time. You can just leave the corresponding time span empty in time cockpit’s time sheet calendar. Compensatory time bookings do not change time cockpit’s existing overtime calculation logic. Its primary purpose is documentation. Months later you might wonder why you did not create and time sheet records on a certain day. If you create a compensatory time booking, you will immediately see that this was done on purpose.</p>