---
layout: blog
title: Version Autumn 2012 is Available 
teaser: With the new autumn release you can install time cockpit on your pc or access it online via your browser from any pc you like. It is your choice! No matter which version you prefer, time cockpit is always available for you.
author: Karin Huber
date: 2012-08-21
bannerimage: 
lang: en
permalink: /blog/2012/08/21/Version-Autumn-2012-is-Available-
---

<h2>Online and Offline - Time Cockpit is Always Available For You</h2><p>With the new autumn release you can install time cockpit on your PC or access it online via your browser from any PC you like. It is your choice! No matter which version you prefer, time cockpit is always available for you.</p><h3>Time Cockpit in Your Browser</h3><p>Accessing time cockpit via browser, you can do your time tracking from any PC you like. All you need to use time cockpit in your browser is <a href="http://www.microsoft.com/silverlight/" target="_blank">Silverlight 5</a>. As soon as you have installed Silverlight, you can log in to <a href="https://login.timecockpit.com/" target="_blank">https://login.timecockpit.com</a> with your usual time cockpit credentials.</p><p>The web version of time cockpit cannot track signals. For doing that you still need the full client of time cockpit. However, you can view the signals of all devices running the full client of time cockpit in the web version. You only need to enter your signal data password in the web version and your encrypted signals will be transferred to your PC. There your signals will be decrypted and prepared for you to view them. That is how we ensure that your signals are never transferred over the internet in an unencrypted way.</p><p class="textaligncenter">
  <a href="http://login.timecockpit.com/" target="_blank">Try time cockpit online!</a>
</p><h3>Time Cockpit on Your PC</h3><p>Of course you can keep using the installed version of time cockpit – with a completely reworked timesheet calendar!</p><p class="textaligncenter">
  <a href="~/sign-in" target="_blank">Download the new version!</a>
</p><h2>The All New Timesheet Calendar</h2><ul>
  <li>In the autumn release of time cockpit, we have completely revamped the timesheet calendar. We have simplified and modernized the layout to make efficient use of the existing screen estate. Now you can use time cockpit also on smaller screens more efficiently and fluently. While redesigning the calendar, we have grouped signal data which is of similar kind (e.g. sent mails, telephone calls etc.) to one single signal track.
<br /><img src="{{site.baseurl}}/content/images/blog/2012/08/WhatsNew_1_9_Calendar_en.png" class="  " /></li>
  <li>To make time cockpit more usable on older laptops or PCs, we have completely revised and optimized signal data processing. The visualization of signal data and signal tracks in the timesheet calendar is considerably faster, so that you can see what you have been doing throughout a day near instantaneously. </li>
  <li>On some PCs we had performance issues when it came to reoccurring Outlook appointments (e.g. weekly appointments). You can now activate or deactivate the display of reoccurring appointments in time cockpit in the options dialog.
<br /><img src="{{site.baseurl}}/content/images/blog/2012/08/WhatsNew_1_9_ReoccuringAppointments_en.png" class="    mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused" /></li>
  <li>If signals in the signal track with grouped signal types (e.g. sent mails, telephone calls etc.), are overlapping, we show a tooltip that gives you a detailed outline what happened at a given point in time. From there, you can perform signal-specific actions like opening a sent mail.
<br /><img src="{{site.baseurl}}/content/images/blog/2012/08/WhatsNew_1_9_SignalTooltip_en.png" class="     " /></li>
  <li>Timesheet templates can now be created directly from the ribbon. You do not have to open the list of available timesheet templates before you can select a template and create a timesheet.
<br /><img src="{{site.baseurl}}/content/images/blog/2012/08/WhatsNew_1_9_TemplateTimesheets_en.png" class="         " /></li>
</ul><h2>List &amp; Forms</h2><div>
  <ul>
    <li>FIX: The error “Unable to connect to shared memory region…” that occasionally occurred during sync has been fixed.</li>
    <li>FIX: Up to now it was possible to define “Custom Filters” even on fields for which you had no permission to read.</li>
  </ul>
</div><h2>Administration Module</h2><ul>
  <li>You can now define separate insert, update and delete permissions on entities. Up to now we only supported the definition of a write permission which subsumed insert, update and eelete permissions.</li>
  <li>CTRL+ F can be used to find search terms in the Python Script Editor and in the TCQL Script Editor.</li>
  <li>While creating a new list, we do not execute the generated query automatically anymore. Only when the user clicks the “Execute” button, the query will be executed.</li>
  <li>Modules can now be created and edited on the server.</li>
  <li>FIX: While editing list definitions, the filter section of a list was sometimes not refreshed properly.</li>
</ul>