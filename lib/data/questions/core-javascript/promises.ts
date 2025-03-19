import { Question } from "@/types/questions";

export const promises: Question = {
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
};
