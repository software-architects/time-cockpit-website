---
layout: blog
title: BASTA 2013 -  C# Workshop
teaser: Meine Vorträge auf der BASTA 2013 starten heute mit einem ganztägigen C# Workshop. In diesem Blogartikel stelle ich Unterlagen und Links, die ich dabei verwende, zur Verfügung
author: Rainer Stropek
date: 2013-09-23
bannerimage: 
lang: en
permalink: /blog/2013/09/23/BASTA-2013-C-Workshop
---

<p xmlns="http://www.w3.org/1999/xhtml">Meine Vorträge auf der <a href="http://www.basta.net" target="_blank">BASTA 2013</a> starten heute mit einem ganztägigen C# Workshop. In diesem Blogartikel stelle ich Unterlagen und Links, die ich dabei verwende, zur Verfügung.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Slidedeck</h2><p xmlns="http://www.w3.org/1999/xhtml">You can download the entire <a href="{{site.baseurl}}/content/images/blog/2013/09/BASTA 2013 - CSharp Workshop.pdf" target="_blank">slidedeck in PDF</a> format. At the end of the workshop I will also publish the slides in my Slideshare account for online viewing.</p><h2 xmlns="http://www.w3.org/1999/xhtml">NuGet Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">One of the topics we cover in the workshop is NuGet. If you want to follow my sample you can use the following code snippet (.nuspec file) so you do not have to type XML by hand:</p>{% highlight javascript %}&lt;?xml version="1.0" encoding="utf-16"?&gt;
&lt;package xmlns="http://schemas.microsoft.com/packaging/2012/06/nuspec.xsd"&gt;
    &lt;metadata&gt;
        &lt;id&gt;Basta.ToolLib&lt;/id&gt;
        &lt;version&gt;1.0.0&lt;/version&gt;
        &lt;title&gt;BASTA C# Workshop Tools Library&lt;/title&gt;
        &lt;authors&gt;software architects gmbh&lt;/authors&gt;
        &lt;owners&gt;software architects gmbh&lt;/owners&gt;
        &lt;requireLicenseAcceptance&gt;false&lt;/requireLicenseAcceptance&gt;
        &lt;description&gt;...&lt;/description&gt;
        &lt;releaseNotes&gt;&lt;/releaseNotes&gt;
        &lt;!--&lt;dependencies&gt;
            &lt;group targetFramework=".NETFramework4.0"&gt;
                &lt;dependency id="Dependency" version="[1.0.0]" /&gt;
            &lt;/group&gt;
        &lt;/dependencies&gt;--&gt;
        &lt;frameworkAssemblies&gt;
            &lt;frameworkAssembly assemblyName="System.ComponentModel.Composition" targetFramework="net40" /&gt;
        &lt;/frameworkAssemblies&gt;
    &lt;/metadata&gt;

    &lt;files&gt;
        &lt;!-- net4 --&gt;
        &lt;file src="bin\Debug\ToolsLib.dll" target="lib\net4" /&gt;
        &lt;file src="bin\Debug\ToolsLib.pdb" target="lib\net4" /&gt;

        &lt;!-- include source code  for symbols --&gt;
        &lt;file src="*.cs" target="src\ToolsLib" /&gt;

        &lt;file src="content\app.config.transform" target="content\" /&gt;
        &lt;file src="content\Tool1.cs.pp" target="content\" /&gt;
    &lt;/files&gt;
&lt;/package&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Here are the two (very simple) content files. The first one is <em>Tool1.cs.pp</em>, the second one <em>app.config.transform</em>:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
    <f:param name="SourceCode" value="//------------------------------------------------------------------------------------------------------------&#xA;// &lt;copyright file=&quot;Tool1.cs&quot; company=&quot;software architects gmbh&quot;&gt;&#xA;//     Copyright (c) software architects gmbh. All rights reserved.&#xA;// &lt;/copyright&gt;&#xA;//------------------------------------------------------------------------------------------------------------&#xA;&#xA;namespace $rootnamespace${body}#xA;{&#xA;    using ToolsLib;&#xA;&#xA;    public class Tool1 : Tool&#xA;    {&#xA;        public override void DoSomething()&#xA;        {&#xA;        }&#xA;    }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
    <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
  </f:function>
  {% highlight javascript %}&lt;configuration&gt;
    &lt;appSettings&gt;
        &lt;add key="ToolPath" value="c:\temp" /&gt;
    &lt;/appSettings&gt;
