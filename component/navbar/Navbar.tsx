"use client";

import React, { useState } from "react";
import { Terminal, Play, Share2, Moon, Sun, Menu, X, Settings, HelpCircle, Code } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/20">
                        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-950">
                            <Terminal className="h-5 w-5 text-indigo-400" />
                        </div>
                    </div>
                    <a href="/" className="group flex items-center gap-1.5">
                        <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-zinc-200">
                            Code<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Nova</span>
                        </span>
                        <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-400 border border-indigo-500/20">
                            v1.0
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="/" className="text-sm font-medium text-indigo-400 transition-colors">
                        Editor
                    </a>
                    <a href="/docs" className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">
                        Docs
                    </a>
                    <a href="/snippets" className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">
                        Snippets
                    </a>
                    <a href="/about" className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">
                        About
                    </a>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Share Button */}
                    <button className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                    </button>

                    {/* Theme Toggle */}
                    <button 
                        onClick={() => setIsDarkMode(!isDarkMode)} 
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
                    </button>

                    {/* Settings */}
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
                        <Settings className="h-4 w-4" />
                    </button>
                    
                    {/* Run Code CTA */}
                    <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 hover:from-indigo-600 hover:to-purple-700 hover:shadow-indigo-500/30 active:scale-[0.98] transition-all cursor-pointer">
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Run Code</span>
                    </button>
                </div>

                {/* Mobile Menu Toggler */}
                <div className="flex md:hidden items-center gap-2">
                    <button 
                        onClick={() => setIsDarkMode(!isDarkMode)} 
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all"
                    >
                        {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col gap-3">
                        <a href="/" className="rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-indigo-400">
                            Editor
                        </a>
                        <a href="/docs" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">
                            Docs
                        </a>
                        <a href="/snippets" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">
                            Snippets
                        </a>
                        <a href="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">
                            About
                        </a>
                    </nav>
                    <div className="flex flex-col gap-2 pt-2 border-t border-zinc-900">
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800">
                            <Share2 className="h-4 w-4" />
                            <span>Share Workspace</span>
                        </button>
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-2 text-sm font-semibold text-white">
                            <Play className="h-4 w-4 fill-current" />
                            <span>Run Code</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}