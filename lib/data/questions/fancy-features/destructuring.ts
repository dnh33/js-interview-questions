import { Question } from "@/types/questions";

export const destructuring: Question = {
  id: "destructuring",
  category: "Fancy Features in JavaScript",
  number: 17,
  title: "What is destructuring in JavaScript, and how is it useful?",
  description:
    "Destructuring is a JavaScript expression that allows you to extract values from arrays or properties from objects and assign them to variables using a syntax that mirrors the construction of array and object literals. It provides a concise way to extract multiple values from data stored in arrays and objects.",
  example: `// Array Destructuring
// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

// Skipping elements
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

// Rest pattern with arrays
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const incomplete = [1, 2];
const [one, two, three = 'default'] = incomplete;
console.log(three); // 'default'

// Swapping variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

// Object Destructuring
// Basic object destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30

// Assigning to different variable names
const { name: fullName, age: years } = person;
console.log(fullName); // 'John'
console.log(years);    // 30

// Default values with objects
const incomplete2 = { width: 500 };
const { width, height = 300 } = incomplete2;
console.log(width);  // 500
console.log(height); // 300

// Nested object destructuring
const user = {
  id: 42,
  details: {
    firstName: 'Jane',
    lastName: 'Doe',
    contact: {
      email: 'jane@example.com',
      phone: '123-456-7890'
    }
  }
};

const { details: { firstName, contact: { email } } } = user;
console.log(firstName); // 'Jane'
console.log(email);     // 'jane@example.com'

// Destructuring in function parameters
function printPersonInfo({ name, age, job = 'Unknown' }) {
  console.log(\`\${name} is \${age} years old and works as a \${job}\`);
}

printPersonInfo({ name: 'Alice', age: 28 }); 
// "Alice is 28 years old and works as a Unknown"

printPersonInfo({ name: 'Bob', age: 35, job: 'Developer' });
// "Bob is 35 years old and works as a Developer"

// Combining array and object destructuring
const people = [
  { name: 'Alex', age: 25 },
  { name: 'Brianna', age: 30 }
];

const [{ name: firstName1 }, { name: firstName2 }] = people;
console.log(firstName1); // 'Alex'
console.log(firstName2); // 'Brianna'`,
  bestPractices: [
    "Use destructuring to make code more readable when working with complex objects and arrays",
    "Leverage default values to handle potentially undefined properties",
    "Use rest patterns when you need to collect remaining elements",
    "Destructure function parameters for cleaner function signatures",
    "Name variables appropriately when renaming with object destructuring",
  ],
  commonMistakes: [
    "Trying to destructure undefined or null values (causes TypeError)",
    "Forgetting that object destructuring uses curly braces which look like blocks",
    "Not using parentheses when destructuring into existing variables in an assignment",
    "Overcomplicating nested destructuring, making code hard to read",
    "Missing closing brackets or braces in complex destructuring patterns",
  ],
  tips: [
    "Destructuring works great with the spread/rest operator for collecting remaining items",
    "Use object destructuring for importing specific parts of a module",
    "It's particularly useful for working with API responses and complex data structures",
    "Consider using array destructuring for returning multiple values from functions",
    "Use destructuring in loops to quickly extract properties from each item",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Destructuring Assignment" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Array Destructuring" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Object Destructuring" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Basic\nExtraction" },
          position: { x: 50, y: 200 },
        },
        {
          id: "5",
          data: { label: "Rest\nPattern" },
          position: { x: 150, y: 200 },
        },
        {
          id: "6",
          data: { label: "Direct\nProperty Access" },
          position: { x: 350, y: 200 },
        },
        {
          id: "7",
          data: { label: "Renaming\nProperties" },
          position: { x: 450, y: 200 },
        },
        {
          id: "8",
          data: { label: "Skipping\nElements" },
          position: { x: 0, y: 300 },
        },
        {
          id: "9",
          data: { label: "Default\nValues" },
          position: { x: 100, y: 300 },
        },
        {
          id: "10",
          data: { label: "Swapping\nVariables" },
          position: { x: 200, y: 300 },
        },
        {
          id: "11",
          data: { label: "Nested\nObject Access" },
          position: { x: 350, y: 300 },
        },
        {
          id: "12",
          data: { label: "Default\nProperties" },
          position: { x: 450, y: 300 },
        },
        {
          id: "13",
          data: { label: "Function\nParameters" },
          position: { x: 250, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e4-8", source: "4", target: "8", type: "smoothstep" },
        { id: "e4-9", source: "4", target: "9", type: "smoothstep" },
        { id: "e4-10", source: "4", target: "10", type: "smoothstep" },
        { id: "e6-11", source: "6", target: "11", type: "smoothstep" },
        { id: "e6-12", source: "6", target: "12", type: "smoothstep" },
        { id: "e2-13", source: "2", target: "13", type: "smoothstep" },
        { id: "e3-13", source: "3", target: "13", type: "smoothstep" },
      ],
    },
  },
};
