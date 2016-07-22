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
  {% highlight javascript %}&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;&#xD;
  &lt;!-- Read more about Office Add-Ins manifests at https://msdn.microsoft.com/en-us/library/office/dn554255.aspx --&gt;&#xD;
  &lt;OfficeApp xmlns=&quot;http://schemas.microsoft.com/office/appforoffice/1.1&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:type=&quot;MailApp&quot;&gt;&#xD;
    &lt;Id&gt;47ACA615-DC95-469D-81EB-12F31D80348E&lt;/Id&gt;&#xD;
    &lt;Version&gt;0.0.1.0&lt;/Version&gt;&#xD;
    &lt;ProviderName&gt;time cockpit&lt;/ProviderName&gt;&#xD;
    &lt;DefaultLocale&gt;en-US&lt;/DefaultLocale&gt;&#xD;
    &lt;DisplayName DefaultValue=&quot;Project Picker&quot; /&gt;&#xD;
    &lt;Description DefaultValue=&quot;Time Cockpit Project Picker Sample&quot; /&gt;&#xD;
    &lt;SupportUrl DefaultValue=&quot;http://www.timecockpit.com&quot; /&gt;&#xD;
    &lt;Hosts&gt;&#xD;
      &lt;Host Name=&quot;Mailbox&quot; /&gt;&#xD;
    &lt;/Hosts&gt;&#xD;
    &lt;Requirements&gt;&#xD;
      &lt;Sets&gt;&#xD;
        &lt;Set Name=&quot;MailBox&quot; MinVersion=&quot;1.1&quot; /&gt;&#xD;
      &lt;/Sets&gt;&#xD;
    &lt;/Requirements&gt;&#xD;
    &lt;FormSettings&gt;&#xD;
      &lt;Form xsi:type=&quot;ItemEdit&quot;&gt;&#xD;
        &lt;DesktopSettings&gt;&#xD;
          &lt;SourceLocation DefaultValue=&quot;https://projectpicker.azurewebsites.net/index.html&quot; /&gt;&#xD;
        &lt;/DesktopSettings&gt;&#xD;
      &lt;/Form&gt;&#xD;
    &lt;/FormSettings&gt;&#xD;
    &lt;Permissions&gt;ReadWriteItem&lt;/Permissions&gt;&#xD;
    &lt;Rule xsi:type=&quot;RuleCollection&quot; Mode=&quot;Or&quot;&gt;&#xD;
      &lt;Rule xsi:type=&quot;ItemIs&quot; ItemType=&quot;Appointment&quot; FormType=&quot;Edit&quot; /&gt;&#xD;
    &lt;/Rule&gt;&#xD;
    &lt;DisableEntityHighlighting&gt;false&lt;/DisableEntityHighlighting&gt;&#xD;
  &lt;/OfficeApp&gt;{% endhighlight %}
</div><h3 xmlns="http://www.w3.org/1999/xhtml">Add-in TypeScript Implementation</h3><div xmlns="http://www.w3.org/1999/xhtml">
  {% highlight javascript %}/// &lt;reference path=&quot;typings/tsd.d.ts&quot; /&gt;&#xD;
