---
layout: blog
title: Neu im Mai 2015, Ein erster Blick auf den HTML Kalender
author: Karin Huber
bannerimage: /images/blog/2015/04/time-cockpit-may-2015.png
permalink: /de/2015/04/30/Neu-im-Mai-2015-Ein-erster-Blick-auf-den-HTML-Kalender
---

<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/04/time-tracking-calendar-week.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">Die neue Version Mai 2015 (1.36) ist rückwärtskompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Zeitbuchungskalender
<br /></h2><p xmlns="http://www.w3.org/1999/xhtml">Wie versprochen verbessern wir die neue HTML5 Version von time cockpit kontinuierlich. Laufend werden neue Versionen deployed, sobald neue Features einen Status haben, in dem sie von Kunden ausprobiert werden können.</p><p xmlns="http://www.w3.org/1999/xhtml">Dieses Monat können wir eine erste Version vom neuen HTML5 Kalender veröffentlichen. Es fehlen zwar noch eine Reihe von Features, die Sie vom Full-Client kennen, aber in den folgenden Wochen und Monaten werden diese nach und nach erweitert.</p><p xmlns="http://www.w3.org/1999/xhtml">Der aktuelle Stand des Kalenders sieht so aus:<br /></p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2015/04/time-tracking-calendar.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Funktionalität</h2><p xmlns="http://www.w3.org/1999/xhtml">Die aktuelle Version, die wir vor ein paar Tagen veröffentlicht haben, überstützt bis jetzt folgende Funktionen:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Darstellung der Zeitbuchungen pro Benutzer</li>
  <li>Einfärben der Zeitbuchungen entsprechend des ausgewählten  <a href="https://help.timecockpit.com/?topic=html/95b1ce59-c4ec-461a-ba9b-cb978295c3de.htm" target="_blank">Formatprofils</a></li>
  <li>Navigation im Kalender mit den Pfeilchen oder durch Klick auf das Datum in der Überschrift</li>
  <li>Änderung des Zoom-Levels</li>
  <li>Einfügen, editieren und löschen von Zeitbuchungen wie im folgenden Screenshot dargestellt:
<br /><img src="{{site.baseurl}}images/blog/2015/04/edit-time-sheet-entry.png" /></li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Weitere Verbesserungen HTML5 Client </h2><h3 xmlns="http://www.w3.org/1999/xhtml">Session Timeout
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">In der neuen Version müssen Sie sich nicht mehr jede Stunde neu anmelden. Wir haben jetzt auf eine Sliding Expiration von 8 Stunden umgestellt. Das bedeutet, erst wenn Sie time cockpit 8 Stunden nicht mehr benutzt haben, müssen Sie sich neu authentifizieren.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Relation Lists</h3><p xmlns="http://www.w3.org/1999/xhtml">Beim Konfigurieren von Forms können Sie Relationen entweder durch eine einfache <em>BoundCell</em> spezifieren, die automatisch erkennt, welche Daten in der Kombobox angezeigt werden müssen, oder Sie verwenden eine <em>RelationCell</em>, in der spezifiziert werden kann, welche Daten geladen werden sollen. Bis jetzt haben wir diese Konfiguration im HTML5 Client nicht berücksichtigt, doch seit der neuen Version werden alle Typen von Relation Lists unterstütz, außer jenen Listen, die Python verwenden um die Daten zu laden.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Default Werte</h3><p xmlns="http://www.w3.org/1999/xhtml">Die Unterstützung von Default Werten wurde in der neuen Version verbessert. Wir haben einige Szenarien korrigiert, in denen Default Werte bereits vom Benutzer eingegebene Werte überschrieben haben.</p>