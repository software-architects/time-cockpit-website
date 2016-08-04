---
layout: blog
title: Was ist neu in der Version April 2015
excerpt: Im HTML5 Client unterstützen wir nun viele erweiterte Konfigurationsoptionen für Listen, Forms und Cells. Die Liste der noch nicht unterstützten Features ist zwar noch lang, aber Listen und Forms können jetzt schon für viele, komplexe Kundenszenarien verwendet werden.
author: Karin Huber
date: 2015-03-31
bannerimage: /content/images/blog/2015/03/time-cockpit-april-2015.png
bannerimagesource: 
lang: de
tags: [time cockpit]
ref: 
permalink: /de/blog/2015/03/31/Was-ist-neu-in-der-Version-April-2015
---

<img src="{{site.baseurl}}/content/images/blog/2015/03/BarChartsLarge.png" /><p class="imageCaption">HTML5 client now supports embedded charts in lists as you know them from full- and Silverlight-clients</p><p>Die neue Version April 2015 (1.35) ist rückwärtskompatibel bis zur Version März 2013 (1.10). Sie können alle Versionen bis dahin gleichzeitig in einem Account verwenden.</p><h2>Inhalt
</h2><ul>
  <li>
    <a href="#Full">Verbesserungen im Full Client und im Silverlight Client</a>
  </li>
  <li>
    <a href="#HTML5">Verbesserungen im HTML5 Client</a>
  </li>
</ul><h2>
  <a id="Full" name="Full" class="mce-item-anchor"></a>Verbesserungen im Full Client und im Silverlight Client</h2><h3>Performance Zeitbuchungskalender</h3><p>Wenn in einem Monat viele Zeitbuchungen enthalten waren und gleichzeitig Formatprofile mit vielen verschiedenen Kategorien verwendet wurden, dann war die Navigation zwischen den Tagen sehr langsam. In der neuen Version haben wir dieses Problem korrigiert. Das Wechseln von einem Tag zu einem anderen geht nun auch bei komplexen Formatprofilen viel schneller.</p><h3>Fehlermeldungen in Formatprofilen
