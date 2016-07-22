---
layout: blog
title: AngularJS Provider in TypeScript
teaser: AngularJS samples written in TypeScript are not that common on the internet. I get frequently asked how to write an AngularJS provider in TypeScript. Here is a "Hello World" sample.
author: Rainer Stropek
date: 2014-10-24
bannerimage: 
lang: en
permalink: /blog/2014/10/24/AngularJS-Provider-in-TypeScript
---

<p xmlns="http://www.w3.org/1999/xhtml">AngularJS samples written in TypeScript are not that common on the internet. I get frequently asked how to write an <a href="https://docs.angularjs.org/guide/providers" target="_blank">AngularJS provider</a> in TypeScript. Here is a "Hello World" sample.</p>{% highlight javascript %}// Interface describing the members that the provider's service offers&#xA;interface IGreetingService {&#xA;&#x9;getGreeting(): string;&#xA;}&#xA;&#xA;// The following class represents the provider&#xA;class GreetingService implements ng.IServiceProvider {&#xA;&#x9;private greeting = &quot;Hello World!&quot;;&#xA;&#xA;&#x9;// Configuration function&#xA;&#x9;public setGreeting(greeting: string) {&#xA;&#x9;&#x9;this.greeting = greeting;&#xA;&#x9;}&#xA;&#xA;&#x9;// Provider's factory function&#xA;&#x9;public $get() : IGreetingService {&#xA;&#x9;&#x9;return {&#xA;&#x9;&#x9;&#x9;getGreeting: () =&gt; { return this.greeting; }&#xA;&#x9;&#x9;};&#xA;&#x9;}&#xA;}&#xA;&#xA;// Define a controller depending our provider&#xA;class ControllerNeedingProvider {&#xA;&#x9;constructor($scope, GreetingService: IGreetingService) {&#xA;&#x9;&#x9;$scope.Greeting = GreetingService.getGreeting();&#xA;&#x9;}&#xA;}&#xA;&#xA;angular.module(&quot;ProviderApp&quot;, [])&#xA;&#x9;// Define provider&#xA;&#x9;.provider(&quot;GreetingService&quot;, GreetingService)&#xA;&#x9;// Configure provider (note the suffix &quot;Provider&quot; here)&#xA;&#x9;.config((GreetingServiceProvider: GreetingService) =&gt; {&#xA;&#x9;&#x9;GreetingServiceProvider.setGreeting(&quot;Hello Provider&quot;);&#xA;&#x9;})&#xA;&#x9;.controller(&quot;ControllerNeedingProvider&quot;, ControllerNeedingProvider);{% endhighlight %}