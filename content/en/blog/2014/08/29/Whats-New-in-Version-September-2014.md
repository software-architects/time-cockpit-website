---
layout: blog
title: What's New in Version September 2014
teaser: This month we have focused heavily on performance. The first batch of improvements that affects the performance when working directly on the Server is already integrated in the September version.
author: Karin Huber
date: 2014-08-29
bannerimage: 
lang: en
permalink: /blog/2014/08/29/Whats-New-in-Version-September-2014
---

<p>The new version September 2014 (1.28) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2>Changes in the New Version</h2><h3>Multi-Key Import
<br /></h3><p>In the new version of time cockpit we have improved the importer for Excel and CSV files. It now supports compound keys. Compound keys are keys that consist of more than one column. This new feature is especially relevant if you want to import transactional data like time sheet records. In contrast to base data (e.g. customer, projects, etc.), transactional data typically does not have a primary key like a code or an ID. Therefore it is important to be able to mark multiple columns that form the primary key together.</p><p>
  <a href="~/blog/2014/08/29/Compound-Keys-in-Excel-Import" title="Import Data with Compound Keys">Read more about how to import data with compound keys ...</a>
</p><h3>IncludeClause in Actions</h3><p>Before an action is executed, time cockpit reloads the corresponding data rows including all dependent data before it passes them to the action. This is necessary to make sure that the entire rows including all dependent objects are in memory. A list could have been optimized to load only a subset of the columns of a model entity. If time cockpit would not reload the data rows before executing the action, the action would possibly get incomplete data.</p><p>If an entity contains lots of relations, the query to reselect the data may become quite slow although the action possibly does not event need all dependent data. To specify which data should be loaded for the action, we have introduced an IncludeClause processing directive. This allows you to specify which relations are necessary to execute the action.</p><p>
  <a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" title="Using the IncludeClause in Actions" target="_blank">Find more information on using the IncludeClause in the time cockpit help ...</a>
</p><h3>Performance</h3><p>This month we have focused heavily on performance. The first batch of improvements that affects the performance when working directly on the Server is already integrated in the September version. In October we will add further improvements that will affect Server and Client side performance.</p><p>
  <a href="~/blog/2014/08/28/Enhancements-in-Time-Cockpits-Database-Performance" title="Performance Improvements in Time Cockpit">Read more about our performance improvements ...</a>
</p><h3>Bug Fixes</h3><ul>
  <li>When grouping by dates or numbers in lists, time cockpit ordered the groups alphabetically instead of by date or number.</li>
  <li>Copying time sheet entries in calendar did not work in some cases when permissions were defined on time sheet.</li>
  <li>Reports were not reloaded during editing in Python lists.</li>
  <li>When importing data with the importer, triggers got the same values for the Inserted and the Deleted collection in TriggerArgs.</li>
</ul>