export const items: {
  javascript: string;
  typescript: string;
  python: string;
  java: string;
  csharp: string;
  php: string;
} = {
  javascript: "ES2023",
  typescript: "5.8.3",
  python: "3.13.5",
  java: "24",
  csharp: "13.0",
  php: "8.4.10",
};


export const CODE_SNIPPETS = {
  javascript: '\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n',
  typescript: \ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n,
  python: \ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n,
  java: \npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: <?php\n\n$name = 'Alex';\necho $name;\n,
};