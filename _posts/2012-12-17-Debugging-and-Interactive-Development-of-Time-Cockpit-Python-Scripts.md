---
layout: blog
title: Debugging and Interactive Development of Time Cockpit Python Scripts
excerpt: It is easy to create small scripts to automate tasks or extend time cockpit's functionality. When the requirements and scripts grow more complex step-debugging and a REPL are desirable features we do not (yet) provide within time cockpit. This post shows how these features can be set up using Visual Studio or other development environments.
author: Simon Opelt
date: 2012-12-17
bannerimage: 
bannerimagesource: 
lang: en
tags: [Iron Python,time cockpit]
permalink: /blog/2012/12/17/Debugging-and-Interactive-Development-of-Time-Cockpit-Python-Scripts
---

<p>It is easy to create small scripts to automate tasks or extend time cockpit's functionality. When the requirements and scripts grow more complex <a href="http://en.wikipedia.org/wiki/Program_animation" target="_blank">step-debugging</a> and a <a href="http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop" target="_blank">REPL</a> are desirable features we do not (yet) provide within time cockpit. This post shows how these features can be set up using Visual Studio or other development environments. The full sample is available <a href="{{site.baseurl}}/content/images/blog/2012/12/TimeCockpitPython.zip">for download</a> and possible updates can be found at <a href="https://github.com/software-architects/TimeCockpit.Scripts/tree/master/TimeCockpit.Python.Debugging" target="_blank">our github repository</a>.</p><h2>Prerequisites</h2><p>The following tools need to be installed in order to run the samples in this post.</p><h3>Time Cockpit</h3><p>In order to access data from <a href="~/" title="time cockpit" target="_blank">time cockpit</a> (version 1.9 at the time of this writing) it has to be installed and configured. Note that you could also create a similar environment for other applications providing a .NET SDK which can be used from IronPython.</p><h3>IronPython</h3><p>The <a href="http://ironpython.net/download/" target="_blank">IronPython installer</a> (version 2.7.3 at the time of this writing) will setup the tools to run <a href="http://www.python.org/" target="_blank">Python</a> scripts on the .NET-runtime. It is a good idea to watch out for matching IronPython versions installed on the system and shipped with time cockpit. This is no strict constraint but there might be issues in more complex scenarios.</p><h3>Visual Studio 2010 or 2012</h3><p>
  <a href="http://www.microsoft.com/visualstudio" target="_blank">Visual Studio</a> has been chosen as the IDE for this example. There are many Python-IDEs with support for IronPython which should work as an alternative. Examples are <a href="http://www.icsharpcode.net/OpenSource/SD/" target="_blank">#develop</a>, <a href="http://pydev.org" target="_blank">PyDev</a> or <a href="http://www.wingware.com/" target="_blank">Wing IDE</a>. The samples have been created using VS 2012 but VS 2010 should work as well.</p><h3>
  <span>Python Tools for Visual Studio</span>
</h3><p>The <a href="http://pytools.codeplex.com" target="_blank">Python Tools for Visual Studio</a> (version 1.5 at the time of this writing) add support for Python to different parts of the <a href="http://en.wikipedia.org/wiki/Integrated_development_environment" target="_blank">IDE</a>.</p><h2>Sample python script</h2><p>Creating a fully working python file which can be debugged and is capable of using the <a href="http://help.timecockpit.com/?topic=html/3541dc4c-c6b3-e953-a326-b083c76d7884.htm" target="_blank">time cockpit SDK</a> involves some <a href="http://en.wikipedia.org/wiki/Boilerplate_code" target="_blank">boilerplate code</a>. We are working on reducing the required steps for future versions of our SDK. Many of the steps might also be relevant for other .NET application SDKs.</p><h3>Basic Configuration</h3><p>We first set up some basic configuration variables. They define if the client or server database should be used, where the time cockpit binaries are located and where the log-file should be written to.</p>{% highlight python %}from System import Environment

