---
layout: blog
title: Time Cockpit and Cloud Security
excerpt: Nowadays people are on the alert for data security and privacy when it comes to cloud computing. Time cockpit is a SaaS offering in the cloud. In this article we want to describe in detail how we designed, developed, and how we operate time cockpit in order to be secure.
author: Rainer Stropek
date: 2013-11-29
bannerimage: 
bannerimagesource: 
lang: en
tags: [Azure,time cockpit]
permalink: /blog/2013/11/29/Time-Cockpit-and-Cloud-Security
---

<p>
  <img src="{{site.baseurl}}/content/images/blog/2013/11/TimeCockpitHttps-3.jpg" />
</p><h2>
  <span style="color: rgb(80, 80, 80); font-size: 14px; line-height: 22px;" data-mce-style="color: #505050; font-size: 14px; line-height: 22px;">Nowadays people are cautious about cloud computing because of data security and privacy issues. Time cockpit is a SaaS offering in the cloud. In this article I want to describe in detail how we designed, developed, and how we operate time cockpit in order to be secure. Depending on their use cases, our customers can use time cockpit in two different ways:</span>
</h2><ul>
  <li>
    <strong>Online in the browser</strong> by logging in to <a href="https://www.timecockpit.com" target="_blank">https://login.timecockpit.com</a>. This option is typically used if a customer works on a foreign computer (e.g. computer at a customer site) and needs access to her data in time cockpit.</li>
  <li>
    <strong>Offline-enabled full client</strong> which regularly synchronizes with the time cockpit database in the cloud. Customers who travel a lot typically prefer this option as it allows them to work with time cockpit even if they have no internet or work with a slow connection.</li>
</ul><p>Therefore, time cockpit consists of server- and client components which have to be protected. <a href="#server">In the following chapter</a> I describe the security concept for time cockpit's server infrastructure. <a href="#client">Later</a> you can read more about client-side security.</p><p>Time cockpit is a multi-tenant system and therefore separation of tenants is an important topic. In this article I describe how we do <a href="#multitenancy">tenant separation on database- and application-level</a>. The <a href="#activitylog">last chapter of this article</a> is dedicated to a data category which is specially protected in time cockpit: The Activity Log collected by time cockpit's <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">Signal Tracker</a>. </p><h2>
  <a id="server" name="server" class="mce-item-anchor"></a>1. Time Cockpit Server Infrastructure</h2><p>The entire server infrastructure of time cockpit consisting of application- and web-servers, database servers, and storage servers runs in the <a href="http://www.windowsazure.com" target="_blank" style="font-size: 14px; line-height: 22px;" data-mce-style="font-size: 14px; line-height: 22px;">Microsoft Windows Azure</a> cloud computing platform.</p><h3>1.1 Data Center Location and Data Privacy</h3><p class="showcase">At the time of writing, all server components of time cockpit are installed in European data centers inside the European Union.</p><p>A detailed description of data privacy policies can be found in the <a href="http://www.windowsazure.com/en-us/support/trust-center/privacy/" target="_blank"><em>Privacy</em> subsection of the Windows Azure Trust Center</a>. We are a <em>Windows Azure Volume Customer</em> and therefore the content regarding the <em>E.U. Data Protection Directive</em> applies to our time cockpit systems in Windows Azure.</p><h3>1.2 Platform as a Service (PaaS)</h3><p class="showcase">We only use <em>Platform as a Service</em> (PaaS) offerings and do not maintain and use <em>Infrastructure as a Service</em> (IaaS). Therefore we do not maintain the Windows operating system (e.g. installing servers, installing service packs and hotfixes, etc.) or other server-based Services (e.g. SQL Server) on our servers ourselves.</p><p>Using PaaS instead of IaaS is a core element of our security strategy. Having Microsoft maintaining all our platform components in a fully automated process, we can focus on the time cockpit application. If you want to know more about security-related topics concerning PaaS offerings in the Windows Azure platform, the following resources could be interesting for you:</p><ul>
  <li>
    <a href="http://www.windowsazure.com/en-us/support/trust-center/security/" target="_blank">
      <em>Security</em> subsection in the Windows Azure Trust Center</a>
  </li>
  <li>
    <span>
      <em>
        <a href="https://cloudsecurityalliance.org/research/ccm/" target="_blank">Cloud Security Alliance Cloud Controls Matrix</a>
      </em> (CCM) assists cloud customers in assessing the overall security risk of cloud providers. Microsoft provides a <a href="http://go.microsoft.com/fwlink/?linkid=293448&amp;clcid=0x409" target="_blank"><em>Standard Response to Request</em> for CCM-related questions</a>.</span>
  </li>
