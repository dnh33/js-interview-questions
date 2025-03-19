import { Question } from "@/types/questions";

export const syncVsAsync: Question = {
  id: "sync-vs-async",
  category: "Frontend Development",
  number: 33,
  title:
    "What is the difference between synchronous and asynchronous code in JavaScript?",
  description:
    "Synchronous code executes sequentially, with each operation waiting for the previous one to complete before executing. Asynchronous code allows operations to be performed independently of the main program flow, enabling non-blocking execution. Understanding the difference is crucial for building responsive web applications.",
  example: `// Synchronous code example
console.log("Start");
function syncOperation() {
  // This blocks execution until completed
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // Blocking for 2 seconds
  }
  return "Sync operation result";
}
const result = syncOperation();
console.log(result);
console.log("End of synchronous example");
// Output order: "Start", "Sync operation result", "End of synchronous example"

// Asynchronous code example
console.log("Start async example");
function asyncOperation() {
  return new Promise((resolve) => {
    // This doesn't block execution
    setTimeout(() => {
      resolve("Async operation result");
    }, 2000);
  });
}

asyncOperation().then(result => {
  console.log(result);
});
console.log("End of async example");
// Output order: "Start async example", "End of async example", "Async operation result"

// Modern async/await syntax
async function performAsyncTasks() {
  console.log("Start async/await example");
  const result = await asyncOperation();
  console.log(result);
  console.log("End of async/await example");
}
performAsyncTasks();
// Code after this line continues executing before performAsyncTasks completes`,
  bestPractices: [
    "Use asynchronous code for operations that may take time (API calls, file operations)",
    "Avoid blocking the main thread with long-running synchronous operations",
    "Prefer async/await over callbacks for better readability",
    "Handle errors properly in asynchronous code with try/catch or .catch()",
    "Use Promise.all() for parallel asynchronous operations",
  ],
  commonMistakes: [
    "Forgetting that await only works inside async functions",
    "Not handling errors in asynchronous code",
    "Creating 'callback hell' with deeply nested callbacks",
    "Blocking the main thread with synchronous operations",
    "Misunderstanding the event loop and execution order",
  ],
  tips: [
    "Use DevTools Performance tab to identify blocking synchronous code",
    "Remember that async functions always return promises",
    "Web Workers can run CPU-intensive tasks without blocking the UI",
    "Use requestAnimationFrame for smooth animations in the browser",
    "Consider libraries like RxJS for complex asynchronous operations",
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
          data: { label: "Synchronous" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Asynchronous" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Sequential\nExecution" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "Blocking\nOperations" },
          position: { x: 100, y: 300 },
        },
        {
          id: "6",
          data: { label: "Event Loop" },
          position: { x: 400, y: 200 },
        },
        {
          id: "7",
          data: { label: "Callback Queue" },
          position: { x: 350, y: 300 },
        },
        {
          id: "8",
          data: { label: "Promise Queue" },
          position: { x: 450, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
      ],
    },
  },
};
