import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  Sparkles,
  Wand2,
  ShieldCheck,
  Timer,
  Users,
  BookOpen,
  Star,
  Github,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4 text-purple-300" />
              Built for humans who are learning Python
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
              Learn Python by doing,
              <span className="block bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                not by reading walls of text.
              </span>
            </h1>

            <p className="mt-5 text-lg text-zinc-300">
              Bite-sized lessons, instant execution, and gentle feedback. You’ll build real muscle memory
              with every exercise—right in the browser.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/learn">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start learning free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/learn/python-basics/hello-world">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/20">
                  Try a sample lesson
                  <Play className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                10k+ learners
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                4.9 average rating
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Open source friendly
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(120,80,255,0.15)]">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>lesson: hello_world.py</span>
              <span>00:02:14</span>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-4 font-mono text-sm">
              <div className="text-zinc-500"># write your first program</div>
              <div className="text-purple-300">print</div>
              <span className="text-white">(</span>
              <span className="text-emerald-300">&quot;Hello World!&quot;</span>
              <span className="text-white">)</span>
              <div className="mt-4 rounded-xl bg-black/40 p-3 text-emerald-300">Hello World!</div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Timer className="h-4 w-4" />
                Runs instantly
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                Safe sandbox
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-purple-200" />
              </div>
              <h3 className="text-xl font-semibold">Code while you learn</h3>
            </div>
            <p className="mt-3 text-zinc-300">
              Editor built for learning. Fast, clean, and zero setup.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold">Instant feedback</h3>
            </div>
            <p className="mt-3 text-zinc-300">
              Run code, see output, learn faster. No waiting, no guessing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-emerald-200" />
              </div>
              <h3 className="text-xl font-semibold">Practice that sticks</h3>
            </div>
            <p className="mt-3 text-zinc-300">
              Short challenges that build confidence and keep you motivated.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="container mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-4xl font-semibold">A clear path, not a maze</h2>
            <p className="mt-3 text-zinc-300">Start simple, build confidence, then level up.</p>
          </div>
          <Link href="/learn/python-basics">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Start your first lesson
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <div className="text-emerald-300 text-xs font-semibold tracking-wide">BEGINNER</div>
            <h3 className="mt-2 text-xl font-semibold">Python Basics</h3>
            <ul className="mt-3 text-zinc-300 text-sm space-y-2">
              <li>• Hello World & Syntax</li>
              <li>• Variables & Data Types</li>
              <li>• Control Flow & Loops</li>
              <li>• Functions & Modules</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
            <div className="text-blue-300 text-xs font-semibold tracking-wide">INTERMEDIATE</div>
            <h3 className="mt-2 text-xl font-semibold">Working Programs</h3>
            <ul className="mt-3 text-zinc-300 text-sm space-y-2">
              <li>• OOP & Data Structures</li>
              <li>• Files & APIs</li>
              <li>• Error Handling</li>
              <li>• Real-world Patterns</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
            <div className="text-purple-300 text-xs font-semibold tracking-wide">ADVANCED</div>
            <h3 className="mt-2 text-xl font-semibold">Next-Level Topics</h3>
            <ul className="mt-3 text-zinc-300 text-sm space-y-2">
              <li>• Async Programming</li>
              <li>• Data & Visualization</li>
              <li>• Web Dev with Python</li>
              <li>• ML Foundations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-semibold">97%</div>
              <p className="text-zinc-300">finish the first course</p>
            </div>
            <div>
              <div className="text-3xl font-semibold">45 min</div>
              <p className="text-zinc-300">average time to start building</p>
            </div>
            <div>
              <div className="text-3xl font-semibold">1 browser</div>
              <p className="text-zinc-300">no installs required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto px-4 text-center text-zinc-400">
          <p>© 2024 Learn Python. Built with Next.js, Skulpt, and ❤️</p>
        </div>
      </footer>
    </div>
  );
}
