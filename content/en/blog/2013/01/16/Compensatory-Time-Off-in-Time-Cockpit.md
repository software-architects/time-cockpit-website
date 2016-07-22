---
layout: blog
title: Compensatory Time Off in Time Cockpit
teaser: Recently, a customer asked us how to book compensatory time off in the time sheet calendar of time cockpit without affecting a users actual hours of work. Here is what we came up with...
author: Alexander Huber
date: 2013-19-16
bannerimage: 
permalink: /blog/2013/01/16/Compensatory-Time-Off-in-Time-Cockpit
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Compensatory time off is a concept often found with knowledge workers' contract of employment. If an employee has a 40 hours working week, but works longer, the surplus of hours goes to a special compensatory time off pool. An employee with a surplus of hours can take for example 8 hours of that pool for a day off instead of consuming a day of her vacation. <span>Usually we do not book compensatory time in time cockpit. As long as the planned hours of work and the actual hours of work match at the end of the month, it does not matter to us when the work was done.</span></strong>
</p><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Recently, a customer asked us how to book compensatory time off explicitly in the time sheet calendar without affecting a user's actual hours of work. Having compensatory time off entries in your time sheet is handy when it comes to reporting for example. Now h</strong>
  <strong>ere is the solution we came up with.</strong>
</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="#WorkingTimeWeight">Create a Working Time Weight for Compensatory Time Off</a>
  </li>
  <li>
    <a href="#TimesheetEntry">Create a Time Sheet Entry Weighted with 0%</a>
  </li>
  <li>
    <a href="#TemplateBooking">Create a Template Booking for Quick Booking</a>
  </li>
</ol><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="WorkingTimeWeight" name="WorkingTimeWeight" class="mceItemAnchor"></a>Create a Working Time Weight for Compensatory Time Off</h2><p xmlns="http://www.w3.org/1999/xhtml">Conventional time sheet entries are weighted with 100%. That means, that when you work one hour, your actual working hours for that day, week and month are increased by one hour. Time cockpit allows you to define other working time weights and assign time sheet entries to them. You may for example define a working time weight “Overtime” with a weight of 150%. When you book a time sheet entry with one hour and assign it to “Overtime”, your actual working time is increased by one hour and thirty minutes.</p><p xmlns="http://www.w3.org/1999/xhtml">For our scenario it is important that the timesheet entry representing compensatory time off does not increase the actual hours of work of a user. Therefore we need to create a new working time weight with a value of 0% that we can use for compensatory time off entries. You can do that under Users --&gt; Working Time Weight. We call the new working time weight "Compensatory Time Off", enter a description, a weight of 0% and save the new record.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/01/Users_WorkingTimeWeight.png" alt="Working Time Weight List" title="Working Time Weight List" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="TimesheetEntry" name="TimesheetEntry" class="mceItemAnchor"></a>Create a Timesheet Entry Weighed with 0%</h2><p xmlns="http://www.w3.org/1999/xhtml">Now that we have created the custom working time weight, we can create time sheet entries for compensatory time off and assign the new working time weight to them. To do so, create a new time sheet entry (double-click the timesheet calendar, or click "New Item" in the ribbon) and switch to the tab "Working Time". You can now select "Compensatory Time Off" as weight for the given timesheet. <em>Please keep in mind that if you have customized your time sheet form, you may not be able to see the tab "Working Time". </em></p><p xmlns="http://www.w3.org/1999/xhtml">
  <em>
    <img src="{{site.baseurl}}/content/images/blog/2013/01/Time Sheet_ChooseWorkingTimeWeight.png" alt="Choose Working Time Weight" title="Choose Working Time Weight" />
  </em>
</p><p xmlns="http://www.w3.org/1999/xhtml">So that's about it. We have created a time sheet entry for compensatory time off. Note in the next screenshot that although we have entered a time sheet entry with a duration of 8 hours, the actual hours of work for the current Tuesday remain 0 hours out of 8 planned hours of work. You can find detailed information about how actual and target hours of work are calculated at <a href="http://help.timecockpit.com/?topic=html/d0ca12b0-d108-433b-8b2c-92d37d29fc02.htm" target="_blank">help.timecockpit.com</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/01/Time Sheet_WeightedTimesheet.png" alt="Weighted Timesheet" title="Weighted Timesheet" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="TemplateBooking" name="TemplateBooking" class="mceItemAnchor"></a>Create a Template Booking for Quick Booking</h2><p xmlns="http://www.w3.org/1999/xhtml">To make it easier to create compensatory time off bookings, we use a feature of time cockpit called timesheet templates. To create a template from a time sheet entry right-click it and choose "Save as template". </p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/01/Time Sheet_CreateTemplate.png" alt="Create Time Sheet Template" title="Create Time Sheet Template" />
</p><p xmlns="http://www.w3.org/1999/xhtml">From that moment on you can access the time sheet template from your "Templates" menu in the ribbon. If you create a new time sheet entry from the compensatory time off template you do not have to choose the working time weight "Compensatory Time Off", but the template handles that for you. Just adjust the description or the duration if necessary and you are done.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/01/Time Sheet_Template.png" alt="Time Sheet Template" title="Time Sheet Template" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Conclusion</h2><p xmlns="http://www.w3.org/1999/xhtml">We have shown in this post how to explicitly book compensatory time off without affecting a user's actual hours of work. This comes in handy if a manager who checks her employees' time sheet entries at the end of the month wants to distinguish if an employee has forgotten to book his time or has actually been off. Further, this approach can prove helpful if you have to report the compensatory time off of your employees.</p>