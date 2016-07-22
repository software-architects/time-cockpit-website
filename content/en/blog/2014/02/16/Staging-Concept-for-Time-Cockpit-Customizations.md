---
layout: blog
title: Staging Concept for Time Cockpit Customizations
teaser: One of the unique possibilities of time cockpit is its extensibility. You can adapt the data model, lists, forms, export and import formats, reports, etc. to your needs. A question that we often get is how to test customizations before putting them into production. In this blog post I would like to show you some options you have.
author: Rainer Stropek
date: 2014-02-16
bannerimage: 
lang: en
permalink: /blog/2014/02/16/Staging-Concept-for-Time-Cockpit-Customizations
---

<p xmlns="http://www.w3.org/1999/xhtml">One of the unique possibilities of time cockpit is its extensibility. You can adapt the data model, lists, forms, export and import formats, reports, etc. to you needs. A question that we often get is how to test customizations before putting them into production. In this blog post I would like to show you some options you have.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Categories of Extensions and Customizations</h2><p xmlns="http://www.w3.org/1999/xhtml">You can extend and customize time cockpit on various levels. The deeper you want to change time cockpit's default behavior, the more technical skills you need have. However, even if you have no programming skills at all, you can still adapt time cockpit to a large extent. Let's examine the different customization options.<br /></p><h3 xmlns="http://www.w3.org/1999/xhtml">Customizing Time Sheet Calendar Entries</h3><p xmlns="http://www.w3.org/1999/xhtml">Customizing the appearance of time sheet records in time cockpit's graphical calendar can be done without any programming skills. The tool to use for this purpose are <a href="http://help.timecockpit.com/?topic=html/95b1ce59-c4ec-461a-ba9b-cb978295c3de.htm" title="Read more about Formatting Profiles in time cockpit's online help" target="_blank">Formatting Profiles</a>. Typically formatting profiles are defined by time cockpit power users (e.g. backoffice team, the team's project manager) directly in the production system. With time cockpit's scripting capabilities you could theoretically prepare formatting profiles in a development environment and move it to production in a second step. However, we have not heard from users who want to do that.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Customizing Time Cockpit's Data Model</h3><p xmlns="http://www.w3.org/1999/xhtml">If you want to customize time cockpit's data model, you still don't need to write a program. You can use time cockpit's <a href="http://help.timecockpit.com/?topic=html/c64adad3-3ddb-49a9-b7f8-c9eff1a984ac.htm" target="_blank">administration module</a> to interactively add e.g. tables, columns, relations, valiation rules, etc.</p><p xmlns="http://www.w3.org/1999/xhtml">Some of our customers make heavy use of this feature. They extend time cockpit with lots of additional features important for their business. At the beginning of a project, changing time cockpit's data model interactively is not a problem. However, when you have many people working with and depending on the system, you cannot risk breaking it by applying further changes. You need a way to test your customizations first. For this purpose time cockpit offers its scripting capabilities.</p><p xmlns="http://www.w3.org/1999/xhtml">All configuration changes that you can make using time cockpit's UI can be made through a script, too. In fact there are some customizations which are only available via scripting (e.g. binary and file properties) - but this is not in the scope of this article. Time cockpit's online help contains a chapter with some <a href="http://help.timecockpit.com/?topic=html/07396c38-8cb8-45da-a303-549bdf323fe9.htm" target="_blank">sample scripts for model manipulation</a>. Additionally you find the entire <a href="http://help.timecockpit.com/?topic=html/69ecef57-4efe-b664-739f-98b94f6e1894.htm" target="_blank">SDK documented there</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">If you are not perfectly familiar with writing Python scripts and reading SDK documentation, you can even generate scripts from changes you made interactively. Just right-click on the item (e.g. entity, list, form, etc.) and select <em>View Script</em>. Time cockpit will generate a script for creating the selected item for you.<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/02/ViewScript.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">
  <span style="color: rgb(37, 160, 218); font-size: 15px; line-height: 15px;">Customizing Lists and Forms</span>
  <br />
