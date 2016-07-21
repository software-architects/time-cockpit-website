---
layout: blog
title: What's New in Version April 2015
author: Karin Huber
bannerimage: /images/blog/2015/03/time-cockpit-april-2015.png
permalink: /2015/03/31/Whats-New-in-Version-April-2015
---

<img src="{{site.baseurl}}/images/blog/2015/03/BarChartsLarge.png" xmlns="http://www.w3.org/1999/xhtml" /><p class="imageCaption" xmlns="http://www.w3.org/1999/xhtml">HTML5 client now supports embedded charts in lists as you know them from full- and Silverlight-clients</p><p xmlns="http://www.w3.org/1999/xhtml">The new version April 2015 (1.35) is downwards compatible to version March 2013 (1.10) and later. You can use all of these versions in a single account simultaneously.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Content</h2><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="#Full">Improvements in Full and Silverlight Client</a>
  </li>
  <li>
    <a href="#HTML5">Improvements in the HTML5 Client</a>
  </li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="Full" name="Full" class="mce-item-anchor"></a>Improvements in Full and Silverlight Client</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Performance Time Sheet Calendar</h3><p xmlns="http://www.w3.org/1999/xhtml">When there were lots of time sheet entries in a month and formatting profiles with many different categories, navigation between days became very slow. In the new version we corrected this behavior. Switching from one day to another is now fasten even if you have lots of categories in formatting profiles.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Exceptions in Formatting Profiles</h3><p xmlns="http://www.w3.org/1999/xhtml">In the new version we enhanced error handling in formatting profiles. Previously, time cockpit displayed an error dialog for every time sheet entry that caused the error. In certain cases this caused opening countless error dialogs. In the new version we display the error message directly under the formatting profile instead of pop-up dialogs.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/03/formatting-profile-error.png" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Deletion of Formatting Profiles</h3><p xmlns="http://www.w3.org/1999/xhtml">Some users reported that they have accidentally deleted formatting profiles while they only wanted to hide them. We have changed the context menu for formatting profiles so that you can only hide the profile from there. The gear symbol in the top right corner allows you to add the profile again. If you really want to delete the profile for all users, click on <em>Edit profile ...</em> There you will still find the <em>Delete profile</em> command.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/03/hide-formatting-profile.png" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Full-Text Search in Expressions</h3><p xmlns="http://www.w3.org/1999/xhtml">Typically, cells in list definitions reference a property in a table using its name. However, you can use the full power of <a href="http://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm" target="_blank">TCQL-expressions</a> there, too. When using complex expressions (e.g. <em>&lt;BoundCell Content="<strong>=:DisplayValue(Current.Project)</strong>" /&gt;</em>), full-text search did not filter with the "contains" operator but instead checked for equality. We fixed that in the current time cockpit release.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Error when Uploading Report Definitions</h3><p xmlns="http://www.w3.org/1999/xhtml">In rare edge cases, time cockpit displayed an error when uploading report definitions. We improved the corresponding algorithm to make it even more robust.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Culture Settings in Windows 10</h3><p xmlns="http://www.w3.org/1999/xhtml">In Windows 10 (or at least in some builds) some time formats have changed (including the one for Austria). There are now <em>am/pm</em> symbols specified, namely "vorm." (forenoon) und "nachm." (afternoon). It is possible in Windows to customize the date and time format, but time cockpit did not recognize these settings by now. So in Windows 10, the graphical calendar showed the time with the new am/pm symbols. In the new version the designators will only be shown if you have not deleted them in your time format settings.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/images/blog/2015/03/am-pm-symbols.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="HTML5" name="HTML5" class="mce-item-anchor"></a>Improvements in the HTML5 Client</h2><p xmlns="http://www.w3.org/1999/xhtml">In the HTML5 Client we have added support for a large number of advanced configuration options for lists, forms and cells. The list of not fully supported features is still long but lists and forms are becoming more and more usable even for more complex customer scenarios.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Read-Only Expression for Entities</h3><p xmlns="http://www.w3.org/1999/xhtml">The <em>read-only expression</em> for entities can be used to conditionally set entities to read-only in time cockpit's user interface. It does not prevent the entity to be updated via scripts, actions, the OData API, etc., but in the time sheet calendar read-only items will be displayed semi-transparent. When you open the edit form, all input controls and the save button will be disabled. In the shipped data model of time cockpit we use this to prevent users from editing billed time sheet entries. By using the read-only expression instead of permissions it is still possible to modify affected time sheet entries with actions (e.g. assign them to an invoice or remove the assignment again).</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:aec68129-055e-4506-ac85-cab175d2be00" />
  <f:param name="ThumbnailMaxWidth" value="800" />
  <f:param name="ThumbnailMaxHeight" value="800" />
  <f:param name="ImageMaxWidth" value="1280" />
  <f:param name="ImageMaxHeight" value="1024" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">The new version of the HTML5 client now behaves like the full client. Read-only entities cannot be saved via the user interface anymore:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:4483296f-fb41-4070-b895-0134ee8c22b1" />
  <f:param name="ThumbnailMaxWidth" value="800" />
  <f:param name="ThumbnailMaxHeight" value="800" />
  <f:param name="ImageMaxWidth" value="1280" />
  <f:param name="ImageMaxHeight" value="1024" />
</f:function><h3 xmlns="http://www.w3.org/1999/xhtml">Actions in Lists</h3><p xmlns="http://www.w3.org/1999/xhtml">It is now possible to execute actions in lists. Select the items in the list to which you want to apply the operation and then choose the action you want to execute:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:8c351fc3-73bf-4098-aeee-1fcf07951cc3" />
  <f:param name="ThumbnailMaxWidth" value="800" />
  <f:param name="ThumbnailMaxHeight" value="800" />
  <f:param name="ImageMaxWidth" value="1280" />
  <f:param name="ImageMaxHeight" value="1024" />
</f:function><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Note that you have to sign custom actions to be able to execute them using time cockpit's browser clients (Silverlight or HTML5). <a href="http://www.timecockpit.com/blog/2014/11/27/Why-You-Need-to-Sign-Your-Custom-Code" target="_blank">Read more ...</a></p><h3 xmlns="http://www.w3.org/1999/xhtml">
  <em>IsVisible</em> / <em>IsEnabled</em> / <em>IsReadOnly</em> / <em>SelectFirstIfNew</em> Properties for Form Cells</h3><p xmlns="http://www.w3.org/1999/xhtml">The properties <em>IsVisible</em>, <em>IsEnabled</em> and <em>IsReadOnly</em> for cells and the property <em>SelectFirstIfNew</em> for relation cells are now implemented. The behave in HTML5 just like you are used to from the full- and Silverlight-clients.</p><h3 xmlns="http://www.w3.org/1999/xhtml">
  <em>DataBarCell</em> and <em>BulletGraphCell</em></h3><p xmlns="http://www.w3.org/1999/xhtml">And then there is one more thing: <a href="~/blog/2013/02/28/Whats-New-in-Version-March-2013" target="_blank"><em>DataBarCells</em> and <em>BulletGraphCells</em></a>, which we introduced two years ago in the full- and Silverlight-clients, are now available in the web client, too:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:eb2fd4c4-e65b-45c2-a4e3-2c1348b5121e" />
  <f:param name="ThumbnailMaxWidth" value="800" />
  <f:param name="ThumbnailMaxHeight" value="800" />
  <f:param name="ImageMaxWidth" value="1280" />
  <f:param name="ImageMaxHeight" value="1024" />
</f:function>