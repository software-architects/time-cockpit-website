---
layout: blog
title: Importing Data from SharePoint Lists via IronPython
teaser: Using just around 100 lines of code, basic customer master data can be imported from SharePoint to time cockpit. This can be achieved by using IronPython, the .net BCL and the SharePoint 2010 REST interface.
author: Simon Opelt
date: 2012-10-31
bannerimage: 
lang: en
permalink: /blog/2012/10/31/Importing-Data-from-SharePoint-Lists-via-IronPython
---

<h2>SharePoint List as a Data Source</h2><p>
  <a href="http://sharepoint.microsoft.com/" title="Microsoft SharePoint 2010" target="_blank">Microsoft SharePoint 2010</a> can be used to manage a company's base data. A list could look like the following sample:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/10/List.png" title="SharePoint List Data" />
</p><p>SharePoint uses columns of different types like <em>string/text</em> or <em>choice</em> which have been chosen for this article.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/10/ListColumns.png" title="List Columns" />
</p><p>The schema and data stored in SharePoint can be accessed in different ways. While end users use the web- or the rich-client, programs use the <a href="http://msdn.microsoft.com/library/ff798388.aspx" title="client-SDK" target="_blank">client-SDK</a> or the <a href="http://msdn.microsoft.com/library/ff798339.aspx" title="REST/XML service interface" target="_blank">REST/XML service interface</a>. The service interface provides easy access for fully fetching small- to mid-sized lists or manipulating entries. It is especially useful when using <a href="http://ironpython.net" title="IronPython" target="_blank">IronPython</a> and the <a href="http://msdn.microsoft.com/library/gg145045.aspx" title="BCL" target="_blank">BCL</a>. Another advantage of the service interface over the client SDK is that you do not have to add any additional libraries. The data can be fetched via <a href="http://msdn.microsoft.com/library/system.net.webrequest.aspx" title="web-requests" target="_blank">web-requests</a>. Use <a href="http://msdn.microsoft.com/library/system.xml.linq.xdocument.aspx" title="XDocument" target="_blank">XDocument</a> to process it.</p><p>The following code snippet shows one entry from the XML document of a complete list. Note that the values of nodes within the properties collection contain the relevant information.</p>{% highlight javascript %}  <entry m:etag="W/&quot;2&quot;">
    <id>http://sps2010/ImportDemo/_vti_bin/listdata.svc/Customer(2)</id>
    <title type="text">C2</title>
    <updated>2012-10-30T16:17:19+01:00</updated>
    <author>
      <name />
    </author>
    <link rel="edit" title="CustomerItem" href="Customer(2)" />
    <link rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Country" type="application/atom+xml;type=entry" title="Country" href="Customer(2)/Country" />
    <link rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/CreatedBy" type="application/atom+xml;type=entry" title="CreatedBy" href="Customer(2)/CreatedBy" />
    <link rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ModifiedBy" type="application/atom+xml;type=entry" title="ModifiedBy" href="Customer(2)/ModifiedBy" />
    <link rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Attachments" type="application/atom+xml;type=feed" title="Attachments" href="Customer(2)/Attachments" />
    <category term="Microsoft.SharePoint.DataService.CustomerItem" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme" />
    <content type="application/xml">
      <m:properties>
        <d:ContentTypeID>0x0100A129BD8C09415944A763E4D4C2E0BA13</d:ContentTypeID>
        <d:Title>C2</d:Title>
        <d:Name>Customer 2</d:Name>
        <d:CountryValue>AT</d:CountryValue>
        <d:Id m:type="Edm.Int32">2</d:Id>
        <d:ContentType>Item</d:ContentType>
        <d:Modified m:type="Edm.DateTime">2012-10-30T16:17:19</d:Modified>
        <d:Created m:type="Edm.DateTime">2012-10-30T16:14:19</d:Created>
        <d:CreatedById m:type="Edm.Int32">1</d:CreatedById>
        <d:ModifiedById m:type="Edm.Int32">1</d:ModifiedById>
        <d:Owshiddenversion m:type="Edm.Int32">2</d:Owshiddenversion>
        <d:Version>1.0</d:Version>
        <d:Path>/ImportDemo/Lists/Customer</d:Path>
      </m:properties>
    </content>
  </entry>{% endhighlight %}<h2>Customer Base Data in time cockpit</h2><p>In time cockpit the <em>Customer</em> entity has two mandatory fields (<em>Code</em> and <em>CompanyName</em>).</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/10/CustomerEntity.png" title="Customer time cockpit Entity" />
</p><p>To show a simple lookup on another entity the <em>Country</em> choice-column from SharePoint will be used to fill the <em>Country</em> relation. The <em>IsoCode</em> field is equals-matched against the value from SharePoint.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/10/Countries.png" title="Countires" />
</p><h2>A Simple Import Script</h2><p>To start off, a little boiler-plate for importing types, configuring SharePoint URLs and credentials, and defining XML-namespace constants is required.</p>{% highlight javascript %}clr.AddReference('System.Core')
clr.AddReference('System.Xml.Linq')
from System.Net import WebRequest, CredentialCache
from System.Xml.Linq import XDocument, XNamespace
from System.Collections.Generic import List, Dictionary
import System
clr.ImportExtensions(System.Linq)
dc = Context

# configuration
customerUrl = 'http://sps2010/ImportDemo/_vti_bin/listdata.svc/Customer'
credentials = CredentialCache.DefaultCredentials
# /configuration