</h3><p>In der neuen Version haben wir die Fehlerbehandlung für Formatprofile verbessert. Vorher wurde für jede Zeitbuchung, die einen Fehler ausgelöst hat, ein Dialog mit der Fehlermeldung angezeigt. In manchen Fällen wurden so unzählige Dialoge geöffnet. In der neuen Version zeigen wir den Fehler direkt unter dem Formatprofil an, das den Fehler auslöst.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/03/formatting-profile-error.png" />
</p><h3>Löschen von Formatprofilen
</h3><p>Manche Benutzer haben uns gemeldet, dass unabsichtlich Formatprofile gelöscht wurden, obwohl sie nur ausgeblendet werden sollten. Wir haben das Kontextmenü für Formatprofile so geändert, dass man diese jetzt nur noch ausblenden kann. Mit dem Zahnrad rechts oben kann ein ausgeblendetes Profil wieder angezeigt werden. Wenn Sie ein Profil endgültig für alle Benutzer löschen wollen, klicken Sie auf "Profil bearbeiten". Dort finden Sie jetzt den Button zum Löschen des Profils.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/03/hide-formatting-profile.png" />
</p><h3>Volltext-Suche in Expressions</h3><p>Typischerweise referenzieren Zellen in Listen Definition eine Eigenschaft der Entität, die sie anzeigen. Es ist aber auch möglich komplexe <a href="http://help.timecockpit.com/?topic=html/28e3e0bd-6bd7-4435-930b-69671817bf95.htm">TCQL-Expressions</a> zu verwenden. Bei der Verwendung von komplexen Ausdrücken (z.B. <em>&lt;BoundCell Content="<strong>=:DisplayValue(Current.Project)</strong>" /&gt;</em>), hat die Volltext-Suche auf Gleichheit geprüft, anstelle zu prüfen ob der Suchausdrück enthalten ist. In der neuen Version ist dieser Fehler korrigiert.</p><h3>Fehler beim Upload von Berichtsdefinitionen
</h3><p>In seltenen Fällen wurde beim Upload von Berichtsdefinitionen ein Fehler angezeigt. Die Berichtsdefinition wurde aber trotzdem erfolgreich gespeichert. Der Fehler sollte nun nicht mehr angezeigt werden.</p><h3>Spracheinstellungen in Windows 10</h3><p>In Windows 10 (oder zumindest in manchen Versionen) haben sich manche Formateinstellungen geändert (z.B. für Österreich). Es sind nun am/pm Symbole für Vormittag und Nachmittag hinterlegt. D.h. es wird bei der Uhrzeit "vorm." und "nachm." angezeigt. In Windows ist es möglich, die Datums- und Zeiteinstellungen zu ändern. Time cockpit hat diese bis jetzt aber nicht berücksichtigt. Daher wurden in Windows 10 im Zeitbuchungskalender die Symbole "vorm." und "nachm". bei der Uhrzeit angezeigt. In der neuen Version von time cockpit werden diese nicht mehr angezeigt, wenn Sie diese in den Datumseinstellungen entfernt haben.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2015/03/am-pm-symbols.png" />
</p><h2>
  <a id="HTML5" name="HTML5" class="mce-item-anchor"></a>Verbesserungen im HTML5 Client</h2><p>Im HTML5 Client unterstützen wir nun viele erweiterte Konfigurationsoptionen für Listen, Forms und Cells. Die Liste der noch nicht unterstützten Features ist zwar noch lang, aber Listen und Forms können jetzt schon für viele, komplexe Kundenszenarien verwendet werden.</p><h3>Read-Only Expression in Entities</h3><p>The Read-Only Expression für Entitäten kann verwendet werden, um diese abhängig von einer Bedingung im User Interface schreibgeschützt anzuzeigen. Sie verhindert nicht, dass eine Entität mit Hilfe von Scripts, Actions, der OData API oder ähnlichem geändert wird, aber über das User Interface sind Änderungen nicht mehr möglich. Im Zeitbuchungskalender werden schreibgeschützte Zeitbuchungen semi-transparent dargestellt. Wenn Sie die Form für eine schreibgeschützte Entität öffnen, werden alle Eingabefelder ausgegraut dargestellt. Das Speichern ist nicht möglich. In ausgelieferten Datenmodell von time cockpit verwenden wir diese Funktion, um Benutzer am Ändern von bereits verrechneten Zeitbuchungen zu hindern. Durch die Verwendung von Read-Only Expressions anstelle von Berechtigungen ist es möglich, dass die betroffene Zeitbuchung trotzdem durch Actions noch modifiziert werden kann (z.B. um diese einer Ausgangsrechnung zuzuordnen, oder um die Zuordnung wieder aufzuheben).</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:aec68129-055e-4506-ac85-cab175d2be00" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><p>The neue Version des HTML5 Client verhält sich nun wie der Full Client. Read-Only Elemente können nicht mehr über das User Interface verändert werden:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:4483296f-fb41-4070-b895-0134ee8c22b1" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><h3>Actions in Listen</h3><p>In der neuen Version können für Listen nun Actions ausgeführt werden. Wählen Sie alle Listenelement aus, auf die die Action ausgeführt werden soll und wählen Sie die auszuführende Action:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:8c351fc3-73bf-4098-aeee-1fcf07951cc3" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function><p class="showcase">Bitte beachten Sie, dass Actions, die nicht von uns ausgeliefert werden, von uns signiert werden müssen, damit sie im Web Client (Silverlight oder HTML5) ausführbar sind. <a href="http://www.timecockpit.com/blog/2014/11/27/Why-You-Need-to-Sign-Your-Custom-Code" target="_blank">Mehr ...</a></p><h3>
  <em>IsVisible</em> / <em>IsEnabled</em> / <em>IsReadOnly</em> / <em>SelectFirstIfNew</em> Properties für Form Cells</h3><p>Die Eigenschaften <em>IsVisible</em>, <em>IsEnabled</em> und <em>IsReadOnly</em> für Cells und die Eigenschaft <em>SelectFirstIfNew</em> für Relation Cells sind nun implementiert.</p><h3>
  <em>DataBarCell</em> und <em>BulletGraphCell</em></h3><p>Und eine Erweiterung gibt es noch in der neuen Version: <a href="~/blog/2013/02/28/Whats-New-in-Version-March-2013" target="_blank"><em>DataBarCells</em> und <em>BulletGraphCells</em></a>, die wir vor zwei Jahren entwickelt haben, stehen nun auch im HTML5 Client zur Verfügung:</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaImage" value="MediaArchive:eb2fd4c4-e65b-45c2-a4e3-2c1348b5121e" />
  <param name="ThumbnailMaxWidth" value="800" />
  <param name="ThumbnailMaxHeight" value="800" />
  <param name="ImageMaxWidth" value="1280" />
  <param name="ImageMaxHeight" value="1024" />
</function>