</ul><p>
  <span>The following list provides an overview of all PaaS components that we use for running the time cockpit SaaS service:</span>
</p><table>
  <tbody>
    <tr>
      <td>
        <strong>PaaS Windows Azure Component</strong>
      </td>
      <td>
        <strong>In time cockpit used for...</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.windowsazure.com/en-us/documentation/services/cloud-services/" target="_blank">Windows Azure Cloud Services</a>
      </td>
      <td>Web-Servers (except time cockpit homepage)</td>
    </tr>
    <tr>
      <td colspan="1">
        <a href="http://www.windowsazure.com/en-us/documentation/services/web-sites/" target="_blank">Windows Azure Websites</a>
      </td>
      <td colspan="1">Time cockpit homepage (including self-service account management portal)</td>
    </tr>
    <tr>
      <td colspan="1">
        <a href="http://www.windowsazure.com/en-us/documentation/services/sql-database/" target="_blank">Windows Azure SQL Database</a>
      </td>
      <td colspan="1">Storing relational time cockpit data (excluding <a href="#activitylog">encrypted activity log</a>)</td>
    </tr>
    <tr>
      <td colspan="1">
        <a href="http://www.windowsazure.com/en-us/documentation/services/storage/" target="_blank">Windows Azure Blob Storage</a>
      </td>
      <td colspan="1">Encrypted activity log
<br />
 Storing regular database backups</td>
    </tr>
    <tr>
      <td colspan="1">
        <a href="http://www.windowsazure.com/en-us/documentation/services/service-bus/" target="_blank">Windows Azure Service Bus</a>
      </td>
      <td colspan="1">Communication between nodes in web-server clusters</td>
    </tr>
  </tbody>
</table><h3>1.3 Certifications</h3><p>The Windows Azure platform complies with multiple data protection and security standards including ISO/IEC 27001:2005 as well as SOC 1 and SOC 2. A detailed list of certification can be found in the <a href="http://www.windowsazure.com/en-us/support/trust-center/compliance/" target="_blank"><em>Compliance</em> subsection of the Windows Azure Trust Center</a>.</p><p class="showcase">Note that at the time of writing the <em>Windows Azure SQL Database</em> service has not received ISO 27001 certification yet. However, if ISO 27001 compliance of the database is important for a time cockpit customer, we can support the customer to run time cockpit based on a compliant version of SQL Server in Windows Azure using <a href="http://www.windowsazure.com/en-us/solutions/infrastructure/" target="_blank">Windows Azure Infrastructure Services</a>. If you are interested in this option, please contact <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a>.</p><h3>1.4 Transport Layer Security</h3><p class="showcase">All traffic from and to time cockpit servers is protected by <a href="http://en.wikipedia.org/wiki/Secure_Sockets_Layer" target="_blank">TLS/SSL</a>.</p><ul>
  <li>All public time cockpit websites can be accessed using <em>http</em> or <em>https</em>. </li>
  <li>The <a href="~/sign-in" target="_blank">self-service portal</a> for which you have to log in can only be accessed using <em>https</em>. The related SSL certificates are managed by us.</li>
  <li>The REST web services used by the time cockpit browser client also use <em>https</em>. The related SSL certificates are managed by us.</li>
  <li>The REST web services used to access storage clusters use <em>https</em>. The related SSL certificates are provided and managed by Microsoft.</li>
  <li>The time cockpit database servers require <em>SSL-encrypted</em> TDS connections (Tabular Data Stream) independent whether the connection comes from a web server or from a client PC. The related SSL certificates are provided and managed by Microsoft.</li>
  <li>Traffic between Windows Azure data centers is encrypted by Microsoft. Details about these security features can be found in <a href="http://www.windowsazure.com/en-us/support/legal/security-overview/" target="_blank">Windows Azure Support pages</a>.</li>
