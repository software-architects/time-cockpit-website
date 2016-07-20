---
layout: blog
title: BASTA 2013, C# Workshop
author: Rainer Stropek
bannerimage: 
permalink: /2013/09/23/BASTA-2013-C-Workshop
---

<p xmlns="http://www.w3.org/1999/xhtml">Meine Vorträge auf der <a href="http://www.basta.net" target="_blank">BASTA 2013</a> starten heute mit einem ganztägigen C# Workshop. In diesem Blogartikel stelle ich Unterlagen und Links, die ich dabei verwende, zur Verfügung.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Slidedeck</h2><p xmlns="http://www.w3.org/1999/xhtml">You can download the entire <a href="{{site.baseurl}}images/blog/2013/09/BASTA 2013 - CSharp Workshop.pdf" target="_blank">slidedeck in PDF</a> format. At the end of the workshop I will also publish the slides in my Slideshare account for online viewing.</p><h2 xmlns="http://www.w3.org/1999/xhtml">NuGet Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">One of the topics we cover in the workshop is NuGet. If you want to follow my sample you can use the following code snippet (.nuspec file) so you do not have to type XML by hand:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-16&quot;?&gt;&#xA;&lt;package xmlns=&quot;http://schemas.microsoft.com/packaging/2012/06/nuspec.xsd&quot;&gt;&#xA;    &lt;metadata&gt;&#xA;        &lt;id&gt;Basta.ToolLib&lt;/id&gt;&#xA;        &lt;version&gt;1.0.0&lt;/version&gt;&#xA;        &lt;title&gt;BASTA C# Workshop Tools Library&lt;/title&gt;&#xA;        &lt;authors&gt;software architects gmbh&lt;/authors&gt;&#xA;        &lt;owners&gt;software architects gmbh&lt;/owners&gt;&#xA;        &lt;requireLicenseAcceptance&gt;false&lt;/requireLicenseAcceptance&gt;&#xA;        &lt;description&gt;...&lt;/description&gt;&#xA;        &lt;releaseNotes&gt;&lt;/releaseNotes&gt;&#xA;        &lt;!--&lt;dependencies&gt;&#xA;            &lt;group targetFramework=&quot;.NETFramework4.0&quot;&gt;&#xA;                &lt;dependency id=&quot;Dependency&quot; version=&quot;[1.0.0]&quot; /&gt;&#xA;            &lt;/group&gt;&#xA;        &lt;/dependencies&gt;--&gt;&#xA;        &lt;frameworkAssemblies&gt;&#xA;            &lt;frameworkAssembly assemblyName=&quot;System.ComponentModel.Composition&quot; targetFramework=&quot;net40&quot; /&gt;&#xA;        &lt;/frameworkAssemblies&gt;&#xA;    &lt;/metadata&gt;&#xA;&#xA;    &lt;files&gt;&#xA;        &lt;!-- net4 --&gt;&#xA;        &lt;file src=&quot;bin\Debug\ToolsLib.dll&quot; target=&quot;lib\net4&quot; /&gt;&#xA;        &lt;file src=&quot;bin\Debug\ToolsLib.pdb&quot; target=&quot;lib\net4&quot; /&gt;&#xA;&#xA;        &lt;!-- include source code  for symbols --&gt;&#xA;        &lt;file src=&quot;*.cs&quot; target=&quot;src\ToolsLib&quot; /&gt;&#xA;&#xA;        &lt;file src=&quot;content\app.config.transform&quot; target=&quot;content\&quot; /&gt;&#xA;        &lt;file src=&quot;content\Tool1.cs.pp&quot; target=&quot;content\&quot; /&gt;&#xA;    &lt;/files&gt;&#xA;&lt;/package&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Here are the two (very simple) content files. The first one is <em>Tool1.cs.pp</em>, the second one <em>app.config.transform</em>:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
    <f:param name="SourceCode" value="//------------------------------------------------------------------------------------------------------------&#xA;// &lt;copyright file=&quot;Tool1.cs&quot; company=&quot;software architects gmbh&quot;&gt;&#xA;//     Copyright (c) software architects gmbh. All rights reserved.&#xA;// &lt;/copyright&gt;&#xA;//------------------------------------------------------------------------------------------------------------&#xA;&#xA;namespace $rootnamespace${body}#xA;{&#xA;    using ToolsLib;&#xA;&#xA;    public class Tool1 : Tool&#xA;    {&#xA;        public override void DoSomething()&#xA;        {&#xA;        }&#xA;    }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
    <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
  </f:function>
  <f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
    <f:param name="SourceCode" value="&lt;configuration&gt;&#xA;    &lt;appSettings&gt;&#xA;        &lt;add key=&quot;ToolPath&quot; value=&quot;c:\temp&quot; /&gt;&#xA;    &lt;/appSettings&gt;&#xA;&lt;/configuration&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
    <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
  </f:function>
