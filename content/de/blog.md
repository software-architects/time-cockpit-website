---
layout: page
title: Time Cockpit Blog - Tipps und News vom time cockpit Team
permalink: /de/blog/
---

<f:function name="Composite.Community.Blog.BlogRenderer" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="BlogEntriesCount" value="10" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="BlogListOptions" value="Show teaser,Show author,Show date,Show tags,Show RSS" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="Author" value="1c498b76-505a-487e-82fb-6e444579f60c" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Newsletter abonnieren</h2><p xmlns="http://www.w3.org/1999/xhtml">
  <input style="width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;" type="email" name="EMAIL" class="email" id="newletterEmail" placeholder="E-Mail Adresse" required="required" data-mce-style="width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;" />
</p><p class="textaligncenter" xmlns="http://www.w3.org/1999/xhtml">
  <input type="button" value="Abonnieren" name="subscribe" onclick="javascript:subscribeToNewsletterWithEmail(document.getElementById('newletterEmail').value);" class="button" />
</p><!--<h2>Follow Time Cockpit</h2>
        <table cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td><a href="//plus.google.com/100277396048641818309?prsrc=3" title="Follow time cockpit on Google+" rel="publisher" target="_blank" style="text-decoration:none;" data-mce-style="text-decoration: none;"><img src="//ssl.gstatic.com/images/icons/gplus-32.png" alt="Google+" style="border:0;width:32px;height:32px;" data-mce-style="border: 0; width: 32px; height: 32px;" /></a></td>
                    <td><br data-mce-bogus="1"/></td>
                    <td><a href="https://twitter.com/timecockpit" title="Follow @timecockpit on twitter" target="_blank" class="twitter-follow-button" data-show-count="false"><img src="{{site.baseurl}}images/twitter-bird-white-on-blue.png?mw=32&amp;mh=32" alt="Follow @timecockpit on twitter" title="Follow @timecockpit on twitter" /></a></td>
                </tr>
            </tbody>
        </table>
        <br /> 
        <br />--><f:function name="Composite.Community.Blog.LatestAside" xmlns:f="http://www.composite.net/ns/function/1.0" /><h2 xmlns="http://www.w3.org/1999/xhtml">Tags</h2><f:function name="Composite.Community.Blog.TagCloud" xmlns:f="http://www.composite.net/ns/function/1.0" /><h2 xmlns="http://www.w3.org/1999/xhtml">Autoren</h2><f:function name="Composite.Community.Blog.AuthorsBlogFilter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="DevBlog" value="False" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>