---
layout: blog
title: Hand-On Labs MEF
author: Rainer Stropek
bannerimage: 
permalink: /2010/12/06/Hand-On-Labs-MEF
---

<p xmlns="http://www.w3.org/1999/xhtml">This week I will be one of the speakers at <a href="http://basta-on-tour.de/csharp2010/" target="_blank"><span>BASTA On Tour</span></a> in Munich. One of the topics I am going to speak about is the Managed Extensibility Framework (MEF). In this blog post I want to share my slides and summarize the hands-on labs that I am going to go through with the participants.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="{{site.baseurl}}images/blog/2010/12/Managed Extensibility Framework.pdf" target="_blank">Download Slides</a> (PDF)</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 1: Directory Catalog Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a new command line project called <span class="InlineCode">DirectoryCatalogDemo</span>.</li>
  <li>The application will ask the user for a string, apply a set of string operations on that string and output the result. The string operations should be extensible. A user should be able to copy an assembly into the program's directory and the application should automatically pick up the assembly and apply all operations that it contains. Therefore the first thing we need is a contract that all string operation parts have to implement.

<ul><li>Add a new class library project called <span class="InlineCode">OperatorContract</span> to your solution.</li><li>Add the following interface to the newly created project:</li></ul></li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="namespace OperatorContract&#xA;{&#xA; public interface IStringOperator&#xA; {&#xA;  string PerformOperation(string input);&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Now add an implemenation of <span class="InlineCode">IStringOperator</span> to the command line project <span class="InlineCode">DirectoryCatalogDemo</span>.

<ul><li>Add a reference to <span class="InlineCode">System.ComponentModel.Composition</span> to the command line project <span class="InlineCode">DirectoryCatalogDemo</span>.</li><li>Add the following class to the project:</li></ul></li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System.ComponentModel.Composition;&#xA;using OperatorContract;&#xA;&#xA;namespace DirectoryCatalogDemo&#xA;{&#xA; [Export(typeof(IStringOperator))]&#xA; public class UppercaseOperator : IStringOperator&#xA; {&#xA;  public string PerformOperation(string input)&#xA;  {&#xA;   return input.ToUpper();&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Next you have to implement the <span class="InlineCode">Program</span> class as follows (note especially how MEF is used to load operators into the member <span class="InlineCode">Program.operators</span> using the <span class="InlineCode">ComposeParts</span> method):</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System;&#xA;using System.ComponentModel.Composition;&#xA;using System.ComponentModel.Composition.Hosting;&#xA;using System.Linq;&#xA;using OperatorContract;&#xA;&#xA;namespace DirectoryCatalogDemo&#xA;{&#xA; public class Program&#xA; {&#xA;  [ImportMany(AllowRecomposition = true)]&#xA;  private IStringOperator[] operators;&#xA;&#xA;  static void Main(string[] args)&#xA;  {&#xA;   new Program().Run();&#xA;  }&#xA;&#xA;  void Run()&#xA;  {&#xA;   DirectoryCatalog directoryCatalog;&#xA;   var container = new CompositionContainer(&#xA;    new AggregateCatalog(&#xA;     new AssemblyCatalog(typeof(Program).Assembly),&#xA;     directoryCatalog = new DirectoryCatalog(&quot;.&quot;)&#xA;    ));&#xA;   container.ComposeParts(this);&#xA;&#xA;   var userInput = string.Empty;&#xA;   do&#xA;   {&#xA;    Console.Write(&quot;Please enter a string (quit to exit program): &quot;);&#xA;    userInput = Console.ReadLine();&#xA;    if (userInput != &quot;quit&quot;)&#xA;    {&#xA;     directoryCatalog.Refresh();&#xA;     Console.WriteLine(this.operators.Aggregate&lt;IStringOperator, string&gt;(userInput, (agg, op) =&gt; op.PerformOperation(agg)));&#xA;    }&#xA;   }&#xA;   while (userInput != &quot;quit&quot;);&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build and run your program. Currently the program will only find the <span class="InlineCode">UppercaseOperator</span> part because no other implementations of <span class="InlineCode">IStringOperator</span> can be found. However, the application would already load additional operators from assemblies that are present in the application's directory. Next we will create a new operator and add it by just copying the assembly.</li>
  <li>Create a new class library project <span class="InlineCode">ReverseStringOperator</span>.

