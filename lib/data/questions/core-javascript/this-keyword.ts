import { Question } from "@/types/questions";

export const thisKeyword: Question = {
  id: "this-keyword",
  category: "Core JavaScript",
  number: 3,
  title:
    "What is the this keyword in JavaScript, and how does it behave in different contexts?",
  description:
    "The 'this' keyword in JavaScript refers to the object it belongs to and has different values depending on where it is used. Understanding how 'this' behaves in different contexts is crucial for effective JavaScript programming.",
  example: `// Global context
console.log(this); // Window object (in browser)

// Function context (regular function)
function showThis() {
  console.log(this); // Window object (in non-strict mode)
}
showThis();

// Object method
const user = {
  name: 'John',
  greet() {
    console.log(this.name); // 'John' - 'this' refers to user object
  }
};
user.greet();

// Event handler
button.addEventListener('click', function() {
  console.log(this); // button element
});

// Arrow function (inherits 'this' from parent scope)
const obj = {
  name: 'Alice',
  sayHello: function() {
    const arrowFn = () => {
      console.log(this.name); // 'Alice' - inherits 'this' from sayHello
    };
    arrowFn();
  }
};
obj.sayHello();

// Constructor function
function Person(name) {
  this.name = name; // 'this' refers to the new instance
}
const john = new Person('John');
console.log(john.name); // 'John'`,
  bestPractices: [
    "Use arrow functions when you want to preserve the parent scope's 'this'",
    "Use regular functions when you need dynamic 'this' binding",
    "Be explicit about what 'this' refers to in your functions",
    "Avoid using 'this' in nested functions without proper binding",
  ],
  commonMistakes: [
    "Assuming 'this' always refers to the current function or scope",
    "Forgetting that 'this' in regular functions depends on how they're called",
    "Using 'this' in a nested function expecting it to refer to the parent object",
    "Not binding 'this' when passing object methods as callbacks",
  ],
  tips: [
    "Arrow functions don't have their own 'this' and inherit it from the parent scope",
    "Use .bind(), .call(), or .apply() to explicitly control what 'this' refers to",
    "In strict mode, 'this' is undefined in regular functions called without context",
    "Class methods use the same 'this' binding rules as regular functions",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "'this' binding" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Global Context" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Function Context" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Object Method" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Window/Global Object" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Caller (or undefined in strict mode)" },
          position: { x: 250, y: 200 },
        },
        {
          id: "7",
          data: { label: "Object Owner" },
          position: { x: 400, y: 200 },
        },
        {
          id: "8",
          data: { label: "Constructor" },
          position: { x: 550, y: 100 },
        },
        {
          id: "9",
          data: { label: "New Instance" },
          position: { x: 550, y: 200 },
        },
        {
          id: "10",
          data: { label: "Arrow Function" },
          position: { x: 700, y: 100 },
        },
        {
          id: "11",
          data: { label: "Parent Scope" },
          position: { x: 700, y: 200 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e1-8", source: "1", target: "8", type: "smoothstep" },
        { id: "e1-10", source: "1", target: "10", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e8-9", source: "8", target: "9", type: "smoothstep" },
        { id: "e10-11", source: "10", target: "11", type: "smoothstep" },
      ],
    },
  },
};
