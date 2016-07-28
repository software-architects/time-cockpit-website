---
layout: blog
title: Hotfix for Tablet PCs
excerpt: On tablet pc's and on pc's which have the service 'Tablet PC Input Service' activated the following exception may occur when viewing a list.
author: Karin Huber
date: 2010-09-21
bannerimage: 
lang: en
tags: [time cockpit]
permalink: /blog/2010/09/21/Hotfix-for-Tablet-PCs
---

<p>On tablet pc's and on pc's which have the service 'Tablet PC Input Service' activated the following exception may occur when viewing a list:</p><p>
  <span class="InlineCode">
    {% highlight text %}Object reference not set to an instance of an object.

   at System.Windows.Automation.Peers.AutomationPeer.EnsureChildren()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateChildrenInternal(Int32 invalidateLimit)
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()
   at System.Windows.ContextLayoutManager.fireAutomationEvents()
   at System.Windows.ContextLayoutManager.UpdateLayout()
   at System.Windows.ContextLayoutManager.UpdateLayoutCallback(Object arg)
   ...{% endhighlight %}
  </span>
</p><p>In our next version 1.4 that will be released in october, this error will be solved.</p><p>If you need a solution for this error earlier you might install version 1.3.1. Before you install the new version, you will have to uninstall the currently installed version on your pc.</p><p>Versions 1.3 and 1.3.1 are compatible and are able to sync with one another. If you are using a previous version of time cockpit and want to upgrade to 1.3.1 all other devices and users in your account will have to upgrade to 1.3 or 1.3.1 too.</p>