'use client'
import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Sparkles, RefreshCw, FileCode } from 'lucide-react';

function CodeEditor() {
    const editorRef = useRef<any>(null);

    // Captures the editor instance when it loads
    function handleEditorDidMount(editor:any, monaco:any) {
        editorRef.current = editor;
    }

    // Reads the editor text only when requested (e.g., clicking a button)
    function showValue() {
        if (editorRef.current) {
            alert(editorRef.current.getValue());
        }
    }

    return (
        <div className="flex flex-col flex-1 p-4 md:p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/80 shadow-2xl backdrop-blur-sm mt-6 mb-8 mx-4 sm:mx-6 lg:mx-8">
            
            {/* Editor Action Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/60 px-4 py-3 rounded-t-xl">
                <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium text-zinc-300">index.js</span>
                    <span className="h-2 w-2 rounded-full bg-zinc-600"></span>
                    <span className="text-xs text-zinc-500">JavaScript</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <button 
                        onClick={showValue} 
                        className="flex items-center gap-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 px-3 py-1.5 transition-all cursor-pointer border border-zinc-700/50"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Get Code</span>
                    </button>
                </div>
            </div>

            {/* Monaco Editor Container */}
            <div className="overflow-hidden rounded-b-xl border-x border-b border-zinc-800/80 bg-[#1e1e1e] p-2">
                <Editor
                    height="55vh"
                    width="100%"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue="// Type your JavaScript code here&#10;console.log('Hello CodeNova!');&#10;&#10;const numbers = [1, 2, 3, 4, 5];&#10;const doubled = numbers.map(n => n * 2);&#10;console.log(doubled);"
                    onMount={handleEditorDidMount}
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        automaticLayout: true,
                        scrollbar: {
                            vertical: 'visible',
                            horizontal: 'visible'
                        },
                        fontFamily: 'var(--font-geist-mono), monospace',
                        lineHeight: 22
                    }}
                />
            </div>
        </div>
    );
}

export default CodeEditor;