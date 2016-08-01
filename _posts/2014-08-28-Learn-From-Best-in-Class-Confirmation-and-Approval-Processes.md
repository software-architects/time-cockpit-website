---
layout: blog
title: Learn From Best in Class -  Confirmation and Approval Processes
excerpt: On the first sight, time tracking is a seemingly trival process. Start time, end time, describe what you did - that's it, isn't it? As teams grow, accompanying processes for confirmation and approval become more and more important. Read about what the best in class companies are doing.
author: Rainer Stropek
date: 2014-08-28
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
permalink: /blog/2014/08/28/Learn-From-Best-in-Class-Confirmation-and-Approval-Processes
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/08/6530389351_aafa8d3fe7_b.jpg" />Image source: <a href="https://flic.kr/p/aX4XeR" target="_blank">https://flic.kr/p/aX4XeR</a>, under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">Creative Commons</a> License</div><p>On the first sight, time tracking is a seemingly trivial process. Start time, end time, describe what you did - that's it, isn't it? As teams grow, accompanying processes for confirmation and approval become more and more important. Implementing time tracking at customers is our core business. In this blog we want to provide checklists with processes that you should think about when enhancing your time tracking approach.</p><h2>1. The Basics: Lean and Easy to Use</h2><p class="showcase">Think about what data you really need to gather in your time tracking system and avoid collecting mania. Your team members' primary job is <em>not</em> time tracking. They should be able to focus on providing value to your customers.</p><p>Your time tracking system can be sophisticated in the background. However, acceptance of your time tracking solution will rise if you provide a lean and easy to use system for those colleagues who just want to provide time sheet records. Here are some ideas how to make your system comfortable to use:</p><ol>
  <li>Provide lists of values instead of free text fields. This will speed-up data entry and raise data quality.</li>
  <li>Remove all unnecessary input fields.</li>
  <li>Add basic validations that notifies the user in case of invalid data entries. However, don't overdo form validations. Users should be able to quickly enter incomplete time sheet records and complete them afterwards. Postpone full validation checks until data is confirmed (see <a href="#confirm">below</a>).</li>
  <li>Do whatever you can to support your end users in not forgetting a single billable hour.</li>
  <li>Enable users to book the time sheet records online and offline so that they can use the time e.g. setting in the train.</li>
  <li>Make sure that the user interface of the software you use - hopefully <a href="~/" target="_blank">time cockpit</a> ;-) - is easy to use (e.g. graphical time sheet calendar, Outlook integration, etc.).</li>
</ol><h2>
  <a id="confirm" name="confirm" class="mce-item-anchor"></a>2. Confirmation Process for End Users</h2><p>Time tracking data will be used for subsequent processes like billing. In larger teams, the people responsible for such backoffice processes are different from the people working in the field.</p><p class="showcase">Your time tracking solution should support data entry status workflows to <span lang="EN-US">ensure accuracy and correctness</span>. After all, it is embarrassing if you have to cancel invoices to customers over and over again because of missing or incorrect time tracking data.</p><p>Here is a description of the process that we commonly implement for best-in-class customers in time cockpit:</p><ol>
  <li>End users can confirm their time tracking data for a specific effective date (e.g. end of month). You should think about organizational rules up to which day (e.g. 3rd working day of the following month) time tracking data has to be confirmed.</li>
  <li>There should be automatic email reminders for end users who are delaying subsequent processes like billing because of missing data entry.</li>
  <li>
    <p>During confirmation, data should be checked for <span lang="EN-US">consistency </span> (e.g. missing breaks according to work safety regulations, no time sheet records during holidays, etc.).</p>
    <p class="showcase">Note that such <span lang="EN-US">consistency </span> checks can be quite complex. In time cockpit we solve this problem by making business logic functions like overtime calculation, calculation of remaining holidays, etc. available in our <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripting language</a> and APIs (e.g. <a href="http://help.timecockpit.com/?topic=html/98574b63-c044-465d-8274-20315baf4619.htm" target="_blank">working time calculations in TCQL</a>). With this, we adapt data validation to the specific business rules of our customers.</p>
  </li>
  <li>End users must not be able to insert, update, or delete time sheet records before the latest confirmed effective date. This is necessary so that the backoffice team can be sure that data is not changed while or after they processed it e.g. for billing purposes.</li>
  <li>People in backoffice should have lists or reports to quickly get an overview about the confirmation status of each end user so that they know whether e.g. billing can start for a given month.</li>
