import CodeEditor from "@/component/CodeEditor";
import { SelectDemo } from "@/component/SelectDropdown";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 dark:bg-[#0d1117] dark:text-zinc-100 font-sans flex flex-col transition-colors duration-300">
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <CodeEditor />
        <SelectDemo />
      </main>
    </div>
  );
}

