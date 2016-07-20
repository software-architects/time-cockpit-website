---
layout: blog
title: How Good Are Your Estimation Skills?
author: Rainer Stropek
bannerimage: 
permalink: /2013/07/19/How-Good-Are-Your-Estimation-Skills
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Effort estimation is hard, especially when managing agile projects. At the beginning of a project you do not exactly know what you have to build. Nevertheless, CFOs, project managers, customers, teams that you have to work with, and many other stakeholders want and need estimations. No matter if you are a project manager or a software developer, at some point you will be asked for expected costs, roadmaps, timelines, necessary resources, and so on. The bad news is that people are typically very weak estimators. The good news is that you can improve your effort estimation skills with training.</strong>
</p><p class="textaligncenter" xmlns="http://www.w3.org/1999/xhtml">
  <a href="#quiz">I don't want to read the introduction, take me directly to the quiz</a>
</p><h2 xmlns="http://www.w3.org/1999/xhtml">How Does the Effort Estimation Quiz Work?</h2><h3 xmlns="http://www.w3.org/1999/xhtml">The Goal: 90% Confidence</h3><p xmlns="http://www.w3.org/1999/xhtml">Before we go any further into estimation, I invite you to the following test. Below you find a list of 10 questions. They should not test your general knowledge. Instead, they should test your ability to estimate. Your job is to answer the questions using an interval. You should choose the interval so that you are 90% confident that the correct answer lies within. Some may argue that you could just enter such large numbers that it is absolutely sure that the answer is within the interval. Well, of course you could, but that wouldn’t be much fun. Try to set the intervals as narrow as possible but still in a way that makes you confident that 9 out of 10 values are within the specified ranges.</p><p xmlns="http://www.w3.org/1999/xhtml">Before you start, try this example:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <em>How wide [meters/ft] is an Airbus A380, the largest civil commercial aircraft ever built in series, from one wing tip to the other?</em>
</p><p xmlns="http://www.w3.org/1999/xhtml">What would be the interval you would answer (confidence 90%)?</p><h3 xmlns="http://www.w3.org/1999/xhtml">Fermi Method Can Help</h3><p xmlns="http://www.w3.org/1999/xhtml">Maybe some of you answer that they have absolutely no idea. Well, I bet that’s not 100% correct. Do you think that the plane is wider than let’s say 1km? Probably not. See, you have at least a rough idea. You could try to make your estimation better by using e.g. the <a href="http://en.wikipedia.org/wiki/Fermi_problem" target="_blank">Fermi method</a>. <a href="http://en.wikipedia.org/wiki/Enrico_Fermi" target="_blank">Enrico Fermi</a>, the Italian physicist who amongst other things invented the first nuclear reactor, was known for his ability to make good educated guesses with little or no actual data. The basic idea is to start from the few things that you might know or which you can at least reasonably estimate. Now you use basic math to get an estimation for the problem you have to solve.</p><p xmlns="http://www.w3.org/1999/xhtml">Let’s try to apply this idea to the question mentioned above:</p><div class="floatRight" xmlns="http://www.w3.org/1999/xhtml">
  <a href="http://flic.kr/p/fdwCwm" target="__blank">
    <img src="{{site.baseurl}}images/blog/2013/07/AirbusA380.jpg?mw=240" />
  </a>
  <br /> Image Source: <a href="http://flic.kr/p/fdwCwm" target="_blank">Lars Steffens, Flickr</a>, <br /> Creative Commons License</div><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Let’s start by concentrating on the body of the plane. How many people do you think sit together in a single row in economy class side by side? Did you ever fly in a large airplane? How many people did you count? I will tell you the answer for an Airbus A380: It’s 10.</li>
  <li>How wide is a single seat in an airplane? Those of you who did longer flights in economy class before know that the answer is “much too slim”. Seriously, what do you think? The answer is approx. 50cm (=20in).</li>
  <li>How many isles are in the body of the aircraft? All large long-distance airplanes have two. How wide are they? Probably similar to a seat’s width, that is 50cm (=20in).</li>
  <li>Now we can estimate the width of the aircraft’s body: <br /> 10 seat * 50cm + 2 isles * 50cm = 6m <br /> (10 seats * 20in + 2 isles * 20in = 240in = 20ft). <br /> In fact the max. cabin width of an Airbus A380 is 6.54m (=21ft 7in). We were quite close.</li>
  <li>Now we know that the plane cannot be smaller than 6m (=20ft) in width. You could now try to recall from memory the relation between cabin and wing size from airplanes you know. What do you think? 1:3, 1:4, or maybe even more? Maybe the picture on the right can help. Probably you have an idea for a lower bound and an upper bound. Do the math …</li>
