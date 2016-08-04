---
layout: blog
title: What's New In Version September 2013
teaser: This month we continue the spate of performance and productivity improvements for time cockpit. We have focused on lists and the customization module.   Time cockpit now provides shortcuts for opening forms not only as dialogs but also as tabs. This makes it much easier to deal with large forms as they can use nearly the entire screen. Additionally you can open a list and a form side by side so you still see the overview in the list while editing a data row. Such scenarios are very helpful especially for typical back office work like preparing timesheet data for invoicing, effort analysis in project management, etc.
author: Karin Huber
date: 2013-08-29
bannerimage: 
lang: en
permalink: /blog/2013/08/29/Whats-New-In-Version-September-2013
---

<p>This month we continue the spate of performance and productivity improvements for time cockpit. We have focused on lists and the customization module:</p><ul>
  <li>Time cockpit now provides shortcuts for opening forms not only as dialogs but also as tabs. This makes it much easier to deal with large forms as they can use nearly the entire screen. Additionally you can open a list and a form side by side so you still see the overview in the list while editing a data row. Such scenarios are very helpful especially for typical back office work like preparing timesheet data for invoicing, effort analysis in project management, etc. <a href="#lists">Read more ...</a></li>
  <li>We have completely changed the reload logic for lists to provide much better performance in this new time cockpit version. In scenarios where you have to edit data rows in a list record by record we measured runtime improvements of up to 69% (for saving a row) and improvements in terms of transferred data of up to 96%. <a href="#perf">Read more ...</a></li>
</ul><p>
  <strong>The new version September 2013 (1.16) is downwards compatible to version March 2013 (1.10) and later.</strong> You can use all of these versions in a single account simultaneously.</p><h2>
  <a id="lists" name="lists" class="mceItemAnchor"></a>New Options to Arrange Lists and Forms</h2><p>Time cockpit allows you to arrange tabs in various ways. You can open multiple tabs in full-screen mode so that only one tab is visible at a time. You can arrange tabs side by side or one upon the other.</p><p>In previous releases, dialogs have been different. They have not been part of tabs. In the new version you can now open forms as tabs. There are three options when opening a data row in its associated form:</p><ul>
  <li>
    <strong>Double-click</strong> a row or click on a link: The list or form will be opened as a dialog window.</li>
  <li>Press <strong>Ctrl</strong> while double-clicking a row or clicking on a link: The list or form will be opened in a new full-screen tab.</li>
  <li>Press <strong>Alt</strong> while double-clicking a row or clicking on a link: The list or form will be opened to the right of the currently active tab.</li>
</ul><p>The following gallery illustrates how the new navigation feature works. Click to enlarge.</p><div>
  <function name="Composite.Media.ImageGallery.Slimbox2">
    <param name="MediaFolder" value="MediaArchive:d282ff01-ec5c-4c41-b58f-36fdf9992715" />
    <param name="ThumbnailMaxWidth" value="175" />
  </function>
</div><iframe width="768" height="576" src="http://www.youtube.com/embed/JHGCDxm-Be0?rel=0" frameborder="0" allowfullscreen="true"></iframe><p>We also introduced a new keyboard shortcut for tab handling: You can now close all tabs and forms with <strong>Ctrl + W</strong>.</p><h2>
  <a id="perf" name="perf" class="mceItemAnchor"></a>Performance in Lists</h2><p>In previous versions of time cockpit we reloaded all items whenever you changed a data row (insert, update, or delete). In the new version we significantly enhanced performance by selectively reloading only modified items:</p><ul>
  <li>
    <strong>Add a new item</strong>
    <br />
 When saving and closing the form with the new item, only the new item is reloaded from the database and added to the existing list. If no column header was clicked for sorting, the new item is added at the bottom of the list. If a sort criteria is specified, the new item is added at the right position. The new item is automatically selected.</li>
  <li>
    <strong>Edit an item</strong>
    <br />
  When saving and closing the form with the modified item, only the modified item is reloaded from the database and updated in the existing list.</li>
  <li>
    <strong>Remove an item
