import { Question } from "@/types/questions";

export const templateLiterals: Question = {
  id: "template-literals",
  category: "Fancy Features in JavaScript",
  number: 18,
  title: "What are template literals in JavaScript, and how do they work?",
  description:
    "Template literals are a modern JavaScript feature introduced in ES6 that allows for more flexible string formatting, multi-line strings, and string interpolation. They are defined using backticks (`) rather than single or double quotes, and allow for embedded expressions using the ${expression} syntax.",
  example: `// Basic template literal
const name = 'JavaScript';
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // "Hello, JavaScript!"

// Multi-line strings (preserves line breaks)
const multiLine = \`This is a string
that spans across
multiple lines.\`;
console.log(multiLine);
/*
This is a string
that spans across
multiple lines.
*/

// Expression evaluation
const a = 10;
const b = 5;
console.log(\`The sum of \${a} and \${b} is \${a + b}.\`); // "The sum of 10 and 5 is 15."

// Using template literals with functions
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    // If we have a value for this position
    const value = values[i - 1] ? \`<strong>\${values[i - 1]}</strong>\` : '';
    return \`\${result}\${str}\${value}\`;
  });
}

const x = 'Template';
const y = 'Literals';
const output = highlight\`\${x} \${y} are powerful!\`;
console.log(output); // "Template <strong>Literals</strong> are powerful!"

// Using template literals for creating HTML
const user = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

const userCard = \`
  <div class="user-card">
    <h2>\${user.name}</h2>
    <p>Age: \${user.age}</p>
    <p>Email: \${user.email}</p>
    \${user.age >= 18 ? '<span class="badge">Adult</span>' : ''}
  </div>
\`;

console.log(userCard);

// Nesting template literals
const nestedTemplate = \`
  Outer template with \${\`nested \${name} template\`}
\`;
console.log(nestedTemplate); // "Outer template with nested JavaScript template"`,
  bestPractices: [
    "Use template literals for string interpolation instead of concatenation",
    "Leverage multi-line capabilities for more readable HTML or SQL strings",
    "Use tagged templates for advanced string processing needs",
    "Keep expressions within interpolations simple for better readability",
    "Escape backticks when needed with the backslash character",
  ],
  commonMistakes: [
    "Trying to use template literal syntax with single or double quotes",
    "Forgetting that any JavaScript expression can be used inside ${} interpolation",
    "Neglecting to escape backticks when they are needed as part of the string",
    "Overcomplicating expressions inside interpolations, reducing code readability",
    "Not realizing that template literals maintain all whitespace, including indentation",
  ],
  tips: [
    "Template literals work well with destructuring for cleaner variable references",
    "Tagged templates can be used for localization, sanitization, or styling",
    "They're especially useful for generating HTML or SQL queries with variables",
    "Modern code formatters can help maintain proper indentation in multi-line template literals",
    "Use template literals with array methods like map() for powerful string transformations",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Template Literals" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "String Interpolation\n${expression}" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Multi-line\nStrings" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Tagged\nTemplates" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "JavaScript\nExpressions\nEvaluation" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Preserves\nWhitespace" },
          position: { x: 250, y: 200 },
        },
        {
          id: "7",
          data: { label: "Custom String\nProcessing" },
          position: { x: 400, y: 200 },
        },
        {
          id: "8",
          data: { label: "HTML\nGeneration" },
          position: { x: 175, y: 300 },
        },
        {
          id: "9",
          data: { label: "Advanced\nString\nManipulation" },
          position: { x: 325, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e5-8", source: "5", target: "8", type: "smoothstep" },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
        { id: "e7-9", source: "7", target: "9", type: "smoothstep" },
      ],
    },
  },
};
