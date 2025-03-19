import { Question } from "@/types/questions";

export const eventLoop: Question = {
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
};
