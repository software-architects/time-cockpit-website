---
layout: blog
title: Time Cockpit in Action at Software Architects
excerpt: Month by month we portray customers who successfully use time cockpit for managing their services business. For our initial newsletter in 2013 we decided to write about how we use time cockpit for our own consulting business.
author: Rainer Stropek
date: 2012-12-27
bannerimage: 
lang: en
tags: [Project Management,time cockpit]
permalink: /blog/2012/12/27/Time-Cockpit-in-Action-at-Software-Architects
---

<p>
  <strong>Month by month we <a href="{{site.baseurl}}/solutions/" target="_blank">portray customers</a> who successfully use time cockpit for managing their service business. For our initial newsletter in 2013 we decided to write about how we use time cockpit for our own business. This article covers the following topics:</strong>
</p><ol>
  <li>
    <a href="#BusinessAreas">How do we structure our business?</a>
  </li>
  <li>
    <a href="#WhyImportant">What are the different reasons why time tracking is important for each business area?</a>
  </li>
  <li>
    <a href="#DevProjects">How do we use time cockpit in software development projects? Tips and best practices.</a>
  </li>
  <li>
    <a href="#ConProjects">How do we use time cockpit in consulting projects? Tips and best practices.</a>
  </li>
</ol><h2>
  <a id="BusinessAreas" name="BusinessAreas" class="mce-item-anchor"></a>Three Strategic Business Areas</h2><p>Before I describe how we use time cockpit to manage our own business, I want to give you some insight about how our company works behind the scenes. We structure our business into <strong>three strategic business areas</strong>: Time cockpit, CoFX, and consulting services.</p><h3>Time Cockpit</h3><p>The first area is obvious. We spend most of our time for our flagship product <a href="{{site.baseurl}}/home/" target="_blank">time cockpit</a>. We enhance existing parts, develop new functions, support our customers in case of questions, and maintain our cloud-based IT infrastructure.</p><h3>Cockpit Framework (CoFX)</h3><p>The second business area is closely related to time cockpit. It is about the work that we do regarding the underlying software framework which we call <em>CoFX</em> (aka <em>Cockpit Framework</em>). If you use time cockpit you might have gotten in touch with CoFX already. The framework is responsible for features like <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripting with IronPython</a>, <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL</a> (time cockpit query language), the customizable data model, and the <a href="~/blog/2012/10/01/Customizing-Lists-and-Forms-in-Time-Cockpit" target="_blank">lists and forms engine</a>. Above all CoFX offers a <a href="http://help.timecockpit.com/?topic=html/3541dc4c-c6b3-e953-a326-b083c76d7884.htm" target="_blank">powerful .NET API</a> which supports the creation of customizable multi-tenant SaaS applications.</p><p>CoFX is not only the basis for time cockpit. Other software vendors have acquired licenses and build solutions for different domains with it. One example is the company <a href="http://www.treamo.com" target="_blank">Treamo</a>. Martin Sadleder and his team have built their treasure reporting solution <a href="http://www.tfm-now.com/" target="_blank">TFM</a> based on CoFX.</p><h3>Consulting Services</h3><p>The third area in which we do business is general consulting about software development on the Microsoft technology stack. For time cockpit and CoFX we spend quite a lot of time and money in research and development. Based on this knowledge we write articles, do trainings, offer coaching for other software development teams, etc.</p><h2>
  <a id="WhyImportant" class="mce-item-anchor"></a>Why Time Tracking is Important for Us</h2><div class="floatRight">
  <p class="highlighted">
    <strong>Time tracking use cases for us:</strong> <br /> Post calculation for projects with fixed budget. <br /> Billing in time &amp; material projects.<br /> Human resource management.</p>
