---
layout: blog
title: Using LINQ in IronPython 2.6
excerpt: Up until (and including) our beta 2 release time cockpit used IronPython 2.4 for executing scripts. When creating complex scripts we often had to iterate over collections and check for certain conditions or concatenate collections of strings. Whenever possible we try to solve such tasks using TCQL when selecting the source data from the data layer to pass most of the work on to the database.
author: Simon Opelt
date: 2010-03-31
bannerimage: 
bannerimagesource: 
lang: en
tags: [Iron Python]
permalink: /blog/2010/03/31/Using-LINQ-in-IronPython-26
---

<h2>Update</h2><p>Please see the <a href="~/blog/2012/01/22/Python-in-Time-Cockpit-17" title="updated version of this sample">updated version of this sample</a> for LINQ in more recent IronPython versions!</p><h2>Original Post</h2><p>Up until (and including) our beta 2 release time cockpit used <a href="http://www.ironpython.net/" target="_blank">IronPython</a> 2.4 for executing scripts. When creating complex scripts we often had to iterate over collections and check for certain conditions or concatenate collections of strings. Whenever possible we try to solve such tasks using TCQL when selecting the source data from the data layer to pass most of the work on to the database.</p><p>But as soon as the task required to operate on a set of <span class="InlineCode">EntityObject</span>s in memory we wanted to use <a href="http://msdn.microsoft.com/en-us/netframework/aa904594.aspx" target="_blank">LINQ</a> because of our daily use of .NET 4. Several times we tried and only partially succeeded when IronPython was unable to bind certain types of generic functions and raised <span class="InlineCode">Microsoft.Scripting.ArgumentTypeException: Multiple targets could match</span>. Most of these issues are resolved by the version bump to IronPython 2.6 and we are now able to write scripts like the following set of examples:</p>{% highlight python %}clr.AddReference("System.Core")
from TimeCockpit.Data import EntityObject
from System.Linq import Enumerable
from System import Func
from System import Int64
from System import String

# get all projects
projects = Context.Select("From P In Project Select P")

# filter (in memory) all projects with a name beginning with T
resultProjectsWithT = Enumerable.ToList[EntityObject](Enumerable.Where(projects, lambda p: p.ProjectName.StartsWith("T")))

# sort a collection
resultSorted = Enumerable.ToList[EntityObject](Enumerable.OrderBy(projects, lambda p: p.StartDate))

# pretty print a list of project names
print String.Join(", ", Enumerable.ToArray(Enumerable.Select(resultProjectsWithT, lambda p: p.ProjectName)))

# determine a minimum and maximum
func = Func[object, Int64](lambda p: p.StartDate.Ticks)
print DateTime(Enumerable.Min(projects, func)), DateTime(Enumerable.Max(projects, func)){% endhighlight %}<p>Note that the generic type parameter EntityObject and Enumerable.ToList are only required because I want to easily show the data in a grid. The very last example shows one of the cases in which the runtime is not able to resolve all the generic types when not giving it a hint by wrapping the python lambda into a typed Func delegate.</p><p>I am sure that Python offers equally (or even more) elegant ways to handle such tasks. ;)</p>