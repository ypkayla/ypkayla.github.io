'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Trophy } from 'lucide-react';
import { ProgressStats } from '@/components/progress/ProgressStats';
import { courses, type Course, type Lesson } from '@/data/courses';

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Master Python Programming
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Learn Python from beginner to expert with interactive lessons, real-time code execution, and hands-on exercises.
        </p>
      </div>

      {/* Progress Stats */}
      <div className="mb-12">
        <ProgressStats />
      </div>

      {/* Course List */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-6">Available Courses</h2>
        
        {courses.map((course: Course) => (
          <div
            key={course.id}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all group"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'beginner' 
                      ? 'bg-green-900/30 text-green-400 border border-green-700/50'
                      : course.level === 'intermediate'
                      ? 'bg-blue-900/30 text-blue-400 border border-blue-700/50'
                      : 'bg-purple-900/30 text-purple-400 border border-purple-700/50'
                  }`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{course.estimatedHours} hours</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">{course.lessons.length} lessons</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition">
                  {course.title}
                </h3>
                <p className="text-zinc-400 mb-4">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>Earn up to {course.lessons.reduce((sum: number, l: Lesson) => sum + l.xp, 0)} XP</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  href={`/learn/${course.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Lesson Preview */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <p className="text-sm text-zinc-500 mb-3">First lessons:</p>
              <div className="flex flex-wrap gap-2">
                {course.lessons.slice(0, 5).map((lesson: Lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/learn/${course.id}/${lesson.id}`}
                    className="px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:text-white transition"
                  >
                    {lesson.title}
                  </Link>
                ))}
                {course.lessons.length > 5 && (
                  <span className="px-3 py-1.5 text-sm text-zinc-500">
                    +{course.lessons.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2">More Courses Coming Soon!</h3>
        <p className="text-zinc-400">
          We&apos;re working on intermediate and advanced courses covering web development, data science, machine learning, and more.
        </p>
      </div>
    </div>
  );
}