</ol><h2>3. Approval Processes for Project Managers</h2><p>In teams handling larger projects there are often dedicated people for project management. Typically, they are responsible for managing project accounting, too.</p><p class="showcase">Even in the best teams data entry mistakes happen (e.g. ambiguous descriptions, wrong project assignment, overbookings, etc.). Project managers should make sure that such mistakes never reach the customers. They are the ones who do the final data quality check before billing starts.</p><p>Here is a description of the pattern that we commonly implement for customers in time cockpit:</p><ol>
  <li>Every project has one or many project managers.</li>
  <li>In contrast to end users, project managers can modify not only their own time sheet data. They can modify time sheet data of all users who work in the projects they manage.</li>
  <li>Project managers should not have to actively check whether they have pending approval requests. There should be a notification mechanism e.g. via email or a workflow management system.</li>
  <li>Project managers can decline confirmations and add notes for the end users so that they can correct and reconfirm the data.</li>
  <li>Offer easy to use reports or lists so that project managers get an overview about booked times for their projects (e.g. <a href="http://www.timecockpit.com/blog/2014/05/30/Warning-Emails-in-Case-of-Budget-Overrun" target="_blank">detect budget overrun</a> for certain projects, tasks, or end users).</li>
</ol><h2>4. HR Processes</h2><p class="showcase">Especially small teams often forget to operationalize HR processes. However, managers and shareholders are in for a shock, if nobody regularly checks remaining holidays, overtimes, conformance to working time regulations, etc. Not actively managing these topics can become quite expensive.</p><p>Here are some ideas how our customers solve this problem in conjunction with time cockpit:</p><ol>
  <li>Implement customer or country specific business rules for overtime payouts.</li>
  <li>Support HR controlling processes with reports that reflect specific company policies.</li>
  <li>Implement alerting functionality (e.g. via email or workflow management system) in case of <span lang="EN-US">exceedance </span> of limits (e.g. overtime limits).</li>
  <li>Add approval processes for applications for leave.</li>
</ol><h2>5. Handling Exceptional Cases</h2><p class="showcase">Don't forget to think about organizational and technical processes to handle exceptional cases.</p><p>Here are some examples:</p><ol>
  <li>People will make data entry mistakes which they detect after they have confirmed.</li>
  <li>Project managers and backoffice administrators are sometimes not available (e.g. sickness).</li>
  <li>Employees sometimes have to work during the weekend even if that is usually forbidden by a company policy.</li>
  <li>In exceptional cases team member will have longer working days than allowed.</li>
</ol><p>Here are some examples of how we deal with such situation in customer projects with time cockpit:</p><ol>
  <li>
    <p>Allow backoffice administrators to cancel <a href="#confirm">confirmations</a> enabling end users to do some corrections.</p>
    <p class="showcase">It is important that cancelling confirmations can only be done by people who understand the organizational consequences of such an action (e.g. necessary to cancel an existing invoice or create a credit advice).</p>
  </li>
  <li>Enable backoffice administrators to alter time sheet data of all users.</li>
  <li>Accept confirmation of time sheet entries that contradict business rules (e.g. working on Sunday) but implement an email alerting system that triggers appropriate organizational processes (e.g. overtime payout).</li>
  <li>Implement an approval process for outside the normal range events (e.g. manager has to approve a late night working session that is necessary during a busy project).</li>
  <li>Add escalation processes (e.g. inform manager if a user has outstanding confirmations because of sickness).</li>
</ol><h2>How Time Cockpit Can Help
<br /></h2><p class="showcase">Extensibility is one of the key differentiators of time cockpit. Solving the simple things out of the box and enabling complex scenarios using time cockpit's flexible data model, scripting language, .NET and Web APIs, etc. - that's our credo. </p><p>If you think about using time cockpit in your team and you need advanced customizations like the ones mentioned above, we offer three different approaches:</p><ol>
  <li>You nominate time cockpit champions in your team, we support and train them, and they do the customization. This is ideal for companies that have deep IT knowledge.</li>
  <li>We do the customization together. You get a training on the job for time cockpit's customization features. Customers with IT knowledge but very limited time often choose this approach.</li>
  <li>You don't want to bother about the technical details? We offer turn key solutions based on your requirement specification. This is the way to go for customers without any IT knowledge or no available resources.</li>
</ol><p>Please <a href="~/help-support/contact-us" target="_blank">contact us</a> if you want to have more information about time cockpit or possible implementation projects.</p>