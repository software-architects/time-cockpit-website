---
layout: blog
title: What's New In Version November 2013
excerpt: In this release of time cockpit, we focused on two things. First, we started to tackle one of our most requested features, reporting. Second, we further progressed improving the combo box in time cockpit. We enhanced the usability of how you manage data in time cockpit.  
author: Alexander Huber
date: 2013-10-31
bannerimage: 
bannerimagesource: 
lang: en
tags: [time cockpit]
ref: 
permalink: /blog/2013/10/31/Whats-New-In-Version-November-2013
---

<p>In this release of time cockpit, we focused on two things. <span style="font-size: 14px; line-height: 22px;" data-mce-style="font-size: 14px; line-height: 22px;">First, we started to tackle one of our most requested features, reporting. Second, we further progressed <a href="~/blog/2013/09/30/Whats-New-In-Version-October-2013" title="Combobox Improvements" target="_blank">improving the combo box</a> in time cockpit. We enhanced<span> the usability of how you manage data in time cockpit. </span>  </span></p><p>
  <strong>
    <span>The new version November 2013 (1.18) is downwards compatible to version March 2013 (1.10) and later.</span> You can use all of these versions in a single account simultaneously.</strong>
</p><h2>Reporting</h2><p>Most of you will know time cockpit's <a href="http://help.timecockpit.com/?topic=html/77e1bfc5-2e00-4348-9208-cba65638f3b5.htm" title="Excel export" target="_blank">Excel export</a>. Although the export is powerful (e.g. template mechanism), there are cases where you just want to have a printable representation of a list in time cockpit without the detour via Excel. Thus, we have added basic reporting capabilities in the new version of time cockpit. It allows you to view and print every list in time cockpit in PDF, Microsoft Excel and Microsoft Word. </p><p class="showcase">Please be aware that this is just a preview and not yet feature complete. So if you have feedback, suggestions, or problems we would love to hear your feedback at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Reporting/PrintListInRibbon.png" alt="Print List In Ribbon" title="Print List In Ribbon" />
</p><p>Clicking the <strong>Print</strong> button will open an embedded preview of the document. The preview also works in Silverlight. You can afterwards decide whether to download the report in PDF, Excel or Word.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Reporting/PrintPreview.png" alt="Print Preview" title="Print Preview" />
</p><p>Interested? You can find more details about the new reporting capabilities at <a href="~/blog/2013/10/29/Reporting-Preview">http://www.timecockpit.com/blog/2013/10/29/Reporting-Preview</a>. </p><h2>Combo Box Improvements</h2><p>In the last version of time cockpit we mainly addressed performance issues regarding combo boxes. Since the last version, the combo boxes can cope with large amounts of data, because we now load the data more intelligently and in parallel.</p><h3>
  <span style="color: rgb(80, 80, 80); font-size: 14px; line-height: 22px;" data-mce-style="color: #505050; font-size: 14px; line-height: 22px;">In this version we tried to improve the usability of combo boxes. Customers often complained that it is unnecessarily complicated to enter data apart from time sheet entries. An example: You need to create a time sheet entry, but the task you want to assign the time sheet entry to does not exist. Up to now, you had to switch from the time sheet calendar to the management module, open the task list and add the task there. Afterward you had to return to the time sheet calendar create a new time sheet entry and choose the task you just created. </span>
</h3><p>In the new version you can directly add data starting from the combo boxes. If you start typing in the combo box and the item does not exist already in the list, the combo box will show the <strong>'+'</strong> sign (or <strong>Ctrl + I</strong>) and you save the new record directly from where you are. You save yourself the hassle to manage all your data in the management module.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Time Sheet_2013-10-31_11-48-37.png" alt="Insert Item" title="Insert Item" />
</p><p>But you can also view a record directly from the combo box. When you have selected an item of the combo box, it will show a little pen symbol (or <strong><span>Ctrl + E</span></strong>). Clicking it, will open the record. This becomes handy if you just want to look up some details of, for example, a project. You do not have to navigate to the management module anymore.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Time Sheet_2013-10-31_12-28-01.png" alt="Edit Item" title="Edit Item" />
</p><p>The last action directly provided in the comb box is the clear command (<strong>'x' </strong> or <strong><span>Ctrl + D</span></strong>). Clicking the symbol clears the combo box. This is especially helpful on touch-enabled devices. </p><p>At time cockpit, we always try to remove unnecessary user interface elements that would just distract users in their every-day use. So we decided to move the <strong>'...'</strong> symbol into the menu of the combo box. This helps us to hold the user interface as simple as possible without too much frills. </p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/10/Time Sheet_2013-10-31_13-25-49.png" />
</p><h3>Minor Changes</h3><ul>
  <li>This version contains various fixes in time cockpit's Excel exporter.</li>
  <li>In earlier versions of time cockpit, the vacation list did not work offline when the number of items exceeded a certain amount. This was due to a limitation of SQL Server CE. In this version the vacation list should open fine on client and server not matter how much entries are contained.</li>
  <li>The User Note form has been localized to support English and German.</li>
</ul>