---
layout: blog
title: What's New in Version November 2014
teaser: This month we are announcing the next important step in our movement towards HTML and JavaScript: We present the first public preview of time cockpit's OpenID Connect endpoint for authentication and authorization. Additionally we have improved validation consistency and disabled SSL 3.0 support to prevent POODLE attacks.
author: Karin Huber
date: 2014-47-31
bannerimage: /content/images/blog/2014/10/time-cockpit-november-2014.png
permalink: /blog/2014/10/31/Whats-New-in-Version-November-2014
---

<p xmlns="http://www.w3.org/1999/xhtml">The new version November 2014 (1.30) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Changes in the New Version</h2><h3 xmlns="http://www.w3.org/1999/xhtml">OAuth2 and OpenID Connect</h3><p xmlns="http://www.w3.org/1999/xhtml">This month we are announcing the next important step in our movement towards HTML and JavaScript: We present the first public preview of time cockpit's <a href="http://openid.net/connect/" target="_blank">OpenID Connect</a> endpoint for authentication and authorization. Until now, time cockpit has used a custom token format, custom authorization flow, etc. As always we open our own APIs for our customers, too. So with the change we present today, you can use the OpenID Connect standard instead. We also published an updated version of our OData Web API that can consume the tokens you get from the new authorization endpoint.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="~/blog/2014/10/31/Welcome-OAuth2-and-OpenID-Connect">Read more ...</a>
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Improved Validation Consistency</h3><p xmlns="http://www.w3.org/1999/xhtml">Different operations in time cockpit use validation to ensure that entered data is correct before it is saved. Up until now there was an inconsistency between the validation results presented by forms in the UI and programmatic save operations. Additionally, the system behaved differently depending on if an entity has any enabled validation rules or not.</p><p xmlns="http://www.w3.org/1999/xhtml">In this release we unified the behavior to be consistent in all cases. This change has an impact on not-nullable properties with additional considerations for text properties. The following matrix shows the previous and new behavior for programmatic operations.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <td>
        <strong>Entity has Validation Rules</strong>
      </td>
      <td>
        <strong>Input Value</strong>
      </td>
      <td>
        <strong>Previous Result</strong>
      </td>
      <td>
        <strong>New Result</strong>
      </td>
    </tr>
    <tr>
      <td>FALSE</td>
      <td>Null</td>
      <td class="error">SQL Exception</td>
      <td>Validation Exception</td>
    </tr>
    <tr>
      <td>FALSE</td>
      <td>Empty String</td>
      <td class="error">OK</td>
      <td>Validation Exception</td>
    </tr>
    <tr>
      <td>FALSE</td>
      <td>Text</td>
      <td>OK</td>
      <td>OK</td>
    </tr>
    <tr>
      <td>TRUE</td>
      <td>Null</td>
      <td>Validation Exception</td>
      <td>Validation Exception</td>
    </tr>
    <tr>
      <td>TRUE</td>
      <td>Empty String</td>
      <td>Validation Exception</td>
      <td>Validation Exception</td>
    </tr>
    <tr>
      <td>TRUE</td>
      <td>Text</td>
      <td>OK</td>
      <td>OK</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">Please note that we no longer accept empty strings as valid values for not-nullable text properties. The UI always behaved like this but programmatic operations accepted such values if no validation rules were present on the model entity.<br /></p><p xmlns="http://www.w3.org/1999/xhtml">In addition to being more consistent in when exceptions are thrown we also improved the types of exceptions involved as we try to avoid directly surfacing SQL exceptions and using validation exceptions with end-user friendly messages.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Disabled SSL 3.0 Support</h3><p xmlns="http://www.w3.org/1999/xhtml">We have disabled SSL 3.0 support for the following websites to prevent <a href="http://en.wikipedia.org/wiki/POODLE" target="_blank">POODLE attacks</a>:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="~/" target="_blank">www.timecockpit.com</a>
  </li>
  <li>
    <a href="https://help.timecockpit.com" target="_blank">help.timecockpit.com</a>
  </li>
  <li>
    <a href="https://login.timecockpit.com" target="_blank">login.timecockpit.com</a> (login page for time cockpit web client with Silverlight)</li>
  <li>
    <a href="https://1-30-3292-4.timecockpit.com" target="_blank">1-30-3292-4.timecockpit.com</a> (current version of the time cockpit web client with Silverlight, you will automatically be redirected to the correct version of time cockpit when using <a href="https://login.timecockpit.com" target="_blank">login.timecockpit.com</a>)</li>
  <li>
    <a href="https://apipreview.timecockpit.com" target="_blank">apipreview.timecockpit.com</a> (OData endpoint)</li>
  <li>
    <a href="https://auth.timecockpit.com" target="_blank">auth.timecockpit.com</a> (OAuth endpoint)</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">In this context we also have dropped support for time cockpit versions smaller than 1.10 (March 2013). If you are using an older version of time cockpit and want to use the web client, please contact us. We will gladly help you to upgrade to the latest version of time cockpit.</p>