---
layout: blog
title: What's New in Version December 2014
teaser: Time cockpit got a new log file format which makes troubleshooting much easier. Additionally, we extended our implementation of script source lists to get enable optimizations in time cockpit's web client.
author: Karin Huber
date: 2014-33-30
bannerimage: /content/images/blog/2014/11/time-cockpit-december-2014.png
permalink: /blog/2014/11/30/Whats-New-in-Version-December-2014
---

<p class="showcase" xmlns="http://www.w3.org/1999/xhtml">The new version December 2014 (1.31) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Changes in the New Version</h2><h3 xmlns="http://www.w3.org/1999/xhtml">New Method <em>getResultModelEntity</em> in Script Source Lists</h3><p xmlns="http://www.w3.org/1999/xhtml">In preparation for our HTML 5 time cockpit client we had to extend Script Source Lists. They now require an additional method <em>getResultModelEntity</em>. It has to return a model entity that specifies how the result of the list will look like.</p><p xmlns="http://www.w3.org/1999/xhtml">All Script Source Lists that are part of time cockpit's standard data model have been updated accordingly in the new version. If you want your custom lists with Python script code to work in the new HTML 5 client, please <a href="~/blog/2014/11/27/Why-You-Need-to-Sign-Your-Custom-Code">add the new method to your Python script</a>. If you need help please contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="~/blog/2014/11/27/Why-You-Need-to-Sign-Your-Custom-Code">Read more at "Why You Need to Sign Your Custom Code" ...</a>
</p><h3 xmlns="http://www.w3.org/1999/xhtml">XML Logging</h3><p xmlns="http://www.w3.org/1999/xhtml">We have changed the format of our log files to a log4j-compatible XML format that can be read and visualized by a large number of third-party log file viewers. Two free options are <a href="https://yalv.codeplex.com/" target="_blank">OnlineYALV! - Yet Another Log4Net Viewer</a> (see screenshot below, click to enlarge) and <a href="https://logexpert.codeplex.com/" target="_blank">OnlineLogExpert</a>.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:11038f04-0192-48cc-bba4-4abdffd607f7" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="http://help.timecockpit.com/?topic=html/4d4748e6-78a7-4e80-8859-bd84a8fff811.htm" target="_blank">Find more information in the time cockpit help ...</a>
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Import Definition and Import Log List</h3><p xmlns="http://www.w3.org/1999/xhtml">To improve performance of the <em>Import Definition List</em> and the <em>Import Log List,</em> we do no longer load the Excel templates and result files when displaying the lists. However, you can still download the Excel template for an import definition and the result file for an import log entry by just opening the form. There you will get a download link for the desired file.</p>