---
layout: blog
title: Reporting with time cockpit and Microsoft Office Excel
author: Rainer Stropek
bannerimage: /images/tour/reporting/excel_export.png
permalink: /2012/09/30/Reporting-with-time-cockpit-and-Microsoft-Office-Excel
---

<p xmlns="http://www.w3.org/1999/xhtml">Microsoft Office Excel is the prevailing spreadsheet software today. Time cockpit accommodates this by offering powerful features for exporting data to Excel in the full client as well as in the online browser client. In this article you learn how you use them to implement reports based on time cockpit data. The article covers the following topics:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="#QuickExport">Quick Export</a> - export data to Excel with one click</li>
  <li>
    <a href="#ExportTemplates">Export Templates</a> - create advanced reports with time cockpit export templates</li>
  <li>
    <a href="#Scripting">Avanced Reporting With Scripting</a> - solve advanced reporting problems with time cockpit scripts</li>
  <li>
    <a href="#References">References</a> - links for further readings</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="QuickExport"></a>Quick Export</h2><p xmlns="http://www.w3.org/1999/xhtml">Let us start with the basics: You can export every list you see in time cockpit in Excel with a single click on the <em>Quick Export</em> ribbon button.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:ae6e4b81-289e-43f6-8492-855a3a8bad66" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">
  <em>Quick Export</em> will export all columns and rows of the list to Excel. The following picture shows the result of the quick export process of the time cockpit list shown above. Note the filter area in the upper left corner of the spreadsheet. It contains your filter criteria from time cockpit so that you could reproduce the export if necessary. You could attach such an export to e.g. an invoice that you send to your customer.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:5e28a207-3f46-49bb-b259-27174240c1bc" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">If you export a larger amount of data and you want to analyse it or create a more advanced report e.g. for project management, you might want to use <a href="http://office.microsoft.com/en-us/excel-help/create-or-delete-a-pivottable-or-pivotchart-report-HP010342375.aspx?CTT=3" title="Read more about Pivot Tables in the Microsoft Office help" target="_blank">Excel's Pivot Tables</a> for that. You have to save your quick export to a file and let your pivot table reference it. The following screenshot demonstrates, how you create a pivot table based on a time cockpit quick export file. Of course you can add multiple pivot tables or charts in a single Excel report even if they reference multiple time cockpit export files.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:485a72e6-aa44-4b3a-bf6e-171fc687c3d8" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">It becomes even easier to create additional pivot tables and charts once you have created your first pivot table from the quick export file. The reason for this is that Excel saves the connection (i.e. name of the folder and the file) for subsequent use.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:70f57820-ec24-4df1-8c53-3e60bc2f24da" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">It might happen that you want to create your report periodically. In this case you just have to run your exports in time cockpit again and refresh the Excel reporting sheet with your pivot tables. You can make your life easier by setting your data connections to <em>auto-refresh</em>:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:3dc0522b-9d06-405b-878a-16cb6b2bbb99" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="ExportTemplates"></a>Export Templates</h2><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit offers advanced support for reporting scenarios. As shown before, you could create your report by exporting data to Excel files and referencing them in a central report file with Excel pivot tables. As an alternative you can create a <em>template</em> file for exporting data from time cockpit. Here are the steps that you need to follow to create a template file:</p><ol xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a new Excel worksheet.</li>
  <li>Add template headers and formulas for the columns that you want time cockpit to export. Use the <em>Time Cockpit Query Language (TCQL)</em> for the formulas. If you want to learn more about TCQL, check the <em>References</em> section at the end of this article for related links to the time cockpit online help. The following screenshot shows an example of how you add the formulas to your template worksheet:
<br /><img src="{{site.baseurl}}/images/blog/2012/09/TcqlInExcel.png" alt="TCQL Formulas in the Template" title="TCQL Formulas in the Template" /></li>
  <li>After you specified all columns with their formulas, you have to mark the row with the formulas with the name <em>TemplateRow</em>. Note that <em>TemplateRow</em> must not contain the row with the column headers. If you change your template file afterwards and you need to change the definition of <em>TemplateRow</em>, you can use Excel's <em>Name Manager</em> (Ctrl + F3) for that. The following screenshot shows how you set the name in Excel:
