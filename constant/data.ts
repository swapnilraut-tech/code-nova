export const items: {
  javascript: number;
  typescript: number;
  python: number;
  java: number;
  csharp: number;
  php: number;
  c: number;
  cpp: number;
} = {
  "javascript": 63,
  "typescript": 74,
  "python": 71,
  "java": 62,
  "csharp": 51,
  "php": 68,
  "c": 50,
  "cpp": 54,
};

export const CODE_SNIPPETS: Record<string, string> = {
  javascript:
    '// Write your JavaScript code here\n\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n',
  typescript:
    '// Write your TypeScript code here\n\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n',
  python:
    '# Write your Python code here\n\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n',
  java: '// Write your Java code here\n\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n',
  csharp:
    '// Write your C# code here\n\nusing System;\n\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n// Write your PHP code here\n\n$name = 'Alex';\necho $name;\n",
};
