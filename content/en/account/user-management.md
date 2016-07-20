---
layout: page
title: User Management - Time Cockpit
permalink: /account/user-management/
---

<f:function name="TimeCockpit.Security.AuthenticationRequired.Functions.EnsureIsAdmin" xmlns:f="http://www.composite.net/ns/function/1.0" /><h1 xmlns="http://www.w3.org/1999/xhtml">User Management</h1><p xmlns="http://www.w3.org/1999/xhtml">The user manager allows you to create new users and to activate or deactivate existing ones. Your account will not be charged for deactivated users. For a detailed explanation of our user-related pricing model see <a href="{{site.baseurl}}/preis/preis/">pricing information</a>.</p><f:function name="Composite.AspNet.LoadUserControl" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="Path" value="~/Frontend/Custom/Web/Forms/Controls/UserManagement.ascx" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>