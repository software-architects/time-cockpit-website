---
layout: blog
title: How to Automate Time Cockpit’s Importer
excerpt: If you want to import a single Excel or CSV file, time cockpit's Importer Module probably offers exactly what you need. However, you might need to regularly import multiple files depending on each other (e.g. projects and customers where each project row contains a reference to a customer row). Wouldn't it be nice to have this import automated so you can trigger it with a single click? This is possible using time cockpit's scripting language.
author: Michael Kubitschka
date: 2015-06-29
bannerimage: /content/images/blog/2015/06/start-auto-import.jpg
lang: en
tags: [Iron Python,time cockpit]
permalink: /blog/2015/06/29/How-to-Automate-Time-Cockpit’s-Importer
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2015/06/start-auto-import.jpg" />
</p><p>If you want to import a single Excel or CSV file, <a href="https://help.timecockpit.com/html/ee560e49-e503-4d80-9167-2e6533f50dbe.htm" target="_blank">time cockpit's Importer Module</a> probably offers exactly what you need. However, you might need to regularly import multiple files depending on each other (e.g. <em>projects</em> and <em>customers</em> where each project row contains a reference to a customer row). Wouldn't it be nice to have this import automated so you can trigger it with a single click? This is possible using time cockpit's <a href="https://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripting language</a>.</p><h2>Typical Import Challenges</h2><p>Many of our customers use time cockpit Importer to periodically import master data like customers, projects, tasks, etc. from several different upstream systems. However, if you need to import your data regularly, this can become a tedious task. Typical challenges are:</p><ul>
  <li>Users are not aware of data dependencies that enforce a certain order of importing files (e.g. <em>projects</em> and <em>customers</em> where each project row contains a reference to a customer row)</li>
  <li>Users cannot remember storage locations (e.g. file server) where upstream systems store files</li>
  <li>Users run imports seldom. Therefore they forget how to start it.</li>
</ul><h2>Automate the Import</h2><p>You can automate imports using <em>Actions</em> written in time cockpit scripting language (Python). Such actions can be triggered manually or periodically. The import action has to call time cockpit's Import Module and trigger the corresponding <a href="https://help.timecockpit.com/?topic=html/ee560e49-e503-4d80-9167-2e6533f50dbe.htm" target="_blank"><em>Import Definition</em></a>. It contains all the information that time cockpit needs to read the source file, map it to you data structure in time cockpit and write the data to your time cockpit database.</p><p>We want to share sample code for such an action so it becomes easier for you to automate your own import process. Here is the sample code:</p><h2>
  {% highlight python %}clr.AddReference("System")
clr.AddReference("TimeCockpit.Data.Import")
from System.Text import Encoding
from System.IO import File
from TimeCockpit.Data.Import import *

def actionSample(actionContext):

    # implementation of event handler
    def printMessage(source, worksheet, row, severity, message):
        # e.g. error handling, abort action ...
        print(message)

    def printProgress(s, ws, max, current, created, updated):
        print ws, current, max

    def printFinished(source, reportDataArray, reportMimeType, sourceDataArray, sourceMimeType):
        print 'Finished importing...'


    def performImport(impDefName, importFilePath):    
        sourceData = File.ReadAllBytes(importFilePath)
        
        # check existence of the import definition
        impDef = Context.SelectSingleWithParams({ 
        "Query" : "From I In ImportDefinition Where I.ImportDefinitionName = @DefName Select I", 
        "@DefName" : impDefName })
        if impDef == None:
            raise ValidationException("The import definition " + impDefName + " could not be found.")    
            
        importTaskId = Guid.NewGuid()
        definition = ImportBookDefinition.ReadXaml(Encoding.UTF8.GetString(impDef.APP_Definition))        
        engine = ImportEngineFactory.Create(ImportEngineFactory.XlsxEngine, Context)    
        
        # attach event handlers
        engine.OnMessage += printMessage        
        engine.OnProgress += printProgress
        engine.OnReportFinished += printFinished        
        
        engine.PerformImport(definition, True, sourceData, impDefName, importTaskId, impDef.ObjectUuid, None)

    # names of your previous created import definitions in the module "Management" in the section "Settings/Import Definitions"
    importDefCust = 'Auto-Import-Customers'
    importDefP = 'Auto-Import-Projects'
    
    # call imports in certain order
    performImport(importDefCust, '''C:\Documents\ImportContent\customerImport.xlsx''')
    performImport(importDefP, '''C:\Documents\ImportContent\projectImport.xlsx'''){% endhighlight %}How The Code Works</h2><p>The method <code>performImport</code> contains the important part of the action.</p><ol>
  <li>First, we read the content of the file that should be imported with <code class="python functions">File</code><code class="python plain">.ReadAllBytes</code>.</li>
  <li>Next, we load the import definition into the local variable <code>definition</code>. The import definition defines how to map the columns in the Excel or CSV file to the corresponding time cockpit data structure.</li>
  <li>Next, we create an <code>ImportEngineFactory</code>. It contains the core import logic of time cockpit.</li>
  <li>Lastly, <code>PerformImport</code> loads the data from the Excel or CSV file and writes it into time cockpit.</li>
</ol><h2>Benefits of Automated Imports</h2><p>
  <strong>Always in the correct sequence</strong>
  <br /> You can automate the proper sequence of your imports (e.g. first customers then projects because each project refers to a customer).</p><p>
  <strong>Automatically generated import logs</strong>
  <br />The results of the imports can be found in the usual import log of time cockpit's Import Module.</p><p>
  <img title="Import Logs" src="{{site.baseurl}}/content/images/blog/2015/05/ImportLogs.png" alt="Import Logs" />
</p><p>
  <strong>Manual or periodic execution</strong>
  <br />The action can be executed manually in time cockpit. It can also be automated by using our <a href="https://help.timecockpit.com/html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" target="_blank"><em>Execute Script Tool</em></a>. </p><h2>Alternative: RESTful OData Web Services</h2><p>If you want to schedule the importer process in the cloud instead of your own data center, you can use time cockpit's <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm">OData web service API</a> e.g. in combination with an <a href="http://www.hanselman.com/blog/IntroducingWindowsAzureWebJobs.aspx">Azure WebJob</a> instead. This requires that the source system provides data via a RESTful API or database read access. Our blog article <em><a href="http://www.timecockpit.com/blog/2015/05/18/Integrating-On-Premise-Resources-Into-Time-Cockpit-" target="_blank">Integrating On-Premise Resources Into Time Cockpit</a></em> contains detailed information about that approach.</p>