---
layout: blog
title: Shades of Gray in SVG - How to Get a Sharp Black Line
author: Karin Huber
bannerimage: /images/blog/2015/03/lines-in-svg.png
permalink: /2015/03/22/Shades-of-Gray-in-SVG---How-to-Get-a-Sharp-Black-Line
---

<p xmlns="http://www.w3.org/1999/xhtml">In HTML5 the new <a href="https://developer.mozilla.org/de/docs/Web/SVG" target="_blank"><em>&lt;svg&gt;</em></a> element was introduced. It allows you to embed SVG graphics in html. You can build really cool things with svg - from fancy looking interactive charts to games running in the browser. At <a href="http://www.creativebloq.com/design/examples-svg-7112785" target="_blank">http://www.creativebloq.com/design/examples-svg-7112785</a><span data-mce-type="bookmark" id="mce_3_start" data-mce-style="overflow:hidden;line-height:0px" style="overflow:hidden;line-height:0px"> you can find some nice demos.</span> But what if you just want to draw a straight 1px line? Well, that's not that easy. I got lots of different results for different browsers.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Lines in SVG</h2><p xmlns="http://www.w3.org/1999/xhtml">The following svg builds a green rectangle with three vertical black lines:</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;svg height=&quot;20&quot; width=&quot;25&quot;&gt;&#xA;    &lt;rect fill=&quot;#bbd435&quot; height=&quot;100%&quot; width=&quot;100%&quot; y=&quot;0&quot; x=&quot;0&quot;&gt;&lt;/rect&gt;&#xA;    &lt;line stroke=&quot;black&quot; stroke-width=&quot;1&quot; y2=&quot;100%&quot; y1=&quot;0&quot; x2=&quot;0&quot; x1=&quot;0&quot;&gt;&lt;/line&gt;&#xA;    &lt;line stroke=&quot;black&quot; stroke-width=&quot;1&quot; y2=&quot;100%&quot; y1=&quot;0&quot; x2=&quot;12&quot; x1=&quot;12&quot;&gt;&lt;/line&gt;&#xA;    &lt;line stroke=&quot;black&quot; stroke-width=&quot;1&quot; y2=&quot;100%&quot; y1=&quot;0&quot; x2=&quot;25&quot; x1=&quot;25&quot;&gt;&lt;/line&gt;&#xA;&lt;/svg&gt;" />
  <f:param name="CodeType" value="xhtml" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">On my PC I got the following results with the browsers IE11, Chrome 41.0.2272.76, and Firefox 36.0.1. The row "Zoom 100%" shows a screenshot of the svg with zoom level 100% in the browser. For the line "Zoom 600%" I have zoomed into this screenshot with <a href="http://www.gimp.org/" target="_blank">Gimp</a> and have taken a screenshot of the zoomed view.</p><table class="table" xmlns="http://www.w3.org/1999/xhtml">
  <thead>
    <tr>
      <th></th>
      <th>Internet Explorer</th>
      <th>Chrome</th>
      <th>Firefox</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Zoom 100%</td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_line_ie_100.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_line_chrome_100.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_line_firefox_100.png" />
      </td>
    </tr>
    <tr>
      <td>Zoom 600%</td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_line_ie_600.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_line_chrome_600.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_line_firefox_600.png" />
      </td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">The results are very different for these three browsers. The images even get different sizes - IE: 27 x 21px, Chrome: 27 x 22px, and Firefox: 25 x 20px.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Rectangles in SVG</h2><p xmlns="http://www.w3.org/1999/xhtml">The best solution in my scenario was to replace all lines by rectangles with a width of 1px. Additionally, I had to use the shape rendering mode <em>crispEdges</em>. The last rectangle must be placed in row 24 instead of 25 as it exactly fills this pixel row instead of trying to draw a line between two pixel rows.</p><f:function name="Composite.Web.Html.SyntaxHighlighter" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="SourceCode" value="&lt;svg width=&quot;25&quot; height=&quot;20&quot;&gt;&#xA;&#x9;&lt;rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;#bbd435&quot;&gt;&lt;/rect&gt;&#xA;&#x9;&lt;rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;1&quot; height=&quot;100%&quot; fill=&quot;black&quot; shape-rendering=&quot;crispEdges&quot;&gt;&lt;/rect&gt;&#xA;&#x9;&lt;rect x=&quot;12&quot; y=&quot;0&quot; width=&quot;1&quot; height=&quot;100%&quot; fill=&quot;black&quot; shape-rendering=&quot;crispEdges&quot;&gt;&lt;/rect&gt;&#xA;&#x9;&lt;rect x=&quot;24&quot; y=&quot;0&quot; width=&quot;1&quot; height=&quot;100%&quot; fill=&quot;black&quot; shape-rendering=&quot;crispEdges&quot;&gt;&lt;/rect&gt;&#xA;&lt;/svg&gt;" />
  <f:param name="CodeType" value="xhtml" />
