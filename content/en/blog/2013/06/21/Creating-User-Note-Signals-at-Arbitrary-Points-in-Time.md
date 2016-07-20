---
layout: blog
title: Creating User Note Signals at Arbitrary Points in Time
author: Simon Opelt
bannerimage: 
permalink: /2013/06/21/Creating-User-Note-Signals-at-Arbitrary-Points-in-Time
---

<h2 xmlns="http://www.w3.org/1999/xhtml">Intro
		</h2><p xmlns="http://www.w3.org/1999/xhtml">Time cockpit allows you to take <a href="http://help.timecockpit.com/?topic=html/b1112ccc-77a0-45a5-9119-cd25db0c4f03.htm" target="_blank">notes</a> during your daily work. Such a note often acts as a reminder for a certain action, task switch or event that is not automatically tracked but important for your time booking. Notes are typically created for the current point in time. This article shows how you can configure time cockpit to allow arbitrary timestamps in user notes.
		</p><p xmlns="http://www.w3.org/1999/xhtml">An example of signals in time cockpit showing a note might look like the following screenshot:
		</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2013/06/UserNoteExample.png" title="Example Note" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Creating a New User Note Form
		</h2><p xmlns="http://www.w3.org/1999/xhtml">As with most parts of time cockpit the form used for creating and storing a note can be configured. Using the customization module the following steps should be taken:
		</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Switch from client to <strong>server</strong> in the top combo box.
			</li>
  <li>In the ribbon select <strong>New</strong>, <strong>New form</strong>.
			</li>
  <li>Choose a name for the new form (e.g. <strong>MyUserNoteForm</strong>) and select the entity <strong>APP_UserNoteSignal</strong>.
			</li>
  <li>Put in the <a href="{{site.baseurl}}images/blog/2013/06/MyUserNoteForm.txt" rel="nofollow">new form configuration</a> which contains an additional cell for the timestamp.
			</li>
  <li>
    <strong>Save</strong> the new form.
			</li>
</ul><div xmlns="http://www.w3.org/1999/xhtml">Note that depending on your primary use-case you might want to swap the two cells in the form definition in order to enter the description first and not be bothered with changing or tabbing over the date and time.
		</div><div xmlns="http://www.w3.org/1999/xhtml">
  <br />
</div><div xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2013/06/UserNoteFormConfig.png" title="Form Configuration" />
</div><h2 xmlns="http://www.w3.org/1999/xhtml">Configuring the Signal Tracker
		</h2><p xmlns="http://www.w3.org/1999/xhtml">Now that the form is available we can switch to the <strong>signal tracker module</strong>, select the <strong>Notes</strong> tracker and enter the name of the newly created form.
		</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2013/06/UserNoteTrackerConfig.png" title="Note Signal Tracker Configuration" />
</p><p xmlns="http://www.w3.org/1999/xhtml">After clicking <strong>Apply Changes</strong> the signal tracker will use the customized form. When you use the shortcut the timestamp can be changed if required. The following sample shows two signals which have been created one after the other but the second one has been created two hours in the past:
		</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2013/06/UserNoteSignal1.png" title="Typical Note Created at Current Time" />
</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}images/blog/2013/06/UserNoteSignal2.png" title="Note Created Two Hours in the Past" />
</p>