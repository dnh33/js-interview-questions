import { Question } from "@/types/questions";

export const closures: Question = {
  id: "closures",
  category: "Core JavaScript",
  number: 6,
  title: "What are closures in JavaScript, and how do they work?",
  description:
    "A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to maintain access to variables from its parent function even after the parent function has finished executing.",
  example: `// Basic closure example
function createCounter() {
  let count = 0;  // Private variable
  
  return function() {
    count += 1;  // Accessing the parent function's variable
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Another example with parameters
function createGreeter(greeting) {
  return function(name) {
    console.log(\`\${greeting}, \${name}!\`);
  };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

sayHello('John'); // "Hello, John!"
sayHi('Sarah');   // "Hi, Sarah!"

// Practical example: creating private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        return 'Insufficient funds';
      }
      balance -= amount;
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
account.withdraw(30);
console.log(account.getBalance()); // 120
// Cannot access balance directly
console.log(account.balance); // undefined`,
  bestPractices: [
    "Use closures to create private variables and methods",
    "Avoid creating closures in loops without proper understanding",
    "Be cautious about memory usage when creating many closures",
    "Use IIFE (Immediately Invoked Function Expressions) for isolation",
    "Be aware of the variables a closure captures to avoid unintended side effects",
  ],
  commonMistakes: [
    "Creating closures in loops incorrectly, leading to unexpected values",
    "Not understanding that closures capture variables by reference, not value",
    "Memory leaks from large data structures being held by closures",
    "Over-complicated closures that make code hard to understand",
    "Forgetting that each closure has its own separate environment",
  ],
  tips: [
    "Closures are widely used in JavaScript patterns like modules and callbacks",
    "They provide a way to implement data privacy and encapsulation",
    "Closures help avoid global namespace pollution",
    "Use closures for function factories and partial application",
    "Modern JavaScript modules provide an alternative way to encapsulate code",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Outer Function" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Inner Function" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Local Variables\nand Parameters" },
          position: { x: 400, y: 0 },
        },
        {
          id: "4",
          data: { label: "Lexical Environment" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Return Inner Function" },
          position: { x: 250, y: 200 },
        },
        {
          id: "6",
          data: { label: "Outer Function Completes" },
          position: { x: 100, y: 200 },
        },
        {
          id: "7",
          data: {
            label: "Inner Function\nStill Has Access\nto Outer Variables",
          },
          position: { x: 250, y: 300 },
        },
      ],
      edges: [
        {
          id: "e1-2",
          source: "1",
          target: "2",
          type: "smoothstep",
          label: "Creates",
        },
        {
          id: "e1-3",
          source: "1",
          target: "3",
          type: "smoothstep",
          label: "Defines",
        },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        {
          id: "e2-4",
          source: "2",
          target: "4",
          type: "smoothstep",
          label: "References",
        },
        { id: "e1-5", source: "1", target: "5", type: "smoothstep" },
        { id: "e5-6", source: "5", target: "6", type: "smoothstep" },
        { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        {
          id: "e4-7",
          source: "4",
          target: "7",
          type: "smoothstep",
          label: "Persists In",
        },
      ],
    },
  },
};
