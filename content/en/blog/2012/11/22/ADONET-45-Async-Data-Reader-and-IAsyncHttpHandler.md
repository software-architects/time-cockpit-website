---
layout: blog
title: ADO.NET 4.5 Async Data Reader and IAsyncHttpHandler
teaser: In cloud computing scenarios latencies between the application and database server are usually higher compared to an on premise scenario. With the rise of node.js I/O driven web hosts are becoming more familiar and ADO.Net 4.5 aids this by providing Async methods to I/O bound functions. 
author: Philipp Aumayr
date: 2012-11-22
bannerimage: 
lang: en
permalink: /blog/2012/11/22/ADONET-45-Async-Data-Reader-and-IAsyncHttpHandler
---

<p xmlns="http://www.w3.org/1999/xhtml">Having written quite a few lines of Silverlight (RIP!) as well as asynchronous WPF code over the last two years, I have started to appreciate the Don't-Create-A-Thread-For-Everything approach. On the server side node.js is definitely one of the frameworks to thank for the popularity boost and lately the async-await feature in C# 5 has taken things to a new level.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Asynchronous Web Services</h2><p xmlns="http://www.w3.org/1999/xhtml">When ASP.NET processes a request it assigns a thread from the thread pool to this request. The usual web service scenario then connects to a database by opening a connection (ADO.net will helpfully assign a connection from a pool), issues a select and then reads the result one by one from the database. In the synchronous world the executing thread waits for the operation to finish, which generally implies idling the thread and reducing CPU utilization. The goal here is to allow that execution thread to handle a different request (or whatever other task there is to do). Essentially it is a form of cooperative multithreading.</p><h3 xmlns="http://www.w3.org/1999/xhtml">Synchronous Version</h3><p xmlns="http://www.w3.org/1999/xhtml">First the synchronous implementation of our simple person table reader:</p>{% highlight javascript %}    public class SynchronousContentProducer : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.Write(&quot;&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;table&gt;&quot;);

            using (var connection = new SqlConnection(@&quot;Data Source =&quot;&quot;(LocalDB)\TestInstance&quot;&quot;&quot;))
            {
                connection.Open();

                using (var command = connection.CreateCommand())
                {
                    command.CommandText = &quot;Select id, FirstName, LastName From [dbo].[Table];&quot;;

                    var reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        var id = reader.GetInt32(0);
                        var firstName = reader.GetString(1);
                        var lastName = reader.GetString(2);
                        var line = string.Format(&quot;&lt;tr&gt;&lt;td&gt;{0}&lt;/td&gt;&lt;td&gt;{1}&lt;/td&gt;&lt;td&gt;{2}&lt;/td&gt;&lt;/tr&gt;&quot;, id, firstName, lastName);
                        context.Response.Write(line);
                    }
                }
            }

            context.Response.Write(&quot;&lt;/table&gt;&lt;/body&gt;&lt;/html&gt;&quot;);
        }

        public bool IsReusable
        {
            get
            {
                return true;
            }
        }
    }
{% endhighlight %}<h3 xmlns="http://www.w3.org/1999/xhtml">Asynchronous Version using async/await</h3><p xmlns="http://www.w3.org/1999/xhtml">In the second version, I made everything asynchronous by calling the corresponding Async() methods and awaiting the result. I also inherited from HttpTaskAsyncHandler instead of implementing IHttpHandler. Finally, knowing async await in C# 5.0 can help with increasing performance even further: By default an await captures the current ExecutionContext and dispatches to the same thread when the asynchronous operation is done. This therefore has some overhead and can be turned off by calling .ConfigureAwait(false) on the task returned by the async function call and finally awaiting it. I also have to issue a warning here though: If you are using .ConfigureAwait(false) your static context variables will possibly not match after a return from another thread. E.g. HttpContext.Current will possibly refere to another request. So be sure to not reference static variables (you should not anyhow!) and watch those libraries you are using for that.</p><p xmlns="http://www.w3.org/1999/xhtml">So here the asynchronous version of the sample above:</p>{% highlight javascript %}    public class AsyncContentProducer : HttpTaskAsyncHandler
    {
        public async override Task ProcessRequestAsync(HttpContext context)
        {
            using (StreamWriter sw = new StreamWriter(context.Response.OutputStream))
            {
                await sw.WriteLineAsync(&quot;&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;table&gt;&quot;);

                using (var connection = new SqlConnection(@&quot;Data Source =&quot;&quot;(LocalDB)\TestInstance&quot;&quot;&quot;))
                {
                    await connection.OpenAsync().ConfigureAwait(false);

                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = &quot;Select id, FirstName, LastName From [dbo].[Table];&quot;;

                        var reader = await command.ExecuteReaderAsync().ConfigureAwait(false);

                        while (await reader.ReadAsync().ConfigureAwait(false))
                        {
                            var id = reader.GetInt32(0);
                            var firstName = reader.GetString(1);
                            var lastName = reader.GetString(2);
                            var line = string.Format(&quot;&lt;tr&gt;&lt;td&gt;{0}&lt;/td&gt;&lt;td&gt;{1}&lt;/td&gt;&lt;td&gt;{2}&lt;/td&gt;&lt;/tr&gt;&quot;, id, firstName, lastName);
                            await sw.WriteLineAsync(line);
                        }
                    }
                }

                await sw.WriteLineAsync(&quot;&lt;/table&gt;&lt;/body&gt;&lt;/html&gt;&quot;);
            }
        }

        public override bool IsReusable
        {
            get { return true; }
        }
    }
{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">As you can see, the PerformRequest method now returns a task and is sprinkled with await calls, but conceptionally the flow of the function stays pretty much the same.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Considerations</h2><p xmlns="http://www.w3.org/1999/xhtml">Finally, I have to mentioned that i have only tested this in a localhost / LocalDB environment and one thing that obviously became apparent is that there is, of course, overhead associated with the async function call. Because there is no latency to the LocalDB SQL server and the requests are repeated over and over again, the asynchronous functions could actually complete pretty close to synchronously therefore rendering the task (no pun intended) useless. Further, realize that the amount of asynchronity will depend on your use case: It might be beneficial to execute the Open and ExecuteCommand operations asynchronously as they usually will require more time than the asynchronous MoveNext which could be more efficient to execute synchronously.</p><p xmlns="http://www.w3.org/1999/xhtml">As always, benchmark your results and find the right tradeoffs!</p>