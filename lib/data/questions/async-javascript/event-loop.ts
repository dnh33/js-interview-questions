import { Question } from "@/types/questions";

export const eventLoop: Question = {
  id: "event-loop",
  category: "Async JavaScript",
  number: 16,
  title:
    "Explain the JavaScript event loop and how it handles asynchronous operations.",
  description:
    "The JavaScript event loop is a core mechanism that enables non-blocking I/O operations despite JavaScript being single-threaded. It manages the execution of code, collection of events, and processing of callbacks to handle asynchronous tasks without blocking the main execution thread.",
  example: `console.log('1 - Start');

// setTimeout schedules a callback to be executed after a delay
setTimeout(() => {
  console.log('2 - Timeout callback executed');
}, 0);

// Promise.resolve creates an immediately resolved promise
Promise.resolve()
  .then(() => {
    console.log('3 - Promise callback executed');
  });

console.log('4 - End');

// Execution order will be:
// 1 - Start
// 4 - End
// 3 - Promise callback executed
// 2 - Timeout callback executed

// Let's understand why with this more detailed example:
console.log('A - Main script starts');

// Macro task (Task Queue)
setTimeout(() => {
  console.log('B - Timeout 1 callback (macro task)');
  
  // Nested macro task
  setTimeout(() => {
    console.log('C - Nested timeout callback (macro task)');
  }, 0);
  
  // Nested micro task
  Promise.resolve().then(() => {
    console.log('D - Nested promise callback (micro task)');
  });
  
  console.log('E - Timeout 1 callback ends');
}, 0);

// Micro task (Microtask Queue)
Promise.resolve().then(() => {
  console.log('F - Promise 1 callback (micro task)');
  
  // Nested micro task
  Promise.resolve().then(() => {
    console.log('G - Nested promise callback (micro task)');
  });
  
  console.log('H - Promise 1 callback ends');
});

// Another macro task
setTimeout(() => {
  console.log('I - Timeout 2 callback (macro task)');
}, 0);

// Another micro task
Promise.resolve().then(() => {
  console.log('J - Promise 2 callback (micro task)');
});

console.log('K - Main script ends');

// The execution order will be:
// A - Main script starts
// K - Main script ends
// F - Promise 1 callback (micro task)
// H - Promise 1 callback ends
// G - Nested promise callback (micro task)
// J - Promise 2 callback (micro task)
// B - Timeout 1 callback (macro task)
// E - Timeout 1 callback ends
// D - Nested promise callback (micro task)
// I - Timeout 2 callback (macro task)
// C - Nested timeout callback (macro task)

// Blocking the event loop
function blockingOperation() {
  console.log('Blocking operation started');
  const startTime = Date.now();
  
  // Blocking loop that runs for approximately 1 second
  while (Date.now() - startTime < 1000) {
    // This empty loop will block the thread
  }
  
  console.log('Blocking operation ended');
}

console.log('Before blocking operation');
blockingOperation();
console.log('After blocking operation');
setTimeout(() => console.log('This will be delayed'), 0);

// Execution order:
// Before blocking operation
// Blocking operation started
// Blocking operation ended
// After blocking operation
// This will be delayed

// Event loop with timers example
console.log('Timer start');

setTimeout(() => {
  console.log('Timeout 100ms');
}, 100);

setTimeout(() => {
  console.log('Timeout 0ms');
}, 0);

Promise.resolve().then(() => {
  let i = 0;
  while (i < 1000000000) i++; // Simulating CPU-intensive operation
  console.log('CPU-intensive promise resolved');
});

console.log('Timer end');

// Execution order:
// Timer start
// Timer end
// CPU-intensive promise resolved (after a delay due to the CPU-intensive operation)
// Timeout 0ms
// Timeout 100ms

// Event loop phases (Node.js specific)
const fs = require('fs');

// 1. Timers phase
setTimeout(() => {
  console.log('1 - Timeout callback');
}, 0);

// 2. I/O callbacks phase
fs.readFile('example.txt', (err, data) => {
  console.log('2 - File read callback');
});

// 3. Check phase (setImmediate)
setImmediate(() => {
  console.log('3 - Immediate callback');
});

// 4. Close callbacks phase
const server = require('http').createServer();
server.listen(3000, () => {
  console.log('4 - Server listening');
  server.close(() => {
    console.log('5 - Server closed');
  });
});

// Note: The precise order can vary based on timing and system load`,
  bestPractices: [
    "Avoid long-running operations in the main thread to prevent blocking the UI",
    "Break up CPU-intensive tasks into smaller chunks with setTimeout to allow the event loop to process other events",
    "Be aware of the difference between microtasks (Promises) and macrotasks (setTimeout, setInterval)",
    "Use asynchronous APIs when available to prevent blocking the event loop",
    "Consider using Web Workers for CPU-intensive tasks that would otherwise block the main thread",
    "Understand the execution order: synchronous code first, then microtasks, then macrotasks",
  ],
  commonMistakes: [
    "Assuming setTimeout(fn, 0) executes the callback immediately after current synchronous code",
    "Not understanding that microtasks (Promises) execute before macrotasks (setTimeout)",
    "Blocking the event loop with CPU-intensive operations, causing UI freezing",
    "Nesting too many callbacks or promises, making the code hard to follow",
    "Not handling errors in asynchronous operations, causing unhandled promise rejections",
    "Misunderstanding the timing and order of execution in the event loop",
  ],
  tips: [
    "Use the Performance API to measure the impact of your code on the event loop",
    "In Node.js, process.nextTick() is processed before Promise callbacks",
    "The event loop behaves slightly differently in browsers compared to Node.js",
    "Use requestAnimationFrame() for animations to sync with the browser's render cycle",
    "The queueMicrotask() API explicitly queues a function as a microtask",
    "For debugging, Chrome DevTools has an Event Listener Breakpoints feature to pause execution on specific events",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "JavaScript Engine" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Call Stack" },
          position: { x: 150, y: 100 },
        },
        {
          id: "3",
          data: { label: "Web APIs\n(Browser/Node.js)" },
          position: { x: 350, y: 100 },
        },
        {
          id: "4",
          data: { label: "Microtask Queue\n(Promises)" },
          position: { x: 150, y: 250 },
        },
        {
          id: "5",
          data: { label: "Task Queue\n(setTimeout, I/O)" },
          position: { x: 350, y: 250 },
        },
        {
          id: "6",
          data: { label: "Event Loop" },
          position: { x: 250, y: 350 },
        },
        {
          id: "7",
          data: { label: "Execute Script" },
          position: { x: 100, y: 450 },
        },
        {
          id: "8",
          data: { label: "Execute Microtasks" },
          position: { x: 250, y: 450 },
        },
        {
          id: "9",
          data: { label: "Execute Macrotasks" },
          position: { x: 400, y: 450 },
        },
        {
          id: "10",
          data: { label: "Render (Browser only)" },
          position: { x: 250, y: 550 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        {
          id: "e2-3",
          source: "2",
          target: "3",
          type: "smoothstep",
          label: "Async operations",
        },
        {
          id: "e3-4",
          source: "3",
          target: "4",
          type: "smoothstep",
          label: "Promise callbacks",
        },
        {
          id: "e3-5",
          source: "3",
          target: "5",
          type: "smoothstep",
          label: "Timeout callbacks",
        },
        {
          id: "e6-2",
          source: "6",
          target: "2",
          type: "smoothstep",
          label: "Add callbacks to stack",
        },
        { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
        { id: "e5-6", source: "5", target: "6", type: "smoothstep" },
        {
          id: "e6-7",
          source: "6",
          target: "7",
          type: "smoothstep",
          label: "1",
        },
        {
          id: "e7-8",
          source: "7",
          target: "8",
          type: "smoothstep",
          label: "2",
        },
        {
          id: "e8-9",
          source: "8",
          target: "9",
          type: "smoothstep",
          label: "3",
        },
        {
          id: "e9-10",
          source: "9",
          target: "10",
          type: "smoothstep",
          label: "4",
        },
        {
          id: "e10-7",
          source: "10",
          target: "7",
          type: "smoothstep",
          label: "Loop",
        },
      ],
    },
  },
};
