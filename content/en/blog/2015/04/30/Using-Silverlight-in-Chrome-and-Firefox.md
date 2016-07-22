---
layout: blog
title: Using Silverlight in Chrome and Firefox
teaser: While Microsoft will support Silverlight until 2021, Google will remove support already this year. If you want to use Silverlight in the new release of Google Chrome (v42), you have to enable it. In this blog article we describe how this can be done.
author: Rainer Stropek
date: 2015-04-30
bannerimage: /content/images/blog/2015/04/Silverlight.png
lang: en
permalink: /blog/2015/04/30/Using-Silverlight-in-Chrome-and-Firefox
---

<p xmlns="http://www.w3.org/1999/xhtml">In 2013, Microsoft announced that they have ceased development of Silverlight except for patches and bugfixes. However, Microsoft will support Silverlight until October 2021, so in Internet Explorer <a href="https://login.timecockpit.com/">https://login.timecockpit.com</a> will continue to work well. In the newest release of Google Chrome (v42), you can still use Silverlight but you have to explicitly enable it. Below you will find instructions on how to enable Silverlight in Chrome and Firefox.<br /></p><h2 xmlns="http://www.w3.org/1999/xhtml">Moving From Silverlight to HTML5</h2><p xmlns="http://www.w3.org/1999/xhtml">We are working very hard to replace the Silverlight client by a platform-<span lang="EN-US">independent</span> HTML5 client. Most of the functionality of time cockpit lists and forms is supported in the HTML5 preview already and since this month there is already a <a href="~/blog/2015/04/30/New-in-Version-May-2015-A-Glimpse-at-the-HTML5-Calendar">first preview of the time tracking calendar</a> available. You can try the new HTML5 client at <a href="https://web.timecockpit.com" target="_blank">https://web.timecockpit.com</a>. There will be updates every week, so come back regularly to see what's new.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Enable Silverlight in Firefox
<br /></h2><p xmlns="http://www.w3.org/1999/xhtml">When opening <a href="https://login.timecockpit.com/" target="_blank">https://login.timecockpit.com</a> in Firefox you may see the following message:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2015/04/firefox-silverlight.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Just click the link "Activate Silverlight" and time cockpit will be running.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Enable Silverlight in Chrome</h2><p xmlns="http://www.w3.org/1999/xhtml">Chrome disabled Silverlight by default in version 42. If you are using a version greater or equal 42 you will see the following screen when navigating to <a href="https://login.timecockpit.com/" target="_blank">https://login.timecockpit.com</a>:<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2015/04/chrome-silverlight.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">This may have two reasons: Silverlight is not installed on your PC or the plug-in is disabled in your Chrome browser. To re-enable Silverlight you have to take the following steps:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Enter <em>chrome://flags/#enable-npapi</em> in the address bar of your Chrome browser. You will get the following window:
<br /><img src="{{site.baseurl}}/content/images/blog/2015/04/chrome-enable-npapi.png" /></li>
  <li>Click "Enable" in the section "Enable NPAPI" and then click "Relaunch Now". All open Chrome windows will be closed and re-opened.</li>
  <li>Finally, Chrome will warn you again, that there are blocked plug-ins on this page. Click on the warning in the address bar, allow plug-ins for time cockpit and click "Done":
<br /><img src="{{site.baseurl}}/content/images/blog/2015/04/chrome-allow-plug-ins.png" /></li>
</ol><p xmlns="http://www.w3.org/1999/xhtml">After that, time cockpit will be working again in Chrome.</p>