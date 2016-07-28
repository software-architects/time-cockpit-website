---
layout: blog
title: (German) Funktionen zum Schutz der Privatsphäre
excerpt: Das Risiko für Konflikte bei erstmaliger Einführung einer Projektzeiterfassung ist nicht zu unterschätzen. Information der Mitarbeiter ist ein Schlüssel zum Erfolg. Ein wichtiges Thema dabei ist die Wahrung der Privatsphäre. In diesem Blogartikel geben wir einen Überblick, welche Funktionen time cockpit diesbezüglich enthält.
author: Rainer Stropek
date: 2014-09-03
bannerimage: 
lang: en
tags: [time cockpit]
permalink: /blog/2014/09/03/German-Funktionen-zum-Schutz-der-Privatsphäre
---

<div class="imageCaption">
  <img src="{{site.baseurl}}/content/images/blog/2014/09/8521624548_2a1489aa94_k.jpg" />Image source: <a href="https://flic.kr/p/dZ2y6b" target="_blank">https://flic.kr/p/aX4XeR</a>, under <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">Creative Commons</a> License</div><p>Das Risiko von Konflikten bei erstmaliger Einführung einer Projektzeiterfassung in einem Team ist nicht zu unterschätzen. Information der Mitarbeiter ist ein Schlüssel zum Erfolg. Ein wichtiges Thema dabei ist die Wahrung der Privatsphäre. In diesem Blogartikel geben wir einen Überblick, welche Funktionen time cockpit diesbezüglich enthält.</p><h2>Arten von Daten</h2><p>In time cockpit unterscheiden wir zwei Grundtypen von Daten:</p><ul>
  <li>Stamm- und Bewegungsdaten</li>
  <li>Signaldaten</li>
</ul><h3>Stamm- und Bewegungsdaten</h3><p>
  <em>
    <a href="http://de.wikipedia.org/wiki/Stammdaten" target="_blank">Stammdaten</a>
  </em> sind Referenzdaten, auf die sich Zeitbuchungen beziehen. Beispiele für Stammdaten sind Kunden, Projekte, Tätigkeiten, Benutzer, etc. Die wichtigsten <em>Bewegungsdaten</em>, die time cockpit im Standard verwaltet, sind <em>Zeitbuchungen</em> und <em>Rechnungen</em>. Durch das erweiterbare Datenmodell von time cockpit können unsere Kunden Stamm- und Bewegungsdaten hinzufügen, die im Standard nicht abgedeckt sind, für den jeweiligen Kunden aber notwendig sind (z.B. Bestellungen, Kostenstellen, etc.).</p><p>Es liegt in der Natur der Sache, dass der Zugriff auf Stamm- und Bewegungsdaten für mehrere Benutzer möglich sein muss (z.B. gemeinsamer Kundenstamm, monatliche Abrechnungsprozesse auf Teamebene, Projektbudgetkontrolle, etc.).</p><p class="showcase">Time cockpit enthält ein umfangreiches Berechtigungssystem, mit dem feingranular gesteuert werden kann, welche Benutzergruppen Zugriff auf welche Daten haben sollen. In größeren Teams empfehlen wir, frühzeitig im Projekt ein Berechtigungssystem zu entwerfen, das den spezifischen Anforderungen bzgl. Datenschutz und Privatsphäre entspricht.</p><p>Im Zuge unserer Einführungsprojekte haben wir viel Erfahrung bei der Spezifikation von Berechtigungskonzepten gesammelt und unterstützen unsere Kunden gerne dabei.</p><p>Weitere Informationen über das Berechtigungssystem in time cockpit:</p><ul>
  <li>
    <a href="http://help.timecockpit.com/?topic=html/68657e1a-43f2-444c-959b-fb0a23cb2e33.htm" target="_blank">Time cockpit Onlinehilfe</a>
  </li>
  <li>
    <a href="http://www.timecockpit.com/blog/2014/07/14/Setting-Up-Team-Leader--Member-Permissions-in-Time-Cockpit" target="_blank">Video: Definition einer Teamleiterberechtigung</a>
  </li>
