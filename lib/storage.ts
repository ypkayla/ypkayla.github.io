/**
 * LocalStorage and IndexedDB utilities for progress tracking and code snippets
 */

import { get, set, del, keys } from 'idb-keyval';

// Types
export interface UserProgress {
  completedLessons: string[]; // lesson IDs
  currentCourse: string | null;
  currentLesson: string | null;
  startedAt: string;
  lastAccessedAt: string;
  totalXP: number;
  streak: number;
  lastActiveDate: string;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: string;
  code: string;
  attempts: number;
  passed: boolean;
}

export interface CodeSnippet {
  id: string;
  title: string;
  code: string;
  language: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
}

// LocalStorage keys
const STORAGE_KEYS = {
  USER_PROGRESS: 'python_learning_progress',
  LESSON_CODE: 'python_lesson_code_',
  THEME: 'python_learning_theme',
  EDITOR_SETTINGS: 'python_editor_settings',
} as const;

// User Progress Management
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    // Return default during SSR
    return {
      completedLessons: [],
      currentCourse: null,
      currentLesson: null,
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
      totalXP: 0,
      streak: 0,
      lastActiveDate: new Date().toISOString(),
    };
  }
  
  const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Default progress
  const defaultProgress: UserProgress = {
    completedLessons: [],
    currentCourse: null,
    currentLesson: null,
    startedAt: new Date().toISOString(),
    lastAccessedAt: new Date().toISOString(),
    totalXP: 0,
    streak: 0,
    lastActiveDate: new Date().toISOString(),
  };
  
  saveUserProgress(defaultProgress);
  return defaultProgress;
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
  }
}

export function markLessonComplete(lessonId: string, xpEarned: number = 10): void {
  if (typeof window === 'undefined') return;
  const progress = getUserProgress();
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.totalXP += xpEarned;
    progress.lastAccessedAt = new Date().toISOString();
    
    // Update streak
    const today = new Date().toDateString();
    const lastActive = new Date(progress.lastActiveDate).toDateString();
    
    if (today !== lastActive) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (yesterday.toDateString() === lastActive) {
        progress.streak += 1;
      } else {
        progress.streak = 1;
      }
      
      progress.lastActiveDate = new Date().toISOString();
    }
    
    saveUserProgress(progress);
  }
}

export function isLessonComplete(lessonId: string): boolean {
  if (typeof window === 'undefined') return false;
  const progress = getUserProgress();
  return progress.completedLessons.includes(lessonId);
}

export function setCurrentLesson(courseId: string, lessonId: string): void {
  if (typeof window === 'undefined') return;
  const progress = getUserProgress();
  progress.currentCourse = courseId;
  progress.currentLesson = lessonId;
  progress.lastAccessedAt = new Date().toISOString();
  saveUserProgress(progress);
}

// Lesson Code Management
export function saveLessonCode(lessonId: string, code: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.LESSON_CODE + lessonId, code);
  }
}

export function getLessonCode(lessonId: string): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(STORAGE_KEYS.LESSON_CODE + lessonId) || '';
}

export function clearLessonCode(lessonId: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.LESSON_CODE + lessonId);
  }
}

// Editor Settings
export interface EditorSettings {
  theme: 'vs-dark' | 'light';
  fontSize: number;
  minimap: boolean;
  wordWrap: boolean;
  tabSize: number;
}

export function getEditorSettings(): EditorSettings {
  if (typeof window === 'undefined') {
    return {
      theme: 'vs-dark',
      fontSize: 14,
      minimap: false,
      wordWrap: true,
      tabSize: 4,
    };
  }
  
  const stored = localStorage.getItem(STORAGE_KEYS.EDITOR_SETTINGS);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return {
    theme: 'vs-dark',
    fontSize: 14,
    minimap: false,
    wordWrap: true,
    tabSize: 4,
  };
}

export function saveEditorSettings(settings: EditorSettings): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.EDITOR_SETTINGS, JSON.stringify(settings));
  }
}

// Code Snippets (IndexedDB)
export async function saveSnippet(snippet: Omit<CodeSnippet, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const id = `snippet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const fullSnippet: CodeSnippet = {
    ...snippet,
    id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  await set(id, fullSnippet);
  return id;
}

export async function getSnippet(id: string): Promise<CodeSnippet | undefined> {
  return await get<CodeSnippet>(id);
}

export async function getAllSnippets(): Promise<CodeSnippet[]> {
  const allKeys = await keys();
  const snippetKeys = allKeys.filter(key => String(key).startsWith('snippet_'));
  
  const snippets: CodeSnippet[] = [];
  for (const key of snippetKeys) {
    const snippet = await get<CodeSnippet>(key);
    if (snippet) {
      snippets.push(snippet);
    }
  }
  
  return snippets.sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export async function updateSnippet(id: string, updates: Partial<CodeSnippet>): Promise<void> {
  const snippet = await getSnippet(id);
  if (snippet) {
    const updated = {
      ...snippet,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    await set(id, updated);
  }
}

export async function deleteSnippet(id: string): Promise<void> {
  await del(id);
}

export async function searchSnippets(query: string): Promise<CodeSnippet[]> {
  const allSnippets = await getAllSnippets();
  const lowerQuery = query.toLowerCase();
  
  return allSnippets.filter(snippet =>
    snippet.title.toLowerCase().includes(lowerQuery) ||
    snippet.code.toLowerCase().includes(lowerQuery) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
