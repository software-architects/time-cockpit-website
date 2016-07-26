---
layout: page
title: Time Tracking with Time Cockpit -  Try 30 Days for Free
permalink: /create-trial-account/
---

<div class="row">
  <div class="col-sm-6 col-md-5">
    <h1>Start Full Free 30-Day Trial</h1>
    
	<form name="form" action="https://formspree.io/jovan@timecockpit.com" method="POST">
		<p>
			<label>First name</label>
			<input type="text" name="firstName" id="firstName" required />
			<span data-message-for="firstName" class="tc-error">Please enter your first name.</span>
		</p>

		<p>
			<label>Last name</label>
			<input type="text" name="lastName" id="lastName" required />
			<span data-message-for="lastName" class="tc-error">Please enter your last name.</span>
		</p>

		<p>
			<label>Email address</label>
			<input name="email" id="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required />
			<span data-message-for="email" class="tc-error">Please enter your email address.</span>
		</p>

		<p>
			<label>Password</label>
			<input type="password" name="password" id="password" required />
			<span data-message-for="password" class="tc-error">Please enter a password for your time cockpit account.</span>
		</p>

		<p class="confirmationField">
			<label>Please do not write in this field</label>
			<span><input name="emailConfirmation" type="text" id="emailConfirmation" data-empty-required /></span>
		</p>

		<p class="text-right"> 
			<a onclick="createAccount(event)" class="linkButtonMain">Create trail account<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
			</a>
		</p>

	</form>

	<p class="acceptTermsOfService">
		By clicking "Create trial account" you agree to the
		<a href="/time-cockpit-website/legal-notice/license-terms/" target="_blank"> terms of service</a>
		.
	</p>

    <p>Your trial account is free and no action is required if you do not want to continue using time cockpit.</p>
  </div>
  <div class="hidden-sm col-md-2">
    <!--<div class="inputAlternatives">or
				</div>-->
  </div>
  <div class="col-sm-6 col-md-5">
    <h1>Try Without Registration
						</h1>
    <div class="inputFormCenter">
      <div>
        <p>Don't want to bother with a trial account? Start the web client with demo data to get a first impression.
						</p>
        <h3>Limitations
						</h3>
        <ul>
          <li>It is not possible to track your activities on your computer.
							</li>
          <li>The data model cannot be customized.
							</li>
          <li>All data you enter will be deleted periodically.
							</li>
        </ul>
        <div class="textalignright">
          <a class="linkButton" onclick="_gaq.push(['_trackEvent', 'Create trial account', 'Online client with demo data']);" href="https://web.timecockpit.com/DemoLogin" title="Launch time cockpit demo account" target="_blank">Launch online demo</a>
        </div>
      </div>
    </div>
  </div>
</div>