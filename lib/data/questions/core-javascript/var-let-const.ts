import { Question } from "@/types/questions";

export const varLetConst: Question = {
  id: "var-let-const",
  category: "Core JavaScript",
  number: 1,
  title: "What is the difference between var, let, and const in JavaScript?",
  description:
    "Understanding variable declarations in JavaScript and their scoping rules is fundamental. Each keyword (var, let, const) has unique characteristics that affect how variables behave.",
  example: `// var example - function scoped
function example() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

// let example - block scoped
function example2() {
  let y = 1;
  if (true) {
    let y = 2;  // different variable
    console.log(y);  // 2
  }
  console.log(y);  // 1
}

// const example - block scoped and immutable
const z = { name: 'John' };
z.name = 'Jane';  // OK - object properties can be modified
// z = { name: 'Jane' };  // Error - reassignment not allowed`,
  bestPractices: [
    "Use const by default for all variables that won't be reassigned",
    "Use let for variables that need to be reassigned",
    "Avoid var in modern JavaScript code",
    "Declare variables at the top of their scope",
  ],
  commonMistakes: [
    "Using var and encountering unexpected hoisting behavior",
    "Trying to reassign const variables",
    "Not understanding temporal dead zone with let/const",
    "Assuming const makes objects completely immutable",
  ],
  tips: [
    "const doesn't make objects immutable, only prevents reassignment",
    "let and const are hoisted but not initialized (temporal dead zone)",
    "Use block scope to your advantage for better encapsulation",
    "Consider using Object.freeze() for truly immutable objects",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Variable Declaration" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "var" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "let" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "const" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Function Scoped" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Block Scoped" },
          position: { x: 250, y: 200 },
        },
        {
          id: "7",
          data: { label: "Block Scoped\nImmutable Binding" },
          position: { x: 400, y: 200 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
      ],
    },
  },
};
