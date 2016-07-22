---
layout: blog
title: AngularJS with TypeScript and Windows Azure Mobile Services
teaser: In the coming two weeks I will do a series of talks at various conferences in Austria and Germany. I will speak about AngularJS, TypeScript, and Windows Azure Mobile Services. In this blog post I publish the slides and the sample code.
author: Rainer Stropek
date: 2013-10-17
bannerimage: 
lang: en
permalink: /blog/2013/10/17/AngularJS-with-TypeScript-and-Windows-Azure-Mobile-Services
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Slide7.PNG?mw=650&amp;mh=650" />
</p><p xmlns="http://www.w3.org/1999/xhtml">In the coming two weeks I will do a series of talks at various conferences in Austria and Germany. I will speak about AngularJS, TypeScript, and Windows Azure Mobile Services. In this blog post I publish the slides and the sample code.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Update February 18th, 2014: I published an <a href="https://github.com/rstropek/Samples/tree/master/AngularTypeScriptSamples" target="_blank">updated version of the sample on GitHub</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Slides</h2><p xmlns="http://www.w3.org/1999/xhtml">You can view the slides online using Slideshare. If you prefer the complete deck including hidden slides with working hyperlinks and code samples, you can <a href="{{site.baseurl}}/content/images/blog/2013/10/AngularJS.pdf" target="_blank">download the deck in PDF</a>.</p><iframe src="http://www.slideshare.net/slideshow/embed_code/27309265?rel=0" width="512" height="421" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen="allowfullscreen" xmlns="http://www.w3.org/1999/xhtml"></iframe><div style="MARGIN-BOTTOM: 5px" data-mce-style="margin-bottom: 5px;" xmlns="http://www.w3.org/1999/xhtml">
  <strong>
    <a title="AngularJS with TypeScript and Windows Azure Mobile Services" href="https://de.slideshare.net/rstropek/angular-js-27309265" target="_blank">AngularJS with TypeScript and Windows Azure Mobile Services</a>
  </strong> from <strong><a href="http://www.slideshare.net/rstropek" target="_blank">Rainer Stropek</a></strong></div><h2 xmlns="http://www.w3.org/1999/xhtml">Sample 1: The Basics</h2><p xmlns="http://www.w3.org/1999/xhtml">The first sample shows how to hook up AngularJS and TypeScript. You see different data binding techniques (scalar values, methods, and collections).</p><h3 xmlns="http://www.w3.org/1999/xhtml">TypeScript Controller Code</h3>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;

// Create a custom scope based on angular's scope and define
// type-safe members which we will add in the controller function.
interface IHelloWorldScope extends ng.IScope {
    name: string;
    countries: ICountryInfo[];
    getName: () =&gt; string;
    getEnclosedName: (tag: string) =&gt; string;
}

interface ICountryInfo {
    isoCode: string;
    name: string;
}

