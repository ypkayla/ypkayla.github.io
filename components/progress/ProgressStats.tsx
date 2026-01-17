'use client';

import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Trophy, Flame, Target, BookOpen } from 'lucide-react';
import { getUserProgress } from '@/lib/storage';
import { courses } from '@/data/courses';

export function ProgressStats() {
  const progress = getUserProgress();
  
  // Calculate stats
  const totalLessons = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const completionPercentage = totalLessons > 0
    ? (progress.completedLessons.length / totalLessons) * 100
    : 0;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* XP Card */}
      <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-700/50 rounded-lg p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="p-2.5 bg-purple-500/20 rounded-lg">
            <Trophy className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-xs tracking-wide uppercase text-zinc-400">Total XP</p>
          <p className="text-3xl font-bold text-white leading-none">{progress.totalXP}</p>
        </div>
      </div>

      {/* Streak Card */}
      <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border border-orange-700/50 rounded-lg p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="p-2.5 bg-orange-500/20 rounded-lg">
            <Flame className="h-5 w-5 text-orange-400" />
          </div>
          <p className="text-xs tracking-wide uppercase text-zinc-400">Day Streak</p>
          <p className="text-3xl font-bold text-white leading-none">{progress.streak}</p>
        </div>
      </div>

      {/* Lessons Completed */}
      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-700/50 rounded-lg p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="p-2.5 bg-blue-500/20 rounded-lg">
            <Target className="h-5 w-5 text-blue-400" />
          </div>
          <p className="text-xs tracking-wide uppercase text-zinc-400">Completed</p>
          <p className="text-3xl font-bold text-white leading-none">
            {progress.completedLessons.length}/{totalLessons}
          </p>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-700/50 rounded-lg p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="p-2.5 bg-green-500/20 rounded-lg">
            <BookOpen className="h-5 w-5 text-green-400" />
          </div>
          <p className="text-xs tracking-wide uppercase text-zinc-400">Progress</p>
          <div className="w-full max-w-[180px]">
            <Progress value={completionPercentage} className="h-2.5" />
          </div>
          <p className="text-sm text-zinc-300 font-medium">{completionPercentage.toFixed(0)}%</p>
        </div>
      </div>
    </div>
  );
}
