---
layout: blog
title: Time Tracking Fitness Test
teaser: Did you ever ask yourself how you are doing in terms of time tracking compared to other people? This test unveils your time tracking fitness level. Try it. It's fun and you might get ideas how you could enhance your existing time tracking practice.
author: Rainer Stropek
date: 2014-06-30
bannerimage: 
lang: en
permalink: /blog/2014/06/30/Time-Tracking-Fitness-Test
---

<p xmlns="http://www.w3.org/1999/xhtml">Did you ever ask yourself how you are doing in terms of time tracking compared to other people? This test unveils your time tracking fitness level. Try it. It's fun and you might get ideas how you could enhance your existing time tracking practice.<br /></p><div id="app" xmlns="http://www.w3.org/1999/xhtml"></div><script id="errorView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <h2>Uuups ...</h2>
  <p>    
   An error has occured. We are very sorry.    
  </p>
  <button data-bind="click: gotoFirstStep" class="k-primary" data-role="button">Start test from the beginning ...</button>
</script><script id="layout" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionNumber" data-bind="visible: isQuestion">    
   Question <span data-bind="text: currentStep"></span> of 10:    
  </div>
  <div id="content"></div>
</script><script id="welcomeView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <p>
    <img src="{{site.baseurl}}/content/images/blog/2014/06/P1010036.jpg" />
  </p>
  <p>    
   Welcome to the <em>time tracking fitness test</em>. Answer <em>10 simple questions</em>    
   to check the maturity of your team's time tracking skills and get feedback about possible    
   improvements.    
  </p>
  <p class="showcase">    
   Note that we store your anonymized answers for statistical purposes. We do that to be able to    
   show you how you are doing compared to other people who did the test. However, we do <em>not</em>    
   store any personal information about you or your computer (e.g. IP address) linked to your answers.    
  </p>
  <p>
    <div class="startTestButton">
      <button data-bind="click: gotoNextStep" class="k-primary" data-role="button">Start the test ...</button>
    </div>
  </p>
  <p>    
   You do not want to take the test but you want to see the results of all the people who did?    
   No problem, you can go directly to the <a href="#100">statistics page</a>.    
  </p>
