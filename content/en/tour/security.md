---
layout: page
title: Secure Time Tracking
ref: /de/tour/sicherheit/
permalink: /tour/security/
---

<h1>Security</h1><h2>Data Center Certifications</h2><p>
  <strong>Time cockpit runs in ISO certified data centers in the European Union.</strong>
</p><p>Time cockpit uses <a href="http://azure.microsoft.com/" target="_blank">Microsoft's Azure Cloud Platform</a> to provide its services. We deploy all our components to Azure’s European datacenters (Amsterdam and Dublin). The BSI Group certified Microsoft Azure datacenters based on the <a href="http://www.iso.org/iso/catalogue_detail?csnumber=42103" target="_blank">ISO/IEC standard 27001:2005</a>. The certification covers the components Compute, Storage, Virtual Network and Virtual Machine Services. Currently the certification does not yet cover the relational database service of Microsoft Azure (SQL Database). The <a href="http://azure.microsoft.com/en-us/support/trust-center/compliance/" target="_blank">Microsoft Azure Trust Center</a> contains detailed information about the compliance of Microsoft Azure with various compliance programs.</p><h2>E.U. Data Protection Directive</h2><p>
  <strong>Contracts regarding E.U. Data Protection Directive.</strong>
</p><p>We are a volume licensing customer for Microsoft. Our contract with Microsoft regarding Azure contains commitments especially relevant for end customers in the European Union:</p><ul class="checkList">
  <li>A Data Processing Agreement that details the compliance with the E.U. Data Protection Directive and related security requirements for Microsoft Azure core features within ISO/IEC 27001:2005 scope.</li>
  <li>E.U. Model Contractual Clauses that provide additional contractual guarantees around transfers of personal data for Microsoft Azure core features within ISO/IEC 27001:2005 scope.</li>
</ul><h2>Relational Database Security</h2><p>
  <strong>Database clusters, connection encryption, and firewalls</strong>
</p><p>In the cloud time cockpit stores most of your data in relational database clusters. The only exception is your encrypted activity log. It is stored in blobs (<a href="#BlobSecurity">read more about security for encrypted blobs ...</a>). Please note that currently the relational databases in Microsoft Azure are not within the ISO/IEC 27001:2005 scope.</p><ul class="checkList">
  <li>All our relational database servers in the cloud used by time cockpit are three-node failover clusters. In the case of hardware or failures in the underlying system software (operating system or RDBMS software), time cockpit is automatically redirected to a new cluster node. All cluster nodes are in the same datacenter facility. Backups for disaster recovery on datacenter-level are maintained by Microsoft.</li>
  <li>Network traffic to and from the database layer is SSL encrypted in all cases (both when accessed from cloud-based servers and from on-premise computers). Key handling is provided by the Microsoft Azure Platform.</li>
  <li>Database servers are protected by multiple layers of firewalls. The first layer provides an IP-based firewall. The second firewall layer (“gateway layer”) is a stateful firewall that understands SQL’s <em>Tabular Data Stream (TDS)</em> protocol. It protects the database against protocol attacks, brute-force password attacks, etc.</li>
</ul><h2>
  <a id="BlobSecurity" class="mce-item-anchor"></a>Activity Log in Encrypted Blobs</h2><p>
  <strong>Geo-replicated store for encrypted activity log</strong>
</p><p>Time cockpit stores your encrypted activity log in Microsoft Azure Blob Storage.</p><ul class="checkList">
  <li>The Blob Storage service is covered by the ISO/IEC standard 27001:2005 certification of Microsoft Azure.</li>
  <li>Data stored in the Blob Storage service is always stored on storage clusters (protection against server-level hardware failures).</li>
  <li>All data stored in the Blob Storage service is geo-replicated in both datacenters inside the European Union (Dublin and Amsterdam; disaster protection).</li>
</ul><h2>Cloud-based Web Servers</h2><p>
  <strong>Web farms, connection encryption, ISO certification</strong>
</p><p>The compute facilities for time cockpit web servers are covered by the ISO/IEC standard 27001:2005 certification of Microsoft Azure. We designed time cockpit to support all security and accessibility functions of the Microsoft Azure Platform:</p><ul class="checkList">
  <li>Operating system patches and service packs are automatically maintained by Microsoft.</li>
  <li>All web servers are implemented as clusters (web farms).</li>
  <li>Time cockpit is fully covered by the Azure Service Level Agreements provided by Microsoft.</li>
  <li>Firewalls and network components are provided by the Azure Platform and maintained by Microsoft.</li>
  <li>All web services and web sites of time cockpit are SSL secured.</li>
</ul><h2>Client Components</h2><p>
  <strong>Digitally signed .NET assemblies</strong>
</p><p>You install the time cockpit full client software using a standard-conform Windows Installer package (MSI package). It supports silent installation and automatic software deployment. All installation components (bootstrapper, MSI package) as well as all application assemblies are strong named and signed using a certificate.</p>