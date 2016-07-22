---
layout: blog
title: Import Customers From Microsoft Dynamics CRM Online
teaser: This sample shows how to import customers from Microsoft CRM into time cockpit using .NET (C#).
author: Karin Huber
date: 2012-10-30
bannerimage: 
lang: en
permalink: /blog/2012/10/30/Import-Customers-From-Microsoft-Dynamics-CRM-Online
---

<p xmlns="http://www.w3.org/1999/xhtml">In the following sample we want to show how to import customers from Microsoft Dynamics CRM Online into time cockpit using .NET (C#).</p><h2 xmlns="http://www.w3.org/1999/xhtml">Access Time Cockpit in .NET</h2><p xmlns="http://www.w3.org/1999/xhtml">When you create a new Visual Studio Project you have to take the following steps to access time cockpit:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Add references to time cockpit</li>
  <li>Add web service endpoint to app.config</li>
  <li>Create DataContext</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">To skip these steps you can <a href="{{site.baseurl}}/content/images/blog/2012/10/EmptyTimeCockpitVisualStudioProject.zip">download our Visual Studio 2012 sample project</a> (console application), that already contains these three steps. We use time cockpit version 1.9.1824.28 for the sample project. These assemblies work for all versions starting with 1.8 and 1.9. If you use an older or newer version of time cockpit you should replace all assemblies in folder TimeCockpitReferences with the assemblies from your time cockpit installation directory (C:\Program Files\software architects\time cockpit\time cockpit 2010).</p><h3 xmlns="http://www.w3.org/1999/xhtml">Add References</h3><div xmlns="http://www.w3.org/1999/xhtml">To access time cockpit from .NET you have to add the following references to your project:</div><div xmlns="http://www.w3.org/1999/xhtml">
  <br />
</div><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Antlr3.Runtime.dll</li>
  <li>Antlr3.StringTemplate.dll</li>
  <li>IronPython.dll</li>
  <li>log4net.dll</li>
  <li>Microsoft.Dynamic.dll</li>
  <li>Microsoft.Scripting.dll</li>
  <li>Newtonsoft.Json.Net35.dll</li>
  <li>System.CoreEx.dll</li>
  <li>System.Data.SqlServerCe.dll</li>
  <li>System.Reactive.dll</li>
  <li>TimeCockpit.Common.dll</li>
  <li>TimeCockpit.Data.dll</li>
  <li>TimeCockpit.Data.QueryLanguage.dll</li>
  <li>TimeCockpit.Data.RoutingService.dll</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">You can find all assemblies in the time cockpit installation directory (C:\Program Files\software architects\time cockpit\time cockpit 2010).</p><h3 xmlns="http://www.w3.org/1999/xhtml">Add Web Service Endpoint</h3><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit uses a web service to locate the <a href="http://help.timecockpit.com/?topic=html/227077bd-41f0-414f-b3f5-fa1f88cbb58f.htm#ServerStore" target="_blank">server data store</a> for your time cockpit account. You have to define the web service endpoint in the config file of your application:</p>{% highlight javascript %}&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;
&lt;configuration&gt;
    &lt;system.serviceModel&gt;
        &lt;client&gt;
            &lt;endpoint name=&quot;&quot; address=&quot;https://management.timecockpit.com/ManagementService.svc&quot; binding=&quot;customBinding&quot; 
                bindingConfiguration=&quot;CustomBinding_IManagementService&quot; contract=&quot;WebManagementService.IManagementService&quot; /&gt;
        &lt;/client&gt;

        &lt;bindings&gt;
            &lt;customBinding&gt;
                &lt;binding name=&quot;CustomBinding_IManagementService&quot;&gt;
                    &lt;security defaultAlgorithmSuite=&quot;Default&quot; authenticationMode=&quot;UserNameOverTransport&quot; requireDerivedKeys=&quot;true&quot;
                        securityHeaderLayout=&quot;Strict&quot; includeTimestamp=&quot;true&quot; keyEntropyMode=&quot;CombinedEntropy&quot;
                        messageSecurityVersion=&quot;WSSecurity11WSTrustFebruary2005WSSecureConversationFebruary2005WSSecurityPolicy11BasicSecurityProfile10&quot;&gt;
                        
                        &lt;localClientSettings cacheCookies=&quot;true&quot; detectReplays=&quot;false&quot; replayCacheSize=&quot;900000&quot; maxClockSkew=&quot;23:00:00&quot;
                            maxCookieCachingTime=&quot;Infinite&quot; replayWindow=&quot;00:05:00&quot; sessionKeyRenewalInterval=&quot;10:00:00&quot;
                            sessionKeyRolloverInterval=&quot;00:05:00&quot; reconnectTransportOnFailure=&quot;true&quot; timestampValidityDuration=&quot;00:05:00&quot;
                            cookieRenewalThresholdPercentage=&quot;60&quot;/&gt;
                        
                        &lt;localServiceSettings detectReplays=&quot;false&quot; issuedCookieLifetime=&quot;10:00:00&quot; maxStatefulNegotiations=&quot;128&quot;
                            replayCacheSize=&quot;900000&quot; maxClockSkew=&quot;23:00:00&quot; negotiationTimeout=&quot;01:01:00&quot; replayWindow=&quot;00:05:00&quot;
                            inactivityTimeout=&quot;00:02:00&quot; sessionKeyRenewalInterval=&quot;15:00:00&quot; sessionKeyRolloverInterval=&quot;00:05:00&quot;
                            reconnectTransportOnFailure=&quot;true&quot; maxPendingSessions=&quot;128&quot; maxCachedCookies=&quot;1000&quot; timestampValidityDuration=&quot;00:05:00&quot;/&gt;
                        &lt;secureConversationBootstrap/&gt;
                    &lt;/security&gt;
                    
                    &lt;textMessageEncoding maxReadPoolSize=&quot;64&quot; maxWritePoolSize=&quot;16&quot; messageVersion=&quot;Soap11&quot; writeEncoding=&quot;utf-8&quot;&gt;
                        &lt;readerQuotas maxDepth=&quot;32&quot; maxStringContentLength=&quot;8192&quot; maxArrayLength=&quot;16384&quot; maxBytesPerRead=&quot;4096&quot; maxNameTableCharCount=&quot;16384&quot;/&gt;
                    &lt;/textMessageEncoding&gt;
                    
                    &lt;httpsTransport manualAddressing=&quot;false&quot; maxBufferPoolSize=&quot;524288&quot; maxReceivedMessageSize=&quot;65536&quot; allowCookies=&quot;false&quot;
                        authenticationScheme=&quot;Anonymous&quot; bypassProxyOnLocal=&quot;false&quot; decompressionEnabled=&quot;true&quot; hostNameComparisonMode=&quot;StrongWildcard&quot;
                        keepAliveEnabled=&quot;true&quot; maxBufferSize=&quot;65536&quot; proxyAuthenticationScheme=&quot;Anonymous&quot; realm=&quot;&quot; transferMode=&quot;Buffered&quot;
                        unsafeConnectionNtlmAuthentication=&quot;false&quot; useDefaultWebProxy=&quot;false&quot; requireClientCertificate=&quot;false&quot; /&gt;
                &lt;/binding&gt;
            &lt;/customBinding&gt;
            
            &lt;wsHttpBinding&gt;
                &lt;remove name=&quot;WorkflowControlHttpsBinding&quot;/&gt;
                &lt;binding name=&quot;WorkflowControlHttpsBinding&quot; transactionFlow=&quot;true&quot;&gt;
                    &lt;security mode=&quot;Transport&quot;/&gt;
                &lt;/binding&gt;
                
                &lt;remove name=&quot;WorkflowControlHttpBinding&quot;/&gt;
                &lt;binding name=&quot;WorkflowControlHttpBinding&quot; transactionFlow=&quot;true&quot;/&gt;
            &lt;/wsHttpBinding&gt;
        &lt;/bindings&gt;
    &lt;/system.serviceModel&gt;
&lt;/configuration&gt;{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Create DataContext</h3><p xmlns="http://www.w3.org/1999/xhtml">Now you can connect to time cockpit by creating a DataContext. Use the same username and password you used to configure time cockpit after starting it the first time.</p>{% highlight javascript %}using (var dataContext = DataContext.Create(&quot;username&quot;, &quot;password&quot;))
{
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Please note, that your are connected to the server data store of time cockpit. We recommend to import data on the server, because it is easier for time cockpit to download many changes to the clients than to upload many changes to the server. When reading or writing data in the server data store, you will not see changes in your local time cockpit immediately. You can wait until the data is synced automatically (by default every 15 minutes), trigger sync manually, switch to server mode or view the data in Silverlight.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <a href="{{site.baseurl}}/content/images/blog/2012/10/EmptyTimeCockpitVisualStudioProject.zip">Download sample to access time cockpit (Console Application)</a>
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Connect to Microsoft Dynamics CRM</h2><p xmlns="http://www.w3.org/1999/xhtml">If you want to access Microsoft Dynamics CRM programmatically, you have the choice among <a href="http://msdn.microsoft.com/en-us/library/gg327971.aspx" target="_blank">different kind of programming models for Microsoft Dynamics CRM</a>. We decided to use late-binding for our sample.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Download Microsoft Dynamics CRM SDK</h3><p xmlns="http://www.w3.org/1999/xhtml">The first step to get access to Microsoft Dynamics CRM is to <a href="http://www.microsoft.com/en-us/download/details.aspx?id=24004" target="_blank">download the SDK</a>. It contains the assemblies you need to connect, documentation, several tools and samples.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Register Your Device</h3><p xmlns="http://www.w3.org/1999/xhtml">To connect to CRM you need a <a href="http://msdn.microsoft.com/en-us/library/ff681567.aspx" target="_blank">CRM connection string</a> similar to Microsoft SQL Server. You can add the connection string to the connectionStrings section in app.config.</p>{% highlight javascript %}&lt;connectionStrings&gt;
  &lt;add name=&quot;Xrm&quot; connectionString=&quot;Authentication Type=Passport;
    Server=https://your-org-name.crm.dynamics.com;
    User ID=your-windowslive-id; Password=your-wlid-password;
    Device ID=your-device-id; Device Password=your-device-password&quot;/&gt;
&lt;/connectionStrings&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">To get the url for your CRM Server login to Microsoft Dynamics CRM and go to the Settings. Select the Customization group and select Customization. On the Customization page go to Developer Resources. There you will find the URL of your server.</p><p xmlns="http://www.w3.org/1999/xhtml">If you want to authenticate with your Windows Live Id you have to specify a Device Id and a Device Password. The Microsoft Dynamics CRM SDK contains a tool that helps you to create a registration for your device in the folder tools/deviceregistration. Open the project in Visual Studio and build the project. Then you will find the DeviceRegistration.exe in the folder bin/debug. Use the following command to see if your device is already registered:</p>{% highlight javascript %}deviceregistration /operation:show{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">If your device is not registered, create a new device registration with the following command:</p>{% highlight javascript %}deviceregistration /operation:register{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">If you want to use one of the <a href="http://msdn.microsoft.com/en-us/library/ff681567.aspx" target="_blank">other authentication mechanisms for CRM</a> you can skip this step.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Add Assemblies to Your Project</h3><p xmlns="http://www.w3.org/1999/xhtml">Take the assemblies microsoft.xrml.client.dll and microsoft.xrm.sdk.dll from the bin folder from the sdk. Then you should be able to connect to the Microsoft Dynamics CRM Server:</p>{% highlight javascript %}using (var crmContext = new CrmOrganizationServiceContext(new CrmConnection(&quot;Xrm&quot;)))
{
}{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Copy Customers From Microsoft Dynamics CRM  Into Time Cockpit</h2><p xmlns="http://www.w3.org/1999/xhtml">To copy customers from CRM into time cockpit we read all customers from CRM and from time cockpit. Then we check for each CRM customer if it is available in timecockpit. If not, we create a new customer, then we update all fields for the customer. To identify CRM customers in time cockpit we added a new property to the Customer entity in time cockpit.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/10/AddCrmUuidProperty.png" alt="Add CrmUuid Property" title="Add CrmUuid Property" class="mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused" />
</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2012/10/CustomerProperties.png" alt="CrmUuid Property" title="CrmUuid Property" class="mceC1Focused mceC1Focused" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Now it is easy to match customers in time cockpit and CRM.</p>{% highlight javascript %}// Connect to time cockpit
Console.WriteLine(&quot;Connect to time cockpit ...&quot;);
using (var timeCockpitDataContext = DataContext.Create(ConfigurationManager.AppSettings[&quot;timecockpitUsername&quot;], ConfigurationManager.AppSettings[&quot;timecockpitPassword&quot;]))
{
    // Connect to crm online
    Console.WriteLine(&quot;Connect to crm online ...&quot;);
    using (var crmContext = new CrmOrganizationServiceContext(new CrmConnection(&quot;Xrm&quot;)))
    {
        // Get customers from time cockpit
        Console.WriteLine(&quot;Get customers from time cockpit ...&quot;);
        var timeCockpitCustomers = timeCockpitDataContext.Select(&quot;From C In Customer Where C.CrmUuid &lt;&gt; Null Select C&quot;).ToDictionary(c =&gt; (Guid)c.GetMember(&quot;CrmUuid&quot;));

        // Get countries from time cockpit
        Console.WriteLine(&quot;Get countries from time cockpit ...&quot;);
        var timeCockpitCountries = timeCockpitDataContext.Select(&quot;From C In Country Where C.CountryName &lt;&gt; Null Select C&quot;).ToDictionary(c =&gt; (string)c.GetMember(&quot;CountryName&quot;));

        // Get customers from crm online
        Console.WriteLine(&quot;Get customers from crm online ...&quot;);
        var query = new QueryExpression();
        query.EntityName = &quot;account&quot;;
        query.ColumnSet = new ColumnSet(new string[] { &quot;accountid&quot;, &quot;accountnumber&quot;, &quot;name&quot;, &quot;emailaddress1&quot;, &quot;fax&quot;, &quot;address1_telephone1&quot;, &quot;address1_line1&quot;, &quot;address1_city&quot;, &quot;address1_postalcode&quot;, &quot;address1_country&quot; });
        var crmAccounts = crmContext.RetrieveMultiple(query);

        // Save customers
        Console.WriteLine(&quot;Save customers ...&quot;);
        var customerEntity = timeCockpitDataContext.Model.Entities[&quot;Customer&quot;];

        foreach (var crmCustomer in crmAccounts.Entities)
        {
            try
            {
                // Check if customer exists in time cockpit
                EntityObject timeCockpitCustomer = null;
                if (timeCockpitCustomers.ContainsKey(crmCustomer.Id))
                {
                    timeCockpitCustomer = timeCockpitCustomers[crmCustomer.Id];
                }

                if (timeCockpitCustomer == null)
                {
                    // Add customer to time cockpit
                    Console.WriteLine(&quot;\tAdd {0} - {1}&quot;, crmCustomer.Id, crmCustomer.Attributes[&quot;name&quot;]);
                    timeCockpitCustomer = customerEntity.CreateEntityObject&lt;EntityObject&gt;();
                    timeCockpitCustomer.SetMember(&quot;CrmUuid&quot;, crmCustomer.Id);
                }
                else
                {
                    // Customer already exists
                    Console.WriteLine(&quot;\tUpdate {0} - {1}&quot;, crmCustomer.Id, crmCustomer.Attributes[&quot;name&quot;]);
                }

                // Update properties of customer
                SetMember(&quot;name&quot;, &quot;Code&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;name&quot;, &quot;CompanyName&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;emailaddress1&quot;, &quot;Email&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;fax&quot;, &quot;Fax&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;address1_telephone1&quot;, &quot;Phone&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;address1_line1&quot;, &quot;Street&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;address1_city&quot;, &quot;Town&quot;, crmCustomer, timeCockpitCustomer);
                SetMember(&quot;address1_postalcode&quot;, &quot;ZipCode&quot;, crmCustomer, timeCockpitCustomer);
                SetRelation(&quot;address1_country&quot;, &quot;Country&quot;, crmCustomer, timeCockpitCustomer, timeCockpitCountries);

                timeCockpitDataContext.SaveObject(timeCockpitCustomer);
            }
            catch (Exception ex)
            {
                Console.WriteLine(&quot;\tAccount {0} - {1} could not be saved: {2}&quot;, crmCustomer.Id, crmCustomer.Attributes[&quot;name&quot;], ex.ToString());
            }
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">The SetMember Method copies the value for a property from CRM into time cockpit.</p>{% highlight javascript %}static void SetMember(string crmName, string timeCockpitName, Entity crmEntity, EntityObject timeCockpitEntity)
{
    if (!string.IsNullOrEmpty(crmName) &amp;&amp; crmEntity.Attributes.Contains(crmName))
    {
        timeCockpitEntity.SetMember(timeCockpitName, crmEntity.Attributes[crmName]);
    }
    else
    {
        timeCockpitEntity.SetMember(timeCockpitName, null);
    }
}

static void SetRelation(string crmName, string timeCockpitName, Entity crmEntity, EntityObject timeCockpitEntity, Dictionary&lt;string, EntityObject&gt; timeCockpitValues)
{
    if (!string.IsNullOrEmpty(crmName) &amp;&amp; crmEntity.Attributes.Contains(crmName))
    {
        if (timeCockpitValues.ContainsKey((string)crmEntity.Attributes[crmName]))
        {
            var value = timeCockpitValues[(string)crmEntity.Attributes[crmName]];
            timeCockpitEntity.SetMember(timeCockpitName, value);
            return;
        }
    }

    timeCockpitEntity.SetMember(timeCockpitName, null);
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">
  <a href="{{site.baseurl}}/content/images/blog/2012/10/ImportCustomersFromMicrosoftCRM.zip">Download sample to copy customers from CRM into time cockpit (Console Application)</a>
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Additional Resources</h2><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="http://msdn.microsoft.com/en-us/library/gg334357.aspx" target="_blank">Write code for Microsoft Dynamics CRM 2011 and Microsoft Dynamics CRM Online</a>
  </li>
  <li>
    <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">Scripting in time cockpit</a>
  </li>
</ul>