</script><script id="trackingView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.tracking"></h2>
    <p class="introText">    
    Not all companies track their team members’ working time. Some do not need it, some    
    do not want it. What about you and your team? Do you track your working time?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="no" data-bind="checked: testResult.tracking" id="1_1" />
        <label for="1_1">No. We just do our work without tracking working time at all.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="yes" data-bind="checked: testResult.tracking" id="1_2" />
        <label for="1_2">Yes, we do.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="softwareView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.software"></h2>
    <p class="introText">    
    There are numerous software and hardware solutions for time tracking on the market. Do    
    you use such a solution for time tracking?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="no" data-bind="checked: testResult.software" id="2_1" />
        <label for="2_1">No. We use a manual tracking system (e.g. pen and paper).</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="office" data-bind="checked: testResult.software" id="2_2" />
        <label for="2_2">We use office tools (e.g. Excel sheets, Access table) without specific time tracking functionality.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="yes" data-bind="checked: testResult.software" id="2_3" />
        <label for="2_3">Yes. We have dedicated software and/or hardware for time tracking.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="detailView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.detail"></h2>
    <p class="introText">    
    The level of details in time tracking differs from organization to    
    organization. Some are just recording attendance, some need    
    more information for project management or billing. What is your level of detail?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="detail" value="attendance" data-bind="checked: testResult.detail" id="3_1" />
        <label for="3_1">Attendance only for e.g. monitoring conformance with working time regulations, payroll, etc.</label>
      </div>
      <div class="radio">
        <input type="radio" name="detail" value="project" data-bind="checked: testResult.detail" id="3_2" />
        <label for="3_2">We track <em>how</em> working time is spent (e.g. on customers, on projects, etc.) for cost analysis, billing, project management, etc.</label>
      </div>
      <div class="radio">
        <input type="radio" name="detail" value="separate" data-bind="checked: testResult.detail" id="3_3" />
        <label for="3_3">We do both but in two <em>separate</em> systems.</label>
      </div>
      <div class="radio">
        <input type="radio" name="detail" value="integrated" data-bind="checked: testResult.detail" id="3_4" />
        <label for="3_4">We have an <em>integrated</em> system that covers both attendance and project time tracking.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="processesView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.processes"></h2>
    <p class="introText">    
    Nearly every organization has time tracking-related processes (e.g. project budget monitoring,    
    handle vacation requests, billing, monitor overtime, etc.).    
    A time tracking solution can support such processes. What about your solution?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="no" data-bind="checked: testResult.processes" id="4_1" />
        <label for="4_1">No. Our time tracking system just gathers data. Processing this data is done manually.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="partly" data-bind="checked: testResult.processes" id="4_2" />
        <label for="4_2">Partly. Some processes are already supported, some are still manually.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="yes" data-bind="checked: testResult.processes" id="4_3" />
        <label for="4_3">Yes. Our time tracking system contains support (e.g. reports, list, workflows) for related business processes.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="delayView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.delay"></h2>
    <p class="introText">    
    Granted, time tracking is not the favorite task for many people. Therefore, time sheets    
    records are ofter entered with delay. Do you have problems with delayed data entry?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="yes" data-bind="checked: testResult.delay" id="5_1" />
        <label for="5_1">Yes. We regularly postpone important processes like billing because time tracking data is still missing.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="sometimes" data-bind="checked: testResult.delay" id="5_2" />
        <label for="5_2">Typically everything works smooth. Seldom we have a few latecomers.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="no" data-bind="checked: testResult.delay" id="5_3" />
        <label for="5_3">No. People know how important timely data entry is for our processes.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="dataQualityView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.dataQuality"></h2>
    <p class="introText">    
    Services organizations often live by selling the time and knowledge of their team members.    
    Correct time tracking data is crucial for them as they might base    
    important decisions on it (e.g. should we hire new team members?). What about data quality in    
    your time tracking system?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="poor" data-bind="checked: testResult.dataQuality" id="6_1" />
        <label for="6_1">Data quality needs improvements. We cannot rely on the data in our time tracking system. We might even lose billable hours.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="ok" data-bind="checked: testResult.dataQuality" id="6_2" />
        <label for="6_2">In general everything is ok. However, there are some areas where we could improve.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="good" data-bind="checked: testResult.dataQuality" id="6_3" />
        <label for="6_3">Data quality in our time tracking system is good. People know how important time tracking data is for our processes.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="reportView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.report"></h2>
    <p class="introText">    
    In services companies, working time-related KPIs are important as they heavily influence revenues and costs.    
    Therefore, keeping an eye on them is important. How do you handle this challenge?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="manual" data-bind="checked: testResult.report" id="7_1" />
        <label for="7_1">Manually only when needed. We copy data to e.g. Excel and analyze it there.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="report" data-bind="checked: testResult.report" id="7_2" />
        <label for="7_2">We have queries or reports that make it easy to export pre-processed data to e.g. Excel. That's our starting point for further analysis.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="standard" data-bind="checked: testResult.report" id="7_3" />
        <label for="7_3">We have defined KPIs and dedicated reports or dashboards so important time tracking data is only a few mouse clicks away.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="alertsView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.alerts"></h2>
    <p class="introText">    
    Some metrics in your time tracking solution should probably stay between certain boundaries    
    (e.g. actual effort for a project should be lower than the project’s budget, overtime should    
    stay below a certain threshold, etc.). Does your time tracking system alert you    
    if boundaries are exceeded?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="notDefined" data-bind="checked: testResult.alerts" id="8_1" />
        <label for="8_1">No. We have not defined any critical metrics that should be monitored.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="manually" data-bind="checked: testResult.alerts" id="8_2" />
        <label for="8_2">No. We have to monitor critical metrics manually.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="supported" data-bind="checked: testResult.alerts" id="8_3" />
        <label for="8_3">No, but we have lists, reports, dashboards, etc. that make it very easy to monitor critical metrics.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="yes" data-bind="checked: testResult.alerts" id="8_4" />
        <label for="8_4">Yes. We have defined critical metrics and we get alerted (e.g. warning email, triggered workflow, etc.) in case of problems.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="interfacesView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.interfaces"></h2>
    <p class="introText">    
    Time sheet records refer to master data about e.g. employees, customers.    
    Subsequent systems like e.g. payroll, billing often need data from time tracking.    
    How does your time tracking solution exchange data with other systems?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="integrated" data-bind="checked: testResult.interfaces" id="9_1" />
        <label for="9_1">We have an integrated software solution for our entire business. Therefore there is no need for interfaces.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="manually" data-bind="checked: testResult.interfaces" id="9_2" />
        <label for="9_2">We transfer data manually (e.g. copy &amp; paste, duplicate data entry).</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="excel" data-bind="checked: testResult.interfaces" id="9_3" />
        <label for="9_3">We have standardized data exchange formats (e.g. Excel sheet with specific structure) but data exchange has to be triggered manually.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="auto" data-bind="checked: testResult.interfaces" id="9_4" />
        <label for="9_4">We have automatic interfaces for exchanging data from/to our time tracking system.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="securityView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <h2 data-bind="text: questions.security"></h2>
    <p class="introText">    
    Data stored in time tracking system is sensitive data. Therefore, privacy is important in that    
    area. How do you handle data security in your time tracking solution?    
   </p>
    <p>
      <div class="radio">
        <input type="radio" name="answer" value="no" data-bind="checked: testResult.security" id="10_1" />
        <label for="10_1">Data security has not been on our agenda concerning time tracking.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="minimum" data-bind="checked: testResult.security" id="10_2" />
        <label for="10_2">We have thought about data security but we only implemented the absolute minimum.</label>
      </div>
      <div class="radio">
        <input type="radio" name="answer" value="concept" data-bind="checked: testResult.security" id="10_3" />
        <label for="10_3">We have created a data security concept and implemented it in our time tracking solution.</label>
      </div>
    </p>
    <button data-bind="click: gotoNextStep, enabled: canGotoNextStep" class="k-primary" data-role="button">Next ...</button>
  </div>
