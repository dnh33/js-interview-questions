import { Question } from "@/types/questions";

export const objectVsArray: Question = {
  id: "object-vs-array",
  category: "Objects and Arrays",
  number: 21,
  title: "What is the difference between an object and an array in JavaScript?",
  description:
    "In JavaScript, objects and arrays are both reference types that store collections of data, but they serve different purposes. Arrays are ordered collections with numeric indices, ideal for ordered data. Objects are unordered collections of key-value pairs, better for representing entities with named properties. Understanding the distinctions between these data structures is fundamental for effective JavaScript programming.",
  example: `// Objects: Unordered key-value pairs
// Creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true
};

// Accessing object properties
console.log(person.firstName); // "John" (dot notation)
console.log(person["lastName"]); // "Doe" (bracket notation)

// Adding new properties
person.email = "john@example.com";
person["phone"] = "555-1234";

// Removing properties
delete person.age;

console.log(person);
// { firstName: "John", lastName: "Doe", isEmployed: true, 
//   email: "john@example.com", phone: "555-1234" }

// Arrays: Ordered, indexed collections
// Creating an array
const colors = ["red", "green", "blue"];

// Accessing array elements
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

// Adding elements
colors.push("yellow"); // Add to end
colors.unshift("purple"); // Add to start

// Removing elements
colors.pop(); // Remove from end
colors.shift(); // Remove from start

console.log(colors); // ["red", "green", "blue"]

// Length
console.log(colors.length); // 3

// Key differences in behavior:

// 1. Iteration:
// Array iteration preserves order
console.log("Array iteration:");
for (let i = 0; i < colors.length; i++) {
  console.log(\`Index \${i}: \${colors[i]}\`);
}

// or using forEach
colors.forEach((color, index) => {
  console.log(\`Index \${index}: \${color}\`);
});

// Object iteration (order not guaranteed)
console.log("Object iteration:");
for (let key in person) {
  console.log(\`Key \${key}: \${person[key]}\`);
}

// 2. Methods available:
// Arrays have many built-in methods for manipulation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, current) => total + current, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens); // [2, 4]
console.log(sum); // 15

// 3. Type checking:
console.log(Array.isArray(colors)); // true
console.log(Array.isArray(person)); // false
console.log(typeof colors); // "object" (not very helpful)
console.log(typeof person); // "object"

// 4. Converting between objects and arrays:
// Object to arrays
const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);

console.log(personKeys); 
// ["firstName", "lastName", "isEmployed", "email", "phone"]
console.log(personValues); 
// ["John", "Doe", true, "john@example.com", "555-1234"]
console.log(personEntries); 
// [["firstName", "John"], ["lastName", "Doe"], ...]

// Array to object using index as key
const colorsObj = { ...colors };
console.log(colorsObj); 
// { 0: "red", 1: "green", 2: "blue" }

// Array to object with custom keys
const colorMap = colors.reduce((obj, color, index) => {
  obj[\`color\${index + 1}\`] = color;
  return obj;
}, {});

console.log(colorMap); 
// { color1: "red", color2: "green", color3: "blue" }`,
  bestPractices: [
    "Use arrays when you need ordered data that you'll iterate through sequentially",
    "Use objects when you need to access data by named keys or represent entities with properties",
    "Prefer array methods like map, filter, and reduce for data transformations over manual loops",
    "Use Object.keys(), Object.values(), or Object.entries() to iterate over objects in a predictable manner",
    "Be mindful of performance when working with very large arrays or deeply nested objects",
  ],
  commonMistakes: [
    "Treating arrays like objects with string keys (which converts them to objects)",
    "Using arrays when an object would be more appropriate for key-value access",
    "Forgetting that object property order is not guaranteed in older JavaScript engines",
    "Not accounting for potential sparse arrays (arrays with empty slots)",
    "Mutating arrays or objects unintentionally, especially when passed as arguments",
  ],
  tips: [
    "Arrays have a special 'length' property that objects don't have",
    "Object keys are always strings or symbols, even if you use numbers as keys",
    "Modern JavaScript provides Set and Map types for specialized collection needs",
    "Use spread syntax (...) for easy shallow copying of arrays and objects",
    "When performance matters, consider that object property lookup is generally O(1) while array index access is also O(1)",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "JavaScript Collections" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Arrays" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Objects" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Ordered" },
          position: { x: 0, y: 200 },
        },
        {
          id: "5",
          data: { label: "Numeric Indices" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Length Property" },
          position: { x: 200, y: 200 },
        },
        {
          id: "7",
          data: { label: "Unordered" },
          position: { x: 300, y: 200 },
        },
        {
          id: "8",
          data: { label: "String/Symbol Keys" },
          position: { x: 400, y: 200 },
        },
        {
          id: "9",
          data: { label: "No Length Property" },
          position: { x: 500, y: 200 },
        },
        {
          id: "10",
          data: { label: "Array Methods\n(map, filter, etc.)" },
          position: { x: 100, y: 300 },
        },
        {
          id: "11",
          data: { label: "Property Methods\n(keys, values, entries)" },
          position: { x: 400, y: 300 },
        },
        {
          id: "12",
          data: { label: "Iterable with\nfor...of" },
          position: { x: 100, y: 400 },
        },
        {
          id: "13",
          data: { label: "Enumerable with\nfor...in" },
          position: { x: 400, y: 400 },
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
        { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
        { id: "e2-10", source: "2", target: "10", type: "smoothstep" },
        { id: "e3-11", source: "3", target: "11", type: "smoothstep" },
        { id: "e2-12", source: "2", target: "12", type: "smoothstep" },
        { id: "e3-13", source: "3", target: "13", type: "smoothstep" },
      ],
    },
  },
};
