import { Question } from "@/types/questions";

export const callbackFunctions: Question = {
  id: "callback-functions",
  category: "Core JavaScript",
  number: 9,
  title: "What is a callback function, and how is it used?",
  description:
    "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are a fundamental concept in JavaScript, especially for handling asynchronous operations.",
  example: `// Basic synchronous callback example
function greeting(name) {
  console.log(\`Hello, \${name}!\`);
}

function processUserInput(callback) {
  const name = "John Doe"; // In a real app, this might come from user input
  callback(name);
}

processUserInput(greeting); // "Hello, John Doe!"

// Callback with anonymous function
processUserInput(function(name) {
  console.log(\`Hi there, \${name}!\`);
}); // "Hi there, John Doe!"

// Callback with arrow function
processUserInput((name) => console.log(\`Hey, \${name}!\`)); // "Hey, John Doe!"

// Asynchronous callback example with setTimeout
console.log("Starting...");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("Continuing immediately...");
// Output:
// "Starting..."
// "Continuing immediately..."
// "This runs after 2 seconds" (after 2 second delay)

// Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

// forEach - executes a callback for each element
numbers.forEach((number) => {
  console.log(number * 2);
}); // 2, 4, 6, 8, 10

// map - creates a new array with the results of calling a callback on every element
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - creates a new array with elements that pass the callback's test
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Error handling with callbacks
function fetchDataWithCallback(url, successCallback, errorCallback) {
  fetch(url)
    .then(response => response.json())
    .then(data => successCallback(data))
    .catch(error => errorCallback(error));
}

fetchDataWithCallback(
  'https://api.example.com/data',
  (data) => console.log('Success:', data),
  (error) => console.error('Error:', error)
);`,
  bestPractices: [
    "Use named functions for reusable callbacks",
    "Keep callback functions concise and focused on a single task",
    "Use arrow functions for shorter, cleaner callback syntax",
    "Handle errors properly in asynchronous callbacks",
    "Consider using Promises or async/await for complex asynchronous operations",
  ],
  commonMistakes: [
    "Callback hell - deeply nested callbacks that become hard to read and maintain",
    "Not handling errors in asynchronous callbacks",
    "Losing the 'this' context in callbacks (consider arrow functions or .bind())",
    "Forgetting to pass required arguments to callback functions",
    "Ignoring the return value of callback functions in methods like map or filter",
  ],
  tips: [
    "Most modern JavaScript APIs now use Promises instead of callbacks",
    "Use Promise.all() to handle multiple async callbacks running in parallel",
    "Async/await syntax can make code with callbacks more readable",
    "Pass all relevant data to your callback function instead of relying on closure scope",
    "Remember that error-first callbacks are common in Node.js (first parameter is an error object)",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Callback Function" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Higher Order Function" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Passed as\nArgument" },
          position: { x: 100, y: 100 },
        },
        {
          id: "4",
          data: { label: "Invoked Later" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Synchronous" },
          position: { x: 150, y: 200 },
        },
        {
          id: "6",
          data: { label: "Asynchronous" },
          position: { x: 350, y: 200 },
        },
        {
          id: "7",
          data: { label: "Array Methods\n(forEach, map, filter)" },
          position: { x: 150, y: 300 },
        },
        {
          id: "8",
          data: { label: "Event Handlers" },
          position: { x: 350, y: 250 },
        },
        {
          id: "9",
          data: { label: "Timers\n(setTimeout, setInterval)" },
          position: { x: 350, y: 350 },
        },
        {
          id: "10",
          data: { label: "Success\nCallback" },
          position: { x: 500, y: 300 },
        },
        {
          id: "11",
          data: { label: "Error\nCallback" },
          position: { x: 500, y: 400 },
        },
        {
          id: "12",
          data: { label: "Callback Hell" },
          position: { x: 250, y: 450 },
        },
        {
          id: "13",
          data: { label: "Promises" },
          position: { x: 100, y: 450 },
        },
        {
          id: "14",
          data: { label: "Async/Await" },
          position: { x: 400, y: 450 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e5-7", source: "5", target: "7", type: "smoothstep" },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
        { id: "e6-9", source: "6", target: "9", type: "smoothstep" },
        { id: "e6-10", source: "6", target: "10", type: "smoothstep" },
        { id: "e6-11", source: "6", target: "11", type: "smoothstep" },
        {
          id: "e6-12",
          source: "6",
          target: "12",
          type: "smoothstep",
          label: "Problem",
        },
        {
          id: "e12-13",
          source: "12",
          target: "13",
          type: "smoothstep",
          label: "Solution",
        },
        {
          id: "e12-14",
          source: "12",
          target: "14",
          type: "smoothstep",
          label: "Solution",
        },
      ],
    },
  },
};
