---
layout: blog
title: Hotfix for Tablet PCs
teaser: On tablet pc's and on pc's which have the service 'Tablet PC Input Service' activated the following exception may occur when viewing a list.
author: Karin Huber
date: 2010-51-21
bannerimage: 
permalink: /blog/2010/09/21/Hotfix-for-Tablet-PCs
---

<p xmlns="http://www.w3.org/1999/xhtml">On tablet pc's and on pc's which have the service 'Tablet PC Input Service' activated the following exception may occur when viewing a list:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <span class="InlineCode">
    {% highlight javascript}Object reference not set to an instance of an object.&#xA;&#xA;   at System.Windows.Automation.Peers.AutomationPeer.EnsureChildren()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateChildrenInternal(Int32 invalidateLimit)&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.Automation.Peers.AutomationPeer.UpdateSubtree()&#xA;   at System.Windows.ContextLayoutManager.fireAutomationEvents()&#xA;   at System.Windows.ContextLayoutManager.UpdateLayout()&#xA;   at System.Windows.ContextLayoutManager.UpdateLayoutCallback(Object arg)&#xA;   ...{% endhighlight %}
  </span>
</p><p xmlns="http://www.w3.org/1999/xhtml">In our next version 1.4 that will be released in october, this error will be solved.</p><p xmlns="http://www.w3.org/1999/xhtml">If you need a solution for this error earlier you might install version 1.3.1. Before you install the new version, you will have to uninstall the currently installed version on your pc.</p><p xmlns="http://www.w3.org/1999/xhtml">Versions 1.3 and 1.3.1 are compatible and are able to sync with one another. If you are using a previous version of time cockpit and want to upgrade to 1.3.1 all other devices and users in your account will have to upgrade to 1.3 or 1.3.1 too.</p>