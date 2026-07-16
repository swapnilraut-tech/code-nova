"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Play, Share2, Moon, Sun, Menu, X, Settings, HelpCircle, Code } from "lucide-react";
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export function ModeToggle() {
    const { setTheme } = useTheme()

  
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all cursor-pointer">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
   
    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#16161a] transition-colors duration-300">
            <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/20">
                        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-zinc-950">
                            <Terminal className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                    </div>
                    <Link href="/" className="group flex items-center gap-1.5">
                        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                            Code<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Nova</span>
                        </span>
                        <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            v1.0
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors">
                        Editor
                    </Link>
                    <Link href="/docs" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                        Docs
                    </Link>
                    <Link href="/snippets" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                        Snippets
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                        About
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Share Button */}
                    <button className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-all cursor-pointer">
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                    </button>

                    {/* Theme Toggle */}
                    <ModeToggle />

                    {/* Settings */}
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all cursor-pointer">
                        <Settings className="h-4 w-4" />
                    </button>

                    {/* Clerk Authentication */}
                    <Show when="signed-out">
                        <SignInButton mode="modal">
                            <button className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors px-2 py-1.5">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="rounded-lg bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 text-xs font-semibold text-white cursor-pointer transition-all shadow-md shadow-indigo-500/10">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </Show>
                        <SignInButton>

                        <UserButton  />
                        </SignInButton>

                    {/* Run Code CTA */}
                    <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 hover:from-indigo-600 hover:to-purple-700 hover:shadow-indigo-500/30 active:scale-[0.98] transition-all cursor-pointer">
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Run Code</span>
                    </button>
                </div>

                {/* Mobile Menu Toggler */}
                <div className="flex md:hidden items-center gap-2">
                    <ModeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col gap-3">
                        <Link href="/" className="rounded-lg bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            Editor
                        </Link>
                        <Link href="/docs" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                            Docs
                        </Link>
                        <Link href="/snippets" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                            Snippets
                        </Link>
                        <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                            About
                        </Link>
                    </nav>
                    <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            <Share2 className="h-4 w-4" />
                            <span>Share Workspace</span>
                        </button>
                        <button  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-2 text-sm font-semibold text-white">
                            <Play className="h-4 w-4 fill-current" />
                            <span>Run Code</span>
                        </button>
                    </div>

                    <Show when="signed-out">
                        <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                            <SignInButton mode="modal">
                                <button className="flex w-full items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-700 cursor-pointer">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </div>
                    </Show>
                    <Show when="signed-in">
                        <div className="flex items-center gap-3 px-3 py-2 border-t border-zinc-100 dark:border-zinc-900">
                            <UserButton />
                            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Profile Settings</span>
                        </div>
                    </Show>

                </div>
            )}
        </header>
    );
}
