---
layout: blog
title: Compound Keys in Excel Import
excerpt: In the September version of time cockpit we have improved the importer for Excel and CSV files. It now supports compound keys. See a video demonstrating the new functionality.
author: Rainer Stropek
date: 2014-08-29
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2014/08/29/Compound-Keys-in-Excel-Import
---

<p class="showcase">If you are not familiar with time cockpit's importer, read more in <a href="http://www.timecockpit.com/blog/2014/01/28/Importer-Improvements" target="_blank">Alex's blog article</a>.</p><p>In the September version of time cockpit we have improved the importer for Excel and CSV files. It now supports <em>compound keys</em>. Compound keys are keys that consist of more than one column. This new feature is especially relevant if you want to import transactional data like time sheet records. In contrast to base data (e.g. customer, projects, etc.), transactional data typically does not have a primary key like a code or an ID. Therefore it is important to be able to mark multiple columns that form the primary key together.</p><p>The following screenshot shows how to set a compound key in time cockpit's importer:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:2c3a85ee-e18a-432d-8340-93f6accd1c2b" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><h2>Video</h2><p>The following short video demonstrates time cockpit's importer and the new compound key feature:</p><div class="videoWrapper">
  <iframe width="960" height="720" src="//www.youtube.com/embed/Yfr-E2MhIxY" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>