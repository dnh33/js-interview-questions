import { Question } from "@/types/questions";

export const mapMethod: Question = {
  id: "map-method",
  category: "Objects and Arrays",
  number: 24,
  title:
    "How does the map() method work in JavaScript, and when would you use it?",
  description:
    "The map() method creates a new array by calling a provided function on every element in the calling array. It's a powerful higher-order function for transforming data without mutating the original array. map() is essential for functional programming in JavaScript and is frequently used for data transformations, rendering lists in UI frameworks, and creating derived data from existing arrays.",
  example: `// Basic usage of map()
const numbers = [1, 2, 3, 4, 5];

// Doubling each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // Original array is unchanged: [1, 2, 3, 4, 5]

// Map function parameters: currentValue, index, array
const details = numbers.map((num, index, array) => {
  return \`Item \${num} is at index \${index} in an array of length \${array.length}\`;
});

console.log(details[0]); // "Item 1 is at index 0 in an array of length 5"

// Transforming objects in an array
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Extract just the names
const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// Create new objects with selected properties
const simplifiedUsers = users.map(({ id, name }) => ({ id, name }));
console.log(simplifiedUsers); 
// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]

// Transforming objects with additional data
const usersWithStatus = users.map(user => ({
  ...user,
  status: user.age > 30 ? 'senior' : 'junior',
  email: \`\${user.name.toLowerCase()}@example.com\`
}));

console.log(usersWithStatus[0]);
// { id: 1, name: "Alice", age: 25, status: "junior", email: "alice@example.com" }

// Conditional transformations
const scores = [85, 92, 60, 78, 95];
const grades = scores.map(score => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
});

console.log(grades); // ["B", "A", "D", "C", "A"]

// Chaining map with other array methods
const evenSquares = numbers
  .filter(num => num % 2 === 0)  // Keep only even numbers
  .map(num => num * num);        // Square the remaining numbers

console.log(evenSquares); // [4, 16]

// Mapping over strings (converting to array first)
const word = "Hello";
const charCodes = [...word].map(char => char.charCodeAt(0));
console.log(charCodes); // [72, 101, 108, 108, 111]

// Using map to format data for display
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Phone', price: 699.99 },
  { id: 3, name: 'Tablet', price: 399.99 }
];

const productElements = products.map(product => {
  return \`
    <div class="product" id="product-\${product.id}">
      <h3>\${product.name}</h3>
      <p>\$\${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  \`;
});

// This would generate HTML for each product
console.log(productElements[0]);

// Real-world example: Mapping API data
const apiResponse = [
  { id: 'a1', values: [10, 20, 30], active: true },
  { id: 'b2', values: [5, 15, 25], active: false },
  { id: 'c3', values: [8, 18, 28], active: true }
];

// Transform for application use
const processedData = apiResponse
  .filter(item => item.active)
  .map(item => ({
    identifier: item.id,
    total: item.values.reduce((sum, val) => sum + val, 0),
    average: item.values.reduce((sum, val) => sum + val, 0) / item.values.length
  }));

console.log(processedData);
// [
//   { identifier: "a1", total: 60, average: 20 },
//   { identifier: "c3", total: 54, average: 18 }
// ]

// Common map() pitfalls

// 1. Not returning a value (returns undefined for each element)
const forgotReturn = numbers.map(num => {
  num * 2; // No return statement!
});
console.log(forgotReturn); // [undefined, undefined, undefined, undefined, undefined]

// 2. Mutating the original array (anti-pattern)
const originals = [{count: 1}, {count: 2}, {count: 3}];
const badMap = originals.map(obj => {
  obj.count *= 2; // Mutates original!
  return obj;
});

console.log(badMap[0].count); // 2
console.log(originals[0].count); // Also 2 - object was mutated!

// Better approach - create new objects
const goodMap = originals.map(obj => ({ ...obj, count: obj.count * 2 }));`,
  bestPractices: [
    "Use map() when you need to transform every element in an array to create a new array",
    "Always return a value from the callback function to avoid undefined elements",
    "Prefer to create new objects rather than mutating original array elements",
    "Chain map() with other array methods like filter() or reduce() for complex data transformations",
    "Use arrow functions for shorter, more concise callbacks when appropriate",
  ],
  commonMistakes: [
    "Forgetting to return a value from the callback function",
    "Directly mutating objects inside the original array",
    "Using map() when filter() or forEach() would be more appropriate",
    "Creating unnecessarily complex transformations in a single map() call",
    "Not accounting for potential null or undefined values in the source array",
  ],
  tips: [
    "map() always returns a new array of the same length as the original",
    "Use map() for one-to-one transformations; filter() for filtering; reduce() for aggregating",
    "The third parameter (array) in the callback is rarely used but helpful for certain calculations",
    "For simple transformations, map() is more declarative and usually more readable than a for loop",
    "map() is particularly useful in React and other UI frameworks for rendering lists of components",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Original Array" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "map() Method" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Callback Function" },
          position: { x: 250, y: 200 },
        },
        {
          id: "4",
          data: { label: "Element 1\nTransformation" },
          position: { x: 100, y: 300 },
        },
        {
          id: "5",
          data: { label: "Element 2\nTransformation" },
          position: { x: 250, y: 300 },
        },
        {
          id: "6",
          data: { label: "Element 3\nTransformation" },
          position: { x: 400, y: 300 },
        },
        {
          id: "7",
          data: { label: "New Array\n(Same Length)" },
          position: { x: 250, y: 400 },
        },
        {
          id: "8",
          data: { label: "Original Array\n(Unchanged)" },
          position: { x: 400, y: 0 },
        },
        {
          id: "9",
          data: { label: "param1:\ncurrentValue" },
          position: { x: 100, y: 200 },
        },
        {
          id: "10",
          data: { label: "param2:\nindex" },
          position: { x: 400, y: 175 },
        },
        {
          id: "11",
          data: { label: "param3:\narray" },
          position: { x: 400, y: 225 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e5-7", source: "5", target: "7", type: "smoothstep" },
        { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        { id: "e1-8", source: "1", target: "8", type: "smoothstep" },
        { id: "e9-3", source: "9", target: "3", type: "smoothstep" },
        { id: "e10-3", source: "10", target: "3", type: "smoothstep" },
        { id: "e11-3", source: "11", target: "3", type: "smoothstep" },
      ],
    },
  },
};
