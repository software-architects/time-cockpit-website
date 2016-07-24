---
layout: blog
title: Learn by Example -  AngularJS, NodeJS, and Typescript
teaser: In this blog post, I would like to summarize a talk I gave at the JavaScript Day of the International PHP Conference in Berlin 2014. The idea of the talk is to demonstrate the power of NodeJS + TypeScript + AngularJS.
author: Rainer Stropek
date: 2014-06-04
bannerimage: 
lang: en
permalink: /blog/2014/06/04/Learn-by-Example-AngularJS-NodeJS-and-Typescript
---

<p xmlns="http://www.w3.org/1999/xhtml">In this blog post, I would like to summarize a talk I gave at the <a href="http://phpconference.com/2014se/en/special-days/javascript-day" target="_blank">JavaScript Day of the International PHP Conference</a> in Berlin 2014. The idea of the talk is to demonstrate the power of <a href="http://nodejs.org/" target="_blank">NodeJS</a> + <a href="http://www.typescriptlang.org" target="_blank">TypeScript</a> + <a href="https://angularjs.org/" target="_blank">AngularJS</a>.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">The entire code is available in my <a href="https://github.com/rstropek/Samples/tree/master/AngularRegistrationSample" target="_blank">GitHub repository</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Step 1: Let’s Build a Web API</h2><p xmlns="http://www.w3.org/1999/xhtml">As a first step in our sample we want to create a small web API using NodeJS + TypeScript. Recently, Microsoft has launched its <a href="https://nodejstools.codeplex.com/" target="_blank"><em>NodeJS Tools for Visual Studio</em></a>. So if you are used to developing with Visual Studio, you can stick to the IDE you are used to even when writing NodeJS code.</p><p xmlns="http://www.w3.org/1999/xhtml">As a starting point we create a new NodeJS application called <em>Server</em> in Visual Studio. Note that you have to have the NodeJS Tools installed in Visual Studio 2013 Update 2 for that.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:eb76e872-1c8d-4d3c-9038-817a4104399b" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">The resulting project contains a lot of stuff that we do not need for our example. You can clean up the project and delete all HTML/CSS-generation-related stuff until your project structure looks something like this:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/06/NodeJSAngular/NodeAngular_CleanedProject.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">The project template already added the express framework. It enables us to build web APIs without having to care for all the low-level details. As we are not only going to implement GET requests but POST requests (for inserting new data), too, we will need to parse JSON in the HTTP request body. For that, we need the <em>body-parser</em> module, too. Therefore we have to extend the <em>package.json</em> file a bit:</p>{% highlight javascript %}{
  "name": "AngularRegistrationSample",
  "version": "0.0.0",
  "description": "Example",
  "main": "app.js",
  "author": {
    "name": "Rainer Stropek",
    "email": "rainer@software-architects.at"
  },
  "dependencies": {
    "body-parser": "^1.3.0",
    "express": "^3.10.2"
  }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Well, strictly speaking we would not have to edit <em>package.json</em> by hand. We also do not need to call <em>npm install</em> in a command line prompt to download the additional package. The NodeJS tools integrate these things directly into Visual Studio (similar to NuGet which some of you might know from .NET development).</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:496cd930-6811-4f7d-90f0-250c14548185" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Now we can implement our web API. Here is the source code. Please take a look at the comments. They will lead you through this sample step by step.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">The important part to note here is the Typescript integration. On the server side, we use a Typescript <em>interface</em> to define a data structure for our web API. Additionally, we add a <em>class</em> with business logic.</p><p xmlns="http://www.w3.org/1999/xhtml">Remember these types, we will reuse exactly the same code on the client-side later. That’s the beauty of having the same language – Typescript – on the client and the server.</p>{% highlight javascript %}// Import express with body parsers (for handling JSON)
import express = require('express');
var bodyParser = require('body-parser');


// Business logic and data structures
interface IRegistration {
    salutation: string;
    name: string;
    age: number;
}

class Registration implements IRegistration {
    public salutation: string;
    public name: string;
    public age: number;

    constructor(registration: IRegistration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;
    }

    public isValid() {
        return this.age &gt;= 18;
    }
}

// Sample repository of registrations (for demo purposes just in memory
var registrations = new Array&lt;IRegistration&gt;();
registrations.push(
    { salutation: "Mr.", name: "Tom Tailor", age: 20 },
    { salutation: "Mr.", name: "Max Muster", age: 19 });


// Setup express
var app = express();
app.use(bodyParser());

// Uncommend this line to demo basic auth
// app.use(express.basicAuth((user, password) =&gt; user == "user2" &amp;&amp; password == "password"));


// Implement web API
app.get("/api/registrations", (req, res) =&gt; {
    // Get all registrations
    res.send(registrations);
});

