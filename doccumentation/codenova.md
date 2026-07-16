# 🚀 CodeNova - Feature Roadmap & Technical Specification

Welcome to the **CodeNova** project documentation. CodeNova is a next-generation web-based code editor and development playground. This document outlines the roadmap, features, technical stack, and future capabilities, structured into phased development levels.

---

## 📂 Table of Contents (Markup Directory)
1. [📋 Level 1 (MVP)](#-level-1-mvp)
2. [💡 Level 2 (Interesting Features)](#-level-2-interesting-features)
3. [⚡ Level 3 (Resume Killer Features)](#-level-3-resume-killer-features)
4. [🛠️ Technical Stack](#%EF%B8%8F-technical-stack)
5. [🔮 Future Features](#-future-features)

---

## 📋 Level 1 (MVP)
The baseline version of CodeNova focuses on core editor functionalities, basic code execution, and sandboxing.

### 📌 Core Features Checklist
- [x] **Monaco Editor**: Integrated VS Code-like editor for a rich developer typing experience.
- [x] **JavaScript Code Execution**: Running JS code dynamically on the client side.
- [x] **Console Output Panel**: Capture and show standard logging outputs.
- [x] **Error Panel with Line Number**: Provide clear diagnostic logs for runtime or syntax issues.
- [x] **Input Panel (Prompt Simulation)**: Simulate user input environments (like standard `prompt` interactions).
- [x] **Dark/Light Theme**: Support standard light/dark modes for accessibility and comfort.
- [x] **Copy Code**: One-click copying of code snippets.
- [x] **Download Code (.js)**: Download workspace contents locally as a `.js` script.

### 📐 MVP Interface Layout
```text
-------------------------------------------------
|                                               |
|                 Monaco Editor                 |
|                                               |
-------------------------------------------------
|    Console     |     Errors     |    Input    |
-------------------------------------------------
```

---

## 💡 Level 2 (Interesting Features)
Enhancing the development environment with execution statistics, code formatting, snippet management, and debugging utilities.

### 1. 🤖 AI Error Explain
When an error occurs, CodeNova does not just display raw logs; it provides a readable explanation and suggests a correction.
* **Example Error:** `ReferenceError: user is not defined`
* **💡 Explanation:** You are trying to use `user` before declaring it.
* **Suggested Fix:** 
  ```javascript
  const user = "Swapnil";
  ```

### 2. 📊 Code Complexity Analyzer
Analyzes and displays code statistics to keep code readable and concise.
* **Metrics Tracked:**
  * **Lines of Code (LOC):** e.g., `52`
  * **Functions Count:** e.g., `4`
  * **Loops Count:** e.g., `3`
  * **Variables Count:** e.g., `12`
  * **Difficulty Rating:** `Easy` | `Medium` | `Hard`

### 3. ⏱️ Execution Time
Measures the duration of the execution pipeline accurately.
* **Example:** `Executed in 0.18 ms`

### 4. 💾 Memory Usage Estimator
Estimates the runtime memory footprint of the code execution.
* **Example:** `Memory Used: ~2.3 MB`

### 5. 🧹 Auto Formatter
One-click code layout alignment using the **Prettier** integration.
* **Action Button:** `[ Format Code ]`

### 6. 🔗 Code Share
Allows developers to generate a short, shareable URL to collaborate or showcase code.
* **Generated Link:** `codenova.dev/share/abcd123`
* **Workflow:** A peer opens the link and the exact state/code is immediately loaded.

### 7. 💾 Save Snippets
A collection of reusable, commonly used snippets stored locally or in the cloud.
* **Examples:**
  * `Array Methods`
  * `Promises`
  * `Async Await`

### 8. 🐛 Mini Debugger
Follows the execution flow step-by-step to explain how values transform.
* **Trace Example:**
  * **Step 1:** `let a = 5`
  * **Step 2:** `let b = 10`
  * **Step 3:** `console.log(a + b)`
  * **Output:** `15`

### 9. 🔍 Variable Inspector
Displays active variables and their assigned values post-execution.
* **Inspect Values:**
  * `a` = `5`
  * `b` = `10`
  * `name` = `"Swapnil"`

### 10. 📜 Console History
Maintains a log of previous executions for reference and rollback.
* **History Items:** `Run #1`, `Run #2`, `Run #3`

---

## ⚡ Level 3 (Resume Killer Features)
Advanced features demonstrating deep technical competence in compilers, execution control, and rendering.

### 1. 🌿 Live AST Viewer
Parses client-side code to visualize its Abstract Syntax Tree (AST).
* **Pipeline:** `Code` ➔ `Parser (Babel)` ➔ `AST Tree Visualizer` ➔ `Execution`

### 2. 🎬 Visual Execution (Debugger Animations)
Displays visual tracers line-by-line mimicking professional debuggers.
* **Path Flow:** `Line 1 ✔` ➔ `Line 2 ✔` ➔ `Line 3 ✔`

### 3. 🗂️ Call Stack Viewer
Provides visibility into function execution frames in real time.
* **Stack Visualization:** `main()` ➔ `sum()` ➔ `multiply()`

### 4. 🌐 Scope Visualizer
Categorizes variables by their lexical scopes dynamically.
* **Hierarchies:** `Global Scope` ➔ `Function Scope` ➔ `Block Scope`

### 5. 🛑 Infinite Loop Detection
Detects potential execution-blocking infinite loops and terminates early.
* **Alert Message:** `⚠ Infinite loop detected. Execution stopped.`

### 6. 🚨 Linter
Provides real-time code quality suggestions using ESLint rules.
* **Suggestions:**
  * `Unused variable 'x'`
  * `Missing semicolon`
  * `Prefer const instead of let`

### 7. 🎨 Theme Marketplace
Allows standard and custom syntax highlighting theme selections.
* **Available Themes:**
  * VS Code Dark
  * GitHub
  * Dracula
  * One Dark
  * Tokyo Night

### 8. ⌨️ Keyboard Shortcuts
* `Ctrl + Enter` ➔ Run Code
* `Ctrl + S` ➔ Save Snippet
* `Ctrl + Shift + F` ➔ Format Code

### 9. 📤 Export Result
Exports the output, diagnostics, or snippet in multiple formats:
* PDF
* HTML
* Image (Carbon style)
* Markdown

---

## 🛠️ Technical Stack
* **Framework:** Next.js 15
* **Editor Component:** Monaco Editor (`@monaco-editor/react`)
* **Parser:** Babel Parser (for AST analysis)
* **Formatting Engine:** Prettier
* **Linter Engine:** ESLint
* **Execution Sandbox:** Web Worker (safeguarding main thread)
* **State Management:** Zustand
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion

---

## 🔮 Future Features
* JavaScript + TypeScript support
* HTML/CSS live preview playground
* React live rendering playground
* Python execution support (via Pyodide)
* Java execution sandbox (via WASM/backend engine)
* Collaborative editing (Google Docs style, Yjs/CRDTs)
* AI code review
* AI code generation
* LeetCode-style practice mode
* Version history and code diff visualizer
