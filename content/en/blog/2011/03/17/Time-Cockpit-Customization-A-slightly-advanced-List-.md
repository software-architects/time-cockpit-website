---
layout: blog
title: Time Cockpit Customization -  A slightly advanced List 
teaser: The other day, a friend of mine asked me for a list containing the time he began work, when he went home, the hours he spent working and the seconds he was on break. At first I thought about implementing a python script to do it, but it turns out that our custom query language, TCQL, has enough power built-in to do it. We can therefore solve this by creating a list definition.
author: Philipp Aumayr
date: 2011-03-17
bannerimage: 
lang: en
permalink: /blog/2011/03/17/Time-Cockpit-Customization-A-slightly-advanced-List-
---

<p>The other day, a friend of mine asked me for a list containing the time he began work, when he went home, the hours he spent working and the seconds he was on break. At first I thought about implementing a python script to do it, but it turns out that our custom query language, TCQL, has enough power built-in to do it. We can therefore solve this by creating a list definition. We start off by defining our query:</p><h2>The Query</h2><p>
  <span lang="EN-US">The basis for every list definition is a TCQL query defining what data to fetch from the database. Our result set is based on the time sheet of the user, so I will first select all timesheets and continue from there:</span>
</p>{% highlight javascript %}From T In Timesheet Select T{% endhighlight %}<p>
  <span lang="EN-US">Depending on how many users are in your tenant, this might take a while to execute. First thing I notice in our productive system is that we get the timesheets from all users. Since we are only interested in our own timesheets, we can use the CurrentUser object in the Environment to restrict the results to that:</span>
</p>{% highlight javascript %}From T In Timesheet
Where T.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
Select T{% endhighlight %}<p>We still get quite a few time sheets, but that’s ok for now. So next is that we want to find the day and the month of every time sheet, since we will need that for our grouping logic. We therefore change our query to a Select New With type query:</p>{% highlight javascript %}From T In Timesheet
Where T.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
Order By :Year(T.BeginTime), :Month(T.BeginTime), :Day(T.BeginTime)
Select New With
{
    .Year = :Year(T.BeginTime),
    .Month = :Month(T.BeginTime),
    .Day = :Day(T.BeginTime)
}{% endhighlight %}<p>Since we have used time cockpit as our productive time tracking system since late 2009 (and therefore have timesheets dating back as far as that), I select the year, the month and the day of the BeginTime of the time sheet. Here’s a quick screenshot of what this looks like:</p><p>
  <img alt="selecting year, month and day from timesheets in TCQL" src="{{site.baseurl}}/content/images/blog/2011/03/customization_a_simple_list_1.png" class="     " />
</p><p>One thing you will immediately notice is that I get multiple rows per day. Now, in SQL you’d say “Easy, aggregate function, group by, done.” In time cockpit it’s even easier, we just have to specify an aggregate function, and TCQL automatically does the grouping by generating group expressions for all expressions that are not used within an aggregate function. We’ll try this by summing up the duration of the timesheets for each group:</p>{% highlight javascript %}From T In Timesheet
Where T.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
Order By :Year(T.BeginTime), :Month(T.BeginTime), :Day(T.BeginTime)
Select New With
{
    .Year = :Year(T.BeginTime),
    .Month = :Month(T.BeginTime),
    .Day = :Day(T.BeginTime),
    .WorkHours = Sum(T.DurationInHours)
}{% endhighlight %}<p>As you can see, this aggregates to a single row per year-month-day combination, as it is not used in an aggregate function (Sum here):</p><p>
  <img alt="Summing up the time of timesheets, grouping per day" src="{{site.baseurl}}/content/images/blog/2011/03/customization_a_simple_list_2.png" class="   mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused" />
</p><p>On a side note, you can see that I’m pretty close to my 300<sup>th</sup> day at work ;)</p><p>Back to my friends request, we need to figure out the time when I started working as well as when I went back home. There are two aggregate functions that come in really handy in this case: Min and Max. Min returns, well, the minimal element in the group, and Max, you could not have guess it, returns the maximal element: So how do we do this?</p>{% highlight javascript %}From T In Timesheet
Where T.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
Order By :Year(T.BeginTime), :Month(T.BeginTime), :Day(T.BeginTime)
Select New With
{
    .Year = :Year(T.BeginTime),
    .Month = :Month(T.BeginTime),
    .Day = :Day(T.BeginTime),
    .WorkHours = Sum(T.DurationInHours),
    .Begin = Min(T.BeginTime),
    .End = Max(T.EndTime)
}{% endhighlight %}<p>What you see is the Date of the timesheet, twice. In reality it’s a DateTime, but the time is not shown. Skeptical? Here’s for non-believers:</p>{% highlight javascript %}From T In Timesheet
Where T.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid
Order By :Year(T.BeginTime), :Month(T.BeginTime), :Day(T.BeginTime)
Select New With
{
    .Year = :Year(T.BeginTime),
    .Month = :Month(T.BeginTime),
    .Day = :Day(T.BeginTime),
    .WorkHours = Sum(T.DurationInHours),
    .Begin = Min(T.BeginTime),
    .End = Max(T.EndTime),
    .BeginStr = :FormatDateCanonical(Min(T.BeginTime), True),
    .EndStr = :FormatDateCanonical(Max(T.EndTime), True)
}{% endhighlight %}<p>And a picture says more than a thousand words, so:</p><p>
  <img alt="formatting date time to display something useful" src="{{site.baseurl}}/content/images/blog/2011/03/customization_a_simple_list_3.png" />
</p><p>I’ll keep the formatted versions for now until we have completed the query, but we will not need them in the final query, as the formatting will be handled by the list definition. So now that you know that I come to work late and go home early, let’s deal with work time and pauses:</p><p>My friend asked for the work time as well as the pauses. The work time is quite easy: It’s the sum of duration of all time sheets, as we have already used as an aggregate function. The total length of the pauses is the opposite, so it’s the time difference between the time we go home and the time we came to work minus the work time: Here’s what this looks like in TCQL:</p>{% highlight javascript %}From T In Timesheet 
Where T.UserDetail.UserDetailUuid = Environment.CurrentUser.UserDetailUuid 
Order By :Year(T.BeginTime), :Month(T.BeginTime), :Day(T.BeginTime) 
Select New With 
{ 
    .Year = :Year(T.BeginTime), 
    .Month = :Month(T.BeginTime), 
    .Day = :Day(T.BeginTime), 
    .WorkHours = Sum(T.DurationInHours), 
    .Begin = Min(T.BeginTime), 
    .End = Max(T.EndTime), 
    .Pauses = ((Max(T.EndTime) - Min(T.BeginTime)) * 24.0 - Sum(T.DurationInHours)) * 60, 
    .BeginStr = :FormatDateCanonical(Min(T.BeginTime), True), 
    .EndStr = :FormatDateCanonical(Max(T.EndTime), True) 
}{% endhighlight %}<p>
  <img alt="time cockpit TCQL calculating work time per day and the pauses in between" src="{{site.baseurl}}/content/images/blog/2011/03/customization_a_simple_list_4.png" />
</p><p>So, now we have everything we want in order to calculate the amount of work per day. Now, there’s a small thing to consider: time cockpit does support overlapping time sheets, by design. This means, that the amount of pause will be offset by the amount of overlapping time. Now we have all the data we need for our list, we'll go define a new list, which I will cover in my next blog entry. Hope that helped, thanks for reading!</p>