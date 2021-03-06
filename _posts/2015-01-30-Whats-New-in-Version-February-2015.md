---
layout: blog
title: What's New in Version February 2015
excerpt: This month we have put our focus on better error diagnostics and minor improvements in the time sheet calendar. It has become much easier to send us your log files, performance for booking with time sheet templates has been improved, signal lanes are highlighted, etc.
author: Karin Huber
date: 2015-01-30
bannerimage: /content/images/blog/2015/01/time-cockpit-february-2015.png
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: /de/blog/2015/01/30/Was-ist-neu-in-der-Version-Februar-2015
permalink: /blog/2015/01/30/Whats-New-in-Version-February-2015
---

<p class="showcase">The new version February 2015 (1.33) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Changes in the New Version</h2><h3>Error Diagnostics and Resetting Configuration</h3><p>We have extended the options dialog by two new features. You will find them in the "Log Options" section:</p><ul>
  <li>
    <strong>"Send log files to</strong>
    <a href="mailto:support@timecockpit.com&quot;">
      <strong>support@timecockpit.com"</strong>
      <br />
    </a>
    <a href="mailto:support@timecockpit.com&quot;:"></a>When something goes wrong in time cockpit we often ask you for the log files to diagnose the problem. By now you had to open the folder with the log files, add all log files to a zip archive and send an email to us with the zip archive attached. Now, this is all down for you automatically. The created email will be opened in your default email client and you will just have to hit "Send".</li>
  <li>
    <strong>"Delete local data and reset time cockpit"</strong>
    <br />
 When something really goes wrong and you want to throw away all your local data and reload everything from the server you had to manually delete some files and restart time cockpit to be able to reconfigure time cockpit. "Delete local data and reset time cockpit" will do this for you. It deletes your local database and the configuration file with your account information and then it will restart time cockpit. Time cockpit will ask you again for all of your account information (user name, password and signal data password). Then it will fetch all data from the server. Do not use this feature if you are not sure if there are unsynced changes on your client.</li>
</ul><p>
  <img title="Options Dialog" src="{{site.baseurl}}/content/images/blog/2015/01/options-dialog.png?mw=500" alt="Options Dialog" />
</p><p>There are scenarios where time cockpit may not be able to start. For this case we have added two new shortcuts to the program files folder: <em>%programfiles%/software architects/time cockpit/time cockpit 2010</em>. They do the same like the buttons in the options dialog but you do not need to start time cockpit to run them.</p><p>
  <img title="Shortcuts in Program Files" src="{{site.baseurl}}/content/images/blog/2015/01/diagnostic-shortcuts.png" alt="Shortcuts in Program Files" />
</p><h3>Timesheet Template Improvements</h3><p>We have added some improvements for time sheet templates in the calendar. Only <a href="~/blog/2014/09/30/Redesigned-Time-Sheet-Templates">templates that are generated by a query or a script</a> are affected by this changes. For templates in the "My time sheet templates" area nothing has changed. For scripts or query templates the following changes have been made:</p><ul>
  <li>
    <strong>Performance:</strong> When selecting a template and dragging a new time sheet entry with the mouse, there was a delay of multiple seconds in some accounts depending on the customizations that have been made to the time sheet entity and form. In the new version you should immediately see the dragged time sheet entry.</li>
  <li>
    <strong>Selection in Silverlight:</strong> There was a bug in the Silverlight client that did not always update the time sheet templates when a new time range was selected by clicking on a day, time sheet entry or signal.
<br /></li>
</ul><p>Additionally, we have improved the performance of the docking panels in the calendar. If you have experienced performance problems in the time tracking calendar since <a href="http://www.timecockpit.com/blog/2014/09/30/Redesigned-Time-Sheet-Templates">docking has been introduced in October 2014</a>, the new version may solve this problem.</p><h3>Signal Lanes</h3><p>In the signal lanes area it is not possible to add new time sheet entries by dragging them with the mouse. We have added a light background color to this area to make it clearer that this area is reserved for signals. Especially when there were no point signals like sent emails, it was difficult to tell where the signal area ended and the area for time sheet entries started.</p><p>
  <img title="Signal Lane" src="{{site.baseurl}}/content/images/blog/2015/01/signal-lane.png" alt="Signal Lane" />
</p><h3>Refresh Calendar after Sync</h3><p>The time sheet calendar is not automatically refreshed when synchronization with the server has finished. So you will immediately get all changes from the server without having to click "Refresh" in the ribbon.</p><h3>Signal Tracker for TFS 2013
<br /></h3><p>We have added support for tracking work item changes and check-ins for TFS 2013 in our signal trackers.</p><h3>HTML5 Client</h3><p>For the HTML5 Client we have spent most of our time with grouping of lists. Left above the list there is a new icon that contains all the grouping information for the list. You can add new group rows, remove existing ones, change the sort order of groups, or expand and collapse the groups at every level. There will come more ways to manage groups that will be faster to use with mouse and keyboard but we want as much functionality as possible to be available for touch devices too.</p><p>
  <img title="Grouping" src="{{site.baseurl}}/content/images/blog/2015/01/grouping.png" alt="Grouping" />
</p>