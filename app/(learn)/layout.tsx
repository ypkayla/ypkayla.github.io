import Link from 'next/link';
import { Code2, BookOpen } from 'lucide-react';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/learn" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Learn Python
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link 
              href="/learn" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <BookOpen className="h-4 w-4" />
              Courses
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