</ul><h3>1.5 Credit Card Data</h3><p class="showcase">We never store credit card data in any of our databases. Credit card handling is done using services of our partner <a href="http://www.ogone.com/" target="_blank">Ogone</a>.</p><h3>1.6 High Availability Clusters and SLA</h3><p class="showcase">Server systems of time cockpit are implemented as failover- or load-balancing-clusters. </p><ul>
  <li>All web servers that provide the REST web services for time cockpit are load-balancing clusters consisting of at least two deployed instances. Therefore Microsoft gives us an SLA of 99.95%*.</li>
  <li>All SQL databases of time cockpit are failover clusters consisting of three nodes. A detailed description of clustering in Windows Azure SQL Databases can be found in <a href="http://msdn.microsoft.com/en-us/library/windowsazure/hh852669.aspx#adr1" target="_blank">MSDN</a>. The SLA for SQL databases provided by Microsoft is 99.9%*.</li>
  <li>All storage servers are auto-scaling clusters where data is stored on at least three different servers. Geo-replication is turned on so data on storage servers is automatically replicated to a second data center in the same geographical region. There it is stored on at least three different servers, too. Microsoft provides an SLA for storage services of 99.9%*.</li>
</ul><p>*) For details about SLAs see <a href="http://www.windowsazure.com/en-us/support/legal/sla/" target="_blank">Service Level Agreements subsection in Windows Azure Support pages</a>.</p><h3>1.7 Firewalls</h3><p class="showcase">Windows Azure provides comprehensive firewall infrastructure for all of time cockpit's server components.</p><ul>
  <li>A description of the general security design in Windows Azure can be found in <a href="http://www.windowsazure.com/en-us/support/legal/security-overview/" target="_blank">Windows Azure Support pages</a>.</li>
  <li>SQL databases are especially protected in Windows Azure. A description of the SQL firewall which we use in time cockpit, too, can be found in <a href="http://msdn.microsoft.com/en-us/library/windowsazure/ee621782.aspx" target="_blank">MSDN</a>.</li>
</ul><h3>1.8 Backup and Disaster Recovery</h3><p>The Windows Azure Platform provides backups for disaster recovery out of the box (see e.g. <a href="http://msdn.microsoft.com/en-us/library/windowsazure/hh852669.aspx#adr1" target="_blank">this article in MSDN</a> for a description of database backups for cases of simultaneous or catastrophic hardware and system failures). Additionally, we backup time cockpit databases into <em>Windows Azure Storage</em> daily. These backups are transferred to a second data center in the same geographic region automatically.</p><p class="showcase">Note that we currently do not offer a guaranteed service level for the backups we create and we do not generally make them available to customers. We can support customers for setting up custom backup strategies to protect themselves for unwanted modifications/deletions or widespread loss of data center facilities. If you are interested in this topic, please contact <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a>.</p><h2>
  <a id="multitenancy" name="multitenancy" class="mce-item-anchor"></a>2. Multi-Tenancy</h2><h3>2.1 Introduction</h3><p>Time cockpit is a multi-tenant system. That means that a single server farm serves multiple customers. Time cockpit was built with multi-tenancy in mind from the first day on. In this chapter I describe the mechanisms we implemented to ensure proper separation of tenants.</p><h3>2.2 Tenant Separation on Database Level</h3><p>Time cockpit does not use a shared-table approach. Therefore we never store time tracking data of multiple tenants in a single table. Instead, we separate tenants using separate databases, separate database clusters, or separate database schemas.</p><ul>
  <li>When a customer registers for time cockpit, we create a dedicated <a href="http://technet.microsoft.com/en-us/library/ms189462.aspx" target="_blank">SQL Server Schema</a> in one of our production database clusters.</li>
  <li>For every user that is created for a specific tenant, we create a dedicated <a href="http://technet.microsoft.com/en-us/library/ms173463.aspx" target="_blank">SQL Server User</a> with a strong password automatically. The user's access permissions are strictly limited to his tenant's schema.</li>
