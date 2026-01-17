import Link from 'next/link';
import { ArrowRight, Code2, Zap, Trophy, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-700/50 rounded-full mb-8">
            <Rocket className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Interactive Python Learning Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Learn Python
            <br />
            The Modern Way
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto">
            Master Python programming from beginner to expert with interactive lessons, 
            real-time code execution, and hands-on exercises—all in your browser.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/learn">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Learning Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/learn">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Interactive Code Editor
            </h3>
            <p className="text-zinc-400">
              Write and run Python code directly in your browser with our VS Code-powered editor. 
              No setup required—start coding immediately.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Real-Time Execution
            </h3>
            <p className="text-zinc-400">
              See your code run instantly with our in-browser Python interpreter powered by Skulpt.
              Get immediate feedback on every line you write.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mb-6">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Hands-On Exercises
            </h3>
            <p className="text-zinc-400">
              Learn by doing with interactive exercises and challenges. Track your progress, 
              earn XP, and build real projects as you advance.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Path Preview */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-zinc-400">
            Structured curriculum from beginner to expert
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-6">
            <div className="text-green-400 text-sm font-medium mb-2">BEGINNER</div>
            <h3 className="text-xl font-bold text-white mb-3">Python Basics</h3>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>• Hello World & Syntax</li>
              <li>• Variables & Data Types</li>
              <li>• Control Flow & Loops</li>
              <li>• Functions & Modules</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
            <div className="text-blue-400 text-sm font-medium mb-2">INTERMEDIATE</div>
            <h3 className="text-xl font-bold text-white mb-3">Advanced Concepts</h3>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>• Object-Oriented Programming</li>
              <li>• File I/O & APIs</li>
              <li>• Error Handling</li>
              <li>• Working with Libraries</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/30 rounded-xl p-6">
            <div className="text-purple-400 text-sm font-medium mb-2">ADVANCED</div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Topics</h3>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>• Async Programming</li>
              <li>• Data Science Basics</li>
              <li>• Web Development</li>
              <li>• Machine Learning Intro</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/learn">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>© 2024 Learn Python. Built with Next.js, Skulpt, and ❤️</p>
        </div>
      </footer>
    </div>
  );
}
