import { Question } from "@/types/questions";

export const restParameter: Question = {
  id: "rest-parameter",
  category: "Fancy Features in JavaScript",
  number: 20,
  title:
    "What is the rest parameter in JavaScript, and how does it differ from the arguments object?",
  description:
    "The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array. It provides a cleaner and more flexible way to handle variable function parameters compared to the older arguments object, which is array-like but not a true array.",
  example: `// Basic rest parameter example
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30
console.log(sum()); // 0

// Using rest parameter with other parameters
function greet(greeting, ...names) {
  return names.map(name => \`\${greeting}, \${name}!\`).join('\\n');
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
// "Hello, Alice!
//  Hello, Bob!
//  Hello, Charlie!"

// Comparing with the arguments object
function usingArguments() {
  // arguments is array-like, not a real array
  console.log(arguments); 
  console.log(Array.isArray(arguments)); // false
  
  // Converting to array (old way)
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce((total, num) => total + num, 0);
}

console.log(usingArguments(1, 2, 3)); // 6

// Using rest parameters (modern way)
function usingRest(...args) {
  console.log(args);
  console.log(Array.isArray(args)); // true
  
  // Already an array, can use array methods directly
  return args.reduce((total, num) => total + num, 0);
}

console.log(usingRest(1, 2, 3)); // 6

// Rest with arrow functions (arguments object not available in arrow functions)
const multiply = (...numbers) => numbers.reduce((product, num) => product * num, 1);
console.log(multiply(2, 3, 4)); // 24

// Destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object rest properties (ES2018)
const { a, b, ...others } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(others); // { c: 3, d: 4 }`,
  bestPractices: [
    "Use rest parameters instead of the arguments object in new code",
    "Always place the rest parameter as the last parameter in a function",
    "Use rest parameters with destructuring for cleaner code",
    "Leverage array methods directly on rest parameters for transformations",
    "Consider using rest parameters to make variadic functions more readable",
  ],
  commonMistakes: [
    "Trying to use rest parameters in the middle of parameter list",
    "Confusing rest parameters (which collect arguments) with spread syntax (which expands arrays)",
    "Not realizing that rest parameters are only available in the function where they are defined",
    "Trying to use arguments in arrow functions (not available)",
    "Forgetting that the rest parameter collects only the remaining arguments, not all of them",
  ],
  tips: [
    "Rest parameters create real arrays, making them easier to work with than arguments",
    "They work well with array destructuring for more expressive function signatures",
    "Use rest parameters to create variadic functions with clear intent",
    "Rest parameters handle empty cases gracefully (an empty array)",
    "In method calls, the this value is properly maintained with rest parameters",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Function Parameters" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "arguments Object" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Rest Parameter\n(...params)" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Array-like Object" },
          position: { x: 50, y: 200 },
        },
        {
          id: "5",
          data: { label: "Not Available in\nArrow Functions" },
          position: { x: 150, y: 200 },
        },
        {
          id: "6",
          data: { label: "Real Array" },
          position: { x: 350, y: 200 },
        },
        {
          id: "7",
          data: { label: "Must be\nLast Parameter" },
          position: { x: 450, y: 200 },
        },
        {
          id: "8",
          data: { label: "Manual Conversion\nRequired" },
          position: { x: 100, y: 300 },
        },
        {
          id: "9",
          data: { label: "Array Methods\nAvailable Directly" },
          position: { x: 400, y: 300 },
        },
        {
          id: "10",
          data: { label: "Works with\nDestructuring" },
          position: { x: 400, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e4-8", source: "4", target: "8", type: "smoothstep" },
        { id: "e6-9", source: "6", target: "9", type: "smoothstep" },
        { id: "e9-10", source: "9", target: "10", type: "smoothstep" },
      ],
    },
  },
};
