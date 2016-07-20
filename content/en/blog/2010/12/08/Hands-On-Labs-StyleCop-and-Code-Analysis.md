---
layout: blog
title: Hands-On Labs StyleCop and Code Analysis
author: Rainer Stropek
bannerimage: 
permalink: /2010/12/08/Hands-On-Labs-StyleCop-and-Code-Analysis
---

<p xmlns="http://www.w3.org/1999/xhtml">This week I will be one of the speakers at <a href="http://basta-on-tour.de/csharp2010/" target="_blank"><span>BASTA On Tour</span></a> in Munich. One of the topics I am going to speak about is the Managed Extensibility Framework (MEF). In this blog post I want to share my slides and summarize the hands-on labs that I am going to go through with the participants.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>
    <a href="{{site.baseurl}}images/blog/2010/12/StyleCop Code Analysis Workshop.pdf" target="_blank">Download Slides</a> (PDF)</li>
</ul><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 1: StyleCop Documentation Rules</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Download and install the latest version of the StyleCop from <a href="http://stylecop.codeplex.com/" target="_blank">http://stylecop.codeplex.com/</a></li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Create a class library project <span class="InlineCode">StyleCopDemo</span>.</li>
  <li>Add the following class to the newly created project:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System;&#xA;using System.Collections.Generic;&#xA;using System.Linq;&#xA;using System.Text;&#xA;&#xA;namespace styleCopDemo&#xA;{&#xA; public class utils_Bucket&lt;T&gt;&#xA; {&#xA;  public utils_Bucket()&#xA;  {&#xA;  }&#xA;&#xA;  public utils_Bucket(IEnumerable&lt;Tuple&lt;string, T&gt;&gt; data)&#xA;  {&#xA;   foreach (var item in data) {&#xA;    this.data[item.Item1] = item.Item2;&#xA;   }&#xA;  }&#xA;&#xA;  private Dictionary&lt;string, T&gt; data = new Dictionary&lt;string, T&gt;();&#xA;&#xA;  public T this[string index]&#xA;  {&#xA;   get&#xA;   {&#xA;    if (data.ContainsKey(index))&#xA;    {&#xA;     return data[index];&#xA;&#xA;&#xA;    }&#xA;    else&#xA;     return default(T);&#xA;   }&#xA;  }&#xA;&#xA;  public int GetLength()&#xA;  {&#xA;   return this.data.Keys.Count;&#xA;  }&#xA;&#xA;  private string Dump()&#xA;  {&#xA;   return this.data.Aggregate&lt;KeyValuePair&lt;string, T&gt;, StringBuilder&gt;(&#xA;    new StringBuilder(),&#xA;    (agg, item) =&gt;&#xA;    {&#xA;     if (agg.Length &gt; 0)&#xA;     {&#xA;      agg.Append(&quot;, &quot;);&#xA;     }&#xA;     agg.AppendFormat(&quot;{0}: {1}&quot;, item.Key, item.Value.ToString());&#xA;     return agg;&#xA;    }).ToString();&#xA;  }&#xA;  public override string ToString()&#xA;  {&#xA;   return this.Dump();&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Launch StyleCop Settings (right-click on project, select <em>StyleCop settings</em>).</li>
  <li>Enable all rules except <em>Spacing Rules / SA1027</em></li>
  <li>Build your project and make sure that there are no errors and no warning.</li>
  <li>Run StyleCop on your project (right-click on project, select <em>Run StyleCop</em>). As you can see StyleCop generated a bunch of warnings.</li>
  <li>Correct all warnings appropriately.</li>
  <li>After that your file should look similar to the following implementation:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="//-------------------------------------------------------&#xA;// &lt;copyright file=&quot;Bucket.cs&quot; company=&quot;Contoso Ltd.&quot;&gt;&#xA;//     Copyright (c) Contoso Ltd. All rights reserved.&#xA;// &lt;/copyright&gt;&#xA;//-------------------------------------------------------&#xA;&#xA;namespace StyleCopDemo&#xA;{&#xA; using System;&#xA; using System.Collections.Generic;&#xA; using System.Linq;&#xA; using System.Text;&#xA;&#xA; /// &lt;summary&gt;&#xA; /// Implements a bucket&#xA; /// &lt;/summary&gt;&#xA; /// &lt;typeparam name=&quot;T&quot;&gt;Type of the elements in the bucket&lt;/typeparam&gt;&#xA; public class Bucket&lt;T&gt;&#xA; {&#xA;  /// &lt;summary&gt;&#xA;  /// Internal helper to store data&#xA;  /// &lt;/summary&gt;&#xA;  private Dictionary&lt;string, T&gt; data = new Dictionary&lt;string, T&gt;();&#xA;&#xA;  /// &lt;summary&gt;&#xA;  /// Initializes a new instance of the Bucket class.&#xA;  /// &lt;/summary&gt;&#xA;  public Bucket()&#xA;  {&#xA;  }&#xA;&#xA;  /// &lt;summary&gt;&#xA;  /// Initializes a new instance of the Bucket class.&#xA;  /// &lt;/summary&gt;&#xA;  /// &lt;param name=&quot;data&quot;&gt;The initial data.&lt;/param&gt;&#xA;  public Bucket(IEnumerable&lt;Tuple&lt;string, T&gt;&gt; data)&#xA;  {&#xA;   foreach (var item in data) &#xA;   {&#xA;    this.data[item.Item1] = item.Item2;&#xA;   }&#xA;  }&#xA;&#xA;  /// &lt;summary&gt;&#xA;  /// Gets the element at the specified index.&#xA;  /// &lt;/summary&gt;&#xA;  /// &lt;param name=&quot;index&quot;&gt;Index of the element to get.&lt;/param&gt;&#xA;  /// &lt;value&gt;Element at the specified index.&lt;/value&gt;&#xA;  public T this[string index]&#xA;  {&#xA;   get&#xA;   {&#xA;    if (this.data.ContainsKey(index))&#xA;    {&#xA;     return this.data[index];&#xA;    }&#xA;    else&#xA;    {&#xA;     return default(T);&#xA;    }&#xA;   }&#xA;  }&#xA;&#xA;  /// &lt;summary&gt;&#xA;  /// Gets the length.&#xA;  /// &lt;/summary&gt;&#xA;  /// &lt;returns&gt;Length of the dictionary&lt;/returns&gt;&#xA;  public int GetLength()&#xA;  {&#xA;   return this.data.Keys.Count;&#xA;  }&#xA;&#xA;  /// &lt;summary&gt;&#xA;  /// Returns a &lt;see cref=&quot;System.String&quot;/&gt; that represents this instance.&#xA;  /// &lt;/summary&gt;&#xA;  /// &lt;returns&gt;&#xA;  /// A &lt;see cref=&quot;System.String&quot;/&gt; that represents this instance.&#xA;  /// &lt;/returns&gt;&#xA;  public override string ToString()&#xA;  {&#xA;   return this.Dump();&#xA;  }&#xA;&#xA;  /// &lt;summary&gt;&#xA;  /// Dumps this instance.&#xA;  /// &lt;/summary&gt;&#xA;  /// &lt;returns&gt;String representation of the dictionary&lt;/returns&gt;&#xA;  private string Dump()&#xA;  {&#xA;   return this.data.Aggregate&lt;KeyValuePair&lt;string, T&gt;, StringBuilder&gt;(&#xA;    new StringBuilder(),&#xA;    (agg, item) =&gt;&#xA;    {&#xA;     if (agg.Length &gt; 0)&#xA;     {&#xA;      agg.Append(&quot;, &quot;);&#xA;     }&#xA;&#xA;     agg.AppendFormat(&quot;{0}: {1}&quot;, item.Key, item.Value.ToString());&#xA;     return agg;&#xA;    }).ToString();&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 2: StyleCop Build Integration</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Download and install the latest version of the StyleCop from <a href="http://stylecop.codeplex.com/" target="_blank"><span>http://stylecop.codeplex.com/</span></a><ul><li>Make sure that you have selected <em>MSBuild integration files</em> when installing StyleCop</li></ul></li>
  <li>Complete Hands-On Lab 1 (see above)</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Open the resulting solution from Hands-On Lab 1 (<span class="InlineCode">StyleCopDemo</span>).</li>
  <li>Unload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Unload Project</em>).</li>
  <li>Edit <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Edit StyleCopDemo.csproj</em>).</li>
  <li>Scroll to the end of the file. Find the line <span class="InlineCode">&lt;Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" /&gt;</span>.</li>
  <li>Immediately after that line add the following line:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;Import Project=&quot;$(ProgramFiles)\MSBuild\Microsoft\StyleCop\v4.4\Microsoft.StyleCop.targets&quot; /&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Reload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Reload Project</em>).</li>
  <li>Build your project to see that there are no errors and warnings.</li>
  <li>Break a StyleCop rule (e.g. remove the documentation of a method).</li>
  <li>Build your project.

