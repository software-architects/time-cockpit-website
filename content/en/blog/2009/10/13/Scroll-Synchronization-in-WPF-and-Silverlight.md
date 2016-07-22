---
layout: blog
title: Scroll Synchronization in WPF and Silverlight
teaser: Imagine you have two ListBoxes with lots of items. Whenever a user scrolls in one of the two ListBoxes, the other one should be updated, too. What we want to do in this article is to create a simple attached property, that allows us to group scrollable controls.
author: Karin Huber
date: 2009-10-13
bannerimage: 
lang: en
permalink: /blog/2009/10/13/Scroll-Synchronization-in-WPF-and-Silverlight
---

<p xmlns="http://www.w3.org/1999/xhtml">Imagine you have two ListBoxes with lots of items. Whenever a user scrolls in one of the two ListBoxes, the other one should be updated, too. What we want to do in this article is to create a simple attached property, that allows us to group scrollable controls. In the following sample you see two ScrollViewers, whose scroll positions are synchronized because they are both attached to the same ScrollGroup "Group1":</p>{% highlight javascript %}&lt;ScrollViewer 
Name=&quot;ScrollViewer1&quot; scroll:ScrollSynchronizer.ScrollGroup=&quot;Group1&quot;&gt;
   ...
&lt;/ScrollViewer&gt;
  
&lt;ScrollViewer 
Name=&quot;ScrollViewer2&quot; scroll:ScrollSynchronizer.ScrollGroup=&quot;Group1&quot;&gt;
   ...
&lt;/ScrollViewer&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">
  <span>
    <span>As most scrollable controls use the ScrollViewer in their template to enable scrolling, this should also work for other controls like ListBoxes of TreeViews, as long as they contain a</span>
    <span class="InlineCode">ScrollViewer</span>
    <span> in their </span>
    <span class="InlineCode">ControlTemplate</span>
    <span>.</span>
  </span>
</p><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">Online Silverlight Demo</h2><p xmlns="http://www.w3.org/1999/xhtml">Here you can see the Silverlight version of my synchronized ListBoxes:</p><iframe style="width: 100%; height: 300px" src="/Samples/ScrollSynchronization/SoftwareArchitects.ScrollViewerUITestPage.html" frameborder="0" xmlns="http://www.w3.org/1999/xhtml"></iframe><p xmlns="http://www.w3.org/1999/xhtml">In the following article I will show, how to build the <span class="InlineCode">ScrollSyncronizer</span> class in WPF to synchronize the scroll position of various scrollable controls. In the <a href="{{site.baseurl}}/content/images/blog/2009/10/SynchronizedScrollViewers.zip">source code download</a> you will find a working solution for WPF and Silverlight.</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Building the ScrollSynchronizer</li>
  <li>Testing the ScrollSynchronizer</li>
  <li>Synchronizing ListBoxes</li>
  <li>Silverlight Support</li>
