'use client'
import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from "next-themes";
import { Sparkles, RefreshCw, FileCode, Play } from 'lucide-react';
import { SelectDemo } from './SelectDropdown';
import { CODE_SNIPPETS } from '@/constant/data';
import Console from './Console';
import { useDispatch } from 'react-redux';
import { setLang } from '@/redux/features/editorSlice';


function CodeEditor() {
    const editorRef = useRef<any>(null);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [language, setLanguage] = useState("javascript")
    const [value, setValue] = useState<string | undefined>(CODE_SNIPPETS["javascript"])
    // Prevent hydration mismatch
    const dispatch = useDispatch()
    useEffect(() => {
        setMounted(true);
    }, []);

    // Captures the editor instance when it loads
    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        editor.focus()
    }

    // Reads the editor text only when requested (e.g., clicking a button)
    function showValue() {
        if (editorRef.current) {
            alert(editorRef.current.getValue());
        }
    }

    const currentTheme = mounted && resolvedTheme === "light" ? "light" : "vs-dark";
    const getTeckStack = (stack: any) => {
        setLanguage(stack)
        setValue(CODE_SNIPPETS[stack])
        dispatch(setLang(stack ?? ""))
    }
    return (
        <div className="flex flex-col flex-1 p-4 md:p-6 bg-white dark:bg-zinc-900/30 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-2xl backdrop-blur-sm mt-6 mb-8 mx-4 sm:mx-6 lg:mx-8 transition-all duration-300">

            {/* Editor Action Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 px-4 py-3 rounded-t-xl transition-all duration-300">
                <div className="flex  min-w-[250px]   items-center gap-2">
                    <FileCode className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">index.js</span>
                    <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                    <SelectDemo value={language} setLang={getTeckStack} />
                </div>

                {/* Run Code CTA */}
                <button className="flex mr-10 items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 hover:from-indigo-600 hover:to-purple-700 hover:shadow-indigo-500/30 active:scale-[0.98] transition-all cursor-pointer">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Run Code</span>
                </button>
                <div className="flex items-center gap-2">
                    <button
                        onClick={showValue}
                        className="flex items-center gap-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 px-3 py-1.5 transition-all cursor-pointer border border-zinc-200 dark:border-zinc-700/50"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>Get Code</span>
                    </button>
                </div>
            </div>

            {/* Monaco Editor Container */}
            <div className="overflow-hidden grid grid-cols-2 rounded-b-xl border-x border-b border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#1e1e1e] p-2 transition-all duration-300">
                <Editor
                    height="55vh"
                    width="100%"
                    theme={currentTheme}
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
                        lineHeight: 22,

                    }}
                    value={value}
                    onChange={value => setValue(value)}

                />
                <Console language={language} editorRef={editorRef}/>

            </div>
        </div>
    );
}

export default CodeEditor;
