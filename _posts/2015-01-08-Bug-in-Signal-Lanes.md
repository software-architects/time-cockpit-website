---
layout: blog
title: Bug in Signal Lanes
excerpt: Unfortunately, we found a very unpleasant bug in time cockpit this week -  in January 2015, the signal lanes are not shown. The signal details on the right side are displayed correctly but the lanes next to the time sheet entries are missing. We have already created a fix that is available for download.
author: Rainer Stropek
date: 2015-01-08
bannerimage: /content/images/blog/2015/01/missing-signal-lanes-preview.png
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: /de/blog/2015/01/08/Fehler-in-der-Signaldarstellung
permalink: /blog/2015/01/08/Bug-in-Signal-Lanes
---

<p>Unfortunately, we found a very unpleasant bug in time cockpit this week: in January 2015, the signal lanes are not shown. The signal details on the right side are displayed correctly but the lanes next to the time sheet entries are missing.</p><p class="showcase">We have already fixed the problem in time cockpit's full and browser clients. <strong>We want to apologize for any inconvenience the bug has caused to you.</strong> If you have any questions regarding the problem or the fix we provided, don't hesitate to contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><h2>Problem Description</h2><p>This error occurs in all versions of time cockpit before 1.32.3362.7 (released yesterday). It is related to the <em>selected month</em> in the calendar. If you switch to December 2014, the signal lanes will be displayed correctly and in February 2015 they will work again.</p><p>The following image shows the problem (click to enlarge). While the signal details are displayed on the right, the signal lanes (orange rectangle) are missing.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:a67d83e5-34ca-4278-a728-72aacfc0d27c" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="1024" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><h2>Fix</h2><p>We have already created a new time cockpit version that fixes the problem. You can download the new version from <a href="~/sign-in">https://www.timecockpit.com/sign-in</a>. We have also deployed an updated version of the browser client (<a href="https://login.timecockpit.com">https://login.timecockpit.com</a>).</p><p>If you need to see the signal lanes for a specific day immediately without installing a new version, you can modify an existing time sheet entry e.g. by drag &amp; drop. If no entry exists, create a new one first. After moving the time sheet entry, the signal lanes for the selected day will be loaded.</p><h2>Root Cause</h2><p>The technical root cause of the problem was a hash function used by time cockpit internally. It calculated identical hash values for particular dates. We found problematic date values e.g. in the years 2010, 2015, and 2025. We changed the implementation of time cockpit so that we can now handle duplicate hash values correctly.</p>