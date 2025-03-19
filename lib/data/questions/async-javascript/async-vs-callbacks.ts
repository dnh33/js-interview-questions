import { Question } from "@/types/questions";

export const asyncVsCallbacks: Question = {
  id: "async-vs-callbacks",
  category: "Async JavaScript",
  number: 14,
  title: "What are the advantages of using async functions over callbacks?",
  description:
    "Async functions provide a more modern and maintainable approach to handling asynchronous operations in JavaScript compared to traditional callbacks. They offer better readability, error handling, and composability, which can significantly improve code quality.",
  example: `// Traditional callback approach
function fetchUserData(userId, callback) {
  // Simulate API request
  setTimeout(() => {
    const user = { id: userId, name: 'John Doe', email: 'john@example.com' };
    callback(null, user);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = [
      { id: 1, title: 'First Post', userId },
      { id: 2, title: 'Second Post', userId }
    ];
    callback(null, posts);
  }, 1000);
}

// Callback hell example
fetchUserData(123, (error, user) => {
  if (error) {
    console.error('Error fetching user:', error);
    return;
  }
  
  console.log('User:', user);
  
  fetchUserPosts(user.id, (error, posts) => {
    if (error) {
      console.error('Error fetching posts:', error);
      return;
    }
    
    console.log('Posts:', posts);
    
    // More nested callbacks could follow...
    // Leading to the infamous "callback hell" or "pyramid of doom"
  });
});

// Promise-based approach (improvement over callbacks)
function fetchUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: 'John Doe', email: 'john@example.com' };
      resolve(user);
    }, 1000);
  });
}

function fetchUserPostsPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: 'First Post', userId },
        { id: 2, title: 'Second Post', userId }
      ];
      resolve(posts);
    }, 1000);
  });
}

// Promises with then/catch
fetchUserDataPromise(123)
  .then(user => {
    console.log('User:', user);
    return fetchUserPostsPromise(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Async/await approach (further improvement)
async function getUserDataAndPosts(userId) {
  try {
    // Clean sequential code - no nesting or chaining
    const user = await fetchUserDataPromise(userId);
    console.log('User:', user);
    
    const posts = await fetchUserPostsPromise(user.id);
    console.log('Posts:', posts);
    
    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Using the async function
getUserDataAndPosts(123)
  .then(result => {
    console.log('All data:', result);
  })
  .catch(error => {
    console.error('Error in main:', error);
  });

// Error handling comparison
// 1. Callback approach
function fetchWithCallbacks(url, onSuccess, onError) {
  // Error handling is delegated to callback parameters
  fetch(url)
    .then(response => response.json())
    .then(data => onSuccess(data))
    .catch(error => onError(error));
}

// 2. Async/await approach
async function fetchWithAsync(url) {
  try {
    // Centralized error handling with try/catch
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw for caller handling
  }
}

// Composability example
// With callbacks - gets complex quickly
function processDataWithCallbacks(userId, callback) {
  fetchUserData(userId, (error, user) => {
    if (error) {
      callback(error);
      return;
    }
    
    fetchUserPosts(user.id, (error, posts) => {
      if (error) {
        callback(error);
        return;
      }
      
      // Process data
      const result = { user, posts: posts.length };
      callback(null, result);
    });
  });
}

// With async/await - much cleaner composition
async function processDataWithAsync(userId) {
  const user = await fetchUserDataPromise(userId);
  const posts = await fetchUserPostsPromise(user.id);
  
  // Process data
  return { user, postCount: posts.length };
}`,
  bestPractices: [
    "Use async/await for sequential asynchronous operations",
    "Wrap async code in try/catch blocks for centralized error handling",
    "Return promises from async functions to allow callers to handle results",
    "Use Promise.all() with async/await for concurrent operations",
    "Avoid mixing callback patterns with async/await in the same function",
  ],
  commonMistakes: [
    "Not handling errors properly in async functions",
    "Creating 'async callback hell' by unnecessarily nesting async functions",
    "Forgetting that async functions always return promises",
    "Overusing await when concurrent execution would be more efficient",
    "Using await without proper error handling",
  ],
  tips: [
    "Async/await makes asynchronous code look and behave more like synchronous code",
    "Error stack traces are more meaningful with async/await than with callbacks",
    "Convert existing callback-based APIs to promises using util.promisify in Node.js",
    "Use async IIFE (immediately invoked function expression) when you need await at the top level",
    "Most modern APIs support promises natively, avoiding the need for callback conversions",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Asynchronous Approaches" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Callback Pattern" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Promise Pattern" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Async/Await Pattern" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Callback Hell\n(Nested Callbacks)" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Promise Chains\n(.then/.catch)" },
          position: { x: 250, y: 200 },
        },
        {
          id: "7",
          data: { label: "try/catch\nwith await" },
          position: { x: 400, y: 200 },
        },
        {
          id: "8",
          data: { label: "Distributed\nError Handling" },
          position: { x: 100, y: 300 },
        },
        {
          id: "9",
          data: { label: "Chained\nError Handling" },
          position: { x: 250, y: 300 },
        },
        {
          id: "10",
          data: { label: "Centralized\nError Handling" },
          position: { x: 400, y: 300 },
        },
        {
          id: "11",
          data: { label: "Poor Readability\nand Composability" },
          position: { x: 100, y: 400 },
        },
        {
          id: "12",
          data: { label: "Better Readability\nand Composability" },
          position: { x: 250, y: 400 },
        },
        {
          id: "13",
          data: { label: "Best Readability\nand Composability" },
          position: { x: 400, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e5-8", source: "5", target: "8", type: "smoothstep" },
        { id: "e6-9", source: "6", target: "9", type: "smoothstep" },
        { id: "e7-10", source: "7", target: "10", type: "smoothstep" },
        { id: "e5-11", source: "5", target: "11", type: "smoothstep" },
        { id: "e6-12", source: "6", target: "12", type: "smoothstep" },
        { id: "e7-13", source: "7", target: "13", type: "smoothstep" },
        {
          id: "e3-4",
          source: "3",
          target: "4",
          type: "smoothstep",
          label: "Built on",
        },
      ],
    },
  },
};
