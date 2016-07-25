---
layout: blog
title: Minimize, Maximize, and Close Button is Missing
teaser: When running time cockpit in Windows 8 the minimize, maximize, and close button is missing.
author: Karin Huber
date: 2012-11-22
bannerimage: 
lang: en
permalink: /blog/2012/11/22/Minimize-Maximize-and-Close-Button-is-Missing
---

<p>We use many components of the <a href="http://www.telerik.com/products/wpf/overview.aspx" target="_blank">WPF controls from telerik</a> like the RadRibbonWindow, RadRibbon, RadGridView, RadComboBox, RadDatePicker and much more. In our latest time cockpit version 1.9 we use version 2011.3.1220.40 of the telerik controls. Unfortunately this version ist not quite compatible with Windows 8. The RadWindow does not show the minimize, maximize and hide button.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/11/Windows8_MissingButtons.png" alt="RadWindows without Buttons" title="RadWindows without Buttons" />
</p><p>Although the buttons are not visible, you can click the buttons if you hit the correct position. Other workarounds are:</p><ul>
  <li>ALT + SPACE to get the window's system menu. There you can restore, move, resize, minimize, maximize, or close the window.</li>
  <li>ALT + F4 to close the window.</li>
  <li>WINDOWS + UP to maximize the window.</li>
  <li>WINDOWS + DOWN to minimize the window.</li>
</ul><p>In our next version of time cockpit we will upgrade to telerik version 2012.3.1017.40. Then the window will look fine again.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/11/Windows8_WithButtons.png" alt="RadWindows with Buttons" title="RadWindows with Buttons" />
</p><p>At the moment we plan to ship the new version in January or February 2013.</p>