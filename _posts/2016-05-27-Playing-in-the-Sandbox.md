---
layout: blog
title: Playing in the Sandbox
excerpt: Do you have customized time cockpit or plan to customize it? If yes, you should continue reading, because in this article we show you how you can get your own, private time cockpit test system where you can play around with things without influencing your time cockpit production environment.
author: Alexander Huber
date: 2016-05-27
bannerimage: /content/images/blog/2016/05/sandbox-small.jpg
bannerimagesource: 
lang: en
tags: [time cockpit]
permalink: /blog/2016/05/27/Playing-in-the-Sandbox
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2016/05/sandbox.jpg" />
</p><p>Do you have customized time cockpit or plan to customize it? If yes, you should continue reading, because in this article we show you how you can get your own, private time cockpit test system where you can play around with things without influencing your time cockpit production environment.
		</p><h2>Why Do You Need a Sandbox? <br /></h2><p>A time cockpit test system (we call it a <em>sandbox</em>) lets you test and play with your customizations <span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">before</span> you transfer them to your production time cockpit. In the following we describe some use cases where a sandbox would mitigate the risk of harming your time cockpit production system:
		</p><ul>
  <li>Imagine that you implement your own data import from an upstream system and you want to test various data transformations during the import. You do not want to somehow affect your data in the production system, because your employees rely on the data.
			</li>
  <li>If you have been running time cockpit for some time and want to introduce a permission system it is an absolute must to configure and test the permissions system in a sandbox before deploying it to the production time cockpit. Chances are that you do not get it right the first time and thus hinder your employees to track their time.
			</li>
  <li>Sometimes you want to try something to evaluate different approaches. At the beginning, you might not know how your customizations will look like in the end. In a sandbox you can do what a sandbox is intended for: Build things, crush them, and start over again. If you are happy with the solution in the sandbox, you can migrate only the things that solves your problem and that have proved useful. Your production system does not get cluttered with unnecessary customizations.
			</li>
</ul><p class="showcase">A sandbox is a snapshot of your production time cockpit environment. In a sandbox you can try out your customizations before deploying them to the actual production system. It safes you from negatively influencing your production time cockpit during the development of your customizations.
		</p><h2>What Is a Sandbox?
		</h2><p>Wikipedia defines a sandbox as the following:<br /></p><p class="showcase">"In <a title="Computer security" href="https://en.wikipedia.org/wiki/Computer_security">computer security</a>, a <strong>sandbox</strong> is a security mechanism for separating running programs. It is often used to execute untested code, or untrusted programs from unverified third parties, suppliers, untrusted users and untrusted websites..."
		</p><p>Basically, this is also what a time cockpit sandbox is. It lets you run your untested customizations in a separate environment. When we create a sandbox for a customer, we create <strong>a snapshot of the customer's time cockpit database</strong>. Copying the database is sufficient, because time cockpit facilitates a datamodel/metadata-driven approach. The formal description and implementation of all your customizations resides in the time cockpit database. No matter if you change a form/list, create a new entity or implement a time cockpit action, everything is stored in your isolated database.
		</p><h2>Can I Restrict Access to the Sandbox?
		</h2><p>Yes you can. You can decide which employees are allowed to access the sandbox.
		</p><h2>What Does a Sandbox Cost?
		</h2><p>For creating a new sandbox, we currently charge 250€ as a flat fee. It does not matter if you allow just one user to access the sandbox, or your whole company. If your database is hosted in our Azure environment (this is the case for most customers), this is it. Your sandbox will not incur additional monthly costs. 
		</p><p>If you are one of our larger customers, you most likely host your database in your own Azure subscription. If so, the snapshot of the database incurs the same monthly costs as your time cockpit production database by default. However, the nice thing is that you can independently scale the database of your production and sandbox time cockpit. For your production database you can use e.g. the S2 pricing level which costs about 60€/month. For your sandbox database you can select the Basic pricing level which costs about 4€/month. That is, if you are not actively using your sandbox at the moment you can scale down. If you are about to develop new customizations you can scale up your sandbox for the time of development. You can read more about SQL Azure pricing <a href="https://azure.microsoft.com/en-us/pricing/details/sql-database/" target="_blank">here</a>.
		</p><p class="showcase">We create a new time cockpit sandbox for a flat fee of <strong>250 Euros</strong>. If the database of your production time cockpit is in your own Azure subscription you need to pay for the additional database instance. If your production time cockpit is hosted in our Azure subscription, no additional monthly costs are incurred.
		</p><h2>How to Deploy Customizations?
		</h2><p>If you are just customizing small things in the time cockpit UI or implement Web Jobs for data import you will be fine transferring the changes from the sandbox to your production time cockpit manually. However, if your customizations are more elaborate you should choose a different approach, namely <a href="https://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripting</a>. This is an advanced topic and will be covered in more detail in future articles. We will only give a short overview here:
		</p><p>When we customize time cockpit for our customers we <span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">do not</span> extend time cockpit via the administration console in the full client. We script all the changes that we make to time cockpit in <a href="http://ironpython.net/" target="_blank">Python</a>. Agreed, scripting is not as fast as doing it via the UI, but it has various significant advantages:
		</p><ul>
  <li>Changes made to time cockpit are in text form. They can be versioned and checked in into a source control system (for us this is <a href="https://www.visualstudio.com/en-us/products/what-is-visual-studio-online-vs.aspx" target="_blank">Visual Studio Team Services</a>).
			</li>
  <li>More than one person can work on the customizations.
			</li>
  <li>Changes made to time cockpit are traceable. <br /></li>
  <li>Changes can be easily transferred from the sandbox to the production system. You could even transfer the customizations from one customer to another.
			</li>
</ul><p>If you are interested in scripting your changes please drop us a mail at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We can go into more details and provide various helper scripts, guidelines and best practices that make scripting more convenient for you.
		</p><h2>What If I Already Have a Sandbox?
		</h2><p>You can only have one sandbox at a time. If you decide to let us create a new one for you, the database of the old sandbox is deleted. All your customizations in the sandbox that have not been transferred to the production time cockpit will be lost!
		</p><h2>Should I Renew My Sandbox?
		</h2><p>It depends on you, but when we are developing extensions for our customers we create new sandboxes. The big advantage is that all the data is fresh in the sandbox, because it is a recent snapshot of the production environment.
		</p><h2>How Do I Get My Sandbox?
		</h2><p>At the moment just drop us a short mail via <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. Please do not forget to provide us with a list of users that should be allowed to access the sandbox.
		</p><h2>Restrictions
		</h2><ul>
  <li>At the moment signals will not be snapshot. They will not be available in the sandbox. However, they do not play a role when you are customizing time cockpit, because time cockpit does not provide any extensibility mechanisms there. <br /></li>
  <li>You can only have one sandbox at a given point in time.
			</li>
</ul><h2>Next Steps <br /></h2><p>Since we are always striving for automation and self-service, the ultimate goal in terms of sandboxes will be that in the future you will be able to create and manage your own sandboxes in the time cockpit self-service portal.
		</p>