</script><script id="resultView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <div class="questionArea">
    <div data-bind="visible: resultZero">
      <h2>
        <span data-bind="text: calculatedPoints"></span> of <span data-bind="text: maxPoints"></span> Points -    
     No Time Tracking At All, Seriously?    
    </h2>
      <p>    
     You do not need to track your time at all, really? You are lucky ;-)    
    </p>
      <p>    
     We sometimes see this in startups, non-commercial teams (e.g. developers    
     of open source software), and hobby projects. This approach is fine for such teams. However, if your    
     team grows, if you need to earn money with your work, or as soon as you get employees, things change. In many countries, the    
     law forces you to have at least a basic attendance tracking to be able to monitor compliance to working time regulations.    
    </p>
      <p>    
     As your team gets bigger, you should also consider project time tracking to enable efficient time and resource management    
     and streamline backoffice processes (e.g. billing).    
    </p>
      <p>    
     If your sitation ever changes and you have to introduce a time tracking system, we would love to help you if you decide    
     to evaluate <a href="http://www.timecockpit.com" target="_blank">time cockpit</a>. Contact    
     <a href="mailto:office@timecockpit.com">office@timecockpit.com</a> in case of questions.    
    </p>
    </div>
    <div data-bind="visible: resultPoor">
      <h2>
        <span data-bind="text: calculatedPoints"></span> of <span data-bind="text: maxPoints"></span> Points -    
     Basic Time Tracking With Lots of Possible Improvements    
    </h2>
      <p>    
     You have some basic time tracking in place but there is still a lot of room for improvements.    
    </p>
      <p>    
     Your current solution might be sufficient for you if your revenue and costs are not driven by your team members' working time (e.g. production company).    
     If you work in a services company, you should consider a more elaborate solution for time tracking. There is a certain    
     risk that you lose money (e.g. billable hours) because of untracked or wrongly entered time sheet records.    
    </p>
      <p>    
     Even if you only    
     do projects with fixed prices, a time tracking database is important on the long run. You can e.g. use it to calculate your effective    
     margins of certain projects. Additionally it might be a useful data source when estimating new projects: you can learn from    
     the past.    
    </p>
      <p>    
     If you feel like being stuck with your current time tracking software, we would love to help you if you decide    
     to evaluate <a href="http://www.timecockpit.com" target="_blank">time cockpit</a>. Contact    
     <a href="mailto:office@timecockpit.com">office@timecockpit.com</a> in case of questions.    
    </p>
    </div>
    <div data-bind="visible: resultMedium">
      <h2>
        <span data-bind="text: calculatedPoints"></span> of <span data-bind="text: maxPoints"></span> Points -    
     Not Bad, a Bit More and You Belong to the Best in Class    
    </h2>
      <p>    
     It is obvious that you have spent some time thinking about time tracking in your team. You have done the    
     first important steps. Now it is time to take the next steps. Here are some examples:    
    </p>
      <ul>
        <li>    
      Did you already implement standard reporting or dashboards based on your time tracking data? Making the right KPIs    
      easily available helps the team staying on track. Otherwise different people will do the same analysis e.g. in Excel    
      over and over again - unnecessary waste of time.    
     </li>
        <li>    
      An alerting system that notifies your e.g. project managers if a project runs out of budget might help to prevent    
      unpleasant surprises.    
     </li>
        <li>    
      There might be cost saving potential by streamlining your business processes around time tracking. Avoid unnecessary,    
      manual work by automating interfaces, providing specific reports, etc.    
     </li>
      </ul>
      <p>    
     If you feel like being stuck with your current time tracking software, we would love to help you if you decide    
     to evaluate <a href="http://www.timecockpit.com" target="_blank">time cockpit</a>. Contact    
     <a href="mailto:office@timecockpit.com">office@timecockpit.com</a> in case of questions.    
    </p>
    </div>
    <div data-bind="visible: resultGood">
      <h2>
        <span data-bind="text: calculatedPoints"></span> of <span data-bind="text: maxPoints"></span> Points -    
     Congratulations, You Are Already Doing a Great Job    
    </h2>
      <p>    
     Time tracking is important for you and you are not a beginner. You belong to the best in class.    
    </p>
      <p>    
     However, there is always room for improvement. We hope that some of the questions in this time tracking fitness check    
     inspired you of additional steps that you could take to master time tracking in your team.    
    </p>
      <p>    
     Did you ever do a survey in your team asking how you could make time tracking easier for them?    
     Don't be afraid to ask users e.g. in a survey what they think about the time tracking system. Use the feedback    
     to identify weaknesses and constantly deliver improvement step by step. Look for new user groups of your time    
     tracking system. You could share your great data and insight with    
     your customers and partners. Together you can use it to optimize your project work.    
    </p>
      <p>    
     Are you a <a href="http://www.timecockpit.com" target="_blank">time cockpit</a> user already? If not, we would    
     love to help you if you decide to evaluate our software. Did you know that we offer consulting for time cockpit    
     as well as for topics like time tracking, team organization, agile development, etc., too? Contact    
     <a href="mailto:office@timecockpit.com">office@timecockpit.com</a> in case of questions.    
    </p>
    </div>
    <div data-bind="visible: resultMax">
      <h2>
        <span data-bind="text: calculatedPoints"></span> of <span data-bind="text: maxPoints"></span> Points -    
     Awesome! You are a Real Time Tracking Champion    
    </h2>
      <p>    
     Wow, your time tracking fitness level is really high. The quality of your technical implementation as well as the    
     conceptual work regarding business processes and KPIs are great.    
    </p>
      <p>    
     However, there is always room for improvement:    
    </p>
      <ul>
        <li>    
      Don't be afraid to ask users e.g. in a survey what they think about the time tracking system. Use the feedback    
      to identify weaknesses and constantly deliver improvement step by step.    
     </li>
        <li>    
      Did you ever do a survey in your team asking how you could make time tracking easier for them?    
     </li>
        <li>    
      Look for new user groups of your time tracking system. You could share your great data and insight with    
      your customers and partners. Together you can use it to optimize your project work.    
     </li>
      </ul>
      <p>    
     Are you a <a href="http://www.timecockpit.com" target="_blank">time cockpit</a> user already? If not, we would    
     love to help you if you decide to evaluate our software. Did you know that we offer consulting for time cockpit    
     as well as for topics like time tracking, team organization, agile development, etc., too? Contact    
     <a href="mailto:office@timecockpit.com">office@timecockpit.com</a> in case of questions.    
    </p>
    </div>
    <h2>Result Statistics</h2>
    <p>   
    Would you like to see how you do in comparison to other people who did this test?   
   </p>
    <p>
      <div class="startTestButton">
        <button data-bind="click: gotoStatistics" class="k-primary" data-role="button">To statistics page ...</button>
      </div>
    </p>
    <p>    
    We hope you liked this time tracking fitness test. <a href="http://www.timecockpit.com">Back to time cockpit homepage ...</a></p>
  </div>
