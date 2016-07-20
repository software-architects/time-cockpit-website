---
layout: blog
title: Windows Azure Remote Desktop Hint
author: Simon Opelt
bannerimage: 
permalink: /2011/07/19/Windows-Azure-Remote-Desktop-Hint
---

<p xmlns="http://www.w3.org/1999/xhtml">Just a quick heads up: "Administrator" is not the best user name you could try to use for <a href="http://msdn.microsoft.com/library/gg443832.aspx" target="_blank">Windows Azure Remote Desktop</a> connections.</p><p xmlns="http://www.w3.org/1999/xhtml">When deploying through Visual Studio the wizard doesn't seem to mind if you set this user name but afterwards connections simply don't work. We then tried to set/change the user name through the <a href="https://windows.azure.com/" target="_blank">Management Portal</a> which hinted that "You need to provide a valid Account Name first" which actually meant that we should choose a proper user name.</p><p xmlns="http://www.w3.org/1999/xhtml">(At first we managed to miss that the exception referred to the user name field as account name.)</p>