---
layout: blog
title: Time Cockpit in Remote Desktop and Workstation Sharing Scenarios 
author: Simon Opelt
bannerimage: 
permalink: /2010/08/30/Time-Cockpit-in-Remote-Desktop-and-Workstation-Sharing-Scenarios-
---

<p xmlns="http://www.w3.org/1999/xhtml">Upon popular request I would like to explain the current possibilities and limitations of time cockpit in advanced multi-user scenarios like using <a href="http://en.wikipedia.org/wiki/Remote_Desktop_Services" target="_blank">Remote Desktop Services</a> or sharing workstations (using <a href="http://en.wikipedia.org/wiki/Fast_user_switching" target="_blank">user switching</a>).</p><p xmlns="http://www.w3.org/1999/xhtml">Besides the basic features (creating several users in one account, setting up multiple devices per user...) different scenarios of concurrent sessions on one pc, workstation or server are possible. The basic rule is if you are using different windows accounts (domain or local) everything should work as expected.</p><p xmlns="http://www.w3.org/1999/xhtml">After installing time cockpit on a machine (running a Windows server or client operating system) every user can set up time cockpit using completely independent configurations and database file locations. Multiple users can be logged in and running time cockpit at the same time. There are only a few minor limitations which may apply:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Only one version of time cockpit can be installed per machine.</li>
  <li>We currently do not support sharing workstations when using the same domain user or local windows account. Every user has to log in using a different account.</li>
  <li>If two users on the same machine track a common folder (e.g. C:\Data\Shared) using the file system signal tracker we cannot determine which user or process is causing a certain file system operation and it will show up in the signals of both users. This is a limitation of the currently used API. We chose the simple API which is available in .NET and does not require any unmanaged code or higher privileges. In the future we might look into creating an optional <a href="http://www.microsoft.com/whdc/driver/filterdrv/default.mspx" target="_blank">file system filter driver</a> which would provide more detailed information for these advanced scenarios.</li>
</ul>