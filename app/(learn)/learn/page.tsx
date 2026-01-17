'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Clock, Trophy, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { ProgressStats } from '@/components/progress/ProgressStats';
import { courses, type Course, type Lesson } from '@/data/courses';
import { Button } from '@/components/ui/button';

export default function LearnPage() {
  const featured = courses[0];
  const [highlightCourses, setHighlightCourses] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash === '#courses') {
      setHighlightCourses(true);
      const timer = window.setTimeout(() => setHighlightCourses(false), 1400);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute right-[-100px] top-[120px] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4 text-purple-300" />
              Learn by doing, not by scrolling
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
              Pick a course, write real code,
              <span className="block bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                and see progress in minutes.
              </span>
            </h1>

            <p className="mt-4 text-lg text-zinc-300">
              Start with the basics, then build confidence through short lessons and instant feedback.
              Everything runs in your browser—no setup, no downloads.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link href={featured ? `/learn/${featured.id}` : '/learn'}>
                <Button size="lg" className="px-7 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start with Python Basics
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="#courses">
                <Button size="lg" variant="outline" className="px-7 py-6 border-white/20">
                  Explore all courses
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-300" />
                Instant execution
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-300" />
                Safe browser sandbox
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-300" />
                Guided path
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>today’s focus</span>
              <span>~15 min</span>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
              <div className="text-sm text-zinc-300">Complete your next lesson</div>
              <div className="mt-2 text-lg font-semibold">{featured ? featured.title : 'Python Basics'}</div>
              <p className="mt-2 text-sm text-zinc-400">
                {featured ? featured.description : 'Start with the fundamentals and build momentum.'}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                <span>{featured ? featured.lessons.length : 10} lessons</span>
                <span>{featured ? featured.estimatedHours : 8} hours</span>
              </div>
            </div>
            <div className="mt-4">
              <ProgressStats />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className={`container mx-auto px-4 py-10 transition-all ${
          highlightCourses ? 'ring-2 ring-purple-500/60 ring-offset-4 ring-offset-zinc-950 rounded-3xl' : ''
        }`}
      >
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold">Courses</h2>
            <p className="text-zinc-400">Choose a path and start building real skill.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {courses.map((course: Course) => (
            <div
              key={course.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/40 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  course.level === 'beginner'
                    ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-700/50'
                    : course.level === 'intermediate'
                    ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
                    : 'bg-purple-900/30 text-purple-300 border border-purple-700/50'
                }`}>
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
                <div className="flex items-center gap-1 text-zinc-400 text-sm">
                  <Clock className="h-4 w-4" />
                  {course.estimatedHours} hours
                </div>
                <div className="flex items-center gap-1 text-zinc-400 text-sm">
                  <BookOpen className="h-4 w-4" />
                  {course.lessons.length} lessons
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
              <p className="text-zinc-300 mb-4">{course.description}</p>

              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Trophy className="h-4 w-4 text-yellow-400" />
                Earn up to {course.lessons.reduce((sum: number, l: Lesson) => sum + l.xp, 0)} XP
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {course.lessons.slice(0, 4).map((lesson: Lesson) => (
                  <span
                    key={lesson.id}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/30 text-xs text-zinc-300"
                  >
                    {lesson.title}
                  </span>
                ))}
                {course.lessons.length > 4 && (
                  <span className="px-3 py-1.5 text-xs text-zinc-400">+{course.lessons.length - 4} more</span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href={`/learn/${course.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200"
                >
                  Start this course
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/learn/${course.id}/${course.lessons[0]?.id}`}
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  Preview lesson
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="container mx-auto px-4 py-10">
        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/5 p-8 text-center">
          <h3 className="text-2xl font-semibold">More courses coming soon</h3>
          <p className="mt-2 text-zinc-300">
            Web development, data science, machine learning, and real-world projects.
          </p>
        </div>
      </section>
    </div>
  );
}
