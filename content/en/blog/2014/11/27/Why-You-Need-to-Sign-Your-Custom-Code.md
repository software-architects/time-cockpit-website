---
layout: blog
title: Why You Need to Sign Your Custom Code
teaser: Those of you who use time cockpit’s browser version might have run into the following problem -  You open a list, try to execute an action or simply try to save a time sheet entry and time cockpit shows the following message -  "Hash could not be verified". Read about the reason for this problem and how to resolve it.
author: Alexander Huber
date: 2014-11-27
bannerimage: /content/images/blog/2014/11/3878741556_53c9155d4b_b.jpg
lang: en
permalink: /blog/2014/11/27/Why-You-Need-to-Sign-Your-Custom-Code
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/11/3878741556_53c9155d4b_b.jpg" />Image source: <a href="https://flic.kr/p/6UKyJq" target="_blank">https://flic.kr/p/6UKyJq</a>, under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons</a> License</div><p>Those of you who use time cockpit’s browser version might have run into the following problem: You open a list, try to execute an action or simply try to save a time sheet entry and time cockpit shows the following message: <em>Hash could not be verified</em>. Agreed, the message might sound a bit scary and technical. However, this message does not indicate an error. Actuallyit is a security feature of time cockpit kicking in. Before we talk about the actual message, we would like to describe the context in which the message is presented to a user.</p><h2>Python Scripts in Time Cockpit</h2><p>One of time cockpit’s unique selling propositions is that it is heavily customizable. Here are some examples:</p><ul>
  <li>Change and extend time cockpit's data model to you specific needs. You can e.g. create new entities, add properties, and add relations to the entities.</li>
  <li>To enforce business rules you can create validation rules using <a href="http://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm" target="_blank">time cockpit's expression language</a>.</li>
  <li>If you would like to restrict access to certain resources in time cockpit you can define permission rules.</li>
  <li>You can even create custom UI elements, lists and forms.</li>
</ul><p>All of these change can be done without programming in a language like C# or Python. For most people, these customization mechanisms will suffice. However, for even more advanced customization scenarios our customers can use time cockpit's built-in scripting language <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">Iron Python</a>. Time cockpit supports the use of script for</p><ol>
  <li>Lists and reports,</li>
  <li>Actions, and</li>
  <li>Triggers.</li>
</ol><h3>Lists and Reports</h3><p>For classical lists you need to specify a single <a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL</a> query that fetches the data records that should be displayed. However, there are scenarios where a single query as a data source is not enough. In such cases, time cockpit uses so called <em>script source lists</em>: Lists where a small Python script acts as the data source.</p><p>On the one hand, the definition of a script source list is more complex than a common list. On the other hand it provides much more flexibility. If you want to e.g. combine the results of two different TCQL queries (e.g. combine timesheet and vacation data in a single report), you need to use a script source list. Also, if you need to perform operations that are not available in TCQL (e.g. custom aggregations), script source lists are needed.</p>{% highlight xml %}<List AllowDelete="True" AllowEdit="True" EditModelEntityName="APP_Vacation" EditProperty="VacationUuid" xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data" xmlns:p="http://www.timecockpit.com/2009/ui/controls" xmlns:sys="clr-namespace:System;assembly=mscorlib">
    <List.ScriptSource>
        <sys:String xml:space="preserve">
clr.AddReference("System.Core")
import System
clr.ImportExtensions(System.Linq)

def getResultModelEntity(context):
    entity = ModelEntity({ "Name": "Result" })
    entity.Properties.Add(GuidProperty({ "Name": "VacationUuid" }))
    ...    
    return entity

def getItems(context, queryParameters):
    clr.AddReference("TimeCockpit.Programmability")
    from TimeCockpit.Programmability.Functions import Constants
    from System import Version, String
    version = clr.GetClrType(Constants).Assembly.GetName().Version
    recent = (version >= Version(1, 18, 0, 0) or version == Version(0, 0, 0, 0))

    # fetch data from DB
    
    return vacation.Concat(vacationEntitlement).OrderBy(lambda t: t.EndTime).Cast[EntityObject]()
   
# SIG 77619404EF9B1418136698A70545893B739EB6C3 n5gegpq6s43qGYsIIUhEcU7ONwtbsY85dJHrrR80E/2vtgEdtt3CSnjOtd2BXdQFvFiquQMYheDXxyIAQ96R3rsdH5Xd6ccqYdgs1ZNeqQBsUrDuiHLKjYZ1h+9Js9+hWBqwRKLUd/WQTDO0JNq8r7vqwurfunU1BkMVmkdj4V+67rpJgjt4fBOcngKzT36ZUyAoSDu9EgrtSEmttxilH26TRT7CQTydnqVVzuQGvD0SB4hO4cM+6O94lXPgqj3LSAQt7me/4oC6+WH/553WBZYC88oIAytFakkHsolvBjBx/6frFU0xyDMgeRcB6O+tjCfXVXUMk7ps5VvDObGOgA==</sys:String>
    </List.ScriptSource>
    <BoundCell Content="=Current.UserDetailName" Header="=:FriendlyName('APP_UserDetail')" />
    ...
