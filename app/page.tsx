import CodeEditor from "@/component/CodeEditor";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-zinc-100 font-sans flex flex-col">
      
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <CodeEditor />
      </main>
    </div>
  );
}