</script><script id="statisticView" type="text/x-kendo-template" xmlns="http://www.w3.org/1999/xhtml">
  <h2>Statistics</h2>
  <div class="resultArea">
    <p>    
    This page compares your time tracking fitness with the other people who did this test. You answers    
    are marked with green in the charts.    
   </p>
    <h3 data-bind="text: questions.tracking"></h3>
    <div id="trackingChart" class="resultChart" />
    <h3 data-bind="text: questions.software"></h3>
    <div id="softwareChart" class="resultChart" />
    <h3 data-bind="text: questions.detail"></h3>
    <div id="detailChart" class="resultChart" />
    <h3 data-bind="text: questions.processes"></h3>
    <div id="processesChart" class="resultChart" />
    <h3 data-bind="text: questions.delay"></h3>
    <div id="delayChart" class="resultChart" />
    <h3 data-bind="text: questions.dataQuality"></h3>
    <div id="dataQualityChart" class="resultChart" />
    <h3 data-bind="text: questions.report"></h3>
    <div id="reportChart" class="resultChart" />
    <h3 data-bind="text: questions.alerts"></h3>
    <div id="alertsChart" class="resultChart" />
    <h3 data-bind="text: questions.interfaces"></h3>
    <div id="interfacesChart" class="resultChart" />
    <h3 data-bind="text: questions.security"></h3>
    <div id="securityChart" class="resultChart" />
    <p>    
    We hope you liked this time tracking fitness test. <a href="http://www.timecockpit.com">Back to time cockpit homepage ...</a></p>
  </div>
</script><script src="/Frontend/Scripts/TimeTrackingFitnessTest/jquery.min.js" xmlns="http://www.w3.org/1999/xhtml"></script><script src="/Frontend/Scripts/TimeTrackingFitnessTest/kendo.all.min.js" xmlns="http://www.w3.org/1999/xhtml"></script><script src="/Frontend/Scripts/TimeTrackingFitnessTest/app.js" xmlns="http://www.w3.org/1999/xhtml"></script>