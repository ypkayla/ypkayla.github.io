import { PyodideInterface, loadPyodide } from 'pyodide';

let pyodideInstance: PyodideInterface | null = null;
let loadingPromise: Promise<PyodideInterface> | null = null;

/**
 * Initialize Pyodide runtime (lazy loaded, cached)
 */
export async function initPyodide(): Promise<PyodideInterface> {
  // Guard for SSR/SSG
  if (typeof window === 'undefined') {
    throw new Error('Pyodide can only be loaded in the browser');
  }

  // Return cached instance if already loaded
  if (pyodideInstance) {
    return pyodideInstance;
  }

  // Return ongoing loading promise if already loading
  if (loadingPromise) {
    return loadingPromise;
  }

  // Start loading Pyodide
  loadingPromise = loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full',
  }).then((pyodide) => {
    pyodideInstance = pyodide;
    return pyodide;
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
    const pyodide = await initPyodide();

    // Capture stdout and stderr
    pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
    `);

    // Execute user code
    let result;
    try {
      result = await pyodide.runPythonAsync(code);
    } catch (err) {
      // Get stderr output
      const stderr = pyodide.runPython('sys.stderr.getvalue()');
      const executionTime = performance.now() - startTime;
      
      return {
        output: '',
        error: stderr || (err as Error).message,
        executionTime,
      };
    }

    // Get stdout output
    const stdout = pyodide.runPython('sys.stdout.getvalue()');
    
    // If there's stdout, use it; otherwise use the result
    const output = stdout || (result !== undefined ? String(result) : '');

    const executionTime = performance.now() - startTime;

    return {
      output,
      error: null,
      executionTime,
    };
  } catch (err) {
    const executionTime = performance.now() - startTime;
    return {
      output: '',
      error: (err as Error).message,
      executionTime,
    };
  }
}

/**
 * Install Python package
 */
export async function installPackage(packageName: string): Promise<void> {
  const pyodide = await initPyodide();
  await pyodide.loadPackage(packageName);
}

/**
 * Check if Pyodide is loaded
 */
export function isPyodideLoaded(): boolean {
  return pyodideInstance !== null;
}

/**
 * Validate Python code syntax without executing
 */
export async function validatePythonSyntax(code: string): Promise<{
  valid: boolean;
  error: string | null;
}> {
  try {
    const pyodide = await initPyodide();
    
    pyodide.runPython(`
import ast
try:
    ast.parse('''${code.replace(/'/g, "\\'")}''')
    result = True
    error_msg = None
except SyntaxError as e:
    result = False
    error_msg = str(e)
    `);
    
    const valid = pyodide.runPython('result');
    const error = pyodide.runPython('error_msg');
    
    return {
      valid: Boolean(valid),
      error: error ? String(error) : null,
    };
  } catch (err) {
    return {
      valid: false,
      error: (err as Error).message,
    };
  }
}
