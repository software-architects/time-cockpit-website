---
layout: page
title: Erweiterbare Zeiterfassung
permalink: /de/tour/erweiterbarkeit/
---

<h1 xmlns="http://www.w3.org/1999/xhtml">Erweiterbarkeit
		</h1><div class="tour" xmlns="http://www.w3.org/1999/xhtml">
  <div class="row">
    <div class="col-sm-12">
      <h2>Datenmodell
		</h2>
      <p class="Subheader">
        <span lang="EN-US">
          <strong>Passen Sie time cockpit an Ihre Bedürfnisse an indem Sie neue Tabellen, Spalten, Validierungsregeln und ähnliches hinzufügen.</strong>
        </span>
      </p>
      <p>Sie können das time cockpit Datenmodell ohne Programmierkenntnisse anpassen. Natürlich erhalten Sie trotzdem weiterhin Updates für time cockpit.
		</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <ul class="checkList">
        <li>
          <strong>Fügen Sie Tabellen und Beziehungen hinzu</strong>
          <br /> Erweitern Sie das Datenmodell mit neuen Tabellen und Beziehungen. Time cockpit generiert automatisch Listen und Forms zur Datenverwaltung. Sie können die automatisch generierten Listen und Forms anpassen.
					</li>
        <li>
          <strong>Fügen Sie neue Eigenschaften hinzu</strong>
          <br /> Wählen Sie aus einer Vielzahl von Datentypen wie Textfeldern, numerischen Felder, Datumsfeldern und vielen mehr.
					</li>
        <li>
          <strong>Fügen Sie berechnete Felder hinzu</strong>
          <br /> Fügen Sie berechnete Felder, die Ihre Geschäftslogik abbilden mit <a href="http://help.timecockpit.com/html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">time cockpit’s Formelsprache</a> hinzu.
					</li>
        <li>
          <strong>Fügen Sie Validierungsregeln hinzu</strong>
          <br /> Wir liefern time cockpit mit einer Hand voll Validierungsregeln aus. Fügen Sie eigene hinzu, um Ihre Geschäftslogik abzubilden.
					</li>
      </ul>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:13f62e3e-825e-434f-ae16-957b9a2828b2" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>Datenzugriffsberechtigungen
				</h2>
      <p>
        <strong>Definieren Sie Berechtigungen für ganze Tabellen oder auf Zeilenebene.</strong>
      </p>
      <p>Definieren Sie, welcher Benutzer auf welche Tabellen oder welche Zeilen einer Tabelle zugreifen darf. Sie brauchen dafür keine Programmierkenntnisse, alle Regeln werden in der <a href="http://help.timecockpit.com/html/a7465f29-c739-4a14-bf5b-09821133dd9a.htm" target="_blank">time cockpit Formelsprache</a> definiert.
				</p>
      <p>Permissions können für alle Daten im Datenmodell definiert werden. Sie werden sowohl im Full-Client als auch im Browser berücksichtigt.
				</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:0309ad8b-152d-4451-a29c-e86ad50d9ffe" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>User Interface
				</h2>
      <p>
        <strong>Passen Sie alle Listen und Forms an Ihre Bedürfnisse an.</strong>
      </p>
      <p>Sie können alle Listen und Forms ohne Programmierkenntnisse anpassen und auch eigene hinzufügen. Definieren Sie die Listen und Forms in einem einfachen XML Format. Time cockpit enthält einen Editor, in dem Sie die Anpassungen ausprobieren können bevor Sie diese für andere Benutzer freigeben.
				</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:bf811252-67ad-4757-afb1-7092eca393eb" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>OData Web API
				</h2>
      <p>Time cockpit bietet ein plattform-unabhängiges OData Webservice zum Lesen und Schreiben von Daten an. Ihre Anpassungen am Datenmodell stehen auch im Webservice zur Verfügung (z.B. eigene Tabellen oder Spalten, Validierungsregeln, Berechtigungen). Hier sind einige Szenarien für die Verwendung der time cockpit OData Web API:
				</p>
      <ul class="checkList">
        <li>
          <strong>Datenanalyse</strong>
          <br /> Ergänzen Sie time cockpit's Reporting Engine mit den interaktiven Datenanalysemöglichkeiten von z.B. Microsoft Excel mit <a href="http://www.microsoft.com/en-us/download/details.aspx?id=39379" target="_blank">Power Query</a>. Verwenden Sie dazu time cockpit’s OData Feed als Datenquelle.
					</li>
        <li>
          <strong>Datenintegration</strong>
          <br /> Integrieren Sie Ihre Zeiterfassungsdaten in bestehende Reporting Datenbanken oder in Ihr Datawarehouse z.B. mit dem <a href="http://www.microsoft.com/en-us/download/details.aspx?id=42280" target="_blank">OData Support von SSIS</a> (SQL Server Integration Services).
					</li>
        <li>
          <strong>Eigene Applikationen</strong>
          <br /> OData wurde unter anderem mit einem Fokus auf Browser-Applikationen entwickelt. Der OData Feed von time cockpit kann daher ganz einfach über JavaScript verwendet werden. So können Sie Ihre eigenen Applikationen bauen und die time cockpit Infrastruktur im Hintergrund verwenden.
					</li>
      </ul>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:d99dea2c-969f-4fa6-b62f-2dcd8f96601b" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <p>In der <a href="https://help.timecockpit.com/?topic=html/5d6e34c5-3b08-4fa4-baa0-45eb707b6b78.htm" target="_blank">time cockpit Hilfe</a> finden Sie weitere Informationen zur OData Web API.
		</p>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>Scripting
				</h2>
      <p class="Subheader">
        <span lang="EN-US">
          <strong>Automatisieren Sie Routinetätigkeiten mit Python Scripts.</strong>
        </span>
      </p>
      <p>
        <a href="http://www.python.org/doc/" target="_blank">Python</a> ist eine vielverwendete Scripting Sprache. Time cockpit unterstützt <a href="http://ironpython.net/" target="_blank">IronPython</a> Scripts, Sie haben damit Zugriff auf die gesamte <a href="http://msdn.microsoft.com/en-us/library/vstudio/w0x726c2.aspx" target="_blank">Microsoft .NET Framework</a> Klassenbibliothek. Verwenden Sie Ihre bevorzugte Python Scripting Umgebung oder entwickeln Sie die Script direkt in time cockpit's Python Editor. Sie können z.B. folgende Tasks automatisieren:
				</p>
      <ul class="checkList">
        <li class="Checklist">Importieren oder Exportieren Sie Daten über CSV oder XML Dateien, Web Services, ...
					</li>
        <li class="Checklist">Generieren Sie automatisch Microsoft Office Excel Reports (<a href="{{site.baseurl}}/tour/reporting/">lesen Sie mehr über Reporting...</a>)
					</li>
        <li class="Checklist">Implementieren Sie Prozesse wie die Freigabe von Urlauben, dem Erstellen von Rechnungen, ...
					</li>
      </ul>
      <p>Time cockpit enthält ein Command Line Tool, mit dem Sie Scripts automatisch ausführen können. Alternativ dazu können Sie Scripts im Datenmodell auch als Aktion hinterlegen, die vom Benutzer manuell angestoßen werden muss.
				</p>
      <p>
        <a href="http://help.timecockpit.com/html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">Lesen Sie mehr über Scripting in time cockpit in der Online Hilfe...</a>
      </p>
    </div>
    <div class="col-sm-12 col-md-6">
      <f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
        <f:param name="MediaImage" value="MediaArchive:b872a5d2-2647-4699-97fe-570695a4092d" />
        <f:param name="GroupName" value=" page" />
      </f:function>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h2>Deployment der Anpassungen
				</h2>
      <p>
        <strong>Sie brauchen sich um das Deployment der Anpassungen nicht zu kümmern. Time cockpit verteilt sie automatisch an alle Devices.</strong>
      </p>
      <p>Wenn Sie Anpassungen in time cockpit vornehmen, müssen Sie deshalb nicht eine neue Version von time cockpit verteilen. Alle Anpassungen werden sofort in der Online Variante übernommen. Im Full Client werden sie im Rahmen der Synchronisation automatisch übernommen.
				</p>
    </div>
  </div>
</div>