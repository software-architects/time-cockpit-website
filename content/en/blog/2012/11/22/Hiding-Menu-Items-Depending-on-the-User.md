---
layout: blog
title: Hiding Menu Items Depending on the User
teaser: One of the key benefits of time cockpit is the customizability. A thing that is often requested but unfortunately still a bit difficult is hiding menu items depending on the current user.
author: Philipp Aumayr
date: 2012-11-22
bannerimage: 
lang: en
permalink: /blog/2012/11/22/Hiding-Menu-Items-Depending-on-the-User
---

<p xmlns="http://www.w3.org/1999/xhtml">If you have used time cockpit for a while now you should realize that at its core our time tracking solution is a very dynamic software system. As an administrator in time cockpit you can adjust and tweak existing entities (such as timesheet, project) and the corresponding forms and lists. But it does not end there: The permission system allows very fine grained access control. One application thereof is preventing users from seeing each others time sheet entry, whereas a project administrator may access all time sheet entries from his team, etc.</p><p xmlns="http://www.w3.org/1999/xhtml">We got asked quite a few times now how one would hide navigation links in various modules for specific users. Even in small companies, some employees fulfill multiple roles. Depending on the role of the user the active module should hide different items:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/11/default_navigation_menu.PNG" alt="The default navigation menu, as present in time cockpit (release summer 2012)" title="The default navigation menu (all entries visible to all users)" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit by default does not hide any navigation sections from any user. In our case though, we would want to hide the Billing section from any user that is not in the BackOffice role. First we create a new role with code "BackOffice" (and corresponding field) using the list "Roles" in the users module:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/11/backoffice_role.PNG" alt="The added BackOffice Role" title="A new Role with Code &quot;BackOffice&quot; is added to the list of roles." />
</p><p xmlns="http://www.w3.org/1999/xhtml">The role enables us to assign users to roles and then check against a role instead of users individually. Next, we need to define permissions on the SYS_NavigationSection entity. Since NavigationSection is a SYS entity, you can't modify it through the UI and we have to add permissions using python scripting. First though, lets query the navigation sections that are defined using TCQL. Open a new TCQL Query window and execute the following query:</p>{% highlight javascript %}From S In NavigationSection Select S{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">This will lead to the following result (or similar if you have modified sections / commands a little using the UI):</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/11/defaultnavigationsections.PNG" alt="TCQL query selecting all navigation sections" title="TCQL query to select navigation sections." />
</p><p xmlns="http://www.w3.org/1999/xhtml">From the result table we can derive that the actual name for the Billing navigation section is "Accounting". Now, lets add the permissions! To do this, fire up a new Python script window in the Administration module and insert the following script:</p>{% highlight javascript %}clr.AddReference(&quot;System.Core&quot;)
from System.Collections.Generic import List
from System.Linq import Enumerable
from System import Func

dc = Context
try:
    dc.BeginTransaction()
    dc.EnableSystemMode()
    model = dc.GetWritableModel()

    section = model.SYS_NavigationSection
    command = model.SYS_NavigationCommand

    commandBillingPermission = Permission()
    commandBillingPermission.Name = &quot;Billing&quot;
    commandBillingPermission.InvariantFriendlyName = &quot;Billing&quot;
    commandBillingPermission.Condition = &quot;:Iif(Current.NavigationSection.NavigationSectionName = 'Accounting', :Iif('Billing' In Set('CurrentUserRoles', 'Code'), True, False), :Iif(1=1, True, False)) = True&quot;
    commandBillingPermission.Message = &quot;Not allowed to display section.&quot;
    commandBillingPermission.AccessType = PermissionType.Read

    # fallback permission enabling users to view sections of different type
    commandFallbackPermission = Permission()
    commandFallbackPermission.Name = &quot;Fallback&quot;
    commandFallbackPermission.InvariantFriendlyName = &quot;Fallback&quot;
    commandFallbackPermission.Condition = &quot;Current.NavigationSection.NavigationSectionName &lt;&gt; 'Accounting'&quot;
    commandFallbackPermission.Message = &quot;Not allowed to display section.&quot;
    commandFallbackPermission.AccessType = PermissionType.Read

    # fallback permission enabling administrators to see any section.
    commandFallbackAdminPermission = Permission()
    commandFallbackAdminPermission.Name = &quot;FallbackAdmin&quot;
    commandFallbackAdminPermission.InvariantFriendlyName = &quot;FallbackAdmin&quot;
    commandFallbackAdminPermission.Condition = &quot;'Admin' In Set('CurrentUserRoles', 'Code')&quot;
    commandFallbackAdminPermission.Message = &quot;Not allowed to display section.&quot;
    commandFallbackAdminPermission.AccessType = PermissionType.Read

    if not command.Permissions.Contains(&quot;Billing&quot;):
        command.Permissions.Add(commandBillingPermission)
    if not command.Permissions.Contains(&quot;Fallback&quot;):
        command.Permissions.Add(commandFallbackPermission)
    if not command.Permissions.Contains(&quot;FallbackAdmin&quot;):
        command.Permissions.Add(commandFallbackAdminPermission)
    
    errors = Enumerable.Where(model.ErrorSummary, lambda e: not e.ErrorMessage.Contains(&quot;APP_Lineage&quot;))
    if Enumerable.Count(errors) == 0:
        dc.SaveModel(model)
        dc.TryCommitTransaction()
        print &quot;Done...&quot;
    else:
        dc.TryRollbackTransaction()
        print &quot;Rollback Changes...&quot;
        for m in errors:
            print m.ErrorMessage
    dc.DisableSystemMode()
except:
    dc.DisableSystemMode()
    dc.TryRollbackTransaction()
    raise{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">I know, that is quite a bit of code and could be written in a more compact way. What it does is the following: It adds 3 permissions ('Billing', 'Fallback' and 'FallbackAdmin') to the NavigationCommand entity. The 'Billing' permission includes navigation commands associated with the account section only if the 'Billing' role is in the current set of user roles. Note that the permission is written in a way to allow access if the current navigation section is something else than 'Accounting'.</p><p xmlns="http://www.w3.org/1999/xhtml">In time cockpit, permissions are OR concatenated. If different sections should be controlled, the fallback permission ensures that access to other sections is granted and therefore has to be extended. If another section is excluded (e.g. Holidays for managers ;) ) that expression has to be extended in a similar fashion as shown below:</p>{% highlight javascript %}commandFallbackPermission.Condition = &quot;Current.NavigationSection.NavigationSectionName &lt;&gt; 'Accounting' And Current.NavigationSection.NavigationSectionName &lt;&gt; 'Holiday'&quot;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Finally, the third permission is a fallback for Admins, making sure that admins always see everything. Once you have executed the scripts, make sure you use 'Change Identity' to verify the results. If you did that you will find that the Billing section is gone, because in general empty sections are removed from the menu.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/11/BillingSectionGone.PNG" alt="Navigation section in time cockpit without a Billing section. The section is hidden by permissions." title="Navigation module with a hidden Billing section" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Another approach would be to directly tie the available sections to user roles. Meaning that every section has a corresponding role and you could write a set of generic permissions to get a more easily modifiable permission system.</p>