var HelloCtrl = function ($scope: IHelloWorldScope) {
    $scope.name = &quot;World&quot;;
    $scope.countries = [
        { isoCode: 'AT', name: 'Austria' },
        { isoCode: 'DE', name: 'Germany' },
        { isoCode: 'CH', name: 'Switzerland' }];
    $scope.getName = () =&gt; $scope.name;
    $scope.getEnclosedName = (tag) =&gt; &quot;&lt;&quot; + tag + &quot;&gt;&quot; + $scope.name + &quot;&lt;&quot; + tag + &quot;/&gt;&quot;;
};{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">HTML View</h3>{% highlight javascript %}&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot; /&gt;
   &lt;title&gt;Angular.js Samples Using TypeScript&lt;/title&gt;

    &lt;link href=&quot;../../../Content/bootstrap/bootstrap.css&quot; rel=&quot;stylesheet&quot;&gt;
  &lt;link href=&quot;helloWorldWithController.css&quot; rel=&quot;stylesheet&quot;&gt;

 &lt;script src=&quot;../../../Scripts/angular.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;helloWorldWithController.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body ng-app&gt;
    &lt;div ng-controller=&quot;HelloCtrl&quot;&gt;

       &lt;form&gt;
           &lt;h2&gt;Two-Way Binding&lt;/h2&gt;
           &lt;label for=&quot;messageInput&quot;&gt;Say 'Hello' to:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;messageInput&quot; ng-model=&quot;name&quot;&gt;

         &lt;h2&gt;Simple Bindings&lt;/h2&gt;
           &lt;table class=&quot;table table-hover table-condensed&quot;&gt;
              &lt;tr&gt;
                 &lt;th&gt;Syntax&lt;/th&gt;&lt;th&gt;Result&lt;/th&gt;
             &lt;/tr&gt;
                &lt;tr&gt;
                 &lt;td&gt;Interpolation&lt;/td&gt;&lt;td&gt;Hello, {{name}}!&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                 &lt;td&gt;ng-bind&lt;/td&gt;&lt;td&gt;Hello, &lt;span ng-bind=&quot;name&quot; /&gt;!&lt;/td&gt;
               &lt;/tr&gt;
                &lt;tr&gt;
                 &lt;td&gt;Interpolation with controller function&lt;/td&gt;
                    &lt;td&gt;Hello, {{getName()}}!&lt;/td&gt;
             &lt;/tr&gt;
                &lt;tr&gt;
                 &lt;td&gt;ng-bind with getEnclosedName&lt;/td&gt;
                  &lt;td&gt;Hello, &lt;span ng-bind=&quot;getEnclosedName('b')&quot; /&gt;!&lt;/td&gt;
               &lt;/tr&gt;
                &lt;tr&gt;
                 &lt;td&gt;ng-bind-html-unsafe with getEnclosedName&lt;/td&gt;
                  &lt;td&gt;Hello, &lt;span ng-bind-html-unsafe=&quot;getEnclosedName('b')&quot; /&gt;!&lt;/td&gt;
               &lt;/tr&gt;
            &lt;/table&gt;

            &lt;h2&gt;Collection Binding&lt;/h2&gt;
            &lt;table class=&quot;table table-hover table-condensed&quot;&gt;
              &lt;tr&gt;
                 &lt;th&gt;Pos.&lt;/th&gt;
                  &lt;th&gt;ISO Code&lt;/th&gt;
                  &lt;th&gt;Country Name&lt;/th&gt;
              &lt;/tr&gt;
                &lt;tr ng-repeat=&quot;country in countries&quot;&gt;
                  &lt;td&gt;{{$index}}&lt;/td&gt;
                    &lt;td&gt;{{country.isoCode}}&lt;/td&gt;
                   &lt;td&gt;{{country.name}}&lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
     &lt;/form&gt;

 &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Sample 2: TypeScript Modules vs. AngularJS Modules</h2><p xmlns="http://www.w3.org/1999/xhtml">The second example is just a minor variation of the first one. This time you see a TypeScript modules as well as an AngularJS module.</p><h3 xmlns="http://www.w3.org/1999/xhtml">TypeScript Controller Code</h3>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;

interface IHelloScope extends ng.IScope {
    name: string;
}

module Hello {
    export class HelloCtrl {
        constructor($scope: IHelloScope) {
            $scope.name = &quot;World!&quot;;
        }
    }
}

angular.module(&quot;Hello&quot;, [])
    .controller(&quot;HelloCtrl&quot;, Hello.HelloCtrl);{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">HTML View</h3>{% highlight javascript %}&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot; /&gt;
   &lt;title&gt;Angular.js Samples Using TypeScript&lt;/title&gt;

    &lt;link href=&quot;../../../Content/bootstrap/bootstrap.css&quot; rel=&quot;stylesheet&quot;&gt;

 &lt;script src=&quot;../../../Scripts/angular.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;moduleWithController.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body ng-app=&quot;Hello&quot; ng-controller=&quot;HelloCtrl&quot;&gt;

&lt;h1&gt;Hello, {{name}}!&lt;/h1&gt;

&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Sample 3: AngularJS Scopes</h2><p xmlns="http://www.w3.org/1999/xhtml">I use the third sample to describe how AngularJS <strong>scopes</strong> work. Note that this sample was inspired by the book <a href="http://www.amazon.de/gp/product/1782161821/ref=as_li_ss_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=1782161821&amp;linkCode=as2&amp;tag=timecockpit-21">Mastering</a><a href="http://www.amazon.de/gp/product/1782161821/ref=as_li_ss_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=1782161821&amp;linkCode=as2&amp;tag=timecockpit-21" target="_blank">Web Application Development with</a><a href="http://www.amazon.de/gp/product/1782161821/ref=as_li_ss_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=1782161821&amp;linkCode=as2&amp;tag=timecockpit-21">AngularJS</a> from Pawel Kozlowski and Peter Darwin (BTW, a good book if you want to dig deeper into AngularJS). I have translated it into TypeScript.</p><h3 xmlns="http://www.w3.org/1999/xhtml">TypeScript Controller Code</h3>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;

interface ICountry {
    name: string;
    population: number;
}

interface IHierarchyScope extends ng.IScope {
    population: number;
    countries: ICountry[];
    worldsPercentage: (countryPopulation: number) =&gt; number;
}

var WorldCtrl = function ($scope: IHierarchyScope) {
    $scope.population = 7000;
    $scope.countries = [
        { name: &quot;France&quot;, population: 63.1 },
        { name: &quot;United Kingdom&quot;, population: 61.8 }
    ];
    $scope.worldsPercentage = function (countryPopulation) {
        return (countryPopulation / $scope.population) * 100;
    };
};{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">HTML View</h3>{% highlight javascript %}&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot; /&gt;
   &lt;title&gt;Angular.js Samples Using TypeScript&lt;/title&gt;

    &lt;link href=&quot;../../../Content/bootstrap/bootstrap.css&quot; rel=&quot;stylesheet&quot;&gt;

 &lt;script src=&quot;../../../Scripts/angular.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;hierarchyOfScopes.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body ng-app&gt;

 &lt;div ng-controller=&quot;WorldCtrl&quot;&gt;
        &lt;hr&gt;
     &lt;ul&gt;
         &lt;li ng-repeat=&quot;country in countries&quot;&gt;
              {{country.name}} has population of {{country.population | number:1}} millions,
             {{worldsPercentage(country.population) | number:1}} % of the World's population
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;hr&gt;
     World's population: {{population | number:1}} millions
 &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Sample 4: Dependency Injection</h2><p xmlns="http://www.w3.org/1999/xhtml">The fourth sample is a little bit more complex than the first three samples. I use it to describe AngularJS's dependency injection system and its connection to TypeScript's type system (especially interfaces). Note that this sample is again inspired by the book mentioned above. The following slide gives an overview about the sample (click to enlarge):</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:e0e09f2e-353c-40f1-9c46-3d37498f7091" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="250" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="250" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h3 xmlns="http://www.w3.org/1999/xhtml">Contract Type</h3><p xmlns="http://www.w3.org/1999/xhtml">At first we define a contract interface for an archive of notification messages:</p>{% highlight javascript %}module NotificationsModule {
    export interface INotificationsArchive {
        archive(notification: string);
        getArchived(): string[];
    }
}{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Notifications Archive Implementation</h3><p xmlns="http://www.w3.org/1999/xhtml">Here you see the implementation of the notifications archive. Note that it implements the interface shown above.</p>{% highlight javascript %}/// &lt;reference path=&quot;INotificationsArchive.ts&quot;/&gt;

module NotificationsModule {
    export class NotificationsArchive implements INotificationsArchive {
        private archivedNotifications: string[];

        constructor() {
            this.archivedNotifications = [];
        }

        archive(notification: string) {
            this.archivedNotifications.push(notification);
        }

        public getArchived(): string[]{
            return this.archivedNotifications;
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">For demonstration purposes I added a Jasmine unit test:</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/jasmine/jasmine.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular-mocks.d.ts&quot;/&gt;

describe(&quot;Notifications Archive Tests&quot;, function () {
    var notificationsArchive;
    beforeEach(module('notificationsArchive'));
    beforeEach(inject(function (_notificationsArchive_) {
        notificationsArchive = _notificationsArchive_;
    }));

    it(' should give access to the archived items', function () {
        var notification = { msg: 'Old message.' };
        notificationsArchive.archive(notification);
        expect(notificationsArchive.getArchived()).toContain(notification);
    });
});{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Notifications Service</h3><p xmlns="http://www.w3.org/1999/xhtml">Here you see the third component: The notification service. Note that it has <strong>no</strong> dependency on the archive implementation. It just uses the interface.</p>{% highlight javascript %}/// &lt;reference path=&quot;INotificationsArchive.ts&quot;/&gt;

module NotificationsModule {
    export class NotificationsService {
        private notifications: string[];

        public maxLen: number = 10;

        public static Factory(notificationsArchive: INotificationsArchive, MAX_LEN: number, greeting: string) {
            return new NotificationsService(notificationsArchive, MAX_LEN, greeting);
        }

        constructor(private notificationsArchive: INotificationsArchive, MAX_LEN: number, greeting: string) {
            this.notifications = [];
            this.maxLen = MAX_LEN;
        }

        public push(notification: string): void {
            var notificationToArchive: string;
            var newLen = this.notifications.unshift(notification);
            if (newLen &gt; this.maxLen) {
                notificationToArchive = this.notifications.pop();
                this.notificationsArchive.archive(notificationToArchive);
            }
        }

        public getCurrent(): string[] {
            return this.notifications;
        }
    }
}{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">TypeScript Controller Code</h3><p xmlns="http://www.w3.org/1999/xhtml">Finally here you see the controller using the notification service:</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;NotificationsArchive.ts&quot;/&gt;

module NotificationsModule {
    export interface INotificationsCtrlScope extends ng.IScope {
        notification: string;
        vm: NotificationsCtrl;
    }

    export class NotificationsCtrl {
        constructor(private $scope: INotificationsCtrlScope, private notificationService: NotificationsService) {
            $scope.vm = this;
        }

        private addNotification(): void {
            this.notificationService.push(this.$scope.notification);
            this.$scope.notification = &quot;&quot;;
        }

        private getNotifications(): string[] {
            return this.notificationService.getCurrent();
        }
    }
}{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Bringing it all together</h3><p xmlns="http://www.w3.org/1999/xhtml">The AngularJS dependency injection system brings all components together. It connects the notifications archive with the notifications service and the controller.</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;NotificationsArchive.ts&quot;/&gt;
/// &lt;reference path=&quot;NotificationsService.ts&quot;/&gt;
/// &lt;reference path=&quot;NotificationsCtrl.ts&quot;/&gt;

angular.module(&quot;notificationsApp&quot;, [])
    .value(&quot;greeting&quot;, &quot;Hello World&quot;)
    .constant(&quot;MAX_LEN&quot;, 10)
    .factory(&quot;notificationsArchive&quot;, () =&gt; new NotificationsModule.NotificationsArchive())
    .factory(&quot;notificationService&quot;, NotificationsModule.NotificationsService.Factory)
    .controller(&quot;NotificationsCtrl&quot;, NotificationsModule.NotificationsCtrl);{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">HTML View</h3><p xmlns="http://www.w3.org/1999/xhtml">Here is the view for the controller. Nothing special, just some controls to interact with the controller. The focus of this sample is not the view, its the TypeScript code shown above.</p>{% highlight javascript %}&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot; /&gt;
   &lt;title&gt;Angular.js Samples Using TypeScript&lt;/title&gt;

    &lt;link href=&quot;../../../Content/bootstrap/bootstrap.css&quot; rel=&quot;stylesheet&quot;&gt;

 &lt;script src=&quot;../../../Scripts/angular.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;NotificationsArchive.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;NotificationsService.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;NotificationsCtrl.js&quot;&gt;&lt;/script&gt;
 &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;
   
   &lt;style&gt;
   body {
         max-width: 500px;
      margin: 25px;
  }

     table {
        margin-top: 10px;
  }
 &lt;/style&gt;
&lt;/head&gt;

&lt;body ng-app=&quot;notificationsApp&quot; ng-controller=&quot;NotificationsCtrl&quot;&gt;
 &lt;div&gt;
        &lt;form&gt;
           &lt;textarea ng-model=&quot;notification&quot; cols=&quot;40&quot; rows=&quot;3&quot; class=&quot;span6&quot;&gt;&lt;/textarea&gt;&lt;br&gt;
           &lt;button class=&quot;btn btn-primary&quot; ng-click=&quot;vm.addNotification()&quot;&gt;Add&lt;/button&gt;
       &lt;/form&gt;
  &lt;/div&gt;
   &lt;table class=&quot;table table-striped table-bordered&quot;&gt;
     &lt;tr&gt;
         &lt;th&gt;Notifications&lt;/th&gt;
     &lt;/tr&gt;
        &lt;tr ng-repeat=&quot;notification in vm.getNotifications()&quot;&gt;
         &lt;td&gt;{{notification}}&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Sample 5: Accessing Backend Services</h2><p xmlns="http://www.w3.org/1999/xhtml">Web applications become really interesting when we start to access REST services in the backend. Therefore my 5th sample accesses a <a href="http://www.windowsazure.com/en-us/solutions/mobile/" target="_blank">Windows Azure Mobile Services</a> table. If you want to try my code, get an account for <a href="http://www.windowsazure.com/" target="_blank">Windows Azure</a> and create a table in mobile services:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Slide37.PNG?mw=650&amp;mh=650" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Accessing Azure Table Storage with AngularJS and TypeScript</h3><p xmlns="http://www.w3.org/1999/xhtml">First we need to write some code to access our REST service. It turns out that we can write a reusable class that could be used for any Azure Mobile Service. Note the use of TypeScript generics and AngularJS's promise API.</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;

module MobileServicesDataAccess {
    export interface ITableRow {
        id?: number;
    }

    export interface ITable&lt;T extends ITableRow&gt; {
        query: (page?: number) =&gt; ng.IHttpPromise&lt;IQueryResult&lt;T&gt;&gt;;
        insert: (item: T) =&gt; ng.IHttpPromise&lt;any&gt;;
        update: (item: T) =&gt; ng.IHttpPromise&lt;any&gt;;
        deleteItem: (item: T) =&gt; ng.IHttpPromise&lt;any&gt;;
        deleteItemById: (id: number) =&gt; ng.IHttpPromise&lt;any&gt;;
    }

    export interface IQueryResult&lt;T extends ITableRow&gt; {
        results: T[];
        count: number;
    }

    export class Table&lt;T extends ITableRow&gt; implements ITable&lt;T&gt; {
        constructor(private $http: ng.IHttpService, private serviceName: string, private tableName: string, private pageSize: number, private apiKey: string) {
            // Set public methods using lambdas for proper &quot;this&quot; handling
            this.query = (page?) =&gt; this.queryInternal(page);
            this.insert = (item) =&gt; this.insertInternal(item);
            this.update = (item) =&gt; this.updateInternal(item);
            this.deleteItem = (id) =&gt; this.deleteItemInternal(id);
            this.deleteItemById = (id) =&gt; this.deleteItemByIdInternal(id);

            // Build http header with mobile service application key
            this.header = {
                headers: {
                    &quot;X-ZUMO-APPLICATION&quot;: apiKey
                }
            };
        }

        public query: (page?: number) =&gt; ng.IHttpPromise&lt;IQueryResult&lt;T&gt;&gt;;
        public insert: (item: T) =&gt; ng.IHttpPromise&lt;any&gt;;
        public update: (item: T) =&gt; ng.IHttpPromise&lt;any&gt;;
        public deleteItem: (item: T) =&gt; ng.IHttpPromise&lt;any&gt;;
        public deleteItemById: (id: number) =&gt; ng.IHttpPromise&lt;any&gt;;

        private header: any;

        private queryInternal(page?: number): ng.IHttpPromise&lt;IQueryResult&lt;T&gt;&gt; {
            var uri = this.buildBaseUri() + &quot;?$inlinecount=allpages&amp;$orderby=id&quot;;
            if (page !== undefined) {
                // Add &quot;skip&quot; and &quot;top&quot; clause for paging
                uri += &quot;&amp;$top=&quot; + this.pageSize.toString();
                if (page &gt; 1) {
                    var skip = (page - 1) * this.pageSize;
                    uri += &quot;&amp;$skip=&quot; + skip.toString();
                }
            }

            return this.$http.get(uri, this.header);
        }

        private insertInternal(item: T): ng.IHttpPromise&lt;any&gt; {
            return this.$http.post(this.buildBaseUri(), item, this.header);
        }

        private updateInternal(item: T): ng.IHttpPromise&lt;any&gt; {
            var uri = this.buildBaseUri() + &quot;/&quot; + item.id.toString();
            return this.$http({ method: &quot;PATCH&quot;, url: uri, headers: this.header, data: item });
        }

        private deleteItemInternal(item: T): ng.IHttpPromise&lt;any&gt; {
            return this.deleteItemByIdInternal(item.id);
        }

        private deleteItemByIdInternal(id: number): ng.IHttpPromise&lt;any&gt; {
            var uri = this.buildBaseUri() + &quot;/&quot; + id.toString();
            return this.$http.delete(uri, this.header);
        }

        private buildBaseUri(): string {
            return &quot;https://&quot; + this.serviceName + &quot;.azure-mobile.net/tables/&quot; + this.tableName;
        }
    }
}{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Unit Test with HTTP Mocking</h3><p xmlns="http://www.w3.org/1999/xhtml">I use the sample to demonstrate how to automatically unit test a class that contains REST calls using AngularJS's HTTP mocking.</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/jasmine/jasmine.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular-mocks.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../samples/communication/httpService/MobileServicesTable.ts&quot;/&gt;

interface IDummyRow extends MobileServicesDataAccess.ITableRow {
}

describe(&quot;Mobile Services Table Test&quot;, function () {
    var $http: ng.IHttpService;
    var $httpBackend: ng.IHttpBackendService;
    var table: MobileServicesDataAccess.ITable&lt;IDummyRow&gt;;
    beforeEach(inject((_$http_, _$httpBackend_) =&gt; { 
        $http = _$http_; 
        $httpBackend = _$httpBackend_;
        table = new MobileServicesDataAccess.Table&lt;IDummyRow&gt;($http, &quot;dummyService&quot;, &quot;dummyTable&quot;, 10, &quot;dummyKey&quot;);
    }));
    var dummyResult: MobileServicesDataAccess.IQueryResult&lt;IDummyRow&gt; = { results: [{ id: 1 }, { id: 2 }], count: 2 };

    it(' should query Azure Mobile Service without paging', () =&gt; {
        $httpBackend.whenGET(&quot;https://dummyService.azure-mobile.net/tables/dummyTable?$inlinecount=allpages&amp;$orderby=id&quot;)
            .respond(dummyResult);

        var result: IDummyRow[];
        table.query().success(r =&gt; {
            result = r.results;
        });
        $httpBackend.flush();
        expect(result.length).toEqual(2);
    });

    it(' should query Azure Mobile Service with paging', () =&gt; {
        $httpBackend.whenGET(&quot;https://dummyService.azure-mobile.net/tables/dummyTable?$inlinecount=allpages&amp;$orderby=id&amp;$top=10&quot;)
            .respond(dummyResult);

        var result: IDummyRow[];
        table.query(1).success(r =&gt; {
            result = r.results;
        });
        $httpBackend.flush();
        expect(result.length).toEqual(2);

        $httpBackend.whenGET(&quot;https://dummyService.azure-mobile.net/tables/dummyTable?$inlinecount=allpages&amp;$orderby=id&amp;$top=10&amp;$skip=10&quot;)
            .respond(dummyResult);
        table.query(2);
        $httpBackend.flush();
    });

    it(' should issue a POST to Azure Mobile Service for insert', () =&gt; {
        $httpBackend.expectPOST(&quot;https://dummyService.azure-mobile.net/tables/dummyTable&quot;)
            .respond(201 /* Created */);

        var data: IDummyRow = {};
        table.insert(data);
        $httpBackend.flush();
    });

    it(' should issue a DELETE to Azure Mobile Service for delete', () =&gt; {
        $httpBackend.expectDELETE(&quot;https://dummyService.azure-mobile.net/tables/dummyTable/1&quot;)
            .respond(204 /* No Content */);

        table.deleteItemById(1);
        $httpBackend.flush();
    });

    it(' should issue a PATCH to Azure Mobile Service for delete', () =&gt; {
        $httpBackend.expect(&quot;PATCH&quot;, &quot;https://dummyService.azure-mobile.net/tables/dummyTable/1&quot;, '{&quot;id&quot;:1}')
            .respond(200 /* OK */);

        table.update({ id: 1 });
        $httpBackend.flush();
    });

    afterEach(() =&gt; {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">HTML View + TypeScript Controller</h3><p xmlns="http://www.w3.org/1999/xhtml">For this last sample I created a view that is a little bit more complete. It contains a grid, a server-side pager, and a form with date picker, numeric field, etc. Here is a screenshot showing the form (click to enlarge):</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:b64bc5b9-99a6-467f-95c1-2ae84c7a3f52" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="250" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="250" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Here is the TypeScript controller that uses the data access class shown above:</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;MobileServicesTable.ts&quot;/&gt;

module HttpServiceModule {
    export interface IEvent extends MobileServicesDataAccess.ITableRow {
        eventTitle: string;
        eventCategory: string;
        eventDescription: string;
        eventDate: Date;
        maximumParticipants: number;
    }

    export interface IServiceModuleScope extends ng.IScope {
        vm: HttpServiceController;

        events: IEvent[];
        currentEvent: IEvent;

        loading: boolean;

        gridOptions: any;
        paginationItemsPerPage: number;
        totalItems: number;
        currentPage: number;
    }

    export class HttpServiceController {
        constructor(private $scope: IServiceModuleScope, paginationItemsPerPage: number,
            private eventTable: MobileServicesDataAccess.ITable&lt;IEvent&gt;, private $q: ng.IQService) {
            $scope.vm = this;

            $scope.events = [];
            $scope.gridOptions = {
                data: 'events',
                totalServerItems: 'totalItems',
                showFooter: true,
                columnDefs: [
                    { field: &quot;eventCategory&quot;, displayName: &quot;Category&quot; },
                    { field: &quot;eventTitle&quot;, displayName: &quot;Title&quot; },
                    { field: &quot;eventDescription&quot;, displayName: &quot;Description&quot; },
                    { field: &quot;eventDate&quot;, displayName: &quot;Date&quot;, cellFilter: &quot;date&quot; },
                    { field: &quot;maximumParticipants&quot;, displayName: &quot;Participant Limit&quot;, cellFilter: &quot;number:0&quot; }
                ]
            };

            $scope.paginationItemsPerPage = paginationItemsPerPage;
            $scope.totalItems = 0;
            $scope.currentPage = 1;

            $scope.$watch(&quot;currentPage&quot;, (_, __) =&gt; this.getEvents());

            this.addEvent = () =&gt; this.addEventInternal();
            this.getEvents = () =&gt; this.getEventsInternal();
            this.deleteEvents = () =&gt; this.deleteEventsInternal();

            $scope.loading = false;
            $scope.currentEvent = {
                eventCategory: &quot;Concert&quot;, eventTitle: &quot;&quot;,
                eventDescription: &quot;&quot;, eventDate: new Date(), maximumParticipants: 1000
            };
            this.getEvents();
        }

        public addEvent: () =&gt; void;
        public getEvents: () =&gt; void;
        public deleteEvents: () =&gt; void;

        private getEventsInternal(): void {
            this.$scope.loading = true;
            var current = this;
            this.$scope.events = [];
            this.eventTable
                .query(this.$scope.currentPage)
                .success(result =&gt; {
                    current.$scope.events = result.results;
                    current.$scope.totalItems = result.count;
                    current.$scope.loading = false;
                });
        }

        private addEventInternal() {
            var current = this;
            this.$scope.loading = true;
            this.eventTable.insert(this.$scope.currentEvent).then(() =&gt; {
                current.getEvents();
                current.$scope.currentPage = 1;
            });
        }

        private deleteEventsInternal() {
            var current = this;
            this.$scope.loading = true;
            this.$scope.events = [];
            this.eventTable.query().success(result =&gt; {
                current.$q.all(result.results.map(current.eventTable.deleteItem))
                    .then(() =&gt; {
                        current.getEvents();
                        current.$scope.currentPage = 1;
                    });
            });
        }

        private generateEvents(numberOfEvents?: number): void {
            var current = this;
            this.$scope.loading = true;
            this.$scope.events = [];
            var events: IEvent[] = [];
            numberOfEvents = numberOfEvents || 25;

            for (var i = 0; i &lt; (numberOfEvents / 2); i++) {
                events.push({
                    eventCategory: &quot;Concert&quot;,
                    eventDescription: &quot;Artist &quot; + i.toString() + &quot; live in concert at central opera hall&quot;,
                    eventTitle: &quot;Artist &quot; + i.toString() + &quot; live in concert&quot;,
                    eventDate: new Date(2013, Math.random() * 100 % 12 + 1, Math.random() * 100 % 28 + 1),
                    maximumParticipants: i * 10000
                });
            }

            for (var i = (numberOfEvents / 2); i &lt; numberOfEvents; i++) {
                events.push({
                    eventCategory: &quot;Sport Event&quot;,
                    eventDescription: &quot;Soccer Championship &quot; + i.toString() + &quot;. Who will be the new champion?&quot;,
                    eventTitle: &quot;Soccer Campionship &quot; + i.toString(),
                    eventDate: new Date(2013, Math.random() * 100 % 12 + 1, Math.random() * 100 % 28 + 1),
                    maximumParticipants: i * 10000
                });
            }

            this.$q.all(events.map(event =&gt; this.eventTable.insert(event)))
                .then(() =&gt; {
                    current.getEvents();
                    current.$scope.currentPage = 1;
                });
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">It was important for me to also demonstrate how to unit-test a controller like this one. Note that the unit test does not really access Azure Mobile Services. It uses HTTP mocking again.</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/jasmine/jasmine.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular-mocks.d.ts&quot;/&gt;
/// &lt;reference path=&quot;MobileServicesTable.ts&quot;/&gt;
/// &lt;reference path=&quot;HttpServiceController.ts&quot;/&gt;

describe(&quot;Mobile Services Table Test&quot;, function () {
    var $http: ng.IHttpService;
    var $httpBackend: ng.IHttpBackendService;
    var $scope: HttpServiceModule.IServiceModuleScope;
    var $rootScope: ng.IRootScopeService;
    var $controller: ng.IControllerService;
    var ctrl: HttpServiceModule.HttpServiceController;

    var table: MobileServicesDataAccess.ITable&lt;IDummyRow&gt;;
    beforeEach(inject((_$http_, _$httpBackend_) =&gt; {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
        table = new MobileServicesDataAccess.Table&lt;HttpServiceModule.IEvent&gt;($http, &quot;dummyService&quot;, &quot;dummyTable&quot;, 10, &quot;dummyKey&quot;);
    }));
    beforeEach(inject(function (_$rootScope_: ng.IRootScopeService, _$controller_: ng.IControllerService) {
        $rootScope = _$rootScope_;
        $scope = &lt;HttpServiceModule.IServiceModuleScope&gt;_$rootScope_.$new();
        $controller = _$controller_;

        $httpBackend.whenGET(&quot;https://dummyService.azure-mobile.net/tables/dummyTable?$inlinecount=allpages&amp;$orderby=id&amp;$top=10&quot;)
            .respond({ results: [], count: 0 });
        ctrl = $controller(HttpServiceModule.HttpServiceController, { $scope: $scope, eventTable: table, paginationItemsPerPage: 10 });
    }));

    it(' should get events after creation', () =&gt; {
        $httpBackend.flush();
    });

    it(' should load second page if clicked on pager', () =&gt; {
        $httpBackend.whenGET(&quot;https://dummyService.azure-mobile.net/tables/dummyTable?$inlinecount=allpages&amp;$orderby=id&amp;$top=10&amp;$skip=10&quot;)
            .respond({ results: [], count: 0 });
        $scope.currentPage = 2;
        $scope.$apply();
        $httpBackend.flush();
    });

    it(' should delete all events correctly', () =&gt; {
        $httpBackend.whenGET(&quot;https://dummyService.azure-mobile.net/tables/dummyTable?$inlinecount=allpages&amp;$orderby=id&quot;)
            .respond({
                results: [{
                    id: 1, eventCategory: &quot;Concert&quot;, eventDescription: &quot;Dummy&quot;,
                    eventTitle: &quot;Dummy&quot;, eventDate: new Date(), maximumParticipants: 1
                }, {
                        id: 2, eventCategory: &quot;Concert&quot;, eventDescription: &quot;Dummy&quot;,
                        eventTitle: &quot;Dummy&quot;, eventDate: new Date(), maximumParticipants: 1
                    }], count: 2
            });
        $httpBackend.expectDELETE(&quot;https://dummyService.azure-mobile.net/tables/dummyTable/1&quot;)
            .respond(204);
        $httpBackend.expectDELETE(&quot;https://dummyService.azure-mobile.net/tables/dummyTable/2&quot;)
            .respond(204);
        $scope.vm.deleteEvents();
        $httpBackend.flush();
    });

    afterEach(() =&gt; {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Again AngularJS's dependency injection system brings everything together:</p>{% highlight javascript %}/// &lt;reference path=&quot;../../../tsDeclarations/angularjs/angular.d.ts&quot;/&gt;
/// &lt;reference path=&quot;MobileServicesTable.ts&quot;/&gt;
/// &lt;reference path=&quot;HttpServiceController.ts&quot;/&gt;

angular.module(&quot;HttpServiceModule&quot;, [&quot;ui.bootstrap&quot;, &quot;ngGrid&quot;])
    .constant(&quot;paginationItemsPerPage&quot;, 10)
    .factory(&quot;eventTable&quot;, ($http: ng.IHttpService, paginationItemsPerPage: number) =&gt;
        new MobileServicesDataAccess.Table($http, &quot;adcthings&quot;, &quot;events&quot;,
            paginationItemsPerPage, &quot;...yourApiKey...&quot;))
    .controller(&quot;HttpServiceController&quot;, HttpServiceModule.HttpServiceController);{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Last but not least here is the HTML code of the view:</p>{% highlight javascript %}&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;

    &lt;!--&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js&quot;&gt;&lt;/script&gt;--&gt;
    &lt;!--&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js&quot;&gt;&lt;/script&gt;--&gt;
 &lt;script src=&quot;../../../Scripts/jquery-1.9.1.js&quot;&gt;&lt;/script&gt;
 &lt;script src=&quot;../../../Scripts/angular.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;../../../Scripts/ng-grid-2.0.7.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;../../../Scripts/ui-bootstrap-tpls-0.6.0.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;MobileServicesTable.js&quot;&gt;&lt;/script&gt;
   &lt;script src=&quot;HttpServiceController.js&quot;&gt;&lt;/script&gt;
 &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;

  &lt;!-- &lt;link href=&quot;http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot; /&gt;--&gt;
  &lt;link href=&quot;../../../styles/bootstrap-2.3.1/bootstrap.css&quot; rel=&quot;stylesheet&quot; /&gt;
   &lt;link href=&quot;../../../Content/ng-grid.min.css&quot; rel=&quot;stylesheet&quot; /&gt;
    &lt;link href=&quot;app.css&quot; rel=&quot;stylesheet&quot; /&gt;
&lt;/head&gt;

&lt;body ng-app=&quot;HttpServiceModule&quot; ng-controller=&quot;HttpServiceController&quot;&gt;
    &lt;div class=&quot;well well-small&quot;&gt;
      &lt;input type=&quot;button&quot; class=&quot;btn&quot; ng-click=&quot;vm.generateEvents()&quot; value=&quot;Generate 25 random events&quot; /&gt;
     &lt;input type=&quot;button&quot; class=&quot;btn&quot; ng-click=&quot;vm.deleteEvents()&quot; value=&quot;Delete first 50 events&quot; /&gt;
  &lt;/div&gt;

  &lt;div class=&quot;well well-small&quot;&gt;
      &lt;div&gt;
            &lt;div class=&quot;gridStyle&quot; ng-grid=&quot;gridOptions&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
       &lt;div&gt;
            &lt;pagination total-items=&quot;totalItems&quot; items-per-page=&quot;paginationItemsPerPage&quot;
                page=&quot;currentPage&quot;&gt;&lt;/pagination&gt;
        &lt;/div&gt;
       &lt;div ng-class=&quot;{'div-visible': loading, 'div-hidden': !loading}&quot;&gt;
          &lt;alert type=&quot;success&quot;&gt;Loading...&lt;/alert&gt;
     &lt;/div&gt;
   &lt;/div&gt;

  &lt;div class=&quot;well well-small&quot;&gt;
      &lt;form name=&quot;eventForm&quot; class=&quot;form-horizontal&quot;&gt;
          &lt;div class=&quot;control-group&quot;&gt;
                &lt;label class=&quot;control-label&quot; for=&quot;eventCategory&quot;&gt;Category&lt;/label&gt;
              &lt;div class=&quot;controls&quot;&gt;
                 &lt;select id=&quot;eventCategory&quot; ng-model=&quot;currentEvent.eventCategory&quot;&gt;
                        &lt;option&gt;Concert&lt;/option&gt;
                       &lt;option&gt;Sports Event&lt;/option&gt;
                  &lt;/select&gt;
                &lt;/div&gt;
               &lt;label class=&quot;control-label&quot; for=&quot;eventTitle&quot;&gt;Title&lt;/label&gt;
                &lt;div class=&quot;controls&quot;&gt;
                 &lt;input type=&quot;text&quot; id=&quot;eventTitle&quot; ng-model=&quot;currentEvent.eventTitle&quot; /&gt;
               &lt;/div&gt;
               &lt;label class=&quot;control-label&quot; for=&quot;eventDescription&quot;&gt;Description&lt;/label&gt;
                &lt;div class=&quot;controls&quot;&gt;
                 &lt;textarea rows=&quot;3&quot; id=&quot;eventDescription&quot; ng-model=&quot;currentEvent.eventDescription&quot;&gt;&lt;/textarea&gt;
                &lt;/div&gt;
               &lt;label class=&quot;control-label&quot; for=&quot;eventDate&quot;&gt;Date&lt;/label&gt;
              &lt;div class=&quot;controls&quot; ng-model=&quot;currentEvent.eventDate&quot;&gt;
                 &lt;datepicker id=&quot;eventDate&quot;&gt;&lt;/datepicker&gt;
             &lt;/div&gt;
               &lt;label class=&quot;control-label&quot; for=&quot;maxParticipants&quot;&gt;Participant Limit&lt;/label&gt;
               &lt;div class=&quot;controls&quot;&gt;
                 &lt;input type=&quot;number&quot; name=&quot;maxParticipants&quot; id=&quot;maxParticipants&quot; ng-model=&quot;currentEvent.maximumParticipants&quot; /&gt;
              &lt;/div&gt;
               &lt;div class=&quot;controls&quot;&gt;
                 &lt;input type=&quot;button&quot; class=&quot;btn&quot; ng-click=&quot;vm.addEvent()&quot; value=&quot;Add Event&quot; /&gt;
               &lt;/div&gt;
           &lt;/div&gt;
       &lt;/form&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}