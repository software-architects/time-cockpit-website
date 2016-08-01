---
layout: blog
title: Error When Viewing Projects or Timesheets in Administration View 
excerpt: Some time cockpit beta users reported problems when viewing projects or timesheets in the administration module. The following exception occured when they tried to open a list of projects or timesheets.
author: Karin Huber
date: 2010-03-31
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
permalink: /blog/2010/03/31/Error-When-Viewing-Projects-or-Timesheets-in-Administration-View-
---

<p>Some time cockpit beta users reported problems when viewing projects or timesheets in the administration module. The following exception occured when they tried to open a list of projects or timesheets:</p><p class="Code">Object reference not set to an instance of an object.</p>{% highlight text %}at System.Windows.Automation.Peers.AutomationPeer.EnsureChildren()
at System.Windows.Automation.Peers.AutomationPeer.UpdateChildrenInternal(Int32 invalidateLimit)
at System.Windows.Automation.Peers.AutomationPeer.UpdateChildren()
...{% endhighlight %}<p>Finally we found out that this exception was caused by a windows service named "Tablet PC Input Service" and it is unique to entities that contain date and time fields. Stopping this service solves the problem.</p><p>Find more information under <a href="http://connect.microsoft.com/VisualStudio/feedback/details/316681/nullreferenceexception-in-system-windows-automation-peers-groupitemautomationpeer-getchildrencore" target="_blank">http://connect.microsoft.com/VisualStudio/feedback/details/316681/nullreferenceexception-in-system-windows-automation-peers-groupitemautomationpeer-getchildrencore</a>.</p><h2>Workaround</h2><p>To resolve this problem stop the "Tablet PC Input Service". </p>