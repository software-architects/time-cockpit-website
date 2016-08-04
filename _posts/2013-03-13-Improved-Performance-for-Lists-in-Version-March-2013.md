---
layout: blog
title: Improved Performance for Lists in Version March 2013
excerpt: In version 1.10 we have modified most lists in time cockpit for better performance. If you have built Microsoft Excel export templates you may have to update them to fit together with the new lists.
author: Karin Huber
date: 2013-03-13
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2013/03/13/Improved-Performance-for-Lists-in-Version-March-2013
---

<p>Before time cockpit version March 2013 queries for most lists looked similar to this one for projects:</p>{% highlight sql %}From Current In APP_Project.Include(*) Order By Current.APP_Code Select Current{% endhighlight %}<p>
  <span class="inlineCode">From Project.Include(*)</span> specifies that we want to load projects and all its relations. <span class="inlineCode">Project</span> has a relation to <span class="inlineCode">Customer</span>, and <span class="inlineCode">Customer</span> has a relation to <span class="inlineCode">Country</span>. So we load projects, customers and countries. <span class="inlineCode">Select P</span> specifies that all columns should be loaded, so we get all columns from <span class="inlineCode">Project</span>, <span class="inlineCode">Customer</span> and <span class="inlineCode">Country</span>. The TCQL (time cockpit query language) query looks very simple, but when the query is translated to T-SQL, the problem that too many columns are loaded becomes visible:</p>{% highlight sql %}SELECT  T586.APP_ProjectUuid as T586_APP_ProjectUuid,
        T586.CreationVersion as T586_CreationVersion, 
        T586.LastUpdateVersion as T586_LastUpdateVersion, 
        T586.CurrentSyncSource as T586_CurrentSyncSource, 
        T586.APP_Billable  as T586_APP_Billable, 
        T586.APP_Budget  as T586_APP_Budget, 
        T586.APP_BudgetInHours  as T586_APP_BudgetInHours, 
        T586.APP_Closed  as T586_APP_Closed, 
        T586.APP_Code  as T586_APP_Code, 
        T586.APP_Description  as T586_APP_Description,
        T586.APP_EndDate  as T586_APP_EndDate, 
        T586.APP_ExternalProjectCode  as T586_APP_ExternalProjectCode, 
        T586.APP_FixedPrice  as T586_APP_FixedPrice, 
        T586.APP_HourlyRate  as T586_APP_HourlyRate, 
        T586.APP_InvoicingRules  as T586_APP_InvoicingRules, 
        T586.APP_ProjectName  as T586_APP_ProjectName, 
        T586.APP_StartDate  as T586_APP_StartDate,
        iT587.APP_CustomerUuid as iT587_APP_CustomerUuid, 
        iT587.CreationVersion as iT587_CreationVersion, 
        iT587.LastUpdateVersion as iT587_LastUpdateVersion, 
        iT587.CurrentSyncSource as iT587_CurrentSyncSource, 
        iT587.APP_Code as iT587_APP_Code , 
        iT587.APP_CommercialRegNumber as iT587_APP_CommercialRegNumber , 
        iT587.APP_CompanyName as iT587_APP_CompanyName , 
        iT587.APP_ContactInfo as iT587_APP_ContactInfo , 
        iT587.APP_Email as iT587_APP_Email , 
        iT587.APP_Fax as iT587_APP_Fax , 
        iT587.APP_HourlyRate as iT587_APP_HourlyRate , 
        iT587.APP_InvoiceFAO as iT587_APP_InvoiceFAO , 
        iT587.APP_InvoicingRules as iT587_APP_InvoicingRules , 
        iT587.APP_Phone as iT587_APP_Phone , 
        iT587.APP_Street as iT587_APP_Street , 
        iT587.APP_Town as iT587_APP_Town , 
        iT587.APP_VatID as iT587_APP_VatID , 
        iT587.APP_ZipCode as iT587_APP_ZipCode ,
        iT588.APP_CountryUuid as iT588_APP_CountryUuid, 
        iT588.CreationVersion as iT588_CreationVersion, 
        iT588.LastUpdateVersion as iT588_LastUpdateVersion, 
        iT588.CurrentSyncSource as iT588_CurrentSyncSource, 
        iT588.APP_CountryName as iT588_APP_CountryName , 
        iT588.APP_IsoCode as iT588_APP_IsoCode 
FROM    [mmimknbtfp].APP_Project T586 
        LEFT JOIN [mmimknbtfp].APP_Customer iT587 ON iT587.APP_CustomerUuid = T586.Relation_APP_Customer
        LEFT JOIN [mmimknbtfp].APP_Country iT588 ON iT588.APP_CountryUuid = iT587.Relation_APP_Country{% endhighlight %}<h2>Select New With Queries for Slimmer Lists</h2><p>In the new version we decided only to select the columns we really need to display in the list. For that we use the <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank"><span class="inlineCode">Select New With</span></a> clause in the TCQL query:</p>{% highlight sql %}From Current In APP_Project