</ul><h3>Signaldaten  </h3><p>Eine Besonderheit von time cockpit gegenüber vielen anderen Zeiterfassungslösungen sind die <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">Signal Tracker</a>. Sie zeichnen automatisch Daten darüber auf, was Sie als Anwender mit Ihren PCs, Laptops, etc. machen. Auch Signale anderer Geräte (z.B. <a href="http://www.timecockpit.com/blog/2013/01/22/Synchronized-Android-Call-Log-Import" target="_blank">Anrufliste Ihres Mobiltelefons</a>) können importiert werden. Die gesammelten Aktivitätsdaten helfen Ihnen, die Erfassung Ihrer Projektarbeitszeiten auch im Nachhinein durchführen zu können, ohne dabei auf wichtige Tätigkeiten zu vergessen.</p><p class="showcase">Time cockpit ist kein Spionagewerkzeug! Die Signal Tracker dienen ausschließlich als Hilfe für den individuellen Anwender. Der Anwender hat volle Kontrolle darüber, ob und wenn ja was aufgezeichnet wird. Datenverschlüsselung soll sicherstellen, dass ein Zugriff auf Signaldaten von fremden Personen oder gar personenübergreifende Auswertungen nicht möglich sind.</p><p>Automatisch aufgezeichnete Daten sind besonders schützenswert. In Folge gehen wir näher auf die in time cockpit enthaltenen Schutzmechanismen für Signaldaten ein.</p><h2>Schutz automatisch aufgezeichneter Daten</h2><h3>Verschlüsselung</h3><p>Sämtliche Signaldaten in time cockpit werden verschlüsselt. Der Schlüssel, der zum ver- und entschlüsseln der Daten verwendet wird, wird von Ihnen als Endbenutzer beim erstmaligen Einrichten von time cockpit auf einem Computer eingegeben. Der Schlüssel wird von time cockpit <em>nicht</em> auf andere Computer oder zu den time cockpit Servern übertragen. </p><p class="showcase">Bewahren Sie den Signaldatenschlüssel gut auf. Geben Sie ihn nicht aus der Hand. Nur jemand, der den Schlüssel kennt, kann Ihre Signaldaten entschlüsseln. Personenübergreifende Auswertungen von Signaldaten werden durch die geheimen Signaldatenschlüssel generell verhindert.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:8f8bad11-bfd8-4b5d-8550-1abf47fc758b" />
  <param name="ThumbnailMaxWidth" value="300" />
  <param name="ThumbnailMaxHeight" value="400" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><p>Eine Beschreibung des Einrichtens von time cockpit finden Sie in unserer <a href="http://help.timecockpit.com/?topic=html/252608c7-8762-4745-ad68-b495fbf0a17f.htm" target="_blank">Onlinehilfe</a>. Die Eingabe des Signaldatenpassworts ist dort ebenfalls beschrieben.</p><h3>Pausieren der Aufzeichnung</h3><p>Falls Sie auf Ihrem PC eine Aufgabe erledigen, die keinesfalls aufgezeichnet werden soll, können Sie die Aufzeichnung pausieren. Klicken Sie dazu mit der rechten Maustaste auf das time cockpit Icon in der Statusleiste und wählen Sie "Pausieren". Sobald das time cockpit Icon grau geworden ist, ist die Aufzeichnung gestoppt.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/PauseTracking.png" />
</p><p>Nach Abschluss der Arbeit können sie die Signaltracker wieder starten.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/ResumeTracking.png" />
</p><h3>Permanentes Beenden der Aufzeichnung</h3><p>Falls Sie alle oder einige Signal Tracker dauerhaft beenden möchten, können Sie das in time cockpit Einstellen. Beendete Signal Tracker werden auch nach einem Neustart Ihres Computers nicht automatisch gestartet.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:e6a29509-9287-4d5f-b75c-b9b59238ecdf" />
  <param name="ThumbnailMaxWidth" value="300" />
  <param name="ThumbnailMaxHeight" value="400" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><p class="showcase">Tipp für Administratoren: Standardmäßig sind die Signal Tracker nach der Installation von time cockpit gestartet. Benutzer können sie gegebenenfalls abschalten ("opt-out"). Falls Sie die Signal Tracker standardmäßig gestoppt haben möchten ("opt-in"), können Sie dies durch eine Einstellung in der Windows Registry steuern (<a href="http://help.timecockpit.com/?topic=html/93de1e41-f31c-41e4-968b-44166e8be97b.htm#SignalTrackerAutostart" target="_blank">Details siehe Onlinehilfe</a>).</p><h3>Löschen von nicht mehr benötigten Signaldaten</h3><p>Signaldaten sollen Sie bei der nachträglichen Erfassung Ihrer Arbeitszeiten unterstützen. Wenn Sie die Arbeitszeiten erfasst haben und die Signaldaten daher nicht mehr brauchen, können Sie diese mit wenigen Klicks unwiederbringlich löschen.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2014/09/DeleteSignalData.png" />
</p><h2>Weitere Fragen?</h2><p>Haben Sie weitere Fragen zum Thema Datenschutz und Privatsphäre in time cockpit? <a href="http://www.timecockpit.com/de/hilfe-support/kontakt" target="_blank">Kontaktieren Sie uns</a>, wir beantworten Ihre Fragen gerne.</p>