---
layout: blog
title: Staff Vacation Calendar with Time Cockpit and Office 365
teaser: In this article, we will show how you can connect time cockpit with Office 365 to view all the vacations of your employees in one single Sharepoint/Outlook calendar. This approach has two big benefits -  First, you do not need to manage vacations in multiple systems and second, you can take advantage of the strength of both, time cockpit and Office 365.
author: Alexander Huber
date: 2015-09-30
bannerimage: /content/images/blog/2015/09/OutookIntegrationSmall.png
lang: en
permalink: /blog/2015/09/30/Staff-Vacation-Calendar-with-Time-Cockpit-and-Office-365
---

<p>In this article, we will show how you can connect time cockpit with <a href="http://www.office365.com" target="_blank">Microsoft Office 365</a> to create a staff vacation calendar in <em>SharePoint </em> and <em>Outlook</em>. This approach has particularly two benefits:</p><ul>
  <li>
    <em>Manage vacations in a single system:</em> You maintain vacations only in time cockpit and the staff vacation calendar is filled automatically.</li>
  <li>
    <em>Combine the strengths of time cockpit and Office 365:</em> Time cockpit uses vacation data for doing working time calculations and Office 365 provides a quick overview about vacations to all employees.</li>
</ul><h2>The Business Case</h2><p>Recently, a customer approached us with a business problem that many companies have according to our experience: The company manages vacations and sick leaves in time cockpit. Additionally, they also have an <a href="~/blog/2014/08/28/Learn-From-Best-in-Class-Confirmation-and-Approval-Processes" target="_blank">approval workflow</a> for vacations in place. The main benefit of using time cockpit not only for time tracking but also for absence management is that time cockpit is able to calculate <a href="https://help.timecockpit.com/html/d0ca12b0-d108-433b-8b2c-92d37d29fc02.htm" target="_blank">target and actual hours</a> for each employee. </p><p>However, time cockpit does not provide an integrated view showing all employees' vacations and vacation overlappings. There are other tools that are very good at displaying team calendars like that - for example <em>Microsoft SharePoint</em> and <em>Microsoft Outlook</em>. Clearly, it does not make much sense to manually enter vacations in both time cockpit and SharePoint/Outlook. So we decided to connect time cockpit and SharePoint/Outlook to get the best of both worlds.</p><h2>The Benefits at a Glance</h2><ul>
  <li>One leading system to manage vacations (time cockpit), no redundancies</li>
  <li>A customizable approval workflow (time cockpit)</li>
  <li>Accurate record of target and actual working hours for employees (time cockpit)</li>
  <li>Powerful calendar views (SharePoint and Outlook)</li>
  <li>Vacations also available on mobile platforms (SharePoint and Outlook)</li>
