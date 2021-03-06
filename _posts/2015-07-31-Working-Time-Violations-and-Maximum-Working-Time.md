---
layout: blog
title: Working Time Violations and Maximum Working Time
excerpt: In the latest version of time cockpit, we added built-in functions for monitoring wage & hour violations. This topic is important for many of our customers as violations can be costly. Time cockpit contains typical rule sets for Austria and Germany out-of-the-box. Customers in different countries or with specific working time rules can configure custom rule sets. Read more about how time cockpit can help you to stay compliant to legal obligations and policies concerning working times.
author: Alexander Huber
date: 2015-07-31
bannerimage: /content/images/blog/2015/07/keyboard_350.png
bannerimagesource: 
lang: en
tags: []
ref: /de/blog/2015/07/31/Arbeitszeitverletzungen-und-Höchstarbeitszeit
permalink: /blog/2015/07/31/Working-Time-Violations-and-Maximum-Working-Time
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2015/07/keyboard-pause.png" />Image source: <a href="https://pixabay.com/en/keyboard-computer-button-holiday-393838/" target="_blank">pixabay</a>, under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">Creative Commons</a> License</div><p class="showcase">Working time regulation vary depending on country, branch and company. There are lots of policies and regulations (e.g. laws, wage agreements, works council agreements) that have to be considered. Time cockpit covers out-of-the-box working time rules typical for Austria and Germany. Still, each company has to determine the rules that its employees have to follow and check whether time cockpit’s out-of-the-box rule set is sufficient. We made time cockpit’s working time rules configurable so you can use the feature even if you are outside of Austria or Germany or your company has very specific working time requirements. Don’t hesitate to contact us in case of questions about tailoring time cockpit to your needs.</p><p class="highlighted">As time cockpit contains special support for Austria and Germany, a more detailed version of this article is available in German. We encourage you to switch to the German version if your company is based in Austria or Germany. You can find the article at <a href="https://www.timecockpit.com/de/blog/2015/07/31/Arbeitszeitverletzungen-und-H%C3%B6chstarbeitszeit" target="_blank">Arbeitszeitverletzungen und Höchstarbeitszeit</a>.</p><h1>Working Time Limits in Time Cockpit
<br /></h1><p>If you are a professional services company, you have various needs with regards to time tracking. On the one hand, you need to track the time of your employees, because you need to bill that time to your customer. On the other hand, it is a legal obligation in a lot of countries to track the working time of your employees to document conformity to working time limits. Even if there are no legal obligations in your country, certain working time limits are necessary. If employees work extremely long over a period of time, they risk burnout and are more liable to making mistakes.<br /></p><p>For tracking billable time and working time, companies often have two kinds of time tracking systems. Time cockpit supports both, tracking billable time and working time. <br /></p><p class="showcase">In terms of working time, time cockpit supports your company in detecting wage &amp; hour violations without extra effort for your employees or your managers.<br /></p><h2>Predefined Working Time Limits for Austria and Germany</h2><p class="note">Time cockpit ships with built-in typical working time limits for Austria and Germany. Companies located in other countries or with specific working time regulations can configure custom rule sets. You can read more about defining custom working time rules below.</p><p class="note">For Austria the following limits are built-in (<a href="http://www.arbeitsinspektion.gv.at/NR/rdonlyres/002604AE-07A8-4E96-8AD9-A83F281A7EEB/0/Arbeitszeit_Arbeitsruhe_2015_Broschuere.pdf%20">Source</a>):<br /></p><ul>
  <li>10 hours maximum per day</li>
  <li>50 hours maximum per week</li>
  <li>30 minutes break after 6 hours (2x15/3x10 splits)</li>
</ul><p>For Germany the following limits are built-in (<a href="http://www.bmas.de/SharedDocs/Downloads/DE/PDF-Publikationen/a120-arbeitszeitgesetz.pdf?__blob=publicationFile">Source</a>):<br /></p><ul>
  <li>10 hours maximum per day</li>
  <li>48 hours maximum per week</li>
  <li>30 minutes break after 6 hours (2x15 splits), 45 minutes break after 9 hours (3x15 splits)</li>
</ul><p>
  <img title="Working Time Limits" src="{{site.baseurl}}/content/images/blog/2015/07/workingtimelimits.png?mw=750" />
</p><p>Per default, time cockpit does not check any working time limits. You need to enable the checks in the global settings. Additionally, you need to enable the checks that are actually performed. That is, you can disable certain checks if they do not apply to your company.</p><p>
  <img title="Global Settings" src="{{site.baseurl}}/content/images/blog/2015/07/globalsettingsform_en.png?mw=500" />
