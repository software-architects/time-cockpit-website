---
layout: blog
title: What's New in Version May 2016
teaser: This month we have mainly focused on two topics -  date / time input and extensibility of the HTML5 client. The improvements for date and time input are ready to use in the new version. There are lots of shortcuts now to enter date and time values. Making time cockpit ready for your extensions will take us another month until we are ready to ship this feature - then you will be able to add your own HTML5 apps to the time cockpit menu.
author: Karin Huber
date: 2016-05-01
bannerimage: /content/images/blog/2016/04/time-cockpit-may-2016.png
lang: en
ref: /de/blog/2016/05/01/Was-ist-neu-in-der-Version-Mai-2016
permalink: /blog/2016/05/01/Whats-New-in-Version-May-2016
---

<h2 xmlns="http://www.w3.org/1999/xhtml">Overview
		</h2><p xmlns="http://www.w3.org/1999/xhtml">This month we have mainly focused on two topics: date / time input and extensibility of the HTML5 client. The improvements for date and time input are ready to use in the new version. We provide lots of shortcuts now to enter date and time values. Making time cockpit ready for your extensions will take us another month until we are ready to ship this feature - then you will be able to add your own HTML5 apps to the time cockpit menu.
		</p><p xmlns="http://www.w3.org/1999/xhtml">For the first time since April 2013 we do not ship a new version of the full client on the first day of the month. As more and more time cockpit customers are using the new <a href="https://web.timecockpit.com" title="time cockpit HTML5 client" target="_blank">HTML5 client</a> (still in preview mode), we put more resources into finishing the HTML5 client. Of course we will keep maintaining the full client and shipping bug fixes when necessary.
		</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="#date-input">Date and Time Input</a>
  </li>
  <li>
    <a href="#tooltips">Tooltips in Calendar</a>
  </li>
  <li>
    <a href="#permissions">Permission Improvements</a>
  </li>
  <li>
    <a href="#extensibility">Extensibility of the HTML5 Client</a>
  </li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="date-input" id="date-input" class="mce-item-anchor"></a>Date and Time Input
		</h2><p xmlns="http://www.w3.org/1999/xhtml">This month we have made it much easier to enter date and time values. We offer several shortcuts to enter a valid date now.
		</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/04/date-and-time-input.gif" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Date Input <br /></h3><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Day only</strong>: if you only enter one or two digits, we assume that you want to select this day in the current month.
		</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Input
					</th>
      <th width="100">Result
					</th>
    </tr>
    <tr>
      <td>1
					</td>
      <td>4/1/2016
					</td>
    </tr>
    <tr>
      <td>01
					</td>
      <td>4/1/2016
					</td>
    </tr>
    <tr>
      <td>25
					</td>
      <td>4/25/2016
					</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Day and month</strong>: if you enter three or four digits with or without separator time cockpit interprets them as day and month in the current year.
		</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Input
					</th>
      <th width="100">Result
					</th>
    </tr>
    <tr>
      <td>501
					</td>
      <td>5/1/2016
					</td>
    </tr>
    <tr>
      <td>0501
					</td>
      <td>5/1/2016
					</td>
    </tr>
    <tr>
      <td>5/1
					</td>
      <td>5/1/2016
					</td>
    </tr>
    <tr>
      <td>05/01
					</td>
      <td>5/1/2016
					</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Day, month and year</strong>: if you enter five to eight digits with or without separator time cockpit interprets them as day and month and year.
		</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Input
					</th>
      <th width="100">Result
					</th>
    </tr>
    <tr>
      <td>50116
					</td>
      <td>5/1/2016
					</td>
    </tr>
    <tr>
      <td>05012016
					</td>
      <td>5/1/2016
					</td>
    </tr>
    <tr>
      <td>5/1/16
					</td>
      <td>5/1/2016
					</td>
    </tr>
    <tr>
      <td>05/01/2016
					</td>
      <td>5/1/2016
					</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Additional shortcuts</strong>: to make input even faster we offer three shortcuts for the current day, the last day of the current month and the last day of the previous month.
		</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Input
					</th>
      <th width="250">Result
					</th>
    </tr>
    <tr>
      <td>t
					</td>
      <td>4/29/2016 (current day)
					</td>
    </tr>
    <tr>
      <td>p
					</td>
      <td>3/31/2016 (last of previous month)
					</td>
    </tr>
    <tr>
      <td>n
					</td>
      <td>4/30/2016 (last of current month)
					</td>
    </tr>
  </tbody>
