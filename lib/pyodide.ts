// Using Skulpt for Python execution in browser
declare global {
  interface Window {
    Sk: any;
  }
}

let skulptLoaded = false;
let loadingPromise: Promise<void> | null = null;

/**
 * Load Skulpt library from CDN
 */
async function loadSkulpt(): Promise<void> {
  if (typeof window === 'undefined') {
    throw new Error('Skulpt can only be loaded in the browser');
  }

  if (skulptLoaded) {
    return;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = new Promise((resolve, reject) => {
    // Load Skulpt
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js';
    script1.onload = () => {
      // Load Skulpt stdlib
      const script2 = document.createElement('script');
      script2.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js';
      script2.onload = () => {
        skulptLoaded = true;
        resolve();
      };
      script2.onerror = () => reject(new Error('Failed to load Skulpt stdlib'));
      document.head.appendChild(script2);
    };
    script1.onerror = () => reject(new Error('Failed to load Skulpt'));
    document.head.appendChild(script1);
  });

  return loadingPromise;
}

/**
 * Execute Python code and return output
 */
export async function runPythonCode(code: string): Promise<{
  output: string;
  error: string | null;
  executionTime: number;
}> {
  const startTime = performance.now();

  try {
    await loadSkulpt();

    let output = '';
    let error: string | null = null;

    // Configure Skulpt
    window.Sk.configure({
      output: (text: string) => {
        output += text;
      },
      read: (filename: string) => {
        if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles['files'][filename] === undefined) {
          throw new Error(`File not found: '${filename}'`);
        }
        return window.Sk.builtinFiles['files'][filename];
      },
      __future__: window.Sk.python3,
    });

    try {
      // Run the Python code
      await window.Sk.misceval.asyncToPromise(() => {
        return window.Sk.importMainWithBody('<stdin>', false, code, true);
      });
    } catch (err: any) {
      error = err.toString();
    }

    const executionTime = performance.now() - startTime;

    return {
      output: output || '',
      error,
      executionTime,
    };
  } catch (err: any) {
    const executionTime = performance.now() - startTime;
    return {
      output: '',
      error: err.message || 'Failed to execute Python code',
      executionTime,
    };
  }
}

/**
 * Check if Python runtime is loaded
 */
export function isPyodideLoaded(): boolean {
  return skulptLoaded;
}

/**
 * Validate Python code syntax without executing
 */
export async function validatePythonSyntax(code: string): Promise<{
  valid: boolean;
  error: string | null;
}> {
  try {
    await loadSkulpt();
    
    // Try to parse the code
    try {
      window.Sk.parse('<stdin>', code);
      return { valid: true, error: null };
    } catch (err: any) {
      return { valid: false, error: err.toString() };
    }
  } catch (err: any) {
    return { valid: false, error: err.message };
  }
}