</ol><p xmlns="http://www.w3.org/1999/xhtml">You see that from only a few things that we know or reasonably estimate we can come up with an estimation about the range. Now what is your estimation? I will tell you the answer: Incredible <a href="http://www.airbus.com/aircraftfamilies/passengeraircraft/a380family/specifications/" target="_blank">79.80m (=261ft 8in)</a>!</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">If you want to learn more about Fermi problems and other estimation and measurement methods, I encourage you to read the book <em><a href="http://www.amazon.de/gp/product/0470539399/ref=as_li_ss_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=0470539399&amp;linkCode=as2&amp;tag=timecockpit-21" target="_blank">How to Measure Anything: Finding the Value of "Intangibles" in Business</a></em> by D. W. Hubbard.</p><p xmlns="http://www.w3.org/1999/xhtml">Equipped with the Fermi tool you can now do the quiz. Have fun!</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="quiz"></a>Test Your Skills</h2><p xmlns="http://www.w3.org/1999/xhtml">Provide an interval which contains the correct answer. Set the interval so that you are 90% certain. <strong>Don't use sources like Wikipedia</strong> - the test is about estimation not about your ability to research on the web.</p><f:function name="Composite.AspNet.LoadUserControl" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="Path" value="~/Frontend/Custom/Web/Forms/Controls/EstimationQuiz.ascx" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Analysis</h2><p xmlns="http://www.w3.org/1999/xhtml">Did you reach the goal of 9 correct intervals? Chances are quite high that you didn’t. To demonstrate that you are in good company, the result chart shows the distribution of the number of correct answers for all people who participated in the quiz (blue bars). The gray area shows how the distribution should look like for a confidence of 90%.</p><p xmlns="http://www.w3.org/1999/xhtml">Numerous studies have shown that people tend to set the intervals much too narrow. I found studies mentioning actual confidence levels between 30% and 60% in software development projects when a 90% confidence level was required. Think about what that means for project management, estimated timelines, budgets, etc. - a nightmare for every project manager.</p><p xmlns="http://www.w3.org/1999/xhtml">Many of you might argue now that their results would have been different if the questions in our quiz above would have been from a domain they are expert in (e.g. questions regarding software development projects where you are a project manager or developer in). Unfortunately, this is not true. Over-confidence is a phenomenon that is independent of intelligence or expertise, even independent of professions and cultures. Are experienced project managers better in effort estimation? Not necessarily.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">“We should not expect that the level of over-confidence is reduced with more expertise” (<a href="http://simula.no/research/se/publications/SE.4.Joergensen.2004.c/simula_pdf_file" target="_blank">Jorgensen, 2002</a>).</p><p xmlns="http://www.w3.org/1999/xhtml">Why do so many people fail in quizzes as the one you just did? In his excellent book <a href="https://www.amazon.de/dp/8178531038/ref=as_li_ss_til?tag=timecockpit-21&amp;camp=2906&amp;creative=19474&amp;linkCode=as4&amp;creativeASIN=8178531038&amp;adid=05PVSKAA41PBMC6625YG&amp;" target="_blank">Software Estimation – Demystifying the Black Art</a> Steve McConnel tells about interviews he did with software developers and project managers. Many of them mention a kind of inner stress to set the interval as narrow as possible because of a kind of personal pride. Did you feel the same? <a href="http://en.wikipedia.org/wiki/Nassim_Nicholas_Taleb" target="_blank">Nassim Nicholas Taleb</a> calls this phenomenon <em>epistemic arrogance</em>, our arrogance concerning the limits of our knowledge. We simply underestimate how little we know - or in effort estimation how poor we are in predicting the future.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">If you are a project manager I encourage you to read N. N. Taleb's book <em><a href="http://www.amazon.de/gp/product/0141034599/ref=as_li_ss_tl?ie=UTF8&amp;camp=1638&amp;creative=19454&amp;creativeASIN=0141034599&amp;linkCode=as2&amp;tag=timecockpit-21" target="_blank">The Black Swan: The Impact of the Highly Improbable</a></em>. It really changed my entire thinking about estimation in business life in general.</p><h2 xmlns="http://www.w3.org/1999/xhtml">6 Tips to Improve Your Estimation Skills</h2><p xmlns="http://www.w3.org/1999/xhtml">So what can you do if you are e.g. in project management and you have to estimate? Do you have to simply accept that all your estimations will be entirely wrong? The good news is that you can do something in order to get more successful when estimating. Here are some of my personal ways to improve:</p><h3 xmlns="http://www.w3.org/1999/xhtml">1. Learn to Say "I Don't Know"</h3><p xmlns="http://www.w3.org/1999/xhtml">If you have to give an estimation for something that you really don't know, try to apply things like the Fermi method I introduced before. However, be aware of the fact that you have very limited data and try to resist the (internal or external) pressure to set estimation intervals to narrow. It is a well known fact that especially at the beginning of projects uncertainty is very high by nature (see also <a href="http://en.wikipedia.org/wiki/Cone_of_Uncertainty" target="_blank">Cone of Uncertainty</a> which has profound consequences on project management especially regarding effort estimation).</p><p xmlns="http://www.w3.org/1999/xhtml">However, you rarely need to say "I don't know". If you are forced to estimate, answer with a range where you set the interval wide enough. Maybe even such a wide range is helpful for your counterpart (e.g. to recognize that his budget would not even be enough to cover the lower bound of your estimation).</p><h3 xmlns="http://www.w3.org/1999/xhtml">2. Don't Do the Opposite And Always Say "I Don't Know"</h3><p xmlns="http://www.w3.org/1999/xhtml">Once you have learned that most people are over-confident, you might tend to setting your estimation intervals way too wide all of the time. This does not make sense, too. Even if your customer or manager really gives you the (over-estimated) time, your projects will not be successful (see also <a href="http://en.wikipedia.org/wiki/Parkinson's_law" target="_blank">Parkinson's Law</a> or the <a href="http://en.wikipedia.org/wiki/Student_syndrome" target="_blank">Student Syndrom</a>).</p><h3 xmlns="http://www.w3.org/1999/xhtml">3. Evaluate Your Estimation Accuracy</h3><p xmlns="http://www.w3.org/1999/xhtml">Training lets you get better - this is true for estimation, too. The <a href="http://simula.no/research/se/publications/SE.4.Joergensen.2004.c/simula_pdf_file" target="_blank">Jorgensen, 2002</a> study mentioned above suggests "that software companies provide estimation training opportunities through their database of completed projects. An estimation training session should include estimation of completed projects based on the information available at the point-of-estimation applying different estimation processes". This is one of the reasons why I recommend project <a href="http://www.timecockpit.com/blog/2013/06/25/Six-Reasons-for-Time-Tracking-in-Agile-Projects" target="_blank">time tracking even in agile projects</a>.</p><h3 xmlns="http://www.w3.org/1999/xhtml">4. Become a Domain Expert and Benefit From <a href="http://en.wikipedia.org/wiki/Economies_of_scope">Economy of Scope</a></h3><p xmlns="http://www.w3.org/1999/xhtml">In my article <a href="http://www.timecockpit.com/blog/2013/06/25/Six-Reasons-for-Time-Tracking-in-Agile-Projects" target="_blank">Six Reasons for Time Tracking in Agile Projects</a> I refer to <em>Stacey’s Agreement and Certainty Matrix</em>. Try to move the majority of projects away from "Anarchy" to "Complex" or even "Simple". This gives you more data to come up with better estimations (remember Fermi). However, try to withstand the tendency to over-estimate your ability to predict the future.</p><h3 xmlns="http://www.w3.org/1999/xhtml">5. Be Prepared</h3><p xmlns="http://www.w3.org/1999/xhtml">No matter how well your estimation model or domain expertise is - there will be situations in which your estimations are absolutely wrong. Prepare yourself for such situations. Here are some examples:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Don't sign a contract with penalties for late delivery that can ruin you. Penalties for late delivery are sometimes ok <em>if</em> there is an acceptable cap.</li>
  <li>Negotiate your project prices so that you benefit from being unexpectedly productive and you don't lose too much money if you run into unexpected problems.</li>
  <li>Generally avoid agreements where you can win a little and lose a lot.</li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">6. Try Things Out</h3><p xmlns="http://www.w3.org/1999/xhtml">You have an idea but you don't know (i.e. cannot estimate) whether it will work? Give it a try if a failure will not ruin you. Sometimes things go unexpectedly well and you become incidentally successful.</p>