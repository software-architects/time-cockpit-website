---
layout: blog
title: Import Customers From Microsoft Dynamics CRM Online
excerpt: This sample shows how to import customers from Microsoft CRM into time cockpit using .NET (C#).
author: Karin Huber
date: 2012-10-30
bannerimage: 
bannerimagesource: 
lang: en
tags: [.NET,C#,time cockpit]
permalink: /blog/2012/10/30/Import-Customers-From-Microsoft-Dynamics-CRM-Online
---

<p>In the following sample we want to show how to import customers from Microsoft Dynamics CRM Online into time cockpit using .NET (C#).</p><h2>Access Time Cockpit in .NET</h2><p>When you create a new Visual Studio Project you have to take the following steps to access time cockpit:</p><ul>
  <li>Add references to time cockpit</li>
  <li>Add web service endpoint to app.config</li>
  <li>Create DataContext</li>
</ul><p>To skip these steps you can <a href="{{site.baseurl}}/content/images/blog/2012/10/EmptyTimeCockpitVisualStudioProject.zip">download our Visual Studio 2012 sample project</a> (console application), that already contains these three steps. We use time cockpit version 1.9.1824.28 for the sample project. These assemblies work for all versions starting with 1.8 and 1.9. If you use an older or newer version of time cockpit you should replace all assemblies in folder TimeCockpitReferences with the assemblies from your time cockpit installation directory (C:\Program Files\software architects\time cockpit\time cockpit 2010).</p><h3>Add References</h3><div>To access time cockpit from .NET you have to add the following references to your project:</div><div>
  <br />
</div><ul>
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
</ul><p>You can find all assemblies in the time cockpit installation directory (C:\Program Files\software architects\time cockpit\time cockpit 2010).</p><h3>Add Web Service Endpoint</h3><p>Time cockpit uses a web service to locate the <a href="http://help.timecockpit.com/?topic=html/227077bd-41f0-414f-b3f5-fa1f88cbb58f.htm#ServerStore" target="_blank">server data store</a> for your time cockpit account. You have to define the web service endpoint in the config file of your application:</p>{% highlight xml %}<?xml version="1.0" encoding="utf-8" ?>
<configuration>
    <system.serviceModel>
        <client>
            <endpoint name="" address="https://management.timecockpit.com/ManagementService.svc" binding="customBinding" 
                bindingConfiguration="CustomBinding_IManagementService" contract="WebManagementService.IManagementService" />
        </client>

        <bindings>
            <customBinding>
                <binding name="CustomBinding_IManagementService">
                    <security defaultAlgorithmSuite="Default" authenticationMode="UserNameOverTransport" requireDerivedKeys="true"
                        securityHeaderLayout="Strict" includeTimestamp="true" keyEntropyMode="CombinedEntropy"
                        messageSecurityVersion="WSSecurity11WSTrustFebruary2005WSSecureConversationFebruary2005WSSecurityPolicy11BasicSecurityProfile10">
                        
                        <localClientSettings cacheCookies="true" detectReplays="false" replayCacheSize="900000" maxClockSkew="23:00:00"
                            maxCookieCachingTime="Infinite" replayWindow="00:05:00" sessionKeyRenewalInterval="10:00:00"
                            sessionKeyRolloverInterval="00:05:00" reconnectTransportOnFailure="true" timestampValidityDuration="00:05:00"
                            cookieRenewalThresholdPercentage="60"/>
                        
                        <localServiceSettings detectReplays="false" issuedCookieLifetime="10:00:00" maxStatefulNegotiations="128"
                            replayCacheSize="900000" maxClockSkew="23:00:00" negotiationTimeout="01:01:00" replayWindow="00:05:00"
                            inactivityTimeout="00:02:00" sessionKeyRenewalInterval="15:00:00" sessionKeyRolloverInterval="00:05:00"
                            reconnectTransportOnFailure="true" maxPendingSessions="128" maxCachedCookies="1000" timestampValidityDuration="00:05:00"/>
                        <secureConversationBootstrap/>
                    </security>
                    
                    <textMessageEncoding maxReadPoolSize="64" maxWritePoolSize="16" messageVersion="Soap11" writeEncoding="utf-8">
                        <readerQuotas maxDepth="32" maxStringContentLength="8192" maxArrayLength="16384" maxBytesPerRead="4096" maxNameTableCharCount="16384"/>
                    </textMessageEncoding>
                    
                    <httpsTransport manualAddressing="false" maxBufferPoolSize="524288" maxReceivedMessageSize="65536" allowCookies="false"
                        authenticationScheme="Anonymous" bypassProxyOnLocal="false" decompressionEnabled="true" hostNameComparisonMode="StrongWildcard"
                        keepAliveEnabled="true" maxBufferSize="65536" proxyAuthenticationScheme="Anonymous" realm="" transferMode="Buffered"
                        unsafeConnectionNtlmAuthentication="false" useDefaultWebProxy="false" requireClientCertificate="false" />
                </binding>
            </customBinding>
            
            <wsHttpBinding>
                <remove name="WorkflowControlHttpsBinding"/>
                <binding name="WorkflowControlHttpsBinding" transactionFlow="true">
                    <security mode="Transport"/>
                </binding>
                
                <remove name="WorkflowControlHttpBinding"/>
                <binding name="WorkflowControlHttpBinding" transactionFlow="true"/>
            </wsHttpBinding>
        </bindings>
    </system.serviceModel>
</configuration>{% endhighlight %}<h3>Create DataContext</h3><p>Now you can connect to time cockpit by creating a DataContext. Use the same username and password you used to configure time cockpit after starting it the first time.</p>{% highlight c# %}using (var dataContext = DataContext.Create("username", "password"))
{
}{% endhighlight %}<p>Please note, that your are connected to the server data store of time cockpit. We recommend to import data on the server, because it is easier for time cockpit to download many changes to the clients than to upload many changes to the server. When reading or writing data in the server data store, you will not see changes in your local time cockpit immediately. You can wait until the data is synced automatically (by default every 15 minutes), trigger sync manually, switch to server mode or view the data in Silverlight.</p><p>
  <a href="{{site.baseurl}}/content/images/blog/2012/10/EmptyTimeCockpitVisualStudioProject.zip">Download sample to access time cockpit (Console Application)</a>
</p><h2>Connect to Microsoft Dynamics CRM</h2><p>If you want to access Microsoft Dynamics CRM programmatically, you have the choice among <a href="http://msdn.microsoft.com/en-us/library/gg327971.aspx" target="_blank">different kind of programming models for Microsoft Dynamics CRM</a>. We decided to use late-binding for our sample.</p><h3>Download Microsoft Dynamics CRM SDK</h3><p>The first step to get access to Microsoft Dynamics CRM is to <a href="http://www.microsoft.com/en-us/download/details.aspx?id=24004" target="_blank">download the SDK</a>. It contains the assemblies you need to connect, documentation, several tools and samples.</p><h3>Register Your Device</h3><p>To connect to CRM you need a <a href="http://msdn.microsoft.com/en-us/library/ff681567.aspx" target="_blank">CRM connection string</a> similar to Microsoft SQL Server. You can add the connection string to the connectionStrings section in app.config.</p>{% highlight xml %}<connectionStrings>
  <add name="Xrm" connectionString="Authentication Type=Passport;
    Server=https://your-org-name.crm.dynamics.com;
    User ID=your-windowslive-id; Password=your-wlid-password;
    Device ID=your-device-id; Device Password=your-device-password"/>
</connectionStrings>{% endhighlight %}<p>To get the url for your CRM Server login to Microsoft Dynamics CRM and go to the Settings. Select the Customization group and select Customization. On the Customization page go to Developer Resources. There you will find the URL of your server.</p><p>If you want to authenticate with your Windows Live Id you have to specify a Device Id and a Device Password. The Microsoft Dynamics CRM SDK contains a tool that helps you to create a registration for your device in the folder tools/deviceregistration. Open the project in Visual Studio and build the project. Then you will find the DeviceRegistration.exe in the folder bin/debug. Use the following command to see if your device is already registered:</p>{% highlight text %}deviceregistration /operation:show{% endhighlight %}<p>If your device is not registered, create a new device registration with the following command:</p>{% highlight text %}deviceregistration /operation:register{% endhighlight %}<p>If you want to use one of the <a href="http://msdn.microsoft.com/en-us/library/ff681567.aspx" target="_blank">other authentication mechanisms for CRM</a> you can skip this step.</p><h3>Add Assemblies to Your Project</h3><p>Take the assemblies microsoft.xrml.client.dll and microsoft.xrm.sdk.dll from the bin folder from the sdk. Then you should be able to connect to the Microsoft Dynamics CRM Server:</p>{% highlight c# %}using (var crmContext = new CrmOrganizationServiceContext(new CrmConnection("Xrm")))
{
}{% endhighlight %}<h2>Copy Customers From Microsoft Dynamics CRM  Into Time Cockpit</h2><p>To copy customers from CRM into time cockpit we read all customers from CRM and from time cockpit. Then we check for each CRM customer if it is available in timecockpit. If not, we create a new customer, then we update all fields for the customer. To identify CRM customers in time cockpit we added a new property to the Customer entity in time cockpit.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/10/AddCrmUuidProperty.png" alt="Add CrmUuid Property" title="Add CrmUuid Property" class="mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused" />
</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/10/CustomerProperties.png" alt="CrmUuid Property" title="CrmUuid Property" class="mceC1Focused mceC1Focused" />
</p><p>Now it is easy to match customers in time cockpit and CRM.</p>{% highlight c# %}// Connect to time cockpit
Console.WriteLine("Connect to time cockpit ...");
using (var timeCockpitDataContext = DataContext.Create(ConfigurationManager.AppSettings["timecockpitUsername"], ConfigurationManager.AppSettings["timecockpitPassword"]))
{
    // Connect to crm online
    Console.WriteLine("Connect to crm online ...");
    using (var crmContext = new CrmOrganizationServiceContext(new CrmConnection("Xrm")))
    {
        // Get customers from time cockpit
        Console.WriteLine("Get customers from time cockpit ...");
        var timeCockpitCustomers = timeCockpitDataContext.Select("From C In Customer Where C.CrmUuid <> Null Select C").ToDictionary(c => (Guid)c.GetMember("CrmUuid"));

        // Get countries from time cockpit
        Console.WriteLine("Get countries from time cockpit ...");
        var timeCockpitCountries = timeCockpitDataContext.Select("From C In Country Where C.CountryName <> Null Select C").ToDictionary(c => (string)c.GetMember("CountryName"));

        // Get customers from crm online
        Console.WriteLine("Get customers from crm online ...");
        var query = new QueryExpression();
        query.EntityName = "account";
        query.ColumnSet = new ColumnSet(new string[] { "accountid", "accountnumber", "name", "emailaddress1", "fax", "address1_telephone1", "address1_line1", "address1_city", "address1_postalcode", "address1_country" });
        var crmAccounts = crmContext.RetrieveMultiple(query);

        // Save customers
        Console.WriteLine("Save customers ...");
        var customerEntity = timeCockpitDataContext.Model.Entities["Customer"];

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
                    Console.WriteLine("\tAdd {0} - {1}", crmCustomer.Id, crmCustomer.Attributes["name"]);
                    timeCockpitCustomer = customerEntity.CreateEntityObject<EntityObject>();
                    timeCockpitCustomer.SetMember("CrmUuid", crmCustomer.Id);
                }
                else
                {
                    // Customer already exists
                    Console.WriteLine("\tUpdate {0} - {1}", crmCustomer.Id, crmCustomer.Attributes["name"]);
                }

                // Update properties of customer
                SetMember("name", "Code", crmCustomer, timeCockpitCustomer);
                SetMember("name", "CompanyName", crmCustomer, timeCockpitCustomer);
                SetMember("emailaddress1", "Email", crmCustomer, timeCockpitCustomer);
                SetMember("fax", "Fax", crmCustomer, timeCockpitCustomer);
                SetMember("address1_telephone1", "Phone", crmCustomer, timeCockpitCustomer);
                SetMember("address1_line1", "Street", crmCustomer, timeCockpitCustomer);
                SetMember("address1_city", "Town", crmCustomer, timeCockpitCustomer);
                SetMember("address1_postalcode", "ZipCode", crmCustomer, timeCockpitCustomer);
                SetRelation("address1_country", "Country", crmCustomer, timeCockpitCustomer, timeCockpitCountries);

                timeCockpitDataContext.SaveObject(timeCockpitCustomer);
            }
            catch (Exception ex)
            {
                Console.WriteLine("\tAccount {0} - {1} could not be saved: {2}", crmCustomer.Id, crmCustomer.Attributes["name"], ex.ToString());
            }
        }
    }
}{% endhighlight %}<p>The SetMember Method copies the value for a property from CRM into time cockpit.</p>{% highlight c# %}static void SetMember(string crmName, string timeCockpitName, Entity crmEntity, EntityObject timeCockpitEntity)
{
    if (!string.IsNullOrEmpty(crmName) && crmEntity.Attributes.Contains(crmName))
    {
        timeCockpitEntity.SetMember(timeCockpitName, crmEntity.Attributes[crmName]);
    }
    else
    {
        timeCockpitEntity.SetMember(timeCockpitName, null);
    }
}

static void SetRelation(string crmName, string timeCockpitName, Entity crmEntity, EntityObject timeCockpitEntity, Dictionary<string, EntityObject> timeCockpitValues)
{
    if (!string.IsNullOrEmpty(crmName) && crmEntity.Attributes.Contains(crmName))
    {
        if (timeCockpitValues.ContainsKey((string)crmEntity.Attributes[crmName]))
        {
            var value = timeCockpitValues[(string)crmEntity.Attributes[crmName]];
            timeCockpitEntity.SetMember(timeCockpitName, value);
            return;
        }
    }

    timeCockpitEntity.SetMember(timeCockpitName, null);
}{% endhighlight %}<p>
  <a href="{{site.baseurl}}/content/images/blog/2012/10/ImportCustomersFromMicrosoftCRM.zip">Download sample to copy customers from CRM into time cockpit (Console Application)</a>
</p><h2>Additional Resources</h2><ul>
  <li>
    <a href="http://msdn.microsoft.com/en-us/library/gg334357.aspx" target="_blank">Write code for Microsoft Dynamics CRM 2011 and Microsoft Dynamics CRM Online</a>
  </li>
  <li>
    <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">Scripting in time cockpit</a>
  </li>
</ul>