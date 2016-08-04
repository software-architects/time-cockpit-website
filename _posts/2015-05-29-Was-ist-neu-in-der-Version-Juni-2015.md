---
layout: blog
title: Was ist neu in der Version Juni 2015
excerpt: Der Mai war nun der zweite Monat, in dem wir den Fokus unserer Entwicklungsarbeiten auf den neuen HTML5 Zeitbuchungskalender gelegt haben. Wir glauben, der Kalender hat nun einen Status erreicht, in dem er für das produktive Zeitbuchen eingesetzt werden kann. Wir freuen uns schon auf Ihr Feedback!
author: Karin Huber
date: 2015-05-29
bannerimage: /content/images/blog/2015/05/time-cockpit-june-2015.png
bannerimagesource: 
lang: de
tags: [time cockpit]
ref: 
permalink: /de/blog/2015/05/29/Was-ist-neu-in-der-Version-Juni-2015
---

<p>Die neue Version Juni 2015 (1.37) ist rückwärtskompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><h2>HTML5 Zeitbuchungskalender
<br /></h2><p>Der Mai war nun der zweite Monat, in dem wir den Fokus unserer Entwicklungsarbeiten auf den <a href="https://web.timecockpit.com/" target="_blank">neuen HTML5 Zeitbuchungskalender</a> gelegt haben. Es fehlen noch viele Funktionen die Sie vom aktuellen Full- und Silverlight-Client kennen. Wir glauben aber, der Kalender hat nun einen Status erreicht, in dem er für das produktive Zeitbuchen eingesetzt werden kann. Wir freuen uns schon auf Ihr Feedback!</p><p>Bitte beachten Sie, dass es gerade bei Accounts mit vielen Anpassungen noch zu Problemen kommen kann. Bitte <a href="mailto:support@timecockpit.com">informieren Sie uns</a>, sobald ein Problem auftaucht. Wir werden unser Möglichstest tun, um Ihnen das Buchen im neuen HTML5 Client sobald als möglich zu erlauben.</p><p>Folgende Features haben wir während der letzten Wochen hinzugefügt:</p><h3>Drag &amp; Drop
<br /></h3><p>Es ist nun möglich Zeitbuchungen mit der Maus zu verschieben und die Dauer zu ändern. Die folgenden Operationen sind erlaubt:</p><ul>
  <li>
    <strong>Ändern der Größe</strong>: Wenn Sie den Mauszeiger über den oberen oder unteren Rand einer Zeitbuchung bewegen, erscheint  der Resize Cursor. Sie können die Maustaste nun drücken und die Maus bis zur gewünschten Größe bewegen.</li>
  <li>
    <font color="#666666">
      <span style="letter-spacing: 0.200000002980232px;" data-mce-style="letter-spacing: 0.200000002980232px;">
        <strong>Verschieben</strong>
      </span>
    </font>: Bewegen Sie den Mauszeiger über eine Zeitbuchung, so dass der Resize Cursor nicht sichtbar ist. Wenn die Zeitbuchung zu klein ist, zoomen Sie zuerst in den Kalender hinein, bis Sie die Zeitbuchung verschieben können. Klicken Sie dazu die linke Maustaste und bewegen Sie die Buchung zur gewünschten Zeit.</li>
  <li>
    <strong>Kopieren</strong>: Das Kopieren funktioniert genau wie das Verschieben von Buchungen. Zusätzlich müssen Sie vor dem Auslassen der linken Maustaste STRG drücken. Es wird neben den Cursor ein kleines Plus-Zeichen angezeigt.</li>
</ul><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-time-sheet-entry-with-mouse.gif" />
</p><p>Sie können alle drei Operationen durch Drücken der ESC-Taste abbrechen.</p><p>Eine Operation die Sie vom Full-Client kennen, fehlt im Moment noch - das Aufziehen neuer Buchungen mit der Maus. Wir werden diese Funktionalität so schnell als möglich hinzufügen. Im Moment können Sie durch Doppelklick auf die gewünschte Startzeit eine neue Buchung erstellen.</p><h3>Kopieren
<br /></h3><p>Zusätzlich zum Kopieren von Element mit der Maus können Sie auch das Icon über dem Kalender verwenden, um die selektierte Buchung zu kopieren. Sie können die Funktion z.B. benutzen, um Zeitbuchungen von einer Woche zu einer anderen Woche zu kopieren.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-time-sheet-entry.png" />
</p><h3>Arbeitszeit-Charts
<br /></h3><p>Sie finden eine sehr frühe Preview der Arbeitszeit-Charts in der neuen Version. Wir haben noch nicht entschieden, wie die endgültigen Charts aussehen sollen, aber in der Zwischenzeit hoffen wir, dass Ihnen diese Preview beim Buchen im HTML5 Kalender hilft.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/working-hours-chart.png" />
</p><h3>Anzeige der aktuellen Zeit
<br /></h3><p>Die aktuelle Zeit ist durch eine rote Linie gekennzeichnet. Wenn Sie Ihre Zeiterfassung zeitnah erledigen, ist das ein guter Indikator für das Ende einer Buchung.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/now-indicator.png" />
</p><h2>Listen &amp; Forms</h2><h3>Elemente kopieren
<br /></h3><p>Genau wie im Kalender können Sie nun auch in Listen das ausgewählte Element kopieren. Es gibt dazu ein neues Icon über der Liste:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-entity.png" />
</p><p>Die Form zeigt in der rechten oberen Ecke an, dass es sich um die Kopie eines bestehenden Elements handelt:</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/05/copy-item-form.png" />
</p><h3>Abhängige Comboboxen im Filter
<br /></h3><p>Bis jetzt konnten nur Editier-Forms abhängige Comboboxen im HTML5 Client richtig darstellen. Ein Beispiel dafür sind die Comboboxen für Kunde und Projekt. Ist kein Kunde ausgewählt, ist auch die Projektcombobox leer. Erst wenn ein Kunde ausgewählt wird, werden alle Projekte für diesen Kunden in der Projektcombobox angezeigt. Filter-Forms in Listen arbeiten ganz ähnlich wie Editier-Forms, aber abhängig Comboboxen haben bis jetzt noch nicht funktioniert. Seit diesem Monat können Sie abhängige Comboboxen jetzt auch im Filter verwenden.</p><h3>Default-Werte in Forms
<br /></h3><p>Time cockpit enthält sehr mächtige Funktionalität zum Setzen von Default-Werten. Neben statischen Werten beim Anlegen eines neuen Elements ist es auch möglich Formeln zu definieren, die von anderen Eigenschaften im Element abhängen. Einige unserer Kunden nutzen dieses Feature intensiv. Seit diesem Monat werden auch die komplexen Szenarien von Default-Werten unterstützt.</p><h2>Weitere Verbesserungen
<br /></h2><h3>Benutzer hinzufügen oder löschen</h3><p>Im Moment ist es nicht möglich, Benutzer direkt in time cockpit hinzuzufügen oder zu löschen. Sie können dies nur auf der time cockpit Webseite <a href="http://www.timecockpit.com/">http://www.timecockpit.com</a>. Melden Sie sich mit Ihrem time cockpit Benutzer an und gehen Sie zur Account Administration. Dort können Sie die Benutzer für time cockpit verwalten. In der neuen HTML5 Version wird jetzt eine entsprechende Fehlermeldung angezeigt, wenn Sie versuchen dort einen Benutzer hinzuzufügen oder zu löschen.</p>