---
layout: blog
title: Hand-On Labs MEF
teaser: This week I will be one of the speakers at BASTA On Tour in Munich. One of the topics I am going to speak about is the Managed Extensibility Framework (MEF). In this blog post I want to share my slides and summarize the hands-on labs that I am going to go through with the participants.
author: Rainer Stropek
date: 2010-12-06
bannerimage: 
lang: en
permalink: /blog/2010/12/06/Hand-On-Labs-MEF
---

<p xmlns="http://www.w3.org/1999/xhtml">This week I will be one of the speakers at <a href="http://basta-on-tour.de/csharp2010/" target="_blank"><span>BASTA On Tour</span></a> in Munich. One of the topics I am going to speak about is the Managed Extensibility Framework (MEF). In this blog post I want to share my slides and summarize the hands-on labs that I am going to go through with the participants.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="{{site.baseurl}}/content/images/blog/2010/12/Managed Extensibility Framework.pdf" target="_blank">Download Slides</a> (PDF)</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 1: Directory Catalog Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a new command line project called <span class="InlineCode">DirectoryCatalogDemo</span>.</li>
  <li>The application will ask the user for a string, apply a set of string operations on that string and output the result. The string operations should be extensible. A user should be able to copy an assembly into the program's directory and the application should automatically pick up the assembly and apply all operations that it contains. Therefore the first thing we need is a contract that all string operation parts have to implement.

