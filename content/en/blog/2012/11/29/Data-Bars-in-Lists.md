---
layout: blog
title: Data Bars in Lists
teaser: In our next version we will add a new column types for bars to lists. We will support three different types of bars -  DataBar, StackedDataBar and BulletGraph.
author: Karin Huber
date: 2012-11-29
bannerimage: 
lang: en
permalink: /blog/2012/11/29/Data-Bars-in-Lists
---

<p>In our next version we will add new column types to display bars in lists. We will support three different types of bars: data bars, stacked data bars and bullet graphs. The technical implementation is nearly done and now we are focusing on use cases for the new cell types. The following three examples show how each of the bars can be used.</p><p>We would love to hear from you where you would like to see the new data bars in time cockpit. Which lists are you using for managing projects, invoicing, etc.? Where would the bars help you doing your work? Join our groups in <a href="https://www.xing.com/net/timecockpit/ideen-vorschlage-feedback-468148/data-bars-in-listen-42821285/42821285/save/#42821285" target="_blank">Xing</a> and <a href="https://plus.google.com/u/0/100277396048641818309/posts/2ceH1z6TJeo" target="_blank">Google+</a> to share your ideas or send your feedback to <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><h2>Data Bar</h2><p>The data bar allows you to display one value. The following example shows the number of hours booked on a project in percent of planned hours. If the utilization exceeds 80% we change the color of the bar to yellow. Overbooked projects are red.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/11/DataBar.png" alt="Data bar" title="Data bar" />
</p><h2>Stacked Data Bar</h2><p>The stacked data bar allows you to display a fixed number of dimensions in different colors. The following example shows three values in the user list: the percentage of billable hours (blue), the percentage of non-billable hours (gray), and the percentage of hours that are not assigned to a project (red).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/11/StackedDataBar.png" alt="Stacked data bar" title="Stacked data bar" />
</p><h2>Bullet Graph</h2><p>The bullet graph allows you to compare three values: the actual value, the projected value and the comparative value. In the following example we show the actual hours spent on a project (blue), the planned hours for the project (gray), and the planned number of hours until today considering the start and end date of the project (black line).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/11/BulletGraph.png" alt="Bullet graph" title="Bullet graph" />
</p><h2>Configuration</h2><p>You will be able to use the new cell types in your own lists, too. The following examples show how we configured the lists above. The names of the cells and the properties may change in the final version.</p><h3>Data Bar</h3>{% highlight xml %} <DataBarCell Value="=Current.Utilization" Minimum="0" Maximum="125" Width="200" 
    NumberFormatPattern="'Utilization:' #,##0 '%'"
    ValueBrush="=:Iif(Current.Utilization > 100, '#d24b1e', :Iif(Current.Utilization > 80, '#ffcc00', '#25a0da'))" 
    Header="Hours Spent [%]" />{% endhighlight %}<h3>Stacked Data Bar</h3>{% highlight xml %} <StackedDataBarCell Minimum="0" Maximum="100" Width="250" NumberFormatPattern="0.00 '%'" Header="Billable / Not Billable / No Project Assigned">
    <StackedDataBarItem Value="=Current.HoursBillable / (Current.HoursBillable + Current.HoursNotBillable + Current.HoursWithoutProject) * 100" />
    <StackedDataBarItem Value="=Current.HoursNotBillable / (Current.HoursBillable + Current.HoursNotBillable + Current.HoursWithoutProject) * 100" />
    <StackedDataBarItem Value="=Current.HoursWithoutProject / (Current.HoursBillable + Current.HoursNotBillable + Current.HoursWithoutProject) * 100" ValueBrush="#d24b1e" />
 </StackedDataBarCell>{% endhighlight %}<h3>Bullet Graph</h3>{% highlight xml %} <BulletGraphCell Value="=Current.SpentHours" ProjectedValue="=Current.BudgetInHours" ComparativeValue="=Current.PlannedHoursUntilToday"
    Minimum="0" Maximum="1000" Width="200" 
    NumberFormatPattern="0.00"
    Header="Hours Spent" />{% endhighlight %}<h2>Limitations</h2><p>There will be some limitations in the first version:</p><ul>
  <li>Minimum and maximum value cannot be calculated automatically depending on the values. When defining a list you have to specify valid boundaries.</li>
  <li>The bars cannot be displayed in group headers.</li>
</ul><h2>We Need Your Feedback!</h2><p>Tell us where you would like to see the new data bars in time cockpit. Join our groups in <a href="https://www.xing.com/net/timecockpit/ideen-vorschlage-feedback-468148/data-bars-in-listen-42821285/42821285/save/#42821285" target="_blank">Xing</a> and <a href="https://plus.google.com/u/0/100277396048641818309/posts/2ceH1z6TJeo" target="_blank">Google+</a> to share your ideas or send your feedback to <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p>