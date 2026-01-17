'use client';

import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Trophy, Flame, Target, BookOpen } from 'lucide-react';
import { getUserProgress } from '@/lib/storage';

export function ProgressStats() {
  const progress = getUserProgress();
  
  // Calculate stats
  const totalLessons = 50; // This would come from course data
  const completionPercentage = (progress.completedLessons.length / totalLessons) * 100;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* XP Card */}
      <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-700/50 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Trophy className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-400">Total XP</p>
            <p className="text-2xl font-bold text-white">{progress.totalXP}</p>
          </div>
        </div>
      </div>

      {/* Streak Card */}
      <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border border-orange-700/50 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-500/20 rounded-lg">
            <Flame className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-400">Day Streak</p>
            <p className="text-2xl font-bold text-white">{progress.streak}</p>
          </div>
        </div>
      </div>

      {/* Lessons Completed */}
      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-700/50 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Target className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-400">Completed</p>
            <p className="text-2xl font-bold text-white">
              {progress.completedLessons.length}/{totalLessons}
            </p>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-700/50 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <BookOpen className="h-5 w-5 text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-zinc-400 mb-1">Progress</p>
            <Progress value={completionPercentage} className="h-2" />
            <p className="text-xs text-zinc-500 mt-1">{completionPercentage.toFixed(0)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
