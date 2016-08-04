---
layout: blog
title: Was ist neu in der Version April 2016
excerpt: Stück für Stück bringen wir die Features des time cockpit Full Clients in unseren HTML5 Web-Client ein. Dieses Monat haben wir Unterstützung für Berechtigungen auf Feld-Ebene hinzugefügt. Diesen Schritt haben sich mehrere unserer Kunden gewünscht da die fehlende Unterstützung sie davon abgehalten hat, den neuen Web-Client zu verwenden. Zusätzlich zu den Berechtigungen auf Feld-Ebene, habe wir ein brandneues Office 365 Modul zu unserem time cockpit Kalender hinzugefügt -  Office 365 Planner Tasks.
author: Rainer Stropek
date: 2016-03-31
bannerimage: /content/images/blog/2016/03/time-cockpit-april-2016.png
bannerimagesource: 
lang: de
tags: [time cockpit]
ref: /blog/2016/03/31/Whats-New-in-Version-April-2016
permalink: /de/blog/2016/03/31/Was-ist-neu-in-der-Version-April-2016
---

<p>Die neue Version April 2016 (1.47) ist rückwärts kompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><h2>Überblick
<br /></h2><p>Stück für Stück bringen wir die Features des time cockpit Full Clients in unseren HTML5 Web-Client ein. Dieses Monat haben wir <a href="http://www.timecockpit.com">Unterstützung für Berechtigungen auf Feld-Ebene</a> hinzugefügt. Diesen Schritt haben sich mehrere unserer Kunden gewünscht da die fehlende Unterstützung sie davon abgehalten hat, den neuen Web-Client zu verwenden.  </p><p>Zusätzlich zu den Berechtigungen auf Feld-Ebene, habe wir ein brandneues Office 365 Modul zu unserem time cockpit Kalender hinzugefügt: <a href="#office-365-planner-tasks">Office 365 Planner Tasks</a>.</p><h2>
  <a id="field-level-permissions" name="field-level-permissions" class="mce-item-anchor"></a>Field-Level Permissions</h2><h3>Einführung
<br /></h3><p>time cockpit bietet ein leistungsfähiges Berechtigungssystem. Hier sind einige Beispiele, was Sie damit machen können:</p><ul>
  <li>Benutzer zu Rollen hinzufügen und Berechtigungen definieren, basierend auf der Rollenzugehörigkeit. 
<br /></li>
  <li>Neben Rollen können Berechtigungen auch auf allen benutzerbezogenen Daten basieren (z.B. Abteilung, Projektzugehörigkeiten, usw.). 
<br /></li>
  <li>Sie können Lese- und/oder Schreibzugriffe einschränken.</li>
  <li>Leseberechtigungen auf Zeilenebene gehen in Filter auf Datenbank-Level über. Daher bieten sie eine gute Performance.</li>
  <li>time cockpit unterstützt auf Zeilen- und auf Feld-Ebene.</li>