</ul><p class="showcase">For customers who want even stronger separation, we support storing their tenant's data in a separate database cluster. This cluster can either run in our Windows Azure subscription or - if the users wants full control over all aspects of his time cockpit database - in the subscription of the customers.</p><p>At the time of writing we do not have a formal pricing model for providing a separate database cluster for a single tenant. Our current practice is to offer this service for free for time cockpit customers with at least 20 active users. We charge a small setup fee for smaller tenants who still want to have a separate database cluster. If you are interested in this offering, please contact <a href="mailto:support@timecockpit.com" target="_blank">support@timecockpit.com</a>.</p><h3>2.3 Tenant Separation on Application Level</h3><p>Time cockpit uses a domain-specific query language (<a href="http://help.timecockpit.com/?topic=html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">TCQL</a>) for accessing a tenant's database. TCQL was designed with multi-tenancy in mind. It injects the previously mentioned database schema into database query at a very low level. Therefore no developer can forget about filtering on a tenant's schema. Even if there would be mistake in this logic, the access permissions on the database level described above would prevent showing data to a wrong tenant.</p><h3>2.4 Running Custom Script on the Server</h3><p>One of the unique features of time cockpit is extensibility. Our customers can change the data model of their database and they can automate processes using <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">scripts</a>. These scripts typically run in the time cockpit full client. In this case multi-tenancy is not relevant because one full client is only connected to one tenant.</p><p>By default, custom scripts cannot be used in the browser client because they would be executed in the multi-tenant server farm. If a customer wants to enable certain scripts in the browser client, these scripts must have been manually inspected by our developers. They check if database access is only done using the official database access layer of time cockpit. Scripts are generally rejected if they perform security-critical operations (e.g. try to access the file system). If a script has successfully been checked, it is digitally signed.</p><p class="showcase">The time cockpit server infrastructure only executes time cockpit scripts which are digitally signed.</p><h3>2.5 User and Password Data</h3><p>Data about time cockpit users and password are not stored in the tenants' databases. We store them in a separate place.</p><p class="showcase">Time cockpit passwords are not stored in plain text. We store a <a href="http://en.wikipedia.org/wiki/Salt_(cryptography)" target="_blank">salted</a><a href="http://en.wikipedia.org/wiki/SHA-1" target="_blank">SHA1</a> hash for passwords. </p><h2>
  <a id="client" name="client" class="mce-item-anchor"></a>3. Client</h2><p>In order to enable offline work, the full client of time cockpit stores data on the PC where it is installed. Data and/or configuration changes are synchronized automatically. By default this is done every 15 minutes; this interval can be changed if necessary.</p><p>The time cockpit full client contains functions which help to protect its locally stored data:</p><ol>
  <li>Sensitive data (e.g. time cockpit user name, time cockpit password, personal <a href="http://help.timecockpit.com/?topic=html/252608c7-8762-4745-ad68-b495fbf0a17f.htm#WizardStep04" target="_blank">signal data password</a>) is encrypted using <a href="http://en.wikipedia.org/wiki/RSA_(algorithm)" target="_blank">RSA</a>/<a href="http://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank">Rijndael</a>. The RSA key is stored and protected by a Windows Key Container in the user's Windows Profile (for more, technical information see <a href="http://msdn.microsoft.com/en-us/library/tswxhw92(v=vs.85).aspx" target="_blank">MSDN</a>).</li>
  <li>The local time cockpit database is password protected (for more, technical details see <a href="http://technet.microsoft.com/en-us/library/aa257373(v=sql.80).aspx" target="_blank">MSDN</a>) and encrypted (for more, technical details see <a href="http://technet.microsoft.com/en-us/library/aa237941(v=sql.80).aspx" target="_blank">MSDN</a>). Note that this mechanisms provides only basic protection. If you want to protect your time cockpit data in case of e.g. a stolen laptop, you have to use common disk encryption technologies (e.g. Windows BitLocker, <a href="http://www.truecrypt.org/" target="_blank">TrueCrypt</a>).</li>
  <li>Data which is automatically collected by time cockpit's <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">Signal Tracker</a> is <a href="http://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank">AES</a>-encrypted (256 bit key length) with a strong, auto-generated key. This key is protected by the user's personal <a href="http://help.timecockpit.com/?topic=html/252608c7-8762-4745-ad68-b495fbf0a17f.htm#WizardStep04" target="_blank">signal data password</a>. This password is never transferred </li>
