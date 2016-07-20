---
layout: blog
title: Office 365 Calendar Add-In with Time Cockpit
author: Rainer Stropek
bannerimage: /images/blog/2015/10/office-logo.png
permalink: /2015/10/31/Office-365-Calendar-Add-In-with-Time-Cockpit
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/10/office365-addin-timecockpit.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Office 365 makes it quite easy to create add-ins using HTML and JavaScript. Time cockpit also offers an easy-to-use API for these web technologies. In this blog article I walk you through a short sample that demonstrates how to create an Outlook calendar add-in accessing time cockpit's project database.</p><p xmlns="http://www.w3.org/1999/xhtml">This sample uses the following technologies:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="https://msdn.microsoft.com/en-us/library/office/jj220060.aspx" target="_blank">Office Add-ins</a>
  </li>
  <li>
    <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">Time Cockpit's OData Webservice API</a>
  </li>
  <li>
    <a href="https://azure.microsoft.com/" target="_blank">Microsoft Azure</a>
  </li>
  <li>
    <a href="https://angularjs.org/" target="_blank">AngularJS</a>
  </li>
  <li>
    <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a>
  </li>
</ul><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Do you know that we offer consulting and development services for <a href="http://www.timecockpit.com" target="_blank">time cockpit</a>? If you want to integrate time cockpit with other systems like Office, accounting, CRM, etc. but you do not have the necessary technical skills in your team, please <a href="~/help-support/contact-us" target="_blank">contact us</a>. We would love to help.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Video</h2><div class="videoWrapper" xmlns="http://www.w3.org/1999/xhtml">
  <iframe width="800" height="600" src="https://www.youtube.com/embed/bSmREYWGJvc?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div><h2 xmlns="http://www.w3.org/1999/xhtml">Source Code</h2><div xmlns="http://www.w3.org/1999/xhtml">You can find the complete source code in our <a href="https://github.com/software-architects/TimeCockpit.Scripts/tree/master/Timecockpit.AngularOutlookPlugin" target="_blank">Github repository</a>. Here are the two most important pieces of source code for this sample: The manifest describing the add-in and the add-in's TypeScript implementation.</div><h3 xmlns="http://www.w3.org/1999/xhtml">Office Add-in Manifest</h3><div xmlns="http://www.w3.org/1999/xhtml">
  <f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
    <f:param name="SourceCode" value="&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;&#xD;&#xA;  &lt;!-- Read more about Office Add-Ins manifests at https://msdn.microsoft.com/en-us/library/office/dn554255.aspx --&gt;&#xD;&#xA;  &lt;OfficeApp xmlns=&quot;http://schemas.microsoft.com/office/appforoffice/1.1&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:type=&quot;MailApp&quot;&gt;&#xD;&#xA;    &lt;Id&gt;47ACA615-DC95-469D-81EB-12F31D80348E&lt;/Id&gt;&#xD;&#xA;    &lt;Version&gt;0.0.1.0&lt;/Version&gt;&#xD;&#xA;    &lt;ProviderName&gt;time cockpit&lt;/ProviderName&gt;&#xD;&#xA;    &lt;DefaultLocale&gt;en-US&lt;/DefaultLocale&gt;&#xD;&#xA;    &lt;DisplayName DefaultValue=&quot;Project Picker&quot; /&gt;&#xD;&#xA;    &lt;Description DefaultValue=&quot;Time Cockpit Project Picker Sample&quot; /&gt;&#xD;&#xA;    &lt;SupportUrl DefaultValue=&quot;http://www.timecockpit.com&quot; /&gt;&#xD;&#xA;    &lt;Hosts&gt;&#xD;&#xA;      &lt;Host Name=&quot;Mailbox&quot; /&gt;&#xD;&#xA;    &lt;/Hosts&gt;&#xD;&#xA;    &lt;Requirements&gt;&#xD;&#xA;      &lt;Sets&gt;&#xD;&#xA;        &lt;Set Name=&quot;MailBox&quot; MinVersion=&quot;1.1&quot; /&gt;&#xD;&#xA;      &lt;/Sets&gt;&#xD;&#xA;    &lt;/Requirements&gt;&#xD;&#xA;    &lt;FormSettings&gt;&#xD;&#xA;      &lt;Form xsi:type=&quot;ItemEdit&quot;&gt;&#xD;&#xA;        &lt;DesktopSettings&gt;&#xD;&#xA;          &lt;SourceLocation DefaultValue=&quot;https://projectpicker.azurewebsites.net/index.html&quot; /&gt;&#xD;&#xA;        &lt;/DesktopSettings&gt;&#xD;&#xA;      &lt;/Form&gt;&#xD;&#xA;    &lt;/FormSettings&gt;&#xD;&#xA;    &lt;Permissions&gt;ReadWriteItem&lt;/Permissions&gt;&#xD;&#xA;    &lt;Rule xsi:type=&quot;RuleCollection&quot; Mode=&quot;Or&quot;&gt;&#xD;&#xA;      &lt;Rule xsi:type=&quot;ItemIs&quot; ItemType=&quot;Appointment&quot; FormType=&quot;Edit&quot; /&gt;&#xD;&#xA;    &lt;/Rule&gt;&#xD;&#xA;    &lt;DisableEntityHighlighting&gt;false&lt;/DisableEntityHighlighting&gt;&#xD;&#xA;  &lt;/OfficeApp&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
    <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
  </f:function>
