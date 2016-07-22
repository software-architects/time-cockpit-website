---
layout: blog
title: What's New in Version October 2014
teaser: As announced last month, we have made more performance improvements this month. This time we have focused on the client database. If it takes some time to open the time sheet form in the calendar in your environment, the new version may improve the loading time significantly.
author: Karin Huber
date: 2014-09-30
bannerimage: /content/images/blog/2014/09/time-cockpit-october-2014.png
lang: en
permalink: /blog/2014/09/30/Whats-New-in-Version-October-2014
---

<p xmlns="http://www.w3.org/1999/xhtml">The new version October 2014 (1.29) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Changes in the New Version</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Redesigned Time Sheet Templates</h3><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit has had support for time sheet templates for years. Until the last version, templates could be found in time cockpit's ribbon. In the latest time cockpit version we completely redesigned time sheet templates. The two most important changes visible to you as an end user are:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>We moved the templates away from the ribbon into a separate tab.</li>
  <li>We now support <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripts</a> as a data source for time sheet templates. As script allow you to access nearly any data source (locally installed and available via web), this open endless possibilities for generating templates from other applications.</li>
</ol><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="~/blog/2014/09/30/Redesigned-Time-Sheet-Templates">Read more ...</a>
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Performance</h3><p xmlns="http://www.w3.org/1999/xhtml">As announced last month, we have made more performance improvements this month. This time we have focused on the client database. If it takes some time to open the time sheet form in the calendar in your environment, the new version may improve the loading time significantly.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="~/blog/2014/08/28/Enhancements-in-Time-Cockpits-Database-Performance">Read more about our performance improvements ...</a>
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Radio Buttons in Filters</h3><p xmlns="http://www.w3.org/1999/xhtml">Radio buttons in forms have been available for a long time. Until now, it was not possible to use them in the filter area. In the new version you can replace combo boxes by radio button lists also in filters.</p><p xmlns="http://www.w3.org/1999/xhtml">To add a combo box to the filter you simply have to specify a <a href="http://help.timecockpit.com/?topic=html/f8066acc-858f-6f42-927d-41c3d81de7de.htm" target="_blank">BoundCell</a> with the name of the relation as <a href="http://help.timecockpit.com/?topic=html/5162fe29-9ac1-5c12-e5fb-f980e39ccf61.htm" target="_blank">FilterPath</a>. Relations are displayed as combo boxes per default. If you want to specify more detailed information for the combo box you can also use the <a href="http://help.timecockpit.com/?topic=html/0bc0dca0-3146-0767-90a6-7b6eb5d4ee86.htm" target="_blank">RelationCell</a> instead. This allows for example to add filters or to choose the display property.</p>{% highlight javascript %}...
&lt;BoundCell FilterOperator=&quot;=&quot; FilterPath=&quot;APP_JourneyMeansOfTransport&quot; /&gt;
...{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/09/combo-box-filter.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">If you want to show radio buttons instead, replace the <a href="http://help.timecockpit.com/?topic=html/f8066acc-858f-6f42-927d-41c3d81de7de.htm" target="_blank">BoundCell</a> or <a href="http://help.timecockpit.com/?topic=html/0bc0dca0-3146-0767-90a6-7b6eb5d4ee86.htm">RelationCell</a> by the <a href="http://help.timecockpit.com/?topic=html/06e83ccb-719a-bdc2-6c32-260222a1b6cd.htm" target="_blank">RadioButtonCell</a>. Every combo box entry will be displayed as radio button.</p>{% highlight javascript %}...
&lt;RadioButtonCell FilterOperator=&quot;=&quot; FilterPath=&quot;APP_JourneyMeansOfTransport&quot; /&gt;
...{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/09/radio-button-filter.png" />
</p>