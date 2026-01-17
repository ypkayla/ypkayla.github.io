'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
import { getEditorSettings, saveEditorSettings, type EditorSettings } from '@/lib/storage';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  height?: string;
  language?: string;
}

export function CodeEditor({ 
  value, 
  onChange, 
  readOnly = false, 
  height = '100%',
  language = 'python' 
}: CodeEditorProps) {
  const [settings, setSettings] = useState<EditorSettings>(() => getEditorSettings());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = getEditorSettings();
    setSettings(stored);
  }, []);

  const handleEditorChange = useCallback((value: string | undefined) => {
    onChange(value || '');
  }, [onChange]);

  const handleEditorDidMount = () => {
    setIsReady(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateSettings = (newSettings: Partial<EditorSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    saveEditorSettings(updated);
  };

  return (
    <div className="relative w-full" style={{ height }}>
      <Editor
        height={height}
        language={language}
        theme={settings.theme}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        loading={
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
        options={{
          readOnly,
          fontSize: settings.fontSize,
          minimap: { enabled: settings.minimap },
          wordWrap: settings.wordWrap ? 'on' : 'off',
          tabSize: settings.tabSize,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
          suggestOnTriggerCharacters: true,
          quickSuggestions: true,
          parameterHints: { enabled: true },
          acceptSuggestionOnEnter: 'on',
          autoIndent: 'full',
          formatOnType: true,
          formatOnPaste: true,
        }}
      />
    </div>
  );
}
