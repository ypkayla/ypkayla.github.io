'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Circle, Trophy, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { getCourse, type Lesson } from '@/data/courses';
import { isLessonComplete } from '@/lib/storage';
import { notFound } from 'next/navigation';

export function CoursePageClient({ courseId }: { courseId: string }) {
  const course = getCourse(courseId);
  const [completedInCourse, setCompletedInCourse] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (course) {
      const completed = course.lessons.filter((l: Lesson) => isLessonComplete(l.id)).length;
      const xp = course.lessons.filter((l: Lesson) => isLessonComplete(l.id)).reduce((sum: number, l: Lesson) => sum + l.xp, 0);
      setCompletedInCourse(completed);
      setTotalXP(xp);
    }
  }, [course]);

  if (!course) {
    notFound();
  }

  const progressPercentage = (completedInCourse / course.lessons.length) * 100;
  const maxXP = course.lessons.reduce((sum: number, l: Lesson) => sum + l.xp, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute right-[-100px] top-[120px] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]" />
      </div>

      <section className="container mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
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
                <Trophy className="h-4 w-4 text-yellow-400" />
                {maxXP} XP total
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              {course.title}
            </h1>
            <p className="mt-3 text-lg text-zinc-300 max-w-3xl">
              {course.description}
            </p>
          </div>

          {mounted && (
            <div className="w-full lg:max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-zinc-300">Course progress</span>
                <span className="text-sm text-zinc-400">
                  {completedInCourse}/{course.lessons.length}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2.5" />
              <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
                <span>{progressPercentage.toFixed(0)}% complete</span>
                <span>{totalXP} / {maxXP} XP</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold">Lessons</h2>
          <span className="text-sm text-zinc-400">{course.lessons.length} lessons</span>
        </div>

        <div className="space-y-4">
          {course.lessons.map((lesson: Lesson, index: number) => {
            const isComplete = mounted && isLessonComplete(lesson.id);
            const isFirst = index === 0;
            const previousComplete = index === 0 || (mounted && isLessonComplete(course.lessons[index - 1].id));
            const isLocked = !isFirst && !previousComplete;

            return (
              <Link
                key={lesson.id}
                href={isLocked ? '#' : `/learn/${course.id}/${lesson.id}`}
                className={`block ${isLocked ? 'pointer-events-none opacity-50' : ''}`}
              >
                <div className={`rounded-2xl border p-5 transition-all ${
                  isLocked
                    ? 'border-white/10 bg-white/5'
                    : 'border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-white/10'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {isComplete ? (
                        <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-emerald-300" />
                        </div>
                      ) : (
                        <div className={`w-11 h-11 rounded-full border flex items-center justify-center ${
                          isLocked
                            ? 'bg-zinc-900/30 border-white/10'
                            : 'bg-purple-500/10 border-purple-400/50'
                        }`}>
                          {isLocked ? (
                            <Circle className="h-5 w-5 text-zinc-600" />
                          ) : (
                            <span className="text-purple-300 font-semibold">{index + 1}</span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-zinc-300 mt-1">
                            {lesson.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                            <Trophy className="h-4 w-4 text-yellow-300" />
                            <span className="text-sm font-medium text-yellow-200">
                              {lesson.xp} XP
                            </span>
                          </div>
                          {!isLocked && <ArrowRight className="h-5 w-5 text-zinc-500" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
