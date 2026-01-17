'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isLessonComplete } from '@/lib/storage';

interface NavigationProps {
  courseId: string;
  currentLessonId: string;
  previousLesson?: {
    id: string;
    title: string;
  };
  nextLesson?: {
    id: string;
    title: string;
  };
}

export function Navigation({ 
  courseId, 
  currentLessonId, 
  previousLesson, 
  nextLesson 
}: NavigationProps) {
  const isCurrentComplete = isLessonComplete(currentLessonId);

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
      {/* Previous Lesson */}
      <div className="flex-1">
        {previousLesson ? (
          <Link href={`/learn/${courseId}/${previousLesson.id}`}>
            <Button variant="outline" className="w-full justify-start">
              <ChevronLeft className="h-4 w-4 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-zinc-500">Previous</span>
                <span className="text-sm">{previousLesson.title}</span>
              </div>
            </Button>
          </Link>
        ) : (
          <div className="h-16" />
        )}
      </div>

      {/* Current Status */}
      <div className="flex items-center gap-2 px-4">
        {isCurrentComplete && (
          <div className="flex items-center gap-2 text-green-500">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Completed</span>
          </div>
        )}
      </div>

      {/* Next Lesson */}
      <div className="flex-1">
        {nextLesson ? (
          <Link href={`/learn/${courseId}/${nextLesson.id}`}>
            <Button 
              variant="default" 
              className="w-full justify-end bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <div className="flex flex-col items-end">
                <span className="text-xs opacity-90">Next</span>
                <span className="text-sm font-medium">{nextLesson.title}</span>
              </div>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        ) : (
          <Button 
            variant="default" 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            asChild
          >
            <Link href={`/learn/${courseId}`}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Course Complete!
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
