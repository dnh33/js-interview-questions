import { Question } from "@/types/questions";

export const spreadOperator: Question = {
  id: "spread-operator",
  category: "Fancy Features in JavaScript",
  number: 19,
  title: "How does the spread operator work in JavaScript?",
  description:
    "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected. It provides a concise way to copy arrays, merge arrays, convert iterables to arrays, and pass multiple arguments to functions.",
  example: `// Copying an array
const originalArray = [1, 2, 3];
const copy = [...originalArray];
console.log(copy); // [1, 2, 3]
console.log(originalArray === copy); // false (different reference)

// Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const merged = [...array1, ...array2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Adding elements to an array
const numbers = [1, 2, 3];
const moreNumbers = [0, ...numbers, 4];
console.log(moreNumbers); // [0, 1, 2, 3, 4]

// Spreading strings
const str = "Hello";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// Copying objects (shallow copy)
const originalObj = { a: 1, b: 2 };
const copy = { ...originalObj };
console.log(copy); // { a: 1, b: 2 }

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 }; // b will be overwritten
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

// Function arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Rest parameters (collecting)
function collectArgs(...args) {
  return args;
}
console.log(collectArgs(1, 2, 3)); // [1, 2, 3]`,
  bestPractices: [
    "Use spread operator for creating shallow copies of arrays and objects",
    "Prefer spread over Array.prototype.concat() and Object.assign() for better readability",
    "Use spread to avoid mutating original arrays or objects",
    "Combine spread with destructuring for powerful data manipulation",
    "Remember that spread only creates shallow copies, not deep copies",
  ],
  commonMistakes: [
    "Forgetting that spread only performs shallow copying, not deep copying",
    "Using spread on non-iterable objects without understanding the limitations",
    "Overusing spread which can impact performance with very large arrays",
    "Not realizing that spread on objects is a newer feature (ES2018) and may need transpilation",
    "Using spread for deep cloning (use structured cloning or libraries instead)",
  ],
  tips: [
    "Spread makes working with immutable data structures much easier",
    "It's useful for creating new arrays/objects without mutating the originals",
    "Spread works with any iterable in JavaScript, including Maps and Sets",
    "In objects, if properties conflict, the last spread object's properties win",
    "Spread is often used with destructuring for elegant code patterns",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Spread Operator (...)" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Array Spreading" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Object Spreading" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Function Arguments" },
          position: { x: 250, y: 100 },
        },
        {
          id: "5",
          data: { label: "Copy Arrays" },
          position: { x: 0, y: 200 },
        },
        {
          id: "6",
          data: { label: "Merge Arrays" },
          position: { x: 100, y: 200 },
        },
        {
          id: "7",
          data: { label: "Convert String to Array" },
          position: { x: 200, y: 200 },
        },
        {
          id: "8",
          data: { label: "Copy Objects" },
          position: { x: 350, y: 200 },
        },
        {
          id: "9",
          data: { label: "Merge Objects" },
          position: { x: 450, y: 200 },
        },
        {
          id: "10",
          data: { label: "Pass Multiple Arguments" },
          position: { x: 250, y: 200 },
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
        { id: "e4-10", source: "4", target: "10", type: "smoothstep" },
      ],
    },
  },
};