<ul><li>Add a new class library project called <span class="InlineCode">OperatorContract</span> to your solution.</li><li>Add the following interface to the newly created project:</li></ul></li>
</ul>{% highlight javascript %}namespace OperatorContract
{
 public interface IStringOperator
 {
  string PerformOperation(string input);
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Now add an implemenation of <span class="InlineCode">IStringOperator</span> to the command line project <span class="InlineCode">DirectoryCatalogDemo</span>.

<ul><li>Add a reference to <span class="InlineCode">System.ComponentModel.Composition</span> to the command line project <span class="InlineCode">DirectoryCatalogDemo</span>.</li><li>Add the following class to the project:</li></ul></li>
</ul>{% highlight javascript %}using System.ComponentModel.Composition;
using OperatorContract;

namespace DirectoryCatalogDemo
{
 [Export(typeof(IStringOperator))]
 public class UppercaseOperator : IStringOperator
 {
  public string PerformOperation(string input)
  {
   return input.ToUpper();
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Next you have to implement the <span class="InlineCode">Program</span> class as follows (note especially how MEF is used to load operators into the member <span class="InlineCode">Program.operators</span> using the <span class="InlineCode">ComposeParts</span> method):</li>
</ul>{% highlight javascript %}using System;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Linq;
using OperatorContract;

namespace DirectoryCatalogDemo
{
 public class Program
 {
  [ImportMany(AllowRecomposition = true)]
  private IStringOperator[] operators;

  static void Main(string[] args)
  {
   new Program().Run();
  }

  void Run()
  {
   DirectoryCatalog directoryCatalog;
   var container = new CompositionContainer(
    new AggregateCatalog(
     new AssemblyCatalog(typeof(Program).Assembly),
     directoryCatalog = new DirectoryCatalog(&quot;.&quot;)
    ));
   container.ComposeParts(this);

   var userInput = string.Empty;
   do
   {
    Console.Write(&quot;Please enter a string (quit to exit program): &quot;);
    userInput = Console.ReadLine();
    if (userInput != &quot;quit&quot;)
    {
     directoryCatalog.Refresh();
     Console.WriteLine(this.operators.Aggregate&lt;IStringOperator, string&gt;(userInput, (agg, op) =&gt; op.PerformOperation(agg)));
    }
   }
   while (userInput != &quot;quit&quot;);
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build and run your program. Currently the program will only find the <span class="InlineCode">UppercaseOperator</span> part because no other implementations of <span class="InlineCode">IStringOperator</span> can be found. However, the application would already load additional operators from assemblies that are present in the application's directory. Next we will create a new operator and add it by just copying the assembly.</li>
  <li>Create a new class library project <span class="InlineCode">ReverseStringOperator</span>.

<ul><li>Add a reference to <span class="InlineCode">System.ComponentModel.Composition</span> to the class library.</li><li>Add the following class to the project:</li></ul></li>
</ul>{% highlight javascript %}using System.ComponentModel.Composition;
using System.Linq;
using OperatorContract;

namespace ReverseStringOperator
{
 [Export(typeof(IStringOperator))]
 public class ReverseStringOperator : IStringOperator
 {
  public string PerformOperation(string input)
  {
   return new string(input.Reverse().ToArray());
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build your solution.</li>
  <li>Run the command line application. Try it - the behavior must not have changed because the new operator is unknown by now.</li>
  <li>Copy the assembly with the <span class="InlineCode">ReverseStringOperator</span> into the program's directory without stopping the application. Try it - the string must be turned to uppercase <em>and</em> be reversed now.</li>
  <li>Use the debugger to see how MEF loads the assembly during runtime.</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">This example shows you some basic principles of MEF. However, it could have been implemented much simpler because MEF is not only able to export and import objects. You can use the export/import logic for functions, too. Our operators are just functional (technically <span class="InlineCode">func&lt;string, string&gt;</span>). Let us see how we could have made life easier by exporting and importing functions instead of objects:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Add the following class to your command line project <span class="InlineCode">DirectoryCatalogDemo</span>:

<ul><li>Note the <span class="InlineCode">Export</span> attributes on the methods instead of the classes.</li></ul></li>
</ul>{% highlight javascript %}using System.ComponentModel.Composition;
using System.Linq;

namespace DirectoryCatalogDemo
{
 public static class FuncationalOperators
 {
  [Export(&quot;FuncationOperator&quot;)]
  public static string UppercaseString(string input)
  {
   return input.ToUpper();
  }

  [Export(&quot;FuncationOperator&quot;)]
  public static string ReverseString(string input)
  {
   return new string(input.Reverse().ToArray());
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Change the implementation of the <span class="InlineCode">Program</span> class as follows (new/changed lines are written in italic):</li>
</ul>{% highlight javascript %}using System;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Linq;
using OperatorContract;

namespace DirectoryCatalogDemo
{
 public class Program
 {
  [ImportMany(AllowRecomposition = true)]
  private IStringOperator[] operators;

  [ImportMany(&quot;FuncationOperator&quot;, AllowRecomposition = true)]
  private Func&lt;string, string&gt;[] funcationalOperators;

  static void Main(string[] args)
  {
   new Program().Run();
  }

  void Run()
  {
   DirectoryCatalog directoryCatalog;
   var container = new CompositionContainer(
    new AggregateCatalog(
     new AssemblyCatalog(typeof(Program).Assembly),
     directoryCatalog = new DirectoryCatalog(&quot;.&quot;)
    ));
   container.ComposeParts(this);

   var userInput = string.Empty;
   do
   {
    Console.Write(&quot;Please enter a string (quit to exit program): &quot;);
    userInput = Console.ReadLine();
    if (userInput != &quot;quit&quot;)
    {
     directoryCatalog.Refresh();
     Console.WriteLine(&quot;Operators from classes: {0}&quot;, 
      this.operators.Aggregate&lt;IStringOperator, string&gt;(userInput, (agg, op) =&gt; op.PerformOperation(agg)));
     Console.WriteLine(&quot;Funcational operators: {0}&quot;,
      this.funcationalOperators.Aggregate&lt;Func&lt;string, string&gt;, string&gt;(userInput, (agg, op) =&gt; op(agg)));
    }
   }
   while (userInput != &quot;quit&quot;);
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Compile and test the application. As you can see MEF correctly exports and imports the methods just as expected.</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 2: Part Lifecycle Sample</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a new command line project called <span class="InlineCode">LifeCycleDemo</span>.</li>
  <li>Add an exported class to the project as follows:</li>
</ul>{% highlight javascript %}[Export]
public class DisposableObject : IDisposable
{
 private bool disposed = false;

 public DisposableObject()
 {
  Trace.WriteLine(string.Format(&quot;Creating object {0}&quot;, this.GetHashCode()));
 }

 public void Dispose()
 {
  Trace.WriteLine(string.Format(&quot;Disposing object {0}&quot;, this.GetHashCode()));
  this.disposed = true;
 }

 public void DoSomething()
 {
  if (this.disposed)
  {
   throw new InvalidOperationException();
  }

  // Here we have to do something with this object
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Change the implementation of the <span class="InlineCode">Program</span> class as follows:</li>
</ul>{% highlight javascript %}public class Program : IPartImportsSatisfiedNotification
{
 [Import(RequiredCreationPolicy = CreationPolicy.NonShared)]
 public Lazy&lt;DisposableObject&gt; mefObject1;

 [Import(RequiredCreationPolicy = CreationPolicy.NonShared)]
 public Lazy&lt;DisposableObject&gt; mefObject2;

 static void Main(string[] args)
 {
  new Program().Run();
 }

 private void Run()
 {
  var catalog = new AssemblyCatalog(typeof(DisposableObject).Assembly);
  var container = new CompositionContainer(catalog);

  Trace.WriteLine(&quot;Start composing&quot;);
  container.ComposeParts(this);

  Trace.WriteLine(&quot;Accessing lazy object&quot;);
  this.mefObject1.Value.DoSomething();
  this.mefObject2.Value.DoSomething();

  container.ReleaseExports(new[] { this.mefObject1, this.mefObject2 });

  Trace.WriteLine(&quot;Start composing&quot;);
  container.ComposeParts(this);

  Trace.WriteLine(&quot;Accessing lazy object again&quot;);
  this.mefObject1.Value.DoSomething();
  this.mefObject2.Value.DoSomething();
 }

 public void OnImportsSatisfied()
 {
  Trace.WriteLine(&quot;Imports are satisfied&quot;);
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
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