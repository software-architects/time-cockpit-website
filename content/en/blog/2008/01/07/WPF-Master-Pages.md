---
layout: blog
title: WPF Master Pages
teaser: One of the really great enhancements in ASP.NET was the introduction of master pages. They help developers to create a consistent layout for the pages in an application. Unfortunately there is no such concept in WPF and XAML. In the following sample I would like to show a simple way to build a control in WPF similar to an ASP.NET master page.
author: Karin Huber
date: 2008-01-07
bannerimage: 
lang: en
permalink: /blog/2008/01/07/WPF-Master-Pages
---

<p xmlns="http://www.w3.org/1999/xhtml">One of the really great enhancements in ASP.NET was the introduction of master pages. They help developers to create a consistent layout for the pages in an application. Unfortunately there is no such concept in WPF and XAML. In the following sample I would like to show a simple way to build a control in WPF similar to an ASP.NET master page. <a href="{{site.baseurl}}/content/images/blog/2008/01/MasterPages.zip"><span>Download </span> sourcecode<span> - 143 KB...</span></a></p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Layout in WPF</li>
  <li>Building a Master Page</li>
  <li>Using the Master Page</li>
</ul><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="Layout" class="FCK__AnchorC FCK__AnchorC FCK__AnchorC mceItemAnchor" name="Layout"></a>Layout in WPF</h2><p xmlns="http://www.w3.org/1999/xhtml">My goal is to build a simple WPF Application with three pages. Each of the pages should consist of three areas:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>a title,</li>
  <li>an abstract</li>
  <li>and the main content</li>
</ul><p class="DecoratorRight" xmlns="http://www.w3.org/1999/xhtml">The screenshot shows the first page of the applications. In this case all three areas contain some text. But as we will see later in the sample we are not limited to text.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img height="350" width="500" src="{{site.baseurl}}/content/images/blog/2008/01/Page1.png" class="     mceC1Focused" />
</p><p xmlns="http://www.w3.org/1999/xhtml">If I would build this page without using a master page I would start with a new blank page and then I would arrange different types of controls on this page. I used Stackpanels and a Grid to arrange the logo and the three types of content on the page.</p>{% highlight javascript %}&lt;Page x:Class=&quot;MasterPages.Page.PageWithoutMaster&quot;
  xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
  xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
  Title=&quot;PageWithoutMaster&quot;&gt;
  &lt;Page.Resources&gt;
    &lt;ResourceDictionary&gt;
      &lt;ResourceDictionary.MergedDictionaries&gt;
        &lt;ResourceDictionary Source=&quot;../Style/Logo.xaml&quot; /&gt;
        &lt;ResourceDictionary Source=&quot;../Style/Standard.xaml&quot; /&gt;
      &lt;/ResourceDictionary.MergedDictionaries&gt;
    &lt;/ResourceDictionary&gt;
  &lt;/Page.Resources&gt;
  
  &lt;StackPanel&gt;
    &lt;Grid Height=&quot;70&quot;&gt;
      &lt;Image Source=&quot;{StaticResource SoftwareArchitectsLogoBackground}&quot;
        Stretch=&quot;Fill&quot; /&gt;
      &lt;Grid Margin=&quot;10&quot;&gt;
        &lt;Image Source=&quot;{StaticResource SoftwareArchitectsLogo}&quot; 
          HorizontalAlignment=&quot;Left&quot; /&gt;
      &lt;/Grid&gt;
    &lt;/Grid&gt;
    &lt;StackPanel Margin=&quot;10&quot;&gt;
      &lt;TextBlock Style=&quot;{StaticResource Title}&quot;&gt;
        About us
      &lt;/TextBlock&gt;
      &lt;TextBlock Style=&quot;{StaticResource Abstract}&quot;&gt;
        software architects builds a ...
      &lt;/TextBlock&gt;
      &lt;TextBlock&gt;
        In the long term software architects ...
      &lt;/TextBlock&gt;
    &lt;/StackPanel&gt;
  &lt;/StackPanel&gt;
