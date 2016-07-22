---
layout: blog
title: Excel Exporter and Formatting Profiles
teaser: In the current version of time cockpit, there is a bug in the excel exporter when using conditional formatting in an excel template file. Precisely, when using a conditional format that spans a full row or column instead of a sub-region of a worksheet. The root cause of this is in the way that the [usually more than awesome] ClosedXML (http - //closedxml.codeplex.com/) library handles ranges with covering all rows or all columns. In some of those cases, ClosedXML tries to apply something to every cell in that (semi-infinite) range.
author: Philipp Aumayr
date: 2013-10-16
bannerimage: 
lang: en
permalink: /blog/2013/10/16/Excel-Exporter-and-Formatting-Profiles
---

<p xmlns="http://www.w3.org/1999/xhtml">In the current version of time cockpit, there is a bug in the excel exporter when using conditional formatting in an excel template file. Precisely, when using a conditional format that spans a full row or column instead of a sub-region of a worksheet. The root cause of this is in the way that the [usually more than awesome] ClosedXML (http://closedxml.codeplex.com/) library handles ranges with covering all rows or all columns. In some of those cases, ClosedXML tries to apply something to every cell in that (semi-infinite) range.</p><p xmlns="http://www.w3.org/1999/xhtml">The bug therefore manifests itself as an OutOfMemory exception after having used up quite a bit of memory, likely to cause your machine to misbehave. I have filed a bug (http://closedxml.codeplex.com/workitem/9049) and supplied a patch that works around the issue for the cases we have encountered, but I guess (and hope) that they strive for a more holistic solution. So, to work around this issue, for now, use the conditional formatting only on a limited sub-range of a worksheet (E.g. “a1:a10” instead of “a:a”). As the owner of the ClosedXML project, MDeLeon, is amazingly quick at fixing bugs (thank you!) I hope we will have this resolved in the near future.</p>