<ul><li>Add a reference to <span class="InlineCode">System.ComponentModel.Composition</span> to the class library.</li><li>Add the following class to the project:</li></ul></li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System.ComponentModel.Composition;&#xA;using System.Linq;&#xA;using OperatorContract;&#xA;&#xA;namespace ReverseStringOperator&#xA;{&#xA; [Export(typeof(IStringOperator))]&#xA; public class ReverseStringOperator : IStringOperator&#xA; {&#xA;  public string PerformOperation(string input)&#xA;  {&#xA;   return new string(input.Reverse().ToArray());&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build your solution.</li>
  <li>Run the command line application. Try it - the behavior must not have changed because the new operator is unknown by now.</li>
  <li>Copy the assembly with the <span class="InlineCode">ReverseStringOperator</span> into the program's directory without stopping the application. Try it - the string must be turned to uppercase <em>and</em> be reversed now.</li>
  <li>Use the debugger to see how MEF loads the assembly during runtime.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">This example shows you some basic principles of MEF. However, it could have been implemented much simpler because MEF is not only able to export and import objects. You can use the export/import logic for functions, too. Our operators are just functional (technically <span class="InlineCode">func&lt;string, string&gt;</span>). Let us see how we could have made life easier by exporting and importing functions instead of objects:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Add the following class to your command line project <span class="InlineCode">DirectoryCatalogDemo</span>:

<ul><li>Note the <span class="InlineCode">Export</span> attributes on the methods instead of the classes.</li></ul></li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System.ComponentModel.Composition;&#xA;using System.Linq;&#xA;&#xA;namespace DirectoryCatalogDemo&#xA;{&#xA; public static class FuncationalOperators&#xA; {&#xA;  [Export(&quot;FuncationOperator&quot;)]&#xA;  public static string UppercaseString(string input)&#xA;  {&#xA;   return input.ToUpper();&#xA;  }&#xA;&#xA;  [Export(&quot;FuncationOperator&quot;)]&#xA;  public static string ReverseString(string input)&#xA;  {&#xA;   return new string(input.Reverse().ToArray());&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Change the implementation of the <span class="InlineCode">Program</span> class as follows (new/changed lines are written in italic):</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System;&#xA;using System.ComponentModel.Composition;&#xA;using System.ComponentModel.Composition.Hosting;&#xA;using System.Linq;&#xA;using OperatorContract;&#xA;&#xA;namespace DirectoryCatalogDemo&#xA;{&#xA; public class Program&#xA; {&#xA;  [ImportMany(AllowRecomposition = true)]&#xA;  private IStringOperator[] operators;&#xA;&#xA;  [ImportMany(&quot;FuncationOperator&quot;, AllowRecomposition = true)]&#xA;  private Func&lt;string, string&gt;[] funcationalOperators;&#xA;&#xA;  static void Main(string[] args)&#xA;  {&#xA;   new Program().Run();&#xA;  }&#xA;&#xA;  void Run()&#xA;  {&#xA;   DirectoryCatalog directoryCatalog;&#xA;   var container = new CompositionContainer(&#xA;    new AggregateCatalog(&#xA;     new AssemblyCatalog(typeof(Program).Assembly),&#xA;     directoryCatalog = new DirectoryCatalog(&quot;.&quot;)&#xA;    ));&#xA;   container.ComposeParts(this);&#xA;&#xA;   var userInput = string.Empty;&#xA;   do&#xA;   {&#xA;    Console.Write(&quot;Please enter a string (quit to exit program): &quot;);&#xA;    userInput = Console.ReadLine();&#xA;    if (userInput != &quot;quit&quot;)&#xA;    {&#xA;     directoryCatalog.Refresh();&#xA;     Console.WriteLine(&quot;Operators from classes: {0}&quot;, &#xA;      this.operators.Aggregate&lt;IStringOperator, string&gt;(userInput, (agg, op) =&gt; op.PerformOperation(agg)));&#xA;     Console.WriteLine(&quot;Funcational operators: {0}&quot;,&#xA;      this.funcationalOperators.Aggregate&lt;Func&lt;string, string&gt;, string&gt;(userInput, (agg, op) =&gt; op(agg)));&#xA;    }&#xA;   }&#xA;   while (userInput != &quot;quit&quot;);&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Compile and test the application. As you can see MEF correctly exports and imports the methods just as expected.</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 2: Part Lifecycle Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a new command line project called <span class="InlineCode">LifeCycleDemo</span>.</li>
  <li>Add an exported class to the project as follows:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="[Export]&#xA;public class DisposableObject : IDisposable&#xA;{&#xA; private bool disposed = false;&#xA;&#xA; public DisposableObject()&#xA; {&#xA;  Trace.WriteLine(string.Format(&quot;Creating object {0}&quot;, this.GetHashCode()));&#xA; }&#xA;&#xA; public void Dispose()&#xA; {&#xA;  Trace.WriteLine(string.Format(&quot;Disposing object {0}&quot;, this.GetHashCode()));&#xA;  this.disposed = true;&#xA; }&#xA;&#xA; public void DoSomething()&#xA; {&#xA;  if (this.disposed)&#xA;  {&#xA;   throw new InvalidOperationException();&#xA;  }&#xA;&#xA;  // Here we have to do something with this object&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Change the implementation of the <span class="InlineCode">Program</span> class as follows:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="public class Program : IPartImportsSatisfiedNotification&#xA;{&#xA; [Import(RequiredCreationPolicy = CreationPolicy.NonShared)]&#xA; public Lazy&lt;DisposableObject&gt; mefObject1;&#xA;&#xA; [Import(RequiredCreationPolicy = CreationPolicy.NonShared)]&#xA; public Lazy&lt;DisposableObject&gt; mefObject2;&#xA;&#xA; static void Main(string[] args)&#xA; {&#xA;  new Program().Run();&#xA; }&#xA;&#xA; private void Run()&#xA; {&#xA;  var catalog = new AssemblyCatalog(typeof(DisposableObject).Assembly);&#xA;  var container = new CompositionContainer(catalog);&#xA;&#xA;  Trace.WriteLine(&quot;Start composing&quot;);&#xA;  container.ComposeParts(this);&#xA;&#xA;  Trace.WriteLine(&quot;Accessing lazy object&quot;);&#xA;  this.mefObject1.Value.DoSomething();&#xA;  this.mefObject2.Value.DoSomething();&#xA;&#xA;  container.ReleaseExports(new[] { this.mefObject1, this.mefObject2 });&#xA;&#xA;  Trace.WriteLine(&quot;Start composing&quot;);&#xA;  container.ComposeParts(this);&#xA;&#xA;  Trace.WriteLine(&quot;Accessing lazy object again&quot;);&#xA;  this.mefObject1.Value.DoSomething();&#xA;  this.mefObject2.Value.DoSomething();&#xA; }&#xA;&#xA; public void OnImportsSatisfied()&#xA; {&#xA;  Trace.WriteLine(&quot;Imports are satisfied&quot;);&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build your project.</li>
  <li>Run your project in the debugger and try to reconstruct the following important points:

