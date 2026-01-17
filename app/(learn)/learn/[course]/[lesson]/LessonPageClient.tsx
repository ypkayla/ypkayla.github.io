'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Split from 'react-split';
import { CodeEditor } from '@/components/editor/CodeEditor';
import { OutputConsole } from '@/components/editor/OutputConsole';
import { RunButton } from '@/components/editor/RunButton';
import { LessonContent } from '@/components/lessons/LessonContent';
import { Exercise } from '@/components/lessons/Exercise';
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

  const walkthrough = useMemo(() => {
    const source = lesson?.starterCode || lesson?.solution || '';
    if (!source) return [] as Array<{ line: number; code: string; explanation: string }>;

    const explainLine = (line: string) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('#')) return 'Comment: a note for the reader.';
      if (/^def\s+\w+/.test(trimmed)) return 'Define a function so you can reuse logic later.';
      if (/^class\s+\w+/.test(trimmed)) return 'Define a class (a blueprint for objects).';
      if (/^return\b/.test(trimmed)) return 'Return a value back to the caller.';
      if (/^print\(/.test(trimmed)) return 'Print output to the console.';
      if (/^import\b/.test(trimmed) || /^from\b/.test(trimmed)) return 'Import tools you can use in your code.';
      if (/^for\b/.test(trimmed)) return 'Start a loop to repeat actions for each item.';
      if (/^while\b/.test(trimmed)) return 'Start a loop that repeats while a condition is true.';
      if (/^if\b/.test(trimmed)) return 'Make a decision based on a condition.';
      if (/^elif\b/.test(trimmed)) return 'Check another condition if the previous one failed.';
      if (/^else\b/.test(trimmed)) return 'Fallback when no previous conditions match.';
      if (/=/.test(trimmed) && !/==/.test(trimmed)) return 'Create or update a variable.';
      if (/\.append\(/.test(trimmed)) return 'Add an item to a list.';
      if (/\.remove\(/.test(trimmed)) return 'Remove an item from a list.';
      if (/\.split\(/.test(trimmed)) return 'Split a string into parts.';
      if (/\.join\(/.test(trimmed)) return 'Join items into a single string.';
      return 'This line runs as part of the solution.';
    };

    return source
      .split('\n')
      .map((line, index) => ({ line: index + 1, code: line, explanation: explainLine(line) }))
      .filter(item => item.code.trim().length > 0);
  }, [lesson?.starterCode, lesson?.solution]);

  const exerciseTips = useMemo(() => {
    if (!lesson?.exercise) return [] as string[];
    const tips: string[] = [];
    lesson.exercise.tests.forEach(test => {
      if (test.expectedOutput) {
        tips.push(`Your output must match exactly: “${test.expectedOutput}”.`);
      }
      if (test.minOutputLines !== undefined) {
        tips.push(`Print at least ${test.minOutputLines} non-empty lines.`);
      }
      if (test.minOutputLength !== undefined) {
        tips.push('Any non-empty output is accepted—focus on making something print.');
      }
    });
    tips.push('If the output is wrong, compare spaces, commas, and capitalization.');
    return tips;
  }, [lesson?.exercise]);

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
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">How to learn this lesson</h3>
              <div className="mt-3 grid gap-3 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-200 font-semibold">1</span>
                  <p>Read the explanation once, then scroll back and predict what each code line does.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 font-semibold">2</span>
                  <p>Type the example yourself in the editor. Small edits help the idea stick.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200 font-semibold">3</span>
                  <p>Try the exercise without copying. If it fails, read the error and adjust.</p>
                </div>
              </div>
            </div>

            <LessonContent content={lesson.content} title="" />

            {walkthrough.length > 0 && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Code walkthrough (line by line)</h3>
                <div className="mt-4 space-y-3 text-sm">
                  {walkthrough.map(item => (
                    <div key={`${item.line}-${item.code}`} className="rounded-xl border border-white/10 bg-black/30 p-3">
                      <div className="text-xs text-zinc-500">Line {item.line}</div>
                      <code className="block mt-1 text-emerald-200">{item.code}</code>
                      <p className="mt-2 text-zinc-300">{item.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {exerciseTips.length > 0 && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Hints for the exercise</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {exerciseTips.map((tip, index) => (
                    <li key={`${tip}-${index}`}>• {tip}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Quick reflection</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• What does this lesson help you do that you couldn’t do before?</li>
                <li>• If you had to explain it to a friend, what would you say?</li>
                <li>• Which line of code is most important, and why?</li>
              </ul>
            </div>
            
            {lesson.exercise && (
              <div className="mt-8">
                <Exercise
                  title={lesson.exercise.title}
                  description={lesson.exercise.description}
                  tests={lesson.exercise.tests}
                  code={code}
                  onComplete={() => {
                    if (!isComplete) {
                      markLessonComplete(lessonId, lesson.xp);
                      setIsComplete(true);
                      toast.success(`🎉 Lesson complete! +${lesson.xp} XP`);
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