&#xD;
'use strict';&#xD;
&#xD;
/** Project data structures */&#xD;
interface IProject {&#xD;
    APP_ProjectUuid: string;&#xD;
    APP_Code: string;&#xD;
}&#xD;
interface IOdataResult&lt;T&gt; {&#xD;
    value: T[];&#xD;
}&#xD;
&#xD;
/** Controller for project list */&#xD;
class ProjectListController {&#xD;
    private token: string;&#xD;
&#xD;
    constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {&#xD;
        // Check if there is already a token in local storage&#xD;
        this.token = localStorage.getItem(&quot;ProjectPickerToken&quot;);&#xD;
        if (!this.token) {&#xD;
            // No token -&gt; redirect to login page&#xD;
            $location.url('/getToken');&#xD;
        } else {&#xD;
            this.refreshProjectListAsync();&#xD;
        }&#xD;
    }&#xD;
&#xD;
    // Variables used for data binding    &#xD;
    public projects: IProject[];&#xD;
    public isLoading: boolean = false;&#xD;
    &#xD;
    /** Refreshes the project list */&#xD;
    private refreshProjectListAsync() {&#xD;
        // Indicate that loading operation is running.&#xD;
        // Controls loading indicator&#xD;
        this.isLoading = true;&#xD;
        &#xD;
        // Get project list using OData&#xD;
        this.$http.get&lt;IOdataResult&lt;IProject&gt;&gt;(&#xD;
            &quot;https://apipreview.timecockpit.com/odata/APP_Project?$select=APP_ProjectUuid,APP_Code&amp;$top=20&amp;$orderby=APP_Code&quot;,&#xD;
            { headers: { &quot;Authorization&quot;: &quot;Bearer &quot; + this.token } })&#xD;
            .then(&#xD;
                // Success -&gt; save project list&#xD;
                projects =&gt; this.projects = projects.data.value,&#xD;
                // Error -&gt; if unauthorized, redirect to login page&#xD;
                err =&gt; { if (err.status === 401) { this.$location.url(&quot;/getToken&quot;); } })&#xD;
            // Reset loading indicator&#xD;
            .finally(() =&gt; this.isLoading = false)&#xD;
    }&#xD;
    &#xD;
    /** Transfers project code to current appointment's subject field */&#xD;
    public pickAppointment(projectCode: string) {&#xD;
        var currentAppointment = &lt;Office.Types.AppointmentCompose&gt;Office.context.mailbox.item;&#xD;
        currentAppointment.subject.setAsync(&quot;Working on project '&quot; + projectCode + &quot;'&quot;);&#xD;
    }&#xD;
    &#xD;
    public clearLocalStorage() {&#xD;
        localStorage.clear();&#xD;
        console.log(&quot;Local storage cleared&quot;);&#xD;
    }&#xD;
}&#xD;
&#xD;
/** Controller for login form */&#xD;
class GetTokenController {&#xD;
    constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {&#xD;
    }&#xD;
    &#xD;
    // Variables used for data binding    &#xD;
    public userName: string;&#xD;
    public password: string;&#xD;
    public loginError: boolean;&#xD;
    &#xD;
    /** Gets the token using basic auth */&#xD;
    public getToken() {&#xD;
        if (this.userName &amp;&amp; this.password) {&#xD;
            // Convert user:password to base64&#xD;
            var base64UserPassword = window.btoa(this.userName + ':' + this.password);&#xD;
            &#xD;
            // Get the bearer token using user + password&#xD;
            this.$http.get&lt;string&gt;(&#xD;
                &quot;https://apipreview.timecockpit.com/token&quot;, &#xD;
                { headers: { &quot;Authorization&quot;: &quot;Basic &quot; + base64UserPassword } })&#xD;
                .then(&#xD;
                    // Success -&gt; save token in local storage&#xD;
                    token =&gt; this.saveToken(token.data), &#xD;
                    // Error -&gt; activate error message&#xD;
                    _ =&gt; this.loginError = true);&#xD;
        }&#xD;
    }&#xD;
    &#xD;
    /** Saves token in local storage and redirects to project list */&#xD;
    private saveToken(token: string) {&#xD;
        localStorage.setItem(&quot;ProjectPickerToken&quot;, token);&#xD;
        this.$location.url(&quot;/projectList&quot;);&#xD;
    }&#xD;
}&#xD;
&#xD;
// Setup angular application&#xD;
angular.module('ProjectPicker', [ 'ngRoute' ])&#xD;
    .controller('projectListController', ProjectListController)&#xD;
    .controller('getTokenController', GetTokenController)&#xD;
    .config(($routeProvider : angular.route.IRouteProvider) =&gt; {&#xD;
        $routeProvider&#xD;
            .when('/projectList', { &#xD;
                template: `&#xD;
                &lt;h1&gt;Project List&lt;/h1&gt;&#xD;
                &lt;p ng-click=&quot;vm.clearLocalStorage()&quot;&gt;Clear login cache&lt;/p&gt;&#xD;
                &lt;p class=&quot;text-info&quot; ng-show=&quot;vm.isLoading&quot;&gt;&#xD;
                    Loading projects from time cockpit ...&#xD;
                &lt;/p&gt;&#xD;
                &lt;table class=&quot;table table-hover&quot;&gt;&#xD;
                    &lt;tr ng-repeat=&quot;p in vm.projects&quot;&#xD;
                        ng-click=&quot;vm.pickAppointment(p.APP_Code)&quot;&gt;&#xD;
                        &lt;td&gt;{{ p.APP_Code }}&lt;/td&gt;&#xD;
                    &lt;/tr&gt;&#xD;
                &lt;/table&gt;&#xD;
                `,&#xD;
                controller: 'projectListController',&#xD;
                controllerAs: 'vm'&#xD;
            })&#xD;
            .when('/getToken', { &#xD;
                template: `&#xD;
                &lt;h1&gt;Login&lt;/h1&gt;&#xD;
                &lt;form&gt;&#xD;
                    &lt;div class=&quot;form-group&quot;&gt;&#xD;
                        &lt;label for=&quot;userName&quot;&gt;User:&lt;/label&gt;&#xD;
                        &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;userName&quot; &#xD;
                               placeholder=&quot;Time cockpit user name ...&quot;&#xD;
                               ng-model=&quot;vm.userName&quot;&gt;&#xD;
                    &lt;/div&gt;&#xD;
                    &lt;div class=&quot;form-group&quot;&gt;&#xD;
                        &lt;label for=&quot;password&quot;&gt;Password:&lt;/label&gt;&#xD;
                        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;password&quot; &#xD;
                               placeholder=&quot;Time cockpit password ...&quot;&#xD;
                               ng-model=&quot;vm.password&quot;&gt;&#xD;
                    &lt;/div&gt;&#xD;
                    &lt;p class=&quot;text-warning&quot; ng-show=&quot;vm.loginError&quot;&gt;&#xD;
                        There was an error logging in. Correct password?&#xD;
                    &lt;/p&gt;&#xD;
                    &lt;button class=&quot;btn btn-default&quot; ng-click=&quot;vm.getToken()&quot;&#xD;
                            ng-disabled=&quot;!vm.userName || !vm.password&quot;&gt;Login&lt;/button&gt;&#xD;
                &lt;/form&gt;&#xD;
                `,&#xD;
                controller: 'getTokenController',&#xD;
                controllerAs: 'vm'&#xD;
            })&#xD;
            .otherwise({ redirectTo: '/projectList' });&#xD;
    });&#xD;
&#xD;
    // Add office initializer&#xD;
    Office.initialize = () =&gt; {&#xD;
        angular.bootstrap(jQuery('#container'), ['ProjectPicker']);&#xD;
    };&#xD;
{% endhighlight %}
</div>