---
layout: blog
title: Was ist neu in der Version Jänner 2016
excerpt: This month our main focus was adding responsive design to our HTML5 client. Our goal is to make time cockpit's web client usable on phone, tablets and in desktop browsers. We have not reached our final goal yet but we have made significant progress this month. Try it and tell us what you think.
author: Rainer Stropek
date: 2015-12-30
bannerimage: /content/images/blog/2015/12/time-cockpit-january-2016.png
bannerimagesource: 
lang: de
tags: [time cockpit]
permalink: /de/blog/2015/12/30/Was-ist-neu-in-der-Version-Jänner-2016
---

<p>Die neue Version Jänner 2016 (1.44) ist rückwärtskompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><p>Dieses Monat lag unser Hauptaugenmerk auf Responsive Design in unserem HTML5 Client. Unser Ziel ist es, den Web-Client von time cockpit für Handys, Tablets und in Desktop Browsern verwendbar zu machen. Wir haben unser Endziel bis jetzt noch nicht erreicht, aber wir haben dieses Monat signifikante Fortschritte gemacht. Probieren Sie es aus uns sagen Sie uns Ihre Meinung. </p><h2>Responsive Design</h2><p>Time cockpit's HTML5 Client verändert nun sein Layout, abhängig von der Größe und dem Layout des Bildschirms. Das folgende animierte Bild zeigt Ihnen dieses Konzept durch Verändern der Größe des Browserfensters:<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/12/Time-Cockpit-Responsive-Design.gif" />
</p><p>Abhängig von der verfügbaren Bildschirmgröße verändert time cockpit sein Aussehen z.B. durch ...<br /></p><ul>
  <li>... Anzeigen/Verbergen von Menüs und Menüeinträgen.</li>
  <li>... verschiedene Anzeigen von Action Buttons (z.B. Speichern, Schließen).</li>
  <li>... Ersetzen von mehrspaltigen Layouts in großen Formulare durch einspaltige Darstellung (z.B. für Telefone oder kleine Tablets in der Portrait-Ansicht). </li>
  <li>... die Anzeige von Beschriftungen über dem Eingabefelds.</li>
</ul><h2>Mobil-freundlich 
<br /></h2><p>In manchen Fällen ist Responsive Design auch in Ihrem Desktop-Browser sinnvoll. Auf jeden Fall wichtig ist es aber bei Handys und kleinen Tablets. Das folgende animierte Bild zeigt den aktuellen Look des HTML5-Clients auf einem 5" Android Phone. Formulare funktionieren schon ziemlich gut. An den Listen müssen wir noch ein wenig arbeiten. <br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/12/Time-Cockpit-Mobile-Phone.gif" />
</p><h2>Full Client Fehlerbehebung</h2><p>Wir haben dieses Monat einige Verbesserungen und kleinere Fehlerbehebungen im time cockpit Full-Client vorgenommen: </p><ul>
  <li>Verbesserung der Logik um veraltete Devices zu entdecken (z.B. Devices, die bereits so lange nicht synchronisiert wurden, dass ein Re-Sync notwendig wäre)</li>
  <li>Behebung kleiner Fehler betreffend Urlaub- und Überstundenfunktionen in TCQL</li>
  <li>Verbesserungen bei to Many-to-Many Relation Cells (Feature von time cockpit's Formular Engine)</li>
</ul>