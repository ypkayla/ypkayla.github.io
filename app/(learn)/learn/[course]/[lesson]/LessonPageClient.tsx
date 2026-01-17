'use client';

import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import { CodeEditor } from '@/components/editor/CodeEditor';
import { OutputConsole } from '@/components/editor/OutputConsole';
import { RunButton } from '@/components/editor/RunButton';
import { LessonContent } from '@/components/lessons/LessonContent';
import { Exercise, createExerciseChecker } from '@/components/lessons/Exercise';
import { Navigation } from '@/components/lessons/Navigation';
import { getLesson, getAdjacentLessons } from '@/data/courses';
import { 
  saveLessonCode, 
  getLessonCode, 
  markLessonComplete, 
  setCurrentLesson,
  isLessonComplete 
} from '@/lib/storage';
import { CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { notFound } from 'next/navigation';

export function LessonPageClient({ 
  courseId, 
  lessonId 
}: { 
  courseId: string; 
  lessonId: string;
}) {
  const lesson = getLesson(courseId, lessonId);
  const adjacent = getAdjacentLessons(courseId, lessonId);

  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number>(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (lesson) {
      // Load saved code or use starter code
      const savedCode = getLessonCode(lessonId);
      setCode(savedCode || lesson.starterCode || '# Write your Python code here\n');
      
      // Set current lesson
      setCurrentLesson(courseId, lessonId);
      
      // Check if already complete
      setIsComplete(isLessonComplete(lessonId));
    }
  }, [lessonId, courseId, lesson]);

  useEffect(() => {
    // Auto-save code as user types
    const timer = setTimeout(() => {
      if (code) {
        saveLessonCode(lessonId, code);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [code, lessonId]);

  if (!lesson) {
    notFound();
  }

  const handleOutput = (newOutput: string, newError: string | null, time: number) => {
    setOutput(newOutput);
    setError(newError);
    setExecutionTime(time);
  };

  const handleClearOutput = () => {
    setOutput('');
    setError(null);
  };

  const handleReset = () => {
    setCode(lesson.starterCode || '');
    setOutput('');
    setError(null);
    toast.success('Code reset to starter template');
  };

  const handleCheckExercise = async (solutionCode: string) => {
    if (!lesson.exercise) return;

    const checker = createExerciseChecker({
      title: lesson.exercise.title,
      description: lesson.exercise.description,
      tests: lesson.exercise.tests,
    });

    const passed = await checker(solutionCode);

    if (passed && !isComplete) {
      markLessonComplete(lessonId, lesson.xp);
      setIsComplete(true);
      toast.success(`🎉 Lesson complete! +${lesson.xp} XP`);
    } else if (!passed) {
      toast.error('Some tests failed. Keep trying!');
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Lesson Header */}
      <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              {lesson.title}
            </h1>
            <p className="text-sm text-zinc-400">{lesson.description}</p>
          </div>
          <div className="flex items-center gap-3">
            {isComplete && (
              <div className="flex items-center gap-2 text-green-500 bg-green-900/20 px-4 py-2 rounded-lg border border-green-700/50">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Split View: Content | Editor */}
      <div className="flex-1 overflow-hidden">
        <Split
          sizes={[50, 50]}
          minSize={300}
          gutterSize={8}
          className="flex h-full"
          gutterStyle={() => ({
            backgroundColor: '#27272a',
            cursor: 'col-resize',
          })}
        >
          {/* Left: Lesson Content */}
          <div className="overflow-y-auto p-6 bg-zinc-950">
            <LessonContent content={lesson.content} title="" />
            
            {lesson.exercise && (
              <div className="mt-8">
                <Exercise
                  title={lesson.exercise.title}
                  description={lesson.exercise.description}
                  tests={lesson.exercise.tests}
                  code={code}
                  onCheck={handleCheckExercise}
                  onComplete={() => {
                    if (!isComplete) {
                      markLessonComplete(lessonId, lesson.xp);
                      setIsComplete(true);
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Right: Code Editor + Output */}
          <div className="flex flex-col bg-zinc-950 border-l border-zinc-800">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-300">Code Editor</span>
              </div>
              <div className="flex items-center gap-2">
                <RunButton
                  code={code}
                  onOutput={handleOutput}
                  onReset={handleReset}
                />
              </div>
            </div>

            {/* Editor */}
            <div className="flex-1 overflow-hidden">
              <CodeEditor
                value={code}
                onChange={setCode}
                height="60%"
              />
            </div>

            {/* Output Console */}
            <div className="h-[40%] border-t border-zinc-800 p-4">
              <OutputConsole
                output={output}
                error={error}
                executionTime={executionTime}
                onClear={handleClearOutput}
              />
            </div>
          </div>
        </Split>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-zinc-800 bg-zinc-950 p-4">
        <Navigation
          courseId={courseId}
          currentLessonId={lessonId}
          previousLesson={adjacent.previous}
          nextLesson={adjacent.next}
        />
      </div>
    </div>
  );
}
