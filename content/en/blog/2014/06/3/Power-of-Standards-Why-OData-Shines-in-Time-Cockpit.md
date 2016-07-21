---
layout: blog
title: Power of Standards, Why OData Shines in Time Cockpit
author: Rainer Stropek
bannerimage: 
permalink: /2014/06/3/Power-of-Standards-Why-OData-Shines-in-Time-Cockpit
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2014/05/XODataTimeCockpit.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">For <a href="http://www.timecockpit.com/blog/2014/04/27/Adding-Web-to-our-API" target="_blank">time cockpit's web API</a>, we have decided to go for <a href="http://www.odata.org" target="_blank">OData</a> instead of building a custom REST-based API. This decision wasn't easy. Fulfilling the OData standard does not come for free. It took us quite some time to create a custom OData endpoint that reflects the level of extensibility that time cockpit is known for. We couldn't use the default implementations of Microsoft's ASP.NET at all.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Why OData?</h2><p xmlns="http://www.w3.org/1999/xhtml">So why did we take the extra miles to support OData? Simply because it is a much richer standard. Months ago when we made the decision for OData, we hoped that over time more and more tools would appear that understand OData. They would be able to speak with time cockpit immediately because of the standard.</p><h2 xmlns="http://www.w3.org/1999/xhtml">OData is Gathering Speed</h2><p xmlns="http://www.w3.org/1999/xhtml">OData has become an OASIS standard, practically all new Microsoft web APIs are OData, SAP is heavily using OData - OData is becoming more and more important. Therefore you see a raising number of OData tools appear on the market. One of them is <a href="http://pragmatiqa.com/product_xodata.html" target="_blank">XOData from the UK company PragmatiQa</a>. Let's take a look at this product and connect it with time cockpit.</p><h2 xmlns="http://www.w3.org/1999/xhtml">XOData</h2><p xmlns="http://www.w3.org/1999/xhtml">XOData is a generic OData client that includes various visualizers for the data model as well as a query builder. It is no end user tool. However, if you are a power user or a developer, you will probably find XOData very handy.</p><p xmlns="http://www.w3.org/1999/xhtml">Recently, PragmatiQa has released XOData as a Chrome App (<a href="https://chrome.google.com/webstore/detail/xodata/hpooflanfopjepihkcjjfeonlnhfnmpp" target="_blank">link to Chrome Web Store</a> where you can get it). There is a free trial version that you can use for your first experiments. Once you installed it, XOData is available in your Chrome App Launcher:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2014/05/XODataInChrome.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Connect XOData With Time Cockpit</h2><p xmlns="http://www.w3.org/1999/xhtml">Connecting XOData with time cockpit is super simple. It requires two easy steps:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Open the <em>Connection</em> tab and enter your time cockpit user and password.</li>
  <li>Enter the time cockpit OData URI in XOData: 

<ol><li>Select OData Metadata URL as your access option</li><li>Enter URL or time cockpit's OData endpoint: <a href="https://apipreview.timecockpit.com/odata/$metadata" target="_blank">https://apipreview.timecockpit.com/odata/$metadata</a></li></ol></li>
</ol><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2014/05/ConnectXODataToTimeCockpit.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Your are Ready to Go!</h2><p xmlns="http://www.w3.org/1999/xhtml">Now you can start using XOData with time cockpit. Click on <em>Get Details</em> to see your time cockpit data model in XOData (click on image to enlarge):</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:9ee1c84d-fa9a-4f10-9109-c64c4316894c" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Query Builder</h2><p xmlns="http://www.w3.org/1999/xhtml">Use the <em>Query Builder</em> tab to create a query. Developers can get the raw OData feed (click on image to enlarge):</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:45ac364e-ca9b-4e4e-a6f4-5631e14409a4" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">XOData also supports executing the query. You can browse the result in a tabular form or even export it to the Excel-compatible CSV format (click on image to enlarge):</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:49d5c0c9-edda-406f-8fe3-03a6c1f4af9e" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="800" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1920" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Time Cockpit OData is Preview</h2><p xmlns="http://www.w3.org/1999/xhtml">Please keep in mind that time cockpit's OData web api is still in preview phase. If you experience any problems with it, we would love to hear your feedback and support you at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p>