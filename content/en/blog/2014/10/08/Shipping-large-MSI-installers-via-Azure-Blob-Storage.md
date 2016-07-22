---
layout: blog
title: Shipping large MSI installers via Azure Blob Storage
teaser: Recently I did a WiX (Windows Installer XML) and MSI training at a customer in Germany. One of the questions I got asked was how to deliver large MSI installers efficiently to customers via web. The goal was to minimize download time. In this blog article I describe a possible approach.
author: Rainer Stropek
date: 2014-10-08
bannerimage: 
lang: en
permalink: /blog/2014/10/08/Shipping-large-MSI-installers-via-Azure-Blob-Storage
---

<p xmlns="http://www.w3.org/1999/xhtml">Recently I did a <a href="http://wixtoolset.org" target="_blank">WiX</a> (Windows Installer XML) and <a href="http://msdn.microsoft.com/en-us/library/cc185688(v=vs.85).aspx" target="_blank">MSI</a> training at a customer in Germany. One of the questions I got asked was how to deliver large MSI installers efficiently to customers via web. The goal was to minimize download time. In this blog article I describe a possible approach.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">You can download the entire sample from my <a href="https://github.com/rstropek/Samples/tree/master/WiXSamples/CompositeWpfAppWithInstaller" target="_blank">GitHub Samples</a> repository.</p><h2 xmlns="http://www.w3.org/1999/xhtml">WiX/MSI Preconditions</h2><p xmlns="http://www.w3.org/1999/xhtml">In many cases developers try to keep things simple by packaging everyhing an installer needs into a single MSI file. WiX has a very convenient feature for that: <a href="http://wixtoolset.org/documentation/manual/v3/xsd/wix/mediatemplate.html" target="_blank"><em>MediaTemplate</em></a> with <em>EmbedCab="yes"</em>.</p><p xmlns="http://www.w3.org/1999/xhtml">The problem with this approach is that the MSI quickly gets quite large. This isn't an issue for small applications and customers with strong internet connections. However, if you have to deliver complex installations to devices spread over the whole globe partly with GPRS connections, this becomes a big problem.</p><p xmlns="http://www.w3.org/1999/xhtml">Fortunately WiX and MSI are old technologies. They where originally developed in an age where software was shipped using diskettes. For those of you how are too young, <a href="http://en.wikipedia.org/wiki/Floppy_disk" target="_blank">here is the Wikipedia article</a> describing what a "diskette" is ;-) At that time, installers were too large for a single storage medium. Data had to be split up. For that, MSI supports external <a href="http://en.wikipedia.org/wiki/Cabinet_(file_format)" target="_blank"><em>Cabinet files</em></a> (CAB).</p><p xmlns="http://www.w3.org/1999/xhtml">In WiX, you can setup media using the <em><a href="http://wixtoolset.org/documentation/manual/v3/xsd/wix/media.html" target="_blank">Media</a></em> tag. Once you defined your disks, you can assign each <em><a href="http://wixtoolset.org/documentation/manual/v3/xsd/wix/file.html" target="_blank">File</a></em> to the appropriate disk. The following example shows how this is done. It is taken from a larger sample that you can find in my <a href="https://github.com/rstropek/Samples/blob/master/WiXSamples/CompositeWpfAppWithInstaller/CompositeWpfApp.InstallCab/Product.wxs" target="_blank">GitHub Samples repository</a>.</p>{% highlight javascript %}&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Wix ...&gt;
    &lt;Product ...&gt;
        &lt;Package ... /&gt;

        &lt;!-- Note that this variant of the sample splits installer into multiple CAB files --&gt;
        &lt;Media Id=&quot;1&quot; Cabinet=&quot;Disk1.cab&quot; EmbedCab=&quot;no&quot; CompressionLevel=&quot;high&quot; /&gt;
        &lt;Media Id=&quot;2&quot; Cabinet=&quot;Disk2.cab&quot; EmbedCab=&quot;no&quot; CompressionLevel=&quot;high&quot; /&gt;

        &lt;Directory ...&gt;
        &lt;/Directory&gt;

        &lt;DirectoryRef ...&gt;
            &lt;!-- Components/files necessary to run the shell --&gt;
            &lt;!-- Note that all components for the shell are stored in CAB file 1 --&gt;
            &lt;Component ...&gt;
                &lt;File ... DiskId=&quot;1&quot; /&gt;
            &lt;/Component&gt;
            &lt;Component ...&gt;
                &lt;File ... DiskId=&quot;1&quot; /&gt;
            &lt;/Component&gt;
        &lt;/DirectoryRef&gt;

        &lt;DirectoryRef ...&gt;
            &lt;!-- Note that all components for the extension are stored in CAB file 2 --&gt;
            &lt;Component ...&gt;
                &lt;File ... DiskId=&quot;2&quot; /&gt;
            &lt;/Component&gt;
        &lt;/DirectoryRef&gt;

        &lt;DirectoryRef ...&gt;
            &lt;!-- Note that all components for the SDK are stored in CAB file 2 --&gt;
            &lt;!-- SDK components/files --&gt;
            &lt;Component ...&gt;
                &lt;File ... DiskId=&quot;2&quot; /&gt;
            &lt;/Component&gt;
            &lt;Component ...
                &lt;File ... DiskId=&quot;2&quot; /&gt;
            &lt;/Component&gt;
        &lt;/DirectoryRef&gt;
        
        ...
    &lt;/Product&gt;
