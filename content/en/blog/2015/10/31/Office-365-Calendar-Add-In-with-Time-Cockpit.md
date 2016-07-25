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

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/10/office365-addin-timecockpit.png" />
</p><p>Office 365 makes it quite easy to create add-ins using HTML and JavaScript. Time cockpit also offers an easy-to-use API for these web technologies. In this blog article I walk you through a short sample that demonstrates how to create an Outlook calendar add-in accessing time cockpit's project database.</p><p>This sample uses the following technologies:</p><ul>
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
</ul><p class="showcase">Do you know that we offer consulting and development services for <a href="http://www.timecockpit.com" target="_blank">time cockpit</a>? If you want to integrate time cockpit with other systems like Office, accounting, CRM, etc. but you do not have the necessary technical skills in your team, please <a href="~/help-support/contact-us" target="_blank">contact us</a>. We would love to help.</p><h2>Video</h2><div class="videoWrapper">
  <iframe width="800" height="600" src="https://www.youtube.com/embed/bSmREYWGJvc?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div><h2>Source Code</h2><div>You can find the complete source code in our <a href="https://github.com/software-architects/TimeCockpit.Scripts/tree/master/Timecockpit.AngularOutlookPlugin" target="_blank">Github repository</a>. Here are the two most important pieces of source code for this sample: The manifest describing the add-in and the add-in's TypeScript implementation.</div><h3>Office Add-in Manifest</h3><div>
  {% highlight javascript %}<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <!-- Read more about Office Add-Ins manifests at https://msdn.microsoft.com/en-us/library/office/dn554255.aspx -->
  <OfficeApp xmlns="http://schemas.microsoft.com/office/appforoffice/1.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="MailApp">
    <Id>47ACA615-DC95-469D-81EB-12F31D80348E</Id>
    <Version>0.0.1.0</Version>
    <ProviderName>time cockpit</ProviderName>
    <DefaultLocale>en-US</DefaultLocale>
    <DisplayName DefaultValue="Project Picker" />
    <Description DefaultValue="Time Cockpit Project Picker Sample" />
    <SupportUrl DefaultValue="http://www.timecockpit.com" />
    <Hosts>
      <Host Name="Mailbox" />
    </Hosts>
    <Requirements>
      <Sets>
        <Set Name="MailBox" MinVersion="1.1" />
      </Sets>
    </Requirements>
    <FormSettings>
      <Form xsi:type="ItemEdit">
        <DesktopSettings>
          <SourceLocation DefaultValue="https://projectpicker.azurewebsites.net/index.html" />
        </DesktopSettings>
      </Form>
    </FormSettings>
    <Permissions>ReadWriteItem</Permissions>
    <Rule xsi:type="RuleCollection" Mode="Or">
      <Rule xsi:type="ItemIs" ItemType="Appointment" FormType="Edit" />
    </Rule>
    <DisableEntityHighlighting>false</DisableEntityHighlighting>
  </OfficeApp>{% endhighlight %}
</div><h3>Add-in TypeScript Implementation</h3><div>
  {% highlight javascript %}/// <reference path="typings/tsd.d.ts" />

'use strict';

/** Project data structures */
interface IProject {
    APP_ProjectUuid: string;
    APP_Code: string;
}
interface IOdataResult<T> {
    value: T[];
}

/** Controller for project list */
class ProjectListController {
    private token: string;

    constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {
        // Check if there is already a token in local storage
        this.token = localStorage.getItem("ProjectPickerToken");
        if (!this.token) {
            // No token -> redirect to login page
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
        this.$http.get<IOdataResult<IProject>>(
            "https://apipreview.timecockpit.com/odata/APP_Project?$select=APP_ProjectUuid,APP_Code&$top=20&$orderby=APP_Code",
            { headers: { "Authorization": "Bearer " + this.token } })
            .then(
                // Success -> save project list
                projects => this.projects = projects.data.value,
                // Error -> if unauthorized, redirect to login page
                err => { if (err.status === 401) { this.$location.url("/getToken"); } })
            // Reset loading indicator
            .finally(() => this.isLoading = false)
    }
    
    /** Transfers project code to current appointment's subject field */
    public pickAppointment(projectCode: string) {
        var currentAppointment = <Office.Types.AppointmentCompose>Office.context.mailbox.item;
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
        if (this.userName && this.password) {
            // Convert user:password to base64
            var base64UserPassword = window.btoa(this.userName + ':' + this.password);
            
            // Get the bearer token using user + password
            this.$http.get<string>(
                "https://apipreview.timecockpit.com/token", 
                { headers: { "Authorization": "Basic " + base64UserPassword } })
                .then(
                    // Success -> save token in local storage
                    token => this.saveToken(token.data), 
                    // Error -> activate error message
                    _ => this.loginError = true);
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
    .config(($routeProvider : angular.route.IRouteProvider) => {
        $routeProvider
            .when('/projectList', { 
                template: `
                <h1>Project List</h1>
                <p ng-click="vm.clearLocalStorage()">Clear login cache</p>
                <p class="text-info" ng-show="vm.isLoading">
                    Loading projects from time cockpit ...
                </p>
                <table class="table table-hover">
                    <tr ng-repeat="p in vm.projects"
                        ng-click="vm.pickAppointment(p.APP_Code)">
                        <td>{{ p.APP_Code }}</td>
                    </tr>
                </table>
                `,
                controller: 'projectListController',
                controllerAs: 'vm'
            })
            .when('/getToken', { 
                template: `
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label for="userName">User:</label>
                        <input type="email" class="form-control" id="userName" 
                               placeholder="Time cockpit user name ..."
                               ng-model="vm.userName">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" 
                               placeholder="Time cockpit password ..."
                               ng-model="vm.password">
                    </div>
                    <p class="text-warning" ng-show="vm.loginError">
                        There was an error logging in. Correct password?
                    </p>
                    <button class="btn btn-default" ng-click="vm.getToken()"
                            ng-disabled="!vm.userName || !vm.password">Login</button>
                </form>
                `,
                controller: 'getTokenController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/projectList' });
    });

    // Add office initializer
    Office.initialize = () => {
        angular.bootstrap(jQuery('#container'), ['ProjectPicker']);
    };
{% endhighlight %}
</div>