<br /></strong> When an item is removed, nothing is loaded from the database. The item is just removed from the already loaded list.</li>
</ul><p>We ran tests with a list of time sheet entries in our own productive database comparing the August and September versions. For this we opened the list of time sheet entries on the server and clicked on "show all rows" to get all the time sheet entries for one user and one year (1,356 items). Then we opened a time sheet entry, modified it and saved it so that the list of time sheet entries was refreshed.</p><p>To measure the results we used <a href="http://www.wireshark.org/" title="Wireshark" target="_blank">Wireshark</a>. We captured all TCP traffic with the underlying database. In the following table you can see the number of packets, the time in seconds from the first request to the last response and the size of sent and received packets in KB. You can see that both runtime and transferred bytes were enhanced <span lang="EN-US">significantly</span>.</p><table class="infoTable">
  <tbody>
    <tr>
      <th>
        <br />
      </th>
      <th colspan="2">August 2013</th>
      <th colspan="4">September 2013</th>
    </tr>
    <tr>
      <th>
        <br />
      </th>
      <th>Load 1356 Rows</th>
      <th>Save Time Sheet Entry</th>
      <th>Load 1356 Rows</th>
      <th>
        <br />
      </th>
      <th>Save Time Sheet Entry</th>
      <th>
        <br />
      </th>
    </tr>
    <tr class="valueRow">
      <td class="colHeader">Packets</td>
      <td>620</td>
      <td class="colGroupEnd">628</td>
      <td>609</td>
      <td>-2%</td>
      <td>22</td>
      <td>-96%</td>
    </tr>
    <tr class="valueRow">
      <td class="colHeader">Time</td>
      <td>1.86 s</td>
      <td class="colGroupEnd">2.16 s</td>
      <td>1.60 s</td>
      <td>-14%</td>
      <td>0.68 s</td>
      <td>-69%</td>
    </tr>
    <tr class="valueRow">
      <td class="colHeader">Size</td>
      <td>541.21 KB</td>
      <td class="colGroupEnd">544.41 KB</td>
      <td>540.46 KB</td>
      <td>-0%</td>
      <td>20.90 KB</td>
      <td>-96%</td>
    </tr>
  </tbody>
</table><p>Note that the time measurements may slightly be distorted by network bandwidth fluctuations as our database runs in the cloud and the client uses public Internet to connect.</p><h2>Performance in Customization Module</h2><p>For the customization module we have improved the time to load the time cockpit meta data model from the database. This has an impact on the following tasks:</p><ul>
  <li>Switch from client to server</li>
  <li>Edit a model entity / list / form / action</li>
  <li>Save a model entity / list / form / action</li>
  <li>Call GetWritableModel() in Python scripts (see <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" title="Scripting in time cockpit" target="_blank">Scripting</a> in time cockpit help)</li>
</ul><p>In the following table you will find the results for editing a model entity and calling GetWritableModel() in Python. Again we used <a href="http://www.wireshark.org/" title="Wireshark" target="_blank">Wireshark</a> to capture all TCP traffic with our database server. In our case the performance did not really change, but we managed to halve the number of bytes of the sent and received packets. For internet connections with lower bandwidth this should make a difference.</p><table class="infoTable">
  <tbody>
    <tr>
      <th>
        <br />
      </th>
      <th colspan="2">August 2013</th>
      <th colspan="4">September 2013</th>
    </tr>
    <tr>
      <th>
        <br />
      </th>
      <th>Edit Model Entity</th>
      <th>GetWritableModel()</th>
      <th>Edit Model Entity</th>
      <th>
        <br />
      </th>
      <th>GetWritableModel()</th>
      <th>
        <br />
      </th>
    </tr>
    <tr class="valueRow">
      <td class="colHeader">Packets</td>
      <td>1443</td>
      <td class="colGroupEnd">1403</td>
      <td>669</td>
      <td>-54%</td>
      <td>614</td>
      <td>-56%</td>
    </tr>
    <tr class="valueRow">
      <td class="colHeader">Time</td>
      <td>4.27 s</td>
      <td class="colGroupEnd">3.11 s</td>
      <td>4.22 s</td>
      <td>-1%</td>
      <td>3.86 s</td>
      <td>+24%</td>
    </tr>
    <tr class="valueRow">
      <td class="colHeader">Size</td>
      <td>1265 KB</td>
      <td class="colGroupEnd">1214 KB</td>
      <td>598 KB</td>
      <td>-53%</td>
      <td>547 KB</td>
      <td>-55%</td>
    </tr>
  </tbody>
</table><p>Note that the time measurements may slightly be distorted by network bandwidth fluctuations as our database runs in the cloud and the client uses public Internet to connect.<br /></p><h2>Google Latitude</h2><p>Heavy-heartedly we have removed the location history feature from the full client (<a href="http://www.timecockpit.com/blog/2013/07/18/Google-Latitude-will-be-Retiring-on-August-9th" target="_blank">read more about the reasons</a>). We hope that we will soon be able to integrate an appropriate replacement. At the moment we are evaluating alternatives.</p>