<br /><img src="{{site.baseurl}}/images/blog/2012/09/TemplateRowInExcel.png" alt="Set the name of the cells with the TCQL formulas to TemplateRow." title="Set the name of the cells with the TCQL formulas to TemplateRow." /></li>
  <li>Add additional worksheets with e.g. pivot tables or charts. They can reference the template worksheet that you created in step 3. It is a good practise to reference the source without restricting the number of rows. This is necessary because the number of rows that you export from time cockpit may vary from export to export. The following screenshot shows how you create such a reference in Excel. Note that the Excel formula does only contain a column letter but no row restriction (i.e. <em>$A:$N</em> instead of <em>$A$1:$G$17</em>).
<br /><img src="{{site.baseurl}}/images/blog/2012/09/ReferencingTemplate.png" alt="Reference your template row without row limit as the number of exported data rows may vary from export to export." title="Reference your template row without row limit as the number of exported data rows may vary from export to export." /></li>
  <li>In most cases it is a good idea to enable auto-refreshing for the data connections (already described above).</li>
  <li>Save your template as a regular Excel <em>.xlsx</em> file. Note that you have to close the template file before you can use it in time cockpit.</li>
</ol><p xmlns="http://www.w3.org/1999/xhtml">Now that you have created your template file, you can use it in time cockpit when exporting data. The following screenshot shows how to do that. Note that time cockpit saves the template files that you have used in the past. In subsequent exports you just have to choose from the list of recently used template files. Did you recognize that the <em>Destination File</em> field is empty? If you leave it empty time cockpit will create a temporary file for you and will open it in Excel immediately.</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:723da6fa-5c15-4203-88c2-d9cb300b1c58" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">When you are done your report could look like this:</p><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:25014f19-5f95-4565-89ec-4f211b1d8ed0" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="GroupName" value=" page" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Currently the use of templates is only support in the time cockpit full client. In the online browser client you can only use the <em>Quick Export</em> function described above.</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="Scripting"></a>Advanced Reporting With Scripting</h2><p xmlns="http://www.w3.org/1999/xhtml">If your reporting needs go beyond of what you have seen above, you can use time cockpit's scripting functions. Here are some examples of what you can achieve with scripting concerning reporting:</p><ul class="checkList" xmlns="http://www.w3.org/1999/xhtml">
  <li>Automate the export process and e.g. send the resulting Excel sheets to project managers via email.</li>
  <li>Create custom Excel exports by using Excel's automation API from time cockpit Python scripts.</li>
  <li>Add more complex business logic to calculate certain KPIs in order to include them into your reports.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">The time cockpit online help contains samples for accessing the Excel export function from time cockpit scripts. The <em>References</em> section below contains links to the  chapters of the online help dealing with the topics mentioned in the list above.</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a id="References"></a>References</h2><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>time cockpit online help

<ul><li><a href="http://help.timecockpit.com/index.aspx?topic=/html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" title="Link to time cockpit online help" target="_blank">time cockpit Query Language (TCQL)</a></li><li><a href="http://help.timecockpit.com/index.aspx?topic=html/e8bb04e7-3cd7-4161-9ca4-47a718e3c1b0.htm" title="Link to time cockpit online help" target="_blank">HowTo: Export Data To Microsoft Excel</a><br /></li><li><a href="http://help.timecockpit.com/index.aspx?topic=html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" title="Link to time cockpit online help" target="_blank">Automating Scripts</a></li></ul></li>
  <li>
    <a href="http://msdn.microsoft.com/en-us/library/office/ff194068.aspx" title="Excel Object Model Reference on MSDN" target="_blank">Excel Object Model Reference</a> (MSDN)</li>
</ul>