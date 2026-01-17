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
    <div className="container mx-auto px-4 py-12">
      {/* Course Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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
        </div>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          {course.title}
        </h1>
        <p className="text-xl text-zinc-400 mb-6">
          {course.description}
        </p>

        {/* Progress Bar */}
        {mounted && (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-300">
                Course Progress
              </span>
              <span className="text-sm text-zinc-500">
                {completedInCourse} / {course.lessons.length} lessons completed
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span>
                {totalXP} / {maxXP} XP earned
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Lesson List */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-white mb-6">Lessons</h2>
        
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
              <div className={`bg-zinc-900/50 border rounded-lg p-5 transition-all ${
                isLocked
                  ? 'border-zinc-800'
                  : 'border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-900'
              }`}>
                <div className="flex items-center gap-4">
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    {isComplete ? (
                      <div className="w-10 h-10 rounded-full bg-green-900/30 border-2 border-green-500 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                        isLocked 
                          ? 'bg-zinc-800/50 border-zinc-700'
                          : 'bg-purple-900/20 border-purple-500'
                      }`}>
                        {isLocked ? (
                          <Circle className="h-5 w-5 text-zinc-600" />
                        ) : (
                          <span className="text-purple-400 font-bold">{index + 1}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Lesson Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {lesson.description}
                    </p>
                  </div>

                  {/* XP Badge */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-yellow-400">
                        {lesson.xp} XP
                      </span>
                    </div>
                    {!isLocked && (
                      <ArrowRight className="h-5 w-5 text-zinc-500" />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
