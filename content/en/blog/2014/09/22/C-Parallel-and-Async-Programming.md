---
layout: blog
title: C# Parallel and Async Programming
teaser: At BASTA 2014 I will do a full-day C# workshop. One of the topics will be parallel and async programming. In this blog article I share the code of my demo and describe the scenario I will cover -  TPL, async/await, profiling of CPU-bound algorithms.
author: Rainer Stropek
date: 2014-09-22
bannerimage: 
lang: en
permalink: /blog/2014/09/22/C-Parallel-and-Async-Programming
---

<p xmlns="http://www.w3.org/1999/xhtml">At BASTA 2014 I will do a <a href="http://www.software-architects.com/devblog/2014/09/21/BASTA-2014-C-Fitness" target="_blank">full-day C# workshop</a>. One of the topics will be parallel and async programming. In this blog article I share the code of my demo and describe the scenario I will cover: TPL, async/await, profiling of CPU-bound algorithms.</p><h2 xmlns="http://www.w3.org/1999/xhtml">The Scenario</h2><p xmlns="http://www.w3.org/1999/xhtml">The sample scenario is one that I used multiple times before: Calculating PI using a <a href="http://en.wikipedia.org/wiki/Monte_Carlo_method" target="_blank">Monte Carlo Simulation</a>. However, for the BASTA workshop I have completely rewritten the sample code. I also included some demos for upcoming C# 6 features.</p><p class="showcase" xmlns="http://www.w3.org/1999/xhtml">You can download the entire sample from <a href="https://github.com/rstropek/Samples/tree/master/ProfilingWorkshop" target="_blank">my GitHub Samples repository</a>.</p><p xmlns="http://www.w3.org/1999/xhtml">Let's start with a trivial, synchronous implementation. During the workshop, I put it in a portable class library as I will use the sample to speak about PCLs and NuGet, too. But this is a topic for another blog article ...</p>{% highlight javascript %}using System;
#if LANG_EXPERIMENTAL
// Note c# 6 using static here
using System.Math;
#endif

