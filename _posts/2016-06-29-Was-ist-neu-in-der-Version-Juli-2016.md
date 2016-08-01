---
layout: blog
title: Was ist neu in der Version Juli 2016
excerpt: Mehr und mehr User verwenden den neuen HTML5 Client von time cockpit. Um den Übergang zu erleichtern haben wir in der HTML5 Benutzeroberfläche diesen Monat viele Kleinigkeiten verbessert. Beispiele sind besseres Tastatur-Handling, bessere Performance von Forms und automatisches Anpassen von Spaltenbreiten in Grids. In diesem Blogartikel beschreiben wir alle Verbesserungen, die wir diesen Monat ausgeliefert haben. 
author: Karin Huber
date: 2016-06-29
bannerimage: /content/images/blog/2016/06/time-cockpit-july-2016.png
bannerimagesource: 
lang: de
tags: [time cockpit]
permalink: /de/blog/2016/06/29/Was-ist-neu-in-der-Version-Juli-2016
---

<h2>Überblick
		</h2><p>Mehr und mehr User verwenden den neuen HTML5 Client von time cockpit. Um den Übergang zu erleichtern haben wir in der HTML5 Benutzeroberfläche diesen Monat viele Kleinigkeiten verbessert. Beispiele sind besseres Tastatur-Handling, bessere Performance von Forms und automatisches Anpassen von Spaltenbreiten in Grids. In diesem Blogartikel beschreiben wir alle Verbesserungen, die wir diesen Monat ausgeliefert haben. 
		</p><ul>
  <li>
    <a href="#combobox">Combo Box Verbesserungen</a>
  </li>
  <li>
    <a href="#autosize">Auto Size von Spalten</a>
  </li>
  <li>
    <a href="#performance">Performance in Forms</a>
  </li>
  <li>
    <a href="#defaultview">Öffnen in Druckansicht</a>
  </li>
  <li>
    <a href="#timeoff">Anzeige von Abweisenheitszeiten ohne Beschreibung</a>
  </li>
  <li>
    <a href="#guidproperty">Guid Property</a>
  </li>
</ul><p class="highlighted">Wir haben diesen Monat aller verfügbaren Ressourcen in den neuen HTML5 Client gesteckt, daher gibt es diesen Monat keinen neuen Full Client.
		</p><h2>
  <a name="combobobx" class="mce-item-anchor" id="combobobx"></a>Combo Box Verbesserungen
		</h2><p>Diesen Monat haben wir das Eingabeverhalten der HTML5 Combo Box dem des Full Client so ähnlich wie möglich gemacht.  Einer der Hauptunterschiede war, dass das Drücken von TAB den Inhalt gelöscht hat anstatt das erste verfügbare Objekt auszuwählen. In der neuen Version haben wir dieses Problem gelöst. Wenn Sie etwas in die Combo Box eintippen wird das Ergebnis entsprechend Ihrer Eingaben gefiltert.  Jetzt können Sie TAB oder ENTER drücken, um das erste Objekt auszuwählen. Alternativ können Sie auch die Pfeiltasten nutzen, um ein Objekt auszuwählen. 
		</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/06/combobox-tab.png" />
</p><h2>
  <a name="autosize" class="mce-item-anchor" id="autosize"></a>Auto Size von Spalten im Listen
		</h2><p>Die neue Version ist jetzt in der Lage die Größe des Inhalts von Spalten in Listen zu erkennen. Wenn Sie eine Liste öffnen werden alle Spalten die keine explizite Breite definiert haben, an die Größe der Inhalte jener Zeilen angepasst, die auf der ersten Seite angezeigt werden. Die folgenden Screenshots zeigen die Kundenliste der alten und der neuen Version. Die Spaltenbreiten sind jetzt an die Inhalte angepasst:
		</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/06/auto-fit-columns.png" />
</p><h2>
  <a name="performance" class="mce-item-anchor" id="performance"></a>Performance in Forms
		</h2><p>In der Vergangenheit waren Forms im HTML5 Client bei komplexen Datenmodellen erheblich langsamer. Ab diesem Monat ist die HTML5 Forms-Engine genauso smart wie die des time cockpit Full Client. Sie sollten nun gleichwertige Performance bieten.
		</p><p>Wenn Sie <a href="https://help.timecockpit.com/?topic=html/29feb0d4-900b-7882-7936-4bdfd6958248.htm" target="_blank">Model Entities</a> mit vielen Relations und einer tief gehenden Relationshierarchie haben, hatten Sie vermutlich Performance-Probleme beim Öffnen von Forms. Für diese Szenarien haben wir bereits eine <a href="https://help.timecockpit.com/?topic=html/75aacc52-a75f-403e-8010-7ed2ee36a637.htm" target="_blank">Include Clause</a> in der Form-Definition, welche hilft die Relations einzugrenzen die für Validierungen und Berechtigungen geladen werden müssen. In der neuen Version wird die "Include Clause" nun auch im HTML5 Client berücksichtigt und verbessert daher stark die Performance bei Validierung von komplexen Objekten.
		</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/06/include-clause.png" />
