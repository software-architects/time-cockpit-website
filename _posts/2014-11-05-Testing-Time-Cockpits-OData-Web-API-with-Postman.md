---
layout: blog
title: Testing Time Cockpit's OData Web API with Postman
excerpt: If you want to play with a web api like the one from time cockpit, you need a tool to build and run web requests.  You could use rather low-level tools like curl or Fiddler. Postman is an alternative with a much nicer UI and the possibility to store requests for later use.
author: Rainer Stropek
date: 2014-11-05
bannerimage: /content/images/blog/2014/11/01PostmanQuery.png
bannerimagesource: 
lang: en
tags: [OData,time cockpit]
ref: 
permalink: /blog/2014/11/05/Testing-Time-Cockpits-OData-Web-API-with-Postman
---

<p>If you want to play with a web APIs like the one from <a href="http://www.timecockpit.com/">time cockpit</a>, you need a tool for building and running web requests.  You could use rather low-level tools like <a href="http://curl.haxx.se/" target="_blank">curl</a> or <a href="http://www.telerik.com/fiddler" target="_blank">Fiddler</a>. <a href="http://www.getpostman.com/" target="_blank">Postman</a> is an alternative with a much nicer UI and the possibility to store requests for later use. In this blog article I introduce Postman and show how you can use it to test-drive time cockpit's <a href="http://www.odata.org/" target="_blank">OData</a> web api (including <a href="http://www.timecockpit.com/blog/2014/10/31/Welcome-OAuth2-and-OpenID-Connect">OAuth2 authentication</a>).</p><h2>Get Postman</h2><p>Postman is a HTTP and REST client that makes it very easy to interactively build requests. If you are looking for general information about Postman (e.g. feater list), you should <a href="http://www.getpostman.com/" target="_blank">look at their website</a>. If you want to start using it, you can grab it from <a href="https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm" target="_blank">Google's Chrome Web Store</a>.</p><h2>Getting Data Using OData</h2><p>As you might know, <a href="http://www.timecockpit.com/">time cockpit</a> provides an <a href="http://help.timecockpit.com/?topic=html/1ed79daa-f621-4dda-9f3a-9fa720c55df1.htm" target="_blank">OData endpoint</a> for reading and manipulating data in your time cockpit database. Let's start with reading. OData has a <a href="http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html" target="_blank">URL-based query language</a>. The following image (click to enlarge) shows how to build a simple query using Postman:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:67b74368-9e13-49b9-a9ca-592486aa0d8f" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function><p>If you try to run this query, you will not succeed. The result will be an <em>Unauthorized</em> error.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/11/02PostmanUnauthorized.png" />
</p><h2>Getting the Token Using OAuth2</h2><p class="showcase">Note that time cockpit's OpenID Connect / OAuth2 implementation is based on <a href="https://github.com/thinktecture/Thinktecture.IdentityServer.v3" target="_blank">Thinktecture Identity Server v3</a>. Therefore, this description can be equally applied to all services procted by this open source OAuth2 implementation.</p><p>Postman has a nice OAuth2 integration. As time cockpit speaks <a href="http://www.timecockpit.com/blog/2014/10/31/Welcome-OAuth2-and-OpenID-Connect">OAuth2</a>, you can use Postman's UI to retrieve the token. </p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/11/03PostmanOAuth.png" />
</p><p>You need to enter some configuration data in Postman so that it can acquire a token for you. You can use <a href="http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig" target="_blank">OpenID Connect's Discovery</a> feature to retrieve the OAuth2 URIs. For time cockpit you can get the OpenID Provider Configuration at <a href="https://auth.timecockpit.com/core/.well-known/openid-configuration" target="_blank">https://auth.timecockpit.com/core/.well-known/openid-configuration</a>.</p><ul>
  <li>The authorization URL is <em>https://auth.timecockpit.com/core/connect/authorize</em></li>
  <li>The Access Token URL is <em>https://auth.timecockpit.com/core/connect/token</em></li>
</ul><p>In addition to OAuth2 URLs you also need a client ID + secret. For time cockpit we have set up a client that you can use for Postman. The client ID is <em>B8990A5C-980F-49F9-B657-E1E0E3DFD230</em> and the client secret is <em>yHuQwSykMLE8ZukJClNw</em>.</p><p class="showcase">Note that this URLs are subject to change when time cockpit's web API reaches general availability (currently in preview). Also note that the client ID + secret can only be used in conjunction with Postman.</p><p>Once you entered this configuration information you can click <em>Get access Token</em>. Postman will use OAuth2 <a href="http://tools.ietf.org/html/rfc6749#section-4.1" target="_blank">Authorization Code Grant flow</a> to get the access token. One step in this processes is that you enter your time cockpit credentials. Once you provided your user and password, Postman gets the tokens (<a href="http://openid.net/specs/openid-connect-core-1_0.html#IDToken" target="_blank">ID token</a> and access token) and shows them to you. You can provide a name and save them.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/11/05PostmanToken.png" />
</p><p>You can add the token to your REST requests with a single click:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/11/06PostmanAddToken.png" />
</p><p>Now you can retry the REST request. It will successfully return the result.</p><h2>Other REST Operations</h2><p>Similar to the query shown above you can play with all other operations that time cockpit's OData web API supports. This includes:</p><ul>
  <li>Creating data with POST</li>
  <li>Updating data with PATCH, PUT, and POST</li>
  <li>Deleting data with DELETE</li>
  <li>Running <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL</a> queries</li>
</ul><p>To make your start with Postman and time cockpit easier, we have created a set of sample requests and published it in Postman's API directory. You can download it here: <a href="https://www.getpostman.com/collections/ae594dd2266beff34018" target="_blank">https://www.getpostman.com/collections/ae594dd2266beff34018</a><a href="https://www.getpostman.com/collections/ae594dd2266beff34018" target="_blank"></a></p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:fcea432c-af51-4810-8ac3-65f74c77e19d" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1024" />
</function>