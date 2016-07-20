---
layout: blog
title: Learn by Example, AngularJS, NodeJS, and Typescript
author: Rainer Stropek
bannerimage: 
permalink: /2014/06/4/Learn-by-Example-AngularJS-NodeJS-and-Typescript
---

<p xmlns="http://www.w3.org/1999/xhtml">In this blog post, I would like to summarize a talk I gave at the <a href="http://phpconference.com/2014se/en/special-days/javascript-day" target="_blank">JavaScript Day of the International PHP Conference</a> in Berlin 2014. The idea of the talk is to demonstrate the power of <a href="http://nodejs.org/" target="_blank">NodeJS</a> + <a href="http://www.typescriptlang.org" target="_blank">TypeScript</a> + <a href="https://angularjs.org/" target="_blank">AngularJS</a>.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">The entire code is available in my <a href="https://github.com/rstropek/Samples/tree/master/AngularRegistrationSample" target="_blank">GitHub repository</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Step 1: Let’s Build a Web API</h2><p xmlns="http://www.w3.org/1999/xhtml">As a first step in our sample we want to create a small web API using NodeJS + TypeScript. Recently, Microsoft has launched its <a href="https://nodejstools.codeplex.com/" target="_blank"><em>NodeJS Tools for Visual Studio</em></a>. So if you are used to developing with Visual Studio, you can stick to the IDE you are used to even when writing NodeJS code.</p><p xmlns="http://www.w3.org/1999/xhtml">As a starting point we create a new NodeJS application called <em>Server</em> in Visual Studio. Note that you have to have the NodeJS Tools installed in Visual Studio 2013 Update 2 for that.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:eb76e872-1c8d-4d3c-9038-817a4104399b" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">The resulting project contains a lot of stuff that we do not need for our example. You can clean up the project and delete all HTML/CSS-generation-related stuff until your project structure looks something like this:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2014/06/NodeJSAngular/NodeAngular_CleanedProject.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">The project template already added the express framework. It enables us to build web APIs without having to care for all the low-level details. As we are not only going to implement GET requests but POST requests (for inserting new data), too, we will need to parse JSON in the HTTP request body. For that, we need the <em>body-parser</em> module, too. Therefore we have to extend the <em>package.json</em> file a bit:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="{&#xA;  &quot;name&quot;: &quot;AngularRegistrationSample&quot;,&#xA;  &quot;version&quot;: &quot;0.0.0&quot;,&#xA;  &quot;description&quot;: &quot;Example&quot;,&#xA;  &quot;main&quot;: &quot;app.js&quot;,&#xA;  &quot;author&quot;: {&#xA;    &quot;name&quot;: &quot;Rainer Stropek&quot;,&#xA;    &quot;email&quot;: &quot;rainer@software-architects.at&quot;&#xA;  },&#xA;  &quot;dependencies&quot;: {&#xA;    &quot;body-parser&quot;: &quot;^1.3.0&quot;,&#xA;    &quot;express&quot;: &quot;^3.10.2&quot;&#xA;  }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Well, strictly speaking we would not have to edit <em>package.json</em> by hand. We also do not need to call <em>npm install</em> in a command line prompt to download the additional package. The NodeJS tools integrate these things directly into Visual Studio (similar to NuGet which some of you might know from .NET development).</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:496cd930-6811-4f7d-90f0-250c14548185" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Now we can implement our web API. Here is the source code. Please take a look at the comments. They will lead you through this sample step by step.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">The important part to note here is the Typescript integration. On the server side, we use a Typescript <em>interface</em> to define a data structure for our web API. Additionally, we add a <em>class</em> with business logic.</p><p xmlns="http://www.w3.org/1999/xhtml">Remember these types, we will reuse exactly the same code on the client-side later. That’s the beauty of having the same language – Typescript – on the client and the server.</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="// Import express with body parsers (for handling JSON)&#xA;import express = require('express');&#xA;var bodyParser = require('body-parser');&#xA;&#xA;&#xA;// Business logic and data structures&#xA;interface IRegistration {&#xA;&#x9;salutation: string;&#xA;&#x9;name: string;&#xA;&#x9;age: number;&#xA;}&#xA;&#xA;class Registration implements IRegistration {&#xA;&#x9;public salutation: string;&#xA;&#x9;public name: string;&#xA;&#x9;public age: number;&#xA;&#xA;&#x9;constructor(registration: IRegistration) {&#xA;&#x9;&#x9;this.salutation = registration.salutation;&#xA;&#x9;&#x9;this.name = registration.name;&#xA;&#x9;&#x9;this.age = registration.age;&#xA;&#x9;}&#xA;&#xA;&#x9;public isValid() {&#xA;&#x9;&#x9;return this.age &gt;= 18;&#xA;&#x9;}&#xA;}&#xA;&#xA;// Sample repository of registrations (for demo purposes just in memory&#xA;var registrations = new Array&lt;IRegistration&gt;();&#xA;registrations.push(&#xA;&#x9;{ salutation: &quot;Mr.&quot;, name: &quot;Tom Tailor&quot;, age: 20 },&#xA;&#x9;{ salutation: &quot;Mr.&quot;, name: &quot;Max Muster&quot;, age: 19 });&#xA;&#xA;&#xA;// Setup express&#xA;var app = express();&#xA;app.use(bodyParser());&#xA;&#xA;// Uncommend this line to demo basic auth&#xA;// app.use(express.basicAuth((user, password) =&gt; user == &quot;user2&quot; &amp;&amp; password == &quot;password&quot;));&#xA;&#xA;&#xA;// Implement web API&#xA;app.get(&quot;/api/registrations&quot;, (req, res) =&gt; {&#xA;&#x9;// Get all registrations&#xA;&#x9;res.send(registrations);&#xA;});&#xA;&#xA;// Register&#xA;app.post(&quot;/api/register&quot;, (req, res) =&gt; {&#xA;&#x9;var registration = new Registration(&lt;IRegistration&gt;req.body);&#xA;&#x9;if (registration.isValid()) {&#xA;&#x9;&#x9;registrations.push(registration);&#xA;&#x9;&#x9;res.send(201);&#xA;&#x9;}&#xA;&#x9;else {&#xA;&#x9;&#x9;res.send(400);&#xA;&#x9;}&#xA;});&#xA;&#xA;// Listen for HTTP traffic&#xA;app.listen(process.env.PORT || 3000);" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Step 2: Test Your Web API</h2><p xmlns="http://www.w3.org/1999/xhtml">With the NodeJS Tools for Visual Studio you can debug your code just be hitting F5. Try to set breakpoints in your Typescript NodeJS code. It will work just fine. You can even use features like <em>Watch Expressions</em>, etc. Nice, isn’t it?</p><p xmlns="http://www.w3.org/1999/xhtml">The following screenshot shows how to create test calls to your web API with <em>Fiddler</em>. It also shows how the request hits a breakpoint in NodeJS Typescript code in Visual Studio and demonstrates watch expressions.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:99209756-70ca-4157-b8df-db21040ab181" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Step 3: Build the Client</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Preparing the Project</h3><p xmlns="http://www.w3.org/1999/xhtml">Next, we create a client application using AngularJS and Typescript. For that, create a new Typescript project called <em>Client</em> in Visual Studio:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:27d68f3d-a479-47f3-bf0b-4a2e49d1a271" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">We need a few more components for our clients. In contrast to NodeJS where we used <em>NPM</em> (<em>Node Package Manager</em>), we now use <em>NuGet</em>. You can either right-click on the project, select <em>Manage NuGet Packages</em> and select the packages by hand or you can copy/past the following code in your <em>packages.config</em> file:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;&#xA;&lt;packages&gt;&#xA;  &lt;package id=&quot;angularjs&quot; version=&quot;1.2.16&quot; targetFramework=&quot;net451&quot; /&gt;&#xA;  &lt;package id=&quot;angularjs.TypeScript.DefinitelyTyped&quot; version=&quot;1.0.4&quot; targetFramework=&quot;net451&quot; /&gt;&#xA;  &lt;package id=&quot;bootstrap&quot; version=&quot;3.1.1&quot; targetFramework=&quot;net451&quot; /&gt;&#xA;  &lt;package id=&quot;jQuery&quot; version=&quot;1.9.1&quot; targetFramework=&quot;net451&quot; /&gt;&#xA;  &lt;package id=&quot;jquery.TypeScript.DefinitelyTyped&quot; version=&quot;0.8.7&quot; targetFramework=&quot;net451&quot; /&gt;&#xA;&lt;/packages&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h3 xmlns="http://www.w3.org/1999/xhtml">Angular Controllers in Typescript, Data Binding</h3><p xmlns="http://www.w3.org/1999/xhtml">First, let us display our list or existing registrations. For that, we need to create an AngularJS controller. <em>Controller</em>, like in MVC (Model-View-<em>Controller</em>). Take a look at the following code.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Do you recognize the code reuse from the server? The client and the server share the same data structure and the same business logic.</p><p xmlns="http://www.w3.org/1999/xhtml">For the sake of simplicity, I copy the code from the server to the client. In practice, you would probably create a shared module and reuse identical files. If you follow along, call the following file <em>registrations.ts</em>.</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="// A simple logger interface to demonstrate AngularJS depdency injection.&#xA;// The implementatio of the logger is published in index.ts.&#xA;interface ILogger {&#xA;&#x9;log: (string) =&gt; void;&#xA;}&#xA;&#xA;&#xA;// Reused business logic and data structure from the server&#xA;class DefaultLogger implements ILogger {&#xA;&#x9;public log(text: string) {&#xA;&#x9;&#x9;console.log(text);&#xA;&#x9;}&#xA;}&#xA;&#xA;interface IRegistration {&#xA;&#x9;salutation: string;&#xA;&#x9;name: string;&#xA;&#x9;age: number;&#xA;}&#xA;&#xA;class Registration implements IRegistration {&#xA;&#x9;public salutation: string;&#xA;&#x9;public name: string;&#xA;&#x9;public age: number;&#xA;&#xA;&#x9;constructor(registration: IRegistration) {&#xA;&#x9;&#x9;this.salutation = registration.salutation;&#xA;&#x9;&#x9;this.name = registration.name;&#xA;&#x9;&#x9;this.age = registration.age;&#xA;&#x9;}&#xA;&#xA;&#x9;public isValid() {&#xA;&#x9;&#x9;return this.age &gt;= 18;&#xA;&#x9;}&#xA;}&#xA;&#xA;&#xA;// The interface the Angular's $scope. Used to access the data structure for&#xA;// data binding in a type-safe way. &#xA;interface IRegistrationsViewModel extends ng.IScope {&#xA;&#x9;registrations: Array&lt;IRegistration&gt;;&#xA;&#x9;refresh: () =&gt; void;&#xA;}&#xA;&#xA;// The controller class. Note that it uses Angular's dependency injection to&#xA;// get the $http service (for http requests) and the logger (see above).&#xA;// &#xA;class RegistrationsViewModel {&#xA;&#x9;constructor($scope: IRegistrationsViewModel, $http: ng.IHttpService, private logger: ILogger) {&#xA;&#x9;&#x9;$scope.registrations = new Array&lt;IRegistration&gt;();&#xA;&#x9;&#x9;$scope.refresh = () =&gt; {&#xA;&#x9;&#x9;&#x9;logger.log(&quot;Requesting...&quot;);&#xA;&#x9;&#x9;&#x9;$http.get&lt;Array&lt;IRegistration&gt;&gt;(&quot;/api/registrations&quot;)&#xA;&#x9;&#x9;&#x9;&#x9;.success(registrations =&gt; {&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;registrations.forEach(r =&gt; $scope.registrations.push(r));&#xA;&#x9;&#x9;&#x9;&#x9;});&#xA;&#x9;&#x9;};&#xA;&#x9;}&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Having this controller, building the data-bound client code is a piece of cake. Here is the HTML from <em>registrations.html</em> including the AngularJS data binding attributes:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;h1&gt;Registration Sample&lt;/h1&gt;&#xA;&#xA;&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; ng-click=&quot;refresh()&quot;&gt;Refresh&lt;/button&gt;&#xA;&#xA;&lt;table class=&quot;table&quot; style=&quot;max-width: 300px;&quot;&gt;&#xA;&#x9;&lt;thead&gt;&#xA;&#x9;&#x9;&lt;tr&gt;&#xA;&#x9;&#x9;&#x9;&lt;th&gt;Salutation&lt;/th&gt;&#xA;&#x9;&#x9;&#x9;&lt;th&gt;Name&lt;/th&gt;&#xA;&#x9;&#x9;&#x9;&lt;th&gt;Age&lt;/th&gt;&#xA;&#x9;&#x9;&lt;/tr&gt;&#xA;&#x9;&lt;/thead&gt;&#xA;&#x9;&lt;tbody&gt;&#xA;&#x9;&#x9;&lt;tr ng-repeat=&quot;reg in registrations&quot;&gt;&#xA;&#x9;&#x9;&#x9;&lt;td&gt;{{reg.salutation}}&lt;/td&gt;&#xA;&#x9;&#x9;&#x9;&lt;td&gt;{{reg.name}}&lt;/td&gt;&#xA;&#x9;&#x9;&#x9;&lt;td&gt;{{reg.age}}&lt;/td&gt;&#xA;&#x9;&#x9;&lt;/tr&gt;&#xA;&#x9;&lt;/tbody&gt;&#xA;&lt;/table&gt;&#xA;&#xA;&lt;p&gt;Do you want to &lt;a href=&quot;#register&quot;&gt;register&lt;/a&gt;?&lt;/p&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">We do not only want to view the registrations. We also want to be able to register new people. Therefore we create an additional controller called <em>register.ts</em>:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="interface IRegisterViewModel extends ng.IScope, IRegistration {&#xA;&#x9;save: () =&gt; void;&#xA;}&#xA;&#xA;class RegisterViewModel {&#xA;&#x9;constructor($scope: IRegisterViewModel, $http: ng.IHttpService, private logger: ILogger) {&#xA;&#x9;&#x9;$scope.save = () =&gt; {&#xA;&#x9;&#x9;&#x9;$http.post(&quot;/api/register&quot;, { name: $scope.name, salutation: $scope.salutation, age: $scope.age }, { headers: { &quot;Content-Type&quot;: &quot;application/json&quot; } })&#xA;&#x9;&#x9;&#x9;&#x9;.success(_ =&gt; {&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;alert(&quot;You are registered!&quot;);&#xA;&#x9;&#x9;&#x9;&#x9;})&#xA;&#x9;&#x9;&#x9;&#x9;.error(_ =&gt; {&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;alert(&quot;Sorry, not possible!&quot;);&#xA;&#x9;&#x9;&#x9;&#x9;});&#xA;&#x9;&#x9;}&#xA;&#x9;}&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">And here is the corresponding HTML file called <em>register.html</em>:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;h1&gt;Registration Sample&lt;/h1&gt;&#xA;&#xA;&lt;form role=&quot;form&quot; style=&quot;max-width: 300px;&quot;&gt;&#xA;&#x9;&lt;div class=&quot;form-group&quot;&gt;&#xA;&#x9;&#x9;&lt;label for=&quot;salutation&quot;&gt;Salution:&lt;/label&gt;&#xA;&#x9;&#x9;&lt;select class=&quot;form-control&quot; ng-model=&quot;salutation&quot;&gt;&#xA;&#x9;&#x9;&#x9;&lt;option value=&quot;Mr.&quot; ng-selected=&quot;salutation=='Mr.'&quot;&gt;Mr.&lt;/option&gt;&#xA;&#x9;&#x9;&#x9;&lt;option value=&quot;Ms.&quot; ng-selected=&quot;salutation=='Ms.'&quot;&gt;Ms.&lt;/option&gt;&#xA;&#x9;&#x9;&lt;/select&gt;&#xA;&#x9;&#x9;&lt;div class=&quot;form-group&quot;&gt;&#xA;&#x9;&#x9;&#x9;&lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;&#xA;&#x9;&#x9;&#x9;&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Name&quot; ng-model=&quot;name&quot; /&gt;&#xA;&#x9;&#x9;&lt;/div&gt;&#xA;&#x9;&#x9;&lt;div class=&quot;form-group&quot;&gt;&#xA;&#x9;&#x9;&#x9;&lt;label for=&quot;name&quot;&gt;Age:&lt;/label&gt;&#xA;&#x9;&#x9;&#x9;&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Age&quot; ng-model=&quot;age&quot; /&gt;&#xA;&#x9;&#x9;&lt;/div&gt;&#xA;&#x9;&#x9;&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; ng-click=&quot;save()&quot;&gt;Register&lt;/button&gt;&#xA;&#x9;&lt;/div&gt;&#xA;&lt;/form&gt;&#xA;&#xA;&lt;p&gt;Do you want to view &lt;a href=&quot;#/&quot;&gt;registrations&lt;/a&gt;?&lt;/p&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h3 xmlns="http://www.w3.org/1999/xhtml">Single Page App (SPA)</h3><p xmlns="http://www.w3.org/1999/xhtml">Did you recognize that the HTML code above is not complete? They have only been fragments. The reason for this is that we want to use AngularJS routing service to build a <em>Single Page App</em> (SPA). A SPA loads a single file and loads the necessary view fragments in the background.</p><p xmlns="http://www.w3.org/1999/xhtml">We need an HTML file that hosts our fragments. Here is the code for <em>index.html</em>. Note the attribute <em>ng-view</em>. This is where the fragments shown above will be inserted.</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;!DOCTYPE html&gt;&#xA;&#xA;&lt;html lang=&quot;en&quot;&gt;&#xA;&lt;head&gt;&#xA;&#x9;&lt;meta charset=&quot;utf-8&quot; /&gt;&#xA;&#x9;&lt;title&gt;TypeScript HTML App&lt;/title&gt;&#xA;&#xA;&#x9;&lt;link rel=&quot;stylesheet&quot; href=&quot;Content/bootstrap.css&quot; type=&quot;text/css&quot; /&gt;&#xA;&#xA;&#x9;&lt;script src=&quot;Scripts/jquery-1.9.1.js&quot;&gt;&lt;/script&gt;&#xA;&#x9;&lt;script src=&quot;Scripts/angular.js&quot;&gt;&lt;/script&gt;&#xA;&#x9;&lt;script src=&quot;Scripts/angular-route.js&quot;&gt;&lt;/script&gt;&#xA;&#x9;&lt;script src=&quot;Scripts/bootstrap.js&quot;&gt;&lt;/script&gt;&#xA;&#xA;&#x9;&lt;script src=&quot;registrations.js&quot;&gt;&lt;/script&gt;&#xA;&#x9;&lt;script src=&quot;register.js&quot;&gt;&lt;/script&gt;&#xA;&#x9;&lt;script src=&quot;index.js&quot;&gt;&lt;/script&gt;&#xA;&lt;/head&gt;&#xA;&lt;body ng-app=&quot;RegistrationApp&quot;&gt;&#xA;&#x9;&lt;div ng-view&gt;&lt;/div&gt;&#xA;&lt;/body&gt;&#xA;&lt;/html&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Finally, here is the corresponding Typescript file <em>index.ts</em>:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="angular.module(&quot;RegistrationApp&quot;, [&quot;ngRoute&quot;])&#xA;&#x9;// The logger to demonstrate AngularJS dependency injection&#xA;&#x9;.factory(&quot;logger&quot;, () =&gt; new DefaultLogger())&#xA;&#x9;// Our controllers for the two views&#xA;&#x9;.controller(&quot;RegistrationsController&quot;, RegistrationsViewModel)&#xA;&#x9;.controller(&quot;RegisterController&quot;, RegisterViewModel)&#xA;&#x9;// The routes for the SPA&#xA;&#x9;.config(($routeProvider: ng.route.IRouteProvider) =&gt; {&#xA;&#x9;&#x9;$routeProvider&#xA;&#x9;&#x9;&#x9;.when(&quot;/&quot;, {&#xA;&#x9;&#x9;&#x9;&#x9;templateUrl: &quot;registrations.html&quot;, controller: &quot;RegistrationsController&quot;&#xA;&#x9;&#x9;&#x9;})&#xA;&#x9;&#x9;&#x9;.when(&quot;/register&quot;, {&#xA;&#x9;&#x9;&#x9;&#x9;templateUrl: &quot;register.html&quot;, controller: &quot;RegisterController&quot;&#xA;&#x9;&#x9;&#x9;});&#xA;&#x9;});" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Step 3: Joining Server and Client</h2><p xmlns="http://www.w3.org/1999/xhtml">So how can we bring server and client together? It turns out that the express framework we used in our NodeJS server can serve static files, too. Just add one line to the server’s <em>app.ts</em> file:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="...&#xA;// Setup express&#xA;var app = express();&#xA;app.use(bodyParser());&#xA;app.use(express.static(&quot;../Client&quot;)); // &lt;== ADD THIS LINE&#xA;..." xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="javascript" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">That’s it. You can try your client. The following screenshot shows our client in Chrome’s debugger where you can watch the REST API work in the background.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:0745f82c-c003-4541-bcd6-6fe2001bbb55" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="2000" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">The following screenshot shows the registration form:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:fd6fb1b9-6424-4445-8a89-33eea1433a61" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Play with your application. Try debugging NodeJS and client-side Typescript code. Test your business logic. Maybe add another controller. If you want to experiment, add basic authentication to your web API and create a third view for logging in.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Top Five Take-Aways</h2><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>NodeJS + Typescript development now works perfectly fine with the new NodeJS Tools for Visual Studio.</li>
  <li>Typescript gives you type-safety – on the server as well as on the client.</li>
  <li>Easily share data structures (interfaces) and business logic between client and server. This reduces implementation effort.</li>
  <li>Data binding greatly reduces the amount of code you have to write for data oriented web applications.</li>
  <li>The MVC patterns enable you to write unit tests for your UI logic and your business logic without having to create automated UI tests.</li>
</ol>