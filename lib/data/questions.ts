import { Category, Question } from "@/types/questions";

// Get all questions for command menu
export function getAllQuestions(): Question[] {
  return questions;
}

const questions: Question[] = [
  {
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
  },
  {
    id: "hoisting",
    category: "Core JavaScript",
    number: 2,
    title: "What is hoisting in JavaScript?",
    description:
      "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. However, only declarations are hoisted, not initializations.",
    example: `// Function declarations are fully hoisted
console.log(sayHello()); // "Hello!"
function sayHello() {
  return "Hello!";
}

// var declarations are hoisted but initialized as undefined
console.log(x); // undefined
var x = 5;

// let/const declarations are hoisted but not initialized (temporal dead zone)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;`,
    bestPractices: [
      "Always declare variables at the top of their scope",
      "Use const and let instead of var to avoid hoisting issues",
      "Declare functions before using them",
      "Be aware of the temporal dead zone with let/const",
    ],
    commonMistakes: [
      "Relying on hoisting for variable declarations",
      "Not understanding the difference between declaration and initialization",
      "Assuming let/const variables are not hoisted",
      "Using var and encountering unexpected behavior",
    ],
    tips: [
      "Function declarations are fully hoisted, including their implementation",
      "Function expressions are not hoisted",
      "The temporal dead zone exists from the start of the block until the declaration",
      "Use strict mode to catch potential hoisting-related issues",
    ],
    visualization: {
      type: "mermaid",
      data: {
        chart: `graph TD
    A[Start] --> B[Hoisting Phase]
    B --> C[Execution Phase]
    B --> D[Function Declarations]
    B --> E[Variable Declarations]
    D --> F[Move to Top]
    E --> G[Initialize as undefined]
    C --> H[Code Execution]
    H --> I[Assign Values]`,
      },
    },
  },
  {
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
  },
  {
    id: "promises",
    category: "Core JavaScript",
    number: 4,
    title:
      "What is a JavaScript promise, and how does it handle asynchronous code?",
    description:
      "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It's used to handle asynchronous operations more elegantly than traditional callbacks.",
    example: `// Creating a new Promise
const fetchData = new Promise((resolve, reject) => {
  // Simulating an API call with setTimeout
  setTimeout(() => {
    const success = true; // Change to false to trigger rejection
    
    if (success) {
      resolve({ data: 'This is the fetched data' });
    } else {
      reject(new Error('Failed to fetch data'));
    }
  }, 2000);
});

// Using the Promise
fetchData
  .then(result => {
    console.log('Success:', result.data);
    return result.data;
  })
  .then(data => {
    console.log('Processing:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Operation completed (success or failure)');
  });

// Combining multiple promises
const promise1 = Promise.resolve('First');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 1000));
const promise3 = fetch('https://api.example.com/data');

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log('All promises resolved:', values);
  })
  .catch(error => {
    console.error('At least one promise rejected:', error);
  });`,
    bestPractices: [
      "Always include error handling with .catch() or try/catch with async/await",
      "Chain promises using .then() instead of nesting them",
      "Use Promise.all() for multiple independent promises that can run in parallel",
      "Keep promise chains flat to avoid the 'pyramid of doom'",
      "Use finally() for cleanup operations that should run regardless of outcome",
    ],
    commonMistakes: [
      "Forgetting to handle rejection cases",
      "Not returning values in .then() handlers, breaking the chain",
      "Creating unnecessary nested promise chains",
      "Not understanding that .then() always returns a new Promise",
      "Using Promise.all() when any promise failure should cancel all operations",
    ],
    tips: [
      "A Promise is always in one of three states: pending, fulfilled, or rejected",
      "Use Promise.race() when you need the result of the first promise to complete",
      "Promise.allSettled() waits for all promises to settle regardless of outcome",
      "Async/await is syntactic sugar over promises that makes code look synchronous",
      "Create wrapper promises to add timeouts to operations that might hang",
    ],
    visualization: {
      type: "flow",
      data: {
        nodes: [
          {
            id: "1",
            type: "input",
            data: { label: "Promise Creation" },
            position: { x: 250, y: 0 },
          },
          {
            id: "2",
            data: { label: "Pending" },
            position: { x: 250, y: 100 },
          },
          {
            id: "3",
            data: { label: "Resolved" },
            position: { x: 150, y: 200 },
          },
          {
            id: "4",
            data: { label: "Rejected" },
            position: { x: 350, y: 200 },
          },
          {
            id: "5",
            data: { label: ".then()" },
            position: { x: 150, y: 300 },
          },
          {
            id: "6",
            data: { label: ".catch()" },
            position: { x: 350, y: 300 },
          },
          {
            id: "7",
            data: { label: ".finally()" },
            position: { x: 250, y: 400 },
          },
        ],
        edges: [
          { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
          {
            id: "e2-3",
            source: "2",
            target: "3",
            type: "smoothstep",
            label: "resolve()",
          },
          {
            id: "e2-4",
            source: "2",
            target: "4",
            type: "smoothstep",
            label: "reject()",
          },
          { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
          { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
          { id: "e5-7", source: "5", target: "7", type: "smoothstep" },
          { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        ],
      },
    },
  },
  {
    id: "event-loop",
    category: "Core JavaScript",
    number: 5,
    title:
      "What is the event loop, and how does JavaScript handle asynchronous operations?",
    description:
      "The event loop is JavaScript's mechanism for executing code, collecting and processing events, and handling async operations. Despite being single-threaded, JavaScript can handle concurrency through the event loop architecture.",
    example: `console.log('Start'); // 1. Call stack - runs immediately

// 2. setTimeout callback is registered and sent to Web API
setTimeout(() => {
  console.log('Timeout callback'); // 5. This runs after the stack is clear
}, 0);

// 3. Promise is created and resolved immediately
Promise.resolve()
  .then(() => {
    console.log('Promise callback'); // 4. Microtask - runs before next tick
  });

console.log('End'); // 2. Call stack - runs immediately

// Output order:
// Start
// End
// Promise callback
// Timeout callback`,
    bestPractices: [
      "Use Promises and async/await for cleaner asynchronous code",
      "Avoid blocking the main thread with heavy computation",
      "Understand the difference between macrotasks and microtasks",
      "Break complex operations into smaller chunks to allow the event loop to continue",
      "Use requestAnimationFrame for smoother visual updates",
    ],
    commonMistakes: [
      "Blocking the event loop with CPU-intensive operations",
      "Not understanding the execution order between timers, promises, and I/O",
      "Assuming setTimeout with 0ms will execute immediately",
      "Creating memory leaks with improper event listener management",
      "Ignoring the priority of microtasks (Promises) over macrotasks (setTimeout)",
    ],
    tips: [
      "Microtasks (Promises) execute before the next macrotask (setTimeout)",
      "Node.js has additional phases in its event loop implementation",
      "The browser refreshes the UI only between event loop iterations",
      "Promises and async/await allow writing asynchronous code that looks synchronous",
      "Use Web Workers for CPU-intensive tasks to avoid blocking the main thread",
    ],
    visualization: {
      type: "flow",
      data: {
        nodes: [
          {
            id: "1",
            type: "input",
            data: { label: "JavaScript Code" },
            position: { x: 250, y: 0 },
          },
          {
            id: "2",
            data: { label: "Call Stack" },
            position: { x: 250, y: 100 },
          },
          {
            id: "3",
            data: { label: "Web APIs" },
            position: { x: 450, y: 100 },
          },
          {
            id: "4",
            data: { label: "Callback Queue\n(Macrotasks)" },
            position: { x: 450, y: 200 },
          },
          {
            id: "5",
            data: { label: "Microtask Queue" },
            position: { x: 450, y: 300 },
          },
          {
            id: "6",
            data: { label: "Event Loop" },
            position: { x: 250, y: 250 },
          },
          {
            id: "7",
            data: { label: "Rendering" },
            position: { x: 100, y: 200 },
          },
        ],
        edges: [
          { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
          {
            id: "e2-3",
            source: "2",
            target: "3",
            type: "smoothstep",
            label: "Async APIs",
          },
          {
            id: "e3-4",
            source: "3",
            target: "4",
            type: "smoothstep",
            label: "Callbacks",
          },
          {
            id: "e3-5",
            source: "3",
            target: "5",
            type: "smoothstep",
            label: "Promises",
          },
          {
            id: "e6-2",
            source: "6",
            target: "2",
            type: "smoothstep",
            label: "Add callbacks\nwhen stack empty",
          },
          { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
          {
            id: "e5-6",
            source: "5",
            target: "6",
            type: "smoothstep",
            label: "Priority",
          },
          {
            id: "e6-7",
            source: "6",
            target: "7",
            type: "smoothstep",
            label: "After callbacks",
          },
        ],
      },
    },
  },
  {
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
  },
];

export const categories: Category[] = [
  {
    id: "core-javascript",
    name: "Core JavaScript",
    icon: "⚡",
    description: "Fundamental JavaScript concepts and features",
    questions: questions.filter((q) => q.category === "Core JavaScript"),
  },
  {
    id: "async-javascript",
    name: "Async JavaScript",
    icon: "🔄",
    description: "Asynchronous programming patterns and concepts",
    questions: questions.filter((q) => q.category === "Async JavaScript"),
  },
  {
    id: "fancy-features",
    name: "Fancy Features",
    icon: "✨",
    description: "Modern JavaScript features and patterns",
    questions: questions.filter((q) => q.category === "Fancy Features"),
  },
  {
    id: "objects-arrays",
    name: "Objects and Arrays",
    icon: "📦",
    description: "Working with objects and arrays in JavaScript",
    questions: questions.filter((q) => q.category === "Objects and Arrays"),
  },
  {
    id: "special-theory",
    name: "Special Theory",
    icon: "🎯",
    description: "Advanced JavaScript concepts and theory",
    questions: questions.filter((q) => q.category === "Special Theory"),
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "🎨",
    description: "Frontend-specific JavaScript concepts",
    questions: questions.filter((q) => q.category === "Frontend Development"),
  },
];
