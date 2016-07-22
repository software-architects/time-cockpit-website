---
layout: blog
title: Was ist neu in der Version Mai 2016
teaser: Dieses Monat haben wir uns auf zwei Themen konzentriert -  die einfachere Eingabe von Datum und Zeit sowie die Erweiterbarkeit des HTML5 Clients. Die Verbesserungen für die Eingabe von Datum und Zeit stehen bereits in der neuen Version zur Verfügung. Es gibt jetzt ein Reihe von Shortcuts für die Eingabe. Die Erweiterbarkeit des HTML5 Clients wird uns noch einen weiteren Monat beschäftigen, bevor wir dieses Feature deployen können - dann wird es möglich sein, eigene HTML5 Applikationen zum Menü von time cockpit hinzuzufügen.
author: Karin Huber
date: 2016-05-01
bannerimage: /content/images/blog/2016/04/time-cockpit-may-2016.png
lang: de
permalink: /de/blog/2016/05/01/Was-ist-neu-in-der-Version-Mai-2016
---

<h2 xmlns="http://www.w3.org/1999/xhtml">Überblick
<br /></h2><p xmlns="http://www.w3.org/1999/xhtml">Dieses Monat haben wir uns auf zwei Themen konzentriert: die einfachere Eingabe von Datum und Zeit sowie die Erweiterbarkeit des HTML5 Clients. Die Verbesserungen für die Eingabe von Datum und Zeit stehen bereits in der neuen Version zur Verfügung. Es gibt jetzt ein Reihe von Shortcuts für die Eingabe. Die Erweiterbarkeit des HTML5 Clients wird uns noch einen weiteren Monat beschäftigen, bevor wir dieses Feature deployen können - dann wird es möglich sein, eigene HTML5 Applikationen zum Menü von time cockpit hinzuzufügen.</p><p xmlns="http://www.w3.org/1999/xhtml">Das erste Mal seit April 2013 gibt es zu Beginn dieses Monats keine neue Version des Full Clients. Mehr und mehr unsere Kunden steigen um auf den <a href="https://web.timecockpit.com/" title="time cockpit HTML5 Client" target="_blank">HTML5 Client</a> (noch Beta), daher investieren wir soviele Ressourcen wie Möglich in die Fertigstellung des HTML5 Clients. Natürlich werden wir wenn notwendig weiterhin Bug Fixes für den Full Client liefern.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="#date-input">Eingabe von Datum und Zeit</a>
  </li>
  <li>
    <a href="#tooltips">Tooltips im Kalender</a>
  </li>
  <li>
    <a href="#permissions">Verbesserungen bei Berechtigungen</a>
  </li>
  <li>
    <a href="#extensibility">Erweiterbarkeit des HTML5 Clients</a>
  </li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="date-input" id="date-input" class="mce-item-anchor"></a>Eingabe von Datum und Zeit</h2><p xmlns="http://www.w3.org/1999/xhtml">Dieses Monat haben wir es wessentlich einfacher gemacht, Datums- und Zeitwerte einzugeben. Wir bieten nun eine Reihe neuer Shortcuts an, um gültige Datumswerte zu erfassen.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/04/date-and-time-input.gif" />
</p><h3 xmlns="http://www.w3.org/1999/xhtml">Datumswerte
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Nur Tag</strong>: wenn Sie nur eine oder zwei Ziffern eingeben, nehmen wir an, dass das aktuelle Monat gemeint ist.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Eingabe
<br /></th>
      <th width="100">Ergebnis
<br /></th>
    </tr>
    <tr>
      <td>1</td>
      <td>01.04.2016
<br /></td>
    </tr>
    <tr>
      <td>01</td>
      <td>01.04.2016</td>
    </tr>
    <tr>
      <td>25</td>
      <td>01.04.2016</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Tag und Monat</strong>: wenn Sie drei oder vier Ziffern mit oder ohne Trennzeichen eingeben, interpretieren wir diese als Tag und Monat des aktuellen Jahres.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Eingabe</th>
      <th width="100">Ergebnis</th>
    </tr>
    <tr>
      <td>501</td>
      <td>01.05.2016
<br /></td>
    </tr>
    <tr>
      <td>0501</td>
      <td>01.05.2016</td>
    </tr>
    <tr>
      <td>5/1</td>
      <td>01.05.2016</td>
    </tr>
    <tr>
      <td>05/01</td>
      <td>01.05.2016</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Tag, Monat und Jahr</strong>: wenn Sie fünf bis acht Ziffern mit oder ohne Trennzeichen eingeben, werden diese in Tag, Monat und Jahr umgewandelt.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Eingabe</th>
      <th width="100">Ergebnis</th>
    </tr>
    <tr>
      <td>50116</td>
      <td>01.05.2016</td>
    </tr>
    <tr>
      <td>05012016</td>
      <td>01.05.2016</td>
    </tr>
    <tr>
      <td>5/1/16</td>
      <td>01.05.2016</td>
    </tr>
    <tr>
      <td>05/01/2016</td>
      <td>01.05.2016</td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Weitere Shortcuts</strong>: um die Eingabe noch einfacher zu machen, bieten wir außerdem Shortcuts für den aktuellen Tag, den Monatsletzten des Vormonats und den Monatsletzten des aktuellen Monats.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Eingabe</th>
      <th width="350">Ergebnis</th>
    </tr>
    <tr>
      <td>t</td>
      <td>29.04.2016 (aktueller Tag)
