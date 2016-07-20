---
layout: blog
title: Monolithic Monsters, Platforms, and Microservices
author: Rainer Stropek
bannerimage: /images/blog/2016/05/broken-concrete-small.jpg
permalink: /2016/05/31/Monolithic-Monsters-Platforms-and-Microservices
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2016/05/broken-concrete.jpg" />
</p><p class="imageCaption" xmlns="http://www.w3.org/1999/xhtml">Image source: <a href="https://flic.kr/p/6Du7DL" target="_blank">https://flic.kr/p/6Du7DL</a>, <a href="https://creativecommons.org/licenses/by-nc/2.0/" target="_blank">Creative Commons</a> License</p><p xmlns="http://www.w3.org/1999/xhtml">In the last decade, requirements for business software have changed drastically. First, monolithic industry solutions had to become platforms to enable tailoring to customer-specific needs. Next, architectural changes were necessary to fully use the advantages of cloud computing. Today, software products have to become Microservices that can be combined by customers into larger systems. This article summarized this evolution of business software and describes how our strategy for time cockpit fits in.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Monolithic Monsters</h2><p xmlns="http://www.w3.org/1999/xhtml">Two decades ago, software products used to be large, feature-rich, monolithic systems. Specialized software vendors were competing by offering holistic solutions for certain branches, often referred to as “industry solutions”. Over time, the solutions that were widely used, became unmanageable monsters with an endless number of configuration options and extensibility points. As a customer, you always got the whole system with all its complexity even if you needed just a part of it.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Platforms Instead of Ready-Made Products</h2><p xmlns="http://www.w3.org/1999/xhtml">Once it became clear that adding more and more features and options to a product is a dead-end street, vendors of commercial off-the-shelf started to build platform-products. These platforms provide a basic set of ready-made functionality. Additionally, they had mature extensibility mechanisms like for instance</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>customizable data models,</li>
  <li>APIs (based on e.g. .NET, Java, COM) with logic specific for the domain for which the software has been built,</li>
  <li>possibility to inject customer-specific modules (logic and UI),</li>
  <li>scripting capabilities,</li>
  <li>workflow engines.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">The platform is used to tailor a product to the specific needs of a customer.</p><p xmlns="http://www.w3.org/1999/xhtml">Our own product time cockpit is an example for such a platform. It comes with a basic set of common features our customers need for project time tracking. For some small customers, the out-of-the-box feature set is sufficient. However, most customers have specific needs. They can use time cockpit’s extensibility features (e.g. data model extensions, validation rules, permissions, Python scripts, etc.) to add the necessary functions. Customers can decide whether they want to do the customizations themselves or hire us for support.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Par-baked Products</h2><p xmlns="http://www.w3.org/1999/xhtml">The big advantage of the platform-approach is that extensions made for one customer are not shipped to another customer with different needs. From a customer’s perspective, the software offers exactly the functionality that she needs. It is not overloaded with irrelevant features other customers’ might be interested in. Classical software-development concepts like object- and component-orientation replace a confusing multitude of options and settings.</p><p xmlns="http://www.w3.org/1999/xhtml">One could say that platforms are par-baked software products. They are done to a large degree but you have to finish baking and add ingredients according to your taste. Approval and confirmation processes are a good example in our own software time cockpit (see also article <a href="~/blog/2014/08/28/Learn-From-Best-in-Class-Confirmation-and-Approval-Processes" target="_blank">Learn From Best in Class: Confirmation and Approval Processes</a>). Every larger customer needs them for e.g. confirmation of time tracking data, email reminders, budget overrun warnings, violations of working time policies etc. These processes differ greatly from customer to customers. Time cockpit does not contain ready-made workflows for such use cases. However, it contains everything needed to quickly setup customer-specific processes or integrate with an existing business process management tool.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Multi-Tenancy as a Game Changer</h2><p xmlns="http://www.w3.org/1999/xhtml">Platform-products had to evolve to get ready for cloud computing and SaaS. The most important reason is that large-scale SaaS solutions are typically multi-tenant. That means that multiple tenants (=customers) are served by a single server or cluster. Nevertheless, tenants must be strictly separated. If you allow tenants to upload and run custom code (e.g. .NET modules, scripts), this code must be sandboxed so they it access other tenants’ data. Additionally, the server infrastructure has to be protected from overuse (e.g. endless loop in custom script consuming all CPU resources leading to an unusable system).</p><p xmlns="http://www.w3.org/1999/xhtml">Building secure and robust sandboxes is difficult and expensive. Only recently, leading cloud providers like Microsoft have started to incorporate features that support tenant separation on the server-side.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">A few months ago I wrote an article about building multi-tenant systems on Microsoft Azure. You can read the <a href="https://entwickler.de/online/cloud/multi-tenancy-azure-tipps-fuer-softwarearchitekten-194343.html" target="_blank">German version of the article</a> or use Google Translate to get an <a href="https://translate.google.at/translate?sl=de&amp;tl=en&amp;js=y&amp;prev=_t&amp;hl=de&amp;ie=UTF-8&amp;u=https%3A%2F%2Fentwickler.de%2Fonline%2Fcloud%2Fmulti-tenancy-azure-tipps-fuer-softwarearchitekten-194343.html&amp;edit-text=" target="_blank">auto-translated version in English</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit has been built with multi-tenancy in mind from the very first day. Our platform contains mechanisms for tenant separation on all levels (e.g. authentication, data access, APIs, etc.). However, the Microsoft Azure platform that time cockpit is using has made great progress since its launch. Over the years we could rethink some components and architectural designs to fully benefit from advances in Azure. An example is the transition to Azure SQL Elastic DB Pools which we described in the article <a href="~/blog/2016/01/31/Hello-Database-Pools" target="_blank">Hello Database Pools!</a></p><h2 xmlns="http://www.w3.org/1999/xhtml">SaaS Microservices</h2><p xmlns="http://www.w3.org/1999/xhtml">Nowadays, customers have learned to love SaaS. Instead of buying an expensive, monolithic industry solution, they use specialized services like Office 365, Salesforce, Dropbox, time cockpit, or Zendesk in the cloud. However, they don’t want information silos. They demand integration across system and vendor boundaries. They want to form a larger application by combining smaller, independent systems. The building blocks are often referred to as <a href="https://en.wikipedia.org/wiki/Microservices" target="_blank">Microservices</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">This trend challenges traditional software systems. Here are some examples why:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>The SaaS products are implemented on different platforms with different technologies. Therefore, support for cross-platform protocols and standards is required.</li>
  <li>Platform-independent standards for authentication and authorization system must be supported.</li>
  <li>The overall solution must not break if an update of an involved SaaS product happens. Careful versioning on a serve-level is needed.</li>
  <li>Finding the reason for a problem is harder in distributed systems.</li>
