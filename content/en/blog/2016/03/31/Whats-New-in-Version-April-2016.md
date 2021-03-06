---
layout: blog
title: What's New in Version April 2016
teaser: Piece by piece we bring time cockpit's full client features to our HTML5 web client. This month we added support for field-level permissions. This step has been requested by multiple customers as the missing support blocked them from using the new web client. In addition to field-level permissions, we plugged in a brand new Office 365 module into the time cockpit calendar -  Office 365 Planner Tasks.
author: Rainer Stropek
date: 2016-03-31
bannerimage: /content/images/blog/2016/03/time-cockpit-april-2016.png
lang: en
ref: /de/blog/2016/03/31/Was-ist-neu-in-der-Version-April-2016
permalink: /blog/2016/03/31/Whats-New-in-Version-April-2016
---

<p>The new version April 2016 (1.47) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Overview</h2><p>Piece by piece we bring time cockpit's full client features to our HTML5 web client. This month we added <a href="#field-level-permissions">support for field-level permissions</a>. This step has been requested by multiple customers as the missing support blocked them from using the new web client.</p><p>In addition to field-level permissions, we plugged in a brand new Office 365 module into the time cockpit calendar: <a href="#office-365-planner-tasks">Office 365 Planner Tasks</a>.</p><h2>
  <a id="field-level-permissions" name="field-level-permissions" class="mce-item-anchor"></a>Field-Level Permissions</h2><h3>Introduction</h3><p>Time cockpit offers a powerful permission system. Here are some examples for what you can do with it:</p><ul>
  <li>Assign users to roles and define permissions based on role membership.
<br /></li>
  <li>Beside roles, permissions can be based on all user-related data (e.g. department, project assignments, etc.).
<br /></li>
  <li>You can limit read and/or write access.</li>
  <li>Row-level read permissions are turned into filters on the database level. Therefore, they offer great performance.</li>
  <li>Time cockpit supports row- and field-level permissions.</li>
</ul><p>This month, we added support for field-level permission to time cockpit's new HTML5 client. Until now, entities with field-level permissions could not be edited using the HTML5 client as time cockpit always showed a permission error when saving the corresponding data row.<br /></p><p class="showcase">Note that you have to be careful when setting up permissions in time cockpit. Wrong configurations or overly complex permission logic can make it hard for end users to use time cockpit.</p><p>If you need help for designing and setting up permissions in time cockpit, contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><h3>Using Field-Level Permissions
<br /></h3><p>To setup permissions, you have to launch the <em>Customization</em> module in time cockpit's full client. Note that you have to be a time cockpit administrator to be able to do that.</p><p>Next, you open the editor for the entity for which you want to define permissions. The following screenshot illustrates that:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/add-permission.png" />
</p><p>The dialog that pops up allows you to choose between row- and field-leven permission. Select the name of the entity (in this case <em>APP_Project</em>) to define a row-level permission. Select a field to define a field-level permission. In our example we select <em>APP_Budget</em> as only users belonging to the <em>Project Manager</em> role should be able to edit it. Other should just see it.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/field-level-permissions-select-field.png" />
</p><p>The third step is entering the permission expression. You can use the full power of time cockpit's <a href="https://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm" target="_blank">TCQL expression language</a> here. In our case, we limit <em>Write</em> access to users that are member of the <em>ProjectMgr</em> role.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/define-permission-expression.png" />
</p><p>That's it. If you sign in with a user who is not a project manager and open a project form, the project's budget will be read only.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/read-only-field.png" />
</p><h2>
  <a id="office-365-planner-tasks" name="office-365-planner-tasks" class="mce-item-anchor"></a>Office 365 Planner Tasks Plugin</h2><p>A few months ago, Microsoft presented a new member in the Office 365 family: <a href="https://blogs.office.com/2015/09/22/introducing-office-365-planner/" target="_blank">Office 365 Planner</a>. It offers Office users a simple and highly visual way to organize teamwork. Planner makes it easy for teams to create new plans, organize and assign tasks, share files, chat about what they are working on, and get updates on progress. Planner can be used to manage a marketing event, brainstorm new product ideas, prepare for a customer visit, or just organize teams more effectively.</p><p class="showcase">Note that Office 365 Planner is currently in preview.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/Introducing-Office-365-Planner-4.png" />
</p><p class="imageCaption">Image source: <a href="https://blogs.office.com/2015/09/22/introducing-office-365-planner/" target="_blank">Microsoft</a></p><p>One of our customers is already actively using Office 365 Planner tasks and asked us whether time cockpit will integrate it similar to <a href="~/blog/2016/02/29/Whats-New-in-Version-March-2016#sent-emails" target="_blank">how Office 365 emails and calendar items are integrated in time cockpit's graphical time sheet calendar</a>. We looked at it and immediately liked the idea. So we decided to build a plugin for the our HTML5 client although Planner is still in preview.<br /></p><p class="showcase">Note that because of the preview version, you need to be an administrator in your Office 365 subscription to use the Planner plugin. This limitation is caused by Microsoft's Planner API and not by time cockpit.</p><p>If enabling time cockpit plugins is new for you, please read <a href="~/blog/2016/02/29/Whats-New-in-Version-March-2016#sent-emails" target="_blank">Office 365 Integration in Time Cockpit's Timesheet Calendar</a>. There you learn how to activate and deactivate plugins. <br /></p><p>The following image shows how Planner Tasks are displayed in time cockpit's calendar. The tasks are shown depending on the date you have selected. You will see all tasks whose...<br /></p><ul>
  <li>...<em>creation date</em> is lower or equal the selected day and whose</li>
  <li>...<em>item completed date</em> is greater or equal the selected day.</li>
</ul><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/time-cockpit-office-planner-tasks-integration.png" />
</p><p>Planner Tasks act as time sheet templates in time cockpit. You can drag-and-drop them into your calendar to generate a timesheet based on them.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/office-planner-tasks-time-cockpit-drag-drop.png" />
</p><h2>Feedback</h2><p>Let us know what you think about the new plugin and our HTML5 client. We would love to hear your feedback at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p>