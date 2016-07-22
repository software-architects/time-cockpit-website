---
layout: blog
title: Setting Up Team Leader / Member Permissions in Time Cockpit
teaser: A common scenario in time cockpit is assigning different permissions to team leaders and team members. Team leaders should see all time sheet records of all members whereas team members should only see their own records. In this blog post you learn how you can set up this logic in time cockpit within a few minutes.
author: Rainer Stropek
date: 2014-07-14
bannerimage: 
lang: en
permalink: /blog/2014/07/14/Setting-Up-Team-Leader--Member-Permissions-in-Time-Cockpit
---

<p xmlns="http://www.w3.org/1999/xhtml">A common scenario in time cockpit is assigning different permissions to team leaders and team members. Team leaders should see all time sheet records of all members whereas team members should only see their own records. In this blog post you learn how you can set up this logic in time cockpit within a few minutes.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Requirement</h2><p xmlns="http://www.w3.org/1999/xhtml">This is the scenario that I want to implement in this blog post:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Time cockpit supports assigning users to departments out of the box. We want to add the possibility to assign 0...n team leaders for each department.</li>
  <li>Every user can only see and edit her own time sheet records.</li>
  <li>In addition to (2), team leaders can see (not edit) time sheet records of all members in their team (=department).</li>
</ol><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Note that we reuse the existing <em>department</em> table in this blog post. You could create a separate <em>team</em> table if you want.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Video Step-by-Step Tutorial</h2><div class="videoWrapper" xmlns="http://www.w3.org/1999/xhtml">
  <iframe width="960" height="720" src="//www.youtube.com/embed/vbPTMelzhfE?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div><h2 xmlns="http://www.w3.org/1999/xhtml">Checklist</h2><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a new entity (=table) to store team leader assignments. It has a relation to <em>APP_Department</em> and <em>APP_UserDetail</em>.</li>
</ol><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Don't forget to limit access permissions to the new table as shown in the video above. Otherwise everbody could remove you time sheet permissions by changing team leader assignments.</p><br xmlns="http://www.w3.org/1999/xhtml" /><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <em>Optionally</em> create a custom UI (list, form) for departments so you can edit department members and team leaders directly in the department form. 

<ol><li>Create a new form for <em>APP_Department</em>.</li><li>Create a new list for <em>APP_Department</em>.</li><li>Set the new form and list as the new UI for the <em>APP_Department</em> entity.</li></ol></li>
  <li>Create a set containing all departments that the current user is leader of. Here is the <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL</a> statement that is shown in the video above:</li>
</ol>{% highlight javascript %}From D In TeamLeader
Where D.TeamLeaderUser.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
Select New With { D.Department.Code }{% endhighlight %}<ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Define the read/write permissions in the <em>APP_Timesheet</em> entity. Here is the <a href="http://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm" target="_blank">TCQL expression</a> that is shown in the video for the <em>write</em> permission:</li>
</ol>{% highlight javascript %}Current.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
 Or Current.UserDetail.Department.Code In Set('DepartmentsLedByMe', 'Code')
 Or 'Admin' In Set('CurrentUserRoles', 'Code'){% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Questions</h2><p xmlns="http://www.w3.org/1999/xhtml">In case of questions contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p>