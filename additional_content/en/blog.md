---
layout: page
title: Time Cockpit Blog - Tips and News from the Time Cockpit Team
permalink: /blog/
---

<div class="row blog-overview">
{% for page in (site.pages | where:page.layout == "blog") %}
	<div class="col-sm-12"><h2>{{ page.title }}</h2></div>
	<div class="col-sm-12"><p>{{ page.date }}</p></div>
	<div class="col-sm-8"><p>{{ page.teaser }}</p></div>
	<div class="col-sm-4"><img src="{{ page.bannerimage | prepend: site.baseurl }}" /></p></div>
	<div class="col-sm-12"><p><a href="{{ page.url | prepend: site.baseurl }}">Read more ...</a></p></div>
{% endfor %}
</div>