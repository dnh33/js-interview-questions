import { Question } from "@/types/questions";

export const promisesThen: Question = {
  id: "promises-then",
  category: "Async JavaScript",
  number: 12,
  title: "How do JavaScript promises work, and what is the then() method?",
  description:
    "Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation and its resulting value. The then() method is a crucial part of Promise chaining, allowing you to process results and handle transformations in a clean, sequential manner.",
  example: `// Creating a basic Promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  if (success) {
    resolve('Operation succeeded!');
  } else {
    reject(new Error('Operation failed!'));
  }
});

// Using the then() method to handle the resolved value
myPromise
  .then(result => {
    console.log('Success:', result); // 'Success: Operation succeeded!'
    return 'Modified ' + result;     // Return a new value for the next then()
  })
  .then(modifiedResult => {
    console.log('Modified:', modifiedResult); // 'Modified: Operation succeeded!'
    return modifiedResult.length;    // Transform the data again
  })
  .then(length => {
    console.log('Length:', length);  // 'Length: 28'
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// then() can take two arguments: onFulfilled and onRejected
myPromise.then(
  value => console.log('Success handler:', value),
  error => console.error('Error handler:', error.message)
);
// Note: This is equivalent to .then().catch() but less flexible for chaining

// Real-world example: fetching data from an API
function fetchUserData(userId) {
  return fetch(\`https://api.example.com/users/\${userId}\`)
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      return response.json(); // Returns a Promise
    })
    .then(userData => {
      console.log('User data:', userData);
      // Transform or process the data
      return {
        ...userData,
        fullName: \`\${userData.firstName} \${userData.lastName}\`
      };
    });
}

// Using the transformed data
fetchUserData(123)
  .then(enhancedUserData => {
    console.log('Enhanced user data:', enhancedUserData);
    // Do something with enhancedUserData
  })
  .catch(error => {
    console.error('Error fetching user:', error.message);
  });

// Promise chain with error handling at each step
new Promise((resolve) => resolve(10))
  .then(num => {
    console.log('First then:', num); // 10
    return num * 2;
  })
  .then(num => {
    console.log('Second then:', num); // 20
    throw new Error('Something went wrong');
    // The following then() will be skipped
  })
  .then(num => {
    console.log('Third then:', num); // Never called
    return num * 2;
  })
  .catch(error => {
    console.error('Error caught:', error.message); // 'Error caught: Something went wrong'
    return 'Recovery value';
  })
  .then(value => {
    console.log('After catch:', value); // 'After catch: Recovery value'
  });`,
  bestPractices: [
    "Always return values from then() handlers to enable proper chaining",
    "Use catch() at the end of a promise chain to handle any errors that might occur",
    "Avoid nesting promises by using proper chaining with then()",
    "Remember that each then() returns a new Promise, enabling transformation and composition",
    "Keep promise chains flat and readable by returning promises from within then() callbacks",
  ],
  commonMistakes: [
    "Forgetting to return values from then() handlers, breaking the chain",
    "Not handling rejected promises with catch() or a rejection handler",
    "Creating a 'pyramid of doom' by nesting promises instead of chaining them",
    "Trying to use the result of a promise without waiting for it to resolve",
    "Not understanding that then() always returns a new Promise object",
  ],
  tips: [
    "The then() method always returns a new Promise, allowing for powerful chaining",
    "Any error thrown in a then() handler will cause the returned Promise to reject",
    "Both synchronous errors and rejected promises are caught by catch()",
    "You can recover from errors in a catch() and continue the chain",
    "If you need to wait for multiple promises, use Promise.all() or Promise.allSettled()",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Promise" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Pending" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Fulfilled" },
          position: { x: 100, y: 200 },
        },
        {
          id: "4",
          data: { label: "Rejected" },
          position: { x: 400, y: 200 },
        },
        {
          id: "5",
          data: { label: "then(onFulfilled)" },
          position: { x: 100, y: 300 },
        },
        {
          id: "6",
          data: { label: "catch() or\nthen(null, onRejected)" },
          position: { x: 400, y: 300 },
        },
        {
          id: "7",
          data: { label: "New Promise" },
          position: { x: 100, y: 400 },
        },
        {
          id: "8",
          data: { label: "New Promise" },
          position: { x: 400, y: 400 },
        },
        {
          id: "9",
          data: { label: "Next then()" },
          position: { x: 250, y: 500 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        {
          id: "e2-3",
          source: "2",
          target: "3",
          type: "smoothstep",
          label: "resolve(value)",
        },
        {
          id: "e2-4",
          source: "2",
          target: "4",
          type: "smoothstep",
          label: "reject(error)",
        },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
        {
          id: "e5-7",
          source: "5",
          target: "7",
          type: "smoothstep",
          label: "return value/promise",
        },
        {
          id: "e6-8",
          source: "6",
          target: "8",
          type: "smoothstep",
          label: "return value/promise",
        },
        { id: "e7-9", source: "7", target: "9", type: "smoothstep" },
        { id: "e8-9", source: "8", target: "9", type: "smoothstep" },
      ],
    },
  },
};
