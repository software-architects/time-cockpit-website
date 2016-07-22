---
layout: blog
title: Office 365 Calendar Add-In with Time Cockpit
teaser: Office 365 makes it quite easy to create add-ins using HTML and JavaScript. Time cockpit also offers an easy-to-use API for these web technologies. In this blog article I walk you through a short sample that demonstrates how to create an Outlook calendar add-in accessing time cockpit's project database.
author: Rainer Stropek
date: 2015-10-31
bannerimage: /content/images/blog/2015/10/office-logo.png
lang: en
permalink: /blog/2015/10/31/Office-365-Calendar-Add-In-with-Time-Cockpit
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2015/10/office365-addin-timecockpit.png" />
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
  {% highlight javascript %}&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
  &lt;!-- Read more about Office Add-Ins manifests at https://msdn.microsoft.com/en-us/library/office/dn554255.aspx --&gt;
  &lt;OfficeApp xmlns="http://schemas.microsoft.com/office/appforoffice/1.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="MailApp"&gt;
    &lt;Id&gt;47ACA615-DC95-469D-81EB-12F31D80348E&lt;/Id&gt;
    &lt;Version&gt;0.0.1.0&lt;/Version&gt;
    &lt;ProviderName&gt;time cockpit&lt;/ProviderName&gt;
    &lt;DefaultLocale&gt;en-US&lt;/DefaultLocale&gt;
    &lt;DisplayName DefaultValue="Project Picker" /&gt;
    &lt;Description DefaultValue="Time Cockpit Project Picker Sample" /&gt;
    &lt;SupportUrl DefaultValue="http://www.timecockpit.com" /&gt;
    &lt;Hosts&gt;
      &lt;Host Name="Mailbox" /&gt;
    &lt;/Hosts&gt;
    &lt;Requirements&gt;
      &lt;Sets&gt;
        &lt;Set Name="MailBox" MinVersion="1.1" /&gt;
      &lt;/Sets&gt;
    &lt;/Requirements&gt;
    &lt;FormSettings&gt;
      &lt;Form xsi:type="ItemEdit"&gt;
        &lt;DesktopSettings&gt;
          &lt;SourceLocation DefaultValue="https://projectpicker.azurewebsites.net/index.html" /&gt;
        &lt;/DesktopSettings&gt;
      &lt;/Form&gt;
    &lt;/FormSettings&gt;
    &lt;Permissions&gt;ReadWriteItem&lt;/Permissions&gt;
    &lt;Rule xsi:type="RuleCollection" Mode="Or"&gt;
      &lt;Rule xsi:type="ItemIs" ItemType="Appointment" FormType="Edit" /&gt;
    &lt;/Rule&gt;
    &lt;DisableEntityHighlighting&gt;false&lt;/DisableEntityHighlighting&gt;
  &lt;/OfficeApp&gt;{% endhighlight %}
</div><h3 xmlns="http://www.w3.org/1999/xhtml">Add-in TypeScript Implementation</h3><div xmlns="http://www.w3.org/1999/xhtml">
  {% highlight javascript %}/// &lt;reference path="typings/tsd.d.ts" /&gt;

'use strict';

/** Project data structures */
interface IProject {
    APP_ProjectUuid: string;
    APP_Code: string;
}
interface IOdataResult&lt;T&gt; {
    value: T[];
}

/** Controller for project list */
class ProjectListController {
    private token: string;

    constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {
        // Check if there is already a token in local storage
        this.token = localStorage.getItem("ProjectPickerToken");
        if (!this.token) {
            // No token -&gt; redirect to login page
            $location.url('/getToken');
        } else {
            this.refreshProjectListAsync();
        }
    }

    // Variables used for data binding    
    public projects: IProject[];
    public isLoading: boolean = false;
    