</div><p>We could not run our company without a detailed time tracking database. The following lists contains some examples of topics for which we use it:</p><ol>
  <li>
    <strong>Business Areas Time Cockpit and CoFX</strong>
    <ul>
      <li>
        <strong>Post calculation of our sprints</strong>
        <br />
 We estimate the effort for work items and use our time tracking database to identify items where we exceeded our estimate.</li>
      <li>
        <strong>Settlement of promotion projects</strong> We have received public promotion money from the <a href="http://www.ffg.at/en" target="_blank">Austrian Research Promotion Agency</a> (FFG). Their documentation guidelines for working times are pretty tough.</li>
      <li>
        <strong>Customer projects</strong> Billing of time cockpit- or CoFX-related work for customers (e.g. specific interfaces that we have implemented for them).</li>
    </ul>
  </li>
  <li>
    <strong>Business Area Consulting Services</strong>
    <ul>
      <li>
        <strong>Post calculation</strong> of projects with a fixed price (e.g. trainings, sessions at conferences).</li>
      <li>
        <strong>Billing</strong> in <a href="http://en.wikipedia.org/wiki/Labor_and_materials" target="_blank">time and material</a> projects (e.g. coaching, developing custom software).</li>
      <li>
        <strong>Project controlling</strong> in projects with a cost limit (<em>project costs cap</em>).</li>
    </ul>
  </li>
  <li>
    <strong>Human Resources</strong>
    <ul>
      <li>Calculate <strong>holiday entitlement</strong> for employees.</li>
      <li>Manage <strong>overtime and flextime</strong>.</li>
    </ul>
  </li>
</ol><p>In this article I will only cover topics 1 and 2. I will not cover human resources as we just use the corresponding functions of time cockpit as they come out of the box.</p><h2>
  <a id="DevProjects" name="DevProjects" class="mce-item-anchor"></a>Time Cockpit for Software Development Projects</h2><h3>Overview</h3><p>The following picture shows how we combine Microsoft's <a href="http://www.microsoft.com/visualstudio/eng/products/visual-studio-team-foundation-server-2012" target="_blank">Team Foundation Server</a> (TFS) and time cockpit to manage our development effort in time cockpit and CoFX projects.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/WorkflowTFSTimeCockpit.png?mw=924&amp;mh=367" />
</p><h3>The SCRUM Process</h3><p>It all starts with the <a href="http://en.wikipedia.org/wiki/Scrum_(development)#Product_Backlog" target="_blank">product backlog</a>. In regular sprint meetings we decide which ideas should be part of the next sprint. They become the <a href="http://en.wikipedia.org/wiki/Scrum_(development)#Sprint_Backlog" target="_blank">sprint backlog</a>. The decision is made based on prioritization of backlog items and available development resources. During the sprint meeting we split the sprint backlog items into more technical work items. Each work item contains an effort estimation in hours and is assigned to a responsible team member. At the end of the sprint meeting the work items are entered into TFS.</p><p>A scheduled job imports work items from TFS into time cockpit every few minutes. TFS work items become <em>tasks</em> in time cockpit. The corresponding <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" title="Learn more about scripting in time cockpit" target="_blank">script</a> is written with time cockpit's scripting feature (IronPython). If you need to implement a similar integration of TFS work items with time cockpit, feel free to <a href="{{site.baseurl}}/help-support/contact-us/" target="_blank">contact us</a>. You can use our script as an example and extend/change it as necessary.</p><p class="floatRight">
  <em>Work item change in activity log</em>
  <br />
  <em>(click to enlarge): </em>
  <br />
  <function name="Composite.Media.ImageGallery.Slimbox2">
    <param name="MediaImage" value="MediaArchive:a617fd7a-e58c-42ce-8ae1-ba95951cbe5e" />
    <param name="ThumbnailMaxWidth" value="256" />
    <param name="ThumbnailMaxHeight" value="84" />
  </function>
