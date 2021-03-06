---
layout: blog
title: Welcome OAuth2 and OpenID Connect
excerpt: When we did our yearly strategy meeting at the beginning of 2014, we decided to dedicate this year primarily to moving time cockpit to HTML and JavaScript. This decision had huge consequences on important cornerstones of time cockpit's internal structure. The proprietary communication protocols we used in Silverlight are not appropriate for a purely browser-based solution. So we decided to move to platform- and vendor-neutral standards communication standards. Today, we present the next step down that road -  Time Cockpit's brand new OpenID Connect endpoint for authentication.
author: Rainer Stropek
date: 2014-10-31
bannerimage: /content/images/blog/2014/10/BrickByBrick.jpg
bannerimagesource: Image source -  <a href="http://commons.wikimedia.org/wiki/File:Bricklayer_J4.jpg" target="_blank">http://commons.wikimedia.org/wiki/File:Bricklayer_J4.jpg</a>, Creative Commons License
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2014/10/31/Welcome-OAuth2-and-OpenID-Connect
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/BrickByBrick.jpg" />Image source: <a href="http://commons.wikimedia.org/wiki/File:Bricklayer_J4.jpg" target="_blank">http://commons.wikimedia.org/wiki/File:Bricklayer_J4.jpg</a>, under Creative Commons License</div><p>When we did our yearly strategy meeting at the beginning of 2014, we decided to dedicate this year primarily to moving time cockpit to HTML and JavaScript. Getting rid of <a href="http://msdn.microsoft.com/en-us/library/ms752059(v=vs.110).aspx" target="_blank">XAML</a> and <a href="http://www.microsoft.com/silverlight/" target="_blank">Silverlight</a> is our long-term goal.</p><p class="showcase">In the long run, we want to enable our customers to use the time cockpit UI with just a browser on every device, regardless of operating system or form factor (PC, laptop, tablet, etc.).</p><h2>Moving Towards Standards</h2><p>This decision had huge consequences on important cornerstones of time cockpit's internal structure. The proprietary communication protocols we used in Silverlight are not appropriate for a purely browser-based solution. So we decided to move to platform- and vendor-neutral standards communication standards.</p><h2>First Step: OData</h2><p>As time cockpit customers, you have seen the first results our web strategy in May this year. We launched our first preview of time cockpit's <a href="http://www.timecockpit.com/blog/2014/04/27/Adding-Web-to-our-API" target="_blank">OData Web API</a>. Since then we have invested a lot of time and money to make it robust and feature-rich. One example for that is our ongoing investment in enhanced support for Service References and LINQ in Visual Studio and C#.</p><p>Although time cockpit's OData Web API is not officially in production, many customers are using it on a daily basis. Typical usage scenarios are:</p><ul>
  <li>Implementing scheduled jobs for e.g. reporting, workflows, etc. (<a href="http://www.timecockpit.com/blog/2014/05/30/Warning-Emails-in-Case-of-Budget-Overrun" target="_blank">read more</a>)</li>
  <li>Backend for custom time cockpit extensions</li>
  <li>Interfaces to/from external systems</li>
</ul><h2>Next Step: OpenID Connect, OAuth2</h2><p class="floatRight">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/openid-logo-wordmark.png" />
</p><p>This month we are announcing the next important step in our movement towards HTML and JavaScript: We present the first public preview of time cockpit's <a href="http://oauth.net/2/" target="_blank"></a><a href="http://openid.net/connect/" target="_blank">OpenID Connect</a> endpoint for authentication and authorization. Until now, time cockpit has used a custom token format, custom authorization flow, etc. As always we open our own APIs for our customers, too. So with the change we present today, you can use the OpenID Connect standard instead. We also published an updated version of our OData Web API that can consume the tokens you get from the new authorization endpoint.</p><p class="showcase">We want to thank the team that creates and maintains the open source project <a href="https://github.com/thinktecture/Thinktecture.IdentityServer.v3" target="_blank">Thinktecture Identity Server v3</a>. Time cockpit's OpenID Connect endpoint is based on this library. We already started to actively participate in the project and we plan to even increase our commitment in the future.</p><h2>What's Next?</h2><p>Guess what's next? We are working hard to publish first early bits for our upcoming HTML client. Stay tuned, we think we are just a few weeks away.</p><h2>Example: Accessing Time Cockpit's OData Web API with OpenID Connect</h2><h3>Introduction</h3><p>A complete description of Open ID Connect is out of scope of this article. However, I would like to walk you through a short example demonstrating how you could use our new auth endpoint.</p><p class="showcase">If you want to learn more about Open ID Connect and OAuth2, we recommend the following resources:</p><ul>
  <li>
    <a href="http://openid.net/connect/" target="_blank">OpenID Connect Homepage</a>
  </li>
  <li>
    <a href="http://openid.net/connect/faq/" target="_blank">OpenID Connect FAQ including an introductory video</a>
  </li>
  <li>
    <a href="http://oauth.net/2/" target="_blank">OAuth2 Homepage</a>
  </li>
  <li>
    <a href="https://github.com/thinktecture/Thinktecture.IdentityServer.v3" target="_blank">Thinktecture Identity Server v3 on GitHub</a>
  </li>
