---
layout: blog
title: Raise Productivity by Enhancing Your Billing Process
teaser: If you introduce time tracking in your company you usually want to accomplish certain goals. You might want get more insight into how you spend your time to increase productivity, or maybe you want to monitor the progress of your projects. If you work in a service company, you know that time tracking is important because it is a fundamental part of your billing and calculation processes. Working without time tracking would be like flying blind without instruments. Integrating your time tracking tool with a dedicated invoicing service reduces the number of mistakes and frees you from unnecessary administrative work. In this article you will learn what time cockpit offers for invoicing out of the box and how you can easily integrate it with the online billing system billomat.
author: Karin Huber
date: 2012-12-27
bannerimage: 
lang: en
permalink: /blog/2012/12/27/Raise-Productivity-by-Enhancing-Your-Billing-Process
---

<p>
  <strong>If you introduce time tracking in your company you usually want to accomplish certain goals. You might want get more insight into how you spend your time to increase productivity, or maybe you want to monitor the progress of your projects. If you work in a service company, you know that time tracking is important because it is a fundamental part of your billing and calculation processes. Working without time tracking would be like flying blind without instruments. Integrating your time tracking tool with a dedicated invoicing service reduces the number of mistakes and frees you from unnecessary administrative work. In this article you will learn what time cockpit offers for invoicing out of the box and how you can easily integrate it with the online billing system <em>billomat</em>.</strong>
</p><ol>
  <li>
    <strong>
      <a href="#TimeCockpitInvoicing">Invoicing in Time Cockpit</a>
    </strong>
  </li>
  <li>
    <strong>
      <a href="#InvoicingServices">Invoicing Services</a>
    </strong>
  </li>
  <li>
    <strong>
      <a href="#Billomat">Time Cockpit and Billomat</a>
    </strong>
  </li>
  <li>
    <strong>
      <a href="#Summary">Summary</a>
    </strong>
  </li>
</ol><h2>
  <a id="TimeCockpitInvoicing" name="TimeCockpitInvoicing" class="mceItemAnchor"></a>Invoicing in Time Cockpit</h2><h3>Available Support for Invoicing</h3><p>When we started time cockpit our goal was to provide the best time <em>tracking</em> solution we can - and we really meant the process of <em>tracking</em> your time. That's why we have built the <a href="{{site.baseurl}}/tour/activity-tracking/" target="_blank">activity log</a> that helps you to remember how you spent your time. We wanted to make it as easy as possible to track every single working hour and assign it to a project or task.</p><p>For downstream processes like invoicing or calculation we have only added basic support because there are many specialized solutions that do a better job in this area. Let's take a look at what time cockpit offers for creating invoices out of the box. To create an invoice in time cockpit you can select one or more unbilled time sheet entries (note that there is a dedicated list for unbilled timesheets) from the same project and create a new invoice. The following screenshot shows how this is done. Note the menu item <em>Create Invoice</em> in the context menu.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/UnbilledTimesheets.png" alt="Unbilled time sheet entries" title="Unbilled time sheet entries" />
</p><p>When you have created the invoice you will find it in the invoice list. Time cockpit has calculated the revenue based on the time sheet entries and the hourly rate. Additionally it has calculated the corresponding costs based on the imputed hourly rate for each employee. Based on revenue and costs you can easily calculate the contribution margin for each invoice.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Invoice.png" alt="Invoice" title="Invoice" />
</p><p>Note that many time cockpit users tailor the <em>Invoice</em> entity to their specific needs. They add additional fields (e.g. for travel expenses) or even additional entities (e.g. for invoice line items). Time cockpit supports such customizations without any programming skills.</p><h3>What Happens When You Create an Invoice in Time Cockpit?</h3><p>If you create an invoice based on time sheet records, time cockpit performs the following steps behind the scenes:</p><ol>
  <li>It creates a record in the <em>Invoice</em> entity and sets properties like invoice date automatically.</li>
  <li>It iterates over all selected time sheet records and calculates revenue and costs. The total revenue and the total costs are written into the invoice record. This is important as hourly rates may change. The invoice's total revenue and the total costs will not be influenced by such changes.</li>
  <li>Last but not least it assigns the time sheet record to the invoice. With this you can easily recreate a time protocol for an invoice whenever you need it.</li>
