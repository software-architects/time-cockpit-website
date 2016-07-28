---
layout: blog
title: What's New in Version January 2014
excerpt: December 2013 has primarily been a planning month for us. We defined the topics in which we want to invest in 2014. Nevertheless, in version January 2014 we deliver improvements in the areas reporting and programmable actions. In this article you can read about the enhancements and the results of our planning for 2014.
author: Karin Huber
date: 2013-12-30
bannerimage: 
lang: en
tags: [Reporting,time cockpit]
permalink: /blog/2013/12/30/Whats-New-in-Version-January-2014
---

<p>December 2013 has primarily been a planning month for us. We defined the topics in which we want to invest in 2014. Nevertheless, in version <em>January 2014</em> we deliver improvements in the areas <em>reporting</em> and <em><a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" target="_blank">programmable actions</a></em>. In this article you can read about the enhancements and the results of our planning for 2014. We are very interested in your opinion. Leave us a comment or send a mail to <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a>. Let us know what your most wanted feature is.</p><p>
  <strong>The new version January 2014 (1.20) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</strong>
</p><h2>Reporting</h2><p>Last month we have introduced a new feature in reporting that allows you to customize reports to your needs. The settings were not saved so you had to adjust the settings repeatedly for every report. In the new version you can now save the settings as default for all users and reports. This allows you to adjust font family, font size and color to fit your corporate design.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/save-reporting-settings.png" alt="Save reporting settings" title="Save reporting settings" />
</p><p>Additionally the new version keeps the zoom factor when updating the report with other setting and does not jump back to 100% anymore.</p><h2>Configuring Visibility of Actions</h2><p>Until now, actions always showed up in the ribbon for lists and in the tool bar of forms as long the action was executable for the displayed entity.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/actions-in-ribbon.png" alt="Actions in ribbon" title="Actions in ribbon" />
</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/actions-in-forms.png" alt="Actions in forms" title="Actions in forms" />
</p><p>Additionally, you could use actions in list and form definitions to allow the user to execute the action by clicking on a hyperlink. The following list definition adds an <em>action</em> hyperlink to the list of time sheet entries that allows to create an invoice from one single time sheet entry.</p>{% highlight xml %}    ...
    <BoundCell Content="=Current.Billed" />
    <BoundCell Content="=Current.FixedPrice" />
    <ActionCell Content="Create Invoice ..." Action="APP_CreateInvoiceAction" EntityObject="=Current.Me" />
</List>{% endhighlight %}<p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/action-cell.png" alt="Action cell in list" title="Action cell in list" />
</p><p>In the new version we allow you to specify where an action should be available. Therefore, you can specify an expression for the visibility in forms and in the ribbon (or the context menu of the list).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/configure-visibility-of-action.png" alt="Configure the visibility of actions" title="Configure the visibility of actions" />
</p><p>As long as no expression is specified, the action is shown in the form, ribbon and context menu. The easiest expressions you can specify are <em>True</em> and <em>False</em>. You can also write more complex expressions like for example <em>'Admin' In Set('CurrentUserRoles', 'Code')</em> to show an action only for users belonging to the <em>Admin</em> role.</p><h2>Line Breaks in TCQL Expressions</h2><p>It is now possible to specify line breaks in TCQL expressions by using <em>\r\n</em>. The following TCQL statement builds addresses from customers by appending customer name, street and town with line breaks in between.</p>{% highlight sql %}From T In Customer
Select New With
{
.Customer = T.CompanyName + '\r\n' + T.APP_Street + '\r\n' + T.APP_ZipCode + ' ' + T.APP_Town
}{% endhighlight %}<p>
  <img src="{{site.baseurl}}/content/images/blog/2013/12/line-breaks-in-expressions.png" alt="Line breaks in expressions" title="Line breaks in expressions" />
</p><h2>What's Planned for 2014</h2><p>At the moment we are in the progress of planning the areas of investment for time cockpit in 2014. Until now the following items are on our short list of potentially upcoming features:</p><ul>
  <li>REST (OData) API for reading and writing data</li>
  <li>
    <a href="http://technet.microsoft.com/en-us/library/ms152816.aspx" target="_blank">Custom data processing extension</a> that allows to build reports in Visual Studio that can directly access time cockpit data</li>
  <li>Improved sync with better conflict detection and better performance</li>
  <li>Restricted sync that only syncs data for a certain user or timeframe to the client</li>
  <li>HTML5 client (without plug-ins like Silverlight)</li>
  <li>Mobile client (possibly Android) or mobile HTML5 client</li>
</ul><p>Let us know about your wishes for time cockpit in 2014! What do you consider as being most important? Leave us a comment or send a mail to <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a>. We are very interested in your opinion!</p>