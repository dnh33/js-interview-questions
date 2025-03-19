import { Question } from "@/types/questions";

export const promisesExplained: Question = {
  id: "promises-explained",
  category: "Async JavaScript",
  number: 15,
  title: "Explain what a JavaScript Promise is and how it works.",
  description:
    "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a proxy for a value not necessarily known when the promise is created, allowing you to associate handlers with an asynchronous action's eventual success or failure.",
  example: `// Creating a simple promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve('Operation completed successfully!');
    } else {
      reject(new Error('Operation failed!'));
    }
  }, 1000);
});

// Using the promise
myPromise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Promise completed, regardless of outcome');
  });

// Promise states demonstration
function demonstratePromiseStates() {
  console.log('Creating a new promise...');
  
  // Promise starts in the "pending" state
  const pendingPromise = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve('Success!');  // Transitions to "fulfilled" state
      } else {
        reject('Failure!');   // Would transition to "rejected" state
      }
    }, 2000);
  });
  
  console.log('Promise state immediately after creation:', 
    pendingPromise instanceof Promise ? 'pending' : 'not a promise');
  
  pendingPromise
    .then(result => {
      console.log('Promise is now fulfilled with value:', result);
    })
    .catch(error => {
      console.log('Promise is now rejected with reason:', error);
    });
  
  return pendingPromise;
}

// Chaining promises
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      if (id > 0) {
        resolve({ id, name: 'User ' + id });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 500);
  });
}

function fetchUserPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      if (user) {
        resolve([
          { id: 1, userId: user.id, title: 'First post' },
          { id: 2, userId: user.id, title: 'Second post' }
        ]);
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
}

// Chaining multiple promises
fetchUser(1)
  .then(user => {
    console.log('Fetched user:', user);
    return fetchUserPosts(user); // Return a new promise
  })
  .then(posts => {
    console.log('Fetched posts:', posts);
    return posts.length; // Return a simple value
  })
  .then(count => {
    console.log('Post count:', count);
  })
  .catch(error => {
    // One catch for the entire chain
    console.error('Error in promise chain:', error);
  });

// Promise.all - wait for multiple promises
const promise1 = Promise.resolve('Value 1');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Value 2'), 1000));
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json());

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log('All promises resolved:', values);
  })
  .catch(error => {
    console.error('At least one promise rejected:', error);
  });

// Promise.race - get the result of the first resolved promise
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('First promise - won'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('Second promise - lost'), 2000))
])
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Promise.allSettled - wait for all promises to settle
Promise.allSettled([
  Promise.resolve('Success 1'),
  Promise.reject('Error 1'),
  Promise.resolve('Success 2')
])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index + 1} fulfilled with value: \${result.value}\`);
      } else {
        console.log(\`Promise \${index + 1} rejected with reason: \${result.reason}\`);
      }
    });
  });

// Creating a timeout wrapper with Promise
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting(name) {
  await timeout(2000);
  return \`Hello, \${name}!\`;
}

delayedGreeting('John')
  .then(greeting => console.log(greeting));

// Converting callback pattern to Promise-based
function readFileCallback(path, callback) {
  // Simulated file reading
  setTimeout(() => {
    const content = \`Content of file at \${path}\`;
    callback(null, content);
  }, 1000);
}

// Promise wrapper
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFileCallback(path, (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  });
}

// Using the promise-based version
readFilePromise('/path/to/file.txt')
  .then(content => console.log('File content:', content))
  .catch(error => console.error('Error reading file:', error));`,
  bestPractices: [
    "Always handle promise rejections with .catch() or try/catch with async/await",
    "Return promises from functions to make them more composable",
    "Use Promise.all() when multiple operations can run in parallel",
    "Use Promise.allSettled() when you need to know the result of each promise regardless of success or failure",
    "Avoid deep nesting of .then() - use chaining instead",
    "Keep promise chains flat by returning promises from inside .then() handlers",
  ],
  commonMistakes: [
    "Forgetting to return a value or promise from .then() handlers",
    "Not handling promise rejections, leading to unhandled rejection warnings",
    "Creating a 'promise inside promise' anti-pattern instead of proper chaining",
    "Assuming promises run in sequence when used in a loop (they don't - use for..of with async/await instead)",
    "Overusing Promise.race() which can lead to race conditions",
    "Misunderstanding that .then() always returns a new promise",
  ],
  tips: [
    "Use async/await for even cleaner promise-based code",
    "Remember that a promise can only resolve or reject once - any additional resolve/reject calls are ignored",
    "Most modern Web APIs return promises (Fetch API, storage APIs, etc.)",
    "You can use Promise.resolve() and Promise.reject() to create pre-resolved or pre-rejected promises",
    "Consider using promise libraries like Bluebird for advanced promise patterns and better performance in some cases",
    "Use Promise.finally() for cleanup operations that should occur regardless of success or failure",
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
          data: { label: "Pending State" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Async Operation" },
          position: { x: 250, y: 200 },
        },
        {
          id: "4",
          data: { label: "Success?" },
          position: { x: 250, y: 300 },
        },
        {
          id: "5",
          data: { label: "Fulfilled State" },
          position: { x: 100, y: 400 },
        },
        {
          id: "6",
          data: { label: "Rejected State" },
          position: { x: 400, y: 400 },
        },
        {
          id: "7",
          data: { label: ".then() handlers" },
          position: { x: 100, y: 500 },
        },
        {
          id: "8",
          data: { label: ".catch() handlers" },
          position: { x: 400, y: 500 },
        },
        {
          id: "9",
          data: { label: ".finally() handler" },
          position: { x: 250, y: 600 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        {
          id: "e4-5",
          source: "4",
          target: "5",
          label: "Yes",
          type: "smoothstep",
        },
        {
          id: "e4-6",
          source: "4",
          target: "6",
          label: "No",
          type: "smoothstep",
        },
        { id: "e5-7", source: "5", target: "7", type: "smoothstep" },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
        { id: "e7-9", source: "7", target: "9", type: "smoothstep" },
        { id: "e8-9", source: "8", target: "9", type: "smoothstep" },
      ],
    },
  },
};
