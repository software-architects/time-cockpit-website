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

<p xmlns="http://www.w3.org/1999/xhtml">AngularJS samples written in TypeScript are not that common on the internet. I get frequently asked how to write an <a href="https://docs.angularjs.org/guide/providers" target="_blank">AngularJS provider</a> in TypeScript. Here is a "Hello World" sample.</p>{% highlight javascript %}// Interface describing the members that the provider's service offers
interface IGreetingService {
    getGreeting(): string;
}

// The following class represents the provider
class GreetingService implements ng.IServiceProvider {
    private greeting = &quot;Hello World!&quot;;

    // Configuration function
    public setGreeting(greeting: string) {
        this.greeting = greeting;
    }

    // Provider's factory function
    public $get() : IGreetingService {
        return {
            getGreeting: () =&gt; { return this.greeting; }
        };
    }
}

// Define a controller depending our provider
class ControllerNeedingProvider {
    constructor($scope, GreetingService: IGreetingService) {
        $scope.Greeting = GreetingService.getGreeting();
    }
}

angular.module(&quot;ProviderApp&quot;, [])
    // Define provider
    .provider(&quot;GreetingService&quot;, GreetingService)
    // Configure provider (note the suffix &quot;Provider&quot; here)
    .config((GreetingServiceProvider: GreetingService) =&gt; {
        GreetingServiceProvider.setGreeting(&quot;Hello Provider&quot;);
    })
    .controller(&quot;ControllerNeedingProvider&quot;, ControllerNeedingProvider);{% endhighlight %}