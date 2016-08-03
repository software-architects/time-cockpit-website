---
layout: page
title: Time Cockpit Blog - Tips and News from the Time Cockpit Team
lang: en
permalink: /blog/
---
{% assign counter = 0 %}
<div class="row">
	<div class="col-sm-8">
		<div class="row tc-blogoverview">
			{% assign site_count = site.posts | count %}
			{% assign pages = site_count | divided_by:10 %}
			{% assign curr_page = 1 %}
			{% assign blogposts = site.posts | where: "layout","blog" | where: "lang","en" | sort: "date" | reverse %}
			{% for post in blogposts %}
				{% if counter < 10 %}
					<div class="row tc-blogteaser">
				{% else %}
					<div class="row tc-blogteaser hidden">
					{% assign curr_page = curr_page | plus:1 %}
				{% endif %}
					<div class="col-sm-12"><h2>{{ post.title }}</h2></div>
					<div class="col-sm-8">
						<p>{{ post.date | date_to_long_string }}</p>
						<p>{{ post.excerpt }}</p>
						<p><a href="{{ post.url | prepend: site.baseurl }}">Read more ...</a></p>
					</div>
					<div class="col-sm-4">
					{% if post.bannerimage != null %}
						<img src="{{ post.bannerimage | prepend: site.baseurl }}" />
						<span class="tc-image-footer">{{post.bannerimagesource}}</span>
					{% endif %}
					</div>
				</div>
				{% assign counter = counter | plus:1 %}
			{% endfor %}
		</div>

		<div class="row">
			<div class="tc-pager">
				<div>
					<a onclick="previousPage()" class="tc-previous"><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span></a>
				</div>
				<div class="tc-page-number tc-current-page"></div>
				<div>
					<a onclick="nextPage()" class="tc-next"><span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span></a>
				</div>
			</div>
		</div>
	</div>

	<div class="col-sm-4">
		<h3>Tags</h3>
		{% include tagcloud.html %}
		<h3>Authors</h3>
		{% include authorcloud.html %}
	</div>
</div>