</div><h3 xmlns="http://www.w3.org/1999/xhtml">Add-in TypeScript Implementation</h3><div xmlns="http://www.w3.org/1999/xhtml">
  <f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
    <f:param name="SourceCode" value="/// &lt;reference path=&quot;typings/tsd.d.ts&quot; /&gt;&#xD;&#xA;&#xD;&#xA;'use strict';&#xD;&#xA;&#xD;&#xA;/** Project data structures */&#xD;&#xA;interface IProject {&#xD;&#xA;&#x9;APP_ProjectUuid: string;&#xD;&#xA;&#x9;APP_Code: string;&#xD;&#xA;}&#xD;&#xA;interface IOdataResult&lt;T&gt; {&#xD;&#xA;&#x9;value: T[];&#xD;&#xA;}&#xD;&#xA;&#xD;&#xA;/** Controller for project list */&#xD;&#xA;class ProjectListController {&#xD;&#xA;&#x9;private token: string;&#xD;&#xA;&#xD;&#xA;&#x9;constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {&#xD;&#xA;&#x9;&#x9;// Check if there is already a token in local storage&#xD;&#xA;&#x9;&#x9;this.token = localStorage.getItem(&quot;ProjectPickerToken&quot;);&#xD;&#xA;&#x9;&#x9;if (!this.token) {&#xD;&#xA;&#x9;&#x9;&#x9;// No token -&gt; redirect to login page&#xD;&#xA;&#x9;&#x9;&#x9;$location.url('/getToken');&#xD;&#xA;&#x9;&#x9;} else {&#xD;&#xA;&#x9;&#x9;&#x9;this.refreshProjectListAsync();&#xD;&#xA;&#x9;&#x9;}&#xD;&#xA;&#x9;}&#xD;&#xA;&#xD;&#xA;&#x9;// Variables used for data binding&#x9;&#xD;&#xA;&#x9;public projects: IProject[];&#xD;&#xA;&#x9;public isLoading: boolean = false;&#xD;&#xA;&#x9;&#xD;&#xA;&#x9;/** Refreshes the project list */&#xD;&#xA;&#x9;private refreshProjectListAsync() {&#xD;&#xA;&#x9;&#x9;// Indicate that loading operation is running.&#xD;&#xA;&#x9;&#x9;// Controls loading indicator&#xD;&#xA;&#x9;&#x9;this.isLoading = true;&#xD;&#xA;&#x9;&#x9;&#xD;&#xA;&#x9;&#x9;// Get project list using OData&#xD;&#xA;&#x9;&#x9;this.$http.get&lt;IOdataResult&lt;IProject&gt;&gt;(&#xD;&#xA;&#x9;&#x9;&#x9;&quot;https://apipreview.timecockpit.com/odata/APP_Project?$select=APP_ProjectUuid,APP_Code&amp;$top=20&amp;$orderby=APP_Code&quot;,&#xD;&#xA;&#x9;&#x9;&#x9;{ headers: { &quot;Authorization&quot;: &quot;Bearer &quot; + this.token } })&#xD;&#xA;&#x9;&#x9;&#x9;.then(&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;// Success -&gt; save project list&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;projects =&gt; this.projects = projects.data.value,&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;// Error -&gt; if unauthorized, redirect to login page&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;err =&gt; { if (err.status === 401) { this.$location.url(&quot;/getToken&quot;); } })&#xD;&#xA;&#x9;&#x9;&#x9;// Reset loading indicator&#xD;&#xA;&#x9;&#x9;&#x9;.finally(() =&gt; this.isLoading = false)&#xD;&#xA;&#x9;}&#xD;&#xA;&#x9;&#xD;&#xA;&#x9;/** Transfers project code to current appointment's subject field */&#xD;&#xA;&#x9;public pickAppointment(projectCode: string) {&#xD;&#xA;&#x9;&#x9;var currentAppointment = &lt;Office.Types.AppointmentCompose&gt;Office.context.mailbox.item;&#xD;&#xA;&#x9;&#x9;currentAppointment.subject.setAsync(&quot;Working on project '&quot; + projectCode + &quot;'&quot;);&#xD;&#xA;&#x9;}&#xD;&#xA;&#x9;&#xD;&#xA;&#x9;public clearLocalStorage() {&#xD;&#xA;&#x9;&#x9;localStorage.clear();&#xD;&#xA;&#x9;&#x9;console.log(&quot;Local storage cleared&quot;);&#xD;&#xA;&#x9;}&#xD;&#xA;}&#xD;&#xA;&#xD;&#xA;/** Controller for login form */&#xD;&#xA;class GetTokenController {&#xD;&#xA;&#x9;constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {&#xD;&#xA;&#x9;}&#xD;&#xA;&#x9;&#xD;&#xA;&#x9;// Variables used for data binding&#x9;&#xD;&#xA;&#x9;public userName: string;&#xD;&#xA;&#x9;public password: string;&#xD;&#xA;&#x9;public loginError: boolean;&#xD;&#xA;&#x9;&#xD;&#xA;&#x9;/** Gets the token using basic auth */&#xD;&#xA;&#x9;public getToken() {&#xD;&#xA;&#x9;&#x9;if (this.userName &amp;&amp; this.password) {&#xD;&#xA;&#x9;&#x9;&#x9;// Convert user:password to base64&#xD;&#xA;&#x9;&#x9;&#x9;var base64UserPassword = window.btoa(this.userName + ':' + this.password);&#xD;&#xA;&#x9;&#x9;&#x9;&#xD;&#xA;&#x9;&#x9;&#x9;// Get the bearer token using user + password&#xD;&#xA;&#x9;&#x9;&#x9;this.$http.get&lt;string&gt;(&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&quot;https://apipreview.timecockpit.com/token&quot;, &#xD;&#xA;&#x9;&#x9;&#x9;&#x9;{ headers: { &quot;Authorization&quot;: &quot;Basic &quot; + base64UserPassword } })&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;.then(&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;// Success -&gt; save token in local storage&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;token =&gt; this.saveToken(token.data), &#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;// Error -&gt; activate error message&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;_ =&gt; this.loginError = true);&#xD;&#xA;&#x9;&#x9;}&#xD;&#xA;&#x9;}&#xD;&#xA;&#x9;&#xD;&#xA;&#x9;/** Saves token in local storage and redirects to project list */&#xD;&#xA;&#x9;private saveToken(token: string) {&#xD;&#xA;&#x9;&#x9;localStorage.setItem(&quot;ProjectPickerToken&quot;, token);&#xD;&#xA;&#x9;&#x9;this.$location.url(&quot;/projectList&quot;);&#xD;&#xA;&#x9;}&#xD;&#xA;}&#xD;&#xA;&#xD;&#xA;// Setup angular application&#xD;&#xA;angular.module('ProjectPicker', [ 'ngRoute' ])&#xD;&#xA;&#x9;.controller('projectListController', ProjectListController)&#xD;&#xA;&#x9;.controller('getTokenController', GetTokenController)&#xD;&#xA;&#x9;.config(($routeProvider : angular.route.IRouteProvider) =&gt; {&#xD;&#xA;&#x9;&#x9;$routeProvider&#xD;&#xA;&#x9;&#x9;&#x9;.when('/projectList', { &#xD;&#xA;&#x9;&#x9;&#x9;&#x9;template: `&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;h1&gt;Project List&lt;/h1&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;p ng-click=&quot;vm.clearLocalStorage()&quot;&gt;Clear login cache&lt;/p&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;p class=&quot;text-info&quot; ng-show=&quot;vm.isLoading&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;Loading projects from time cockpit ...&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;/p&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;table class=&quot;table table-hover&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;tr ng-repeat=&quot;p in vm.projects&quot;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;    ng-click=&quot;vm.pickAppointment(p.APP_Code)&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;td&gt;{{ p.APP_Code }}&lt;/td&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;/tr&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;/table&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;`,&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;controller: 'projectListController',&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;controllerAs: 'vm'&#xD;&#xA;&#x9;&#x9;&#x9;})&#xD;&#xA;&#x9;&#x9;&#x9;.when('/getToken', { &#xD;&#xA;&#x9;&#x9;&#x9;&#x9;template: `&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;h1&gt;Login&lt;/h1&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;form&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;div class=&quot;form-group&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;label for=&quot;userName&quot;&gt;User:&lt;/label&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;userName&quot; &#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;       placeholder=&quot;Time cockpit user name ...&quot;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;   ng-model=&quot;vm.userName&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;/div&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;div class=&quot;form-group&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;label for=&quot;password&quot;&gt;Password:&lt;/label&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;password&quot; &#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;       placeholder=&quot;Time cockpit password ...&quot;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;   ng-model=&quot;vm.password&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;/div&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;p class=&quot;text-warning&quot; ng-show=&quot;vm.loginError&quot;&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;There was an error logging in. Correct password?&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;/p&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;button class=&quot;btn btn-default&quot; ng-click=&quot;vm.getToken()&quot;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;    ng-disabled=&quot;!vm.userName || !vm.password&quot;&gt;Login&lt;/button&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;&lt;/form&gt;&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;`,&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;controller: 'getTokenController',&#xD;&#xA;&#x9;&#x9;&#x9;&#x9;controllerAs: 'vm'&#xD;&#xA;&#x9;&#x9;&#x9;})&#xD;&#xA;&#x9;&#x9;&#x9;.otherwise({ redirectTo: '/projectList' });&#xD;&#xA;&#x9;});&#xD;&#xA;&#xD;&#xA;&#x9;// Add office initializer&#xD;&#xA;&#x9;Office.initialize = () =&gt; {&#xD;&#xA;&#x9;&#x9;angular.bootstrap(jQuery('#container'), ['ProjectPicker']);&#xD;&#xA;&#x9;};&#xD;&#xA;" xmlns:f="http://www.composite.net/ns/function/1.0" />
    <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
  </f:function>
</div>