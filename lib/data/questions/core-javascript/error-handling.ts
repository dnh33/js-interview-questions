import { Question } from "@/types/questions";

export const errorHandling: Question = {
  id: "error-handling",
  category: "Core JavaScript",
  number: 10,
  title: "How do you manage errors in JavaScript?",
  description:
    "Error handling is a critical aspect of writing robust JavaScript code. JavaScript provides several mechanisms to throw, catch, and handle errors properly, allowing developers to create more resilient applications.",
  example: `// Basic try-catch
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);
}

// try-catch-finally
try {
  const data = fetchData();
  processData(data);
} catch (error) {
  console.error('Error while processing data:', error);
} finally {
  // This code always runs, regardless of whether an error occurred
  cleanupResources();
}

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}

// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DatabaseError';
  }
}

// Using custom error types
function processUserData(user) {
  if (!user.name) {
    throw new ValidationError('User name is required');
  }
  
  try {
    saveToDatabase(user);
  } catch (error) {
    throw new DatabaseError(\`Failed to save user: \${error.message}\`);
  }
}

// Handling different error types
try {
  processUserData({ email: 'user@example.com' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation failed:', error.message);
  } else if (error instanceof DatabaseError) {
    console.error('Database error:', error.message);
    // Maybe retry or use a backup database
  } else {
    console.error('Unknown error:', error);
  }
}

// Async error handling with promises
function fetchData() {
  return fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
      // Return fallback data or rethrow
      return { error: true, message: error.message };
    });
}

// Async error handling with async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    // Handle error or rethrow
    throw error; // Rethrow to let caller handle it
  }
}`,
  bestPractices: [
    "Use specific error types to make error handling more precise",
    "Always include try-catch blocks around code that might fail",
    "Add finally blocks for cleanup operations that should always run",
    "Provide meaningful error messages that help with debugging",
    "For async code, use either .catch() with Promises or try-catch with async/await",
  ],
  commonMistakes: [
    "Catching errors but not handling them properly",
    "Using overly broad catch blocks that hide bugs",
    "Not cleaning up resources when errors occur",
    "Forgetting to handle errors in asynchronous code",
    "Throwing primitive values instead of Error objects",
  ],
  tips: [
    "console.error() is better than console.log() for error messages",
    "Error objects include stack traces that help with debugging",
    "In production, consider logging errors to a service rather than just the console",
    "Use error boundaries in React to prevent the whole app from crashing",
    "The optional chaining operator (?.) can help prevent some common errors",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Error Handling in JavaScript" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "try-catch" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Error Objects" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Async Error Handling" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "try\n{ code }" },
          position: { x: 50, y: 200 },
        },
        {
          id: "6",
          data: { label: "catch (error)\n{ handler }" },
          position: { x: 150, y: 200 },
        },
        {
          id: "7",
          data: { label: "finally\n{ cleanup }" },
          position: { x: 100, y: 300 },
        },
        {
          id: "8",
          data: { label: "Built-in Error" },
          position: { x: 200, y: 200 },
        },
        {
          id: "9",
          data: { label: "Custom Errors" },
          position: { x: 300, y: 200 },
        },
        {
          id: "10",
          data: { label: "throw" },
          position: { x: 250, y: 300 },
        },
        {
          id: "11",
          data: { label: "Promises\n.catch()" },
          position: { x: 350, y: 200 },
        },
        {
          id: "12",
          data: { label: "async/await\ntry-catch" },
          position: { x: 450, y: 200 },
        },
        {
          id: "13",
          data: { label: "Error\nPropagation" },
          position: { x: 400, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e2-7", source: "2", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
        { id: "e3-10", source: "3", target: "10", type: "smoothstep" },
        { id: "e4-11", source: "4", target: "11", type: "smoothstep" },
        { id: "e4-12", source: "4", target: "12", type: "smoothstep" },
        { id: "e4-13", source: "4", target: "13", type: "smoothstep" },
        {
          id: "e10-6",
          source: "10",
          target: "6",
          type: "smoothstep",
          label: "is caught by",
        },
      ],
    },
  },
};