<ul><li><span class="InlineCode">Lazy</span> parts are constructed at first access.</li><li><span class="InlineCode">ReleaseExports</span> disposes all parts (if they implement <span class="InlineCode">IDisposable</span>)</li><li>When is <span class="InlineCode">OnImportsSatisfied</span> called?</li><li>What happens if you change the code so that you explicitly dispose the <span class="InlineCode">container</span> object?</li></ul></li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 3: Using MEF To Extend A WPF Application</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Download and install the latest version of the <a href="http://www.microsoft.com/downloads/en/details.aspx?familyid=752CB725-969B-4732-A383-ED5740F02E93&amp;displaylang=en" target="_blank">Visual Studio 2010 and .NET Framework 4 Training Kit</a></li>
  <li>All the requisites for this lab are verified using the Configuration Wizard. To make sure that everything is correctly configured, follow these steps.

<ul><li>Note: To perform the setup steps you need to run the scripts in a command window with administrator privileges.</li></ul></li>
  <li>Run the Configuration Wizard for the Lab if you have not done it previously. To do this, run the <span class="InlineCode">CheckDependencies.cmd</span> script located under the <span class="InlineCode">Source\Setup</span>folder of this lab. Install any pre-requisites that are missing (rescanning if necessary) and complete the wizard.

<ul><li>Note: At the end the wizard will try to install code snippets to complete the lab. You need not install the snippets if you do not want to. Just cancel the wizard at this step to prevent installing software to Visual Studio 2010.</li></ul></li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Open <span class="InlineCode">Labs.htm</span> in your favorite browser (IE recommended). You find this file in the installation folder into which you have installed the training kit (see prerequisites above).</li>
  <li>Choose <em>Extensibility</em> in the menu on the left side.</li>
  <li>Click on <em>Launch Lab</em> in the middle column.</li>
  <li>Complete extercises 1 and 2 of the lab.</li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 4: MEF And Silverlight</h3><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Same as Hands-On Lab 3</li>
  <li>Additionally: <a href="http://go.microsoft.com/fwlink/?LinkID=177428" target="_blank">Silverlight 4 Tools for Visual Studio 2010</a></li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Open <span class="InlineCode">Labs.htm</span> in your favorite browser (IE recommended). You find this file in the installation folder into which you have installed the training kit (see prerequisites above).</li>
  <li>Choose <em>Extensibility</em> in the menu on the left side.</li>
  <li>Click on <em>Launch Lab</em> in the middle column.</li>
  <li>Complete extercises 3 of the lab. </li>
</ul>