nsD = clr.Convert('http://schemas.microsoft.com/ado/2007/08/dataservices', XNamespace)
nsM = clr.Convert('http://schemas.microsoft.com/ado/2007/08/dataservices/metadata', XNamespace){% endhighlight %}<p>The following function wraps fetching the XML-data from SharePoint and processing it into an XDocument.</p>{% highlight javascript %}# get XDocument from sharepoint
def getDocument(listUrl, credentials):
    request = WebRequest.Create(listUrl)
    request.Method = "GET"
    request.Credentials = credentials
    with request.GetResponse() as response:
        with response.GetResponseStream() as stream:
            return XDocument.Load(stream){% endhighlight %}<p>In order to ease XML-handling, several helper functions encapsulate how the XML-nodes are traversed and how their properties are extracted (e.g. as string values).</p>{% highlight javascript %}# extract named value from xml node
def getValue(startNode, name, valueConverter, valueNodeFallback):
    try:
        node = startNode.Descendants(nsD + name).SingleOrDefault()
        
        # fallback for choice strings
        if node is None:
            if valueNodeFallback:
                node = startNode.Descendants(nsD + (name + "Value")).Single()
            else:
                raise Exception(String.Format("Could not find node {0}", name))
            
        nullAttribute = node.Attribute(nsM + "null")
        if nullAttribute is not None and Convert.ToBoolean(nullAttribute.Value):
            return None
        else:
            return valueConverter(node.Value)
    except Exception, e:
        raise Exception(String.Format("Could not get value for {0}.", name), e)

# extract named string value from xml node
def getString(startNode, name, trim):
    value = getValue(startNode, name, Convert.ToString, True)
    if trim and not String.IsNullOrEmpty(value):
        return value.Trim()
    else:
        return value{% endhighlight %}<p>The next set of functions handles processing XML-sub-trees into time cockpit <em>Customer</em> EntityObjects. Note that <em>countries</em> is a <a href="http://msdn.microsoft.com/library/xfhwa508.aspx" title="dictionary" target="_blank">dictionary</a> used to look up <em>Country</em><a href="http://help.timecockpit.com/html/dfbc3e13-f897-51fd-b343-445a00f695b8.htm" title="EntityObjects" target="_blank">EntityObjects</a> via their ISO code. Maintaining the choice-column in SharePoint and the countries within time cockpit is not in the scope of this article.</p>{% highlight javascript %}# create Customer EntityObject from xml sub-tree
def getCustomer(node, dc, countries):
    code = getString(node, "Title", True)
    name = getString(node, "Name", True)
    countryCode = getString(node, "Country", True)
    customer = dc.CreateCustomer()
    customer.Code = code
    customer.CompanyName = name
    if not String.IsNullOrEmpty(countryCode):
        customer.Country = countries[countryCode]
    return customer

# get all customers from xml document
def getCustomers(doc, dc, countries):
    customers = doc.Descendants(nsM + "properties").Select(lambda n: getCustomer(n, dc, countries))
    return customers.ToDictionary(lambda c: c.Code, lambda c: c){% endhighlight %}<p>The last helper function compares already existing data with the data from SharePoint. First it looks at all new keys/customer codes from SharePoint and adds the corresponding EntityObjects to the result. Then all relevant members are checked for changes between SharePoint and time cockpit. If changes are found, the member values are put in the existing object which is added to result for updating it.</p>{% highlight javascript %}# determine new/updated customers (no deletion once imported)
def getUpdateBatch(existingCustomers, sharepointCustomers):
    result = List[EntityObject]()

    for key in sharepointCustomers.Keys.Except(existingCustomers.Keys):
        result.Add(sharepointCustomers[key])
    
    for key in existingCustomers.Keys.Intersect(sharepointCustomers.Keys):
        customer = sharepointCustomers[key]
        existing = existingCustomers[key]
    
        if customer.CompanyName != existing.CompanyName or customer.Country != existing.Country:
            existing.CompanyName = customer.CompanyName
            existing.Country = customer.Country
            result.Add(existing)

    return result{% endhighlight %}<p>The primary body of the script gets the necessary data (converted to a dictionary via LINQ for easier handling), determines which updates need to happen, and saves the changes within a transaction. </p>{% highlight javascript %}# get existing data from time cockpit
existingCustomers = dc.Select("From C In Customer.Include(*) Select C").ToDictionary(lambda c: c.Code, lambda c: c)
existingCountries = dc.Select("From C In Country Select C").ToDictionary(lambda c: c.IsoCode, lambda c: c)

# get customers from sharepoint
sharepointCustomersDoc = getDocument(customerUrl, credentials)
sharepointCustomers = getCustomers(sharepointCustomersDoc, dc, existingCountries)

# save changes
dc.BeginTransaction()
try:
    for customer in getUpdateBatch(existingCustomers, sharepointCustomers):
        Logger.Write(LogLevel.Verbose, "Saving {0}", customer.Code)
        dc.SaveObject(customer)
    dc.TryCommitTransaction()
except:
    dc.TryRollbackTransaction()
    raise{% endhighlight %}<h3>Source Code</h3><p>The full sample can be found at <a href="https://github.com/software-architects/TimeCockpit.Scripts/blob/master/TimeCockpit.Customers.Sharepoint/TimeCockpit.Customers.Sharepoint.py" target="_blank">our github repository</a>.</p><h2>Next Steps</h2><p>Based on extensions of this example different kinds of base data (e.g. projects, tasks ...) can be imported into time cockpit. In order to make it accessible to end-users in time cockpit, the script can be wrapped into an <a href="http://help.timecockpit.com/html/d11350b0-c965-47bf-8166-5ceda1541dee.htm" title="action" target="_blank">action</a> which can be triggered interactively/on demand. Another approach would be automating the import task through <a href="http://help.timecockpit.com/html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" title="ExecuteScript and a scheduler" target="_blank">ExecuteScript and a scheduler</a>.</p>