&lt;/configuration&gt;{% endhighlight %}
</p><h2 xmlns="http://www.w3.org/1999/xhtml">MAF (Managed Addin Framework aka System.Addin)</h2><p xmlns="http://www.w3.org/1999/xhtml">In the morning we will also speak about MEF vs. MAF. The example I use to demonstrate MAF is a modified and upgraded (to .NET 4.5) version of Microsoft's original <a href="http://clraddins.codeplex.com/wikipage?title=Samples&amp;referringTitle=Home" target="_blank">WPF Calculator</a> sample. If you want to play with my version of the sample, you can <a href="{{site.baseurl}}/content/images/blog/2013/09/WPF Calculator.zip" target="_blank">download it here</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Update 2013-09-24: Live-Coding Sample, Missing Answer</h2><p xmlns="http://www.w3.org/1999/xhtml">In the afternoon I have built a <em>async/await</em> WPF application following the MVVM design principle. Some people asked me to publish the live coded sample. <a href="{{site.baseurl}}/content/images/blog/2013/09/AsyncAwaitFullClientUI.zip" target="_blank">Here it is</a>. If you don't want to download the whole sample and you just want to look at the async view model we have built, here is the C# code followed by the XAML view:</p>{% highlight javascript %}using AsyncAwaitFullClientUI.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Windows.Input;

namespace AsyncAwaitFullClientUI
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        private HeatSensors sensors = new HeatSensors();

        public MainWindowViewModel()
        {
            this.FindAllSensorsCommand = new DelegateCommand(
                async () =&gt;
                {
                    this.IsLoading = true;
                    this.Sensors = null;
                    this.cts = new CancellationTokenSource();
                    try
                    {
                        this.Sensors = await this.sensors.FindSensorsAsync(
                            this.cts.Token,
                            new Progress&lt;int&gt;((p) =&gt; this.Progress = p));
                    }
                    catch (OperationCanceledException)
                    {
                    }

                    this.IsLoading = false;
                },
                () =&gt; !this.IsLoading);
            this.CancelCommand = new DelegateCommand(
                () =&gt; this.cts.Cancel(),
                () =&gt; this.IsLoading);

        }

        private CancellationTokenSource cts;

        public ICommand FindAllSensorsCommand { get; private set; }
        public ICommand CancelCommand { get; private set; }

        private bool isLoading;
        public bool IsLoading 
        {
            get { return this.isLoading; }
            private set
            {
                this.isLoading = value;
                ((DelegateCommand)this.FindAllSensorsCommand).RaiseCanExecuteChanged();
                ((DelegateCommand)this.CancelCommand).RaiseCanExecuteChanged();
            }
        }

        private int progress;
        public int Progress
        {
            get { return this.progress; }
            private set
            {
                this.progress = value;
                this.RaisePropertyChanged();
            }
        }

        private IEnumerable&lt;HeatSensor&gt; SensorsValue;
        public IEnumerable&lt;HeatSensor&gt; Sensors
        {
            get
            {
                return this.SensorsValue;
            }

            set
            {
                if (this.SensorsValue != value)
                {
                    this.SensorsValue = value;
                    this.RaisePropertyChanged();
                }
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        private void RaisePropertyChanged([CallerMemberName]string caller = null)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(caller));
            }
        }
    }
}{% endhighlight %}{% highlight javascript %}&lt;Window x:Class="AsyncAwaitFullClientUI.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525"&gt;
    &lt;Grid&gt;
        &lt;Grid.RowDefinitions&gt;
            &lt;RowDefinition Height="Auto" /&gt;
            &lt;RowDefinition Height="*" /&gt;
        &lt;/Grid.RowDefinitions&gt;
        &lt;Grid.ColumnDefinitions&gt;
            &lt;ColumnDefinition Width="Auto" /&gt; &lt;!-- Find sensors button --&gt;
            &lt;ColumnDefinition Width="Auto" /&gt; &lt;!-- Cancel button --&gt;
            &lt;ColumnDefinition Width="*" /&gt;    &lt;!-- Progress bar --&gt;
        &lt;/Grid.ColumnDefinitions&gt;
        
        &lt;Button Content="Find Sensors" Margin="5"
                Command="{Binding Path=FindAllSensorsCommand}"/&gt;
        &lt;Button Grid.Column="1" Content="Cancel" Margin="5"
                Command="{Binding Path=CancelCommand}" /&gt;
        &lt;ProgressBar Grid.Column="2" Margin="5"
                     Minimum="0" Maximum="100" Value="{Binding Path=Progress}" /&gt;
        
        &lt;DataGrid Grid.Row="1" Grid.ColumnSpan="3" Margin="5,0,5,5"
                  ItemsSource="{Binding Path=Sensors}"/&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Finally I forgot to answer a question I was asked. Sorry for that. I promised during the workshop I would but time was running and so I didn't remember this todo. Someone asked me how to use <em>await</em> to wait for two tasks which run in parallel. The answer is <em>Task.WhenAll</em>. Here is a code snippet:</p>{% highlight javascript %}using System;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Run().Wait();
        }

        private static async Task Run()
        {
            var t1 = Task.Run(() =&gt; 42);
            var t2 = Task.Run(() =&gt; 41);
            await Task.WhenAll(t1, t2);

            var result3 = await Task.Run(() =&gt; 43);
            Console.WriteLine(t1.Result + t2.Result + result3);
        }
    }
}{% endhighlight %}