---
layout: blog
title: What's New in Version March 2013
teaser: We are pleased to announce the new version March 2013 of time cockpit. In this version we have focused primarily on the following three goals -  make it easy to import data from other data sources, allow to maintain the data model in multiple languages, make lists more expressive by adding charts to visualize information
author: Karin Huber
date: 2013-02-28
bannerimage: 
lang: en
permalink: /blog/2013/02/28/Whats-New-in-Version-March-2013
---

<p xmlns="http://www.w3.org/1999/xhtml">We are pleased to announce the new version March 2013 of time cockpit. In this version we have focused primarily on the following three goals:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>import data from Microsoft Excel and CSV files</li>
  <li>allow to maintain your data model in multiple languages</li>
  <li>make lists more expressive by adding charts to visualize information</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Import Data from Excel or CSV Files</h2><p xmlns="http://www.w3.org/1999/xhtml">In previous versions of time cockpit you were already able to import data by writing python scripts or .NET code. But the overhead for importing just a few customers or projects was big. So we were looking for an easier way to get your data into time cockpit.</p><p xmlns="http://www.w3.org/1999/xhtml">We decided to support Microsoft Excel and CSV files as data source for the new data importer. You can use the importer in two ways:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Select an entity (e.g. Customer, Project ...) and let time cockpit build a template Excel or CSV file. You can then fill the generated template with your data and import it into time cockpit.</li>
  <li>If you already have an Excel or CSV file you want to import, you can tell the importer how to map the columns of the file to properties in time cockpit and then import your data.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="http://help.timecockpit.com/1.10/?topic=html/ee560e49-e503-4d80-9167-2e6533f50dbe.htm" target="_blank">Read more in the time cockpit documentation...</a>
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Multilingual Data Model</h2><p xmlns="http://www.w3.org/1999/xhtml">Up to now, we have always released time cockpit in English and in German, but you had to decide for a language when creating a new account. It was not possible to change that language later or to have several users that use different languages in one account.</p><p xmlns="http://www.w3.org/1999/xhtml">In the new version we ship the data model in English and in German and each user can choose his preferred language and change it anytime. Additionally, you can add further languages to your data model. The following screenshot shows how you can add your own French localization for the Customer entity.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/02/LocalizationInEntity.png" alt="Localization in entity customer" title="Localization in entity customer" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Please note that this feature does only affect the data model - that means names of entities, properties, and relations, headers in lists and forms, names of actions, validation messages of permissions and much more. Static text in the time cockpit UI is currently only available in English and German.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Visualize Information in Lists with Charts</h2><p xmlns="http://www.w3.org/1999/xhtml">The new version of time cockpit provides two new cell types for our lists: data bars and bullet graphs. Data bars allow you to display one value whereas bullet graphs can compare three values: an actual value, a projected value and a comparative value.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Data Bar</h3><p xmlns="http://www.w3.org/1999/xhtml">We have added data bars to some of our existing lists where we wanted to emphasize one specific key figure. The following list shows the remaining leave for all employees. We use the data bar to display the number of weeks of unused leave.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/02/DataBarsInRemainingLeave.png" alt="Data bars in remaining leave list" title="Data bars in remaining leave list" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Bullet Graph</h3><p xmlns="http://www.w3.org/1999/xhtml">In the budgetary control of projects list we have added bullet graphs to show on the one hand the percentage of hours worked compared to the planned hours and on the other hand the percentage of billable hours.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/02/BulletGraphInBudgetaryControlOfProjects.png" alt="Bullet graph in budgetary control of projects list" title="Bullet graph in budgetary control of projects list" />
</p><p xmlns="http://www.w3.org/1999/xhtml">If you want you can additionally display a comparative value in the graph. The result could look like in the following list. The blue bars show the actual hours spent on a project, the gray bars show the planned hours, and the black lines show the estimated project progress.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/11/BulletGraph.png" alt="Bullet graph with comparative value" title="Bullet graph with comparative value" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Other Improvements</h2><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>The web version (Silverlight) now remembers settings like your last selected formatting profile, your selected device, the view mode in the calendar, etc. when you log out.</li>
  <li>The name of the logged in user and a logout button are shown in the web version (right top corner).</li>
  <li>In the full client you can send us an error report per email whenever an error occurs. </li>
  <li>Expression for the default form of an entity. You can specify, that time sheet entries should usually be opened with the form "APP_TimesheetForm", but when the field "Means of Transport" is set the form "USR_TravelTimesheetForm" should be used.</li>
  <li>IsVisible and IsEnabled expression for navigation commands, navigation sections and modules.</li>
  <li>You can now specify that a module should be opened on the server by default.</li>
  <li>Search in TCQL and Python editor</li>
  <li>Time cockpit can now track Microsoft Team Foundation Services for work item changes and check-ins.</li>
  <li>Book breaks in the time sheet calendar that overwrite all other bookings at the same time. That means you can book from 9:00 am to 5:00 pm and add a break booking for lunch from 12:00 pm to 12:30 pm instead of booking from 9:00 am to 12:00 pm and from 12:30 pm to 5:00 pm.</li>
  <li>If synchronization with the server does not work for some reason, time cockpit will warn you after one day instead of waiting 30 days.</li>
  <li>Overlapping time sheet entries are displayed in a more space-saving way.</li>
  <li>Relations can now be presented as radio button lists in addition to combo boxes.</li>
  <li>Performance in most lists is improved. Please note that <a href="/blog/2013/03/13/Improved-Performance-for-Lists-in-Version-March-2013">templates for export to Microsoft Excel might have to be changed</a>.</li>
</ul>