</p><h2 xmlns="http://www.w3.org/1999/xhtml">MAF (Managed Addin Framework aka System.Addin)</h2><p xmlns="http://www.w3.org/1999/xhtml">In the morning we will also speak about MEF vs. MAF. The example I use to demonstrate MAF is a modified and upgraded (to .NET 4.5) version of Microsoft's original <a href="http://clraddins.codeplex.com/wikipage?title=Samples&amp;referringTitle=Home" target="_blank">WPF Calculator</a> sample. If you want to play with my version of the sample, you can <a href="{{site.baseurl}}images/blog/2013/09/WPF Calculator.zip" target="_blank">download it here</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Update 2013-09-24: Live-Coding Sample, Missing Answer</h2><p xmlns="http://www.w3.org/1999/xhtml">In the afternoon I have built a <em>async/await</em> WPF application following the MVVM design principle. Some people asked me to publish the live coded sample. <a href="{{site.baseurl}}images/blog/2013/09/AsyncAwaitFullClientUI.zip" target="_blank">Here it is</a>. If you don't want to download the whole sample and you just want to look at the async view model we have built, here is the C# code followed by the XAML view:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using AsyncAwaitFullClientUI.Data;&#xA;using System;&#xA;using System.Collections.Generic;&#xA;using System.ComponentModel;&#xA;using System.Runtime.CompilerServices;&#xA;using System.Threading;&#xA;using System.Windows.Input;&#xA;&#xA;namespace AsyncAwaitFullClientUI&#xA;{&#xA;&#x9;public class MainWindowViewModel : INotifyPropertyChanged&#xA;&#x9;{&#xA;&#x9;&#x9;private HeatSensors sensors = new HeatSensors();&#xA;&#xA;&#x9;&#x9;public MainWindowViewModel()&#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;this.FindAllSensorsCommand = new DelegateCommand(&#xA;&#x9;&#x9;&#x9;&#x9;async () =&gt;&#xA;&#x9;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;this.IsLoading = true;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;this.Sensors = null;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;this.cts = new CancellationTokenSource();&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;try&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;this.Sensors = await this.sensors.FindSensorsAsync(&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;this.cts.Token,&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;new Progress&lt;int&gt;((p) =&gt; this.Progress = p));&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;}&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;catch (OperationCanceledException)&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;this.IsLoading = false;&#xA;&#x9;&#x9;&#x9;&#x9;},&#xA;&#x9;&#x9;&#x9;&#x9;() =&gt; !this.IsLoading);&#xA;&#x9;&#x9;&#x9;this.CancelCommand = new DelegateCommand(&#xA;&#x9;&#x9;&#x9;&#x9;() =&gt; this.cts.Cancel(),&#xA;&#x9;&#x9;&#x9;&#x9;() =&gt; this.IsLoading);&#xA;&#xA;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;private CancellationTokenSource cts;&#xA;&#xA;&#x9;&#x9;public ICommand FindAllSensorsCommand { get; private set; }&#xA;&#x9;&#x9;public ICommand CancelCommand { get; private set; }&#xA;&#xA;&#x9;&#x9;private bool isLoading;&#xA;&#x9;&#x9;public bool IsLoading &#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;get { return this.isLoading; }&#xA;&#x9;&#x9;&#x9;private set&#xA;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;this.isLoading = value;&#xA;&#x9;&#x9;&#x9;&#x9;((DelegateCommand)this.FindAllSensorsCommand).RaiseCanExecuteChanged();&#xA;&#x9;&#x9;&#x9;&#x9;((DelegateCommand)this.CancelCommand).RaiseCanExecuteChanged();&#xA;&#x9;&#x9;&#x9;}&#xA;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;private int progress;&#xA;&#x9;&#x9;public int Progress&#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;get { return this.progress; }&#xA;&#x9;&#x9;&#x9;private set&#xA;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;this.progress = value;&#xA;&#x9;&#x9;&#x9;&#x9;this.RaisePropertyChanged();&#xA;&#x9;&#x9;&#x9;}&#xA;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;private IEnumerable&lt;HeatSensor&gt; SensorsValue;&#xA;&#x9;&#x9;public IEnumerable&lt;HeatSensor&gt; Sensors&#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;get&#xA;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;return this.SensorsValue;&#xA;&#x9;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;&#x9;set&#xA;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;if (this.SensorsValue != value)&#xA;&#x9;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;this.SensorsValue = value;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9;this.RaisePropertyChanged();&#xA;&#x9;&#x9;&#x9;&#x9;}&#xA;&#x9;&#x9;&#x9;}&#xA;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;public event PropertyChangedEventHandler PropertyChanged;&#xA;&#xA;&#x9;&#x9;private void RaisePropertyChanged([CallerMemberName]string caller = null)&#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;if (this.PropertyChanged != null)&#xA;&#x9;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;&#x9;this.PropertyChanged(this, new PropertyChangedEventArgs(caller));&#xA;&#x9;&#x9;&#x9;}&#xA;&#x9;&#x9;}&#xA;&#x9;}&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;Window x:Class=&quot;AsyncAwaitFullClientUI.MainWindow&quot;&#xA;        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;&#xA;        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;&#xA;        Title=&quot;MainWindow&quot; Height=&quot;350&quot; Width=&quot;525&quot;&gt;&#xA;    &lt;Grid&gt;&#xA;&#x9;&#x9;&lt;Grid.RowDefinitions&gt;&#xA;&#x9;&#x9;&#x9;&lt;RowDefinition Height=&quot;Auto&quot; /&gt;&#xA;&#x9;&#x9;&#x9;&lt;RowDefinition Height=&quot;*&quot; /&gt;&#xA;&#x9;&#x9;&lt;/Grid.RowDefinitions&gt;&#xA;&#x9;&#x9;&lt;Grid.ColumnDefinitions&gt;&#xA;&#x9;&#x9;&#x9;&lt;ColumnDefinition Width=&quot;Auto&quot; /&gt; &lt;!-- Find sensors button --&gt;&#xA;&#x9;&#x9;&#x9;&lt;ColumnDefinition Width=&quot;Auto&quot; /&gt; &lt;!-- Cancel button --&gt;&#xA;&#x9;&#x9;&#x9;&lt;ColumnDefinition Width=&quot;*&quot; /&gt;    &lt;!-- Progress bar --&gt;&#xA;&#x9;&#x9;&lt;/Grid.ColumnDefinitions&gt;&#xA;&#x9;&#x9;&#xA;&#x9;&#x9;&lt;Button Content=&quot;Find Sensors&quot; Margin=&quot;5&quot;&#xA;&#x9;&#x9;&#x9;&#x9;Command=&quot;{Binding Path=FindAllSensorsCommand}&quot;/&gt;&#xA;&#x9;&#x9;&lt;Button Grid.Column=&quot;1&quot; Content=&quot;Cancel&quot; Margin=&quot;5&quot;&#xA;&#x9;&#x9;&#x9;&#x9;Command=&quot;{Binding Path=CancelCommand}&quot; /&gt;&#xA;&#x9;&#x9;&lt;ProgressBar Grid.Column=&quot;2&quot; Margin=&quot;5&quot;&#xA;&#x9;&#x9;&#x9;&#x9;&#x9; Minimum=&quot;0&quot; Maximum=&quot;100&quot; Value=&quot;{Binding Path=Progress}&quot; /&gt;&#xA;&#x9;&#x9;&#xA;&#x9;&#x9;&lt;DataGrid Grid.Row=&quot;1&quot; Grid.ColumnSpan=&quot;3&quot; Margin=&quot;5,0,5,5&quot;&#xA;&#x9;&#x9;&#x9;&#x9;  ItemsSource=&quot;{Binding Path=Sensors}&quot;/&gt;&#xA;&#x9;&lt;/Grid&gt;&#xA;&lt;/Window&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">Finally I forgot to answer a question I was asked. Sorry for that. I promised during the workshop I would but time was running and so I didn't remember this todo. Someone asked me how to use <em>await</em> to wait for two tasks which run in parallel. The answer is <em>Task.WhenAll</em>. Here is a code snippet:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System;&#xA;using System.Threading.Tasks;&#xA;&#xA;namespace ConsoleApplication1&#xA;{&#xA;&#x9;class Program&#xA;&#x9;{&#xA;&#x9;&#x9;static void Main(string[] args)&#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;Run().Wait();&#xA;&#x9;&#x9;}&#xA;&#xA;&#x9;&#x9;private static async Task Run()&#xA;&#x9;&#x9;{&#xA;&#x9;&#x9;&#x9;var t1 = Task.Run(() =&gt; 42);&#xA;&#x9;&#x9;&#x9;var t2 = Task.Run(() =&gt; 41);&#xA;&#x9;&#x9;&#x9;await Task.WhenAll(t1, t2);&#xA;&#xA;&#x9;&#x9;&#x9;var result3 = await Task.Run(() =&gt; 43);&#xA;&#x9;&#x9;&#x9;Console.WriteLine(t1.Result + t2.Result + result3);&#xA;&#x9;&#x9;}&#xA;&#x9;}&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>