</ul><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="Building" name="Building" class="mceItemAnchor"></a>Building the ScrollSynchronizer</h2><p xmlns="http://www.w3.org/1999/xhtml">Our <span class="InlineCode">ScrollSynchronizer</span> object has no representation in the UI. It is just responsible for providing the attached property ScrollGroup. So I have chosen <span class="InlineCode">DependencyObject</span> as the base class. First I added the attached dependency property ScrollGroup with its corresponding methodes <span class="InlineCode">GetScrollGroup</span> and S<span class="InlineCode">etScrollGroup</span> to the class.</p>{% highlight javascript %}public class ScrollSynchronizer : DependencyObject
{
    public static readonly DependencyProperty ScrollGroupProperty =
        DependencyProperty.RegisterAttached(
        &quot;ScrollGroup&quot;, 
        typeof(string), 
        typeof(ScrollSynchronizer), 
        new PropertyMetadata(new PropertyChangedCallback(
            OnScrollGroupChanged)));

    public static void SetScrollGroup(
        DependencyObject obj, 
        string scrollGroup)
    {
        obj.SetValue(ScrollGroupProperty, scrollGroup);
    }

    public static string GetScrollGroup(DependencyObject obj)
    {
        return (string)obj.GetValue(ScrollGroupProperty);
    }

    ...
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">In the property metadata of the new property there is a callback that is invoked everytime a<span class="InlineCode">ScrollViewer</span> uses the attached property, so this is the place where we will provide the logic to synchronize the <span class="InlineCode">ScrollViewer</span> with all other attached ScrollViewers. But before we need some private fields to store all attached ScrollViewers as well as their corresponding horizontal and vertical offsets. The string part in these dictionaries is equal to the name of the group that is set by the <span class="InlineCode">ScrollGroup</span> property.</p>{% highlight javascript %}private static Dictionary&lt;ScrollViewer, string&gt; scrollViewers = 
    new Dictionary&lt;ScrollViewer, string&gt;();

private static Dictionary&lt;string, double&gt; horizontalScrollOffsets = 
    new Dictionary&lt;string, double&gt;();

private static Dictionary&lt;string, double&gt; verticalScrollOffsets = 
    new Dictionary&lt;string, double&gt;();{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Now we can implement the callback for changes in the <span class="InlineCode">ScrollGroup</span> property. Basically the code is quite simple. When a new <span class="InlineCode">ScrollViewer</span> is added by setting the attached property, we check if we can already find a scroll position for the group in the fields<span class="InlineCode">horizontalScrollOffset</span> and <span class="InlineCode">verticalScrollOffset</span>. If so, we set the adjust the scollposition of the new <span class="InlineCode">ScrollViewer</span>, so that it matches the group. Otherwise we add an entry to <span class="InlineCode">horizontalScrollOffset</span> and <span class="InlineCode">verticalScrollOffset</span> with the current scrollposition of the new <span class="InlineCode">ScrollViewer</span>. Finally we add the new <span class="InlineCode">ScrollViewer</span> to the<span class="InlineCode">scrollViewers</span> dictionary with its corresponding group name, and we add an event handler for the <span class="InlineCode">ScrollChanged</span> event, so that we can adapt all other ScrollViewers in the group when the scrollposition has changed.</p><p xmlns="http://www.w3.org/1999/xhtml">If the attached property is removed we remove the <span class="InlineCode">ScrollViewer</span> from the list. In this case we do not remove the entries in <span class="InlineCode">horizontalScrollOffset</span> and <span class="InlineCode">verticalScrollOffset</span>, even when it is the last <span class="InlineCode">ScrollViewer</span> of one group, because when another <span class="InlineCode">ScrollViewer</span> is added to that group later, we still know the last scrollposition of that group.</p>{% highlight javascript %}private static void OnScrollGroupChanged(DependencyObject d, DependencyPropertyChangedEventArgs e) 
{ 
    var scrollViewer = d as ScrollViewer; 
    if (scrollViewer != null) 
    { 
        if (!string.IsNullOrEmpty((string)e.OldValue)) 
        { 
            // Remove scrollviewer 
            if (scrollViewers.ContainsKey(scrollViewer)) 
            { 
                scrollViewer.ScrollChanged -=  
                    new ScrollChangedEventHandler( 
                    ScrollViewer_ScrollChanged); 
                scrollViewers.Remove(scrollViewer); 
            } 
        } 

        if (!string.IsNullOrEmpty((string)e.NewValue)) 
        { 
            // If group already exists, set scrollposition of  
            // new scrollviewer to the scrollposition of the group 
            if (horizontalScrollOffsets.Keys.Contains((string)e.NewValue)) 
            { 
                scrollViewer.ScrollToHorizontalOffset( 
                    horizontalScrollOffsets[(string)e.NewValue]); 
            } 
            else 
            { 
                horizontalScrollOffsets.Add( 
                    (string)e.NewValue,  
                    scrollViewer.HorizontalOffset); 
            } 

            if (verticalScrollOffsets.Keys.Contains((string)e.NewValue)) 
            { 
                scrollViewer.ScrollToVerticalOffset( 
                    verticalScrollOffsets[(string)e.NewValue]); 
            } 
            else 
            { 
                verticalScrollOffsets.Add( 
                    (string)e.NewValue,  
                    scrollViewer.VerticalOffset); 
            } 

            // Add scrollviewer 
            scrollViewers.Add(scrollViewer, (string)e.NewValue); 
            scrollViewer.ScrollChanged +=  
                new ScrollChangedEventHandler(ScrollViewer_ScrollChanged); 
        } 
    } 
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Now our last task is to implement the event handler for the <span class="InlineCode">ScrollChanged</span> event. If the horizontal or the vertical scrollposition has changed, we update the dictionaries<span class="InlineCode">verticalScrollOffsets</span> and <span class="InlineCode">horizontalScrollOffsets</span> to the latest position. Then we have to find all ScrollViewers that are in the same group as the changed <span class="InlineCode">ScrollViewer</span> and update its scroll positions.</p>{% highlight javascript %}private static void ScrollViewer_ScrollChanged(object sender, ScrollChangedEventArgs e) 
{ 
    if (e.VerticalChange != 0 || e.HorizontalChange != 0) 
    { 
        var changedScrollViewer = sender as ScrollViewer; 
        Scroll(changedScrollViewer); 
    } 
} 

private static void Scroll(ScrollViewer changedScrollViewer) 
{ 
    var group = scrollViewers[changedScrollViewer]; 
    verticalScrollOffsets[group] = changedScrollViewer.VerticalOffset; 
    horizontalScrollOffsets[group] = changedScrollViewer.HorizontalOffset; 

    foreach (var scrollViewer in scrollViewers.Where( 
        (s) =&gt; s.Value == group &amp;&amp; s.Key != changedScrollViewer)) 
    { 
        if (scrollViewer.Key.VerticalOffset !=  
            changedScrollViewer.VerticalOffset) 
        { 
            scrollViewer.Key.ScrollToVerticalOffset( 
                changedScrollViewer.VerticalOffset); 
        } 

        if (scrollViewer.Key.HorizontalOffset !=  
            changedScrollViewer.HorizontalOffset) 
        { 
            scrollViewer.Key.ScrollToHorizontalOffset( 
                changedScrollViewer.HorizontalOffset); 
        } 
    } 
}{% endhighlight %}<h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="Testing" name="Testing" class="mceItemAnchor"></a>Testing the ScrollSynchronizer</h2><p xmlns="http://www.w3.org/1999/xhtml">To test the new attached property we build a simple UI with two ScrollViewers. For both ScrollViewers we assign the value "Group1" to the <span class="InlineCode">ScrollGroup</span> property.</p>{% highlight javascript %}&lt;Window  
xmlns:scroll=&quot;clr-namespace:SoftwareArchitects.Windows.Controls; 
assembly=SoftwareArchitects.Windows.Controls.ScrollSynchronizer&quot; 
...&gt; 
    &lt;Grid Margin=&quot;10&quot;&gt; 
  
        &lt;Grid.ColumnDefinitions&gt; 
            &lt;ColumnDefinition Width=&quot;*&quot; /&gt; 
            &lt;ColumnDefinition Width=&quot;*&quot; /&gt; 
        &lt;/Grid.ColumnDefinitions&gt; 
   
        &lt;ScrollViewer Grid.Column=&quot;0&quot; Name=&quot;ScrollViewer1&quot;  
        Margin=&quot;0,0,5,0&quot; scroll:ScrollSynchronizer.ScrollGroup=&quot;Group1&quot;&gt; 
            &lt;StackPanel Name=&quot;Panel1&quot; /&gt; 
        &lt;/ScrollViewer&gt; 
   
        &lt;ScrollViewer Grid.Column=&quot;1&quot; Name=&quot;ScrollViewer2&quot;  
        Margin=&quot;5,0,0,0&quot; scroll:ScrollSynchronizer.ScrollGroup=&quot;Group1&quot;&gt; 
            &lt;StackPanel Name=&quot;Panel2&quot; /&gt; 
        &lt;/ScrollViewer&gt; 
    &lt;/Grid&gt; 
&lt;/Window&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">In the code-behind file we add some TextBlocks to both panels, so that the ScrollBars will get visible.</p>{% highlight javascript %}public Window1() 
{ 
    InitializeComponent(); 

    // Fill listboxes 
    for (var i = 0; i &lt; 100; i++) 
    { 
        this.Panel1.Children.Add(new TextBlock()  
            { Text = string.Format(&quot;This is item {0}&quot;, i) }); 
        this.Panel2.Children.Add(new TextBlock()  
            { Text = string.Format(&quot;This is item {0}&quot;, i) }); 
    } 
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Done! We have two synchronized ScrollViewers:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2009/10/SynchronizedScrollViewers.png" class="mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused" />
</p><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="ListBoxes" name="ListBoxes" class="mceItemAnchor"></a>Synchronizing ListBoxes</h2><p xmlns="http://www.w3.org/1999/xhtml">Now, how can we get other controls synchronized? Let's replace the ScrollViewers by two ListBoxes. Unfortunately we cannot set the attached property <span class="InlineCode">ScrollGroup</span> to the ListBoxes. In the <span class="InlineCode">OnScrollGroupChanged</span> callback we assume, that we will always get a <span class="InlineCode">ScrollViewer</span>. So we could enhance the ScrollSynchronizer to accept other types of controls, or we could simply add a style for the <span class="InlineCode">ScrollViewer</span> within the ListBoxes, that sets the <span class="InlineCode">ScrollGroup</span>property. In this case no changes are necessary for out <span class="InlineCode">ScrollSynchronizer</span>.</p>{% highlight javascript %}&lt;ListBox Grid.Column=&quot;0&quot; Name=&quot;ListBox1&quot; Margin=&quot;0,0,5,0&quot;&gt; 
    &lt;ListBox.Resources&gt; 
        &lt;Style TargetType=&quot;ScrollViewer&quot;&gt; 
            &lt;Setter Property=&quot;scroll:ScrollSynchronizer.ScrollGroup&quot;  
                Value=&quot;Group1&quot; /&gt; 
        &lt;/Style&gt; 
    &lt;/ListBox.Resources&gt; 
&lt;/ListBox&gt; 

&lt;ListBox Grid.Column=&quot;1&quot; Name=&quot;ListBox2&quot; Margin=&quot;5,0,0,0&quot;&gt; 
    &lt;ListBox.Resources&gt; 
        &lt;Style TargetType=&quot;ScrollViewer&quot;&gt; 
            &lt;Setter Property=&quot;scroll:ScrollSynchronizer.ScrollGroup&quot;  
                Value=&quot;Group1&quot; /&gt; 
        &lt;/Style&gt; 
    &lt;/ListBox.Resources&gt; 
&lt;/ListBox&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">A nicer way to do this would be to set the style in the <span class="InlineCode">Grid </span> resources, so it applies to all ScrollViewers in the grid automatically.</p>{% highlight javascript %}&lt;Grid.Resources&gt; 
    &lt;Style TargetType=&quot;ScrollViewer&quot;&gt; 
        &lt;Setter Property=&quot;scroll:ScrollSynchronizer.ScrollGroup&quot;  
            Value=&quot;Group1&quot; /&gt; 
    &lt;/Style&gt; 
&lt;/Grid.Resources&gt; 

&lt;ListBox Grid.Column=&quot;0&quot; Name=&quot;ListBox1&quot; Margin=&quot;0,0,5,0&quot; /&gt; 

&lt;ListBox Grid.Column=&quot;1&quot; Name=&quot;ListBox2&quot; Margin=&quot;5,0,0,0&quot; /&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2009/10/SynchronizedListBoxes.png" class="mceC1Focused" />
</p><h2 class="Head" xmlns="http://www.w3.org/1999/xhtml">
  <a id="Silverlight" name="Silverlight" class="mceItemAnchor"></a>Silverlight Support</h2><p xmlns="http://www.w3.org/1999/xhtml">Basically this solution would also work for Silverlight. In detail there are some differences like a <span class="InlineCode">ScrollViewer</span> does not provide the <span class="InlineCode">ScrollChanged</span> event in Silverlight. But you can bypass this problem by using the <span class="InlineCode">Scroll</span> and <span class="InlineCode">ValueChanged</span> events of the underlying ScrollBars. Another problem is that the Style for the <span class="InlineCode">ScrollViewer</span> is not applied in the ListBox sample, even when using the <span class="InlineCode">ImplicitStyleManager</span>. So I ended up setting the attached property in code for Silverlight. In the <a href="{{site.baseurl}}/content/images/blog/2009/10/SynchronizedScrollViewers.zip">source code download</a> you will find a working solution for WPF and Silverlight.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <span>
    <span>
      <br />
    </span>
  </span>
</p>