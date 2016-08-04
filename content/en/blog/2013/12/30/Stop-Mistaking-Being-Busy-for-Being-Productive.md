---
layout: blog
title: Stop Mistaking Being Busy for Being Productive
teaser: At the current time of the year, many people are thinking about their New Year’s resolutions. Beside classics like “eat more vegetables” or “go to the gym more often”, you could add one for your job -  Stop thinking you are productive if you are just busy.
author: Rainer Stropek
date: 2013-12-30
bannerimage: 
lang: en
permalink: /blog/2013/12/30/Stop-Mistaking-Being-Busy-for-Being-Productive
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/HamsterWheel.jpg" />
</p><p>Image by <a href="http://www.flickr.com/photos/31199363@N02/" target="_blank">Martin de la Iglesia</a>, <a href="http://flic.kr/p/6Rkaen" target="_blank">view original photo on Flickr</a>, under <a href="http://creativecommons.org/licenses/by/2.0/deed.de" target="_blank">Creative Commons License</a></p><h2>Introduction</h2><p>At the current time of the year, many people are thinking about their New Year’s resolutions. Beside classics like “eat more vegetables” or “go to the gym more often”, you could add one for your job: <em>Stop thinking you are productive if you are just busy</em>.</p><p>Projects involving <em>time cockpit</em> or our <a href="http://en.wikipedia.org/wiki/Rapid_application_development" target="_blank">RAD</a> framework <em>CoFX</em> (<em>Cockpit Framework</em>) usually go hand in hand with consulting regarding project management, agile methods like Scrum, coaching about development processes, etc. Recently I recapped my consulting work of the previous year. In this blog article I would like to share three experiences that reveal that many teams mistake being busy for high productivity.</p><h2>Raise Productivity by Reducing Waste</h2><p>What is the core idea of agile development? It’s <em>reducing waste</em>. Do not produce things that nobody needs regardless whether it’s a function in your software, a piece of documentation nobody will read, a detailed specification for a feature that will never be implemented because it is not high enough in the priority list, etc.</p><p>In the last year I have seen numerous teams producing lots of “waste” although they said they were using agile methods like Scrum. Here are some examples:</p><ul>
  <li>Functional specifications with dozens of very detailed use cases which literally nobody in the development team reads.</li>
  <li>Product planning meeting for software product being 75% complete: First customer surveys revealed that the missing 25% are the most important ones for end customers preventing them to roll out the existing parts of the software.</li>
  <li>Large projects which were finished because of existing contracts although an internal reorganization had removed the need for the software in its originally planned form.</li>
  <li>Powerful features in a software release which nobody even discovers because the team did not find the time to build a proper UI, mention them in the release notes, or describe them in the documentation.</li>
  <li>Teams investing a lot of effort thinking about testable software architecture but finally having no time to really build any automated unit or integration tests.</li>
  <li>Over-engineered Visual Studio solutions with over 250(!) separate projects where nobody could describe the reasons for this level of granularity. Five projects would have been sufficient.</li>
  <li>Developers investing days optimizing software by manually adding stopwatches to code instead of spending some Euros on buying a profiling tool. The reason: Executives did not approve the investment*.</li>
</ul><p>*) By the way, if you are in this situation, stop blaming your executives. Improve your skills for putting together a business case making the ROI of the investment visible. In my experience, investment requests for software development tools are often rejected because nobody takes the time to clearly describe the business value to executives without development background.</p><p>I could add dozens of additional negative examples to this list. However, I have a positive example, too. In the last year, the company <a href="http://www.treamo.com/" target="_blank">Treamo</a> licensed our <em>Cockpit Framework</em> (CoFX; RAD library behind our flagship product <em>time cockpit</em>) and hired us to implement their <a href="http://www.emir-ate.com/en.html" target="_blank">EMIRate</a> SaaS solution. At an early stage of the project, Treamo’s CEO Martin Sadleder and I worked out the initial product backlog. We set up a contract for the implementation project. After some weeks of development, Martin called us and said he would like to stop development for a considerable part of the project. The reason was that the progress we have achieved to that point seemed enough for him to go out and do a series of demos in front of customers. He wanted to gather customer feedback and carefully target development efforts on maximum business value.</p><p>This decision was hard for Martin and us. Of course he would have liked to have the entire software working when stepping in front of first potential customers. The scope change was not convenient for us, too, as we had to turn our short-term resource plans upside down.</p><p>Some weeks after the change in the project, we incorporated the customer feedback into EMIRate. It turned out that the feature we had originally planned (programmable REST interface for importing trades) was not what customers really wanted. Nearly all of them asked for a different approach (sending trades in a specific format using FTP). Remember the <a href="http://agilemanifesto.org/" target="_blank">agile manifesto</a>? <em>Responding to change over following a plan</em>. In my opinion Martin’s step is a perfect example for that.</p><p>While writing this blog article, I asked Martin to summarize his reasons for this hard decision in the EMIRate project. Here is what he said:</p><ol>
  <li>We have to make sure that we spend time and money on features that really convince customers to sign up for the EMIRate service. Tight timelines for EU regulations regarding <a href="http://www.esma.europa.eu/page/European-Market-Infrastructure-Regulation-EMIR">EMIR</a> do not allow us to waste any time.</li>
  <li>By having an external development partner, development costs are very transparent to us. Every invoice reminds us that every feature costs a lot of money.</li>
  <li>Short decision paths are important for fast-moving projects. I did not have to go through a complex and long-running decision making process to move away from the original project plan.</li>
