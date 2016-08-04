---
layout: blog
title: Don't Let Agile Ruin Your Software's Architectural Design
excerpt: Architects call the central idea or concept of a building "parti".  You can think of parti as the big idea behind an architectural design. Without a parti, agile and iterative development can quickly ruin your software's architectural design. Read more about the concept of the parti and how it translates to software.
author: Rainer Stropek
date: 2015-06-30
bannerimage: /content/images/blog/2015/06/louvre-lens-parti-thumb.jpg
bannerimagesource: Image source -  <a href="https://flic.kr/p/hqFAs2" target="_blank">https://flic.kr/p/hqFAs2</a>, <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons</a> License
lang: en
tags: [Agile,Project Management,time cockpit]
ref: 
permalink: /blog/2015/06/30/Dont-Let-Agile-Ruin-Your-Softwares-Architectural-Design
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/06/louvre-lens-parti.jpg" style="width: 100%;" data-mce-style="width: 100%;" />
</p><p class="imageCaption">Image source: <a href="https://flic.kr/p/hqFAs2" target="_blank">https://flic.kr/p/hqFAs2</a>, <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons</a> License</p><h2>Parti, the Big Idea
<br /></h2><p>Architects call the central idea or concept of a building <em>parti pris</em> or just <em>parti</em>. This term comes from the French <em>prendre parti</em> meaning “to make a decision”. You can think of <em>parti</em> as the big idea behind an architectural design which is often “expressed by a diagram depicting the general floor plan organization […] and […] its experiential and aesthetic sensibility” (Quote from <em><a href="http://www.amazon.de/gp/product/0262062666/ref=as_li_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=0262062666&amp;linkCode=as2&amp;tag=timecockpit-21&amp;linkId=25YH4XHWVZKSEOC2">Frederick M.: 101 Things I Learned in Architecture School, MIT Press, 2007</a></em> – a recommendable book).</p><h3>Parti Protects Your Software Architecture in Agile Projects</h3><p>Particularly non-trivial agile projects require the existence of a parti, a big idea. I am not arguing for a waterfall-model with big design upfront. I am demanding an orientation point which helps to keep the architectural design of your software consistent while enhancing it in iterations using agile principles.</p><p>Examples for typical problems of agile teams without a parti are:</p><ul>
  <li>Software architecture is not documented and not manageable</li>
  <li>Software architecture is unsuitable for maintenance and extensions</li>
  <li>Time and money are wasted because detailed design and implemented is started too early</li>
  <li>Estimations (time and budget) are wrong because the project scope is not fully understood</li>
  <li>Technical features of programming language, frameworks, hardware, etc. determine the architectural design</li>
</ul><h3>Our Own Parti</h3><p>For our own software products <em><a href="http://www.timecockpit.com/">time cockpit</a></em> and <em>Cockpit Framework</em> (CoFX), we spent many months developing the initial software architecture parti when we started our company. We also documented and presented it in presentations, conference papers, magazine articles, videos, etc. Here are some examples of topics covered by our own parti:</p><ul>
  <li>Key requirements of our products’ users and how we generally want to solve them</li>
  <li>Building blocks for SaaS (e.g. multi-tenancy, availability, scalability, security)</li>
  <li>Customization and extensibility concepts</li>
  <li>Platform strategy (e.g. cloud-platform, runtime, programming languages, libraries)</li>
  <li>Business model and how it translates into our software architecture</li>
</ul><p class="showcase">We created the following video in which we describe some aspects of our parti. It was filmed three years ago. Technical details have changed but the core pricinples are still very much valid because we aligned our detail decisions to it.</p><div class="videoWrapper">
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/l3KacGF0nQQ?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div><h3>Do You Have a Parti for Your Software Architecture?</h3><p>Over the years, our parti has been acting as a guidepost for many day-to-day design decisions and it still is. In our consulting work, we regularly visit software development companies for workshops, trainings, and code reviews. Most of them don’t have a parti at all. Some have, but it only exists in the mind of a single person. Only very few can answer questions like this:</p><ul>
  <li>What are the foundational principles of the architectural design of your products?</li>
  <li>On a high-level, how do you think your software architecture will look like in three to five years?</li>
  <li>What are the core pillars in your architectural design that will most likely not change despite the rapidly changing environment in software development?</li>
</ul><p class="showcase">We are strong believers that a clear and documented parti is very important for the long-term success of software products. During the lifecycle of a software product, developers and architects have to make a huge number of decisions. The parti should be the golden thread running through all of them.<br /></p><h3>Pitfalls in Parti Development
<br /></h3><p>You don’t create a parti for a non-trivial software products in just a few hours. This process is exhausting and time-consuming because requirements might be unknown, technical complications appear, you forget things, etc. Plan enough time for developing the parti. Starting detailed design or implementation without it is a waste of time and money.</p><p>The number of patterns, tools, libraries, best practices, great ideas, etc. is sheer endless. Beware of cramming all of them into your parti. Aim for a clean, consistent, and simple (not naïve) parti that fits your project’s needs. Save all the other great ideas for other projects in the future.</p><p class="showcase">If you are struggling with the balance between complexity and simplicity, I recommend looking at John Maeda’s <em><a href="http://lawsofsimplicity.com/tag/laws/">Laws of Simplicity</a></em>. You might find some inspiration there.</p><h3>Maintain Your Parti
<br /></h3><p>When you managed to create and document/visualize your initial parti, your work isn’t done. Customers and stakeholders frequently change their mind. Probably you will try to stick to your parti as long as you can. You will add patches and small fixes to your architectural design. It is hard to recognize when a parti is no longer appropriate. In that case you have to abandon it, make major changes to it, or even create a new one.</p><p class="showcase">Poor software architects stick to their parti even though small extensions, patches, and fixes that happen naturally over time in agile projects destroyed the integrity of the whole.  </p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/06/parti-patches.png?mw=400" />
</p><p class="imageCaption">
  <a href="http://www.amazon.de/gp/product/0262062666/ref=as_li_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=0262062666&amp;linkCode=as2&amp;tag=timecockpit-21&amp;linkId=25YH4XHWVZKSEOC2">Frederick M.: 101 Things I Learned in Architecture School, MIT Press, 2007</a>, Page 26</p><h3>Role of the Software Architect
<br /></h3><p>It is the job of the <em><a href="https://en.wikipedia.org/wiki/Software_architect">software architect</a></em> in an agile project to recognize when the existing parti is no longer valid. Together with her team, she has to make larger changes or create an entirely new parti that incorporates all the knowledge gathered over time. The new parti will act as the guideline for future iterations.</p><h2>Summary</h2><ol>
  <li>Take the time to develop a parti, a big idea, for your software's architectural design.</li>
  <li>Visualize your parti so you can share it with stakeholders, colleagues, employees, etc.</li>
  <li>Align your detailed design decisions with your parti to keep the integrity of your product.</li>
  <li>Be brave and accept when it is time to abandon your parti and create a new one.</li>
  <li>As a software architect, you are responsible for developing and maintaining the parti in your agile team.</li>
</ol><h2>Learn More</h2><p>Dou you want to learn more about the concept of parti and how it relates to product design? The following video of a conference session of <a href="http://www.lukew.com/about/">Luke Wroblewski</a> (Product Director at Google, former Chief Design Architect (VP) at Yahoo!) could be of interest for you:</p><div class="videoWrapper">
  <iframe src="https://player.vimeo.com/video/4420806" width="800" height="600" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe>
</div>