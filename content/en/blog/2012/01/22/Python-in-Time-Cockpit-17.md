---
layout: blog
title: Python in Time Cockpit 1.7
teaser: With the release of time cockpit 1.7 we are happy to ship IronPython 2.7.1 as our scripting environment. This release significantly simplifies the use of LINQ by fixing an issue we identified and reported about ten months ago. It is now possible to import, transparently use and chain together calls to extension methods which LINQ heavily relies on.
author: Simon Opelt
date: 2012-01-22
bannerimage: 
lang: en
permalink: /blog/2012/01/22/Python-in-Time-Cockpit-17
---

<p>With the release of time cockpit 1.7 we are happy to ship <a href="http://ironpython.codeplex.com/releases/view/62475" target="_blank">IronPython 2.7.1</a> as our scripting environment. This release significantly simplifies the use of <a href="http://msdn.microsoft.com/en-us/library/bb397926.aspx" target="_blank">LINQ</a> by fixing an <a href="http://ironpython.codeplex.com/workitem/30379" target="_blank">issue</a> we identified and reported about ten months ago. It is now possible to import, transparently use and chain together calls to <a href="http://msdn.microsoft.com/en-us/library/bb383977.aspx" target="_blank">extension methods</a> which LINQ heavily relies on.</p><p>Just add the following lines to your script to use methods typically required for processing <a href="http://msdn.microsoft.com/en-us/library/system.collections.generic.aspx" target="_blank">.net collections</a>:</p>{% highlight javascript %}clr.AddReference("System.Core")
import System
clr.ImportExtensions(System.Linq){% endhighlight %}<p>The <a href="~/blog/2010/03/31/Using-LINQ-in-IronPython-26">example I previously wrote</a> about can be simplified to look like the following:</p>{% highlight javascript %}clr.AddReference("System.Core")
import System
clr.ImportExtensions(System.Linq)

# get all projects
projects = Context.Select("From P In Project Select P")

# filter (in memory) all projects with a name beginning with T
resultProjectsWithT = projects.Where(lambda p: p.ProjectName.StartsWith("T")).ToList[EntityObject]()

# sort a collection
resultSorted = resultProjectsWithT.OrderBy(lambda p: p.StartDate).ToList[EntityObject]()

# pretty print a list of project names
print String.Join(", ", resultSorted.Select(lambda p: p.ProjectName))

# determine a minimum and maximum
print resultSorted.Min[EntityObject, Nullable[DateTime]](lambda p: p.StartDate), resultSorted.Max[EntityObject, Nullable[DateTime]](lambda p: p.StartDate){% endhighlight %}<p>Note that all the calls to extension methods (e.g. the use of Enumerable.Where or Enumerable.Select) can now be written as expected. The calls to ToList[EntityObject] are only required to correctly type the results for showing them in a UI result grid.</p><p>Please also note that there are still situations where the dynamic nature of Python and our data layer requires to include some type hints to determine the correct method calls but these situations are quite rare now.</p>