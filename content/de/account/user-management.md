---
layout: page
title: Benutzerverwaltung - Time Cockpit
permalink: /de/account/user-management/
---

<f:function name="TimeCockpit.Security.AuthenticationRequired.Functions.EnsureIsAdmin" xmlns:f="http://www.composite.net/ns/function/1.0" /><h1 xmlns="http://www.w3.org/1999/xhtml">Benutzerverwaltung</h1><p xmlns="http://www.w3.org/1999/xhtml">Legen Sie neue Benutzer an oder deaktivieren Sie bestehende Benutzer. Es werden nur aktive Benutzer verrechnet. <a href="{{site.baseurl}}/preis/preis/">Details zur Verrechnung...</a></p><f:function name="Composite.AspNet.LoadUserControl" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="Path" value="~/Frontend/Custom/Web/Forms/Controls/UserManagement.ascx" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>