</ol><p>The entire process is done inside a transaction. If anything goes wrong, all changes are rolled back. Therefore your time tracking database will always have a consistent state.</p><h3>Limitations</h3><p>This is where the job of time cockpit ends. Now you have to open some text editor and create an invoice which you can send to your end customer. Some time cockpit users (e.g. <a href="{{site.baseurl}}/solutions/case-studies/softaware-gmbh/" target="_blank">softaware</a>) have automated this process using time cockpit's <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripting</a> feature. If you only write a handful of invoices per month a purely manual process might be sufficient. For a larger amount of invoices, relying on manual work is error prone and time-consuming. Using specialized invoicing software can save you lots of time each month.</p><h2>
  <a id="InvoicingServices" name="InvoicingServices" class="mceItemAnchor"></a>Invoicing Services</h2><h3>What Can Invoicing Software Do For You?</h3><p>Invoicing software helps you to create estimates, orders, invoices, recurring invoices and reminders. Usually you can manage a list of customers and create estimates, invoices and so on for them. They support storing data like address, bank information, tax rules, discount rates or terms of payments for every customers. When you create a new invoice for a specific customer, its master data is automatically used. The following screenshot shows a new invoice in the online billing service <a href="http://www.billomat.com/en" target="_blank">billomat</a>:</p><p>
  <img src="http://www.billomat.com/content/01-tour/dashboard.de.png" alt="Billomat invoice" title="Billomat invoice" />
</p><p>After entering all invoice line items, you can create a PDF document. In some invoicing solutions you can choose from a number of predefined templates, others allow you to completely design your own layout. Once the document is created, most invoicing software products allow you to send it via email, fax or post. Additionally some invoicing solutions offer payment gateways like Google Checkout or PayPal that allow you to accept online payments.</p><h3>Advantages</h3><p>Independent of whether you use time cockpit or any other time tracking tool, using a dedicated tool for automating your invoicing process offers you a lot of advantages. Here are some examples:</p><ol>
  <li>You enter your customers' master data once. The tool uses it automatically whenever you create an invoice. This <strong>reduces the risk of errors</strong>.</li>
  <li>The tool will take care of things like invoice numbering, calculating taxes, etc. This <strong>saves time</strong> and avoids mistakes.</li>
  <li>Invoicing is important but getting the money is crucial. With invoicing tools you can effortlessly <strong>setup a dunning process</strong>.</li>
  <li>A properly setup invoicing tool makes your invoicing process <strong>independent of individual people</strong> to a certain amount.</li>
</ol><h2>
  <a id="Billomat" name="Billomat" class="mceItemAnchor"></a>Time Cockpit and Billomat</h2><h3>Why We Go for Billomat</h3><p>Today time cockpit does not come with a ready-made interface to invoicing tools out of the box. Although many time cockpit customers have proven that creating such an interface with <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripts</a> is easy, we want to integrate time cockpit with certain invoicing tools out of the box in the future. Recently we started to evaluate different invoicing solutions like <a href="http://www.freshbooks.com/" target="_blank">FreshBooks</a>, <a href="http://www.invoicera.com/" target="_blank">Invoicera</a>, <a href="https://www.billgrid.com/" target="_blank">BillGrid</a> and <a href="http://www.billomat.com/en" target="_blank">billomat</a>. Our idea was to select one and use it for our own billing process first (note that we use a different, fully automated solution for time cockpit subscription invoices. This article just concentrates on how we do invoicing for <a href="~/blog/2012/12/27/Time-cockpit-in-Action-at-Software-Architects" target="_blank">consulting projects</a>). We want to integrate our internal learnings in the upcoming integration feature.</p><p>Finally we decided to take our first steps with <a href="http://www.billomat.com/en" target="_blank">billomat</a> because of four reasons:</p><ul>
  <li>While time cockpit is focused on time tracking, <strong>billomat is entirely focused on invoicing</strong>. It is really easy to use. There is no project management or time tracking. It just creates estimates, orders and invoices. And this is what it does really well.</li>
  <li>
    <strong>Pricing is very moderate</strong>. With "Plan M" you can manage 500 customers and 50 documents per month for 9 EUR per month.</li>
  <li>All <strong>documents are fully customizable</strong> with Microsoft Word templates.</li>
  <li>The <strong>API</strong> is well documented and easy to use. Integrating it with time cockpit's scripts is easy.</li>
