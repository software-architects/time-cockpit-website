---
layout: blog
title: Time Cockpit and Gartner Top 10 Strategic Technology Trends
excerpt: Each year, Gartner publishes their view on top technology trends for the upcoming year. Recently, the trends for 2015 have been published. It turned out that time cockpit is positioned really well. In this blog article we want to describe how our strategy for time cockpit relates to certain trends that Gartner recognized for 2015.
author: Rainer Stropek
date: 2014-11-04
bannerimage: /content/images/blog/2014/11/3966991088_42ddac0ec2_o.jpg
lang: en
tags: [time cockpit]
permalink: /blog/2014/11/04/Time-Cockpit-and-Gartner-Top-10-Strategic-Technology-Trends
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/11/3966991088_42ddac0ec2_o.jpg" />Image source: <a href="https://flic.kr/p/73xSf5" target="_blank">https://flic.kr/p/73xSf5</a>, under <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Creative Commons License</a></div><p>Each year, Gartner publishes their view on top technology trends for the upcoming year. Recently, the <a href="http://www.gartner.com/newsroom/id/2867917" target="_blank">trends for 2015</a> have been published. It turned out that time cockpit is positioned really well. In this blog article we want to describe how our strategy for time cockpit relates to certain trends that Gartner recognized for 2015.</p><h2>Cloud/Client Computing</h2><p>Cloud computing has been on Gartner's list of top technology trends for years. For 2015, Gartner states: <em>"While network and bandwidth costs may continue to favor apps that</em> use the intelligence and storage of the client <em>device effectively, coordination and management will be based in the cloud."</em></p><p>For SaaS solutions like time cockpit, we fully agree to this statement. In theory, pure cloud-based solutions are nice but in reality users often struggle with slow and unstable connections (e.g. in hotels, trains, etc.) or expensive internet access (e.g. data roaming while travelling abroad).</p><p class="showcase">Time cockpit's offline support is a solution for that problem. Users can continue to work even without internet. Synchronization happens in the background so users do not have to bother with slow or shaky connections.</p><p>We will not change this approach even when we change our UI technology from Silverlight to HTML5 and JavaScript in the near future.</p><h2>Software-Defined Applications and Infrastructure <br /></h2><p>Gartner states: <em>"Cloud services are</em> software-configurable through API <em>calls, and applications, too, increasingly have rich</em> APIs to access their function and content programmatically<em>. [...] Rules, models and code that can dynamically assemble and configure all of the elements needed from the network through the application are needed."</em></p><p class="showcase">Enabling customers to tailor time cockpit to their needs has been a cornerstone in our strategy for time cockpit from the very beginning. Our latest announcements concerning <a href="http://www.timecockpit.com/blog/2014/04/27/Adding-Web-to-our-API" target="_blank">OData</a> and <a href="http://www.timecockpit.com/blog/2014/10/31/Welcome-OAuth2-and-OpenID-Connect" target="_blank">OpenID Connect</a> prove that we are going to continue this even when we switch technologies.</p><p>Time cockpit allows customization on different layers that require different levels of technical skills. The following table summarizes the most important customization technologies that time cockpit supports.</p><table style="border: 1px solid black; border-spacing: 0;">
  <tbody>
    <tr style="background-color: #ededed; ">
      <th style="padding: 5px; text-align: left; vertical-align: bottom; border-bottom: 1px solid black">Customization Technology</th>
      <th style="padding: 5px; text-align: left; vertical-align: bottom; border-bottom: 1px solid black">What can it do?</th>
      <th style="padding: 5px; text-align: left; vertical-align: bottom; border-bottom: 1px solid black">Target group</th>
      <th style="padding: 5px; text-align: left; vertical-align: bottom; border-bottom: 1px solid black">Required technical skills</th>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">
        <a href="http://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm" target="__blank">Expression Language</a>
      </td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">The expression language is used in time cockpit for all kinds of things (e.g. define format profiles, calculated properties, validation rules, etc.). Its goal is to provide a simple option for adding custom logic to time cockpit without having the need to write code in a programming language. You can think of time cockpit's expression language like Microsoft Office Excel's formula language.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">End Users, Power Users</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Low</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">
        <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="__blank">TCQL Query Language</a>
      </td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">TCQL (time cockpit query language) is a domain-specific query language that understands time cockpit's business logic. Power users can use TCQL for ad-hoc queries. They also use TCQL queries as the basis for lists and reports. .NET and script developers use TCQL queries whenever they need to read data from time cockpit within their programs.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Power Users</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Low to medium*</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Data Model Customization</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Time cockpit allows power users to extend its data model. They can add tables, properties, validation rules, default values, permissions, etc. without knowledge in SQL or programming languages. Time cockpit provides a UI (<em>Customization</em> module) for data model customizations. As an alternative, developers can use scripts (see below) for data model customizations, too.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Power Users</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Low to medium*</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Form/List Customization</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Time cockpit allows power users to create forms and lists if the default UI that time cockpit contains is not sufficient. Time cockpit provides a declarative language for form/list definition. It makes customizing forms/lists doable for power users without requiring programming knowledge.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Power Users</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Low to medium*</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">
        <a href="http://www.timecockpit.com/blog/2014/02/27/Building-Custom-Reports-in-Time-Cockpit" target="__blank">Report Customization</a>
      </td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Time cockpit allows power users to create reports if the default reports that time cockpit contains are not sufficient. They use Microsoft's <em>SQL Server Report Builder</em> tool to create the report definition visually without programming. Time cockpit provides a default report template to start with.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Power Users</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Low to medium*</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">
        <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">Scripts</a>
      </td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Time cockpit support creating scripts using the <em>Python</em> programming language. Such scripts can be used to automate routine tasks (e.g. interfaces), performance maintenance work (e.g. mass data changes, scripted data model extensions), etc. Scripts can be started manually, can be made available to end users via menu items or form buttons (actions), can be scheduled, or can run automatically if data is changed (triggers).</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Developers</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Medium to high*</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Microsoft .NET</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">We provide libraries so that developers can create customizations with C# and Microsoft .NET.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Developers</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">High</td>
    </tr>
    <tr>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">
        <a href="http://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="__blank">Web API</a>
      </td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Developers can use our web API to access time cockpit. Time cockpit's web API is completely platform-independent. Therefore it does not matter which platform or development environment the developer uses. We provide various sample including Microsoft .NET, nodeJS, TypeScript, etc.</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">Developers</td>
      <td style="padding: 5px; text-align: left; vertical-align: top; border-bottom: 1px solid black">High</td>
    </tr>
  </tbody>
</table><p>*) Depending on the complexity of the intended customization</p><h2>Advanced, Pervasive and Invisible Analytics</h2><p>Gartner states: <em>"Every app now needs to be an</em> analytic app<em>"</em>. With its <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">signal trackers</a>, time cockpit has had analytics capabilities included from the very first day. It enables users to focus on their actual work without caring about time tracking. Whenever they are ready for focussing on their time sheet, time cockpit presents their activity log to make sure that they do not forget billable hours.<em><br /></em></p><p class="showcase">However, we think that privacy is key in the area of signal trackers. Time cockpit does not store automatically collected activity log data without user-specific encryption. By this, activity logs remain private to each user. Neither colleagues nor we can look into a user's activity log.</p><p>Gartner's opinion on this topic: <em>"Big data remains an important enabler for this trend but the focus needs to shift to thinking about big questions and</em> big answers first <em>and big data second — the value is in the answers, not the data"</em>. In line with this statement, we will continue to improve our signal analysis algorithms. For example we work with users who have specific cases where they think that time cockpit could make smarter solutions based on their activity logs. In such situations customers share small parts of their logs with us. However, we have no plans to soften our encryption strategy so that we can look into our users' activity logs for big data analysis. We value privacy more than tweaking our algorithms this way.</p>