</p><h3>TFS Integration in Time Cockpit's Activity Log</h3><p>During a busy week nobody in our team manages to keep his time sheet constantly complete. Without a tool we could not remember what we did a few days ago. This very problem was the initial reason why we started thinking about a time tracking product.</p><p>Time cockpit's <strong><a href="{{site.baseurl}}/tour/activity-tracking/" target="_blank">activity log</a></strong> offers a <strong>TFS interface out of the box</strong>. This function enables us to <strong>create accurate time sheet bookings retrospectively</strong> at the end of the day or week. After <a href="http://help.timecockpit.com/?topic=html/a4c60754-23c4-47a9-91c6-bf99652ccd7d.htm" target="_blank">entering your TFS server's name</a> into time cockpit, the software automatically visualizes your TFS work item changes and your checked in code changes in its <a href="{{site.baseurl}}/tour/graphical-calendar/" target="_blank">graphical time sheet calendar</a>. By looking at a work item's status change (e.g. from <em>not started</em> to <em>in progress</em>) we can easily find out when we started working on the task. Checking in source code typically marks the end of a task.</p><p>In order to fully benefit from time cockpit's TFS integration, we try to stick to the following guidelines as far as possible:</p><div class="floatRight">
  <p class="highlighted">Best practices for getting the most<br /> out of time cockpit's TFS integration</p>
