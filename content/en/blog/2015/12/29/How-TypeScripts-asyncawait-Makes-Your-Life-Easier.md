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

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2015/12/time-cockpit-typescript-async-await-large.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Many of our customers use Node.js to extend time cockpit. They automate routine tasks, implement interfaces to other systems, or even write powerful web apps on top of <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">time cockpit's OData web api</a>. We have good news for you: TypeScript's new async/await feature makes your life much easier.
		</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">You want to learn more about what you can do with Node.js and time cockpit? <a href="~/help-support/Search?q=node.js" target="_blank">Search for "Node.js"</a> on our website to find related articles.
		</p><h2 xmlns="http://www.w3.org/1999/xhtml">Introduction
		</h2><p xmlns="http://www.w3.org/1999/xhtml">In modern web development platforms like <a href="https://nodejs.org/en/" target="_blank" rel="nofollow">Node.js</a> or <a href="https://docs.asp.net/en/latest/" target="_blank">ASP.NET 5</a>, all long-running functions are asynchronous. I use both platforms depending on the needs of the particular project. ASP.NET makes it very easy to deal with asynchronous methods as C# has been offering the <a href="https://msdn.microsoft.com/en-us/library/hh191443.aspx" target="_blank">async/await keywords</a> for years. Until recently, asynchronous code for Node.js was much harder to write even if you were using <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a> instead of JavaScript (what we do at time cockpit). The <a href="https://www.npmjs.com/package/async" target="_blank">async module</a> helps a lot but as somebody who comes from a C# background, I was deperately longing for <em>async/await</em>.
		</p><p xmlns="http://www.w3.org/1999/xhtml">End of November 2015, Microsoft released the <a href="http://blogs.msdn.com/b/typescript/archive/2015/11/30/announcing-typescript-1-7.aspx" target="_blank">1.7 version of TypeScript</a>. It supports async/await for the ES6 target. You can use it e.g. for Node.js (you will need at least v4).
		</p><h2 xmlns="http://www.w3.org/1999/xhtml">Sample
		</h2><p xmlns="http://www.w3.org/1999/xhtml">Here is a short samples that shows how you can use TypeScript's async/await in conjunction with time cockpit. It uses the 
			<a href="https://www.npmjs.com/package/needle" target="_blank">Needle module</a> for sending HTTP GET requests to time cockpit's web api. Take a look at the method 
			<em>getCustomersPerCountry</em>. It demonstrates the power of async/await. The method is written as it would be using just synchronous methods. In fact it uses multiple async methods but async/await is hiding all the complexity.
			{% highlight javascript %}/// &lt;reference path=&quot;typings/tsd.d.ts&quot; /&gt;&#xD;
import * as needle from &quot;needle&quot;;&#xD;
import * as chalk from &quot;chalk&quot;;&#xD;
&#xD;
// Some constants for configuration&#xD;
const tcBaseUrl = &quot;https://apipreview.timecockpit.com/&quot;;&#xD;
const tcUser = &quot;demo@timecockpit.com&quot;;&#xD;
const tcPassword = &quot;...&quot;;&#xD;
&#xD;
interface ICountry { APP_IsoCode: string; }&#xD;
interface ICustomer { APP_CompanyName: string; }&#xD;
&#xD;
// Note how we wrap the needle.get calls in the following two helper functions using a Promise&#xD;
// (see also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)&#xD;
&#xD;
function getTokenAsync() {&#xD;
    return new Promise&lt;string&gt;((resolve, _) =&gt;&#xD;
        needle.get(&#xD;
            `${tcBaseUrl}token`,&#xD;
            { username: tcUser, password: tcPassword, auth: &quot;Basic&quot; },&#xD;
            (_, resp, __) =&gt; resolve(resp.body)));&#xD;
}&#xD;
&#xD;
function queryTimeCockpitAsync&lt;T&gt;(odataPath: string, token: string) {&#xD;
    var headers = { accept: &quot;application/json&quot;, Authorization: `Bearer ${token}` };&#xD;
    return new Promise&lt;T[]&gt;((resolve, _) =&gt;&#xD;
        needle.get(&#xD;
            `${tcBaseUrl}odata/${odataPath}`, &#xD;
            { headers: headers },&#xD;
            (_, resp, __) =&gt; resolve(resp.body.value)));&#xD;
}&#xD;
&#xD;
// The next function demonstrates the power of async/await in TypeScript.&#xD;
// As you can see, the function is written as it would be synchronous.&#xD;
// The &quot;await&quot; keyword is caring for all the magic necessary for async processing.&#xD;
&#xD;
async function getCustomersPerCountry() {&#xD;
    var token = await getTokenAsync();&#xD;
    var countries = await queryTimeCockpitAsync&lt;ICountry&gt;(&quot;APP_Country?$select=APP_IsoCode&quot;, token);&#xD;
    for(var i = 0; i&lt; countries.length; i++) {&#xD;
        var country = countries[i];&#xD;
        console.log(chalk.bgGreen.white(country.APP_IsoCode));&#xD;
        var customers = await queryTimeCockpitAsync&lt;ICustomer&gt;(&#xD;
            `APP_Customer?$filter=APP_Country/APP_IsoCode eq '${country.APP_IsoCode}'&amp;$select=APP_CompanyName`,&#xD;
            token);&#xD;
        customers.forEach(c =&gt; console.log(c.APP_CompanyName));&#xD;
    }&#xD;
}&#xD;
&#xD;
getCustomersPerCountry();{% endhighlight %}</p>