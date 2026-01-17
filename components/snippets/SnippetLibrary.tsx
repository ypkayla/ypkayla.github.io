'use client';

import React, { useState, useEffect } from 'react';
import { Search, Star, Trash2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  saveSnippet, 
  getAllSnippets, 
  deleteSnippet, 
  updateSnippet,
  type CodeSnippet 
} from '@/lib/storage';
import toast from 'react-hot-toast';

interface SnippetLibraryProps {
  onSelectSnippet?: (code: string) => void;
}

export function SnippetLibrary({ onSelectSnippet }: SnippetLibraryProps) {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSnippets();
  }, []);

  const loadSnippets = async () => {
    setIsLoading(true);
    try {
      const allSnippets = await getAllSnippets();
      setSnippets(allSnippets);
    } catch {
      toast.error('Failed to load snippets');
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSaveSnippet = async (code: string, title: string) => {
    try {
      await saveSnippet({
        title,
        code,
        language: 'python',
        tags: [],
        isFavorite: false,
      });
      await loadSnippets();
      toast.success('Snippet saved!');
    } catch {
      toast.error('Failed to save snippet');
    }
  };

  const handleDeleteSnippet = async (id: string) => {
    try {
      await deleteSnippet(id);
      await loadSnippets();
      toast.success('Snippet deleted');
    } catch {
      toast.error('Failed to delete snippet');
    }
  };

  const handleToggleFavorite = async (snippet: CodeSnippet) => {
    try {
      await updateSnippet(snippet.id, {
        isFavorite: !snippet.isFavorite,
      });
      await loadSnippets();
    } catch {
      toast.error('Failed to update snippet');
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  const filteredSnippets = snippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    snippet.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800">
        <h3 className="text-lg font-semibold text-white mb-3">Code Snippets</h3>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Snippet List */}
      <div className="max-h-96 overflow-y-auto">
        {isLoading ? (
          <div className="p-8 text-center text-zinc-500">
            Loading snippets...
          </div>
        ) : filteredSnippets.length === 0 ? (
          <div className="p-8 text-center text-zinc-500">
            {searchQuery ? 'No snippets found' : 'No saved snippets yet'}
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {filteredSnippets.map((snippet) => (
              <div key={snippet.id} className="p-4 hover:bg-zinc-800/50 transition">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-medium text-white">{snippet.title}</h4>
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleToggleFavorite(snippet)}
                      className="h-7 w-7 p-0"
                    >
                      <Star 
                        className={`h-4 w-4 ${
                          snippet.isFavorite 
                            ? 'fill-yellow-500 text-yellow-500' 
                            : 'text-zinc-500'
                        }`} 
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(snippet.code)}
                      className="h-7 w-7 p-0"
                    >
                      <Copy className="h-4 w-4 text-zinc-500" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteSnippet(snippet.id)}
                      className="h-7 w-7 p-0"
                    >
                      <Trash2 className="h-4 w-4 text-zinc-500 hover:text-red-500" />
                    </Button>
                  </div>
                </div>
                
                <pre className="text-xs text-zinc-400 bg-zinc-950 p-2 rounded overflow-x-auto mb-2">
                  <code>{snippet.code.substring(0, 100)}...</code>
                </pre>
                
                {onSelectSnippet && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onSelectSnippet(snippet.code)}
                    className="text-xs"
                  >
                    Use This Code
                  </Button>
                )}
                
                <p className="text-xs text-zinc-600 mt-2">
                  {new Date(snippet.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
