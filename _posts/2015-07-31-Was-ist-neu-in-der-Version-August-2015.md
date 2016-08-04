---
layout: blog
title: Was ist neu in der Version August 2015
excerpt: Wir haben in diesem Monat viele neue Features und Verbesserungen in time cockpit -  Ein neues Feature für die Überwachung von Arbeitszeitverletzungen, viele Verbesserungen in der HTML5 Preview inklusive vollem Support für Berichte und ein Bündel an Performance-Optimierungen für Full- und HTML5 Client.
author: Karin Huber
date: 2015-07-31
bannerimage: /content/images/blog/2015/07/time-cockpit-august-2015.png
bannerimagesource: 
lang: de
tags: [time cockpit]
ref: 
permalink: /de/blog/2015/07/31/Was-ist-neu-in-der-Version-August-2015
---

<p>Die neue Version August 2015 (1.39) ist rückwärts kompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><p>Wir haben in diesem Monat viele neue Features und Verbesserungen in time cockpit: Ein neues Feature für die Überwachung von Arbeitszeitverletzungen, viele Verbesserungen in der HTML5 Preview inklusive vollem Support für Berichte und ein Bündel an Performance-Optimierungen für Full- und HTML5 Client.</p><h2>HTML5 Client &amp; Full Client</h2><h3>Arbeitszeitverletzungen
<br /></h3><p>Viele unserer Kunden verwenden time cockpit um die Arbeitszeit ihrer Angestellten hinsichtlich rechtlicher Vorschriften zu validieren. In der neuen Version haben wir eine Lister aller Verletzungen hinzugefügt mit einem Link zu den entsprechenden Zeitbuchungen. <a href="~/de/blog/2015/07/31/Arbeitszeitverletzungen-und-Höchstarbeitszeit">Lesen Sie mehr ...</a><br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/07/working-time-violations.png" />
</p><h2>HTML5 Client</h2><h3>Berichte
<br /></h3><p>In der neuen Version des HTML5 Client können Sie nun das <a href="~/blog/2014/03/31/Custom-Reporting-in-Time-Cockpit-is-Final">R</a><a href="~/blog/2014/03/31/Custom-Reporting-in-Time-Cockpit-is-Final">eporting Feature</a> nutzen, das Sie vielleicht von Full- oder Silverlight Clients kennen. In Bereich Reporting bietet Ihnen der HTML5 Client nun dieselben Funktionen wie der existierende Silverlight Client:</p><ul>
  <li>Jede Liste kann automatisch als PDF, Excel und Word exportiert werden (<em>Druckansicht</em> im Menü). Sie brauchen dazu keine Berichtsdefinition.</li>
  <li>Wenn Sie spezielle Anforderungen haben (z.B. Grafiken, spezielle Gruppierungen, Summen, usw.), können Sie für jede Liste eigene Berichtsdefinitionen erstellen und hochladen. Sie können Ihre eigenen Berichte im HTML 5 Client ansehen und exportieren. Beachten Sie aber bitte, dass Sie für den Upload Ihrer Berichtsdefinitionen den Full Client verwenden.
<br /></li>
</ul><p class="showcase">Wollen Sie mehr darüber erfahren, wie Sie in time cockpit eigene Berichte erstellen? <a href="~/blog/2014/03/31/Custom-Reporting-in-Time-Cockpit-is-Final" target="_blank">Lesen Sie mehr...</a></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/07/time-report-pdf.png" />
</p><h3>Zeitbuchungskalender
<br /></h3><p>Im Zeitbuchungskalender haben wir dieses Monat zwei Verbesserungen gemacht:<br /></p><ul>
  <li>Sie können hinein- und herauszommen mit <em>Strg + Plus</em> bzw. <em>Strg + Minus</em>. Zusätzlich können Sie das Maus-Rad verwenden während Sie <em>Strg</em> drücken.</li>
  <li>time cockpit erlaubt Ihnen, eine Formel für das Formular das im Zeitbuchungskalender geöffnet ist, anzugeben. In der neuen Version kann dieser Ausdruck auch eine Referenz zum aktuellen Zeitbuchungseintrag beinhalten. Sie können daher verschiedene Formulare für z.B. Reisezeiten und Arbeitszeiten öffnen. 
<br /><img src="{{site.baseurl}}/content/images/blog/2015/07/time-sheet-form-expression.png" /></li>
</ul><h3>Actions
<br /></h3><p>Die HTML5 Preview unterstützt nun seit einigen Monaten Actions in Listen. Dieses Monat haben wir Actions <em>in Formularen</em> ergänzt. Außerdem unterstützen wir nun alle Arten von <em>ActionCells</em> die Ihnen erlauben, eine Action durch Klicken auf einen Hyperlink in einer Liste oder einem Formular auszuführen.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/07/actions-in-list-and-form.png" />
</p><h2>Full Client</h2><h3>Importer Verbesserungen</h3><p>Beim Importer gibt es geringfügige Verbesserungen:<br /></p><ul>
  <li>Wir überspringen Zeilen mit leerem Primary Key.</li>
  <li>Wenn sich der Header der Import-Sample-File geändert hat, fragen wir vor dem Update die Import-Definition ab weil es sonst zu ungültigen Import-Definitions führen kann.</li>
</ul><h3>Performance Optimierung</h3><p>Wir haben folgende Änderungen gemacht, um die Performance zu verbessern. Manche Änderungen betreffen nur den Full Client, andere sind ebenso für den HTML5 Client relevant.</p><ul>
  <li>Es ist nun möglich include Direktiven in Triggern zu spezifizieren. Bis jetzt haben Trigger die betroffenen Elemente inklusive aller Relationen neu aus der Datenbank geladen. Wenn Sie wissen, dass ein Trigger nicht alle Relationen braucht, können Sie jetzt eine Include-Klausel mit den aktuell erforderlichen Relationen spezifizieren. </li>
  <li>Wir haben das Handling des Zeitbuchungskalenders und der Combobox in Filter und Formularen geändert, um alle <em>LayoutUpdated</em> Events in WPF zu entfernen. Bei einigen Computern hat das in der Vergangenheit eine hohe CPU Last verursacht.</li>
  <li>Wir haben einiges verbessert, um das Datenmodell schneller von der Datenbank zu laden.</li>
</ul>