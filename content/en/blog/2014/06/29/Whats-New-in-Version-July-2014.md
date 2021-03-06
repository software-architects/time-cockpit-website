---
layout: blog
title: What's New in Version July 2014
teaser: This month we have added various productivity functions to time cockpit. Among others you can now book vacations, sick leaves and compensatory time directly in the time tracking calendar.
author: Karin Huber
date: 2014-06-29
bannerimage: 
lang: en
permalink: /blog/2014/06/29/Whats-New-in-Version-July-2014
---

<p>The new version July 2014 (1.26) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously. <br /></p><h2>Manage Vacations, Sick Leaves, and Compensatory Time-Off in Calendar
<br /></h2><p>Users who just have to track their time with time cockpit and are not responsible for invoicing or project management spend most of their time in the time tracking calendar. Only when they want to add vacation, sick leave or compensatory time-off they had to leave the calendar and find the corresponding menu items. In the new version we allow adding, editing and deleting vacation, sick leave and compensatory time-off straight in the calendar. Just right-click in the upper area of the calendar where vacations are displayed:</p><p>
  <img title="Create vacation entry in time cockpit calendar" src="{{site.baseurl}}/content/images/blog/2014/06/create-vacation-in-calendar.png" alt="Create vacation entry in time cockpit calendar" />
</p><p>To change an existing item, right-click to get the context menu for editing or deleting it:</p><p>
  <img title="Edit vacation in time tracking calendar" src="{{site.baseurl}}/content/images/blog/2014/06/edit-vacation-in-calendar.png" alt="Edit vacation in time tracking calendar" />
</p><p>Another way to add vacations, sick leaves or compensatory time is the <em>Add item</em> button in the ribbon. In the new version it allows you to add these types of items to the calendar additionally to time bookings.</p><p>
  <img title="Add vacations in time tracking calendar" src="{{site.baseurl}}/content/images/blog/2014/06/add-vacation-item.png" alt="Add vacations in time tracking calendar" />
</p><h2>Problems with Holiday and Overtime Lists</h2><p>In the last few months we heard of some problems with the limit of 2100 parameters in SQL Server. The problems occurred mainly in accounts with lots of users and lots of vacation entries and resulted in broken vacation and overtime lists. In the new version we have changed the way we pass the parameters to SQL Server to solve this issue. You are no longer limited when entering vacations in time cockpit.</p><h2>Search in Localizations</h2><p>Time cockpit allows changing all names for entities, properties, relations, error messages of validation rules and many more to fit the needs of your organization. Additionally, you can translate each of these items to as many languages as you want to. Each user can choose his preferred language in the <em>Application Menu</em> under <em>Options</em>. You can find all localizations in the <em>Customizations</em> module:</p><p>
  <img title="Edit localizations" src="{{site.baseurl}}/content/images/blog/2014/06/edit-localizations.png" alt="Edit localizations" />
</p><p>In the new version of time cockpit we offer a search box so that you can easily find all items that contain the search expression. If your company prefers to call a Task <em>Work Item</em>, just find all occurrences of task and change the translations.<img title="Search in localizations" src="{{site.baseurl}}/content/images/blog/2014/06/search-in-localizations.png" alt="Search in localizations" /></p><h2>Better Error Messages in Python Scripts</h2><p>If you write lots of IronPython Scripts in time cockpit (e.g. for actions or triggers) you probably have seen error messages that leave you guessing what went wrong. A typical example is the <em>unexpected indent</em> error. You know that somewhere in your hundreds lines of Python code some indent is wrong - but where? Or another classic error for me as a C# developer is to declare variables with <em>var</em>.</p><p>
  <img title="Python script with error" src="{{site.baseurl}}/content/images/blog/2014/06/python-script.png" alt="Python script with error" />
</p><p>In previous versions of time cockpit you only got the error message <em>unexpected token 'y', which</em> does not help too much if your Python script is larger than just a few lines.</p><p>
  <img title="Old python error message" src="{{site.baseurl}}/content/images/blog/2014/06/old-python-error-message.png" alt="Old python error message" />
</p><p>In the new version we give you the position of the error and also print the wrong line of code:</p><p>
  <img title="New python error message" src="{{site.baseurl}}/content/images/blog/2014/06/new-python-error-message.png" alt="Old python error message" />
</p><div id="mcepastebin" contenteditable="true" data-mce-bogus="1" style="position: absolute; top: 20px; width: 10px; height: 753px; overflow: hidden; opacity: 0; left: -65535px;">
  <img title="Create vacation entry in time cockpit calendar" src="{{site.baseurl}}/content/images/blog/2014/06/create-vacation-in-calendar.png" alt="Create vacation entry in time cockpit calendar" />
</div><div id="mcepastebin" contenteditable="true" data-mce-bogus="1" style="position: absolute; top: 20px; width: 10px; height: 753px; overflow: hidden; opacity: 0; left: -65535px;">
  <img title="Create vacation entry in time cockpit calendar" src="{{site.baseurl}}/content/images/blog/2014/06/create-vacation-in-calendar.png" alt="Create vacation entry in time cockpit calendar" />
</div>