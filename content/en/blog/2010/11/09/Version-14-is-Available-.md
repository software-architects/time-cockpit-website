---
layout: blog
title: Version 1.4 is Available 
author: Karin Huber
bannerimage: 
permalink: /2010/11/09/Version-14-is-Available-
---

<p xmlns="http://www.w3.org/1999/xhtml">Our new version of time cockpit 1.4 is available since 8 November 2010. Main improvments are contained in the following areas:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Performance</li>
  <li>Security</li>
  <li>Presentation of lists and forms</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Please note that all users in a tenant have to switch to the new version as soon as the first user in the tenant installs this version, because users with older versions will not be able to sync their data with the server anymore. They can continue to use time cockpit, track their signals and work locally on their pc but as long as their client version is older as the server version no synchronization with the server is possible.</p><h2 xmlns="http://www.w3.org/1999/xhtml">What's changed</h2><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Performance in time sheet calendar has improved</li>
  <li>Performance of lists with a lot of rows has improved</li>
  <li>You can specify a default list and a default form for each entity, which is used if no other list or form is specified.</li>
  <li>Security
<br /><ul><li>New entities to assign roles to users</li><li>It is possible to specify permissions (read / write) for entities, properties, relations, lists, forms and actions.</li><li>You can use Environment.CurrentUser.UserDetailUuid to access the currently logged in user in TCQL.</li><li>Set definitions allow to save the result of a query under a name. The set APP_CurrentUserRoles is delivered in the time cockpit data model. The underlying query is: From R In APP_UserDetailRole Where R.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid Select New With { R.UserRole.Code }</li><li>There is a new function "In Set" in TCQL to use the result of set definitions in queries and expressions (e.g. 'Admin' In Set('CurrentUserRoles', 'Code')).</li><li>The local database is protected by a password</li></ul></li>
  <li>Syntax highlighting for TCQL and Python</li>
  <li>You can include all relations in a query with .Include(*): e.g. From T In Timesheet.Include(*) Select T </li>
  <li>Hyperlinks in lists to other lists and forms, e.g. link in the project list to all timesheets of a project</li>
  <li>Tabs in forms that display a list of related entities, e.g. list of invoices in the project form</li>
  <li>Actions can be executed in forms</li>
  <li>In the Management module multiple lists can be opened concurrently</li>
  <li>Holidays are displayed in the time sheet calendar</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">What's fixed</h2><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Performance in excel export</li>
  <li>Bugs in display of some lists on tablet pc's</li>
  <li>Bugs in display of the mail window when using multiple displays and on Windows XP </li>
</ul>