</ul><p>Note that in this sample I demonstrate <a href="http://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth" target="_blank">Authentication using the Implicit Flow</a>. If you want to play with time cockpit's new authentication endpoint, I encourage you to check out Identity Server's <a href="https://github.com/thinktecture/Thinktecture.IdentityServer.v3.Samples/">samples</a> (look for the <em>source/Clients</em> folder for sample clients for different scenarios) on GitHub.</p><h3>Step 1: Build the Request URI</h3><p>Time cockpit's OpenID Connect preview endpoint currently runs at <em>https://auth.timecockpit.com/core/</em>. Note that this URI might change in the future. You can get time cockpit's OpenID Connect <a href="http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig" target="_blank">Provider Configuration</a> at <a href="https://auth.timecockpit.com/core/.well-known/openid-configuration" target="_blank">https://auth.timecockpit.com/core/.well-known/openid-configuration</a>. In it you will find all the relevant URIs.</p><p>This is how the request URI for implicit flow would look like:</p>{% highlight text %}GET https://auth.timecockpit.com/core/connect/authorize?
    client_id=<your client id>&
    redirect_uri=<URI of your app>&
    response_type=id_token%20token&
    scope=openid&
    state=<yourstate>&
    nonce=<random generated nonce>{% endhighlight %}<ul>
  <li>
    <em>client_id</em> is the identifier of your client application. Note that we do not yet offer a portal that you could use to create clients. If you want to play with time cockpit's OpenID Connect endpoint, send us an email at <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a>. We will create one for you immediately.</li>
  <li>
    <em>id_token token</em> in the <em>response_type</em> parameter will make sure that you get both an <a href="http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#id_token" target="_blank">ID token</a> (that you can optionally ignore if you just want to access time cockpit's OData Web API) and an <em>access token</em> (that you will need for OData).</li>
  <li>
    <em>redirect_uri</em> is the URI that your web app uses. You will have to tell us the URIs of your app if you ask for a client id (see previous note).</li>
  <li>You can read more about <em>state</em> and <em>nonce </em><a href="http://openid.net/specs/openid-connect-core-1_0.html#AuthRequest" target="_blank">here</a>.</li>
</ul><p>If you have built your request URI correctly, you will see time cockpit's login screen:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/tclogin.png" />
</p><h3>Step 2: Receive the Token</h3><p>Once the user has successfully logged in, you will receive the tokens at the specified redirect URI. The URI parameters will look something like this:</p>{% highlight text %}id_token=<your id token>&
access_token=<your access token>&
token_type=Bearer&
expires_in=3600&
scope=openid&
state=<yourstate>{% endhighlight %}<p>Note that you could parse and verify the tokens. You can read more in the <a href="http://openid.net/specs/openid-connect-core-1_0.html#ImplicitTokenValidation" target="_blank">OpenID Connect specification here</a>. Internally, the access token looks something like this:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/10/accessToken.png" />
</p><h3>Step 3: Use the Token</h3><p>Now that you have the token, you can use it to access time cockpit's OData Web API:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:05867889-de92-469b-bdd9-bb1c06e4b359" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><h2>Questions? Feedback?</h2><p>We want to hear what you think. If you have questions or feedback, please contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p>