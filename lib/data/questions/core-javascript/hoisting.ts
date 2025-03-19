import { Question } from "@/types/questions";

export const hoisting: Question = {
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
};
