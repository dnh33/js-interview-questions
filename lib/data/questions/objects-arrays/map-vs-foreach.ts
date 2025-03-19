import { Question } from "@/types/questions";

export const mapVsForEach: Question = {
  id: "map-vs-foreach",
  category: "Objects and Arrays",
  number: 25,
  title: "What is the difference between map() and forEach() in JavaScript?",
  description:
    "map() and forEach() are both array methods that iterate over each element, but they serve different purposes. map() creates and returns a new array with the results of calling a function on every element, making it useful for data transformations. forEach() executes a function on each element without returning anything, making it suitable for side effects like DOM manipulation or logging. Understanding when to use each helps write more efficient and readable code.",
  example: `// Simple array to work with
const numbers = [1, 2, 3, 4, 5];

// 1. Basic Usage Comparison

// map() - creates a new array with transformed values
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // Original array unchanged: [1, 2, 3, 4, 5]

// forEach() - performs an action but doesn't return a value
let sum = 0;
numbers.forEach(num => {
  sum += num;
});
console.log(sum); // 15
console.log(numbers); // Original array unchanged: [1, 2, 3, 4, 5]

// 2. Return Value Difference

// map() returns a new array
const mapResult = numbers.map(num => num * 2);
console.log(mapResult); // [2, 4, 6, 8, 10]

// forEach() returns undefined
const forEachResult = numbers.forEach(num => num * 2);
console.log(forEachResult); // undefined

// 3. Chaining with Other Methods

// map() can be chained with other array methods
const evenSquares = numbers
  .map(num => num * num)
  .filter(square => square % 2 === 0);
console.log(evenSquares); // [4, 16]

// forEach() cannot be meaningfully chained (returns undefined)
// This doesn't work as intended:
// numbers.forEach(...).filter(...) would throw an error

// 4. Breaking the Loop

// With forEach(), you can't break out of the loop (except with exceptions)
try {
  numbers.forEach(num => {
    console.log(num);
    if (num === 3) throw new Error('Break');
  });
} catch (e) {
  if (e.message !== 'Break') throw e;
  console.log('Broke out of forEach at 3');
}

// For comparison, a for...of loop allows breaking naturally
for (const num of numbers) {
  console.log(num);
  if (num === 3) break;
}
console.log('Broke out of for...of at 3');

// 5. Use Cases

// map() - Data transformation (returning a new array)
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Getting just the names - perfect for map()
const usernames = users.map(user => user.name);
console.log(usernames); // ["Alice", "Bob", "Charlie"]

// forEach() - Side effects (no new array needed)
// Logging information
users.forEach(user => {
  console.log(\`\${user.name} is \${user.age} years old\`);
});

// DOM manipulation example (conceptual - not runnable here)
/*
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
});
*/

// 6. Performance Considerations

// Measuring performance (conceptual example)
function measureTime(fn) {
  const start = performance.now();
  fn();
  return performance.now() - start;
}

// For very large arrays, performance might differ
const largeArray = Array(1000000).fill(1);

console.log('forEach time:', 
  measureTime(() => {
    let result = 0;
    largeArray.forEach(n => { result += n; });
  })
);

console.log('map time:', 
  measureTime(() => {
    const result = largeArray.map(n => n + 1);
  })
);

// 7. Common Patterns and Best Practices

// INCORRECT: Using map() when you should use forEach()
// (creating an array that you don't use)
const badPractice = numbers.map(num => {
  console.log(num); // Side effect only
  // No return statement
});
// This creates an array of undefined values that serves no purpose

// CORRECT: Using forEach() for side effects
numbers.forEach(num => {
  console.log(num); // Side effect only
});

// INCORRECT: Using forEach() when you need a transformation
let transformed = [];
numbers.forEach(num => {
  transformed.push(num * 2);
});
console.log(transformed); // [2, 4, 6, 8, 10]

// CORRECT: Using map() for transformations
const correctTransform = numbers.map(num => num * 2);
console.log(correctTransform); // [2, 4, 6, 8, 10]

// 8. When to Use Each

// Use map() when:
// - You need the transformed data as an array
// - You want to chain with other array methods
// - You need a pure operation without side effects

// Use forEach() when:
// - You're performing side effects (DOM updates, logging)
// - You don't need a new array returned
// - You're working with very large arrays and don't need a return value

// 9. Summary of Differences

/*
                map()                  |               forEach()
---------------------------------------|-----------------------------------------
Returns new array with results         | Returns undefined
Can be chained with other methods      | Cannot be meaningfully chained
Function's return value matters        | Function's return value is ignored
Used for transformations               | Used for side effects
Slightly more memory usage (new array) | Slightly more efficient for side effects
*/`,
  bestPractices: [
    "Use map() when you need to transform array elements and use the resulting array",
    "Use forEach() when you're performing side effects and don't need a return value",
    "Avoid using map() without using its return value - use forEach() instead",
    "Be mindful of memory usage when working with very large arrays",
    "Consider traditional for loops for performance-critical code or when you need to break early",
  ],
  commonMistakes: [
    "Using map() only for its side effects without using the returned array",
    "Using forEach() when you need to transform data (requires extra code and is less readable)",
    "Trying to break out of forEach() loops without using exceptions",
    "Attempting to chain methods after forEach() (returns undefined)",
    "Not considering performance implications for very large arrays",
  ],
  tips: [
    "Choose the right method based on your intent - transformation (map) vs side effects (forEach)",
    "forEach() is often more memory efficient when you don't need a new array",
    "Remember that map() preserves the array length and structure, just changing values",
    "For complex operations, map() can make your code more readable through method chaining",
    "When in doubt, ask: 'Do I need the resulting array?' If yes, use map(); if no, use forEach()",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Array Methods" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "map()" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "forEach()" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Returns\nNew Array" },
          position: { x: 50, y: 200 },
        },
        {
          id: "5",
          data: { label: "For\nTransformations" },
          position: { x: 150, y: 200 },
        },
        {
          id: "6",
          data: { label: "Returns\nundefined" },
          position: { x: 350, y: 200 },
        },
        {
          id: "7",
          data: { label: "For\nSide Effects" },
          position: { x: 450, y: 200 },
        },
        {
          id: "8",
          data: { label: "Chainable" },
          position: { x: 100, y: 300 },
        },
        {
          id: "9",
          data: { label: "Not\nChainable" },
          position: { x: 400, y: 300 },
        },
        {
          id: "10",
          data: {
            label:
              "Examples:\n• Data transformation\n• Creating new arrays\n• Functional programming",
          },
          position: { x: 100, y: 400 },
        },
        {
          id: "11",
          data: {
            label: "Examples:\n• Logging\n• DOM manipulation\n• API calls",
          },
          position: { x: 400, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e2-8", source: "2", target: "8", type: "smoothstep" },
        { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
        { id: "e4-10", source: "4", target: "10", type: "smoothstep" },
        { id: "e5-10", source: "5", target: "10", type: "smoothstep" },
        { id: "e6-11", source: "6", target: "11", type: "smoothstep" },
        { id: "e7-11", source: "7", target: "11", type: "smoothstep" },
      ],
    },
  },
};
