---
layout: blog
title: Reparing a Corrupted Time Cockpit Database
teaser: Lately we had a customer with a corrupted local database. Various source on the internet revealed that his is mostly related to power outs and blue screens. For time cockpit it becomes apparent when neither the signal tracker nor the time cockpit UI is able to start.
author: Philipp Aumayr
date: 2010-09-07
bannerimage: 
lang: en
permalink: /blog/2010/09/07/Reparing-a-Corrupted-Time-Cockpit-Database
---

<p>Lately we had a customer with a corrupted local database. Various source on the internet revealed that his is mostly related to power outs and blue screens. For time cockpit it becomes apparent when neither the signal tracker nor the time cockpit UI is able to start.</p><p>There are multiple solutions to this problem, depending on how badly you want the data recorded to this local database since the corruption was detected. (mostly probably signal data).</p><h2>Option 1: Resynchronize time cockpit</h2><p>In this solution, any changes that where done since the last synchronization will be lost.</p><ul>
  <li>Delete the local (corrupted) database and the blob store (in the same folder)</li>
  <li>Delete the time cockpit configuration file. This file can be found in the folder “C:\Users\&lt;Username&gt;\AppData\Local\software architects\Time Cockpit\”. Please note that the AppData folder is hidden by default. Enter the complete path in Windows Explorer and you should be able to get there.</li>
  <li>Start time cockpit again. time cockpit will present you the initial configuration assistant.</li>
</ul><h2>Option 2: Repair the offline database</h2><p>time cockpit uses a SQL CE Database (version 3.5 SP1). To recover the data you can use a small tool provided by us upon request. This is a temporary solution and will be integrated directly into time cockpit in one of the upcoming versions.</p><h2>Option 3: Repair the offline database using SQL Server Management Studio</h2><p>In case you have access to SQL Server Management Studio (Express), you can open the “time cockpit.tic” file using that. Management Studio will tell you that the database file is corrupted and will offer to repair.</p><h2>Option 4: Your own code</h2><p>The 4 Option is more for the brave among you: Writing your own code. Don’t fear, it is actually quite straight forward. The SQL CE.NET Libraries provides a class, SqlCeEngine. This class has two especially interesting methods, Verify and Repair. These functions provide information about the status of the database and try to repair the database in case of corruption.</p>{% highlight javascript %}bool isBroken = false;
using (var sqlceengine = new SqlCeEngine(@"Data Source = " + this.databasePath))
{
    if (!sqlceengine.Verify())
    {
        isBroken = true;
    }
}

if (isBroken)
{
    using (var sqlceengine = new SqlCeEngine(@"Data Source = " + this.databasePath))
    {
        try
        {
            sqlceengine.Repair(null, RepairOption.RecoverAllOrFail);
        }
        catch (Exception ex)
        {
            MessageBox.Show(string.Format(
                @"Repair without loosing data (RepairOption.RecoverAllOrFail) threw exception: {0}",
                ex.Message));
        }
    }
}{% endhighlight %}<p>Especially interesting is the second parameter to Repair. It allows you to pass options to the restauration process:</p><ul>
  <li>DeleteCorruptedRows</li>
  <li>RecoverAllOrFail</li>
  <li>RecoverAllPossibleRows</li>
</ul><p>The SQL CE Runtime checks individual pages of the database using a checksum method. The RepairOption enumeration decides what to do when encountering such pages.</p><p>In our scenario, RecoverAllOrFail worked perfectly fine. The other options are less useable because possibly full tables can be deleted (In case the page storing the schema is corrupted). In that case it is better to use Option 1 and resynchronize time cockpit from the online database.</p><p>While we did solve the problem for our customer, it was somewhat cumbersome. One of the next versions of time cockpit, functionality for checking and recovering from such possible errors will be integrated directly into time cockpit, to make this (rare) problem less troublesome.</p>