</div><ol>
  <li>We enter <strong>all</strong> our <strong>work items</strong> (general tasks, bugs, etc.) with estimation and user assignment <strong>in TFS</strong>. </li>
  <li>We <strong>do not reuse work items</strong> from sprint to sprint. If we could not complete a work item during a sprint, we close the old one and create a new, adapted work item (internally we discussed already whether it would be worthwhile analyzing uncompleted work items in the past; currently we don't do it).</li>
  <li>When one of us <strong>starts her work</strong>, she looks for the next work item in TFS. She <strong>changes its status</strong> to <em>in progress</em>.</li>
  <li>We (nearly) always <strong>check in source code</strong> <strong>with a link to the work item</strong> to which the changes regard to. This makes our TFS database richer and time cockpit will show the developer to which work items her check in was related to.</li>
  <li>Whenever possible we try to <strong>concentrate on a single work item at a time</strong>. This makes us more productive.</li>
  <li>After completing a set of work items we <strong><a href="http://msdn.microsoft.com/en-us/library/ee782536.aspx" target="_blank">reverse integrate</a> the changes</strong> back into main branch. Time cockpit shows the reverse integration in its activity log.</li>
  <li>Don't forget to <strong>change the work item's status</strong> to <em>completed</em>. This keeps our sprint database clean.</li>
</ol><p>If you use TFS like this, tracking the time you need for each work item is quite easy with time cockpit's activity log. We have the rule that in software development projects every time sheet record has to be assigned to a task (i.e. a TFS work item). For general work like customer support we have dedicated tasks in time cockpit.</p><p class="floatRight">
  <em>Specify budget for tasks (click to enlarge):</em>
  <br />
  <function name="Composite.Media.ImageGallery.Slimbox2">
    <param name="MediaImage" value="MediaArchive:0e5af35b-4f07-49e2-999c-758d7185400a" />
    <param name="ThumbnailMaxWidth" value="256" />
    <param name="ThumbnailMaxHeight" value="256" />
  </function>
</p><h3>Project Controlling</h3><p>The last step in the process is project controlling. Time cockpit comes with a few predefined lists you can use to analyze your database. You can easily filter, sort, and group your results. For our own project controlling in development projects we have created a bunch of <strong><a href="~/blog/2012/10/01/Customizing-Lists-and-Forms-in-Time-Cockpit" target="_blank">custom lists</a> based on <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL</a></strong>. Here is an example of such a query. It shows a list of tasks (=work items) from a specific project. The list contains the task's budget, the actual time spent, and the ratio of budget vs. actual time. You can easily create similar queries and add them to your time cockpit menu to share them with other team members.</p>{% highlight text %}From T In Timesheet
Where T.Project.Code = 'MyProject' And T.BeginTime >= #2012-01-01# And T.EndTime < #2012-02-01#
Select New With {
    .Title = T.Task.TFSId + ": " + T.Task.Title,
    .BudgetInHours = Sum(T.Task.BudgetInHours),
    .TotalTime = Sum(T.DurationInHours),
    .Ratio = Sum(T.DurationInHours) * 100 / Sum(T.Task.BudgetInHours)
}{% endhighlight %}<p>For more advanced data analysis we export data to Microsoft Excel and use <a href="http://en.wikipedia.org/wiki/Pivot_table" target="_blank">Pivot Tables</a> there. To save time we have created some <a href="http://help.timecockpit.com/?topic=html/77e1bfc5-2e00-4348-9208-cba65638f3b5.htm" target="_blank">export templates</a> in time cockpit. If you are not familiar with Excel-based reporting in time cockpit, you find more information in this <a href="~/blog/2012/09/30/Reporting-with-time-cockpit-and-Microsoft-Office-Excel" target="_blank">blog post</a>.</p><h2>
  <a id="ConProjects" name="ConProjects" class="mce-item-anchor"></a>Time Cockpit for Consulting Projects</h2><h3>Project and Task Master Data</h3><p>Time tracking in consulting projects follows slightly different rules than development projects. The main difference is the handling of tasks. While in development projects tasks represent SCRUM work items, we use a <strong>more coarse-grained task structure in consulting projects</strong>.</p><p>I want to share our guidelines for task and project master data in consulting projects with you:</p><div class="floatRight">
  <p class="highlighted">Best practices for setting<br /> up project and task master data.</p>
</div><ol>
  <li>For <strong>small projects</strong> it is ok to book <strong>on project-level without any tasks</strong>.</li>
  <li>Projects with a <strong>fixed price or costs cap must have a budget</strong> (monetary and/or hours) entered in the project master data record.</li>
  <li>For time &amp; material projects, project managers are responsible for maintaining <strong>hourly rates per customer, project, and/or task</strong>. </li>
  <li>Projects that contain <strong>business travel</strong> have a dedicated <em>Travel</em> task: 

<ol><li>It is set to <em>Not Billable</em> with <em>Hourly Rate = 0</em> if the customer does not pay travelling time nor travel expenses.</li><li>It is set to <em>Billable</em> with <em>Hourly Rate = 0</em> if the customer does not pay travelling time but reimburses expenses. If we agreed on a fixed price for travel expenses we enter the corresponding budget in the <em>Travel</em>-task's <em>Budget</em> field.</li><li>It is set to billable with the default hourly rate if the customer pays travelling time and reimburses expenses. Unfortunately this happens seldom ;-)</li></ol></li>
  <li>
    <strong>Non-billable hours </strong> (e.g. bug fixing, free support, contract negotiations) have to be booked on dedicated tasks: 

<ol><li>Non-billable tasks that the end customer should not see (e.g. contract negotiations) must be set to <em>Not Billable</em>.</li><li>Non-billable tasks that the end customer should see on working time protocols are set to <em>Billable</em> with <em>Hourly Rate = 0</em>.</li><li>In rare cases we use time cockpit's possibility to override the <em>Billable</em> flag and the <em>Hourly Rate</em> on a time sheet-level. We encourage all team members to prefer creating dedicated tasks for non-billable hours instead.</li></ol></li>
</ol><p>Regularly we work on <strong>internal projects</strong> and tasks (e.g. website enhancements, writing a newsletter article, administrative work). We have created internal projects (set to <em>Not Billable</em>) to which such work has to be assigned. With this we can track the ratio of internal projects vs. development work vs. consulting hours.</p><h3>Using Activity Trackers to not Forget Billable Hours</h3><p>Obviously time tracking is super important in time &amp; material projects. <strong>In such projects we lose money for every forgotten hour.</strong></p><p>I would like to share some of my personal rules for using time cockpit's activity trackers to not forget any billable hour:</p><div class="floatRight">
  <p class="highlighted">How to get the most of time cockpit's<br /> activity tracking in consulting work.</p>
</div><ol>
  <li>
    <strong>Plan your time in advance using your Outlook calendar</strong>.
<br />
 I personally create Outlook appointments even for travelling time (e.g. planned flight time, planned time in the train, estimated time in the car). Time cockpit shows me all my appointments in its <a href="{{site.baseurl}}/tour/graphical-calendar/" target="_blank">graphical time sheet calendar</a>. I turn them into time sheet bookings with just one double-click.</li>
  <li>Setup <strong><a href="http://help.timecockpit.com/?topic=html/6f77ab63-2ddb-4fb7-9709-515707ddc225.htm" target="_blank">file system tracker</a></strong> for the folders in which you store your documents (e.g. concepts, presentations, source code). This helps a lot when recalling how long you have worked on a specific concept for a customer.</li>
  <li>If you work on files in e.g. Microsoft Office, <strong>save the files with a reasonable name</strong> early.
<br />
 Do not stick to <em>Document 1</em> for a long time. By giving the file a name, time cockpit can show you quite accurate when you worked on it (with its file system tracker and with the active window tracker).</li>
  <li>If your <strong>phone</strong> supports exporting your <strong>call log, import it</strong> into time cockpit.
<br />
 We support different <a href="http://help.timecockpit.com/?topic=html/4a370c70-0ffa-41db-be81-e33e3c69674e.htm" target="_blank">call log formats</a> (e.g. Android, Nokia). If you cannot find the appropriate format in time cockpit, contact us. We will try to help you importing your call logs. By having your phone calls in time cockpit's activity log, you will never forget to charge a longer support call.</li>
  <li>Use time cockpit's <strong>note function</strong> (by default <em>Ctrl + N</em>) in situations where you think you will need a hint when filling out your time sheet.
<br />
 I use it for unplanned ad-hoc meetings for which I do not have an appointment in my Outlook calendar.</li>
  <li>If you have <strong>multiple computers, install time cockpit on all of them</strong>.
<br />
 This will not cost you any more money. Time cockpit syncs your activity log across all your computers.</li>
  <li>After you have created your time sheet records for a certain time period you can <strong>wipe the activity log</strong> for that time if you want.
<br />
 You can use time cockpit's <em>Delete Signals</em> wizard for that. You find it in time cockpit's ribbon menu. In our company it is up to each employee whether she wants to keep the activity log for a longer period of time or wipe it after creating time sheet records.</li>
</ol><h3>Data Analysis and Reporting</h3><p>We differentiate two basic types of consulting projects: Fixed-price/capped projects and time &amp; material projects. In fixed-price/capped projects we use time cockpit internally to <strong>monitor the actual time vs. the project's budget</strong>. Today we do this with time cockpit lists and Pivot Tables in Excel. The next version of time cockpit will offer <a href="~/blog/2012/11/29/Data-Bars-in-Lists" target="_blank">new visualization features</a> that make it even more convenient to monitor projects' budget.</p><p>For fixed-price projects we typically do not send time protocols to our customers. In case of a costs cap, the end customer gets the same time protocol that we use for time &amp; material projects. The corresponding <strong>project manager is responsible for creating the time protocol</strong> for his end customer. For the previous newsletter I have written a <a href="~/blog/2012/09/30/Reporting-with-time-cockpit-and-Microsoft-Office-Excel" target="_blank">blog post</a> describing Excel-based reporting with time cockpit. If the customer agreed to the time protocol our billing process starts. My colleague Karin Huber has written a detailed blog post about <a href="~/blog/2012/12/27/Raise-Productivity-by-Enhancing-Your-Billing-Process">how to raise productivity by enhancing your billing process</a>.</p><div class="floatRight">
  <p class="highlighted">Enter costs per employee and hour<br /> to calculate contribution margins.</p>
</div><p>For consulting projects we do not only look at the hours and the corresponding revenue. We also <strong>calculate the contribution margin of each project</strong>. In order to get this information we have calculated costs per hour and employee and stored it in time cockpit's user details:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/CostsPerEmployee.png" />
</p><p>If you enter costs per hour and employee like this, time cockpit calculates the costs per time sheet record automatically. It also calculates the total costs of all time sheets when you create an invoice. This enables you to calculate the contribution margin per invoice even if calculated costs change over time.</p>