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

<p>In our very successfull webinar this morning we were asked by an attendee if it is possible to import phone calls from a mobile network provider's itemized call list. We really liked the idea (thanks <a href="http://grasgruen.it/" target="_blank">grasgruen.it</a>) and decided to create a prototype/proof of concept implementation of  such an import using <a href="http://ironpython.net/" target="_blank">IronPython</a>, our own SDK and third party APIs.</p><p>The script imports itemized call logs created by <a href="http://www.a1.net/" target="_blank">A1</a>. We looked at export files from other providers and the script should be customized to their (very similar) formats within minutes. The basic steps involved are:</p><ul>
  <li>Import required references.</li>
  <li>Load the CSV file using a <a href="http://www.codeproject.com/KB/database/CsvReader.aspx" target="_blank">third party library</a>.</li>
  <li>For each CSV line analyze the content.</li>
  <li>If the line corresponds to a phone call or short message create an time cockpit <span class="InlineCode">EntityObject</span>.</li>
  <li>Collect all the call/short message entity objects.</li>
  <li>Filter the list of calls/short message to prevent duplicate imports (by looking at which ranges of data are already available).</li>
  <li>Store the data.</li>
</ul><p class="InfoBox">Please be aware that the script uses some non-public interfaces which may change in the future. It is only a way of enabling this use case until more platforms are supported by the call log import signal tracker or native mobile clients.</p>{% highlight javascript %}# CONFIGURE!
fileName = "C:\\Temp\\Kostenabfrage.csv"

# imports and references
clr.AddReference("System.Core")
clr.AddReference("TimeCockpit.UI.Common")
clr.AddReference("TimeCockpit.SignalStorage")
clr.AddReference("LumenWorks.Framework.IO")
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
lineage = Context.SelectSingleWithParams({ "Query": "From L In SignalLineage Where L.Device.DeviceUuid = @DeviceUuid Order By L.BeginTime Desc Select L", "@DeviceUuid": currentDeviceId })

# parse EGN file
calls = List[EntityObject]()
messages = List[EntityObject]()

streamReader = None
csv = None
linesToSkip = 3

try:
    streamReader = StreamReader(fileName)
    while linesToSkip > 0:
        streamReader.ReadLine()
        linesToSkip -= 1

    csv = CsvReader(streamReader, False, ';')

    while csv.ReadNextRecord():
        entryType = csv[7]
        if entryType == "TEL":
            call = Context.CreateCleansedPhoneCallSignal()

            call.BeginTime = DateTime.ParseExact(csv[4], "dd.MM.yyyy", CultureInfo.InvariantCulture).Add(TimeSpan.Parse(csv[5], CultureInfo.InvariantCulture))
            if csv[13] == "ankommend":
                call.Direction = "Incoming"
                call.PhoneNumber = ""
            else:
                call.Direction = "Outgoing"
                call.PhoneNumber = csv[13]

            call.EndTime = call.BeginTime.Add(TimeSpan.Parse(csv[8], CultureInfo.InvariantCulture))
            call.Finalized = True
            call.RemoteParty = ""
            call.Lineage = lineage
            calls.Add(call)
            
        elif entryType == "SMS":
            message = Context.CreateCleansedShortMessageSignal()

            message.Direction = "Outgoing"
            message.EventTime = DateTime.ParseExact(csv[4], "dd.MM.yyyy", CultureInfo.InvariantCulture).Add(TimeSpan.Parse(csv[5], CultureInfo.InvariantCulture))
            message.Finalized = True
            message.PhoneNumber = csv[13]
            message.RemoteParty = ""
            message.Subject = ""
            message.Lineage = lineage
            messages.Add(message)

finally:
    if not csv == None:
        csv.Dispose()
    if not streamReader == None:
        streamReader.Dispose()

# filter signals to prevent duplicate imports
query = "From C In Chunk Where C.Device.DeviceUuid = @DeviceUuid And C.Entity.EntityName = @SignalEntityName Select New With { .MinBeginTime = Min(C.BeginTime), .MaxEndTime = Max(C.EndTime) }"
callSignalDates = Context.SelectSingleWithParams({ "Query": query, "@DeviceUuid": currentDeviceId , "@SignalEntityName": "APP_CleansedPhoneCallSignal" })
messageSignalDates = Context.SelectSingleWithParams({ "Query": query, "@DeviceUuid": currentDeviceId , "@SignalEntityName": "APP_CleansedShortMessageSignal" })

if callSignalDates.MinBeginTime != None:
    calls = Enumerable.ToList(Enumerable.Where(calls, lambda c: c.BeginTime > callSignalDates.MaxEndTime or c.EndTime < callSignalDates.MinBeginTime ))
if messageSignalDates.MinBeginTime != None:
    messages = Enumerable.ToList(Enumerable.Where(messages, lambda m: m.EventTime > messageSignalDates.MaxEndTime or m.EventTime < messageSignalDates.MinBeginTime ))

# store signals
ssm = SignalStorageManager(Context)

if calls.Count > 0:
    ssm.Store(calls)
    print "Imported", calls.Count, "phone calls"
else:
    print "No phone calls imported"

if messages.Count > 0:
    ssm.Store(messages)
    print "Imported", messages.Count, "short messages"
else:
    print "No short messages imported"

print "done."{% endhighlight %}<p>During the creation of the script we became aware of several limitations of this approach compared to our phone import signal tracker (which uses a call log exported from the phone) or future native phone clients/signal trackers:</p><ul>
  <li>No caller name is provided.</li>
  <li>Phone numbers are trimmed for privacy reasons.</li>
  <li>Only outgoing calls/messages (and incoming roaming calls) are tracked.</li>
</ul><p>Please note that the execution of this script could also be <a href="http://help.timecockpit.com/html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" target="_blank">automated</a>.</p><p>Comments, questions or suggestions are highly appreciated.</p>