<br /></td>
    </tr>
    <tr>
      <td>p</td>
      <td>31.03.2016 (Monatsletzter des Vormonats)
<br /></td>
    </tr>
    <tr>
      <td>n</td>
      <td>30.04.2016 (Monatsletzter des aktuellen Monats)
<br /></td>
    </tr>
  </tbody>
</table><h3 xmlns="http://www.w3.org/1999/xhtml">Zeitwerte
<br /></h3><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Nur Stunden</strong>: wenn Sie nur ein oder zwei Ziffern eingeben, werden diese als Stunden interpretiert.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Eingabe</th>
      <th width="100">Ergebnis</th>
    </tr>
    <tr>
      <td>9</td>
      <td>09:00</td>
    </tr>
    <tr>
      <td>09</td>
      <td>09:00</td>
    </tr>
    <tr>
      <td>09 AM</td>
      <td>09:00</td>
    </tr>
    <tr>
      <td>09 PM</td>
      <td>21:00</td>
    </tr>
    <tr>
      <td>21</td>
      <td>21:00
<br /></td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">
  <strong>Stunden und Minuten</strong>: wenn Sie drei oder vier Ziffern mit oder ohne Trennzeichen eingeben, werden daraus Stunden und Minuten.</p><table class="infoTable" xmlns="http://www.w3.org/1999/xhtml">
  <tbody>
    <tr>
      <th width="100">Eingabe</th>
      <th width="100">Ergebnis</th>
    </tr>
    <tr>
      <td>930</td>
      <td>09:30
<br /></td>
    </tr>
    <tr>
      <td>0930</td>
      <td>09:30</td>
    </tr>
    <tr>
      <td>0930 AM</td>
      <td>09:30</td>
    </tr>
    <tr>
      <td>0930 PM</td>
      <td>21:30</td>
    </tr>
    <tr>
      <td>2130</td>
      <td>21:30</td>
    </tr>
    <tr>
      <td>9:30</td>
      <td>09:30</td>
    </tr>
    <tr>
      <td>09:30</td>
      <td>09:30</td>
    </tr>
    <tr>
      <td>21:30</td>
      <td>21:30
<br /></td>
    </tr>
  </tbody>
</table><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="tooltips" id="tooltips" class="mce-item-anchor"></a>Tooltips im Kalender</h2><p xmlns="http://www.w3.org/1999/xhtml">Es gab bereits Tooltips im Zeiterfassungskalender, aber diese waren nicht allzu hübsch und außerdem wurden sie in manchen Browsern auch nicht richtig dargestellt. Daher haben wir das Layout für Tooltips dieses Monat überarbeitet. Im Tooltip werden die Beschreibung und die Fußzeile, so wie sie im ausgewählten <a href="https://help.timecockpit.com/?topic=html/95b1ce59-c4ec-461a-ba9b-cb978295c3de.htm" title="Formatprofile im Zeitbuchungskalender" target="_blank">Formatprofil</a> definiert sind, angezeigt.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/04/tooltips.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="permissions" id="permissions" class="mce-item-anchor"></a>Verbesserungen bei Berechtigungen</h2><p xmlns="http://www.w3.org/1999/xhtml">Beim Erstellen von neuen Elementen gab es noch Probleme mit Insert- und Update-Berechtigungen. In manchen Szenarien war es nicht möglich neue Elemente zu erstellen, obwohl ein Benutzer Insert-Berechtigungen hatte. In der neuen Version werden Insert- und Update-Berechtigungen nun richtig abgebildet. Wenn eine Berechtigung fehlt, wird diese in der Fußzeile der Editierform angezeigt. Bewegen Sie den Mauszeiger über das rote Kästchen mit der Anzahl der Fehlermeldungen, um alle Fehler angezeigt zu bekommen.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2016/04/write-permission.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <a name="extensibility" id="extensibility" class="mce-item-anchor"></a>Erweiterbarkeit des HTML5 Clients</h2><p xmlns="http://www.w3.org/1999/xhtml">Dieses Monat haben wir viel Aufwand investiert, um den HTML5 Client um eigene Module erweiterbar zu machen. Sie werden bald in der Lage sein, Ihre eigenen Applikationen im Menü zu verlinken. Dise werden dann im Bereich unter dem Menü angezeigt so wie auch der Zeitbuchungskalender oder Listen.</p><p xmlns="http://www.w3.org/1999/xhtml">Wir sind noch nicht soweit, dass wir dieses Feature schon ausliefern können, aber wir würden uns freuen, wenn Sie uns über Ihre Anforderungen in diesem Bereich berichten. Wenn Sie time cockpit um eigene Applikationen erweitern möchten oder von uns Erweiterungen bauen lassen möchten, kontaktieren Sie uns unter <a href="mailto:support@timecockpit.com">support@timecockpit.com</a>. Wir würden gerne hören was Sie brauchen, um mehr aus time cockpit machen zu können.</p>