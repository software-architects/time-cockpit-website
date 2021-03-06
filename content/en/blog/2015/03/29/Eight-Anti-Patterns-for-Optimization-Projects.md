---
layout: blog
title: Eight Anti-Patterns for Optimization Projects
teaser: Technical optimization projects are part of our daily business in software development. Additionally, with time cockpit, we are often involved in projects for optimizing team performance and productivity. In this blog article I would like to summarize my learnings about what differentiates successful optimization projects from failures.
author: Rainer Stropek
date: 2015-03-29
bannerimage: /content/images/blog/2015/03/optimizeThumb.jpg
lang: en
permalink: /blog/2015/03/29/Eight-Anti-Patterns-for-Optimization-Projects
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/03/optimize.jpg" style="width: 100%;" />
</p><p class="imageCaption">Image source: <a href="https://flic.kr/p/9TJPp3" target="_blank">https://flic.kr/p/9TJPp3</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">Creative Commons</a> License</p><p>Technical optimization projects are part of our daily business in software development. Additionally, with time cockpit we are often involved in projects for optimizing team performance and productivity. In this blog article I would like to summarize my learnings about what differentiates successful optimization projects from failures.</p><h2>Content</h2><ul>
  <li>
    <a href="#TechOrg">Technical vs. Organizational Optimization</a>
  </li>
  <li>
    <a href="#AntiPatterns">Optimization Anti-Patterns</a>
  </li>
  <!--<li style="list-style: none">
                <ol>
                    <li><a href="#Initial">Optimize During Initial Development</a></li>
                    <li><a href="#Measuring">Optimize Without Measuring</a></li>
                    <li><a href="#Environment">Non-representative Environments</a></li>
                    <li><a href="#Baseline">Optimize Without a Baseline</a></li>
                    <li><a href="#Goals">Optimize Without Concrete, Quantifiable Goals</a></li>
                    <li><a href="#Basics">Optimize Without Knowing the Basics</a></li>
                    <li><a href="#Everything">Optimize Everything at Once</a></li>
                    <li><a href="#UserExp">Confuse Performance with User Experience</a></li>
                </ol>
            </li>-->
  <li>
    <a href="#Blueprint">Blueprint for Successful Optimization Projects</a>
  </li>
