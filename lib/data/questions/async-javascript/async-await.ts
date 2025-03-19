import { Question } from "@/types/questions";

export const asyncAwait: Question = {
  id: "async-await",
  category: "Async JavaScript",
  number: 13,
  title:
    "What is async/await, and how does it simplify asynchronous code in JavaScript?",
  description:
    "async/await is a modern JavaScript syntax that provides a more readable and maintainable way to work with Promises. It allows asynchronous code to be written in a style that looks synchronous, making complex asynchronous flows easier to understand and debug.",
  example: `// Basic async/await example
async function fetchData() {
  try {
    // await pauses execution until the promise resolves
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    // await the parsing of JSON
    const data = await response.json();
    return data; // This is automatically wrapped in a Promise
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw to allow calling code to handle it
  }
}

// Using an async function
// Note: we need to use .then() or another await since the function returns a Promise
fetchData()
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error in caller:', error));

// Alternative using async IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error in caller:', error);
  }
})();

// Converting Promise chains to async/await
// Promise chain version
function getUserDataPromise(userId) {
  return fetch(\`https://api.example.com/users/\${userId}\`)
    .then(response => response.json())
    .then(user => fetch(\`https://api.example.com/posts?userId=\${user.id}\`))
    .then(response => response.json())
    .then(posts => {
      return { user, posts };
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

// async/await version - much cleaner and easier to understand
async function getUserDataAsync(userId) {
  try {
    const userResponse = await fetch(\`https://api.example.com/users/\${userId}\`);
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\`https://api.example.com/posts?userId=\${user.id}\`);
    const posts = await postsResponse.json();
    
    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Parallel execution with async/await
async function fetchMultipleResources() {
  try {
    // Start all fetches in parallel, don't await them yet
    const userPromise = fetch('https://api.example.com/user').then(r => r.json());
    const postsPromise = fetch('https://api.example.com/posts').then(r => r.json());
    const commentsPromise = fetch('https://api.example.com/comments').then(r => r.json());
    
    // Wait for all promises to resolve
    const [user, posts, comments] = await Promise.all([
      userPromise, postsPromise, commentsPromise
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
}

// Using async with array methods
async function processItems(items) {
  // Sequential processing
  const results = [];
  for (const item of items) {
    // Each iteration waits for the previous to complete
    const result = await processItem(item);
    results.push(result);
  }
  
  // Parallel processing with Promise.all
  const parallelResults = await Promise.all(
    items.map(item => processItem(item))
  );
  
  return { sequential: results, parallel: parallelResults };
}

// Helper function
async function processItem(item) {
  // Simulate async processing
  await new Promise(resolve => setTimeout(resolve, 100));
  return \`Processed \${item}\`;
}`,
  bestPractices: [
    "Use try/catch blocks with async/await to handle errors properly",
    "Remember that an async function always returns a Promise",
    "Avoid mixing Promise syntax (.then/.catch) with async/await in the same function",
    "Use Promise.all() for parallel execution of multiple async operations",
    "Be careful with loops and async/await, as they can lead to sequential execution when parallel might be better",
  ],
  commonMistakes: [
    "Forgetting to await async function calls, causing unexpected behavior",
    "Not handling errors with try/catch when using await",
    "Awaiting in a loop when parallel execution would be more efficient",
    "Using await in a regular function (not marked as async)",
    "Accidentally blocking the execution with unnecessary sequential awaits",
  ],
  tips: [
    "async/await is syntactic sugar over Promises, not a replacement for the Promise API",
    "Top-level await is available in ES modules (but not in regular scripts or CommonJS)",
    "You can use async with arrow functions: const fetchData = async () => { ... }",
    "In class methods, you can use: async methodName() { ... }",
    "For conditional logic that depends on async results, async/await is much cleaner than Promise chains",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "async/await" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "async function" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Returns Promise\nautomatically" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "await expression" },
          position: { x: 250, y: 200 },
        },
        {
          id: "5",
          data: { label: "Pauses execution\nuntil Promise resolves" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "try/catch" },
          position: { x: 250, y: 300 },
        },
        {
          id: "7",
          data: { label: "Promise\nrejection" },
          position: { x: 100, y: 300 },
        },
        {
          id: "8",
          data: { label: "Error thrown\nin catch block" },
          position: { x: 400, y: 300 },
        },
        {
          id: "9",
          data: { label: "Sequential\nExecution" },
          position: { x: 150, y: 400 },
        },
        {
          id: "10",
          data: { label: "Parallel\nExecution\n(Promise.all)" },
          position: { x: 350, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        {
          id: "e7-6",
          source: "7",
          target: "6",
          type: "smoothstep",
          label: "Caught by",
        },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
        {
          id: "e4-9",
          source: "4",
          target: "9",
          type: "smoothstep",
          label: "await in loop",
        },
        {
          id: "e4-10",
          source: "4",
          target: "10",
          type: "smoothstep",
          label: "await Promise.all()",
        },
      ],
    },
  },
};