</ul><h3>Scripts for Customer Master Data Interface</h3><p>In our company <em>software architects</em> we track every hour we work in time cockpit. We generate invoice records for consulting projects in time cockpit to get the billable revenue (see description above). Until recently we manually generated PDF invoices with Microsoft Word. This is what we wanted to change. As mentioned before time cockpit will get an interface to billomat in some of the next versions. Today you have to write some lines of script code to exchange data between the two SaaS offerings. If you want to optimize your invoicing process today and you do not want to wait until the standard interface comes in time cockpit, you can start today. In order to make your first steps easier I share some example scripts below. They are similar to what we have created for our own internal use.</p><p>We decided to import our customers from time cockpit into billomat with a <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">script</a> (IronPython). To identify already exported customers we have added a new property <em>BillomatID</em> to our <em>Customer</em> entity. You can use the following script to add this property to your time cockpit environment:</p>{% highlight javascript %}Context.EnableSystemMode()
model = Context.GetWritableModel()

model.Customer.Properties.Add(
    NumericProperty(
    { 
        "Name": "BillomatID", 
        "InvariantFriendlyName": "Billomat ID", 
        "Scale": 0, 
        "Precision": 18,
        "IsNullable": True, 
        "Ownership": Ownership.ApplicationSpecific 
    }))

Context.SaveModel(model){% endhighlight %}<p>The following script selects all customers in time cockpit and inserts or updates them in billomat:</p>{% highlight javascript %}clr.AddReference('System.Xml.Linq')
from System.Xml.Linq import XDocument, XNamespace, XElement
from System.Net import WebRequest, CredentialCache, NetworkCredential
from System.Text import UTF8Encoding
from System.IO import Stream, StreamReader, StringReader
from System import String
from System.Threading import Thread
from System.Globalization import CultureInfo

#################################################################################
apiUrl = "https://[your billomat id].billomat.net/api/"
apiToken = "[your api key]"
update = False
#################################################################################

def GetItems(resource, id): 
    url = apiUrl + resource
    if id != None:
        url = url + "/" + id
    request = WebRequest.Create(url)
    request.Method = "GET"
    request.Headers["X-BillomatApiKey"] = apiToken
    request.Accept = "application/xml"
    
    response = request.GetResponse()
    stream = response.GetResponseStream()
    reader = StreamReader(stream)
    result = reader.ReadToEnd()
    reader.Close()
    stream.Close()
    response.Close()
    
    return result
    
def SaveItem(resource, id, xml):
    data = encoding.GetBytes(xml.ToString())
    
    url = apiUrl + resource
    if id != None:
        url = url + "/" + id.ToString()
    request = WebRequest.Create(url)
    
    if id == None:
        request.Method = "POST"
    else:
        request.Method = "PUT"
        
    request.Headers["X-BillomatApiKey"] = apiToken
    request.Accept = "application/xml"
    request.ContentType = "application/xml"
    request.ContentLength = data.Length
    
    stream = request.GetRequestStream()
    stream.Write(data, 0, data.Length)
    stream.Close()
    
    response = request.GetResponse()
    stream = response.GetResponseStream()
    reader = StreamReader(stream)
    result = reader.ReadToEnd()
    reader.Close()
    stream.Close()
    response.Close()
    
    if response.StatusCode.ToString() == "OK" or response.StatusCode.ToString() == "Created":
        return result
    else:
        print response.StatusCode
        return None
    