&lt;/Wix&gt;{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">If you build this WiX file you will get three result files:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/WixCabFiles.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">Publishing MSI Installer on the Web with Azure Blob Storage</h2><h3 xmlns="http://www.w3.org/1999/xhtml">Why Blob Storage?</h3><p xmlns="http://www.w3.org/1999/xhtml">Now that we have the installer, we want to offer it to our customers. <a href="http://azure.microsoft.com/en-us/documentation/services/storage/" target="_blank">Azure Blob Storage</a> is a great way to do that. Here are some reasons why:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>You don't have to run and scale web servers.</li>
  <li>Microsoft manages SSL certificates.</li>
  <li>Blob storage is very cost efficient.</li>
  <li>You can turn on <a href="http://azure.microsoft.com/en-us/services/cdn/" target="_blank">Azure's CDN</a> to offer you customers even greater download experience.</li>
  <li>There are easy-to-use tools to manage your files and folders in Azure Blob Storage (e.g. from <a href="http://www.red-gate.com/products/azure-development/" target="_blank">redgate</a>, Visual Studio Server Explorer).</li>
  <li>You can offer your installer to everyone (public read) or distribute time-limited download URLs only to your customers (<a href="http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-shared-access-signature-part-1/" target="_blank">Shared Access Signatures</a>).</li>
</ul><h3 xmlns="http://www.w3.org/1999/xhtml">Setting up Blob Storage</h3><p xmlns="http://www.w3.org/1999/xhtml">Follow these steps to configure Azure Blob Storage for public read access:</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Log in at <a href="https://manage.windowsazure.com/" target="_blank">https://manage.windowsazure.com</a> (or use the new Azure portal at <a href="https://portal.azure.com/" target="_blank">https://portal.azure.com</a>)</li>
  <li>Create a storage account.</li>
  <li>Use a blob storage client of your choice. I will use Visual Studio Server Explorer here. Connect Visual Studio with your Azure account and create a new container in your storage account:</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/Container.png" />
</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Enable public read access for your blob container:</li>
</ul><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/PublicRead.png" />
</p><ul xmlns="http://www.w3.org/1999/xhtml">
  <li>Upload your installer files to the container (click on image to enlarge):</li>
</ul><f:function name="Composite.Media.ImageGallery.Slimbox2" xmlns:f="http://www.composite.net/ns/function/1.0">
  <f:param name="MediaImage" value="MediaArchive:00ff56df-e753-4f01-8a17-256b4d76a195" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxWidth" value="650" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ThumbnailMaxHeight" value="650" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxWidth" value="1280" xmlns:f="http://www.composite.net/ns/function/1.0" />
  <f:param name="ImageMaxHeight" value="1024" xmlns:f="http://www.composite.net/ns/function/1.0" />
</f:function><h2 xmlns="http://www.w3.org/1999/xhtml">Running the MSI Installer</h2><p xmlns="http://www.w3.org/1999/xhtml">Now that we have the MSI installer in Azure Blob Storage we can install our software from there. To make sure that Windows only downloads what it really needs, you should use a web debugger like <a href="http://www.telerik.com/fiddler" target="_blank">Fiddler</a> to check what's going on.</p><p xmlns="http://www.w3.org/1999/xhtml">Note that you must not click on a link to the MSI installer in a browser. In that case, the browser would download the MSI and run it from a local location. Instead, we start the install directly from the URI:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <em>msiexec /i https://yourserver.blob.core.windows.net/msiinstaller/CompositeWpfApp.Install.msi ADDLOCAL=Shell REMOVE=SDK,Extension</em>
</p><p xmlns="http://www.w3.org/1999/xhtml">Note that the command line does only install the <em>Shell</em> feature, i.e. only files referencing disk 1. If you run it, fiddler will show that Windows only downloads disk 1:</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/Disk1.png" />
</p><p xmlns="http://www.w3.org/1999/xhtml">If we add features from disk 2, the installer recognizes that it does not have to read disk 1 again. So the following command line leads to a download of only disk 2 if <em>Shell</em> has been installed before.</p><p xmlns="http://www.w3.org/1999/xhtml">
  <em>msiexec /i https://yourserver.blob.core.windows.net/msiinstaller/CompositeWpfApp.Install.msi ADDLOCAL=Shell,SDK,Extension</em>
</p><p xmlns="http://www.w3.org/1999/xhtml">
  <img src="{{site.baseurl}}/content/images/blog/2014/10/Disk2.png" />
</p><h2 xmlns="http://www.w3.org/1999/xhtml">
  <span style="color: rgb(80, 80, 80); font-size: 14px; line-height: 22px;">As you can see, MSI is clever in determining what to download and Azure Blob Storage is a nice way for you to supply your installers to your customers.</span>
</h2>