</ul><h2>How Does It Work?</h2><p class="showcase">This article will not go into much technical details. It explains the basic ideas about how to connect your time cockpit with SharePoint and Outlook in Office 365. This is because the implementation of e.g. the web job component (see below) differs from customer to customer. If you are interested in a solution for your company, please contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><p>The following figure shows the components involved to integrate time cockpit with SharePoint and Outlook in Office365 (click to enlarge).</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:d924fdf3-ca71-4af6-85ec-6717c19c7638" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p>As mentioned earlier, time cockpit is used to manage vacations and sick leaves and we will not go into detail about how to manage absence times in time cockpit. If you interested in that topic, please refer to our <a href="https://help.timecockpit.com/html/d0ca12b0-d108-433b-8b2c-92d37d29fc02.htm" target="_blank">online documentation</a> and <a href="~/blog/2015/01/30/%E2%80%9CHigher-Mathematics%E2%80%9D-of-Paid-Time-Off" target="_blank">"Higher Mathematics" of Paid Time Off</a>.</p><h3>Azure Webjobs</h3><p>For our customer, we implemented an <a href="http://www.hanselman.com/blog/IntroducingWindowsAzureWebJobs.aspx" title="Azure Webjobs">Azure Webjob</a> in his own <a href="http://azure.microsoft.com" target="_blank">Microsoft Azure</a> subscription. The web job uses time cockpit's <a href="~/blog/2014/09/26/Accessing-Time-Cockpits-OData-Web-API-With-Visual-Studio" title="Web API" target="_blank">OData Web API</a> to fetch all the vacations for the employees of the company. Further, the web job connects to the SharePoint instance of the customer and queries the vacations that have already been exported to a dedicated calendar app in Sharepoint. Afterwards the web job syncs both calendars by creating new entries, updating existing entries and deleting non-existent entries in the Sharepoint calendar. To connect to the customer's Sharepoint, we use a service proxy generated by Visual Studio. </p><h3>SharePoint Calendar App</h3><p>To have a common calendar for the vacations, we create a <em>Calendar App</em> in SharePoint. <a href="https://support.office.com/en-us/article/Video-Create-your-own-SharePoint-calendar-c725a546-31e9-4096-a54d-ac7c8eca41ac?ui=en-US&amp;rs=en-US&amp;ad=US" target="_blank">Here you can find a video</a> created by Microsoft that shows how to create a SharePoint calendar app.</p><p class="showcase">Please make sure that you create the calendar as a SharePoint app and that the regional settings for the calendar fit your region and time zone.</p><p>Of course you can use all the means of configuration in SharePoint afterwards. </p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:329dcb8f-c677-4e9f-9410-3f643fe74124" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="1000" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p class="showcase">Please be aware that employees must not alter vacation entries in the SharePoint calendar. All the changes will be overwritten when the web job synchronizes the vacations again.</p><h3>App Principal</h3><p>To authenticate with our customer's SharePoint, we do not use an Office 365 user. A dedicated user would generate monthly costs, thus we decided to authenticate via an <em>App Principal</em>. You can register an app principal directly in SharePoint. Unfortunately, there is no convenient assistant for that. You need to perform the following steps manually:</p><ol>
  <li>Open the URL <a href="https://XXX.sharepoint.com/_layouts/AppRegNew.aspx">https://XXX.sharepoint.com/_layouts/AppRegNew.aspx</a> (replace XXX with your company name)</li>
  <li>Generate a client id and a client secret</li>
</ol><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:5d31c9dc-4c14-406e-a3fd-755bbf89b24c" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p>The client id and the secret are used to authenticate with your SharePoint instance. In our implementation we pass the client id and the secret for each request to SharePoint in the <em>Authentication </em> header.</p><p>After you have created your app principal, you need to set permissions for the principal. Again, you need to do that with a specific URL:</p><ol>
  <li>Open the URL <a href="https://XXX.sharepoint.com/_layouts/AppInv.aspx">https://XXX.sharepoint.com/_layouts/AppInv.aspx</a> (replace XXX with your company name)</li>
  <li>Enter the client id you created in the previous step</li>
  <li>Provide a permission request file</li>
</ol><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:793cf767-bcc0-470c-aa5c-f45c09a0608e" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p>The permission request file looks like the following and lets you configure permissions for the app principal.</p>{% highlight xml %}<AppPermissionRequests AllowAppOnlyPolicy="true">
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web/list" Right="Write" />
</AppPermissionRequests>{% endhighlight %}<p class="showcase">After you confirmed the permission request, SharePoint will ask you to select the app you want the app principal to have permission to. Please make sure to select the calendar app you created for time cockpit vacations.</p><h2>Display Vacations in Outlook</h2><p>To integrate the SharePoint calendar in Outlook, employees can simply click <em>Connect to Outlook</em> in the menu of the calendar. A dialog window in Outlook will open and guide you through the process. </p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:834cc03e-e2c5-4aab-931b-25b79692d21a" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><p>After you finished importing the SharePoint calendar, the calendar will show up under the <em>Other Calendars</em> section in your Outlook. From there, you can take benefit from all functions and views of Microsoft Outook. </p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:d5ecf3f1-08d5-4cdc-af71-aae49c26949c" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><h2>Conclusion</h2><p>There are tools for collaboration, office tasks, time tracking, vacation management, managing customer relations and so on. Although, each tool focuses on a certain aspect of work, their functionality often overlap. Data tends to get inconsistent if it is manually maintained in multiple places.</p><p>In this article we showed how time cockpit can be the leading system for absence management without missing the powerful collaboration and visualization features of SharePoint and Outlook.</p><p class="showcase">If you think that this approach would make vacation planning in your company more convenient and accurate, <a href="~/help-support/contact-us" target="_blank">let us know</a>. We are glad to help you connect your time cockpit with other systems in your company.</p>