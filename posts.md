---
layout: page
title: Time Cockpit Blog
permalink: /posts/
---

<h1>Time Cockpit Blog</h1>

{% for post in site.pages | layout: "blog" %}
<h2>{{ post.title }}</h2>
<p>{{ post.author }}</p>
<p><a href="{{ post.url | prepend: site.baseurl }}">Read more ...</a></p>
{% endfor %}

<ul class="post-list">
{% for post in site.posts %}
    <li>
		<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

		<h2>
			<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
		</h2>
    </li>
{% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
