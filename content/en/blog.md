---
layout: page
title: Time Cockpit Blog - Tips and News from the Time Cockpit Team
permalink: /blog/
---

<div class="row blog-overview">
{% assign blogposts = site.pages | where: "layout","blog" | where: "lang","en" | sort: "date" | reverse %}

{% for page in blogposts %}
	<div class="col-sm-12"><h2>{{ page.title }}</h2></div>
	<div class="col-sm-12"><p>{{ page.date | date_to_long_string }}</p></div>
	<div class="col-sm-8"><p>{{ page.teaser }}</p></div>
	<div class="col-sm-4"><img src="{{ page.bannerimage | prepend: site.baseurl }}" /></div>
	<div class="col-sm-12"><p><a href="{{ page.url | prepend: site.baseurl }}">Read more ...</a></p></div>
{% endfor %}
</div>