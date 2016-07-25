---
layout: blog
title: Performance Problems in the Online Client of Time Cockpit
teaser: You may have recognized that the performance of the time cockpit online client is very bad today. Every database request takes multiple seconds, because the cached time cockpit DataContext, that is used to connect to the database, is rebuilt each time instead or reusing the cached version.
author: Karin Huber
date: 2013-09-09
bannerimage: 
lang: en
permalink: /blog/2013/09/09/Performance-Problems-in-the-Online-Client-of-Time-Cockpit
---

<p>You may have recognized that the performance of the time cockpit online client is very bad today. Every database request takes multiple seconds, because the cached time cockpit DataContext, that is used to connect to the database, is rebuilt each time instead or reusing the cached version.</p><p>In the meantime we have found the root of the problem. We have been hit by a bug in .NET 4. You can find more information about the problem at <a href="https://connect.microsoft.com/VisualStudio/feedback/details/764911/memorycache-gets-disposed-after-pollinginterval-when-used-in-webapp-in-integrated-pipeline-mode#details" target="_blank">https://connect.microsoft.com/VisualStudio/feedback/details/764911/memorycache-gets-disposed-after-pollinginterval-when-used-in-webapp-in-integrated-pipeline-mode#details</a>.</p><p>We are currently working on upgrading our solution to the latest Azure SDK and to .NET 4.5. We would kindly like to apologize for the inconvenience and hope that we are able to provide a solution in a few hours.</p><h2>Update 2:13 pm CEST</h2><p>We have now updated and deployed our solution with the latest Azure SDK and with .NET 4.5, and until now everything seems to be working fine. Please let us know if you still experience any performance problems in the time cockpit online client.</p>