# Configuration
timeCockpitLocation = Environment.ExpandEnvironmentVariables(r"%ProgramW6432%\software architects\time cockpit\time cockpit 2010")
logFileName = r"python.log"{% endhighlight %}<h3>App.config Handling</h3><p>As explained in <a href="http://www.software-architects.com/devblog/2012/10/29/appconfig-in-IronPython-without-additional-assemblies" target="_blank">another post</a> a library might depend on a companion app.config file. The following shows the required utility class and the setup required for time cockpit.</p>{% highlight python %}# Configuration file handling
import clr
clr.AddReference("System.Configuration")
from System.Configuration.Internal import IInternalConfigSystem
class ConfigurationProxy(IInternalConfigSystem):
    def __init__(self, fileName):
        from System import String
        from System.Collections.Generic import Dictionary
        from System.Configuration import IConfigurationSectionHandler, ConfigurationErrorsException
        self.__customSections = Dictionary[String, IConfigurationSectionHandler]()
        loaded = self.Load(fileName)
        if not loaded:
            raise ConfigurationErrorsException(String.Format("File: {0} could not be found or was not a valid cofiguration file.", fileName))

    def Load(self, fileName):
        from System.Configuration import ExeConfigurationFileMap, ConfigurationManager, ConfigurationUserLevel
        exeMap = ExeConfigurationFileMap()
        exeMap.ExeConfigFilename = fileName
        self.__config = ConfigurationManager.OpenMappedExeConfiguration(exeMap, ConfigurationUserLevel.None)
        return self.__config.HasFile
    
    def GetSection(self, configKey):
        if configKey == "appSettings":
            return self.__BuildAppSettings()
        return self.__config.GetSection(configKey)
    
    def __BuildAppSettings(self):
        from System.Collections.Specialized import NameValueCollection
        coll = NameValueCollection()
        for key in self.__config.AppSettings.Settings.AllKeys:
            coll.Add(key, self.__config.AppSettings.Settings[key].Value)
        return coll

    def RefreshConfig(self, sectionName):
        self.Load(self.__config.FilePath)
        
    def SupportsUserConfig(self):
        return False
    
    def InjectToConfigurationManager(self):
        from System.Reflection import BindingFlags
        from System.Configuration import ConfigurationManager
        configSystem = clr.GetClrType(ConfigurationManager).GetField("s_configSystem", BindingFlags.Static | BindingFlags.NonPublic)
        configSystem.SetValue(None, self){% endhighlight %}<h3>References and Imports</h3><p>The next step is loading the necessary DLLs, importing types and <a href="~/blog/2012/01/22/Python-in-Time-Cockpit-17" target="_blank">setting up LINQ</a>.</p>{% highlight python %}# References
clr.AddReferenceToFileAndPath(Path.Combine(timeCockpitLocation, "TimeCockpit.Data.dll"))
clr.AddReference("TimeCockpit.Common")
clr.AddReference("TimeCockpit.UI.Common")
clr.AddReference("System.Core")
import System
from TimeCockpit.Common import Logger, LogLevel
from TimeCockpit.UI.Common import TimeCockpitApplication, DataContextConnections, ConnectionType
clr.ImportExtensions(System.Linq){% endhighlight %}<h3>Setting up the DataContext</h3><p>To access the client or server database of your time cockpit installation the correct <a href="http://help.timecockpit.com/?topic=html/192adccd-0d7d-1feb-0805-6e74ba296c9c.htm" target="_blank">DataContext</a> has to be set up. We also get the required settings from time cockpit's configuration and enable logging.</p>{% highlight python %}# time cockpit DataContext
TimeCockpitApplication.Current.InitializeSettings()
Logger.Initialize(logFileName, TimeCockpitApplication.Current.ApplicationSettings.MinimumLogLevel)
TimeCockpitApplication.Current.InitializeDataContext(False, True)
connection = DataContextConnections.Current.Single(lambda dcc: dcc.ConnectionType == ConnectionType.ApplicationServer)
connection.InitializeOrThrow(False)
Context = connection.DataContext{% endhighlight %}<h3>Main Script Content</h3><p>Now we are good to go. An environment very similar to the <a href="http://help.timecockpit.com/?topic=html/c20d94e9-97dc-48a8-9171-fd3bb70dad86.htm" target="_blank">built-in script editor</a> has been set up which can now be run in Visual Studio, other IDEs or stand-alone IronPython. The only difference is that the set of implicitly available imports has been simplified (the download contains the full and simplified versions).</p><p>In this sample we query all projects, iterate over them and print them in different ways depending on some condition.</p>{% highlight python %}projects = Context.Select("From P In Project Select P")
for p in projects:
    if p.ProjectName.Contains('c'):
        print "!!", p.ProjectName, p.StartDate
    else:
        print p.ProjectName, p.StartDate{% endhighlight %}<h2>Debugging</h2><p>Our self-contained time cockpit python script can be debugged in different ways. If you just want to use our SDK a python-based approach like the <strong>Standard Python launcher</strong> in <strong>PyTools</strong> works best. This shows the Python-perspective of all objects, allows to use the watch window and similar inspection mechanisms. If you would like to debug and step into .NET code called from within the python script you want to use the <strong>IronPython (.NET) launcher</strong>. There is <a href="https://pytools.codeplex.com/discussions/392621" target="_blank">currently no mixed-mode debugger</a> in PyTools which would allow to transparently debug both kinds of code.</p><h3>Breakpoints</h3><p>Breakpoints can be used to suspend execution. PyTools <a href="http://pytools.codeplex.com/wikipage?title=PTVS%20FAQ" target="_blank">should also support</a> conditional breakpoints, but I was <a href="http://pytools.codeplex.com/workitem/947" target="_blank">unable to use them</a> in the current version.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Breakpoint" alt="Python Breakpoint" title="Python Breakpoint" />