<ul><li>StyleCop should have run automatically, you should see an appropriate warning.</li></ul></li>
  <li>Unload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Unload Project</em>).</li>
  <li>Edit <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Edit StyleCopDemo.csproj</em>).</li>
  <li>Find the first <span class="InlineCode">PropertyGroup</span> in the project file and add the following setting:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;StyleCopTreatErrorsAsWarnings&gt;false&lt;/StyleCopTreatErrorsAsWarnings&gt;" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="xml" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Reload the <span class="InlineCode">StyleCopDemo</span> project (right-click on project in <em>Solution Explorer</em>, select <em>Reload Project</em>).</li>
  <li>Build your project.

<ul><li>The StyleCop warning should now be an error.</li></ul></li>
  <li>Suppress the warning/error using the <span class="InlineCode">SuppressMessage</span> attribute:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="[SuppressMessage(&quot;Microsoft.StyleCop.CSharp.DocumentationRules&quot;, &quot;SA1600:ElementsMustBeDocumented&quot;, &#xA;  Justification = &quot;No time to write documentation...&quot;)]&#xA;public class Bucket&lt;T&gt;&#xA;{&#xA;  ...&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Hands-On Lab 3: Code Analysis</h2><p xmlns="http://www.w3.org/1999/xhtml">Prerequisites:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Visual Studio 2010</li>
  <li>Complete Hands-On Lab 1 (see above)</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Lab step by step description:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Add a new class library project to solution from Hands-On Lab 1 (<span class="InlineCode">StyleCopDemo</span>).</li>
  <li>Add the following class to the newly created project:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="namespace CodeAnalysisDemo&#xA;{&#xA; using System;&#xA; using System.Collections.Generic;&#xA; using System.Data.SqlClient;&#xA; using System.IO;&#xA;&#xA; public interface ISwiftItem&lt;T&gt;&#xA; {&#xA;  string ItemName { get; }&#xA;  List&lt;T&gt; Values { get; }&#xA; }&#xA;&#xA; public interface INamedItem&#xA; {&#xA;  string ItemName { get; }&#xA; }&#xA;&#xA; public class SwiftItem&lt;T&gt; : ISwiftItem&lt;T&gt;&#xA; {&#xA;  public string ItemName&#xA;  {&#xA;   get;&#xA;   set;&#xA;  }&#xA;&#xA;  public List&lt;T&gt; Values&#xA;  {&#xA;   get;&#xA;   set;&#xA;  }&#xA; }&#xA;&#xA; public class SwiftFile&#xA; {&#xA;  private Stream underlying_File;&#xA;  private string fileName;&#xA;  private object header;&#xA;&#xA;  public SwiftFile(string fileName)&#xA;  {&#xA;   this.underlying_File = new FileStream(fileName, FileMode.Open);&#xA;   this.fileName = fileName;&#xA;   this.header = new object();&#xA;  }&#xA;&#xA;  public List&lt;Tuple&lt;string, object&gt;&gt; Settings&#xA;  {&#xA;   get;&#xA;   set;&#xA;  }&#xA;&#xA;  public void AddObject&lt;T&gt;(SwiftItem&lt;T&gt; newObj)&#xA;  {&#xA;   lock (this.header)&#xA;   {&#xA;    var header = string.Format(&quot;{0}: {1}&quot;, newObj.ItemName, newObj.Values.Count);&#xA;&#xA;    foreach (var item in newObj.Values)&#xA;    {&#xA;     if (item is INamedItem)&#xA;     {&#xA;      var namedItem = item as INamedItem;&#xA;&#xA;      // do something special with namedItem&#xA;     }&#xA;    }&#xA;&#xA;    // do something with newObj&#xA;   }&#xA;  }&#xA;&#xA;  public void CopyFile(string source_file_name)&#xA;  {&#xA;   using (var reader = new StreamReader(new FileStream(source_file_name, FileMode.Open)))&#xA;   {&#xA;    // TODO: copy file here&#xA;   }&#xA;  }&#xA;&#xA;  public void WriteToDatabase(SqlConnection conn, string tenant)&#xA;  {&#xA;   var cmd = conn.CreateCommand();&#xA;   cmd.CommandText = string.Format(&quot;INSERT INTO Target ( Tenant, Data ) VALUES ( {0}, @Data )&quot;, tenant);&#xA;   &#xA;   // Build rest of the command and execute it&#xA;  }&#xA;&#xA;  public void Close()&#xA;  {&#xA;   try&#xA;   {&#xA;    this.underlying_File.Close();&#xA;   }&#xA;   catch&#xA;   {&#xA;    Console.WriteLine(&quot;Error&quot;);&#xA;   }&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Build your project and make sure that there are no error and no warnings.</li>
  <li>Enable <em>Code Analysis</em> for the project and select rule set <em>Microsoft All Rules</em>.

