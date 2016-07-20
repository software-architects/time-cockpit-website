---
layout: page
title: Time Tracking Extensibility
permalink: /tour/extensibility/
---

<h1 xmlns="http://www.w3.org/1999/xhtml">Extensibility
		</h1><div class="tour" xmlns="http://www.w3.org/1999/xhtml">
  <div class="row">
    <div class="col-sm-12">
      <h2>Data Model
		</h2>
      <p class="Subheader">
        <span lang="EN-US">
          <strong>Tailor time cockpit to your needs by adding new tables, columns, validation rules, etc.</strong>
        </span>
      </p>
      <p>As a time cockpit administrator you can extend the data model of your subscription without any programming skills. Of course you will still receive updates for time cockpit even if you extended your data model.
		</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <ul class="checkList">
        <li>
          <strong>Add new tables and relations</strong>
          <br /> Extend time cockpit’s data model with new tables and relations. Time cockpit will auto-generate lists and forms for data maintenance automatically. You can customize them if needed.
					</li>
        <li>
          <strong>Add new properties</strong>
          <br /> Choose from a variety of support data types like text, numeric, date, etc.
					</li>
        <li>
          <strong>Add calculated properties</strong>
          <br /> Add calculations that reflect your specific business logic using <a href="http://help.timecockpit.com/html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">time cockpit’s formula language</a>.
					</li>
        <li>
          <strong>Add validation rules</strong>
          <br /> Time cockpit comes with a set of validation rules. Add additional ones to enforce business rules which are important for the consistency of your time recording database.
					</li>
      </ul>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:13f62e3e-825e-434f-ae16-957b9a2828b2" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>Data Access Permissions
				</h2>
      <p>
        <strong>Define data access permissions that fit to your company’s data access policies.</strong>
      </p>
      <p>As a time cockpit administrator you can create rules that define which users can access which tables and data rows. You do not need programming skills for building up a permission system. You use <a href="http://help.timecockpit.com/html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">time cockpit’s formula language</a> for that purpose.
				</p>
      <p>Permissions can depend on any user-related data in your time cockpit data model (e. g. is a user member of a certain group, is the user project manager for a specific project, etc.). Access permissions are enforced in the full client as well as in the online browser client.
				</p>
      <div></div>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:0309ad8b-152d-4451-a29c-e86ad50d9ffe" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>User Interface
				</h2>
      <p>
        <strong>Customize and extend time cockpit’s lists and forms to tailor them to your specific needs.</strong>
      </p>
      <p>As a time cockpit administrator you can customize lists and forms without needing to know a programming language like Python, C#, or VB.NET. Define Lists and Forms in an XML format that is easy to learn and understand. Time cockpit contains an editor for such XML definitions in which you can try your configuration changes before you publish them for other users. Time cockpit respects your custom lists and forms in the full client and the online browser client.
				</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:bf811252-67ad-4757-afb1-7092eca393eb" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>OData Web API
				</h2>
      <p>Time cockpit provides a platform-independent OData Web Service that you can use to read and write data over the web. Your data model customizations are fully respected (e.g. custom tables, custom columns, validation rules, permissions, etc.). Here are some sample scenarios for time cockpit’s OData Web API:
				</p>
      <ul class="checkList">
        <li>
          <strong>Data Analysis</strong>
          <br /> Complement time cockpit’s powerful reporting engine with interactive data analysis capabilities of e.g. Microsoft Excel with <a href="http://www.microsoft.com/en-us/download/details.aspx?id=39379" target="_blank">Power Query</a>. Use time cockpit’s OData feed as your data source.
					</li>
        <li>
          <strong>Data Integration</strong>
          <br /> Integrate your time tracking data in your existing reporting DB or data warehouse using e.g. <a href="http://www.microsoft.com/en-us/download/details.aspx?id=42280" target="_blank">OData support of SSIS</a> (SQL Server Integration Services).
					</li>
        <li>
          <strong>Custom Apps</strong>
          <br /> OData has been designed with browser apps in mind. Accessing time cockpit’s OData feed from JavaScript works like a charm. Build your own custom app using the time cockpit infrastructure in the background.
					</li>
      </ul>
      <p>Find more information on using the OData Web API in the <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">time cockpit documentation</a>.
		</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:d99dea2c-969f-4fa6-b62f-2dcd8f96601b" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>Scripting
				</h2>
      <p class="Subheader">
        <span lang="EN-US">
          <strong>Automate routine tasks using Python scripts.</strong>
        </span>
      </p>
      <p>
        <a href="http://www.python.org/doc/" target="_blank">Python</a> is one of the world’s most commonly used scripting languages. Time cockpit supports <a href="http://ironpython.net/" target="_blank">IronPython</a> scripts, therefore you have access to the entire <a href="http://msdn.microsoft.com/en-us/library/vstudio/w0x726c2.aspx" target="_blank">Microsoft .NET Framework</a> class library in your scripts. Use your favorite Python development environment or develop your scripts in time cockpit’s interactive Python editor. As a time cockpit administrator you can write scripts to automate certain tasks:
				</p>
      <ul class="checkList">
        <li class="Checklist">Import or export data to other systems via CSV files, XML files, web services, etc.
					</li>
        <li class="Checklist">Automatically create and send Microsoft Office Excel reports (<a href="{{site.baseurl}}/tour/reporting/">read more about reporting ...</a>)
					</li>
        <li class="Checklist">Implement processes like vacation confirmation, creation of invoices, etc.
					</li>
      </ul>
      <p>Time cockpit contains a command line tool to schedule scripts. Alternatively you can add your script to your time cockpit data model and let the user trigger it with a button or hyperlink (currently only limited support in the online browser client).
				</p>
      <p>
        <a href="http://help.timecockpit.com/html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">Read more about scripting in time cockpit’s online help ...</a>
      </p>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:b872a5d2-2647-4699-97fe-570695a4092d" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>Deployment of Customizations
				</h2>
      <p>
        <strong>You do not need to worry about deploying your customizations. Time cockpit deploys them automatically.</strong>
      </p>
      <p>Deploying customizations does not mean installing a new version of time cockpit. As an administrator you customize your time cockpit environment using the full client. When you are done, your changes are immediately visible in the online browser client. Your colleagues using the full client will receive your customizations automatically during the next synchronization.
				</p>
    </div>
  </div>
</div>