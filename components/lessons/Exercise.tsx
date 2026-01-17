'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { runPythonCode } from '@/lib/pythonRunner';
import toast from 'react-hot-toast';

export interface ExerciseTest {
  input?: string;
  expectedOutput?: string;
  minOutputLength?: number;
  minOutputLines?: number;
  description: string;
  testCode?: string;
}

interface ExerciseProps {
  title: string;
  description: string;
  tests: ExerciseTest[];
  onComplete?: () => void;
  code?: string;
}

export function Exercise({ title, description, tests, onComplete, code }: ExerciseProps) {
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkSolution = async (solutionCode: string) => {
    if (!solutionCode.trim()) {
      toast.error('Please write some code first!');
      return;
    }

    setIsChecking(true);
    const results: { passed: boolean; message: string }[] = [];

    try {
      for (const test of tests) {
        let testPassed = false;
        let message = '';

        if (test.minOutputLength !== undefined) {
          const result = await runPythonCode(solutionCode);

          if (result.error) {
            testPassed = false;
            message = `Error: ${result.error}`;
          } else {
            const outputLength = result.output.trim().length;
            testPassed = outputLength >= test.minOutputLength;
            message = testPassed
              ? test.description
              : `Expected output length >= ${test.minOutputLength}, got ${outputLength}`;
          }
        } else if (test.minOutputLines !== undefined) {
          const result = await runPythonCode(solutionCode);

          if (result.error) {
            testPassed = false;
            message = `Error: ${result.error}`;
          } else {
            const lines = result.output.split('\n').filter(line => line.trim().length > 0);
            testPassed = lines.length >= test.minOutputLines;
            message = testPassed
              ? test.description
              : `Expected at least ${test.minOutputLines} lines, got ${lines.length}`;
          }
        } else if (test.testCode) {
          // Run custom test code
          const testScript = `
${solutionCode}

${test.testCode}
          `;
          
          const result = await runPythonCode(testScript);
          
          if (result.error) {
            testPassed = false;
            message = `Failed: ${result.error}`;
          } else if (result.output.trim() === 'PASS') {
            testPassed = true;
            message = test.description;
          } else {
            testPassed = false;
            message = `Failed: ${test.description} - ${result.output}`;
          }
        } else if (test.expectedOutput) {
          // Simple output comparison
          const result = await runPythonCode(solutionCode);
          
          if (result.error) {
            testPassed = false;
            message = `Error: ${result.error}`;
          } else {
            const actualOutput = result.output.trim();
            const expectedOutput = test.expectedOutput.trim();
            testPassed = actualOutput === expectedOutput;
            message = testPassed 
              ? test.description 
              : `Expected: "${expectedOutput}", Got: "${actualOutput}"`;
          }
        }

        results.push({ passed: testPassed, message });
      }

      setTestResults(results);

      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        toast.success('🎉 All tests passed! Excellent work!');
        onComplete?.();
      } else {
        toast.error('Some tests failed. Keep trying!');
      }
    } catch {
      toast.error('Failed to check solution');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <AlertCircle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-zinc-400">{description}</p>
        </div>
      </div>

      {testResults.length > 0 && (
        <div className="mt-4 space-y-2">
          {testResults.map((result, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 p-3 rounded-md ${
                result.passed 
                  ? 'bg-green-950/30 border border-green-800/50' 
                  : 'bg-red-950/30 border border-red-800/50'
              }`}
            >
              {result.passed ? (
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
              )}
              <span className={`text-sm ${result.passed ? 'text-green-300' : 'text-red-300'}`}>
                {result.message}
              </span>
            </div>
          ))}
        </div>
      )}

      {code !== undefined && (
        <div className="mt-4">
          <button
            onClick={() => checkSolution(code)}
            disabled={isChecking || !code.trim()}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-white font-medium transition-colors"
          >
            {isChecking ? 'Checking...' : 'Check Solution'}
          </button>
        </div>
      )}
    </div>
  );
}

// Export the check function so it can be called from parent component
export function createExerciseChecker(exercise: ExerciseProps) {
  return async (code: string): Promise<boolean> => {
    const results: boolean[] = [];

    for (const test of exercise.tests) {
      if (test.testCode) {
        const testScript = `${code}\n\n${test.testCode}`;
        const result = await runPythonCode(testScript);
        results.push(!result.error && result.output.trim() === 'PASS');
      } else if (test.expectedOutput) {
        const result = await runPythonCode(code);
        results.push(!result.error && result.output.trim() === test.expectedOutput.trim());
      }
    }

    return results.every(r => r);
  };
}