</ol><p class="showcase">What can other agile teams learn from this example?</p><ol>
  <li>Step in front of your customers as soon as possible and deliver frequently to get early and regular feedback.</li>
  <li>Make costs visible and avoid hidden costs.</li>
  <li>Empower your product owners to make quick decisions.</li>
</ol><h2>Automation Rules</h2><p>For our own projects, we spend quite some time automating build and quality assurance processes. <a href="http://msdn.microsoft.com/en-us/vstudio/ff637362.aspx" target="_blank">Microsoft Team Foundation Server</a> (TFS) and recently <a href="http://www.visualstudio.com/products/visual-studio-online-overview-vs" target="_blank">Visual Studio Online</a> are our tools of choice for that task. When introducing a new time tracking solution like <em>time cockpit</em>, we encourage teams to take the opportunity to rethink their end-to-end software development workflow. The following customer example demonstrates how this can help salvaging big productivity treasures.</p><p>In autumn 2013, I was invited by the IT department of a company which is not mainly in the software development business. Just like in many other firms, developers told me that they suffer from being flooded with feature requests. Although they complained about being stressed out, you could read between the lines that they were somehow proud of their hard work. Development sessions until late at night made them feel like a SWAT team being responsible for keeping things ticking over. At the same time they were frustrated because end users did not value their commitment enough. The team’s executives told me that they desperately needed a system to charge other departments for their requested features so that the amount of work the team handles becomes clearly visible.</p><p>I convinced them to do a review of the overall development process. After some hours of interviewing key developers, we found a few time wasters. Here are some examples:</p><ul>
  <li>There were no build servers. Developers built the deliverables on their own machines. This process was error-prone (e.g. no consistent version numbering, not clear which source code a program was built from, forgotten manual build steps needed to build a fully functional program version, etc.).</li>
  <li>Although their software mostly followed architectural patterns that ensure testable software (e.g. MVVM), they did not take the time to write automated tests. Manual tests and resolving avoidable bugs (e.g. <a href="http://en.wikipedia.org/wiki/Software_regression" target="_blank">regressions</a>) regularly eat up large portions of the team’s time.</li>
  <li>Deployment of their server-side applications was a fully manual and time-consuming process.</li>
</ul><p>My recommendation was to free resources by beginning to automate routine processes. This would not only allow them to spend more time on producing business value (i.e. being <em>productive</em>) but it would also reduce stress (i.e. being <em>busy</em>) by eliminating human errors to a certain extent.</p><p>In their situation, using <em>time cockpit</em> to just setup internal cost allocation would not have solved the underlying problem. They would have made it transparent how <em>busy</em> they were. They responded that they do not have free resources to spend on topics like build servers, automated tests, continuous deployment, etc. I encouraged them to use time tracking to gather data about how much time they waste for tasks like the ones mentioned above. I proposed using this data to setup a business case that would convince top-level executives to let them invest time and money in automatization.</p><p class="showcase">In agile development there is the famous saying: <em>If something hurts, do it more often.</em> Doing it more often will force you to automate tasks. At the end you will become less busy but more productive.</p><h2>Choose Productivity KPIs Wisely</h2><p>When doing <em>time cockpit</em> implementation projects, we often have to deal with KPIs. For previous newsletters I have <a href="http://www.timecockpit.com/blog/2013/09/30/How-Healthy-is-Your-Business-Part-2" target="_blank">already covered this topic</a> in general. In 2013 I worked with a customer emphasizing KPIs about productivity. <em>Productivity Ratio</em> was one of the leading KPIs that was reported to executives monthly. There even was a team-wide target for this KPI. Reaching it was considered very important.</p><p>Implementing the KPI in <em>time cockpit</em> was not very difficult. We just customized the data model a bit and added a flag on project- or task-level to distinguish productive time (e.g. developing software, writing documentation, etc.) from non-productive time (e.g. administrative work, organizing meetings, answering emails, etc.). However, I was curious about what was behind this magic KPI. The first thing I discovered was that it was not clearly defined what <em>productive time</em> meant. Is answering a support email productive time for a software developer? What about a Scrum master’s time needed to organize a sprint meeting?</p><p>The second thing I noted is that the team forgot the original definition of productivity to a certain extent: <em>Productivity is the ratio of output to inputs</em> (<a href="http://en.wikipedia.org/wiki/Productivity" target="_blank">Wikipedia</a>). According to the team’s definition of <em>productive time</em>, a developer busy implementing a feature which is not on the top of the priority list (aka <a href="http://en.wikipedia.org/wiki/Feature_creep" target="_blank">feature</a> or <a href="http://en.wikipedia.org/wiki/Scope_creep" target="_blank">scope creep</a>) is considered as being productive. On the other hand, a long meeting in which the team controversially discusses the need of a certain feature is counted as non-productive time.</p><p class="showcase">In my opinion, time tracking can help you measuring the input-side of productivity. You will need different mechanisms to track the output.</p><p>Here are some examples:</p><ul>
  <li>In a small team selling software to external customers, your revenue could be the ultimate output measurement.</li>
  <li>In larger teams, revenue might not be appropriate. The lag between development and monetary feedback might be too long. Failure on the market might have many different reasons (e.g. poor marketing/sales). You could use satisfaction surveys for measuring output performance.</li>
  <li>If quality is on the top of your mind, you could use quality KPIs like number of bugs, support time, etc.</li>
</ul><p>In our experience, it is very hard to define a single <em>Productivity Ratio</em> KPI. We recommend setting up a balanced set of KPIs connected closely to a team’s strategy (<a href="http://www.timecockpit.com/blog/2013/09/30/How-Healthy-is-Your-Business-Part-1" target="_blank">read more</a>). Project time tracking will be an important data source in such a KPI system, but definitively not the only one.</p>