    /** Refreshes the project list */
    private refreshProjectListAsync() {
        // Indicate that loading operation is running.
        // Controls loading indicator
        this.isLoading = true;
        
        // Get project list using OData
        this.$http.get&lt;IOdataResult&lt;IProject&gt;&gt;(
            "https://apipreview.timecockpit.com/odata/APP_Project?$select=APP_ProjectUuid,APP_Code&amp;$top=20&amp;$orderby=APP_Code",
            { headers: { "Authorization": "Bearer " + this.token } })
            .then(
                // Success -&gt; save project list
                projects =&gt; this.projects = projects.data.value,
                // Error -&gt; if unauthorized, redirect to login page
                err =&gt; { if (err.status === 401) { this.$location.url("/getToken"); } })
            // Reset loading indicator
            .finally(() =&gt; this.isLoading = false)
    }
    
    /** Transfers project code to current appointment's subject field */
    public pickAppointment(projectCode: string) {
        var currentAppointment = &lt;Office.Types.AppointmentCompose&gt;Office.context.mailbox.item;
        currentAppointment.subject.setAsync("Working on project '" + projectCode + "'");
    }
    
    public clearLocalStorage() {
        localStorage.clear();
        console.log("Local storage cleared");
    }
}

/** Controller for login form */
class GetTokenController {
    constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {
    }
    
    // Variables used for data binding    
    public userName: string;
    public password: string;
    public loginError: boolean;
    
    /** Gets the token using basic auth */
    public getToken() {
        if (this.userName &amp;&amp; this.password) {
            // Convert user:password to base64
            var base64UserPassword = window.btoa(this.userName + ':' + this.password);
            
            // Get the bearer token using user + password
            this.$http.get&lt;string&gt;(
                "https://apipreview.timecockpit.com/token", 
                { headers: { "Authorization": "Basic " + base64UserPassword } })
                .then(
                    // Success -&gt; save token in local storage
                    token =&gt; this.saveToken(token.data), 
                    // Error -&gt; activate error message
                    _ =&gt; this.loginError = true);
        }
    }
    
    /** Saves token in local storage and redirects to project list */
    private saveToken(token: string) {
        localStorage.setItem("ProjectPickerToken", token);
        this.$location.url("/projectList");
    }
}

// Setup angular application
angular.module('ProjectPicker', [ 'ngRoute' ])
    .controller('projectListController', ProjectListController)
    .controller('getTokenController', GetTokenController)
    .config(($routeProvider : angular.route.IRouteProvider) =&gt; {
        $routeProvider
            .when('/projectList', { 
                template: `
                &lt;h1&gt;Project List&lt;/h1&gt;
                &lt;p ng-click="vm.clearLocalStorage()"&gt;Clear login cache&lt;/p&gt;
                &lt;p class="text-info" ng-show="vm.isLoading"&gt;
                    Loading projects from time cockpit ...
                &lt;/p&gt;
                &lt;table class="table table-hover"&gt;
                    &lt;tr ng-repeat="p in vm.projects"
                        ng-click="vm.pickAppointment(p.APP_Code)"&gt;
                        &lt;td&gt;{{ p.APP_Code }}&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/table&gt;
                `,
                controller: 'projectListController',
                controllerAs: 'vm'
            })
            .when('/getToken', { 
                template: `
                &lt;h1&gt;Login&lt;/h1&gt;
                &lt;form&gt;
                    &lt;div class="form-group"&gt;
                        &lt;label for="userName"&gt;User:&lt;/label&gt;
                        &lt;input type="email" class="form-control" id="userName" 
                               placeholder="Time cockpit user name ..."
                               ng-model="vm.userName"&gt;
                    &lt;/div&gt;
                    &lt;div class="form-group"&gt;
                        &lt;label for="password"&gt;Password:&lt;/label&gt;
                        &lt;input type="password" class="form-control" id="password" 
                               placeholder="Time cockpit password ..."
                               ng-model="vm.password"&gt;
                    &lt;/div&gt;
                    &lt;p class="text-warning" ng-show="vm.loginError"&gt;
                        There was an error logging in. Correct password?
                    &lt;/p&gt;
                    &lt;button class="btn btn-default" ng-click="vm.getToken()"
                            ng-disabled="!vm.userName || !vm.password"&gt;Login&lt;/button&gt;
                &lt;/form&gt;
                `,
                controller: 'getTokenController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/projectList' });
    });

    // Add office initializer
    Office.initialize = () =&gt; {
        angular.bootstrap(jQuery('#container'), ['ProjectPicker']);
    };
{% endhighlight %}
</div>