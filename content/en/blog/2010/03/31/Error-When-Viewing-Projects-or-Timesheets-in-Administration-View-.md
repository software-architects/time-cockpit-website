---
layout: blog
title: Error When Viewing Projects or Timesheets in Administration View 
author: Karin Huber
bannerimage: 
permalink: /2010/03/31/Error-When-Viewing-Projects-or-Timesheets-in-Administration-View-
---

<p xmlns="http://www.w3.org/1999/xhtml">Some time cockpit beta users reported problems when viewing projects or timesheets in the administration module. The following exception occured when they tried to open a list of projects or timesheets:</p><p class="Code" xmlns="http://www.w3.org/1999/xhtml">Object reference not set to an instance of an object.</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="at System.Windows.Automation.Peers.AutomationPeer.EnsureChildren()&#xA;at System.Windows.Automation.Peers.AutomationPeer.UpdateChildrenInternal(Int32 invalidateLimit)&#xA;at System.Windows.Automation.Peers.AutomationPeer.UpdateChildren()&#xA;..." xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="text" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Finally we found out that this exception was caused by a windows service named "Tablet PC Input Service" and it is unique to entities that contain date and time fields. Stopping this service solves the problem.</p><p xmlns="http://www.w3.org/1999/xhtml">Find more information under <a href="http://connect.microsoft.com/VisualStudio/feedback/details/316681/nullreferenceexception-in-system-windows-automation-peers-groupitemautomationpeer-getchildrencore" target="_blank">http://connect.microsoft.com/VisualStudio/feedback/details/316681/nullreferenceexception-in-system-windows-automation-peers-groupitemautomationpeer-getchildrencore</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Workaround</h2><p xmlns="http://www.w3.org/1999/xhtml">To resolve this problem stop the "Tablet PC Input Service". </p>