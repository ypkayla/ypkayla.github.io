'use client';

import React, { useState } from 'react';
import { Play, Loader2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { runPythonCode } from '@/lib/pyodide';
import toast from 'react-hot-toast';

interface RunButtonProps {
  code: string;
  onOutput: (output: string, error: string | null, executionTime: number) => void;
  onReset?: () => void;
  disabled?: boolean;
}

export function RunButton({ code, onOutput, onReset, disabled = false }: RunButtonProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  const handleRun = async () => {
    if (!code.trim()) {
      toast.error('Please write some code first!');
      return;
    }

    setIsRunning(true);
    
    try {
      // Show initialization message on first run
      if (!isInitializing) {
        setIsInitializing(true);
        const loadingToast = toast.loading('Loading Python environment...');
        
        const result = await runPythonCode(code);
        
        toast.dismiss(loadingToast);
        setIsInitializing(false);
        
        if (result.error) {
          toast.error('Execution failed');
        } else {
          toast.success('Code executed successfully!');
        }
        
        onOutput(result.output, result.error, result.executionTime);
      } else {
        const result = await runPythonCode(code);
        
        if (result.error) {
          toast.error('Execution failed');
        } else {
          toast.success('Code executed successfully!');
        }
        
        onOutput(result.output, result.error, result.executionTime);
      }
    } catch (err) {
      toast.error('Failed to run code');
      onOutput('', (err as Error).message, 0);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleRun}
        disabled={disabled || isRunning}
        className="bg-green-600 hover:bg-green-700 text-white"
        size="lg"
      >
        {isRunning || isInitializing ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {isInitializing ? 'Initializing...' : 'Running...'}
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Run Code
          </>
        )}
      </Button>
      
      {onReset && (
        <Button
          onClick={onReset}
          variant="outline"
          size="lg"
          disabled={isRunning}
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      )}
    </div>
  );
}