// Register
app.post("/api/register", (req, res) =&gt; {
    var registration = new Registration(&lt;IRegistration&gt;req.body);
    if (registration.isValid()) {
        registrations.push(registration);
        res.send(201);
    }
    else {
        res.send(400);
    }
});

// Listen for HTTP traffic
app.listen(process.env.PORT || 3000);{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Step 2: Test Your Web API</h2><p xmlns="http://www.w3.org/1999/xhtml">With the NodeJS Tools for Visual Studio you can debug your code just be hitting F5. Try to set breakpoints in your Typescript NodeJS code. It will work just fine. You can even use features like <em>Watch Expressions</em>, etc. Nice, isn’t it?</p><p xmlns="http://www.w3.org/1999/xhtml">The following screenshot shows how to create test calls to your web API with <em>Fiddler</em>. It also shows how the request hits a breakpoint in NodeJS Typescript code in Visual Studio and demonstrates watch expressions.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
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
</f:function><p xmlns="http://www.w3.org/1999/xhtml">We need a few more components for our clients. In contrast to NodeJS where we used <em>NPM</em> (<em>Node Package Manager</em>), we now use <em>NuGet</em>. You can either right-click on the project, select <em>Manage NuGet Packages</em> and select the packages by hand or you can copy/past the following code in your <em>packages.config</em> file:</p>{% highlight javascript %}&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;packages&gt;
  &lt;package id="angularjs" version="1.2.16" targetFramework="net451" /&gt;
  &lt;package id="angularjs.TypeScript.DefinitelyTyped" version="1.0.4" targetFramework="net451" /&gt;
  &lt;package id="bootstrap" version="3.1.1" targetFramework="net451" /&gt;
  &lt;package id="jQuery" version="1.9.1" targetFramework="net451" /&gt;
  &lt;package id="jquery.TypeScript.DefinitelyTyped" version="0.8.7" targetFramework="net451" /&gt;
&lt;/packages&gt;{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Angular Controllers in Typescript, Data Binding</h3><p xmlns="http://www.w3.org/1999/xhtml">First, let us display our list or existing registrations. For that, we need to create an AngularJS controller. <em>Controller</em>, like in MVC (Model-View-<em>Controller</em>). Take a look at the following code.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Do you recognize the code reuse from the server? The client and the server share the same data structure and the same business logic.</p><p xmlns="http://www.w3.org/1999/xhtml">For the sake of simplicity, I copy the code from the server to the client. In practice, you would probably create a shared module and reuse identical files. If you follow along, call the following file <em>registrations.ts</em>.</p>{% highlight javascript %}// A simple logger interface to demonstrate AngularJS depdency injection.
// The implementatio of the logger is published in index.ts.
interface ILogger {
    log: (string) =&gt; void;
}


// Reused business logic and data structure from the server
class DefaultLogger implements ILogger {
    public log(text: string) {
        console.log(text);
    }
}

interface IRegistration {
    salutation: string;
    name: string;
    age: number;
}

class Registration implements IRegistration {
    public salutation: string;
    public name: string;
    public age: number;

    constructor(registration: IRegistration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;
    }

    public isValid() {
        return this.age &gt;= 18;
    }
}


// The interface the Angular's $scope. Used to access the data structure for
// data binding in a type-safe way. 
interface IRegistrationsViewModel extends ng.IScope {
    registrations: Array&lt;IRegistration&gt;;
    refresh: () =&gt; void;
}

// The controller class. Note that it uses Angular's dependency injection to
// get the $http service (for http requests) and the logger (see above).
// 
class RegistrationsViewModel {
    constructor($scope: IRegistrationsViewModel, $http: ng.IHttpService, private logger: ILogger) {
        $scope.registrations = new Array&lt;IRegistration&gt;();
        $scope.refresh = () =&gt; {
            logger.log("Requesting...");
            $http.get&lt;Array&lt;IRegistration&gt;&gt;("/api/registrations")
                .success(registrations =&gt; {
                    registrations.forEach(r =&gt; $scope.registrations.push(r));
                });
        };
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Having this controller, building the data-bound client code is a piece of cake. Here is the HTML from <em>registrations.html</em> including the AngularJS data binding attributes:</p>{% highlight javascript %}&lt;h1&gt;Registration Sample&lt;/h1&gt;

&lt;button type="button" class="btn btn-primary" ng-click="refresh()"&gt;Refresh&lt;/button&gt;

&lt;table class="table" style="max-width: 300px;"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Salutation&lt;/th&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Age&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr ng-repeat="reg in registrations"&gt;
            &lt;td&gt;{{reg.salutation}}&lt;/td&gt;
            &lt;td&gt;{{reg.name}}&lt;/td&gt;
            &lt;td&gt;{{reg.age}}&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;p&gt;Do you want to &lt;a href="#register"&gt;register&lt;/a&gt;?&lt;/p&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">We do not only want to view the registrations. We also want to be able to register new people. Therefore we create an additional controller called <em>register.ts</em>:</p>{% highlight javascript %}interface IRegisterViewModel extends ng.IScope, IRegistration {
    save: () =&gt; void;
}

class RegisterViewModel {
    constructor($scope: IRegisterViewModel, $http: ng.IHttpService, private logger: ILogger) {
        $scope.save = () =&gt; {
            $http.post("/api/register", { name: $scope.name, salutation: $scope.salutation, age: $scope.age }, { headers: { "Content-Type": "application/json" } })
                .success(_ =&gt; {
                    alert("You are registered!");
                })
                .error(_ =&gt; {
                    alert("Sorry, not possible!");
                });
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">And here is the corresponding HTML file called <em>register.html</em>:</p>{% highlight javascript %}&lt;h1&gt;Registration Sample&lt;/h1&gt;

&lt;form role="form" style="max-width: 300px;"&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="salutation"&gt;Salution:&lt;/label&gt;
        &lt;select class="form-control" ng-model="salutation"&gt;
            &lt;option value="Mr." ng-selected="salutation=='Mr.'"&gt;Mr.&lt;/option&gt;
            &lt;option value="Ms." ng-selected="salutation=='Ms.'"&gt;Ms.&lt;/option&gt;
        &lt;/select&gt;
        &lt;div class="form-group"&gt;
            &lt;label for="name"&gt;Name:&lt;/label&gt;
            &lt;input type="text" class="form-control" placeholder="Name" ng-model="name" /&gt;
        &lt;/div&gt;
        &lt;div class="form-group"&gt;
            &lt;label for="name"&gt;Age:&lt;/label&gt;
            &lt;input type="text" class="form-control" placeholder="Age" ng-model="age" /&gt;
        &lt;/div&gt;
        &lt;button type="button" class="btn btn-primary" ng-click="save()"&gt;Register&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;

&lt;p&gt;Do you want to view &lt;a href="#/"&gt;registrations&lt;/a&gt;?&lt;/p&gt;{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Single Page App (SPA)</h3><p xmlns="http://www.w3.org/1999/xhtml">Did you recognize that the HTML code above is not complete? They have only been fragments. The reason for this is that we want to use AngularJS routing service to build a <em>Single Page App</em> (SPA). A SPA loads a single file and loads the necessary view fragments in the background.</p><p xmlns="http://www.w3.org/1999/xhtml">We need an HTML file that hosts our fragments. Here is the code for <em>index.html</em>. Note the attribute <em>ng-view</em>. This is where the fragments shown above will be inserted.</p>{% highlight javascript %}&lt;!DOCTYPE html&gt;

&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;TypeScript HTML App&lt;/title&gt;

    &lt;link rel="stylesheet" href="Content/bootstrap.css" type="text/css" /&gt;

    &lt;script src="Scripts/jquery-1.9.1.js"&gt;&lt;/script&gt;
    &lt;script src="Scripts/angular.js"&gt;&lt;/script&gt;
    &lt;script src="Scripts/angular-route.js"&gt;&lt;/script&gt;
    &lt;script src="Scripts/bootstrap.js"&gt;&lt;/script&gt;

    &lt;script src="registrations.js"&gt;&lt;/script&gt;
    &lt;script src="register.js"&gt;&lt;/script&gt;
    &lt;script src="index.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body ng-app="RegistrationApp"&gt;
    &lt;div ng-view&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Finally, here is the corresponding Typescript file <em>index.ts</em>:</p>{% highlight javascript %}angular.module("RegistrationApp", ["ngRoute"])
    // The logger to demonstrate AngularJS dependency injection
    .factory("logger", () =&gt; new DefaultLogger())
    // Our controllers for the two views
    .controller("RegistrationsController", RegistrationsViewModel)
    .controller("RegisterController", RegisterViewModel)
    // The routes for the SPA
    .config(($routeProvider: ng.route.IRouteProvider) =&gt; {
        $routeProvider
            .when("/", {
                templateUrl: "registrations.html", controller: "RegistrationsController"
            })
            .when("/register", {
                templateUrl: "register.html", controller: "RegisterController"
            });
    });{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Step 3: Joining Server and Client</h2><p xmlns="http://www.w3.org/1999/xhtml">So how can we bring server and client together? It turns out that the express framework we used in our NodeJS server can serve static files, too. Just add one line to the server’s <em>app.ts</em> file:</p>{% highlight javascript %}...
// Setup express
var app = express();
app.use(bodyParser());
app.use(express.static("../Client")); // &lt;== ADD THIS LINE
...{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">That’s it. You can try your client. The following screenshot shows our client in Chrome’s debugger where you can watch the REST API work in the background.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
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