</f:function><p xmlns="http://www.w3.org/1999/xhtml">This was the only combination of svg elements and attributes that worked for all three browsers on my PC:</p><table class="table" xmlns="http://www.w3.org/1999/xhtml">
  <thead>
    <tr>
      <th></th>
      <th>Internet Explorer</th>
      <th>Chrome</th>
      <th>Firefox</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Zoom 100%</td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_rectangle_ie_100.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_rectangle_chrome_100.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_rectangle_firefox_100.png" />
      </td>
    </tr>
    <tr>
      <td>Zoom 600%</td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_rectangle_ie_600.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_rectangle_chrome_600.png" />
      </td>
      <td>
        <img src="{{site.baseurl}}images/blog/2015/03/svg_rectangle_firefox_600.png" />
      </td>
    </tr>
  </tbody>
</table><p xmlns="http://www.w3.org/1999/xhtml">But even now chrome generates a larger image than the other two, and Firefox makes the last pixel line a bit brighter than the rest of the green rectangle.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Attributes Influencing the Visualization of Lines</h2><p xmlns="http://www.w3.org/1999/xhtml">To find out how to get the best result for sharp lines in different browsers I have collected all parameters that may influence the visualization. Finally, I came up with five factors:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>the shape (line or rectangle)</li>
  <li>using a <em>&lt;viewBox&gt;</em> or not</li>
  <li>using integer or decimal values for the coordinates</li>
  <li>the <em>shape-rendering</em> attribute</li>
  <li>the <em>vector-effect</em> attribute</li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">Shape</h3><p xmlns="http://www.w3.org/1999/xhtml">You can use the <a href="https://developer.mozilla.org/de/docs/Web/SVG/Element/line" target="_blank"><em>&lt;line&gt;</em></a> or the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect" target="_blank"><em>&lt;rect&gt;</em></a> element to display 1px lines. At first sight it seems obvious to use the &lt;line&gt; element to draw a line. But the problem with a line is, that when using integer coordinates, the line is centered between two pixel rows. So you do not get a sharp 1px line, but instead you get a 2px line with a lightened color. There is a good description of this problem at <a href="http://rwillustrator.blogspot.co.at/2010/08/when-pixels-snap-antialiasing-in.html" target="_blank">When Pixels Snap</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">Rectangles behaves differently. When you specify integer coordinates for a rectangle with a width of 1px, the rectangle is drawn exactly on one pixel row.</p><h3 xmlns="http://www.w3.org/1999/xhtml">View Box</h3><p xmlns="http://www.w3.org/1999/xhtml">With the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox" target="_blank"><em>&lt;viewBox&gt;</em></a> you can define the coordinate system of your svg graphic. <em>viewBox="0 0 10 20"</em> means that the top left corner has the coordinates 0,0 whereas the bottom right corner has the coordinates 10,20.  You can find more information about view boxes at <a href="http://tutorials.jenkov.com/svg/svg-viewport-view-box.html" target="_blank">SVG Viewport and View Box</a>. If the ratio of width and length of your svg graphic and the <em>viewBox</em> do not match, you can use the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio" target="_blank"><em>preserveAspectRatio</em></a> attribute to specify how the graphic should stretch to fill the viewport.</p><p xmlns="http://www.w3.org/1999/xhtml">If the available size for your SVG graphic is 100px and you specify a viewbox width of 10, every stroke with 1 unit width will become 10px wide. You can set the <em>vector-effect</em> attribute to <a href="http://www.w3.org/TR/SVGTiny12/painting.html#NonScalingStroke" target="_blank"><em>non-scaling-stroke</em></a> to keep the original size (see below).</p><h3 xmlns="http://www.w3.org/1999/xhtml">Integer or Decimal</h3><p xmlns="http://www.w3.org/1999/xhtml">You can use integer (&lt;rect x1="0" x2="0" ... /&gt;) or decimal (&lt;rect x1="0.5" x2="0.5" ... /&gt;) coordinates for your shapes. Depending on the shape (and the browser) you will get a sharp or a blurred line. Lines are drawn between pixel rows so you should add 0.5 to the coordinates to get sharp lines. Rectangles are drawn on pixel rows, so you can use integer values to draw sharp lines.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Shape Rendering</h3><p xmlns="http://www.w3.org/1999/xhtml">With the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering" target="_blank"><em>shape-rendering</em></a> attribute you can specify how you want the browser to render <em>&lt;path&gt;</em> elements and basic shapes like <em>&lt;line&gt;</em> or <em>&lt;rectangle&gt;</em>. The four possible values are <em>auto</em>, <em>optimizeSpeed</em>, <em>crispEdges</em>, and <em>geometricPrecision</em>.</p><p xmlns="http://www.w3.org/1999/xhtml">In my example I had to use the value <em>crispEdges</em> with a rectangle to produce sharp lines in all three browsers. In Chrome <em>optimizeSpeed</em> worked too, and in IE all values worked with rectangles. With lines it did not work.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Vector Effect (Only for View Box)</h3><p xmlns="http://www.w3.org/1999/xhtml">If you are using a &lt;viewBox&gt;, all strokes are scaled to the defined view box size. That means if your graphic has a width of 100px and you define a view box with a width of 10 units, a stroke with 1 unit will become 10px wide. The <em>vector-effect</em> attribute <a href="http://www.w3.org/TR/SVGTiny12/painting.html#NonScalingStroke" target="_blank"><em>non-scaling-stroke</em></a> allows you to suppress this behavior for strokes. Unfortunately, there is no equivalent for text. It is not possible to keep the specified text size in a view box. A work around to get this behavior for text is to nest <em>svg</em> elements. You can find an example at <a href="http://stackoverflow.com/questions/18208139/svg-viewbox-should-not-resize-the-text-fontsize" target="_blank">stackoverflow</a>. But even for strokes the attribute does not work in all browsers. Internet Explorer does not support this attribute at the moment: <a href="https://connect.microsoft.com/IE/feedback/details/788819/svg-non-scaling-stroke. ">https://connect.microsoft.com/IE/feedback/details/788819/svg-non-scaling-stroke</a>.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Test Different Combinations in Your Browser</h2><p xmlns="http://www.w3.org/1999/xhtml">The following example shows a grid with different combinations of elements and attributes to draw lines. In the top area you can specify a default value for each influencing factor. In the grid below the default value is used except for the rows and columns where the factor is overridden. If you select the default value <em>Rectangle</em> for the used shape, all graphics will use rectangles to draw the lines except the row and the column with the caption <em>Line</em>.</p><p xmlns="http://www.w3.org/1999/xhtml">With this example you can test all combinations on your PCs and browsers. Hover over the graphic to get a tooltip with the rendered HTML.</p><iframe width="100%" height="680" src="https://jsfiddle.net/karin112358/wg0dz3gm/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" xmlns="http://www.w3.org/1999/xhtml"></iframe>