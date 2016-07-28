---
layout: blog
title: Deep Dive -  Performance Improvements Through Permission Refactoring
excerpt: Recently, a customer with a heavily customized data model reported performance issues when loading lists of projects. The customer has around 80 users in his account and handles two separate organizations with time cockpit. Each year the users track about 40,000 time sheet entries. On that basis, the customer has custom reports for project controlling and HR.
author: Alexander Huber
date: 2015-02-27
bannerimage: /content/images/blog/2015/02/cheetah.jpg
lang: en
tags: [Performance,Permissions,time cockpit]
permalink: /blog/2015/02/27/Deep-Dive-Performance-Improvements-Through-Permission-Refactoring
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/02/cheetah.jpg" style="width: 100%;" />
</p><p class="imageCaption">Image source: <a href="http://flic.kr/p/nUQ7Ko" target="_blank">http://flic.kr/p/nUQ7Ko</a>, <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons</a> License</p><p>Recently, a customer with a heavily customized data model reported performance issues when loading lists of projects. The customer has around 80 users in his account and handles two separate organizations with time cockpit. Each year the users track about 40,000 time sheet entries. On that basis, the customer has custom reports for project controlling and HR. </p><p>To restrict access to functionalities and data, we have implemented an elaborate permission system that controls which user is allowed to do what in time cockpit. For projects, we have defined that users are allowed to read and write all projects where the user is project manager. If a user is a team manager, she is allowed to read all the projects where an employee of the team manager is contributing. Team managers have hierarchical rights. That means a team manager is also allowed to view the projects users are contributing to from a subordinate department or team.</p><p class="showcase">Besides a customizable data model and a configurable user interface, time cockpit includes a powerful permission system that lets users define who is allowed to see what in a declarative way. Thus, it is possible to map organizational structures to time cockpit.</p><h2 class="note">The Usual Way</h2><p>In terms of permissions, we usually follow the practices to define a read and a write permission <em>for each role and entity</em>. The permissions for the project entity might look something like the following:</p><p>Permission for the project manager role (the set <em>MyProjectsAsProjectManager</em> is used if user belongs to role <em>PM</em>):</p><div style="margin-left: 2em">
  <p>
    <em>:Iif('PM' In Set('CurrentUserRoles', 'Code'), :Iif(Current.ProjectUuid In Set('USR_MyProjectsAsProjectManager'), True, False), False) = True</em>
  </p>
</div><p>Permission for the team manager role (the set <em>TeamProjects</em> is used if user belongs to role <em>TM</em>):</p><div style="margin-left: 2em">
  <p>
    <em>:Iif('TM' In Set('CurrentUserRoles', 'Code'), :Iif(Current.ProjectUuid In Set('USR_TeamProjects'), True, False), False) = True</em>
  </p>
</div><p>Permission for the user role (the set <em>MyProjectsAsStaff</em> is used for all other users):</p><div style="margin-left: 2em">
  <p>
    <em>:Iif('User' In Set('CurrentUserRoles', 'Code'), :Iif(Current.ProjectUuid In Set('USR_MyProjectsAsStaff'), True, False), False) = True</em>
  </p>
</div><p>I think the above code shows quite well how we usually define permissions for various roles. I am sure you get the idea. What happens if you write a query in time cockpits query language <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" title="TCQL" target="_blank">TCQL</a>? Let's take a look at the following query:</p><div style="margin-left: 2em">
  <p>
    <em>From P In Project Select P</em>
  </p>
</div><p>Time cockpit automatically injects the above read permissions into the generated T-SQL. That means that read permissions are already <em>enforced at database level</em>. The database only returns those projects from the database that satisfy the permissions.</p><p>Also note that we use so called <strong>Sets</strong> in the permissions. Sets can be compared to views in a database. They basically return the result of a query, in our case a list of project identifiers a project manager, team manager or basic user is allowed to view. </p><p>With the above permissions in place, time cockpit’s T-SQL translator produces a query that has around 1,000 lines of code. With such a query, the database engine needs some time to compile the query. This is because all the values that are returned by the set are injected in the actual project query as T-SQL parameters. Depending on the number of projects a user is allowed to read, the query grows longer or shorter. This made the issue hard to find, because the behavior differed from user to user.</p><p>
  {% highlight sql %}SELECT    TOP (500) Newid() AS T15_ObjectUuid, 
        [...]
FROM    app_project T15 
        LEFT JOIN app_customer iT1 
            ON iT1.app_customeruuid = T15.relation_app_customer 
        LEFT JOIN usr_organisation iT2 
            ON iT2.usr_organisationuuid = T15.relation_usr_organisation 
WHERE    [...]
        CASE WHEN N'PM' IN ( @T6_0, @T6_1, @T6_2 ) THEN 
            CASE WHEN T15.app_projectuuid IN ( @T7_0, @T7_1, @T7_2, @T7_3, [...] )
        END
        OR 
        CASE WHEN N'TM' IN ( @T8_0, @T8_1, @T8_2 ) THEN 
            CASE WHEN T15.app_projectuuid IN ( @T9_0, @T9_1, @T9_2, @T9_3, [...] )
        END 
        [...]
ORDER BY T15.app_code ASC {% endhighlight %}The long compilation of the query resulted in a degraded performance (about 2 seconds) in every task in time cockpit that involved the loading of projects from the database.</p><p>To remedy the problem, we had to deviate from our usual practice. We packed <em>all the checks in the user permission</em> instead of having a permission for each entity and role. This is possible, because in time cockpit every user is at least in the user role.</p><p>The following code shows the refactored permission:</p><div style="margin-left: 2em">
  <p>
    <em>:Iif('User' In Set('CurrentUserRoles', 'Code'), :Iif(Current.ProjectUuid In Set('USR_MyProjects'), True, False), False) = True</em>
  </p>
</div><p>As you can see we use a special set <em>USR_MyProjects</em> that returns all the project ids a user is allowed to view no matter what role a user has. Basically, the set subsumes all the role specific sets described above and distincts the result. Thus, we were able to reduce the number of parameters passed into the database by two-thirds. Since projects are queried in time cockpit all over the place, this central change improved the overall performance noticeable. The following code fragment shows the query after refactoring the permissions:</p>{% highlight sql %}SELECT    TOP (500) Newid() AS T11_ObjectUuid, 
        [...]
FROM    app_project T11 
        LEFT JOIN app_customer iT1 
            ON iT1.app_customeruuid = T11.relation_app_customer 
        LEFT JOIN usr_organisation iT2 
            ON iT2.usr_organisationuuid = T11.relation_usr_organisation 
WHERE    [...]
        CASE WHEN ( N'User' IN ( @T6_0, @T6_1, @T6_2 ) ) THEN 
            CASE WHEN T11.app_projectuuid IN ( @T7_0, @T7_1, @T7_2, @T7_3, [...] )
        END
        [...]
ORDER  BY T11.app_code ASC {% endhighlight %}<h2>Takeaways</h2><p>Usually, when we customize the data model of time cockpit for our customers, we write the obvious code first so our customers can also easily understand how we extended the data models. However, in that case we had to deviate from that practice for the sake of performance.</p><p>This example demonstrates the power, but also the drawbacks of code generation. For one, users can write simple queries in TCQL and the time cockpit query engine generates an elaborate T-SQL query that contains business rules and permissions. On the other hand, the transformation of TCQL to T-SQL can result in quite verbose T-SQL which makes it difficult to diagnose query performance.</p><p>The nice thing, however, is that the central optimization in the configured permissions resulted in an overall performance improvement in time cockpit. We did not have to optimize query by query all over the place. A single selective optimization did the trick!</p>