---
layout: blog
title: Budgetary Control on Project and Task Level
excerpt: In time cockpit version August 2016 we extended the existing project management functionalities. Up to now, time cockpit provided a list for budgetary control of projects. This list helps you to check whether the actual effort is within the project budget. In larger projects you will need more control over the status of you project, so we added a new list "Budgetary Control of Tasks", that allows you to monitor the progress of your projects on task level.
author: Michael Kubitschka
date: 2016-07-29
bannerimage: /content/images/blog/2016/07/time and money.jpg
bannerimagesource: 
lang: en
tags: [Project Management,time cockpit]
ref: 
permalink: /blog/2016/07/29/Budgetary-Control-on-Project-and-Task-Level
---

<p>In time cockpit version August 2016 we extended the existing project management functionalities. Up to now, time cockpit provided a list for budgetary control of projects. This list helps you to check whether the actual effort is within the project budget. In larger projects you will need more control over the status of you project, so we added a new list "Budgetary Control of Tasks", that allows you to monitor the progress of your projects on task level.</p><h2>Budgetary Control of Tasks
<br /></h2><p>Using the current list for budgetary control of projects, it’s possible to check whether the actual effort is within the entire project budget.</p><p>If a project is divided into several tasks (and thus the project budget) it is possible that the budget of some tasks is overspent. However, as long as the total project budget is not exceeded, this is not visible in the project budget control list. Usually, the tasks are not worked on simultaneously, instead they are completed stepwise. Exceedance of the project budget might come up only at the end of the project.</p><p>In order to recognize such trends earlier, we now provide an opportunity to control project budgets also on task level. The necessary field “Budget [h]” on task level was already included in the previous standard of time cockpit. Using the new list “Budget Control for Tasks” it’s possible to compare actual hours spent on a task and the respective budget.</p><p>
  <span lang="EN-US">The new list <em>Budgetary Control of Tasks</em> can be found in the <em>Management</em> module inside the section <em>Billing</em> and is structured as follows:</span>
</p><p>
  <span lang="EN-US"></span>
</p><p>
  <span lang="EN-US">
    <img title="Budgetary Control of Tasks List" src="{{site.baseurl}}/content/images/blog/2016/07/TaskBudgetControlList.png" alt="Budgetary Control of Tasks List" />
  </span>
</p><p>Per default the filter of the list loads only not closed tasks that contain unbilled billable hours. Of course these filter settings can be changed.</p><p>The following table contains a description of every column of the list:</p><table class="infoTable">
  <tbody>
    <tr>
      <th>Column</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Project</td>
      <td>The project related to the task</td>
    </tr>
    <tr>
      <td>Task</td>
      <td>The task to which the other columns reflect</td>
    </tr>
    <tr>
      <td>Budget [h]</td>
      <td>Budget for the task in hours</td>
    </tr>
    <tr>
      <td>Billable [h]</td>
      <td>Sum of billable hours that have been booked for the task</td>
    </tr>
    <tr>
      <td>Billable open [h]</td>
      <td>Remaining billable hours for the task (Budget [h] – Billable [h])</td>
    </tr>
    <tr>
      <td>Billable hours [%]</td>
      <td>Percentage visualization of Billable [h] and Budget [h]</td>
    </tr>
    <tr>
      <td>Hours Worked [h]</td>
      <td>Sum of all worked hours (billable + not billable)</td>
    </tr>
    <tr>
      <td>Total Open [h]</td>
      <td>Remaining hours for the task (Budget [h] – Hours Worked [h]), this value differs from the remaining billable hours when you decide to set some hours to unbillable (e.g. bug fixing), this leads to a lower effective hourly rate</td>
    </tr>
    <tr>
      <td>Worked [%]</td>
      <td>Percentage visualization of Hours Worked [h] and Budget [h]</td>
    </tr>
    <tr>
      <td>Unbilled [h]</td>
      <td>Billable hours that have not been already billed</td>
    </tr>
    <tr>
      <td>Unbilled Revenue</td>
      <td>Unbilled revenue</td>
    </tr>
    <tr>
      <td>Effective Hourly Rate</td>
      <td>Sum billable revenue / Hours Worked [h]</td>
    </tr>
    <tr>
      <td>Time Sheet Entries</td>
      <td>Link to the related timesheets for the task</td>
    </tr>
  </tbody>
</table>