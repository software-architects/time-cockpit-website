---
layout: page
title: Delete Account - Time Cockpit
permalink: /account/delete-account/
---

<f:function name="TimeCockpit.Security.AuthenticationRequired.Functions.EnsureIsAdmin" xmlns:f="http://www.composite.net/ns/function/1.0" /><h1 xmlns="http://www.w3.org/1999/xhtml">Delete Account</h1><p xmlns="http://www.w3.org/1999/xhtml">If you delete your account, you will not be able to continue using time cockpit. In order to retrieve your bills, you may continue to login for 2 months after deleting. After those two months, your web site account will be deactivated as well.</p><p xmlns="http://www.w3.org/1999/xhtml">We would be happy if you could give us some feedback on why you are cancelling your account. What should we have done better to keep you as a customer?</p><f:function name="Composite.AspNet.LoadUserControl" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="Path" value="~/Frontend/Custom/Web/Forms/Controls/DeleteAccount.ascx" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>