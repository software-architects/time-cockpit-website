---
layout: blog
title: Proof of Concept Itemized Call List Import
teaser: In our very successfull webinar this morning we were asked by an attendee if it is possible to import phone calls from a mobile network provider's itemized call list. We really liked the idea (thanks grasgruen.it) and decided to create a prototype/proof of concept implementation of  such an import using IronPython, our own SDK and third party APIs.
author: Simon Opelt
date: 2010-07-29
bannerimage: 
lang: en
permalink: /blog/2010/07/29/Proof-of-Concept-Itemized-Call-List-Import
---

<p xmlns="http://www.w3.org/1999/xhtml">In our very successfull webinar this morning we were asked by an attendee if it is possible to import phone calls from a mobile network provider's itemized call list. We really liked the idea (thanks <a href="http://grasgruen.it/" target="_blank">grasgruen.it</a>) and decided to create a prototype/proof of concept implementation of  such an import using <a href="http://ironpython.net/" target="_blank">IronPython</a>, our own SDK and third party APIs.</p><p xmlns="http://www.w3.org/1999/xhtml">The script imports itemized call logs created by <a href="http://www.a1.net/" target="_blank">A1</a>. We looked at export files from other providers and the script should be customized to their (very similar) formats within minutes. The basic steps involved are:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Import required references.</li>
  <li>Load the CSV file using a <a href="http://www.codeproject.com/KB/database/CsvReader.aspx" target="_blank">third party library</a>.</li>
  <li>For each CSV line analyze the content.</li>
  <li>If the line corresponds to a phone call or short message create an time cockpit <span class="InlineCode">EntityObject</span>.</li>
  <li>Collect all the call/short message entity objects.</li>
  <li>Filter the list of calls/short message to prevent duplicate imports (by looking at which ranges of data are already available).</li>
  <li>Store the data.</li>
</ul><p class="InfoBox" xmlns="http://www.w3.org/1999/xhtml">Please be aware that the script uses some non-public interfaces which may change in the future. It is only a way of enabling this use case until more platforms are supported by the call log import signal tracker or native mobile clients.</p>{% highlight javascript %}# CONFIGURE!
fileName = &quot;C:\\Temp\\Kostenabfrage.csv&quot;

# imports and references
clr.AddReference(&quot;System.Core&quot;)
clr.AddReference(&quot;TimeCockpit.UI.Common&quot;)
clr.AddReference(&quot;TimeCockpit.SignalStorage&quot;)
clr.AddReference(&quot;LumenWorks.Framework.IO&quot;)
from System import DateTime, TimeSpan
from System.Collections.Generic import List
from System.Globalization import CultureInfo
from System.IO import StreamReader
from System.Linq import Enumerable
from TimeCockpit.UI.Common import *
from TimeCockpit.SignalStorage import SignalStorageManager
from LumenWorks.Framework.IO.Csv import CsvReader

# determine lineage
currentDeviceId = TimeCockpitApplication.Current.ApplicationSettings.DeviceId
lineage = Context.SelectSingleWithParams({ &quot;Query&quot;: &quot;From L In SignalLineage Where L.Device.DeviceUuid = @DeviceUuid Order By L.BeginTime Desc Select L&quot;, &quot;@DeviceUuid&quot;: currentDeviceId })

# parse EGN file
calls = List[EntityObject]()
messages = List[EntityObject]()

streamReader = None
csv = None
linesToSkip = 3

try:
    streamReader = StreamReader(fileName)
    while linesToSkip &gt; 0:
        streamReader.ReadLine()
        linesToSkip -= 1

    csv = CsvReader(streamReader, False, ';')

    while csv.ReadNextRecord():
        entryType = csv[7]
        if entryType == &quot;TEL&quot;:
            call = Context.CreateCleansedPhoneCallSignal()

            call.BeginTime = DateTime.ParseExact(csv[4], &quot;dd.MM.yyyy&quot;, CultureInfo.InvariantCulture).Add(TimeSpan.Parse(csv[5], CultureInfo.InvariantCulture))
            if csv[13] == &quot;ankommend&quot;:
                call.Direction = &quot;Incoming&quot;
                call.PhoneNumber = &quot;&quot;
            else:
                call.Direction = &quot;Outgoing&quot;
                call.PhoneNumber = csv[13]

            call.EndTime = call.BeginTime.Add(TimeSpan.Parse(csv[8], CultureInfo.InvariantCulture))
            call.Finalized = True
            call.RemoteParty = &quot;&quot;
            call.Lineage = lineage
            calls.Add(call)
            
        elif entryType == &quot;SMS&quot;:
            message = Context.CreateCleansedShortMessageSignal()

            message.Direction = &quot;Outgoing&quot;
            message.EventTime = DateTime.ParseExact(csv[4], &quot;dd.MM.yyyy&quot;, CultureInfo.InvariantCulture).Add(TimeSpan.Parse(csv[5], CultureInfo.InvariantCulture))
            message.Finalized = True
            message.PhoneNumber = csv[13]
            message.RemoteParty = &quot;&quot;
            message.Subject = &quot;&quot;
            message.Lineage = lineage
            messages.Add(message)

finally:
    if not csv == None:
        csv.Dispose()
    if not streamReader == None:
        streamReader.Dispose()

# filter signals to prevent duplicate imports
query = &quot;From C In Chunk Where C.Device.DeviceUuid = @DeviceUuid And C.Entity.EntityName = @SignalEntityName Select New With { .MinBeginTime = Min(C.BeginTime), .MaxEndTime = Max(C.EndTime) }&quot;
callSignalDates = Context.SelectSingleWithParams({ &quot;Query&quot;: query, &quot;@DeviceUuid&quot;: currentDeviceId , &quot;@SignalEntityName&quot;: &quot;APP_CleansedPhoneCallSignal&quot; })
messageSignalDates = Context.SelectSingleWithParams({ &quot;Query&quot;: query, &quot;@DeviceUuid&quot;: currentDeviceId , &quot;@SignalEntityName&quot;: &quot;APP_CleansedShortMessageSignal&quot; })

if callSignalDates.MinBeginTime != None:
    calls = Enumerable.ToList(Enumerable.Where(calls, lambda c: c.BeginTime &gt; callSignalDates.MaxEndTime or c.EndTime &lt; callSignalDates.MinBeginTime ))
if messageSignalDates.MinBeginTime != None:
    messages = Enumerable.ToList(Enumerable.Where(messages, lambda m: m.EventTime &gt; messageSignalDates.MaxEndTime or m.EventTime &lt; messageSignalDates.MinBeginTime ))

# store signals
ssm = SignalStorageManager(Context)

if calls.Count &gt; 0:
    ssm.Store(calls)
    print &quot;Imported&quot;, calls.Count, &quot;phone calls&quot;
else:
    print &quot;No phone calls imported&quot;

if messages.Count &gt; 0:
    ssm.Store(messages)
    print &quot;Imported&quot;, messages.Count, &quot;short messages&quot;
else:
    print &quot;No short messages imported&quot;

print &quot;done.&quot;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">During the creation of the script we became aware of several limitations of this approach compared to our phone import signal tracker (which uses a call log exported from the phone) or future native phone clients/signal trackers:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>No caller name is provided.</li>
  <li>Phone numbers are trimmed for privacy reasons.</li>
  <li>Only outgoing calls/messages (and incoming roaming calls) are tracked.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Please note that the execution of this script could also be <a href="http://help.timecockpit.com/html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" target="_blank">automated</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">Comments, questions or suggestions are highly appreciated.</p>