</ul><h2>
  <a id="TechOrg" name="TechOrg" class="mce-item-anchor"></a>Technical vs. Organizational Optimization</h2><p>As a software company, we regularly optimize our products. We try to optimize resource usage (e.g. CPU, memory) so that existing functionality performs better or new functions become possible without the needs of a faster computer. As we offer consulting too, customers often hire us to take a look at their software products performancewise. Over the years we have developed a process and toolset for such projects.<br /></p><p>In the last few years, a side effect from selling and implementing time cockpit was that I have been doing lots of organizational work with companies. I helped introducing the agile approach and Scrum, I worked with customers who wanted to streamline their support processes, I tried to help development teams become more productive, etc.</p><p class="showcase">Over time, I recognized that the basic principles, best, and worst practices of optimization projects are quite similar in technical and organizational projects.</p><p>Let's start by looking at typical anti-patterns for optimization projects. Avoid them if you want your optimization project to succeed. Next, I will describe the foundations of our process for optimization.</p><h2>
  <a id="AntiPatterns" name="AntiPatterns" class="mce-item-anchor"></a>Eight Typical Optimization Anti-Patterns</h2><h3>
  <a id="Initial" name="Initial" class="mce-item-anchor"></a>1. Optimize During Initial Development</h3><p>In software development, people often try to write the most optimal code from the beginning. They write some fancy multi-threaded or async algorithms instead of the simple, sequential alternative. I have seen similar things for business processes, too. Instead of starting with a simple, straight-forward version of a business process, teams are coming up with complex, seemingly optimized versions of the process that covers every tiny exception they can think of.</p><p class="showcase">My advice: Implement the obvious process first. Performance problems are likely where you don't expect them so optimization should come afterwards.</p><p>Don't get me wrong. I am not arguing for naïve implementations. Of course you should add obvious optimizations immediately. However, everything else should be optimized later.</p><h3>
  <a id="Measuring" name="Measuring" class="mce-item-anchor"></a>2. Optimize Without Measuring</h3><p>Measuring is super important in optimization projects. In technical and in organizational projects, it is common that people assume inefficiencies at the wrong places. They simply follow their gut feelings or their <a href="http://www.forbes.com/sites/derosetichy/2013/04/15/what-happens-when-a-hippo-runs-your-company/" target="_blank">HiPPO</a>. Expensive changes to processes or programs puff out without positive effects or make the inefficiencies even worse.</p><p class="showcase">My advice: Quantify your process first (e.g. how often is something executed, how long do process steps really take). Based on that, identify the aspects where optimizations will have the greatest effect.</p><p>In software development, we use profilers (we use for example <a href="http://www.red-gate.com/products/dotnet-development/dotnet-developer-bundle/" target="_blank">redgate ANTS profiler</a> for .NET) for measuring our software. They tell us execution counts, executing times, waiting times, memory usage, etc. For business processes you will probably also need software products (e.g. workflow engines like <a href="http://www.prologics-it.com/en/overview.html" target="_blank">Prologics FireStart</a>), time tracking systems like <a href="http://www.timecockpit.com" target="_blank">time cockpit</a>, customer service software like <a href="https://www.zendesk.com/" target="_blank">Zendesk</a>, etc.) for gaining deeper understanding of inefficiencies. They can collect data about processes in databases. You can then define suitable performance KPIs and calculate them based on the collected data.</p><h3>
  <a id="Environment" name="Environment" class="mce-item-anchor"></a>3. Non-Representative Environments</h3><p>This one is related to the previous pattern. Many people measure in non-representative environments (e.g. workflow that is seldom executed in practice, data from a team that has a unique way of working, etc.). The results are expensive enhancement projects with little or no practical relevance.</p><p class="showcase">My advice: Use real-world data to identify frequent use cases and workflows. Measure and optimize them first to get the most for business value from your optimization projects.</p><p>This advice seems obvious but in reality I have seen many teams that do not know what the typical cases are from their customers' perspective. Like in the previous pattern: Replace gut feeling and HiPPO with data.</p><h3>
  <a id="Baseline" name="Baseline" class="mce-item-anchor"></a>4. Optimize Without a Baseline</h3><p>In practice, we often make things worse when trying to optimize something. We regularly underestimate the things we don't know and we overestimate our expertise. So how do you know if a certain change that you did to a business process or a software program was a good idea? You need to know the baseline from where you were coming from.</p><p class="showcase">My advice: Gather performance data from a customer's point of view before you change something. Repeat the measurement after the change. Value the change based on the quantifiable enhancements you made.</p><p>I want to emphasize the advice to measure from a customer's point of view. If your optimization made things better internally but customer experience got worse, you should rethink your changes. Sometimes it is hard to come up with a setting that allows you to get comparable measurements before and after process changes. Nevertheless, spend time to think of a setting that enables this comparison. It is an important feedback mechanism for performance optimization.</p><h3>
  <a id="Goals" name="Goals" class="mce-item-anchor"></a>5. Optimize Without Concrete, Quantifiable Goals</h3><p>Customers and stakeholders are often quite vague when complaining about inefficiencies or performance problems. Let's look at examples:</p><ul>
  <li>"Your software feels sluggish"
<br /></li>
  <li>"Your support process sucks, it takes forever until I get answers"
<br /></li>
  <li>"We don't like to work with your software, it is too slow"</li>
  <li>"We have to wait forever until we get fixes for bugs we report. Your bug fixing process has to become faster."</li>
