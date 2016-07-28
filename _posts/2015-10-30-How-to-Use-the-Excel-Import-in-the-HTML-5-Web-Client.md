---
layout: blog
title: How to Use the Excel Import in the HTML 5 Web Client
excerpt: Time cockpit contains a powerful importer for Excel and CSV files. You might have already used it in time cockpit's full client. This month we added the Excel importer to the new HTML5 client. In this article we describe how it works.
author: Michael Kubitschka
date: 2015-10-30
bannerimage: /content/images/blog/2015/09/check-importer-results.png
lang: en
tags: [About]
permalink: /blog/2015/10/30/How-to-Use-the-Excel-Import-in-the-HTML-5-Web-Client
---

<p>In this article we show you how to work with time cockpit's Excel importer in the new HTML 5 web client. If you wonder about for how to use the importer to your advantage, take a look at the article <a href="~/blog/2015/10/30/Why-An-Excel-Import-Is-Still-Sexy" target="_blank">Why an Excel Import Is Still Sexy</a><strong>.</strong></p><p class="showcase">Please be aware that the current version of the Excel importer does not allow to create your custom import definitions. For now, you still need the time cockpit full client for that. <a href="https://help.timecockpit.com/?topic=html/ee560e49-e503-4d80-9167-2e6533f50dbe.htm" target="_blank">Read more about how to create import definitions ...</a></p><h2>Navigate to Your Import Definitions</h2><p>The following figure shows the default menu structure of time cockpit. If you don’t find the link <code>Import Definitions</code> in your menu structure, you most likely have customer specific adjustments in your time cockpit. Please contact your time cockpit administrator where to find the link or drop us a mail at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We are glad to help.</p><p>If you have a standard installation of time cockpit, you should find the menu under <code>MANAGEMENT --&gt; Import Definitions.</code></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/find-import-definitions.png" />
</p><h2>Find Your Import Definition
<br /></h2><p>When you click I<code>mport Definitions</code> you will be presented with a list of all available import definitions created with the time cockpit full client. Click I<code>mport</code> for the import definition you want to use and start the wizard that guides you through the import process.</p><p>
  <strong>
    <img src="{{site.baseurl}}/content/images/blog/2015/09/click-import-hyperlink.png" />
  </strong>
</p><h2>Download an Empty Sample File</h2><p>In the import dialog you can still change the import definition in the drop down list. When you have decided for the correct import definition, you can click <code>Download empty sample file</code>. time cockpit will generate an empty sample file that bases your selected import definition. The download will save the empty template file to your hard disk.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/download-import-definition.png" />
</p><h2>Fill the Sample File With Data</h2><p>Open the sample file that you downloaded in the previous step and fill it with data to be inserted or updated. Don’t forget to fill in the required fields. In this example ProjectCode, ProjectName, Customer, Billable and FixedPrice are mandatory (mandatory fields of <code>Project</code>).</p><p class="showcase">Since the importer uses time cockpit's data access layer, all mandatory fields and validation rules are checked during the import. It is not possible to import records that do not conform to validation rules and mandatory fields defined in time cockpit.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/fill-in-template.png" />
</p><h2>Upload the File
<br /></h2><p>When you have finished adding/editing data in the Excel file, you can click <code>Select files...</code> to upload your Excel file. Alternatively, you can also drag and drop your file to the "Select files..." area. </p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/select-excel-file.png" />
</p><h2>Test Your Import</h2><p>Since an import usually consists of a larger amount of records, time cockpit offers you the possibility to test your import. If you activate the option <code>Test import</code> and click the button Test Data, your data will not be saved in time cockpit. If you don’t want to perform a test run, disable the option and start your import.</p><p class="showcase">We advise you to always test your import before you perform the actual import. </p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/test-import.png" />
</p><p>Check the results of the test import. If the test was successful start the import using the button <code>Import Data Now</code>. If your test import was not successful you need to go through the records in your Excel file and correct them to correspond to the rules defined in time cockpit.</p><p>The following figure shows you how time cockpit communicates errors that occurred during an import. It exactly tells you in which row and column an error occurred and what the exact error was. In most cases, you will be able to correct the error in your Excel file and retry the import until the import finishes successfully.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/import-with-errors.png" />
</p><h2>Import Your File</h2><p>If your test import was successful, you can safely import your Excel file. Please note that if your (test) import was successful, time cockpit will show you how much records in time cockpit have been inserted and updated.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/test-successful.png" />
</p><h2>Check the Results</h2><p>Check the results of the import. If the import was successful you will get the message as shown in the picture. If not you will get an error description (e.g. incorrect format or missing required fields)</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/check-importer-results.png" />
</p><p>If you import was successful, you should see the records in your Excel file in the corresponding tables of time cockpit.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/09/import-successful.png" />
</p><h2>Further Reading</h2><ul>
  <li>
    <a href="~/blog/2015/10/30/Why-An-Excel-Import-Is-Still-Sexy" target="_blank">Why an Excel Import Is Still Sexy</a>
  </li>
  <li>
    <a href="https://help.timecockpit.com/html/ee560e49-e503-4d80-9167-2e6533f50dbe.htm">Online documentation</a>
  </li>
  <li>
    <a href="~/blog/2014/08/29/Compound-Keys-in-Excel-Import">Importer improvements</a>
  </li>
  <li>
    <a href="~/blog/2015/06/29/How-to-Automate-Time-Cockpit%E2%80%99s-Importer">How to automate the importer</a>
  </li>
</ul>