</ul><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">A few months ago I wrote an article about the importance of web APIs for SaaS solutions. You can read the <a href="https://entwickler.de/online/development/erfolgsfaktor-api-saas-produkte-238981.html" target="_blank">German version of the article</a> or use Google Translate to get an <a href="https://translate.google.at/translate?sl=de&amp;tl=en&amp;js=y&amp;prev=_t&amp;hl=de&amp;ie=UTF-8&amp;u=https%3A%2F%2Fentwickler.de%2Fonline%2Fdevelopment%2Ferfolgsfaktor-api-saas-produkte-238981.html&amp;edit-text=" target="_blank">auto-translated version in English</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Time Cockpit is a Microservice</h2><p xmlns="http://www.w3.org/1999/xhtml">We are constantly improving time cockpit’s ability to work as a Microservice. Here are some examples:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Customers can use the same <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">Web API</a> that we use in our own <a href="https://web.timecockpit.com/" target="_blank">HTML 5 client</a>.</li>
  <li>We use OpenID Connect for authentication.</li>
  <li>We integrate with popular SaaS offerings like Office 365 out-of-the-box and/or offer samples for custom integrations (e.g. with <a href="~/blog/2015/11/30/Integrating-Time-Cockpit-with-Power-BI" target="_blank">Power BI</a>).</li>
</ul><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">You can read more about one of our partners who built a powerful custom solution using time cockpit’s web API in our article <a href="~/blog/2015/05/31/Differentiate-with-Transparency" target="_blank">Differentiate with Transparency</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">This month, we have made an important step regarding extensibility in our HTML5 client. Time cockpit now supports adding custom modules written with web technologies like HTML5, CSS, JavaScript, TypeScript, AngularJS, etc. These extensions can be seamlessly integrated in time cockpit’s HTML5 client. They can not only use time cockpit’s Web API but also combine data from other sources. In our article <a href="~/blog/2016/05/31/Whats-New-in-Version-June-2016#extensions" target="_blank">What's New in Version June 2016</a> you can read about the use of this brand new extension method in a customer project we are currently implementing.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Would you like to build your own custom extension for time cockpit’s HTML5 client? Contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We have a private preview program and we would like to talk to you about your ideas.</p>