</List>{% endhighlight %}<p>As you can see in the above source code, the list does not have an <em>&lt;List.Query&gt;</em> tag, but a <em>&lt;List.ScriptSource&gt;</em> tag. The tag contains the Iron Python code the fetches data and prepares it for presentation in the list. It is important to note two methods in the source code:</p><ol>
  <li>
    <strong>
      <em>getItems</em> Method:</strong> The <em>getItems</em> method does the heavily lifting of a script source list. It connects to the time cockpit data context, prepares the result, and hands it back to the list rendering engine of time cockpit.</li>
  <li>
    <strong>
      <em>getResultModelEntity</em> Method:</strong>  The <em>getResultModelEntity</em> method is new in this month's version of time cockpit and plays an important role especially for the web client. The method provides information about the data model of the results of the <em>getItems</em> method. </li>
</ol><p class="showcase">Although script source lists without <em>getResultModelEntity</em> will work in time cockpit's full client, the presence of the method is a prerequisite to use the script source list in time cockpit's upcoming HTML-based web client.</p><p>If you have existing script source lists in your time cockpit account, contact us at <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a> and we will provide guidance on how to implement the <em>getResultModelEntity</em> method. You can also read more about defining time cockpit data models in scripts in the <a href="http://help.timecockpit.com/?topic=html/07396c38-8cb8-45da-a303-549bdf323fe9.htm" target="_blank">online help</a>.</p><p class="note">If you are interested in a complete sample of a script source list, take a look at the <em>APP_DefaultVacationList</em> in your time cockpit's <em>Customization</em> module. </p><h3>Actions</h3><p>In contrast to lists, actions can not only read data, they can also manipulate it. Actions are typically used to implement customer-specific business logic. Like data, actions are deployed to the time cockpit clients time cockpit’s sync mechanism. Therefore, time cockpit automatically cares for rolling out new version of Actions. For an example for actions see the <a href="http://help.timecockpit.com/?topic=html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" title="Actions" target="_blank">Actions</a> topic in our online documentation.</p><h3>Triggers</h3><p>Triggers are an advanced concept of time cockpit. Like triggers in a database, triggers in time cockpit are executed whenever a record (e.g. a time sheet) is inserted, updated, and/or deleted. Triggers are not configurable via the time cockpit customization interface. You can only create triggers via scripting. They are a very powerful concept and describing them here would exceed the scope of this article. Triggers would deserve their own blog article. Until then, if you are interested in triggers, drop us a mail at <a href="mailto:support@timecockpit.com">support@timecockpit.com</a> and we will tell you more about them. </p><h2>User Code in a Hosted Environment</h2><p>Now what has all that to do with the message <em>“Hash could not be verified”</em>? As we have learned above, users of time cockpit can define lists, actions, and triggers that run <em>user-defined</em> source code. If you are using the full client, the script code runs on the machine of the user. The script can potentially harm only your own PC that is executing the code.</p><p>However, if you use the browser client (Silverlight or upcoming HTML version), user-defined source code runs on <em>our shared infrastructure hosted in <a href="https://azure.microsoft.com" target="_blank">Microsoft Azure</a></em>. We are responsible that script code of one customer does not degrade the time cockpit experience for other customers. Thus, we decided that user-defined scripts in lists, actions and triggers need to be validated and signed with a certificate that belongs to us.</p><p>Let us take a closer look at the script source list from above:</p>{% highlight xml %}<List AllowDelete="True" AllowEdit="True" EditModelEntityName="APP_Vacation" EditProperty="VacationUuid" xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data" xmlns:p="http://www.timecockpit.com/2009/ui/controls" xmlns:sys="clr-namespace:System;assembly=mscorlib">
    <List.ScriptSource>
        <sys:String xml:space="preserve">
...
   
# SIG 77619404EF9B1418136698A70545893B739EB6C3 n5gegpq6s43qGYsIIUhEcU7ONwtbsY85dJHrrR80E/2vtgEdtt3CSnjOtd2BXdQFvFiquQMYheDXxyIAQ96R3rsdH5Xd6ccqYdgs1ZNeqQBsUrDuiHLKjYZ1h+9Js9+hWBqwRKLUd/WQTDO0JNq8r7vqwurfunU1BkMVmkdj4V+67rpJgjt4fBOcngKzT36ZUyAoSDu9EgrtSEmttxilH26TRT7CQTydnqVVzuQGvD0SB4hO4cM+6O94lXPgqj3LSAQt7me/4oC6+WH/553WBZYC88oIAytFakkHsolvBjBx/6frFU0xyDMgeRcB6O+tjCfXVXUMk7ps5VvDObGOgA==</sys:String>
    </List.ScriptSource>
    ...
</List>{% endhighlight %}<p>The line that starts with <em># SIG</em> contains the signature of the source code. Our signing mechanisms take the whole content of the <em>&lt;List.ScriptSource&gt;</em> tag and calculate a hash value from the script code. This hash value is used to verify that no one has tempered the code we validated and approved. If one adds so much as a whitespace somewhere in the script code, users will be presented the message <em>“Hash could not be verified”.</em> The same mechanisms also apply to Iron Python script code in actions and triggers.</p><h2>I Want to have My Script Code Signed. What should I do?</h2><p>If you have developed script source lists, actions, or triggers and you want them to work in time cockpit's browser client you need to send a signing request to <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. We will get back to you, take a look at the source code, and check it for harmful or performance intensive operations. If the source code is OK from that point of view, we sign the script code with our certificate and you can use your script in your browser.</p><p class="showcase">Note that no signing is required if you just want to use your script in time cockpit's full client.</p><p>Reviewing and signing of scripts is free of charge for time cockpit customers (fair-use policy applies). Depending on the size and the complexity of the script, veryfication and signing take between some minutes and some business hours.</p>