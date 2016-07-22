---
layout: blog
title: Hands-On Labs StyleCop and Code Analysis
teaser: This week I will be one of the speakers at BASTA On Tour in Munich. One of the topics I am going to speak about is the Managed Extensibility Framework (MEF). In this blog post I want to share my slides and summarize the hands-on labs that I am going to go through with the participants.
author: Rainer Stropek
date: 2010-12-08
bannerimage: 
lang: en
permalink: /blog/2010/12/08/Hands-On-Labs-StyleCop-and-Code-Analysis
---

<p xmlns="http://www.w3.org/1999/xhtml">This week I will be one of the speakers at <a href="http://basta-on-tour.de/csharp2010/" target="_blank"><span>BASTA On Tour</span></a> in Munich. One of the topics I am going to speak about is the Managed Extensibility Framework (MEF). In this blog post I want to share my slides and summarize the hands-on labs that I am going to go through with the participants.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="{{site.baseurl}}/content/images/blog/2010/12/StyleCop Code Analysis Workshop.pdf" target="_blank">Download Slides</a> (PDF)</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 1: StyleCop Documentation Rules</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Download and install the latest version of the StyleCop from <a href="http://stylecop.codeplex.com/" target="_blank">http://stylecop.codeplex.com/</a></li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a class library project <span class="InlineCode">StyleCopDemo</span>.</li>
  <li>Add the following class to the newly created project:</li>
</ul>{% highlight javascript %}using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace styleCopDemo
{
 public class utils_Bucket&lt;T&gt;
 {
  public utils_Bucket()
  {
  }

  public utils_Bucket(IEnumerable&lt;Tuple&lt;string, T&gt;&gt; data)
  {
   foreach (var item in data) {
    this.data[item.Item1] = item.Item2;
   }
  }

  private Dictionary&lt;string, T&gt; data = new Dictionary&lt;string, T&gt;();

  public T this[string index]
  {
   get
   {
    if (data.ContainsKey(index))
    {
     return data[index];


    }
    else
     return default(T);
   }
  }

  public int GetLength()
  {
   return this.data.Keys.Count;
  }

  private string Dump()
  {
   return this.data.Aggregate&lt;KeyValuePair&lt;string, T&gt;, StringBuilder&gt;(
    new StringBuilder(),
    (agg, item) =&gt;
    {
     if (agg.Length &gt; 0)
     {
      agg.Append(", ");
     }
     agg.AppendFormat("{0}: {1}", item.Key, item.Value.ToString());
     return agg;
    }).ToString();
  }
  public override string ToString()
  {
   return this.Dump();
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Launch StyleCop Settings (right-click on project, select <em>StyleCop settings</em>).</li>
  <li>Enable all rules except <em>Spacing Rules / SA1027</em></li>
  <li>Build your project and make sure that there are no errors and no warning.</li>
  <li>Run StyleCop on your project (right-click on project, select <em>Run StyleCop</em>). As you can see StyleCop generated a bunch of warnings.</li>
  <li>Correct all warnings appropriately.</li>
  <li>After that your file should look similar to the following implementation:</li>
</ul>{% highlight javascript %}//-------------------------------------------------------
// &lt;copyright file="Bucket.cs" company="Contoso Ltd."&gt;
//     Copyright (c) Contoso Ltd. All rights reserved.
// &lt;/copyright&gt;
//-------------------------------------------------------

namespace StyleCopDemo
{
 using System;
 using System.Collections.Generic;
 using System.Linq;
 using System.Text;

 /// &lt;summary&gt;
 /// Implements a bucket
 /// &lt;/summary&gt;
 /// &lt;typeparam name="T"&gt;Type of the elements in the bucket&lt;/typeparam&gt;
 public class Bucket&lt;T&gt;
 {
  /// &lt;summary&gt;
  /// Internal helper to store data
  /// &lt;/summary&gt;
  private Dictionary&lt;string, T&gt; data = new Dictionary&lt;string, T&gt;();

  /// &lt;summary&gt;
  /// Initializes a new instance of the Bucket class.
  /// &lt;/summary&gt;
  public Bucket()
  {
  }

  /// &lt;summary&gt;
  /// Initializes a new instance of the Bucket class.
  /// &lt;/summary&gt;
  /// &lt;param name="data"&gt;The initial data.&lt;/param&gt;
  public Bucket(IEnumerable&lt;Tuple&lt;string, T&gt;&gt; data)
  {
   foreach (var item in data) 
   {
    this.data[item.Item1] = item.Item2;
   }
  }

  /// &lt;summary&gt;
  /// Gets the element at the specified index.
  /// &lt;/summary&gt;
  /// &lt;param name="index"&gt;Index of the element to get.&lt;/param&gt;
  /// &lt;value&gt;Element at the specified index.&lt;/value&gt;
  public T this[string index]
  {
   get
   {
    if (this.data.ContainsKey(index))
    {
     return this.data[index];
    }
    else
    {
     return default(T);
    }
   }
  }

  /// &lt;summary&gt;
  /// Gets the length.
  /// &lt;/summary&gt;
  /// &lt;returns&gt;Length of the dictionary&lt;/returns&gt;
  public int GetLength()
  {
   return this.data.Keys.Count;
  }

  /// &lt;summary&gt;
  /// Returns a &lt;see cref="System.String"/&gt; that represents this instance.
  /// &lt;/summary&gt;
  /// &lt;returns&gt;
  /// A &lt;see cref="System.String"/&gt; that represents this instance.
  /// &lt;/returns&gt;
  public override string ToString()
  {
   return this.Dump();
  }

  /// &lt;summary&gt;
  /// Dumps this instance.
  /// &lt;/summary&gt;
  /// &lt;returns&gt;String representation of the dictionary&lt;/returns&gt;
  private string Dump()
  {
   return this.data.Aggregate&lt;KeyValuePair&lt;string, T&gt;, StringBuilder&gt;(
    new StringBuilder(),
    (agg, item) =&gt;
    {
     if (agg.Length &gt; 0)
     {
      agg.Append(", ");
     }

     agg.AppendFormat("{0}: {1}", item.Key, item.Value.ToString());
     return agg;
    }).ToString();
  }
 }
}{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 2: StyleCop Build Integration</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Download and install the latest version of the StyleCop from <a href="http://stylecop.codeplex.com/" target="_blank"><span>http://stylecop.codeplex.com/</span></a><ul><li>Make sure that you have selected <em>MSBuild integration files</em> when installing StyleCop</li></ul></li>
  <li>Complete Hands-On Lab 1 (see above)</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Open the resulting solution from Hands-On Lab 1 (<span class="InlineCode">StyleCopDemo</span>).</li>
  <li>Unload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Unload Project</em>).</li>
  <li>Edit <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Edit StyleCopDemo.csproj</em>).</li>
  <li>Scroll to the end of the file. Find the line <span class="InlineCode">&lt;Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" /&gt;</span>.</li>
  <li>Immediately after that line add the following line:</li>
</ul>{% highlight javascript %}&lt;Import Project="$(ProgramFiles)\MSBuild\Microsoft\StyleCop\v4.4\Microsoft.StyleCop.targets" /&gt;{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Reload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Reload Project</em>).</li>
  <li>Build your project to see that there are no errors and warnings.</li>
  <li>Break a StyleCop rule (e.g. remove the documentation of a method).</li>
  <li>Build your project.

<ul><li>StyleCop should have run automatically, you should see an appropriate warning.</li></ul></li>
  <li>Unload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Unload Project</em>).</li>
  <li>Edit <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Edit StyleCopDemo.csproj</em>).</li>
  <li>Find the first <span class="InlineCode">PropertyGroup</span> in the project file and add the following setting:</li>