</ul><p>These are very generic statements. Don't start a performance optimization project based just on such a complaint. You have to find out what specifically upsets the customers <em>and</em> quantify the inefficiency (e.g. how many people are affected, how severe is the problem, etc.).</p><p class="showcase">My advice: Don't start to optimize before you have not defined a quantifiable goal. Define a timebox for your optimization project. If you reach the goal within the timebox, stop. If you don't reach your goal until the end of the timebox, also stop and rethink.</p><p>A quantifiable goal is also important for knowing when to stop. Otherwise you spend too much time for optimization. Over-optimization has opportunity cost. Time and money might be better invested in other areas providing value to your customers.</p><h3>
  <a id="Basics" name="Basics" class="mce-item-anchor"></a>6. Optimize Without Knowing the Basics</h3><p>As a software engineer, I really have to know the platform I am working on otherwise I will not be able to perform a successful optimization project. In my opinion the same is true for business process optimization. If you do not know the domain, understand the basic parameters, know the typical gotchas, etc. you are not the right person for the optimization job.</p><p class="showcase">My advice: Make sure you have done your homework and you know the basics before you start an optimization project. If you don't, get (internal or external) help.</p><h3>
  <a id="Everything" name="Everything" class="mce-item-anchor"></a>7. Optimize Everything at Once</h3><p>First, remember the <a href="http://en.wikipedia.org/wiki/Pareto_principle" target="_blank">pareto principle</a>: 80% of the effects come from 20% of the causes. If you have never done an optimization project in a certain area before, it is likely that you will celebrate big success in a short time. However, the more you optimized, the harder and more expensive it will be to achieve impressive results.</p><p class="showcase">My advice: Make positive use of the pareto principle and catch the quick wins by optimizing at least a bit. Question the tendency to reach perfection in terms of performance. This would be very expensive.</p><p>Second, don't make too many changes at the same time before measuring again. If you change five things, how do you know if four worked great and one made the entire project seem to have not caused any effect?</p><p class="showcase">My advice: Make small changes, assess you change by measuring, introduce the next change.</p><h3>
  <a id="UserExp" name="UserExp" class="mce-item-anchor"></a>8. Confuse Performance with User Experience</h3><p>We often try to make things faster and faster while we forget about user experience. Sometimes customers are perfectly fine with waiting a reasonable amount of time <em>if</em> they know that their request is being worked on and they get feedback.</p><p class="showcase">My advice: Sometimes improving user experience can provide more short-term value than long-term optimization of a process.</p><h2>
  <a id="Blueprint" name="Blueprint" class="mce-item-anchor"></a>Blueprint for Successful Optimization Projects</h2><p>Now we have seen some anti-patterns to avoid. But how would a good optimization project look like? Optimization projects that we do follow an eight-step process:</p><ol>
  <li>
    <strong>Plan</strong> for it
<br /><p>Speaking in <a href="http://www.scrumguides.org/" target="_blank">Scrum</a> terminology: Put it on your project backlog. Get a (time) budget for it (<a href="http://en.wikipedia.org/wiki/Timeboxing">time-boxing</a>) by working out a business case for your optimization project. Don't forget to make yourself familiar with the necessary (software) tools.</p></li>
  <li>Prepare a <strong>defined, reproducible test scenario/environment</strong><br />
 In a technical optimization project this would contain things like hardware/software environment, test data, application scenarios, etc. In organizational optimization projects this would be the selection or definition of the process/scenario that you want to optimize.</li>
  <li>
    <p>Measure <strong>performance baseline
<br /></strong> Do this <em>before</em> you change anything. Examples: CPU%, memory footprint, throughput, response times, etc.</p>
  </li>
  <li>
    <p>Define quantifiable <strong>performance goals</strong><br />Don't forget to involve stakeholders (e.g. product owners, customers, partners, etc.).</p>
  </li>
  <li>
    <p>Start a repetitive <strong>cycle of optimizing, measuring, and analyzing
<br /></strong> Avoid the anti-patterns mentioned above. After each change, compare the measurement results to your baseline. If you decide to keep the change, the latest measurement results become the new benchmark.</p>
  </li>
  <li>
    <p>Ask for <strong>feedback</strong> in real-world environments<br />Your measurements might be correct but your changes have to pass the reality check (e.g. friendly customers, testing team, external testers, etc.).</p>
  </li>
  <li>
    <p>
      <strong>Document and present</strong> your work<br />Make sure you share your findings and changes with colleagues, partners, etc. so they can avoid inefficiencies right from the beginning. You might change internal checklists, system requirements, guidelines, etc.</p>
  </li>
  <li>
    <p>
      <strong>Put it into action</strong>
      <br />If you have only done changes in a more or less isolated test environment, make sure they make it into real life. Try to put your changes into production as soon as possible so customers benefit from optimization results.</p>
  </li>
</ol><h2>What is Your Opinion and Experience?</h2><p>I would love to hear your opinions and experiences. Please use the discussion area below so that everybody can participate in the discussion. Looking forward to hearing from you.</p>