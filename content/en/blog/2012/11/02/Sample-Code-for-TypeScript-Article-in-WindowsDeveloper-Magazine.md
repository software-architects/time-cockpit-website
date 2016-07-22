---
layout: blog
title: Sample Code for TypeScript Article in Windows.Developer Magazine
teaser: I am currently writing an article about TypeScript for the upcoming issue of the German Windows.Developer magazine. It contains a larger code sample demonstrating some key concepts of the new language. 
author: Rainer Stropek
date: 2012-11-02
bannerimage: 
lang: en
permalink: /blog/2012/11/02/Sample-Code-for-TypeScript-Article-in-WindowsDeveloper-Magazine
---

<p xmlns="http://www.w3.org/1999/xhtml">I am currently writing an article about <a href="http://www.typescriptlang.org" target="_blank">TypeScript</a> for the upcoming issue of the German <a href="http://it-republik.de/dotnet/windowsdeveloper-ausgaben" target="_blank">Windows.Developer</a> magazine. It contains a larger code sample demonstrating some key concepts of the new language. Some readers might be interested in playing with the sample code in TypeScript's <a href="http://www.typescriptlang.org/Playground/" target="_blank">Playground</a>. Probably they do not want to type in the sample code. Therefore I publish the code in this article.</p><h2 xmlns="http://www.w3.org/1999/xhtml">OO Concepts in TypeScript</h2><p xmlns="http://www.w3.org/1999/xhtml">The first sample deals with the TypeScript language. It demonstrates some OO concepts of the language:</p>{% highlight javascript %}// Define a top-level module
module CrmModule {
  // Define an interface that specifies what a person must consist of.
  export interface IPerson {
    firstName: string;
    lastName: string;
  }
  
  // Note that Person would not need to specify &quot;implements IPerson&quot; 
  // explicitely. Even if the &quot;implements&quot; clause would not be there, 
  // Person would be compatible with IPerson because of structural subtyping.
  export class Person implements IPerson {
    private isNew: bool;       // a private member only accessible inside Person
    public firstName: string;  // a public member accessible from outside
    
    // Here you see how to define a constructor
    // Note the keyword &quot;public&quot; used for parameter &quot;lastName&quot;. It 
    // makes &quot;lastName&quot; a public property. &quot;firstName&quot; is assigned manually.
    constructor(firstName: string, public lastName: string) {
      this.firstName = firstName;
    }
    
    // A public method...
    public toString() {
      return this.lastName + &quot;, &quot; + this.firstName;
    }
    
    // A public get accessor...
    public get isValid() {
      return this.isNew || 
        (this.firstName.length &gt; 0 &amp;&amp; this.lastName.length &gt; 0);
    }
    
    // Note the function type literal used for the &quot;completeCallback&quot; parameter.
    // &quot;repository&quot; has no type. Therefore it is of type &quot;Any&quot;.
    public savePerson(repository, completedCallback: (bool) =&gt; void) {
      var code = repository.saveViaRestService(this);
      completedCallback(code === 200);
    }
  }
  
  // Create derived classes using the &quot;extends&quot; keyword
  export class VipPerson extends Person {
    // Note that &quot;VipPerson&quot; does not define a constructor. It gets a
    // constructor with appropriate parameters from its base class
    // automatically.
    
    // Note how we override &quot;toString&quot; here. Use &quot;super&quot; to access 
    // the base class.
    public toString() {
      return super.toString() + &quot; (VIP)&quot;;
    }
  }
  
  // Define a nested module inside of CrmModule
  export module Sales {
    export class Opportunity {
      public potentialRevenueEur: number;
      public contacts: IPerson[];      // Array type
      
      // Note that we use the &quot;IPerson&quot; interface here.
      public addContact(p: IPerson) {
        this.contacts.push(p);
      }
      
      // A static member...
      static convertToUsd(amountInEur: number): number {
        return amountInEur * 1.3;
      }
    }
  }
}

// Note how we instanciate the Person class here.
var p: CrmModule.Person;
p = new CrmModule.Person(&quot;Max&quot;, &quot;Muster&quot;);

// Change the HTML DOM via TypeScript. Try to play around with this code
// in the TypeScript Playground and you will see that you have IntelliSense
// when working with the DOM. Accessing the DOM is type safe.
var button = document.createElement('button')
button.innerText = p.toString()
button.onclick = function() {
  alert(&quot;Hello&quot; + p.firstName)
}
document.body.appendChild(button)

// Call a method and pass a callback function.
var r = { 
  saveViaRestService: function (p: CrmModule.Person) {
    alert(&quot;Saving &quot; + p.toString());
    return 200;
  }
};
p.savePerson(r, function(success: string) { alert(&quot;Saved&quot;); });

// Create an instance of the derived class.
var v: CrmModule.VipPerson;
v = new CrmModule.VipPerson(&quot;Tom&quot;, &quot;Turbo&quot;);
// Note how we access the get accessor here.
if (!v.isValid) {
  alert(&quot;Person is invalid&quot;);
}
else {
  // Not that &quot;toString&quot; calls the overridden version from the derived class
  // VipPerson.
  alert(v.toString());
}

// Note how we import a module here and assign it the alias &quot;S&quot;.
import S = CrmModule.Sales;
var s: S.Opportunity;
s = new S.Opportunity();
s.potentialRevenueEur = 1000;
// Note structural subtyping here. You can call &quot;addContact&quot; with 
// any object type compatible with IPerson.
s.addContact(v);
s.addContact({ firstName: &quot;Rainer&quot;, lastName: &quot;Stropek&quot; });
s.addContact(&lt;CrmModule.IPerson&gt; { firstName: &quot;Rainer&quot;, lastName: &quot;Stropek&quot; });
var val = S.Opportunity.convertToUsd(s.potentialRevenueEur);
{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Modules in TypeScript</h2>{% highlight javascript %}module Crm {
    export class Customer {
        constructor(public custName: string) {
        }
    }
}

module Crm {
    export class Opportunity {
        constructor(public customer: Customer) {
        }
    }    
}

var classesInCrmModule = &quot;&quot;;
for(var key in Crm)
{
     classesInCrmModule += key + &quot; &quot;;
     
}
document.body.innerText = classesInCrmModule;
{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Interfaces and Ambient Declarations</h2><p xmlns="http://www.w3.org/1999/xhtml">The second sample shows the power of <em>Ambient Declarations</em> in TypeScript:</p><p xmlns="http://www.w3.org/1999/xhtml">jQuery.d.ts:</p>{% highlight javascript %}interface JQueryEventObject extends Event {
  preventDefault(): any;
}

interface JQuery {
  ready(handler: any): JQuery;
  click(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;
}

interface JQueryStatic {
  (element: Element): JQuery;
  (selector: string, context?: any): JQuery;
}

declare var $: JQueryStatic;
{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">app.ts:</p>{% highlight javascript %}/// &lt;reference path=&quot;jQuery.d.ts&quot; /&gt;

$(document.body).ready(function(){
    alert(&quot;Loaded&quot;);
    $(&quot;a&quot;).click(function(event) {
        alert(&quot;As you can see, the link no longer took you to timecockpit.com&quot;);
        event.preventDefault();
   });
});
{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">default.htm:</p>{% highlight javascript %}&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot; xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;title&gt;jQuery from TypeScript&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;app.css&quot; type=&quot;text/css&quot; /&gt;
    &lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;jQuery from TypeScript&lt;/h1&gt;
    &lt;div id=&quot;content&quot;&gt;
        &lt;a href=&quot;http://www.timecockpit.com&quot;&gt;Click me!&lt;/a&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;{% endhighlight %}