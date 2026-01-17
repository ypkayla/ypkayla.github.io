/// <reference types="node" />

declare module 'pyodide' {
  export interface PyodideInterface {
    runPython(code: string): any;
    runPythonAsync(code: string): Promise<any>;
    loadPackage(packageName: string | string[]): Promise<void>;
    registerJsModule(name: string, module: any): void;
    globals: any;
  }

  export function loadPyodide(config?: {
    indexURL?: string;
    fullStdLib?: boolean;
  }): Promise<PyodideInterface>;
}

declare module 'react-split' {
  import { ComponentType } from 'react';

  interface SplitProps {
    sizes?: number[];
    minSize?: number | number[];
    maxSize?: number | number[];
    expandToMin?: boolean;
    gutterSize?: number;
    gutterAlign?: 'center' | 'start' | 'end';
    snapOffset?: number;
    dragInterval?: number;
    direction?: 'horizontal' | 'vertical';
    cursor?: string;
    gutter?: (index: number, direction: string) => HTMLElement;
    elementStyle?: (
      dimension: string,
      size: number,
      gutterSize: number
    ) => Record<string, string>;
    gutterStyle?: (
      dimension: string,
      gutterSize: number
    ) => Record<string, string>;
    onDrag?: (sizes: number[]) => void;
    onDragStart?: (sizes: number[]) => void;
    onDragEnd?: (sizes: number[]) => void;
    children?: React.ReactNode;
    className?: string;
  }

  const Split: ComponentType<SplitProps>;
  export default Split;
}