</ul>{% highlight javascript %}&lt;StyleCopTreatErrorsAsWarnings&gt;false&lt;/StyleCopTreatErrorsAsWarnings&gt;{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Reload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Reload Project</em>).</li>
  <li>Build your project.

<ul><li>The StyleCop warning should now be an error.</li></ul></li>
  <li>Suppress the warning/error using the <span class="InlineCode">SuppressMessage</span> attribute:</li>
</ul>{% highlight javascript %}[SuppressMessage("Microsoft.StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented", 
  Justification = "No time to write documentation...")]
public class Bucket&lt;T&gt;
{
  ...
}{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 3: Code Analysis</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Complete Hands-On Lab 1 (see above)</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Add a new class library project to solution from Hands-On Lab 1 (<span class="InlineCode">StyleCopDemo</span>).</li>
  <li>Add the following class to the newly created project:</li>
</ul>{% highlight javascript %}namespace CodeAnalysisDemo
{
 using System;
 using System.Collections.Generic;
 using System.Data.SqlClient;
 using System.IO;

 public interface ISwiftItem&lt;T&gt;
 {
  string ItemName { get; }
  List&lt;T&gt; Values { get; }
 }

 public interface INamedItem
 {
  string ItemName { get; }
 }

 public class SwiftItem&lt;T&gt; : ISwiftItem&lt;T&gt;
 {
  public string ItemName
  {
   get;
   set;
  }

  public List&lt;T&gt; Values
  {
   get;
   set;
  }
 }

 public class SwiftFile
 {
  private Stream underlying_File;
  private string fileName;
  private object header;

  public SwiftFile(string fileName)
  {
   this.underlying_File = new FileStream(fileName, FileMode.Open);
   this.fileName = fileName;
   this.header = new object();
  }

  public List&lt;Tuple&lt;string, object&gt;&gt; Settings
  {
   get;
   set;
  }

  public void AddObject&lt;T&gt;(SwiftItem&lt;T&gt; newObj)
  {
   lock (this.header)
   {
    var header = string.Format("{0}: {1}", newObj.ItemName, newObj.Values.Count);

    foreach (var item in newObj.Values)
    {
     if (item is INamedItem)
     {
      var namedItem = item as INamedItem;

      // do something special with namedItem
     }
    }

    // do something with newObj
   }
  }

  public void CopyFile(string source_file_name)
  {
   using (var reader = new StreamReader(new FileStream(source_file_name, FileMode.Open)))
   {
    // TODO: copy file here
   }
  }

  public void WriteToDatabase(SqlConnection conn, string tenant)
  {
   var cmd = conn.CreateCommand();
   cmd.CommandText = string.Format("INSERT INTO Target ( Tenant, Data ) VALUES ( {0}, @Data )", tenant);
   
   // Build rest of the command and execute it
  }

  public void Close()
  {
   try
   {
    this.underlying_File.Close();
   }
   catch
   {
    Console.WriteLine("Error");
   }
  }
 }
}{% endhighlight %}<ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build your project and make sure that there are no error and no warnings.</li>
  <li>Enable <em>Code Analysis</em> for the project and select rule set <em>Microsoft All Rules</em>.

<ul><li>You find the necessary options in the project's property window.</li></ul></li>
  <li>Build your project. As you can see code analysis shows you a bunch of warnings.</li>
  <li>Try to correct all warnings appropriately. If you are not sure what a certain warning means or why it is important check the rule documentation in MSDN: <a href="http://msdn.microsoft.com/en-us/library/ee1hzekz.aspx" target="_blank">http://msdn.microsoft.com/en-us/library/ee1hzekz.aspx</a></li>
  <li>After that your file should look similar to the following implementation:</li>
</ul>{% highlight javascript %}using System;

[assembly: CLSCompliant(true)]

namespace CodeAnalysisDemo
{
 using System.Collections.Generic;
 using System.Collections.ObjectModel;
 using System.Data;
 using System.Data.SqlClient;
 using System.Diagnostics.CodeAnalysis;
 using System.IO;

 public interface ISwiftItem&lt;T&gt;
 {
  string ItemName { get; }
  IEnumerable&lt;T&gt; Values { get; }
 }

 public interface INamedItem
 {
  string ItemName { get; }
 }

 public class SwiftItem&lt;T&gt; : ISwiftItem&lt;T&gt;
 {
  public string ItemName
  {
   get;
   set;
  }

  public IEnumerable&lt;T&gt; Values
  {
   get;
   set;
  }
 }

 public class Setting
 {
  public string SettingName { get; set; }
  public object SettingValue { get; set; }
 }

 public class SettingCollection : Collection&lt;Setting&gt;
 {
 }

 public class SwiftFile : IDisposable
 {
  private Stream underlying_File;
  private object header;
  private bool disposed;

  public SwiftFile(string fileName)
  {
   this.underlying_File = new FileStream(fileName, FileMode.Open);
   this.header = new object();
   this.Settings = new SettingCollection();
  }

  public SettingCollection Settings
  {
   get;
   private set;
  }

  public void AddObject&lt;T&gt;(SwiftItem&lt;T&gt; newObj)
  {
   if (newObj != null)
   {
    lock (this.header)
    {
     foreach (var item in newObj.Values)
     {
      var namedItem = item as INamedItem;
      if (namedItem != null)
      {
       // do something special with namedItem
      }
     }

     // do something with newObj
    }
   }
  }

  [SuppressMessage("Microsoft.Performance", "CA1822", Justification = "Will reference 'this' later")]
  public void CopyFile(string sourceFileName)
  {
   var stream = new FileStream(sourceFileName, FileMode.Open);
   StreamReader reader;
   try
   {
    reader = new StreamReader(stream);
   }
   catch
   {
    stream.Dispose();
    throw;
   }

   try
   {
    // do something with reader
   }
   finally
   {
    reader.Dispose();
   }
  }

  [SuppressMessage("Microsoft.Performance", "CA1822", Justification = "Will reference 'this' later")]
  public void WriteToDatabase(SqlConnection conn, string tenant)
  {
   if (conn == null || (conn.State &amp; ConnectionState.Open) == 0)
   {
    throw new ArgumentException("conn must not be null and must be open");
   }

   var cmd = conn.CreateCommand();
   cmd.CommandText = "INSERT INTO Target ( Tenant, Data ) VALUES ( @Tenant, @Data )";
   cmd.Parameters.Add("@Tenant", System.Data.SqlDbType.NVarChar, 100).Value = tenant;

   // Build rest of the command and execute it
  }

  public void Close()
  {
   try
   {
    this.underlying_File.Close();
   }
   catch
   {
    Console.WriteLine("Error");
    throw;
   }
  }

  private void Dispose(bool disposing)
  {
   if (!this.disposed)
   {
    if (disposing)
    {
     this.underlying_File.Dispose();
    }

    disposed = true;
   }
  }

  public void Dispose()
  {
   this.Dispose(true);
   GC.SuppressFinalize(this);
  }

  ~SwiftFile()
  {
   Dispose(false);
  }
 }
}{% endhighlight %}