&lt;/Page&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">This works very well for one single page, but when adding new pages I have to care for including the general layout code consistently. And it really gets bad when I would like to change the layout after building lots of pages. To avoid this problem I would like to have something similar to ASP.NET Masterpages in my WPF projects.</p><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="BuildingAMasterPage" class="FCK__AnchorC FCK__AnchorC FCK__AnchorC mceItemAnchor" name="BuildingAMasterPage"></a>Building a Master Page</h2><p xmlns="http://www.w3.org/1999/xhtml">The basis for my master page is a new custom control named <span class="InlineCode">Master</span> in my project. I added three dependency properties:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Title</li>
  <li>Abstract</li>
  <li>Content</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">Each property represents one area in my master page.</p><p class="DecoratorRight" xmlns="http://www.w3.org/1999/xhtml">The datatype for the dependency properties is<span class="InlineCode">object</span>. This ensures that I cannot only add text but also controls to each area in the page.</p>{% highlight javascript %}namespace MasterPages.Master
{
  public class Master : Control
  {
    static Master()
    {
      DefaultStyleKeyProperty.OverrideMetadata(typeof(Master), 
        new FrameworkPropertyMetadata(typeof(Master)));
    }

    public object Title
    {
      get { return (object)GetValue(TitleProperty); }
      set { SetValue(TitleProperty, value); }
    }

    public static readonly DependencyProperty TitleProperty =
      DependencyProperty.Register(&quot;Title&quot;, typeof(object), 
      typeof(Master), new UIPropertyMetadata());

    public object Abstract
    {
      get { return (object)GetValue(AbstractProperty); }
      set { SetValue(AbstractProperty, value); }
    }

    public static readonly DependencyProperty AbstractProperty =
      DependencyProperty.Register(&quot;Abstract&quot;, typeof(object), 
      typeof(Master), new UIPropertyMetadata());

    public object Content
    {
      get { return (object)GetValue(ContentProperty); }
      set { SetValue(ContentProperty, value); }
    }

    public static readonly DependencyProperty ContentProperty =
      DependencyProperty.Register(&quot;Content&quot;, typeof(object), 
      typeof(Master), new UIPropertyMetadata());
  }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">As you may know WPF does not add layout information into the class implementing a custom control like <span class="InlineCode">Master</span>. The content of the file <span class="InlineCode">generic.xaml</span> defines the look of the control. This file is automatically created by Visual Studio as soon as you add a custom control to your project.</p><p xmlns="http://www.w3.org/1999/xhtml">In my case I defined a style for my new class <span class="InlineCode">Master</span> in generic.xaml. This is the place where the arrangement of the areas should happen. Just as in the single page before I used Stackpanels and Grids to arrange the logo and all the other parts of the page. The key to include the content of the dependency properties is the control <span class="InlineCode">ContentPresenter</span>. I inserted three of them and bound them to the three dependency properties of the <span class="InlineCode">Master</span>class.</p><p class="DecoratorRight" xmlns="http://www.w3.org/1999/xhtml">I added some <span class="InlineCode">ResourceDictionary</span>objects to the generic.xaml for my more complex styles like the logo, which is entirely built in XAML.</p>{% highlight javascript %}&lt;ResourceDictionary
  xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
  xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
  xmlns:local=&quot;clr-namespace:MasterPages.Master&quot;&gt;

  &lt;ResourceDictionary.MergedDictionaries&gt;
    &lt;ResourceDictionary Source=&quot;Style/Logo.xaml&quot; /&gt;
    &lt;ResourceDictionary Source=&quot;Style/Master.xaml&quot; /&gt;
  &lt;/ResourceDictionary.MergedDictionaries&gt;

  &lt;Style TargetType=&quot;{x:Type local:Master}&quot;&gt;
    &lt;Setter Property=&quot;Template&quot;&gt;
      &lt;Setter.Value&gt;
        &lt;ControlTemplate TargetType=&quot;{x:Type local:Master}&quot;&gt;
          &lt;StackPanel&gt;
            &lt;Grid Height=&quot;70&quot;&gt;
              &lt;Image 
                Source=&quot;{StaticResource SoftwareArchitectsLogoBackground}&quot;
                Stretch=&quot;Fill&quot; /&gt;
              &lt;Grid Margin=&quot;10&quot;&gt;
                &lt;Image Source=&quot;{StaticResource SoftwareArchitectsLogo}&quot; 
                  HorizontalAlignment=&quot;Left&quot; /&gt;
              &lt;/Grid&gt;
            &lt;/Grid&gt;
            &lt;StackPanel Margin=&quot;10&quot;&gt;
              &lt;ContentPresenter Content=&quot;{TemplateBinding Title}&quot; 
                Style=&quot;{StaticResource Title}&quot; /&gt;
              &lt;ContentPresenter Content=&quot;{TemplateBinding Abstract}&quot; 
                Style=&quot;{StaticResource Abstract}&quot; /&gt;
              &lt;ContentPresenter Content=&quot;{TemplateBinding Content}&quot; /&gt;
            &lt;/StackPanel&gt;
          &lt;/StackPanel&gt;
        &lt;/ControlTemplate&gt;
      &lt;/Setter.Value&gt;
    &lt;/Setter&gt;
  &lt;/Style&gt;
&lt;/ResourceDictionary&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Now our master page is ready to use. All we had to do was to</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>insert a new custom control,</li>
  <li>add a dependency property for each area of the page and</li>
  <li>define the layout of the control in the file generic.xaml.</li>
</ul><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="UsingTheMasterPage" class="FCK__AnchorC FCK__AnchorC FCK__AnchorC mceItemAnchor" name="UsingTheMasterPage"></a>Using the Master Page</h2><p xmlns="http://www.w3.org/1999/xhtml">Finally we are able to build a new page based on the master page. Therefore we need a reference to to class <span class="InlineCode">Master </span> in our WPF file: <span class="InlineCode">xmlns:m="clr-namespace:MasterPages.Master"</span>. I chose the prefix m for my <span class="InlineCode">Master</span> class. With this prefix I can add a new instance of <span class="InlineCode">Master</span> to the page. Inside of &lt;m:Master&gt; I can set the<span class="InlineCode">Title</span>, the <span class="InlineCode">Abstract</span> and the <span class="InlineCode">Content</span> property of the class.</p><p class="DecoratorRight" xmlns="http://www.w3.org/1999/xhtml">In this case I only used text but as you can see in the next sample I am not limited to text.</p>{% highlight javascript %}&lt;Page x:Class=&quot;MasterPages.Page.Page1&quot;
  xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
  xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
  xmlns:m=&quot;clr-namespace:MasterPages.Master&quot;
  Title=&quot;Page1&quot;&gt;
  &lt;m:Master&gt;
    &lt;m:Master.Title&gt;
      About us
    &lt;/m:Master.Title&gt;
    &lt;m:Master.Abstract&gt;
      software architects builds a new generation of ...
    &lt;/m:Master.Abstract&gt;
    &lt;m:Master.Content&gt;
      In the long term software architects will offer ...
    &lt;/m:Master.Content&gt;
  &lt;/m:Master&gt;
&lt;/Page&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">To show the advange of a master page I added a second page to my project. Again I do not have to care about layout any more. I just add the <span class="InlineCode">Master</span> control to my page and set the properties of the control. But this time I add more advanved content to the control. The<span class="InlineCode">Content</span> property holds a <span class="InlineCode">StackPanel</span> with a <span class="InlineCode">ListBox</span>.</p>{% highlight javascript %}&lt;Page x:Class=&quot;MasterPages.Page.Page2&quot;
  xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
  xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
  xmlns:m=&quot;clr-namespace:MasterPages.Master&quot;
  Title=&quot;Page2&quot;&gt;
  &lt;m:Master&gt;
    &lt;m:Master.Title&gt;
      Page 2
    &lt;/m:Master.Title&gt;
    &lt;m:Master.Abstract&gt;
      Page 2 contains a ListBox.
    &lt;/m:Master.Abstract&gt;
    &lt;m:Master.Content&gt;
      &lt;StackPanel&gt;
        &lt;ListBox&gt;
          &lt;ListBoxItem&gt;Item 1&lt;/ListBoxItem&gt;
          &lt;ListBoxItem&gt;Item 2&lt;/ListBoxItem&gt;
          &lt;ListBoxItem&gt;Item 3&lt;/ListBoxItem&gt;
        &lt;/ListBox&gt;
      &lt;/StackPanel&gt;
    &lt;/m:Master.Content&gt;
  &lt;/m:Master&gt;
&lt;/Page&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">As you can see in the following screenshot my second page looks similar to my first one. Instead of the text it shows a <span class="InlineCode">ListBox</span> with some items. </p><p xmlns="http://www.w3.org/1999/xhtml">
  <img height="350" width="500" src="{{site.baseurl}}/content/images/blog/2008/01/Page2.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">If you want to access controls of your page in the codebehind file you just have to add a name to the control. In the following sample I added a <span class="InlineCode">Button</span> to the <span class="InlineCode">Content</span> area of my page.</p>{% highlight javascript %}&lt;Page x:Class=&quot;MasterPages.Page.Page3&quot; 
  xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot; 
  xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot; 
  
  Title=&quot;Page3&quot;&gt; 
  &lt;m:Master&gt; 
    &lt;m:Master.Title&gt; 
      Page 3 
    &lt;/m:Master.Title&gt; 
    &lt;m:Master.Abstract&gt; 
      Page 3 contains a Button, which opens a MessageBox. 
    &lt;/m:Master.Abstract&gt; 
    &lt;m:Master.Content&gt; 
      &lt;StackPanel&gt; 
        &lt;Button Name=&quot;btnShowMessage&quot; Content=&quot;Show MessageBox&quot; /&gt; 
      &lt;/StackPanel&gt; 
    &lt;/m:Master.Content&gt; 
  &lt;/m:Master&gt; 
&lt;/Page&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">In the codebehind file of the page I added a click eventhandler to the button which shows a messagebox when it is clicked.</p>{% highlight javascript %}... 

protected override void OnInitialized(EventArgs e) 
{ 
  base.OnInitialized(e); 
  btnShowMessage.Click += new RoutedEventHandler(BtnShowMessage_Click); 
} 

private void BtnShowMessage_Click(object sender, RoutedEventArgs e) 
{ 
  MessageBox.Show(&quot;You clicked the button.&quot;); 
} 

...{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Again I dot not have to care about the layout of the page. The logo, the background, the colors and everything else that makes up a page in my project is encapsulated in the <span class="InlineCode">Master</span>class. I just have to care about the things that are unique to my page like the button and its eventhandler.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img height="350" width="500" src="{{site.baseurl}}/content/images/blog/2008/01/Page3.png" />
</p>