<ul><li>You find the necessary options in the project's property window.</li></ul></li>
  <li>Build your project. As you can see code analysis shows you a bunch of warnings.</li>
  <li>Try to correct all warnings appropriately. If you are not sure what a certain warning means or why it is important check the rule documentation in MSDN: <a href="http://msdn.microsoft.com/en-us/library/ee1hzekz.aspx" target="_blank">http://msdn.microsoft.com/en-us/library/ee1hzekz.aspx</a></li>
  <li>After that your file should look similar to the following implementation:</li>
</ul><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="using System;&#xA;&#xA;[assembly: CLSCompliant(true)]&#xA;&#xA;namespace CodeAnalysisDemo&#xA;{&#xA; using System.Collections.Generic;&#xA; using System.Collections.ObjectModel;&#xA; using System.Data;&#xA; using System.Data.SqlClient;&#xA; using System.Diagnostics.CodeAnalysis;&#xA; using System.IO;&#xA;&#xA; public interface ISwiftItem&lt;T&gt;&#xA; {&#xA;  string ItemName { get; }&#xA;  IEnumerable&lt;T&gt; Values { get; }&#xA; }&#xA;&#xA; public interface INamedItem&#xA; {&#xA;  string ItemName { get; }&#xA; }&#xA;&#xA; public class SwiftItem&lt;T&gt; : ISwiftItem&lt;T&gt;&#xA; {&#xA;  public string ItemName&#xA;  {&#xA;   get;&#xA;   set;&#xA;  }&#xA;&#xA;  public IEnumerable&lt;T&gt; Values&#xA;  {&#xA;   get;&#xA;   set;&#xA;  }&#xA; }&#xA;&#xA; public class Setting&#xA; {&#xA;  public string SettingName { get; set; }&#xA;  public object SettingValue { get; set; }&#xA; }&#xA;&#xA; public class SettingCollection : Collection&lt;Setting&gt;&#xA; {&#xA; }&#xA;&#xA; public class SwiftFile : IDisposable&#xA; {&#xA;  private Stream underlying_File;&#xA;  private object header;&#xA;  private bool disposed;&#xA;&#xA;  public SwiftFile(string fileName)&#xA;  {&#xA;   this.underlying_File = new FileStream(fileName, FileMode.Open);&#xA;   this.header = new object();&#xA;   this.Settings = new SettingCollection();&#xA;  }&#xA;&#xA;  public SettingCollection Settings&#xA;  {&#xA;   get;&#xA;   private set;&#xA;  }&#xA;&#xA;  public void AddObject&lt;T&gt;(SwiftItem&lt;T&gt; newObj)&#xA;  {&#xA;   if (newObj != null)&#xA;   {&#xA;    lock (this.header)&#xA;    {&#xA;     foreach (var item in newObj.Values)&#xA;     {&#xA;      var namedItem = item as INamedItem;&#xA;      if (namedItem != null)&#xA;      {&#xA;       // do something special with namedItem&#xA;      }&#xA;     }&#xA;&#xA;     // do something with newObj&#xA;    }&#xA;   }&#xA;  }&#xA;&#xA;  [SuppressMessage(&quot;Microsoft.Performance&quot;, &quot;CA1822&quot;, Justification = &quot;Will reference 'this' later&quot;)]&#xA;  public void CopyFile(string sourceFileName)&#xA;  {&#xA;   var stream = new FileStream(sourceFileName, FileMode.Open);&#xA;   StreamReader reader;&#xA;   try&#xA;   {&#xA;    reader = new StreamReader(stream);&#xA;   }&#xA;   catch&#xA;   {&#xA;    stream.Dispose();&#xA;    throw;&#xA;   }&#xA;&#xA;   try&#xA;   {&#xA;    // do something with reader&#xA;   }&#xA;   finally&#xA;   {&#xA;    reader.Dispose();&#xA;   }&#xA;  }&#xA;&#xA;  [SuppressMessage(&quot;Microsoft.Performance&quot;, &quot;CA1822&quot;, Justification = &quot;Will reference 'this' later&quot;)]&#xA;  public void WriteToDatabase(SqlConnection conn, string tenant)&#xA;  {&#xA;   if (conn == null || (conn.State &amp; ConnectionState.Open) == 0)&#xA;   {&#xA;    throw new ArgumentException(&quot;conn must not be null and must be open&quot;);&#xA;   }&#xA;&#xA;   var cmd = conn.CreateCommand();&#xA;   cmd.CommandText = &quot;INSERT INTO Target ( Tenant, Data ) VALUES ( @Tenant, @Data )&quot;;&#xA;   cmd.Parameters.Add(&quot;@Tenant&quot;, System.Data.SqlDbType.NVarChar, 100).Value = tenant;&#xA;&#xA;   // Build rest of the command and execute it&#xA;  }&#xA;&#xA;  public void Close()&#xA;  {&#xA;   try&#xA;   {&#xA;    this.underlying_File.Close();&#xA;   }&#xA;   catch&#xA;   {&#xA;    Console.WriteLine(&quot;Error&quot;);&#xA;    throw;&#xA;   }&#xA;  }&#xA;&#xA;  private void Dispose(bool disposing)&#xA;  {&#xA;   if (!this.disposed)&#xA;   {&#xA;    if (disposing)&#xA;    {&#xA;     this.underlying_File.Dispose();&#xA;    }&#xA;&#xA;    disposed = true;&#xA;   }&#xA;  }&#xA;&#xA;  public void Dispose()&#xA;  {&#xA;   this.Dispose(true);&#xA;   GC.SuppressFinalize(this);&#xA;  }&#xA;&#xA;  ~SwiftFile()&#xA;  {&#xA;   Dispose(false);&#xA;  }&#xA; }&#xA;}" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="CodeType" value="c#" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function>