</ol><p>It is important to note that time cockpit by nature cannot fully protect local data from users who have full access to your PC. The security of the time cockpit full client is primarily determined by the security of the PC. Customers have to care for appropriate security mechanisms on the PC themselves. Microsoft provides <a href="http://windows.microsoft.com/en-us/windows/security-privacy-accounts-help#security-privacy-accounts-help=windows-8" target="_blank">more information</a> about how to protect your Windows PCs (e.g. encrypt disks with BitLocker, use appropriate password policies, use anti-virus and malware detection software, keep your PC up to date, etc.).</p><h2>
  <a id="activitylog" name="activitylog" class="mce-item-anchor"></a>4. Encryption of Activity Log Data</h2><p>
  <span>Data in time cockpit can be divided into two categories:</span>
</p><ul>
  <li>Master and time tracking data (e.g. customers, projects, tasks, time sheet entries, invoices, etc.)</li>
  <li>Data collected by time cockpit's <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">Signal Tracker</a></li>
</ul><p>Master and time tracking data is stored in relational databases. On the server, this data is not encrypted. On the client, the local time cockpit database is password-protected and encrypted. For <em><span>details see...</span></em></p><p>Automatically collected signal data (e.g. computer activity, active window title) is especially protected. Data privacy is an important concern in this area. To protect signal data, time cockpit encrypts it whenever it is stored on the client and on the server:</p><ul>
  <li>Data which is automatically collected by time cockpit's <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">Signal Tracker</a> is <a href="http://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank">AES</a>-encrypted (256 bit key length) with a strong, auto-generated key. </li>
  <li>The key mentioned above is derived (<a href="http://www.ietf.org/rfc/rfc2898.txt" target="_blank">RFC 2898</a>) from the user's personal <a href="http://help.timecockpit.com/?topic=html/252608c7-8762-4745-ad68-b495fbf0a17f.htm#WizardStep04" target="_blank">signal data password</a>. This password is not recoverable and is never transferred into the cloud. If a user wants to access her signal data on multiple devices, she has to manually type in the signal data password on all devices.</li>
</ul><p class="showcase">By encrypting the user's activity log with her personal password, time cockpit makes sure that other users who do not know this password can decrypt and read the activity log. Time cockpit does not contain any functions which enable sharing ones activity log or analysis of the activity logs of multiple people by e.g. a team leader.</p><h2>5. Additional Resources</h2><ul>
  <li>
    <a href="http://www.windowsazure.com/en-us/support/trust-center/" target="_blank">Windows Azure Trust Center</a>
  </li>
  <li>
    <a href="http://msdn.microsoft.com/en-us/library/windowsazure/dd163896.aspx" target="_blank">Windows Azure in Microsoft Developer Network Library</a> (MSDN)</li>
</ul>