Order By :DisplayValue(Current.APP_Customer), Current.APP_Code
Select New With
{
    .ObjectUuid = Current.APP_ProjectUuid,
    .CustomerUuid = Current.APP_Customer.APP_CustomerUuid,
    .CustomerName = :DisplayValue(Current.APP_Customer),
    Current.APP_Code,
    Current.APP_ProjectName,
    Current.APP_StartDate,
    Current.APP_EndDate,
    Current.APP_Budget,
    Current.APP_BudgetInHours,
    Current.APP_Billable,
    Current.APP_Closed
}{% endhighlight %}<p>The TCQL query is a bit more complex because we have to specify all columns that we need for our list. But the generated T-SQL is much simpler now. It only selects 12 columns instead of 41, and the <span class="inlineCode">Country</span> table is not joined because we do not need it for our list:</p>{% highlight sql %}SELECT  newid() as [T592_USR_ModelEntity_5509FD37_1A91_4841_A67E_86F25F59F74AUuid],
        (T592.APP_ProjectUuid) as T592_USR_ObjectUuid, 
        (iT593.APP_CustomerUuid) as T592_USR_CustomerUuid, 
        (iT593.APP_CompanyName) as T592_USR_CustomerName, 
        (T592.APP_Code) as T592_USR_Code, 
        (T592.APP_ProjectName) as T592_USR_ProjectName, 
        (T592.APP_StartDate) as T592_USR_StartDate, 
        (T592.APP_EndDate) as T592_USR_EndDate, 
        (T592.APP_Budget) as T592_USR_Budget, 
        (T592.APP_BudgetInHours) as T592_USR_BudgetInHours, 
        (T592.APP_Billable) as T592_USR_Billable, 
        (T592.APP_Closed) as T592_USR_Closed
FROM    [mmimknbtfp].APP_Project T592 
        LEFT JOIN [mmimknbtfp].APP_Customer iT593 ON iT593.APP_CustomerUuid = T592.Relation_APP_Customer
ORDER BY iT593.APP_CompanyName Asc , T592.APP_Code Asc {% endhighlight %}<p>When we run these two queries on SQL Azure we see that the bytes sent from client and the bytes received from server are much smaller in trial 6 (<span class="inlineCode">New With</span> query) than in trial 5 (simple TCQL query).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/03/compare-query-execution-time.png" alt="Comparison of execution time" title="Comparison of execution time" />
</p><p>In this case the difference is not so big because <span class="inlineCode">Project</span> only has two relations, but when loading timesheets with <span class="inlineCode">Include(*)</span> the generated T-SQL query will become really large and slow. Therefore we recommend to use <span class="inlineCode">Select New With</span> queries for lists whenever possible, or at least only to include the required relations (e.g. <span class="inlineCode">From P In Project.Include('Customer') Select P</span>).</p><h2>Limitations of New With Queries</h2><p>Whenever you want to use a list for relation combo boxes in forms, <span class="inlineCode">Select New With</span> queries cannot be used. You can specify the default relation list for an entity in the <a href="http://help.timecockpit.com/?topic=html/c64adad3-3ddb-49a9-b7f8-c9eff1a984ac.htm" target="_blank">model entity editor</a>. Another option is to specify the list directly in the form or filter where it should be used (&lt;RelationCell List="DefaultProjectRelationList" ... /&gt;). Please make sure that you do not use lists with <span class="inlineCode">Select New With</span> queries in both cases.</p><p>Usually we ship a list and a relation list for each entity (e.g. <span class="inlineCode">APP_DefaultProjectList</span> and <span class="inlineCode">APP_DefaultProjectRelationList</span>). The <span class="inlineCode">ProjectList</span> uses a <span class="inlineCode">Select New With</span> query whereas the <span class="inlineCode">ProjectRelationList</span> selects all properties and relations.</p><h2>What's Changed for Export to Microsoft Excel</h2><p>If you have defined you own Excel templates for export, they might not work in the new version for two reasons:</p><ul>
  <li>The prefix for most columns has changed from <span class="inlineCode">APP_</span> to <span class="inlineCode">USR_</span>. <span class="inlineCode">Select New With</span> queries generate a new entity type on the fly that is always prefixed with <span class="inlineCode">USR_</span> even if the source entity is prefixed with <span class="inlineCode">APP_</span>. Change the prefixes in your Excel template to match the new property names.</li>
  <li>We have removed all unnecessary properties. If you use properties that are no longer contained in the result of the query, you can either remove unavailable properties from your Excel template, or you can copy the list we ship and add all required properties to the Select New With clause. Additionally, change the default list in the <a href="http://help.timecockpit.com/?topic=html/c64adad3-3ddb-49a9-b7f8-c9eff1a984ac.htm" target="_blank">model entity editor</a> to your new list.</li>
</ul>