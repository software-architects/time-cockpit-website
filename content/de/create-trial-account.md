---
layout: page
title: Zeiterfassung mit time cockpit -  30 Tage kostenlos testen
permalink: /de/create-trial-account/
---

<div class="row">
  <div class="col-sm-6 col-md-5">
    <h1>30 Tage Test-Account</h1>
		
	<form name="form" action="https://formspree.io/jovan@timecockpit.com" method="POST">
		<p>
			<label>Vorname</label>
			<input type="text" name="vorname" id="vorname" required />
			<span data-message-for="vorname" class="tc-error">Bitte geben Sie Ihren Vornamen ein.</span>
		</p>

		<p>
			<label>Nachname</label>
			<input type="text" name="nachname" id="nachname" required />
			<span data-message-for="nachname" class="tc-error">Bitte geben Sie Ihren Nachnamen ein.</span>
		</p>

		<p>
			<label>E-Mail Addresse</label>
			<input name="email" id="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required />
			<span data-message-for="email" class="tc-error">Bitte geben Sie Ihre E-Mail Adresse ein.</span>
		</p>

		<p>
			<label>Passwort</label>
			<input type="password" name="passwort" id="passwort" required />
			<span data-message-for="passwort" class="tc-error">Bitte wählen Sie ein Passwort für Ihren time cockpit Account.</span>
		</p>

		<p class="confirmationField">
			<label>Feld bitte leer lassen</label>
			<span><input name="emailConfirmation" type="text" id="emailConfirmation" data-empty-required /></span>
		</p>

		<p class="text-right"> 
			<a onclick="createAccount(event)" class="linkButtonMain">Account erstellen<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
			</a>
		</p>
	</form>

	<p class="acceptTermsOfService">
		Durch Klicken auf "Account erstellen" akzeptieren Sie die
		<a href="/time-cockpit-website/de/impressum/lizenzbestimmungen/" target="_blank"> Nutzungsbedingungen</a>
		.
	</p>
    <p>Ihr Test-Account ist kostenlos, uns Sie müssen sich nicht abmelden, wenn Sie time cockpit nicht weiterverwenden möchten</p>
  </div>
  <div class="hidden-sm col-md-2">
    <!--<div class="inputAlternatives">or
				</div>-->
  </div>
  <div class="col-sm-6 col-md-5">
    <h1>Ohne Registrierung testen
				</h1>
    <div class="inputFormCenter">
      <div>
        <p>Möchten Sie sich nicht mit dem Erstellen eines Trial-Accounts aufhalten? Starten Sie den Web Client mit Demo-Daten, um einen ersten Eindruck zu bekommen.
						</p>
        <h3>Einschränkungen
						</h3>
        <ul>
          <li>Die Aktivitäten auf Ihrem Computer können nicht aufgezeichnet werden.
							</li>
          <li>Anpassungen am Datenmodell sind nicht möglich.
							</li>
          <li>Alle Daten, die Sie eingeben, werden regelmäßig gelöscht.
							</li>
        </ul>
        <div class="textalignright">
          <a class="linkButton" onclick="_gaq.push(['_trackEvent', 'Create trial account', 'Online client with demo data']);" href="https://web.timecockpit.com/DemoLogin" title="Time Cockpit online ausprobieren" target="_blank">Online Demo starten</a>
        </div>
      </div>
    </div>
  </div>
</div>