</p><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit lists and forms actions are defined using an XML-based domain specific language. You can read more about it in the time cockpit online help:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="http://help.timecockpit.com/?topic=html/b24c40b5-05ce-4d71-8e62-751382eabd0e.htm" target="_blank">Customizing Lists</a>
  </li>
  <li>
    <a href="http://help.timecockpit.com/?topic=html/e50f3f06-9cfd-4dc2-bdeb-c56039045465.htm" target="_blank">Customizing Forms</a>
  </li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">I contrast to entities, you cannot add e.g. columns or fields directly to the lists and forms that we ship. The reason for this is time cockpit's update logic. Whenever we change or add something to the lists and forms we ship, we replace the entire definition in your subscription during update.</p><p xmlns="http://www.w3.org/1999/xhtml">If you want to change lists and forms, you have to make your own copy of it and change this copy. Again you can use time cockpit's administration module to interactively design lists and forms and create a script for moving the change from <em>test</em> to <em>prod</em> later (see descriptions above).</p><p xmlns="http://www.w3.org/1999/xhtml">Once you have successfully created a new list or a new form, you have to make it available to your users. You have multiple options for this:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>If you created an entirely new list, you might want to add it to time cockpit's menu. Use the <em>Modules</em> section to create a new link to your list:
<br /><img src="{{site.baseurl}}/content/images/blog/2014/02/Modules.png" /><br /></li>
  <li>If you want to replace an existing list, you can also use the <em>Modules</em> section mentioned above. However, if your list should become the default list for an entity, you can replace our default list with your implementation in the entity definition:
<br /><img src="{{site.baseurl}}/content/images/blog/2014/02/DefaultList.png" /><br /></li>
  <li>If you want to change the form for an entity, you can also replace our default form with your form in the entity definition (see previous item).</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">
  <span style="color: rgb(37, 160, 218); font-size: 20px; line-height: 20px;">Best Practices</span>
  <br />
</p><p xmlns="http://www.w3.org/1999/xhtml">Here are some important best practices for making larger changes to existing time cockpit deployments:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <em>Develop you customization or extension in a dedicated test environment first.</em>
    <br />
    <a href="http://www.timecockpit.com/help-support/contact-us">Contact us</a> if you want to have a copy of your production environment for development or testing purposes.</li>
  <li>
    <em>Write your customization or extension as a script.</em>
    <br />
You can use time cockpit's visual editor, let time cockpit create a script afterwards and adapt it to your needs.</li>
  <li>
    <em>Never reuse existing GUIDs inside a single deployment. 
<br /></em> Time cockpit uses <a href="http://en.wikipedia.org/wiki/Globally_unique_identifier">GUIDs</a> to uniquely identify each element of its data model. Either don't specify a GUID (time cockpit will generate one for you) or <a href="http://www.guidgenerator.com/">generate new GUIDs</a>. However, you can reuse GUIDs in different deployments (e.g. use the same GUIDs in your test and your production environment).</li>
  <li>
    <em>Be very carefully when deleting parts of the data model.
<br /></em> Users might become unable to synchronize their data if they have offline changes for model elements that you are about to delete.</li>
  <li>
    <em>Write scripts so that they can be executed multiple times.</em>
    <br />
To achieve this you should add checks that only e.g. create a new entity if it does not already exist. See <a href="http://help.timecockpit.com/?topic=html/07396c38-8cb8-45da-a303-549bdf323fe9.htm">time cockpit's online help</a> for examples.</li>
  <li>
    <em>If you build larger extensions to time cockpit, cosider using a source control system like TFS or Git to manage your scripts.</em>
  </li>
  <li>
    <em>If your scripts become really large, consider using a dedicated development environment like Visual Studio with its <a href="https://pytools.codeplex.com/">Python Tools</a>.</em>
    <br />
This will give you things like a debugger, syntax highlighting, etc. See also <a href="http://www.timecockpit.com/blog/2012/12/17/Debugging-and-interactive-development-of-time-cockpit-python-scripts">this blog article</a> of my colleague Simon about developing time cockpit scripts in Visual Studio.
<br /></li>
  <li>
    <em>All your changes are prefixed with USR_, don't try to change that.</em>
    <br />
Never create customizations with prefix <em>APP_</em> (<em>Application Specific</em>) or <em>SYS_ (System)</em>. Theoretically this would be possible with time cockpit's SDK. However, if you do this, we might not be able to update your subscription anymore.</li>
</ol>