---
layout: blog
title: What's New in Version July 2016
teaser: More and more users are using the new HTML5 client of time cockpit. We love that  - -) To smoothen the transition, we did a lot of polishing in the HTML5 user interface this month. Examples are better keyboard handling, better performance of the forms engine and auto-sizing of grid columns. In this blog article we describe all enhancements that we rolled out this month.
author: Karin Huber
date: 2016-06-29
bannerimage: /content/images/blog/2016/06/time-cockpit-july-2016.png
lang: en
permalink: /blog/2016/06/29/Whats-New-in-Version-July-2016
---

<h2 xmlns="http://www.w3.org/1999/xhtml">Overview</h2><p xmlns="http://www.w3.org/1999/xhtml">More and more users are using the new HTML5 client of time cockpit. We love that :-) To smoothen the transition, we did a lot of polishing in the HTML5 user interface this month. Examples are better keyboard handling, better performance of the forms engine and auto-sizing of grid colums. In this blog article we describe all enhancements that we rolled out this month.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="#combobobx">Combo Box Improvements</a>
  </li>
  <li>
    <a href="#autosize">Auto Size Columns</a>
  </li>
  <li>
    <a href="#performance">Performance in Forms</a>
  </li>
  <li>
    <a href="#defaultview">Open in Print View</a>
  </li>
  <li>
    <a href="#timeoff">Show Time-Off Entries Without Description</a>
  </li>
  <li>
    <a href="#guid">Guid Property</a>
  </li>
</ul><p class="highlighted" xmlns="http://www.w3.org/1999/xhtml">We have put all effort in the new HTML5 client so there is no new Full Client available this month.</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="combobobx" id="combobobx" class="mce-item-anchor"></a>Combo Box Improvements</h2><p xmlns="http://www.w3.org/1999/xhtml">This month, we have made the input behavior of the HTML5 combo box as similar as possible to the full client. One of the major differences was that pressing TAB cleared the input instead of selecting the first available item. In the new version we have fixed this issue. When you type in the combo box, the result shown below is filtered according to your input. Now, you can press TAB or ENTER to select the first item. Alternatively, you can still use the cursor keys to select one of the items.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/06/combobox-tab.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="autosize" id="autosize" class="mce-item-anchor"></a>Auto Size Columns</h2><p xmlns="http://www.w3.org/1999/xhtml">The new version is now able to determine the size of the content in grid columns. When opening a grid, all columns that do not have an explicit width, are sized according to the content of the rows visible on the first page. The following screenshots show the customer list for the old and for the new version. As you can see, the columns are now fitted to the content.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/06/auto-fit-columns.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="performance" id="performance" class="mce-item-anchor"></a>Performance in Forms</h2><p xmlns="http://www.w3.org/1999/xhtml">In the past, forms in the HTML5 client were notably slower in customer scenarios with complex data models. Starting this month, the HTML5 form engine is as smart as time cockpit's full client. You should now see comparable performance.</p><p xmlns="http://www.w3.org/1999/xhtml">Do you want to know the details? Here they are: If you have <a href="https://help.timecockpit.com/?topic=html/29feb0d4-900b-7882-7936-4bdfd6958248.htm" target="_blank">model entities</a> with lots of relations and a deep relation hierarchy, you may have had performance problems when opening forms. For these scenarios we already have an <a href="https://help.timecockpit.com/?topic=html/75aacc52-a75f-403e-8010-7ed2ee36a637.htm" target="_blank">include clause</a> in the form definition, that helps to narrow down the relations, that have to be loaded for validations and permissions. In the new version, this include clause is respected in the HTML5 client, which improves the performance vor validating complex entities a lot.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/06/include-clause.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="defaultview" id="defaultview" class="mce-item-anchor"></a>Open in Print View</h2><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit allows to add multiple views to one list. Beside the usual grid view, you can add custom report views. In the background, additional views are <a href="https://help.timecockpit.com/?topic=html/79CD8953-EC83-4C9A-881D-3F054122D4D5.htm" target="_blank">Reporting Services reports</a> which can be displayed as PDF or downloaded as Word or Excel files. In list views, you can choose if you want to see the <a href="https://help.timecockpit.com/?topic=html/F93A6802-1F67-4D03-A63C-0BF0995D90B7.htm" target="_blank">standard print view</a> (an automatically generated print view of the list) or a <a href="https://help.timecockpit.com/?topic=html/6EE451F4-D459-4117-8C5F-491C2CB03D00.htm" target="_blank">custom report</a>. In our default data model there is e.g. a Time Report that shows all working hours for a user within a month:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/06/time-report.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">In the past, every link in time cockpit (e.g. in the menu, in a list) opened the grid view. If you wanted a print view, you had to manually switch to it. This manual step can now be removed. The new version allows to specify direct links to a view of a list. For that, we have introduced a new XML namespace <code>web</code> in our <code>NamedList</code> and <code>NamedForm</code> configuration language.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">Properties with this namespace only work in the HTML5 client and will be ignored in the full client.</p><p xmlns="http://www.w3.org/1999/xhtml">We have added three new properties to the <em>NamedListConfiguration</em> in hyperlinks:</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>web:View</td>
      <td>string</td>
      <td>The name of the report that should be displayed. If no view is specified, the default view for the list is displayed.</td>
    </tr>
    <tr>
      <td>web:Format</td>
      <td>string</td>
      <td>PDF (default if View is specified), Excel or Word</td>
    </tr>
    <tr>
      <td>web:Raw</td>
      <td>boolean</td>
      <td>Specifies, if the report is embedded in the HTML5 client or if the raw PDF, Excel or Word should be opened.</td>
    </tr>
  </tbody>
