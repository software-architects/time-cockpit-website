---
layout: blog
title: Synchronized Android Call Log Import
teaser: Time cockpit can assist you in keeping track of your phone calls. By using two simple and free apps you can set up automatic synchronization from your Android phone, to cloud storage, to your desktop and into time cockpit.
author: Simon Opelt
date: 2013-01-22
bannerimage: 
lang: en
permalink: /blog/2013/01/22/Synchronized-Android-Call-Log-Import
---

<p>Time cockpit comes with a set of <a href="http://help.timecockpit.com/?topic=html/bc84a014-edce-4c69-98a8-c6a7774b138c.htm" target="_blank">signal trackers</a> to help you keep track of your time. One of these trackers can import call logs from mobile phones or other devices. Importing your phone calls into time cockpit helps you not to forget billable phone calls (e.g. customer support). In this article we want to describe how you can setup automatic synchronization of Android call logs using free tools and cloud storage offerings. With these tools importing your phone calls into time cockpit will run fully automated without any manual steps.</p><h2>The Workflow</h2><p>The image below illustrates the basic workflow. Your Android phone will automatically export your call log in a local folder. Technically the call log files are XML files. Next, your call log files will be transferred to your personal cloud storage. You can use services like <a href="http://www.dropbox.com" target="_blank">Dropbox</a>, <a href="http://www.skydrive.com" target="_blank">SkyDrive</a>, or <a href="http://drive.google.com" target="_blank">Google drive</a>. All of these providers offer storage for free. By putting your call log files into your cloud storage, the files will be synchronized to your PC, too. From there time cockpit can pick them up and import them. Setting up this process will take you just a few minutes. It will run automatically in the background. You will always have your call logs available when you complete your time sheet.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2013/01/AndroidImportWorkflow.png" alt="Workflow for importing call logs from Android" />
</p><p>Note that we will use a <a href="https://www.dropbox.com" target="_blank">Dropbox</a> account in this article.</p><h2>Call Logs Backup &amp; Restore</h2><p>There are multiple tools available for your Android phone that are capable of exporting your call log. For time cockpit we recommend the free software <a href="https://play.google.com/store/apps/details?id=com.riteshsahu.CallLogBackupRestore" target="_blank">Call Logs Backup &amp; Restore</a> (or the <a href="https://play.google.com/store/apps/details?id=com.riteshsahu.CallLogBackupRestorePro" target="_blank">ad-free, commercial version</a>). The following image gallery leads you through the process of configuring the automatic export of your call log. Please click on the first image and browse through the gallery using the <em>Next</em> button.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaFolder" value="MediaArchive:ed57fd1c-010e-49de-b46f-2ff25ba1a3a6" />
  <param name="ThumbnailMaxWidth" value="100" />
  <param name="ThumbnailMaxHeight" value="100" />
  <param name="AutoSquareThumbnails" value="True" />
</function><h2>FolderSync (Lite)</h2><p>Once you have set up the call log export, you have to regularly transfer the log files to your cloud data store. <strong>Please make sure to use a dedicated folder for call history files! The signal tracker will potentially remove files after processing (depends on your configuration) which might be unwanted if you store data other than your call logs in the same folder.</strong> Again there are multiple tools available that do a great job in this area. For time cockpit we recommend the free software <a href="https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite" target="_blank">FolderSync Lite</a> (or the <a href="https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.full" target="_blank">ad-free, commercial version with additional features</a>). The following image gallery leads you through the process of configuring the automatic synchronization of your call log. Please click on the first image and browse through the gallery using the <em>Next</em> button.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaFolder" value="MediaArchive:c906f71b-5705-47b0-ac91-a5aae5db4764" />
  <param name="ThumbnailMaxWidth" value="100" />
  <param name="ThumbnailMaxHeight" value="100" />
  <param name="AutoSquareThumbnails" value="True" />
</function><h2>Files during Synchronization</h2><p>Your cloud storage tool will automatically pick up the files and copy them to your PC. In this example we have used Dropbox. Therefore the files appear in our local Dropbox folder. The following image gallery illustrates the synchronization process.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaFolder" value="MediaArchive:803cdf5e-f9d4-4c61-b30b-191e66a58538" />
  <param name="ThumbnailMaxWidth" value="100" />
  <param name="ThumbnailMaxHeight" value="100" />
  <param name="AutoSquareThumbnails" value="True" />
</function><h2>Signal Tracker Configuration</h2><p>The last step is the configuration of time cockpit. The following image gallery leads you through the process of configuring time cockpit. Please click on the first image and browse through the gallery using the <em>Next</em> button.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaFolder" value="MediaArchive:f6d3e171-cab1-4a89-b50b-c18cc40b68ad" />
  <param name="ThumbnailMaxWidth" value="100" />
  <param name="ThumbnailMaxHeight" value="100" />
  <param name="AutoSquareThumbnails" value="True" />
</function><h2>Demo Calls</h2><p>Now your Android device and time cockpit will automatically exchange the phone call history.</p><function name="Composite.Media.ImageGallery.Slimbox2">
  <param name="MediaFolder" value="MediaArchive:68298f19-1d82-4c46-bbd9-291f98314849" />
  <param name="ThumbnailMaxWidth" value="100" />
  <param name="ThumbnailMaxHeight" value="100" />
  <param name="AutoSquareThumbnails" value="True" />
</function><h2>Imported Calls in time cockpit</h2><p>After the export, synchronization and time cockpit processing the call log data, it will appear in time cockpit's calendar. This will be a reminder to book and bill times to your customers, even if you were not using your computer and signal trackers at that time. You can use the time range and contact name as the starting points for your booking. Double click on the phone call and time cockpit will automatically open a time sheet record with the correct begin and end time.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/calllog/Calendar" alt="Calls in Calendar" title="Calls in Calendar" />
</p><h2>Future Improvements</h2><p>We do not yet support automatic filtering of projects and tasks based on the remote party's phone number or contact name. In a future release we plan to improve support while booking in the calendar and evaluate building an android app. This would simplify the setup (fewer apps), allow a push-based approach instead of a periodic export and synchronization and make the data more detailed (you could decide after a call if it was relevant for booking and billing).</p><p>Were you able to connect your Android device with time cockpit? <a href="{{site.baseurl}}/help-support/contact-us/">Let us know what you are thinking</a>.</p>