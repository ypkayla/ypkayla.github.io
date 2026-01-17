'use client';

import React from 'react';
import { Terminal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OutputConsoleProps {
  output: string;
  error: string | null;
  executionTime?: number;
  onClear?: () => void;
}

export function OutputConsole({ 
  output, 
  error, 
  executionTime,
  onClear 
}: OutputConsoleProps) {
  const hasContent = output || error;

  return (
    <div className="flex flex-col h-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium text-zinc-300">Output</span>
          {executionTime !== undefined && (
            <span className="text-xs text-zinc-500">
              ({executionTime.toFixed(2)}ms)
            </span>
          )}
        </div>
        {hasContent && onClear && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-6 px-2 text-zinc-400 hover:text-zinc-100"
          >
            <X className="h-3 w-3" />
            Clear
          </Button>
        )}
      </div>

      {/* Console Output */}
      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        {!hasContent && (
          <div className="text-zinc-600 italic">
            Run your code to see output here...
          </div>
        )}
        
        {error && (
          <div className="text-red-400 whitespace-pre-wrap">
            <span className="font-bold">Error:</span>
            {'\n'}
            {error}
          </div>
        )}
        
        {output && !error && (
          <div className="text-green-400 whitespace-pre-wrap">
            {output}
          </div>
        )}
      </div>
    </div>
  );
}
