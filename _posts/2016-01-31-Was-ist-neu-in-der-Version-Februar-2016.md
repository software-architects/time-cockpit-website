---
layout: blog
title: Was ist neu in der Version Februar 2016
excerpt: Office 365 ist ein sehr erfolgreiches Cloud Service von Microsoft. Millionen von Menschen überall auf der Welt nutzen es für Emails, Dokumenten-Management, Kommunikation usw. Dieses Monat haben wir  zum HTML5 timesheet Zeitbuchungskalender von time cockpit eine Out-of-the-Box Integration mit Office 365 hinzugefügt. Sehen Sie alle Ihre Outlook Termine in time cockpit und verwandeln Sie sie durch einen simplen Doppelklick in Zeitbuchungen.
author: Rainer Stropek
date: 2016-01-31
bannerimage: /content/images/blog/2016/01/time-cockpit-february-2016.png
bannerimagesource: 
lang: de
tags: [time cockpit]
ref: /blog/2016/01/31/Whats-New-in-Version-February-2016
permalink: /de/blog/2016/01/31/Was-ist-neu-in-der-Version-Februar-2016
---

<p>Die neue Version Februar 2016 (1.45) ist rückwärtskompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><h2>Zusammenfassung</h2><h3>Datenbank Migration</h3><p>Im Jänner haben wir alle unsere produktiven Datenbanken in Microsoft Azure vom alten Web/Business-Edition-Modell auf die neuen V12 Datenbank-Servern migriert.</p><p>Die time cockpit Version Februar 2016 wurde für den neuen Datenbank Server optimiert. Wir haben time cockpit's interne Synchronisations-Algorithmen verbessert. Diese Veränderung reduziert signifikant die notwendigen Server-Ressourcen während der Synchronisation und beschleunigt daher den Prozess. </p><p class="showcase">Aufgrund dieser Änderung möchten wir Sie bitten, Ihren Full-Client auf die neueste Version upzugraden. Das hilft uns die Betriebskosten und daher auch die monatlichen Gebühren für time cockpit so niedrig zu halten, wie sie aktuell sind.</p><p>
  <a href="~/account/download">Neue Version downloaden ...</a> <br /><a href="~/blog/2016/01/31/Hello-Database-Pools">Lesen Sie mehr über die neuen Database Pools ...</a></p><h3>Office 365 Integration</h3><p>
  <a href="https://products.office.com/" target="_blank">Office 365</a> ist ein sehr erfolgreiches Cloud Service von Microsoft. Millionen von Menschen überall auf der Welt nutzen es für Emails, Dokumenten-Management, Kommunikation usw. Dieses Monat haben wir  zum <a href="http://web.timecockpit.com" target="_blank">HTML5 timesheet Zeitbuchungskalender von time cockpit</a> eine Out-of-the-Box Integration mit Office 365 hinzugefügt. Sehen Sie alle Ihre Outlook Termine in time cockpit und verwandeln Sie sie durch einen simplen Doppelklick in Zeitbuchungen.</p><h3>Full Client und Self-Service Portal Verbesserungen</h3><p>Zusätzlich zu den Erweiterung des HTML5 Clients haben wir auch den Full-Client und die Administrations-Website von time cockpit verbessert. </p><ol>
  <li>Früher konnten Sie mit time cockpit bis zu 30 Tage offline arbeiten ohne zu synchronisieren. Nach dieser Zeitspanne ging time cockpit davon aus, dass der Computer nicht weiter verwendet wird und hat jede weitere Synchronisationen verhindert. Um time cockpit zu reaktivieren, mussten Sie time cockpit resetten und eine alle Daten neu synchronisieren. Als Antwort auf konkrete Kundenanforderungen haben wir die Zeitspanne ohne Synchronisation auf 60 Tage ausgedehnt. Trotzdem erscheint ein Warnhinweis nach 30 Tagen ohne Synchronisation.</li>
  <li>Seit der ersten Veröffentlichung von time cockpit vor einigen Jahren haben wir eine ziemlich große Anzahl von Software Versionen herausgebracht. Das führte zu lästigen, langen Wartezeiten wenn Sie einen Download-Link für die aktuelle Version von time cockpits Full-Client im <a href="~/sign-in" target="_blank">Self-Service Portal</a> haben wollten. Dieses Monat haben wir dieses Feature markant verbessert. Es geht nun um einiges schneller, den aktuellsten Full-Client Download-Link zu bekommen. </li>
</ol><h2>Office 365 Integration im Time Cockpit Zeitbuchungskalender</h2><p>Die Integration von Office 365 im time cockpit Zeitbuchungskalender zu aktivieren ist ganz einfach. Sie brauchen keine Software installieren und auch keine administrativen Änderungen in time cockpit oder Office 365 durchführen. Sie müssen nur folgende einfache Schritte durchführen: </p><h3>Aktivieren der Kalender Integration</h3><p>Öffnen Sie das Drop-down Menü unter Ihres Usernamens in der rechten, oberen Ecke Ihres <a href="https://web.timecockpit.com" target="_blank">time cockpit's HTML5 Client</a>. Wählen Sie <em>Enable / Disable Plugins</em>.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/enable-disable-plugins.png" />
</p><p>Aktivieren Sie das Office 365 Kalender Plug-in:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/active-office-365-calendar.png" />
</p><h3>Bei Office 365 anmelden</h3><p>Navigieren Sie zurück zum Zeitbuchungskalender von time cockpit. time cockpit wird Sie fragen, ob Sie sich bei Office 365 authentifizieren wollen und time cockpit dadurch die Kalendereinträge lesen kann.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/sign-in-confirmation.png" />
</p><p>Wenn Sie <em>Bestätigen</em> klicken wird time cockpit Sie weiterleiten zum Office 365 Login-Fenster. Bitte melden Sie sich mit Ihren Daten an.   </p><p class="showcase">Bitte beachten Sie, dass time cockpit aus Sicherheits- und Datenschutzgründen Ihre Anmeldedaten von Office 365 <strong>nicht</strong> erhalten oder speichern wird. time cockpit erhält nur ein zeitlimitiertes Zugangs-Token für Office 365. Dieses Token wird <strong>nicht</strong> in die time cockpit Cloud übermittelt oder gespeichert. </p><p>Wenn Sie sich von time cockpit aus zum ersten Mal anmelden, wird ein Dialog, wie tieferstehend abgebildet, angezeigt. Bitte akzeptieren Sie diesen, wenn Sie die Office 365 Kalendereinträge in time cockpit anzeigen wollen.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:5841428d-60e0-4aa0-8a51-b6a454f47712" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1920" />
  <param name="ImageMaxHeight" value="1280" />
</function><h3>Arbeiten mit Kalendereinträgen in Time Cockpit</h3><p>Immer wenn time cockpit Daten von Office 365 lädt, erscheint eine Ladeanzeige in der rechten unteren Ecke Ihres Zeitbuchungskalenders:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/loading-indicator.png" />
</p><p>Kalendereinträge von Office 365 werden hellgrau in Ihrem Zeitbuchungskalender angezeigt. Um mehr Details zu sehen, bewegen Sie die Maus zum Eintrag. Durch Doppelklicken verwandeln Sie den Eintrag in eine Zeitbuchung. Time cockpit kopiert automatisch Datum, Zeit, Beschreibung und Ort von Ihrem Kalender in die Zeitbuchung.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/calendar-items.png" />
</p><h3>Video</h3><p>Die folgende Animation zeigt den Prozess des Verbindens von time cockpit mit Office 365:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/01/office-365-calendar-in-time-cockpit.gif" />
</p>