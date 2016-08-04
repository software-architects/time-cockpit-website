---
layout: blog
title: What's New in Version August 2016
excerpt: This month we have focused on improving the project controlling features of time cockpit. We have created a new list for monitoring project status on task level. It shows you the booked hours, remaining hours and hours to bill for each task. To make life easier when creating new time sheet entries, we have introduced a closed flag for tasks to reduce the number of items in the tasks combo box. With BackReferenceCells in forms a relatively new feature from the full client made it into the web client. And finally, we could fix performance problems with reports in the HTML5 client this month.
author: Karin Huber
date: 2016-07-29
bannerimage: /content/images/blog/2016/07/time-cockpit-august-2016.png
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2016/07/29/Whats-New-in-Version-August-2016
---

<p>The new version August 2016 (1.48) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Overview</h2><p>This month we have focused on improving the project controlling features of time cockpit. We have created a new list for monitoring project status on task level. It shows you the booked hours, remaining hours and hours to bill for each task. To make life easier when creating new time sheet entries, we have introduced a closed flag for tasks to reduce the number of items in the tasks combo box. With BackReferenceCells in forms a relatively new feature from the full client made it into the web client. And finally, we could fix performance problems with reports in the HTML5 client this month.</p><ul>
  <li>
    <a href="#combobobx">Closed Flag for Tasks</a>
  </li>
  <li>
    <a href="#budetarycontroloftasks">Budgetary Controls of Tasks</a>
  </li>
  <li>
    <a href="#backreferencecell">BackReferenceCells in Forms</a>
  </li>
  <li>
    <a href="#performancereporting">Performance Reporting in HTML5 Client</a>
  </li>
</ul><h2>
  <a name="combobobx" id="combobobx" class="mce-item-anchor"></a>Closed Flag for Tasks</h2><p>Already completed tasks can now be marked as closed. As a result, these tasks can no longer be used when creating new timesheets.</p><p>
  <img title="Task List" src="{{site.baseurl}}/content/images/blog/2016/07/TaskList.png" alt="Task List" />
</p><p>In the timesheet form you are no longer able to select the task "Documentation" for project Adventure.Athene:</p><p>
  <img title="Insert Timesheet" src="{{site.baseurl}}/content/images/blog/2016/07/AddTimesheet.png" alt="Insert Timesheet" />
</p><p class="showcase">To get this feature, at least one administrator of your account has to install the new full client. When starting the new full client, time cockpit will update the account. The feature will then be available for all users in the account in the full client and in the web client.</p><h2>
  <a name="budetarycontroloftasks" id="budetarycontroloftasks" class="mce-item-anchor"></a>Budgetary Control of Tasks</h2><p>Up to now, time cockpit provided a list for budgetary control of projects. This list helps you to check whether the actual effort is within the project budget. In larger projects you will need more control over the status of you project, so we added a new list "Budgetary Control of Tasks", that allows you to monitor the progress of your projects on task level.</p><p class="showcase">To get this feature, at least one administrator of your account has to install the new full client. When starting the new full client, time cockpit will update the account. The feature will then be available for all users in the account in the full client and in the web client.</p><p>
  <a href="~/blog/2016/07/29/Budgetary-Control-on-Project-and-Task-Level" title="Budgetary Control on Task Level">Read more about project controlling on task level in time cockpit ...</a>
</p><h2>
  <a name="backreferencecell" id="backreferencecell" class="mce-item-anchor"></a>BackReferenceCells in Forms</h2><p>Another feature made it into the web client - <code>BackReferenceCells</code> in forms. Back references allow you to show related items like projects for tasks. In time cockpit forms you can show back references in tabs. The customer form contains a tab with a list of all projects. <code>BackReferenceCells</code> allow you the display lists of related items directly in the form among other input fields:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/07/back-reference-cell.png" />
</p><p>
  <code>BackReferenceCells</code> are specified very similar to our long-known <code>BackReferenceTabs</code>:</p>{% highlight xml %}<Form ModelEntityName="APP_Customer" AutoRefreshOnDataUpdates="True" xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data">
  <Tab Header="=:FriendlyName('APP_Customer')">
    <Section Header="=:Translate('Form.General.GeneralSection')">
      <SectionColumn>
        <BoundCell Content="=Current.APP_Code" />
        <BoundCell Content="=Current.APP_CompanyName" />
        <BoundCell Content="=Current.APP_CommercialRegNumber" />
        <BoundCell Content="=Current.APP_VatID" />
      </SectionColumn>
    </Section>
    <Section Header="Projekte">
      <SectionColumn>
        <BackReferenceCell BackReference="Projects" LabelPosition="None" />
      </SectionColumn>
    </Section>
    ...{% endhighlight %}<p class="showcase">Please note, that you have to use at least version October 2015 (1.42) of the full client to use this feature.</p><h2>
  <a name="performancereporting" id="performancereporting" class="mce-item-anchor"></a>Performance Reporting in HTML5 Client</h2><p>Downloading lists as pdf, excel or word was very slow in the HTML5 client. Depending on the number of pages to render it could take minutes or even be cancelled when it took too long. In the new version we have fixed this issue. It is now possible to create reports with large data sources and lots of generated pages. The following time sheet report with 1293 items and 98 generated pages was loaded in 12 seconds:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/07/reporting-performance.png" />
</p>