</table><h3 xmlns="http://www.w3.org/1999/xhtml">Time Input
		</h3><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Hours only</strong>: if you enter one or two digits, they are used as hours for the time to input.
		</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Input
					</th>
      <th width="100">Result
					</th>
    </tr>
    <tr>
      <td>9
					</td>
      <td>9:00 AM
					</td>
    </tr>
    <tr>
      <td>09
					</td>
      <td>9:00 AM
					</td>
    </tr>
    <tr>
      <td>09 AM
					</td>
      <td>9:00 AM
					</td>
    </tr>
    <tr>
      <td>09 PM
					</td>
      <td>9:00 PM
					</td>
    </tr>
    <tr>
      <td>21
					</td>
      <td>9:00 PM
					</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Hours and minutes</strong>: if you enter three of four digits, they are interpreted as hours and minutes.
		</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Input
					</th>
      <th width="100">Result
					</th>
    </tr>
    <tr>
      <td>930
					</td>
      <td>9:30 AM
					</td>
    </tr>
    <tr>
      <td>0930
					</td>
      <td>9:30 AM
					</td>
    </tr>
    <tr>
      <td>0930 AM
					</td>
      <td>9:30 AM
					</td>
    </tr>
    <tr>
      <td>0930 PM
					</td>
      <td>9:30 PM
					</td>
    </tr>
    <tr>
      <td>2130
					</td>
      <td>9:30 PM
					</td>
    </tr>
    <tr>
      <td>9:30
					</td>
      <td>9:30 AM
					</td>
    </tr>
    <tr>
      <td>09:30
					</td>
      <td>9:30 AM
					</td>
    </tr>
    <tr>
      <td>21:30
					</td>
      <td>9:30 PM
					</td>
    </tr>
  </tbody>
</table><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="tooltips" id="tooltips" class="mce-item-anchor"></a>Tooltips in Calendar
		</h2><p xmlns="http://www.w3.org/1999/xhtml">We already had tooltips in the time tracking calendar, but they were not very pretty and even worse did not render correctly in some browsers. So we have revised the layout for tooltips this month. They show the description and the footer of the time sheet entry as configured in the selected <a href="https://help.timecockpit.com/?topic=html/95b1ce59-c4ec-461a-ba9b-cb978295c3de.htm" title="Formatting profiles in time tracking calendar" target="_blank">formatting profile</a>.<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/04/tooltips.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="permissions" id="permissions" class="mce-item-anchor"></a>Permission Improvements
		</h2><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit has issues with insert and update permissions when creating new items. In some scenarios it was not possible to create new items, even if a user had insert-permission for this item. In the new versions insert and update permissions are handled correctly. You will see failing permissions at the bottom of the edit form. Hover over the red area that displays the total number of error messages to see a list of all errors.
		</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/04/write-permission.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="extensibility" id="extensibility" class="mce-item-anchor"></a>Extensibility of the HTML5 Client
		</h2><p xmlns="http://www.w3.org/1999/xhtml">This month we have put a lot of effort in allowing you to write custom modules for time cockpit. You will be able to add them to the menu and they will be displayed in the whole area below the menu equally to the time sheet calendar or to lists.
		</p><p xmlns="http://www.w3.org/1999/xhtml">We are not ready to ship this feature this month, but we would be very happy to hear about your needs. If you are planning to extend time cockpit or you want us to write custom modules for your company, please contact us at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We are very interested to hear what you need to make the most out of time cockpit.
		</p>