</p><h3>Inspect and Watch</h3><p>If you quickly want to have a look at the data in your script, you can hover over a variable or a selected member.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Inspect" alt="Python Inspect" title="Python Inspect" />
</p><p>A highlighted expression may even contain function calls or other non-trivial constructs. In some cases this might cause <a href="http://en.wikipedia.org/wiki/Side_effect_(computer_science)" target="_blank">side effects</a> and should be used with care.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Inspect Expression" alt="Python Inspect Expression" title="Python Inspect Expression" />
</p><p>The watch window can be used for a more permanent look on certain variables or expressions.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Watch" alt="Python Watch" title="Python Watch" />
</p><h2>Interactive Querying, Debugging and Developing</h2><p>While developing a script it is often desirable to try queries and functions in a prototypical and interactive way. This is where interactive debug windows and REPLs might be useful. A script might take some time to reach a certain state which is required to develop the next steps. It is quite cumbersome to launch and run the whole script after every small addition.</p><h3>Interactive Debugging</h3><p>Let's assume we defined some functions and selected some data. In order to quickly try a new function the existing script can be run and suspended via a breakpoint at the end.</p>{% highlight python %}def isRelevant(project):
    return project.Code.Contains('test')

def printRelevantProjects(projects, isRelevant):
    for p in projects.Where(isRelevant):
        print p.ProjectName, p.StartDate

projects = Context.Select("From P In Project Select P")
# TODO complete me{% endhighlight %}<p>We now like to test the functions and try possible variations using the Python Debug Interactive window.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Interactive 0" alt="Python Interactive" title="Python Interactive" />
</p><p>This allows us to write ad-hoc Python code with some completion and type information.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Interactive 1" alt="Python Interactive" title="Python Interactive" />
</p><p>After running the function we notice that the result is empty which was not expected.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Interactive 2" alt="Python Interactive" title="Python Interactive" />
</p><p>The bug is located in the check within the <em>isRelevant</em> filter function. We can fix and redefine the function implementation and run it again. The expected result is now printed.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Interactive 3" alt="Python Interactive" title="Python Interactive" />
</p><p>Depending on the provided type information, additional completion options on .NET types might be available to further ease interactive development.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python Interactive 4" alt="Python Interactive" title="Python Interactive" />
</p><h3>Using the PyTools REPL</h3><p>If we do not want to start off from a debugging session, the IronPython Interactive window (see <em>VIEW/Other Windows/IronPython 2.7 Interactive</em>) can be used. It provides an empty scope and has some helper commands to load external scripts, change settings or attach the debugger.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python REPL 0" alt="Python REPL" title="Python REPL" />
</p><p>In order to set up the data context we load the preamble python script.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python REPL 1" alt="Python REPL" title="Python REPL" />
</p><p>The interactive shell will execute the script as if it was typed in by the user.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python REPL 2" alt="Python REPL" title="Python REPL" />
</p><p>Now that the data context is available we can query some data and take a closer look at it. In the following sample all existing users are selected and kept in a variable. Then a <a href="http://msdn.microsoft.com/en-us/library/bb535118.aspx" target="_blank">LINQ extension method for finding a single object matching a specific predicate</a> is executed on the collection of users. The red exception text, hints that there are several users having Simon as their first name. If we refine the condition to exclude hidden users the expected result is found and a single object returned to be printed.</p><p>
  <img src="{{site.baseurl}}/content/images/blog/2012/12/Python REPL 3" alt="Python REPL" title="Python REPL" />
</p><h2>Conclusion</h2><p>This article shows some examples on how to simplify development of Python scripts with a special focus on IronPython and time cockpit. There are still many situations where the tools and consumed .NET libraries could improve the amount of available information and support. Even in its current state interactive development of queries, functions or complete scripts can be useful especially if the run-time of the scripts grows longer. </p>