</ul><p>Seit diesem Monat unterstützen wir nun auch im HTML5 Client Berechtigungen auf Feld-Ebene. Bis jetzt konnten Entitäten mit Berechtigungen auf Feld-Ebene im HTML 5 Client nicht editiert werden, da time cockpit beim Speichern der entsprechenden Datenzeile einen Berechtigungsfehler anzeigte.   </p><p class="showcase">Bitte seien Sie vorsichtig bei der Zuweisung von Berechtigungen in time cockpit. Falsche Konfigurationen oder allzu komplexe Berechtigungslogiken können es für Enduser schwer machen, time cockpit zu verwenden.</p><p>Wenn Sie Hilfe brauchen beim Designen oder Einrichten von Berechtigungen in time cockpit kontaktieren Sie uns bitte unter <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p><h3>Verwenden von Berechtigungen auf Feld-Ebene
<br /></h3><p>Um Berechtigungen einzurichten, müssen Sie das Modul <em>Anpassungen</em> im time cockpit Full Client starten. Bitte beachten Sie, dass Sie ein time cockpit Administrator sein müssen um das Modul zu öffnen.</p><p>Als nächstes öffnen Sie die Entität, für die Sie Berechtigungen definieren wollen. Der folgende Screenshot veranschaulicht das:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/add-permission.png" />
</p><p>Es öffnet sich ein Dialogfenster das Ihnen erlaubt, zwischen Berechtigungen auf Zeilen- und Feld-Ebene zu wählen. Wählen Sie den Namen der Entität aus (in diesem Fall <em>APP_Project</em>) um eine Berechtigung auf Zeilen-Ebene zu definieren. Wählen Sie ein Feld aus um eine Berechtigung auf Feld-Ebene zu definieren. In unserem Beispiel haben wir <em>APP_Budget</em> ausgewählt<em>,</em> so dass nur User die der Projaktmanager-Rolle zugeordnet sind dieses editieren können. Andere können die Daten nur lesen.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/field-level-permissions-select-field.png" />
</p><p>Der dritte Schritt ist die Eingabe der Bedingung für die Berechtigung. Sie können hier die gesamte time cockpit <a href="https://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm" target="_blank">TCQL Expression Language</a> verwenden. In unserem Fall limitieren wir die Schreibberechtigung für Benutzer, die der Projektmanager-Rolle zugeordnet sind. <br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/define-permission-expression.png" />
</p><p>Das war's. Wenn Sie sich mit einem Benutzer anmelden der kein Projektmanager ist und ein Projekt-Formular öffnen, können Sie das Projekt-Budget nur ansehen.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/read-only-field.png" />
</p><h2>
  <a id="office-365-planner-tasks" name="office-365-planner-tasks" class="mce-item-anchor"></a>Office 365 Planner Tasks Plugin</h2><p>Vor einigen Monaten hat Microsoft ein neues Mitglied in der Office 365 Familie präsentiert: <a href="https://blogs.office.com/2015/09/22/introducing-office-365-planner/" target="_blank">Office 365 Planner</a>. Es bietet Office-Benutzern einen simplen und sehr visuellen Weg um Teamwork zu organisieren. Planner macht es für Teams leichter, neue Pläne zu erstellen, Tätigkeiten zu organisieren und zuzuweisen, Daten zu teilen, zu chatten und Updates zu Fortschritten zu bekommen. Planner kann verwendet werden um Marketing-Aktionen zu verwalten, neue Produktideen zu sammeln, um sich auf einen Kundenbesuch vorzubereiten oder einfach nur um Teams effektiver zu organisieren.</p><p class="showcase">Beachten Sie, dass Office 365 Planner aktuell noch im Preview Status ist.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/Introducing-Office-365-Planner-4.png" />
</p><p class="imageCaption">Image source: <a href="https://blogs.office.com/2015/09/22/introducing-office-365-planner/" target="_blank">Microsoft</a></p><p>Einer unserer Kunden verwendet Office 365 Planner Tasks bereits aktiv und hat uns gefragt, ob time cockpit es ähnlich wie <a href="~/blog/2016/02/29/Whats-New-in-Version-March-2016#sent-emails" target="_blank">die Integration von Office 365 Emails und Kalendereinträge im graphischen Kalender</a> integrieren kann. Wir haben uns das angeschaut und waren von der Idee sofort begeistert. Wir haben uns entschieden, ein Plug-in für unseren HTML5-Client zu bauen, obwohl Office 365 Planner derzeit noch eine Preview ist.  <br /></p><p class="showcase">Bitte beachten Sie, dass Sie aufgrund der Preview Version ein Administrator in Ihrer Office 365 Subscription sein müssen, um das Planner Plug-in zu verwenden. Diese Beschränkung wird von der Microsoft Planner API vorgegeben und nicht von time cockpit.</p><p>Wenn das Freigeben von time cockpit Plug-Ins neu für Sie ist, dann lesen Sie bitte weiter auf <a href="~/blog/2016/02/29/Whats-New-in-Version-March-2016#sent-emails" target="_blank">Office 365 Integration im Zeitbuchungskalender</a>. Da erfahren Sie, wie man Plug-Ins aktiviert und deaktiviert.<br /></p><p>Das folgende Bild zeigt Ihnen, wie Planner-Tätigkeiten im time cockpit Kalender angezeigt werden. Die Tätigkeiten werden entsprechend dem von Ihnen ausgewählten Datum angezeigt. Sie werden Tätigkeiten sehen, bei denen<br /></p><ul>
  <li>... das Erstellungsdatum kleiner oder gleich dem gewählten Tag ist und bei dem</li>
  <li>... das Fertigstellungsdatum größer oder gleich dem ausgewählten Tag ist.</li>
</ul><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/time-cockpit-office-planner-tasks-integration.png" />
</p><p>Planner Tasks sind Zeitbuchungs-Vorlagen in time cockpit. Sie können sie per Drag-and-Drop in Ihrem Kalender einfügen um eine neue Zeitbuchung zu generieren.<br /></p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/03/office-planner-tasks-time-cockpit-drag-drop.png" />
</p><h2>Feedback</h2><p>Lassen Sie uns wissen, was Sie über das neue Plug-in und unseren HTML5-Client denken. Wir freuen uns sehr über Ihr Feedback an <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>.</p>