def UpdateCustomers():
    for customer in Context.Select("From C In Customer.Include('Country') Select C"):
        xml = XDocument()
        client = XElement("client")
        xml.Add(client)
        client.Add(XElement("name", customer.CompanyName))
        client.Add(XElement("street", customer.Street))
        client.Add(XElement("zip", customer.ZipCode))
        client.Add(XElement("city", customer.Town))
        client.Add(XElement("country_code", customer.Country.IsoCode))
        client.Add(XElement("phone", customer.Phone))
        client.Add(XElement("fax", customer.Fax))
        client.Add(XElement("email", customer.Email))
        client.Add(XElement("vat_number", customer.VatID))
                
        if customer.APP_BillomatID == None:
            print customer.Code
        else:
            print customer.Code + " - " + customer.APP_BillomatID.ToString()
            
        result = SaveItem("clients", customer.APP_BillomatID, xml)
        
        if result == None:
            print "\tERROR: Customer " + customer.CompanyName + " could not be imported"
        else:
            if customer.APP_BillomatID == None:
                xdoc = XDocument.Parse(result)
                customer.APP_BillomatID = xdoc.Element("client").Element("id").Value
                Context.SaveObject(customer)
    
encoding = UTF8Encoding()
Thread.CurrentThread.CurrentCulture = CultureInfo("en-US")    

UpdateCustomers(){% endhighlight %}<h3>Basic Invoicing Process</h3><p>A basic invoicing process with time cockpit and billomat could look as follows:</p><ol>
  <li>First you run the script to update all customers in billomat (you can automate this process using time cockpit's <a href="http://help.timecockpit.com/?topic=html/7c78b76a-2526-4408-accc-ccae19bbca45.htm" target="_blank">ExecuteScript</a> feature). When a customer is imported for the first time, you should complete some data like payment terms or tax rules in billomat.</li>
  <li>Open the <em>Unbilled Time Sheets</em> list. Select all time sheet entries from the project that you want to bill and select <em>Create invoice</em> in the context menu.</li>
  <li>Switch to the invoice list and open the new invoice to get the revenue to bill.</li>
  <li>Switch to billomat and create a new invoice.</li>
  <li>Add a new position to the invoice with the calculated revenue from time cockpit. You might have to add other positions for travel expenses.</li>
  <li>Finally complete the invoice and send it via email in billomat. Then go back to step 3 and proceed with the next project.</li>
  <li>Each morning you check your account statement for incoming payments and mark the corresponding invoices in billomat as paid.</li>
</ol><p>Automating steps 2 to 6 is technically simple. However, we decided to stick to a manual process here. Beside time cockpit subscriptions we only have a few consulting invoices each month. Many customers have some specific wishes concerning the invoice line item texts. Implementing all these rules in the interface would not pay off. However, at the time when we ship our standard integration with billomat, you will be able to fully automate your entire billing process.</p><h2>
  <a id="Summary" name="Summary" class="mceItemAnchor"></a>Summary</h2><p>Before using billomat we wrote every consulting invoice manually with Microsoft Word and we really save lots of time now as billomat creates most parts of the invoice automatically. We do not have to care about the correct address, tax rules, VAT number, discounts or payments terms for each customer anymore. We just add the invoice positions and we are done. If you want to try it yourself you can create a free billomat account for up to 25 customers and 5 documents per month.</p><p>Our goal is to directly create a billomat invoice in time cockpit and add a position with the calculated revenue. After you have created an invoice in time cockpit you should be able to switch to billomat and send the invoice without further modifications. Do you have specific needs concerning such an integration? We would be more than happy to <a href="{{site.baseurl}}/help-support/contact-us/" target="_blank">receive your feedback</a>.</p>