---
layout: blog
title: What's New in Version January 2016
author: Rainer Stropek
bannerimage: /images/blog/2015/12/time-cockpit-january-2016.png
permalink: /2015/12/30/Whats-New-in-Version-January-2016
---

<p xmlns="http://www.w3.org/1999/xhtml">The new version January 2016 (1.44) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><p xmlns="http://www.w3.org/1999/xhtml">This month our main focus was adding responsive design to our HTML5 client. Our goal is to make time cockpit's web client usable on phone, tablets and in desktop browsers. We have not reached our final goal yet but we have made significant progress this month. Try it and tell us what you think.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Responsive Design</h2><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit's HTML5 client now changes its layout depending on the size and layout of the screen. The animated picture below demonstrates the concept by changing the size of the browser window. <br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/12/Time-Cockpit-Responsive-Design.gif" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Depending on the available screen size, time cockpit changes it appearance for instance by ...<br /></p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>... showing/hiding menus and menu items.</li>
  <li>... displaying action buttons (e.g. save, close) differently.</li>
  <li>... disable multi-column layout of large forms into a single-column layout (e.g. for phones or small tablets in portrait layout).</li>
  <li>... put lables above input fields.</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Mobile Friendly
<br /></h2><p xmlns="http://www.w3.org/1999/xhtml">In some cases, responsive design is useful in your desktop browser, too. However, it is really important when it comes to phones and small tablets. The following animated picture shows the current look-and-feel of time cockpit's HTML5 client on a 5" Android phone. Forms already work quite well. We still have some work to do for lists.<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/12/Time-Cockpit-Mobile-Phone.gif" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Full Client Bug Fixes</h2><p xmlns="http://www.w3.org/1999/xhtml">We have added some enhancements and fixes for minor bugs in time cockpit's full client this month:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Enhanced logic for detecting out-of-date devices (i.e. devices, that have not sync'ed for such a long time that a complete re-sync is necessary)</li>
  <li>Fixed minor bugs regarding vacation and overtime functions in TCQL</li>
  <li>Enhancements to many-to-many relation cells (feature of time cockpit's forms engine)</li>
</ul>