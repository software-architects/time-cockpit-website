---
layout: blog
title: How TypeScript's async/await Makes Your Life Easier
teaser: Many of our customers use Node.js to extend time cockpit. They automate routine tasks, implement interfaces to other systems, or even write powerful web apps on top of time cockpit's OData web api. We have good news for you -  TypeScript's new async/await feature makes your life much easier.
author: Rainer Stropek
date: 2015-12-29
bannerimage: /content/images/blog/2015/12/time-cockpit-typescript-async-await.png
lang: en
permalink: /blog/2015/12/29/How-TypeScripts-asyncawait-Makes-Your-Life-Easier
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/12/time-cockpit-typescript-async-await-large.png" />
</p><p>Many of our customers use Node.js to extend time cockpit. They automate routine tasks, implement interfaces to other systems, or even write powerful web apps on top of <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">time cockpit's OData web api</a>. We have good news for you: TypeScript's new async/await feature makes your life much easier.
		</p><p class="showcase">You want to learn more about what you can do with Node.js and time cockpit? <a href="~/help-support/Search?q=node.js" target="_blank">Search for "Node.js"</a> on our website to find related articles.
		</p><h2>Introduction
		</h2><p>In modern web development platforms like <a href="https://nodejs.org/en/" target="_blank" rel="nofollow">Node.js</a> or <a href="https://docs.asp.net/en/latest/" target="_blank">ASP.NET 5</a>, all long-running functions are asynchronous. I use both platforms depending on the needs of the particular project. ASP.NET makes it very easy to deal with asynchronous methods as C# has been offering the <a href="https://msdn.microsoft.com/en-us/library/hh191443.aspx" target="_blank">async/await keywords</a> for years. Until recently, asynchronous code for Node.js was much harder to write even if you were using <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a> instead of JavaScript (what we do at time cockpit). The <a href="https://www.npmjs.com/package/async" target="_blank">async module</a> helps a lot but as somebody who comes from a C# background, I was deperately longing for <em>async/await</em>.
		</p><p>End of November 2015, Microsoft released the <a href="http://blogs.msdn.com/b/typescript/archive/2015/11/30/announcing-typescript-1-7.aspx" target="_blank">1.7 version of TypeScript</a>. It supports async/await for the ES6 target. You can use it e.g. for Node.js (you will need at least v4).
		</p><h2>Sample
		</h2><p>Here is a short samples that shows how you can use TypeScript's async/await in conjunction with time cockpit. It uses the 
			<a href="https://www.npmjs.com/package/needle" target="_blank">Needle module</a> for sending HTTP GET requests to time cockpit's web api. Take a look at the method 
			<em>getCustomersPerCountry</em>. It demonstrates the power of async/await. The method is written as it would be using just synchronous methods. In fact it uses multiple async methods but async/await is hiding all the complexity.
			{% highlight javascript %}/// <reference path="typings/tsd.d.ts" />
import * as needle from "needle";
import * as chalk from "chalk";

// Some constants for configuration
const tcBaseUrl = "https://apipreview.timecockpit.com/";
const tcUser = "demo@timecockpit.com";
const tcPassword = "...";

interface ICountry { APP_IsoCode: string; }
interface ICustomer { APP_CompanyName: string; }

// Note how we wrap the needle.get calls in the following two helper functions using a Promise
// (see also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

function getTokenAsync() {
    return new Promise<string>((resolve, _) =>
        needle.get(
            `${tcBaseUrl}token`,
            { username: tcUser, password: tcPassword, auth: "Basic" },
            (_, resp, __) => resolve(resp.body)));
}

function queryTimeCockpitAsync<T>(odataPath: string, token: string) {
    var headers = { accept: "application/json", Authorization: `Bearer ${token}` };
    return new Promise<T[]>((resolve, _) =>
        needle.get(
            `${tcBaseUrl}odata/${odataPath}`, 
            { headers: headers },
            (_, resp, __) => resolve(resp.body.value)));
}

// The next function demonstrates the power of async/await in TypeScript.
// As you can see, the function is written as it would be synchronous.
// The "await" keyword is caring for all the magic necessary for async processing.

async function getCustomersPerCountry() {
    var token = await getTokenAsync();
    var countries = await queryTimeCockpitAsync<ICountry>("APP_Country?$select=APP_IsoCode", token);
    for(var i = 0; i< countries.length; i++) {
        var country = countries[i];
        console.log(chalk.bgGreen.white(country.APP_IsoCode));
        var customers = await queryTimeCockpitAsync<ICustomer>(
            `APP_Customer?$filter=APP_Country/APP_IsoCode eq '${country.APP_IsoCode}'&$select=APP_CompanyName`,
            token);
        customers.forEach(c => console.log(c.APP_CompanyName));
    }
}

getCustomersPerCountry();{% endhighlight %}</p>