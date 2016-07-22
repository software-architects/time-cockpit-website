---
layout: blog
title: Solving the Time Cockpit Silverlight Client not Loading Issue
teaser: Today one of our customers reported an issue that time cockpit's Silverlight client would not load on his computer. The fabulous thing about this -  The customer solved the problem himself AND gave us the root of the cause. We definitely have the best customers in the world.
author: Philipp Aumayr
date: 2013-06-04
bannerimage: 
lang: en
permalink: /blog/2013/06/04/Solving-the-Time-Cockpit-Silverlight-Client-not-Loading-Issue
---

<p xmlns="http://www.w3.org/1999/xhtml">Our customer reported that our Silverlight client would not load on his machine. Specifically, the browser would load the Silverlight plugin, present the loading screen and hang there forever, never finishing the loading. The result was similar to the following:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/06/load_screen_of_death.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">We were looking for a solution but the customer solved it himself and provided us with the necessary hint: Whenever he starts Internet Explorer, he has to choose a dialup connection. He never uses Internet Explorer, but once he chose the “connect automatically” option, the Silverlight client works.</p><p xmlns="http://www.w3.org/1999/xhtml">This was the missing hint we were looking for: The Internet Explorer Settings. What happens is that we use Silverlight's internal networking stack, also known as the “Client Stack” instead of the "Browser Stack" for our web requests. We do this to channel response errors through to the application. Since the Client Stack reads the settings from Internet Explorer (on Windows at least) it will not connect as it requires the dialup connection.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2013/06/dialup_settings.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">In case you are suffering from the problem, open Internet Explorer, go to the Internet Options, switch to the Connections tab and configure the settings in such a way that the connection is automatically dialed (automatically detect settings). Otherwise, make sure your dial up connection is connected before opening the Silverlight application. I have also read that this happens quite often on virus infected machines as malicious software likes to redirect web requests. So, kudos to our customer reporting issues like this!</p>