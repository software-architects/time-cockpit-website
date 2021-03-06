---
layout: blog
title: How to Create an Action That Takes Parameters 
teaser: Last week, a user brought to our attention that there was no example in our help that demonstrated how to implement an action that takes parameters. Therefore, I want to give a quick example of how to achieve the latter behavior. First let me say that the following example is rather trivial, but it should suffice to show you the basic principles of actions. 
author: Alexander Huber
date: 2010-07-26
bannerimage: 
lang: en
permalink: /blog/2010/07/26/How-to-Create-an-Action-That-Takes-Parameters-
---

<p>Last week, a user brought to our attention that there was no example in our help that demonstrated how to implement an action that takes parameters. Therefore, I want to give a quick example of how to achieve the latter behavior. First let me say that the following example is rather trivial, but it should suffice to show you the basic principles of actions.</p><p>Let us say that we want to implement an action that changes the user of specific timesheets plus updates the description to leave a hint that the timesheet was updated by an action. The scenario requires four steps:</p><ul>
  <li>Creating an action</li>
  <li>Creating a parameter entity for the action</li>
  <li>Creating an excecution condition for the action</li>
  <li>Providing source code that does the actual work</li>
</ul><p>In the following, I describe the above steps in detail.</p><h2>Creating an action</h2><p>First we need to create a new action. Therefore, we enter the module <span class="InlineCode">Anpassungen</span> and change to the “Server” context. With a right click on <span class="InlineCode">Actions</span> we create a new action <span class="InlineCode">UpdateTimesheet</span>.On the right pane we can set properties of the action. Under the <span class="InlineCode">Parameters</span> section, we can choose between either <span class="InlineCode">No parameters required</span> or <span class="InlineCode">Use entity as parameter type</span>. As we want to implement an action that takes a parameter, we choose <span class="InlineCode">No parameters required</span>. However, up to now, time cockpit only supports TypedParameters. That is, we must create a dedicated entity that we can use as parameter.</p><p>
  <img alt="creating an action" src="{{site.baseurl}}/content/images/blog/2010/07/create_action (1).png" class="   mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused mceC1Focused" />
</p><h2>Creating an action parameter</h2><p>Now we have an entity that can be used as a parameter for our <span class="InlineCode">UpdateTimesheet</span> action. Hence, we can continue editing our action again. For the parameter to be available, we need to reopen the <span class="InlineCode">UpdateTimesheet</span> action for editing. We can use <span class="InlineCode">UpdateTimesheetParameter</span> as parameter entity for the action now. So each time users choose to execute the action, an auto-generated form for the parameter entity (a parameter dialog) is opened and users can set the values of the relation and property. Besides auto-generated forms, parameters can also have custom defined forms. A description of how to use custom forms will be covered in one of the next blog posts.</p><p>
  <img alt="Creating an action parameter" src="{{site.baseurl}}/content/images/blog/2010/07/create_actionparam (2).png" class="     " />
</p><h2>Creating an execution condition</h2><p>As we want our action to only work on timesheets, we need to define a condition under which circumstances an action should work. So we choose the <span class="InlineCode">Conditions</span> section and add a new condition <span class="InlineCode">TimesheetCondition</span>. Under <span class="InlineCode">Entity</span> we choose <span class="InlineCode">APP_Timesheet</span>. Now, we have an action that has a parameter and functions only on timesheets. Unfortunately, the action has no source code to execute. So the next step is to implement the IronPython code that does the real work.</p><p>
  <img alt="Creating an execution condition" src="{{site.baseurl}}/content/images/blog/2010/07/creation_condition (2).png" class="   mceC1Focused mceC1Focused" />
</p><h2>Providing source code that does the actual work</h2><p>The source code that does the trick looks like the following:</p>{% highlight c# %}clr.AddReference("PresentationFramework") 
clr.AddReference("System") 
from System.Windows import MessageBox 
def actionSample(actionContext): 
  # the input set contains the selected timesheets 
  for item in actionContext.InputSet: 
    item.APP_UserDetail = actionContext.Parameter.NewUser 
    item.APP_Description = actionContext.Parameter.NewDescription 
    actionContext.DataContext.SaveObject(item){% endhighlight %}<p>What we do is, we iterate over all timesheets that have been selected by the user and for each timesheet we set the new user and the new description. We can access the parameter by calling <span class="InlineCode">actionContext.Parameter</span>. In the context of the <span class="InlineCode">UpdateTimesheet</span> action, <span class="InlineCode">actionContext.Parameter</span> represents an instance of the <span class="InlineCode">UpdateTimesheetParameter</span>. That is, we can call <span class="InlineCode">actionContext.Parameter</span> + name of property/relation to get the values of parameter entity.</p><p>
  <img alt="Setting the source code" src="{{site.baseurl}}/content/images/blog/2010/07/set_sourcecode (2).png" class="  " />
</p><h2>Executing the action</h2><p>After all the latter steps, we now can execute the <span class="InlineCode">UpdateTimesheet</span> action on timesheets. For this purpose we select all timesheets that have no user set. We select the timesheets and choose <span class="InlineCode">UpdateTimesheet</span> in the <span class="InlineCode">Actions</span> menu.</p><p>
  <img alt="Executing the action" src="{{site.baseurl}}/content/images/blog/2010/07/update_timesheet (3).png" class="   mceC1Focused mceC1Focused" />
</p><p>After hitting <span class="InlineCode">UpdateTimesheet</span>, users are prompted for a new user and a new description in an auto-generated parameter dialog. This is where users set the parameter values that should be passed to the source code of the action. After saving the parameter, the action is executed and the timesheets are updated accordingly to the new user/description that have been entered in the parameter dialog.</p><p>
  <img alt="Setting action parameter values" src="{{site.baseurl}}/content/images/blog/2010/07/setting_parametervalues (2).png" class="   mceC1Focused mceC1Focused" />
</p><p>Stay tuned for the next blog post, where I will deal with how to define custom forms for action parameters.</p>