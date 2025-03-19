import { Question } from "@/types/questions";

export const jsModules: Question = {
  id: "js-modules",
  category: "Special Theory",
  number: 27,
  title: "What are JavaScript modules, and how do you import/export them?",
  description:
    "JavaScript modules are a way to organize code into separate files with their own scope, allowing for better maintainability and reusability. Modern JavaScript provides several module systems including ES modules and CommonJS, with standardized import/export syntax for sharing functionality between files. Understanding module patterns is essential for building scalable JavaScript applications.",
  example: `// ES Modules (ESM) - Modern standard for browsers and Node.js

// ------ Exporting from a module (math.js) ------

// Named exports - export individual items
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Export variables
export const PI = 3.14159;

// Private function (not exported)
function square(x) {
  return x * x;
}

// Export a class
export class Calculator {
  add(a, b) {
    return a + b;
  }
}

// Default export (only one per module)
export default function multiply(a, b) {
  return a * b;
}

// ------ Importing in another file ------

// Import specific named exports
import { add, subtract, PI } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(PI); // 3.14159

// Import with alias
import { add as addition } from './math.js';
console.log(addition(2, 2)); // 4

// Import default export
import multiply from './math.js';
console.log(multiply(4, 5)); // 20

// Import default and named exports together
import multiply, { add, PI } from './math.js';

// Import everything as a namespace object
import * as Math from './math.js';
console.log(Math.add(1, 2)); // 3
console.log(Math.PI); // 3.14159
console.log(Math.default(2, 3)); // 6 (default export is available as default property)

// Dynamic import (lazy loading)
async function loadMathModule() {
  const math = await import('./math.js');
  return math.add(5, 10);
}
loadMathModule().then(result => console.log(result)); // 15

// ------ CommonJS Modules (Used in Node.js) ------

// Exporting in CommonJS (util.js)
function formatDate(date) {
  return date.toISOString();
}

const VERSION = '1.0.0';

// CommonJS exports
module.exports = {
  formatDate,
  VERSION
};

// Or assign individual exports
module.exports.formatDate = formatDate;
module.exports.VERSION = VERSION;

// Default-like export
module.exports = formatDate;

// Importing in CommonJS
const utils = require('./util.js');
console.log(utils.formatDate(new Date()));

// Destructuring import
const { formatDate, VERSION } = require('./util.js');
console.log(formatDate(new Date()));

// ------ Practical Example: Building a Module System ------

// config.js - Configuration module
export const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3
};

// api.js - API service module
import { config } from './config.js';

export async function fetchData(endpoint) {
  try {
    const response = await fetch(\`\${config.apiUrl}/\${endpoint}\`, {
      timeout: config.timeout
    });
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// user.js - User-specific API module
import { fetchData } from './api.js';

export async function getUserProfile(userId) {
  return fetchData(\`users/\${userId}\`);
}

export async function updateUserProfile(userId, data) {
  // Implementation details...
}

// main.js - Application entry point
import { getUserProfile } from './user.js';

async function init() {
  try {
    const profile = await getUserProfile('123');
    console.log('User profile:', profile);
  } catch (error) {
    console.error('Failed to load user profile');
  }
}

init();`,
  bestPractices: [
    "Use ES modules (import/export) for modern JavaScript development",
    "Keep modules focused on a single responsibility",
    "Export only what is necessary, keeping implementation details private",
    "Use named exports for multiple functions/variables and default exports for main functionality",
    "Consider using dynamic imports for code splitting and lazy loading of large modules",
  ],
  commonMistakes: [
    "Mixing module systems (CommonJS and ES modules) in the same project",
    "Circular dependencies between modules that cause unexpected behavior",
    "Over-exporting internal implementation details that should remain private",
    "Not understanding how bundlers process modules for browser compatibility",
    "Using default exports excessively, which can make refactoring more difficult",
  ],
  tips: [
    "Add '.js' extension to import paths when working directly in browsers",
    "Use import/export statements at the top level only (not inside functions or blocks) in ES modules",
    "Use dynamic imports for performance optimization through code splitting",
    "Modern bundlers like Webpack, Rollup, and esbuild can help with module compatibility",
    "Type information can be exported/imported when using TypeScript with ES modules",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "JavaScript Modules" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "ES Modules" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "CommonJS" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Named Exports" },
          position: { x: 50, y: 200 },
        },
        {
          id: "5",
          data: { label: "Default Export" },
          position: { x: 150, y: 200 },
        },
        {
          id: "6",
          data: { label: "Dynamic Import" },
          position: { x: 100, y: 300 },
        },
        {
          id: "7",
          data: { label: "module.exports" },
          position: { x: 350, y: 200 },
        },
        {
          id: "8",
          data: { label: "require()" },
          position: { x: 450, y: 200 },
        },
        {
          id: "9",
          data: { label: "Module Bundlers" },
          position: { x: 250, y: 400 },
        },
        {
          id: "10",
          data: { label: "webpack" },
          position: { x: 150, y: 500 },
        },
        {
          id: "11",
          data: { label: "rollup" },
          position: { x: 250, y: 500 },
        },
        {
          id: "12",
          data: { label: "esbuild" },
          position: { x: 350, y: 500 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e2-9", source: "2", target: "9", type: "smoothstep" },
        { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
        { id: "e9-10", source: "9", target: "10", type: "smoothstep" },
        { id: "e9-11", source: "9", target: "11", type: "smoothstep" },
        { id: "e9-12", source: "9", target: "12", type: "smoothstep" },
      ],
    },
  },
};
