import { Question } from "@/types/questions";

export const handlingMultiplePromises: Question = {
  id: "handling-multiple-promises",
  category: "Async JavaScript",
  number: 15,
  title: "How do you handle multiple promises simultaneously?",
  description:
    "JavaScript provides several methods for working with multiple promises simultaneously, each with different behaviors. Promise.all() executes promises in parallel and resolves when all promises are fulfilled or rejects when any promise rejects. Promise.race() resolves or rejects as soon as the first promise settles. Promise.allSettled() waits for all promises to complete regardless of their state. Promise.any() resolves when any promise fulfills or rejects when all promises reject.",
  example: `// Simulating API calls with different response times
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success rate
        resolve({ id: userId, name: \`User \${userId}\`, timestamp: Date.now() });
      } else {
        reject(new Error(\`Failed to fetch user \${userId}\`));
      }
    }, delay);
  });
}

// 1. Promise.all() - wait for all promises to resolve, or reject if any fails
console.log("Using Promise.all():");
console.time("Promise.all");

Promise.all([
  fetchUserData(1),
  fetchUserData(2),
  fetchUserData(3)
])
  .then(results => {
    console.timeEnd("Promise.all");
    console.log("All users loaded successfully:", results);
  })
  .catch(error => {
    console.timeEnd("Promise.all");
    console.error("At least one request failed:", error.message);
  });

// 2. Promise.race() - resolves or rejects with the first promise to settle
console.log("\\nUsing Promise.race():");
console.time("Promise.race");

Promise.race([
  fetchUserData(4).then(user => ({ ...user, source: 'First API' })),
  fetchUserData(4).then(user => ({ ...user, source: 'Second API' })),
  fetchUserData(4).then(user => ({ ...user, source: 'Third API' }))
])
  .then(fastestResult => {
    console.timeEnd("Promise.race");
    console.log("Fastest response:", fastestResult);
  })
  .catch(error => {
    console.timeEnd("Promise.race");
    console.error("Fastest response failed:", error.message);
  });

// 3. Promise.allSettled() - wait for all promises to complete, regardless of state
console.log("\\nUsing Promise.allSettled():");
console.time("Promise.allSettled");

Promise.allSettled([
  fetchUserData(5),
  fetchUserData(6),
  fetchUserData(7)
])
  .then(results => {
    console.timeEnd("Promise.allSettled");
    
    const fulfilled = results.filter(result => result.status === 'fulfilled');
    const rejected = results.filter(result => result.status === 'rejected');
    
    console.log(\`Results: \${fulfilled.length} succeeded, \${rejected.length} failed\`);
    console.log("Successful results:", fulfilled.map(r => r.value));
    console.log("Failed results:", rejected.map(r => r.reason.message));
  });

// 4. Promise.any() - resolves when any promise fulfills, rejects when all reject
console.log("\\nUsing Promise.any():");
console.time("Promise.any");

Promise.any([
  fetchUserData(8),
  fetchUserData(9),
  fetchUserData(10)
])
  .then(result => {
    console.timeEnd("Promise.any");
    console.log("First successful result:", result);
  })
  .catch(error => {
    console.timeEnd("Promise.any");
    // AggregateError is used when all promises reject
    console.error("All promises rejected:", error.errors);
  });

// 5. Custom sequential execution of promises
console.log("\\nSequential Promise execution:");
console.time("Sequential");

async function sequentialFetch(userIds) {
  const results = [];
  
  for (const id of userIds) {
    try {
      const user = await fetchUserData(id);
      results.push(user);
      console.log(\`Fetched user \${id}\`);
    } catch (error) {
      console.error(\`Error fetching user \${id}: \${error.message}\`);
    }
  }
  
  return results;
}

sequentialFetch([11, 12, 13])
  .then(users => {
    console.timeEnd("Sequential");
    console.log("Sequentially fetched users:", users);
  });

// 6. Controlling concurrency
console.log("\\nControlled concurrency:");
console.time("Controlled");

async function fetchWithConcurrencyLimit(userIds, concurrencyLimit = 2) {
  const results = [];
  const inProgress = new Set();
  const queue = [...userIds];
  
  async function processQueue() {
    if (queue.length === 0 || inProgress.size >= concurrencyLimit) return;
    
    const userId = queue.shift();
    inProgress.add(userId);
    
    try {
      const result = await fetchUserData(userId);
      results.push(result);
      console.log(\`Fetched user \${userId} (concurrent: \${inProgress.size})\`);
    } catch (error) {
      console.error(\`Error fetching user \${userId}: \${error.message}\`);
    } finally {
      inProgress.delete(userId);
      processQueue(); // Process next item
    }
  }
  
  // Start initial batch of requests
  const startBatch = Math.min(concurrencyLimit, queue.length);
  const initialPromises = [];
  
  for (let i = 0; i < startBatch; i++) {
    initialPromises.push(processQueue());
  }
  
  // Wait for all to complete
  await Promise.all(initialPromises);
  
  return results;
}

fetchWithConcurrencyLimit([14, 15, 16, 17, 18], 2)
  .then(users => {
    console.timeEnd("Controlled");
    console.log("Users fetched with controlled concurrency:", users);
  });`,
  bestPractices: [
    "Use Promise.all() when you need all promises to succeed and want to handle them as a group",
    "Use Promise.allSettled() when you need to process all results regardless of success or failure",
    "Use Promise.race() when you want the result of the fastest promise or need a timeout mechanism",
    "Use Promise.any() when you need at least one promise to succeed and don't care which one",
    "Consider implementing controlled concurrency for large sets of promises to avoid overloading resources",
  ],
  commonMistakes: [
    "Using Promise.all() when any promise might legitimately fail, causing the entire operation to fail",
    "Forgetting that Promise.race() will resolve with a rejection if the fastest promise rejects",
    "Not handling rejections appropriately in complex promise chains",
    "Creating too many promises simultaneously, which can overload network or system resources",
    "Not considering error scenarios when working with multiple asynchronous operations",
  ],
  tips: [
    "You can combine different promise combination methods for complex scenarios",
    "Use Promise.race() with a timeout promise to implement request timeouts",
    "Consider using a library like Bluebird, p-limit, or p-queue for advanced promise handling",
    "Remember that Promise.allSettled() is newer and might need a polyfill in older environments",
    "For data fetching in production apps, consider using a dedicated data fetching library with built-in error handling",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Multiple Promises" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Promise.all()" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Promise.race()" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Promise.allSettled()" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Promise.any()" },
          position: { x: 550, y: 100 },
        },
        {
          id: "6",
          data: { label: "Resolve when\nAll Fulfill" },
          position: { x: 100, y: 200 },
        },
        {
          id: "7",
          data: { label: "Reject when\nAny Rejects" },
          position: { x: 100, y: 300 },
        },
        {
          id: "8",
          data: { label: "Resolves/Rejects with\nFirst Settled Promise" },
          position: { x: 250, y: 200 },
        },
        {
          id: "9",
          data: { label: "Resolves when\nAll Complete\n(success or failure)" },
          position: { x: 400, y: 200 },
        },
        {
          id: "10",
          data: { label: "Resolves on\nFirst Success" },
          position: { x: 550, y: 200 },
        },
        {
          id: "11",
          data: { label: "Rejects when\nAll Reject" },
          position: { x: 550, y: 300 },
        },
        {
          id: "12",
          data: { label: "Parallel Execution" },
          position: { x: 250, y: 400 },
        },
        {
          id: "13",
          data: { label: "Controlled Concurrency" },
          position: { x: 400, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e1-5", source: "1", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e2-7", source: "2", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e4-9", source: "4", target: "9", type: "smoothstep" },
        { id: "e5-10", source: "5", target: "10", type: "smoothstep" },
        { id: "e5-11", source: "5", target: "11", type: "smoothstep" },
        { id: "e2-12", source: "2", target: "12", type: "smoothstep" },
        { id: "e4-12", source: "4", target: "12", type: "smoothstep" },
        { id: "e4-13", source: "4", target: "13", type: "smoothstep" },
      ],
    },
  },
};