</table>{% highlight javascript %}&lt;List EditModelEntityName="APP_UserDetail" EditProperty="ObjectUuid" AllowDelete="True" AllowEdit="True" 
xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data" 
xmlns:p="http://www.timecockpit.com/2009/ui/controls"
xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
mc:Ignorable="web" 
xmlns:web="http://www.timecockpit.com/2016/web/controls"&gt;
...
&lt;BoundCell ColSpan="2" Content="Time Report"&gt;
    &lt;BoundCell.Hyperlink&gt;
        &lt;Hyperlink Title="Time Report"&gt;
            &lt;Hyperlink.NavigateContent&gt;
                &lt;p:NamedListConfiguration ListName="APP_DefaultTimeReportList" 
                    web:View="APP_TimeReport" web:Format="PDF" web:Raw="True"&gt;
                    &lt;p:NamedListConfiguration.Parameters&gt;
                        &lt;Parameter Name="UserDetail" Value="=Current.APP_UserDetailUuid" /&gt;
                    &lt;/p:NamedListConfiguration.Parameters&gt;
                &lt;/p:NamedListConfiguration&gt;
            &lt;/Hyperlink.NavigateContent&gt;
        &lt;/Hyperlink&gt;
    &lt;/BoundCell.Hyperlink&gt;
&lt;/BoundCell&gt;
...
&lt;/List&gt;{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="timeoff" id="timeoff" class="mce-item-anchor"></a>Show Time-Off Entries Without Description</h2><p xmlns="http://www.w3.org/1999/xhtml">Last month, we have introduced time-off items in the time tracking calendar. They worked well in most scenarios, but when the description of a time-off item like vacations was empty, the item was not displayed in the time tracking calender. We have fixed this issue in the new version. Now, we show a default text for every time-off item without description.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/06/empty-vacation.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="guid" id="guid" class="mce-item-anchor"></a>Guid Property</h2><p xmlns="http://www.w3.org/1999/xhtml">The new version now supports the <a href="https://help.timecockpit.com/?topic=html/16d5bb46-fa8a-83af-8ea3-d5e5d2bcd94e.htm" target="_blank">GuidCell</a> in forms. It allows you the enter Guids in a textbox. You wonder why anybody would put a Guid on a time cockpit form? Some customers use Guids to identify related data in connected systems (e.g. ID of a customer imported from a CRM with interface to time cockpit). Administrators sometimes want to see these IDs in specific forms.</p>