</p><h2>
  <a name="defaultview" class="mce-item-anchor" id="defaultview"></a>Öffnen in Druckansicht
		</h2><p>Time cockpit erlaubt, in einer Liste mehrere Ansichten zu hinterlegen. Neben der Standard-Listenansicht können Sie eigene Reports hinzufügen. Im Hintergrund sind zusätzliche Ansichten <a href="https://help.timecockpit.com/?topic=html/79CD8953-EC83-4C9A-881D-3F054122D4D5.htm" target="_blank">Reporting Services Berichte</a>, die als PDF angezeigt oder als Word oder Excel-Files heruntergeladen werden können. In Listenansichten können Sie wählen, ob Sie die <a href="https://help.timecockpit.com/?topic=html/F93A6802-1F67-4D03-A63C-0BF0995D90B7.htm" target="_blank">Standard-Druckansicht</a> (eine automatisch generierte Druckansicht der Liste) oder einen <a href="https://help.timecockpit.com/?topic=html/6EE451F4-D459-4117-8C5F-491C2CB03D00.htm" target="_blank">eigenen Bericht</a> möchten. In unserem Standard-Datenmodell gibt es z.B. einen Arbeitszeitbericht der alle Arbeitsstunden eines Benutzers für einen Monat anzeigt:
		</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/06/time-report.png" />
</p><p>In der Vergangenheit hat jeder Link in time cockpit (z.B. im Menü, in einer Liste) die Listenansicht geöffnet. Wenn man eine Druckansicht wollte musste man manuell umschalten. Dieser manuelle Schritt kann nun weggelassen werden. Die neue Version erlaubt, direkte Links zu den verschiedenen Ansichten einer Liste zu spezifizieren. Dafür haben wir einen neuen XML Namespace <code>web</code> in unserer <code>NamedList</code> und <code>NamedForm</code> Konfigurationssprache eingeführt.
		</p><p class="showcase">Properties mit diesem Namespace funktionieren nur im HTML5 Client und werden im Full Client ignoriert.
		</p><p>Wir haben drei neue Properties bei <em>NamedListConfiguration</em> in Hyperlinks ergänzt:
		</p><table class="infoTable">
  <tbody>
    <tr>
      <th>Name
					</th>
      <th>Typ
					</th>
      <th>Beschreibung
					</th>
    </tr>
    <tr>
      <td>web:View
					</td>
      <td>string
					</td>
      <td>Der Name des Berichts, der angezeigt werden soll. Wird keine View angegeben, wird die Standardansicht für die Liste geöffnet.
					</td>
    </tr>
    <tr>
      <td>web:Format
					</td>
      <td>string
					</td>
      <td>PDF (Standard, wenn eine View angegeben wird), Excel oder Word
					</td>
    </tr>
    <tr>
      <td>web:Raw
					</td>
      <td>boolean
					</td>
      <td>Gibt an, ob der Bericht eingebettet im HTML5 Client angezeigt werden soll, oder ob die PDF, Excel oder Word-Datei alleine geöffnet werden soll.
					</td>
    </tr>
  </tbody>
</table>{% highlight xml %}<List EditModelEntityName="APP_UserDetail" EditProperty="ObjectUuid" AllowDelete="True" AllowEdit="True" 
xmlns="clr-namespace:TimeCockpit.Data.DataModel.View;assembly=TimeCockpit.Data" 
xmlns:p="http://www.timecockpit.com/2009/ui/controls"
xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
mc:Ignorable="web" 
xmlns:web="http://www.timecockpit.com/2016/web/controls">
...
<BoundCell ColSpan="2" Content="Time Report">
    <BoundCell.Hyperlink>
        <Hyperlink Title="Time Report">
            <Hyperlink.NavigateContent>
                <p:NamedListConfiguration ListName="APP_DefaultTimeReportList" 
                    web:View="APP_TimeReport" web:Format="PDF" web:Raw="True">
                    <p:NamedListConfiguration.Parameters>
                        <Parameter Name="UserDetail" Value="=Current.APP_UserDetailUuid" />
                    </p:NamedListConfiguration.Parameters>
                </p:NamedListConfiguration>
            </Hyperlink.NavigateContent>
        </Hyperlink>
    </BoundCell.Hyperlink>
</BoundCell>
...
</List>{% endhighlight %}<h2>
  <a name="timeoff" class="mce-item-anchor" id="timeoff"></a>Anzeige von Abwesenheitszeiten ohne Beschreibung
		</h2><p>Letztes Monat haben wir Abwesenheitszeiten wie Urlaub und Krankenstand im Zeitbuchungskalender eingeführt. Diese funktionierten in den meisten Szenarios gut, wenn jedoch die Beschreibung leer war, wurde dieses Objekt im Zeitbuchungskalender nicht angezeigt. Dieses Problem haben wir in der neuen Version gelöst. Jetzt zeigen wir einen Standardtext für jeden Typ von Abwesenheit ohne Beschreibung an.
		</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2016/06/empty-vacation.png" />
</p><h2>
  <a name="guidproperty" class="mce-item-anchor" id="guidproperty"></a>Guid Property
		</h2><p>Die neue Version unterstützt nun die <a href="https://help.timecockpit.com/?topic=html/16d5bb46-fa8a-83af-8ea3-d5e5d2bcd94e.htm" target="_blank">GuidCell</a> in Formularen. Diese ermöglicht, Guids in einer Textbox einzugeben. Sie wundern sich, dass jemand eine Guid in ein time cockpit Forms gibt? Einige Kunden verwenden Guids, um zugehörige Daten in anderen Systemen zu identifizieren (z.B. die ID eines Kunden, importiert von einem CRM mit einer Schnittstelle zu time cockpit). Administratoren möchten diese IDs manchmal in spezifischen Forms ansehen können.
		</p>