</p><h3>Travel Times</h3><p>Per default, time cockpit does not take travel times into account for determining an exceedance of a working time limit. A time sheet entry counts as a travel if a <em>means to transport</em> is selected. If travel times are taken into account for working time limits, you can enable the flag <em>Travel Time is Working Time</em>.</p><h3>Duration Bookings</h3><p>Time sheet entries that do not have begin- and end time (so called <em>duration bookings</em>) are not taken into account when validating working time limits. This is because in that case, time cockpit cannot check if a break is actually held after a given amount of time or not.</p><h2>How to View Wage &amp; Hour Violations</h2><p>If you have selected a working time limit in the global settings, you can view working time violations at <em>User --&gt; Working Time --&gt; Working Time Violations</em>.</p><p>
  <img title="Working Time Violations" src="{{site.baseurl}}/content/images/blog/2015/07/workingtimevalidations_en.png?mw=750" />
</p><h3>Settings for Working Time Limits</h3><p>If not all rules of a working time limit should be checked, you can disable certain checks in the global settings. You can disable the check for:</p><ul>
  <li>the maximum number of hours per day,</li>
  <li>the maximum number of hours per week,</li>
  <li>and the check if enough breaks where held in a given period of time.</li>
</ul><p>If you disable, for example, the check for maximum hours per day, time cockpit will not generate working time violations for that rule.</p><p>Additionally, you can configure if working time limits for a user should be checked. This setting is helpful if you have employees in your company for whom e.g. legal obligations in terms of working time limits do not apply (e.g. management personnel or freelancers).</p><p>
  <img title="Disable Violation Check for User" src="{{site.baseurl}}/content/images/blog/2015/07/violationusersettings.png?mw=500" />
</p><h2>Custom Working Time Limits</h2><p>In <em>User --&gt; Working Time --&gt; Working Time Limits</em> you can define your custom limits that apply to your company. If you have, for example, a lower limit of maximum hours per day, you can create a customer working time limit for that case. You need to set four parameters for your limit:</p><ul>
  <li>the maximum working time per day in hours</li>
  <li>the maximum working time per week in hours</li>
  <li>after how many hours an employee need to take the first break</li>
  <li>the length of the break in minutes</li>
</ul><p>
  <img title="Custom Working Time Limit" src="{{site.baseurl}}/content/images/blog/2015/07/customworkingtimelimit.png?mw=500" />
</p><p class="showcase">Custom working time limits have one restrictions. As for now, you cannot define complex splitting options for breaks (e.g. 2x15/3x10 minutes).</p><h2>Complex Working Time Limit Scenarios</h2><p>As for our home country Austria, the law on working time and breaks leaves some room for flexibility. Maybe that is the case in your country too. Since time cockpit cannot meet all possible scenarios only by configuration, it offers the possibility to implement complex regulations through individual coding. If you are interested in how to implement such complex scenarios, feel free to contact us at <a href="mailto:support@timecockpit.com. ">support@timecockpit.com. </a></p><h2>Further Tool Support</h2><p>Working time limits are only one aspect where time cockpit can help you. As said earlier, time cockpit only visualizes the wage &amp; hour violations of your employees. The organizational measures you take based on this are up to you. However, time cockpit can help you to communicate wage &amp; hour violations more efficiently:</p><ul>
  <li>Notify Affected Employees:
<br />
Using a <a href="~/blog/2015/05/18/Integrating-On-Premise-Resources-Into-Time-Cockpit-" target="_blank">WebJob</a> you could send the working time violations directly to an employee. </li>
  <li>Approval Process:
<br />
If your company has an approval process in place in time cockpit, wage &amp; hour violations could be checked in the course of an approval process. If an employee exceeds working time limit, she cannot approve her time sheet entries, but needs to get in touch with her manager.</li>
  <li>Prevent time sheet entries:
<br />
A little bit restrictive, but possible; if an employee would exceed a working time limit with a time sheet entry, time cockpit could prevent the creation of the time sheet entry.</li>
</ul><h2>Conclusion</h2><p>To ensure compliance with legal obligations can be quite cumbersome, but it is a necessity. In the future flexibility in terms of working time limits may shrink or expand. That is why it is important to have a system in your company that helps you to enforce current working time limits and that is able to handle future changes of legal obligations.  No matter what rules are relevant for your company, it is very likely that time cockpit can support them. If you cannot configure it yourself, the time cockpit team will be glad to help you.</p>