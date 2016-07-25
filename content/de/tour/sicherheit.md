---
layout: page
title: Sichere Zeiterfassung
permalink: /de/tour/sicherheit/
---

<h1>Sicherheit</h1><h2>Rechenzentrum Zertifizierungen</h2><p>
  <strong>Time cockpit läuft in einem ISO zertifiziertem Rechenzentrum in der Europäischen Union.</strong>
</p><p>Time cockpit verwendet die <a href="http://www.windowsazure.com/" target="_blank">Microsoft Windows Azure Cloud Platform</a> für seine Services. Wir deployen alle Komponenten in eines der europäischen Rechenzentren (Amsterdam und Dublin). Windows Azure wurde von der BSI Group auf Basis von <a href="http://www.iso.org/iso/catalogue_detail?csnumber=42103" target="_blank">ISO/IEC standard 27001:2005</a> zertifiziert. Die Zertifizierung beinhaltet die Komponenten Compute, Storage, Virtual Network und Virtual Machine Services. Die Datenbankkomponente (SQL Azure) wird im Moment von der Zertifizierung nicht abgedeckt. Das <a href="http://www.windowsazure.com/en-us/support/trust-center/compliance/" target="_blank">Windows Azure Trust Center</a> enthält detaillierte Informationen zu verschiedenen Compliance-Programmen. </p><h2>E.U. Datenschutz Richtlinie</h2><p>
  <strong>Verträge zur E.U. Datenschutz Richtlinie.</strong>
</p><p>Wir sind ein Volume Licensing Kunde für Microsoft. Unser Vertrag mit Microsoft über Windows Azure enthält Verpflichtungen, die für Endkunden in der Europäischen Union relevant sind:</p><ul class="checkList">
  <li>Datenverarbeitungsabkommen, das die Einhaltung der E.U. Datenschutz Richtlinie und verwandte Sicherheitsanforderungen für Windows Azure Kern-Features in ISO/IEC 27001:2005 regelt.
<br /></li>
  <li>E.U. Mustervertragsbedingungen, die zusätzliche vertragliche Garantien zum Transfer persönlicher Daten in Windows Azure Kern-Features in ISO/IEC 2701:2005 regeln.</li>
</ul><h2>Sicherheit in der relationalen Datenbank</h2><p>
  <strong>Datenbank Cluster, verschlüsselte Verbindung und Firewall.</strong>
</p><p>Die meisten Daten für time cockpit in der Cloud werden in einem relationalen Datenbank-Cluster gespeichert. Die einzige Ausnahme davon sind die verschlüsselten Aktivitäten. Diese werden im Blob Store gespeichert (<a href="#BlobSecurity">lesen Sie mehr über die verschlüsselten Blobs...</a>). Bitte beachten Sie, dass die relationalen Datenbanken in Windows Azure nicht in ISO/IEC 27001:2005 fallen.</p><ul class="checkList">
  <li>Alle relationalen Datenbank Server in der Cloud für time cockpit sind Failover Cluster mit drei Knoten. Im Falle eines Hardware Fehlers oder eines Fehlers in der System Software (Betriebssystem oder RDBMS Software) wird time cockpit automatisch zu einem neuen Knoten im Cluster umgeleitet. Alle Knoten befinden sich im selben Rechenzentrum. Backups für Disaster Recovery werden von Microsoft verwaltet.</li>
  <li>Datenverkehr im Netzwerk von und zur Datenbank ist SSL verschlüsselt. Der Schlüssel wird von der Microsoft Azure Plattform verwaltet.</li>
  <li>Die Datenbankserver sind von mehreren Schichten von Firewalls geschützt. Die erste Schicht ist ein IP-basierende Firewall. Die zweite Schicht ist eine Stateful Firewall die das SQL Tabular Data Stream (DTS) Protokoll versteht. Sie schützt die Datenbank geben Protokollattacken, Brute-Force Passwort Attacken und ähnliches.</li>
</ul><h2>
  <a id="BlobSecurity"></a>Aufgezeichnete Aktivitäten in verschlüsselten Blobs</h2><p>
  <strong>Geo-replizierter Speicher für verschlüsselte Aktivitätsprotokolle</strong>
</p><p>Time cockpit speichert Ihre verschlüsselten Aktivitäten im Windows Azure Blob Storage.<br /></p><ul class="checkList">
  <li>Das Blob Storage Service wird von der ISO/IEC standard 27001:2005 Zertifizierung von Windows Azure abgedeckt.</li>
  <li>Daten im Blob Storage werden immer in einem Storage Cluster gepeichert um sie geben Server-Hardware Fehler zu schützen.</li>
  <li>Alle Daten im Blog Storage Service werden in beide Rechenzentren in der Europäischen Union (Dublin und Amsterdam) geo-repliziert.</li>
</ul><h2>Cloud-basierte Web Server</h2><p>
  <strong>Web fams, verschlüsselte Verbindung und ISO Zertifizierung.</strong>
</p><p>Die Compute Komponenten von Windows Azure werden von der ISO/IEC Standard 27001:2005 Zertifizierung von Windows Azure abgedeckt. Wir haben time cockpit darauf ausgelegt alle Security- und Erreichbarkeits-Funktionen von Windows Azure zu unterstützen:</p><ul class="checkList">
  <li>Betriebssystem Patches und Service Packs werden automatisch von Microsoft gewartet.</li>
  <li>Alle Web-Server sind Cluster (Web Farms).</li>
  <li>Die Erreichbarkeit von time cockpit ist durch die Windows Azure Service Level Agreements von Microsoft abgedeckt..</li>
  <li>Firewalls und Netzwerk-Komponenten werden von der Windows Azure Plattform zur Verfügung gestellt und von Microsoft gewartet.</li>
  <li>Alle Web-Services und Websites von time cockpit sind SSL gesichert.</li>
</ul><h2>Client Komponenten</h2><p>
  <strong>Digital signierte .NET Assemblies.</strong>
</p><p>Time cockpit wird mit einem standard-konformen Windows Installer Package (MSI Package) installiert. Es unterstützt Silent-Installation und automatisches Softwaredeployment. Alle Installationskomponenten (Bootstrapper, MSI Package) sowie alle Applikationsassemblies sind strong-named und signiert.</p>