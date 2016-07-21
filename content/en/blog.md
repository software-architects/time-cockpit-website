---
layout: page
title: Time Cockpit Blog - Tips and News from the Time Cockpit Team
permalink: /blog/
---

<f:function name="Composite.Community.Blog.BlogRenderer" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="BlogEntriesCount" value="10" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="BlogListOptions" value="Show teaser,Show author,Show date,Show tags,Show RSS" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="Author" value="1c498b76-505a-487e-82fb-6e444579f60c" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Get Our Newsletter</h2><p xmlns="http://www.w3.org/1999/xhtml">
  <input style="width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;" type="email" name="EMAIL" class="email" id="newletterEmail" placeholder="Email address" required="required" data-mce-style="width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;" />
</p><p class="textaligncenter" xmlns="http://www.w3.org/1999/xhtml">
  <input type="button" value="Subscribe" name="subscribe" onclick="javascript:subscribeToNewsletterWithEmail(document.getElementById('newletterEmail').value);" class="button" />
</p><f:function name="Composite.Community.Blog.LatestAside" xmlns:f="http://www.composite.net/ns/function/1.0" /><h2 style="clear: left;" xmlns="http://www.w3.org/1999/xhtml">Tags</h2><f:function name="Composite.Community.Blog.TagCloud" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="DevBlog" value="False" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Authors</h2><f:function name="Composite.Community.Blog.AuthorsBlogFilter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="DevBlog" value="False" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>