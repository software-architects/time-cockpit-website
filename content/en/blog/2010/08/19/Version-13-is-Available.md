---
layout: blog
title: Version 1.3 is Available
teaser: Version 1.3 contains mainly improvements in display and editing of lists. Please note that all users in a tenant have to switch to the new version as soon as the first user in the tenant installs this version, because users with older versions will not be able to sync their data with the server anymore. If you do not want to force other users to upgrade you may install version 1.2. It does not contain all improvements of version 1.3 but it is compatible with versions 1.0 and 1.1.
author: Karin Huber
date: 2010-08-19
bannerimage: 
lang: en
permalink: /blog/2010/08/19/Version-13-is-Available
---

<p>Version 1.3 contains mainly improvements in display and editing of lists. Please note that all users in a tenant have to switch to the new version as soon as the first user in the tenant installs this version, because users with older versions will not be able to sync their data with the server anymore. If you do not want to force other users to upgrade you may install version 1.2. It does not contain all improvements of version 1.3 but it is compatible with versions 1.0 and 1.1.</p><p>The next version with some new functions and further performance improvements will appear sometime in october.</p><h2>What's Changed</h2><ul>
  <li>New properties in list definitions:
<br />
EditModelEntityName - Name of the model entity to edit
<br />
EditProperty - Property in the result of the list, that contains the uuid of the entity to edit
<br />
The new properties are especially helpful when building lists with a query that contains "New With". Results of such lists could not be edited in former versions:
<br />{% highlight javascript %}<List AutoGenerateColumns="False" 
EditModelEntityName="Task" EditProperty="TaskUuid" 
Query="From T In Task.Include('FFGTask').Include('Project.Customer').Include('UserDetail') Select New With { T.TaskUuid, T.TFSId, T.UserDetail, T.Title, T.WorkItemState, .Hours = (From TS In       T.Timesheets Where TS.EndTime &lt; #2010-06-01# Select New With { .Duration = Sum(TS.DurationInHours) }) }" 
xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data">
   ...
</List>{% endhighlight %}<br /></li>
  <li>The number of displayed items in lists is limited to 500 by default. You can get all rows by clicking "Show all rows" at the bottom right corner. If you want to change the limit you can do so at Options / Data.</li>
  <li>Check for null values of relations in the filter area.</li>
  <li>There is a quick filter in the header of all text properties.</li>
  <li>Multiple lines in lists can be deleted at once.</li>
  <li>Performance of auto complete in comboboxes has improved</li>
  <li>Performance or large lists has improved</li>
</ul><h2>What's Fixed</h2><ul>
  <li>Filter allows multiple conditions.</li>
  <li>Nullable guid properties may be left empty in forms.</li>
</ul>