namespace PiWithMonteCarlo
{
    /// &lt;summary&gt;
    /// Trivial, synchronous calculation algorithm
    /// &lt;/summary&gt;
    public static class TrivialPiCalculator
    {
        public static double Calculate(int iterations)
        {
            int inCircle = 0;
            var random = new Random();
            for (int i = 0; i &lt; iterations; i++)
            {
                var a = random.NextDouble();
                var b = random.NextDouble();

                // Strictly speaking, we do not need Sqrt here. We could simply drop it and still get the
                // same result. However, this sample should demonstrate some perf topics, too. Therefore
                // it stays there just so the program has to do some math.
#if LANG_EXPERIMENTAL
                var c = Sqrt(a * a + b * b);
#else
                var c = Math.Sqrt(a * a + b * b);
#endif
                if (c &lt;= 1)
                {
                    inCircle++;
                }
            }

            return ((double)inCircle / iterations) * 4;
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">For comparing the performance of the different calculation algorithms we add a command line test driver:</p>{% highlight javascript %}using System;
using System.Diagnostics;

namespace PiWithMonteCarlo.TestDriver
{
    class Program
    {
        static void Main(string[] args)
        {
            var iterations = 20000000 * Environment.ProcessorCount;

            ExecuteAndPrint(&quot;Trivial PI Calculator&quot;, TrivialPiCalculator.Calculate, iterations);
            ExecuteAndPrint(&quot;\n(Stupid) Parallel.For PI Calculator&quot;, ParallelForPiCalculator.Calculate, iterations);
            ExecuteAndPrint(&quot;\nParallel.For PI Calculator&quot;, EnhancedParallelForPiCalculator.Calculate, iterations);
            ExecuteAndPrint(&quot;\nPLinq PI Calculator&quot;, PlinqPiCalculator.Calculate, iterations);
            ExecuteAndPrint(&quot;\nFast PI Calculator&quot;, FastPiCalculator.Calculate, iterations);
        }

        private static void ExecuteAndPrint(string label, Func&lt;int, double&gt; calculation, int iterations)
        {
            Console.WriteLine(label);
            PrintResult(Measure(() =&gt; calculation(iterations)), iterations);
        }

        private static void PrintResult(Tuple&lt;double, TimeSpan&gt; r, int iterations)
        {
            Console.WriteLine(
                &quot;{0} ({1:#,##0.0000} sec for {2:#,##0} iterations = {3:#,##0.00} iter/sec)&quot;, 
                r.Item1, 
                r.Item2.TotalSeconds, 
                iterations, 
                iterations / r.Item2.TotalSeconds);
        }

        private static Tuple&lt;T, TimeSpan&gt; Measure&lt;T&gt;(Func&lt;T&gt; body)
        {
            var watch = new Stopwatch();
            watch.Start();
            var result = body();
            watch.Stop();
            return new Tuple&lt;T, TimeSpan&gt;(result, watch.Elapsed);
        }
    }
}{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Trivial Parallelization</h2><p xmlns="http://www.w3.org/1999/xhtml">TPL contains a useful construct: <em>Parallel.For</em>. It makes it quite simple to turn a sequential for loop into a parallel algorithm. So let's use it in our sample:</p>{% highlight javascript %}using System;
using System.Threading;
using System.Threading.Tasks;

namespace PiWithMonteCarlo
{
    /// &lt;summary&gt;
    /// Very simple implementation with Parallel.For
    /// &lt;/summary&gt;
    public static class ParallelForPiCalculator
    {
        public static double Calculate(int iterations)
        {
            var randomLockObject = new object();
            int inCircle = 0;
            var random = new Random();

            Parallel.For(0, iterations, i =&gt;
                {
                    double a, b;
                    lock (randomLockObject)
                    {
                        a = random.NextDouble();
                        b = random.NextDouble();
                    }

                    var c = Math.Sqrt(a * a + b * b);
                    if (c &lt;= 1)
                    {
                        Interlocked.Increment(ref inCircle);
                    }
                });

            return ((double)inCircle / iterations) * 4;
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">What do you think, does it use all CPU cores? Will it be faster? Try it using our test driver shown above.</p><h2 xmlns="http://www.w3.org/1999/xhtml">Enhanced Parallel.For</h2><p xmlns="http://www.w3.org/1999/xhtml">It turns out that our parallel version uses more CPU but is slower. So we have to enhance it. This could look something like this:</p>{% highlight javascript %}using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PiWithMonteCarlo
{
    /// &lt;summary&gt;
    /// Enhanced version of &lt;see cref=&quot;ParallelForPiCalculator&quot;/&gt;.
    /// &lt;/summary&gt;
    public static class EnhancedParallelForPiCalculator
    {
        public static double Calculate(int iterations)
        {
            var counterLockObject = new object();
            int inCircle = 0;
            var random = new ThreadSafeRandom();

            Parallel.For(0, iterations,
                // doesn't make sense to use more threads than we have processors
                new ParallelOptions() { MaxDegreeOfParallelism = Environment.ProcessorCount }, 
                () =&gt; 0, (i, _, tLocal) =&gt;
                    {
#if LANG_EXPERIMENTAL
                        // Note C# 6 declarating expression here
                        return tLocal += Math.Sqrt((var a = random.NextDouble()) * a 
                            + (var b = random.NextDouble()) * b) &lt;= 1 ? 1 : 0;
#else
                        double a, b;
                        return tLocal += Math.Sqrt((a = random.NextDouble()) * a + (b = random.NextDouble()) * b) &lt;= 1 ? 1 : 0;
#endif
                    },
                subTotal =&gt; Interlocked.Add(ref inCircle, subTotal));

            return ((double)inCircle / iterations) * 4;
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Much better like this, isn't it?</p><h2 xmlns="http://www.w3.org/1999/xhtml">PLINQ</h2><p xmlns="http://www.w3.org/1999/xhtml">During the workshop I show a PLINQ implementation, too. We discuss the different programming styles and check the performance results.</p>{% highlight javascript %}using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PiWithMonteCarlo
{
    /// &lt;summary&gt;
    /// Monte carlo written with PLINQ
    /// &lt;/summary&gt;
    public static class PlinqPiCalculator
    {
        public static double Calculate(int iterations)
        {
            var random = new ThreadSafeRandom();
            var inCircle = ParallelEnumerable.Range(0, iterations)
                // doesn't make sense to use more threads than we have processors
                .WithDegreeOfParallelism(Environment.ProcessorCount)
                .Select(_ =&gt;
                {
                    double a, b;
                    return Math.Sqrt((a = random.NextDouble()) * a + (b = random.NextDouble()) * b) &lt;= 1;
                })
                .Aggregate&lt;bool, int, int&gt;(
                    0, // Seed
                    (agg, val) =&gt; val ? agg + 1 : agg, // Iterations
                    (agg, subTotal) =&gt; agg + subTotal, // Aggregating subtotals
                    result =&gt; result); // No projection of result needed

            return ((double)inCircle / iterations) * 4;
        }
    }
}{% endhighlight %}<h2 xmlns="http://www.w3.org/1999/xhtml">Fast Implementation Using Tasks</h2><p xmlns="http://www.w3.org/1999/xhtml">So let's try what we can achieve if we handcraft the tasks ourselves.</p>{% highlight javascript %}using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PiWithMonteCarlo
{
    public static class FastPiCalculator
    {
        public static double Calculate(int iterations)
        {
            var procCount = Environment.ProcessorCount;
            if (iterations % procCount != 0)
            {
                throw new ArgumentException(&quot;Must be a multiple of Environment.ProcessorCount&quot;, &quot;iterations&quot;);
            }

            // Distribute iterations evenly across processors
            var iterPerProc = iterations / procCount;

            // One array slot per processor
            var inCircleLocal = new int[procCount];
            var tasks = new Task[procCount];
            for (var proc = 0; proc &lt; procCount; proc++)
            {
                var procIndex = proc; // Helper for closure

                // Start one task per processor
                tasks[proc] = Task.Run(() =&gt;
                    {
                        var inCircleLocalCounter = 0;
                        var random = new Random(procIndex);
                        for (var index = 0; index &lt; iterPerProc; index++)
                        {
                            double a, b;
                            if (Math.Sqrt((a = random.NextDouble()) * a + (b = random.NextDouble()) * b) &lt;= 1)
                            {
                                inCircleLocalCounter++;
                            }
                        }

                        inCircleLocal[procIndex] = inCircleLocalCounter;
                    });
            }

            Task.WaitAll(tasks);

            var inCircle = inCircleLocal.Sum();
            return ((double)inCircle / iterations) * 4;
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Go on and compare the different algorithms. Impressed of how much faster the last one is?</p><h2 xmlns="http://www.w3.org/1999/xhtml">Async Programming</h2><p xmlns="http://www.w3.org/1999/xhtml">During the workshop we spend quite some time discussing the difference between parallel and async programming. The following sample algorithm takes the last implementation shown above and converts it to an easy-to-use async method:</p>{% highlight javascript %}using System;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PiWithMonteCarlo
{
#if LANG_EXPERIMENTAL
    /// &lt;summary&gt;
    /// Note C# 6 primay constructor and auto-property initializer here
    /// &lt;/summary&gt;
    public class PiCalculatorIntermediateResult(long iterations, double resultPi)
    {
        public double ResultPi { get; } = resultPi;
        public long Iterations { get; } = iterations;
    }
#else
    public class PiCalculatorIntermediateResult
    {
        public PiCalculatorIntermediateResult(long iterations, double resultPi)
        {
            this.Iterations = iterations;
            this.ResultPi = resultPi;
        }

        public double ResultPi { get; private set; }
        public long Iterations { get; private set; }
    }
#endif

    /// &lt;summary&gt;
    /// Async version of &lt;see cref=&quot;FastPiCalculator&quot;/&gt;.
    /// &lt;/summary&gt;
    public class FastPiAsyncCalculator
    {
        public static async Task CalculateAsync(CancellationToken cancellationToken, 
            Func&lt;PiCalculatorIntermediateResult, Task&gt; reportIntermediateResultAsyncCallback,
            Func&lt;Task&gt; stoppedCallback)
        {
            // Number of iterations after which we check if it is time to report results back to caller
            const long timerCheckInterval = 100000;

            // Reserve one thread for UI
            var procCount = Environment.ProcessorCount - 1;
            do
            {
                var watch = new Stopwatch();
                watch.Start();

                // One array slot per processor
                var inCircleArray = new long[procCount];
                var iterationsArray = new long[procCount];
                var tasksArray = new Task[procCount];
                for (var proc = 0; proc &lt; procCount; proc++)
                {
                    var procIndex = proc; // Helper for closure

                    // Start one task per processor
                    tasksArray[proc] = Task.Run(() =&gt;
                    {
                        long inCircleLocalCounter = 0;
                        long iterationsLocalCounter = 0;
                        var random = new Random(procIndex);
                        for (var index = 0; true; index++)
                        {
                            iterationsLocalCounter++;
                            double a, b;
                            if (Math.Sqrt((a = random.NextDouble()) * a + (b = random.NextDouble()) * b) &lt;= 1)
                            {
                                inCircleLocalCounter++;
                            }

                            if (index &gt;= timerCheckInterval)
                            {
                                index = 0;
                                lock (watch)
                                {
                                    if (watch.ElapsedMilliseconds &gt;= 1000)
                                    {
                                        // Every second we stop calculating and report result back
                                        break;
                                    }
                                }
                            }
                        }

                        // public local counters in result array
                        inCircleArray[procIndex] = inCircleLocalCounter;
                        iterationsArray[procIndex] = iterationsLocalCounter;
                    });
                }

                // Wait until all processing tasks are done
                await Task.WhenAll(tasksArray).ConfigureAwait(false);

                // Report result back
                var inCircle = inCircleArray.Sum();
                var iterations = iterationsArray.Sum();
                await reportIntermediateResultAsyncCallback(
                    new PiCalculatorIntermediateResult(iterations, ((double)inCircle / iterations) * 4));
            }
            while (!cancellationToken.IsCancellationRequested);

            // Report end of calculation back to caller
            await stoppedCallback();
        }
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Based on that, it is easy to add a platform-independent ViewModel implementation (could be used in a e.g. Windows Store app, WPF, etc.).</p>{% highlight javascript %}using Microsoft.Practices.Prism.Commands;
using Microsoft.Practices.Prism.Mvvm;
using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Input;

namespace PiWithMonteCarlo
{
    /// &lt;summary&gt;
    /// Viewmodel that can easily be consumed in XAML-based applications
    /// &lt;/summary&gt;
    public class FastPiAsyncCalculatorViewModel : BindableBase
    {
        public FastPiAsyncCalculatorViewModel()
        {
            this.startCommand = new DelegateCommand(
                async () =&gt; await this.OnStartCalculation(),
                () =&gt; !this.IsCalculating);

            this.stopCommand = new DelegateCommand(
                this.OnStopCalculation,
                () =&gt; this.IsCalculating);
        }

        private CancellationTokenSource cts = null;
        private Stopwatch watch = null;
        private static Task finishedTask = Task.FromResult(0);

        private async Task OnStartCalculation()
        {
            if (!this.IsCalculating)
            {
                // Start calculation
                this.IsCalculating = true;
                this.watch = new Stopwatch();
                this.watch.Start();
                this.cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));
                await FastPiAsyncCalculator.CalculateAsync(
                    this.cts.Token,
                    result =&gt;
                    {
                        // Navigate back to UI thread to update notification properties
                        SynchronizationContext.Current.Post(new SendOrPostCallback(_ =&gt;
                        {
                            this.CalcualtedPi = result.ResultPi;
                            this.Iterations += result.Iterations;
                            this.IterationsPerSecond = (double)this.Iterations / this.watch.Elapsed.TotalSeconds;
                        }), null);
                        return FastPiAsyncCalculatorViewModel.finishedTask;
                    },
                    () =&gt;
                    {
                        // Switch state to not calculating
                        this.IsCalculating = false;
                        return FastPiAsyncCalculatorViewModel.finishedTask;
                    });
            }
        }

        private void OnStopCalculation()
        {
            if (this.IsCalculating)
            {
                // Cancel calculation
                this.cts.Cancel();
            }
        }

        #region Bindable properties
        private double calculatedPi;
        public double CalcualtedPi
        {
            get { return this.calculatedPi; }
            private set { SetProperty(ref this.calculatedPi, value); }
        }

        private long iterations;
        public long Iterations
        {
            get { return this.iterations; }
            private set { SetProperty(ref this.iterations, value); }
        }

        private double iterationsPerSecond;
        public double IterationsPerSecond
        {
            get { return this.iterationsPerSecond; }
            private set { SetProperty(ref this.iterationsPerSecond, value); }
        }

        private bool isCalculating;
        public bool IsCalculating
        {
            get { return this.isCalculating; }
            private set 
            { 
                SetProperty(ref this.isCalculating, value);
                this.startCommand.RaiseCanExecuteChanged();
                this.stopCommand.RaiseCanExecuteChanged();
            }
        }
        #endregion

        #region Bindable commands
        private DelegateCommand startCommand;
        public ICommand StartCommand
        {
            get { return this.startCommand; }
        }

        private DelegateCommand stopCommand;
        public ICommand StopCommand
        {
            get { return this.stopCommand; }
        }
        #endregion
    }
}{% endhighlight %}<p xmlns="http://www.w3.org/1999/xhtml">Have fun playing around with the code!</p>