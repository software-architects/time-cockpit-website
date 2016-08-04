---
layout: blog
title: Location Data in Time Cockpit - A Wish Comes True
teaser: From the very first day of our time cockpit project we wanted to support knowledge workers who travel a lot. Finally this vision has become reality. The latest time cockpit version makes booking your time sheet records for business travels a piece of cake.
author: Rainer Stropek
date: 2013-05-31
bannerimage: 
lang: en
permalink: /blog/2013/05/31/Location-Data-in-Time-Cockpit---A-Wish-Comes-True
---

<h2>Vision: Time Tracking for Travelling Knowledge Workers</h2><p>When Karin Huber and I developed the vision for time cockpit some years ago, our main goal was to support knowledge workers so that they never forget a billable hour any more. Many of our customers do have to travel to customers regularly. We know from interviews that creating time sheet records for such business travels and filling out forms for travel &amp; expenses reimbursement at the end of the month is cumbersome for them. Therefore offering a solution to this problem has been part of our product plan since the early days of the time cockpit project.</p><p>Over the course of the last years we have tried numerous potentials solutions: We have developed apps for different smartphone platforms, we have played around with GSM-based location services, and we have evaluated many different GPS tracking devices. We have even tried to build our own custom device for location tracking a few years ago. Unfortunately all of these approaches had some significant problems that made them practically unusable.</p><h2>Our Solution: Integrate Time Cockpit with Google Latitude</h2><p>We were quite excited when Google launched their Latitude service. They position it as a social platform for sharing your current location with friends However, it is in fact a powerful location tracker combined with a cloud service that stores your location history. In order to use Google Latitude you do not even have to share anything with your friends. You can keep your location history private (meaning that only you and Google can access it).</p><img src="{{site.baseurl}}/content/images/blog/2013/05/GoogleLatitudeTeaser.png" /><p>Months ago we have decided to give Google Latitude a try and started to test it for our own purposes. It turned out that it works like a charm. Battery lifetime is ok even if you run Latitude on your mobile constantly. The accuracy of the gathered location data is more than sufficient for the purpose of helping you to create time sheet records based on your location. Therefore we decided to fully integrate it into time cockpit. We are proud to announce that we can start the public beta program of this major enhancement of our software in the upcoming version June 2013.</p><p>In order to give you a short impression of how the Google Latitude integration works, we have created a short video:</p><iframe width="640" height="480" src="http://www.youtube.com/embed/eeM2hwO4XHk?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe><h2>Ideas for the Future</h2><p>Now that we have made the first step towards location-based time tracking, you will see us continue to innovate into this direction in the upcoming months. Here are some of the ideas that we are currently looking at:</p><ul>
  <li>Support for Google Latitude integration in time cockpit's browser client.</li>
  <li>Add customizable geo-fences to your customer records so you do not have to manually tell time cockpit which customer you were travelling to.</li>
  <li>Add points-of-interest (e.g. home, office, subsidiary xyz).</li>
</ul><div>Do you have additional ideas? We would love to hear your feedback at <a href="mailto:office@timecockpit.com">office@timecockpit.com</a>.</div><h2>Getting Started</h2><p>Are you interested in trying time cockpit's location feature yourself? Here are some additional resources that contain detailed information about how to get started:</p><ul>
  <li>Article about <a href="~/blog/2013/05/31/Whats-New-in-Version-June-2013" target="_blank">what's new in version June 2013</a> describing Google Latitude integration in more details.</li>
  <li>Detailed description of the <a href="http://help.timecockpit.com/?topic=html/0e40439e-9b49-4702-883e-03d2e90c76dc.htm" target="_blank">Google Latitude integration in time cockpit's help</a>.</li>
</ul>