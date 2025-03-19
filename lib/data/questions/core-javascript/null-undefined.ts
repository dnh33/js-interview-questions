import { Question } from "@/types/questions";

export const nullUndefined: Question = {
  id: "null-undefined",
  category: "Core JavaScript",
  number: 8,
  title: "What is the difference between null and undefined in JavaScript?",
  description:
    "null and undefined are both used to represent the absence of a value in JavaScript, but they have different meanings and use cases. Understanding their distinctions is important for proper JavaScript programming.",
  example: `// undefined examples
let variable; // declared but not initialized
console.log(variable); // undefined

function noReturn() {
  // no return statement
}
console.log(noReturn()); // undefined

const obj = {};
console.log(obj.nonExistentProperty); // undefined

function withParams(a, b) {
  console.log(a, b);
}
withParams(1); // 1, undefined (second parameter is undefined)

// null examples
const empty = null; // explicitly set to null
console.log(empty); // null

const person = { name: 'John', spouse: null }; // null value assigned
console.log(person.spouse); // null

// Checking for null and undefined
console.log(undefined == null); // true (loose equality)
console.log(undefined === null); // false (strict equality)

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (a historical JavaScript bug)

// Common patterns
const result = someFunction() || null; // fallback to null if falsy
const value = providedValue ?? defaultValue; // nullish coalescing
const userInput = formInput !== undefined ? formInput : 'default'; // check only for undefined`,
  bestPractices: [
    "Use undefined for variables that have been declared but not assigned a value",
    "Use null to explicitly indicate absence of an object or intentional absence of a value",
    "Use === (strict equality) when comparing with null or undefined",
    "Initialize variables that might be null or undefined to avoid unexpected errors",
    "Consider using the nullish coalescing operator (??) for default values",
  ],
  commonMistakes: [
    "Using == (loose equality) which treats null and undefined as equal",
    "Not accounting for nullable values when accessing nested properties",
    "Forgetting that typeof null returns 'object' not 'null'",
    "Misunderstanding that undefined is the default value for uninitialized variables",
    "Not using optional chaining (?.) when accessing potential undefined properties",
  ],
  tips: [
    "undefined is a default value automatically assigned by JavaScript",
    "null is a value that must be explicitly assigned",
    "Use Object.prototype.hasOwnProperty() to check if a property exists rather than checking for non-null",
    "The nullish coalescing operator (??) is preferable to || when 0 or '' are valid values",
    "Optional chaining (?.) can help avoid errors when accessing nested properties that might be null or undefined",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "null vs undefined" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "undefined" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "null" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Default value\nCreated by JavaScript" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "Explicitly set\nby programmer" },
          position: { x: 400, y: 200 },
        },
        {
          id: "6",
          data: { label: 'typeof: "undefined"' },
          position: { x: 100, y: 300 },
        },
        {
          id: "7",
          data: { label: 'typeof: "object"' },
          position: { x: 400, y: 300 },
        },
        {
          id: "8",
          data: { label: "Variable declared but\nnot initialized" },
          position: { x: 0, y: 400 },
        },
        {
          id: "9",
          data: { label: "Function without\nreturn statement" },
          position: { x: 100, y: 450 },
        },
        {
          id: "10",
          data: { label: "Missing function\nparameters" },
          position: { x: 200, y: 400 },
        },
        {
          id: "11",
          data: { label: "Represents\nabsent object" },
          position: { x: 350, y: 400 },
        },
        {
          id: "12",
          data: { label: "Represents\nintentional emptiness" },
          position: { x: 450, y: 450 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e2-8", source: "2", target: "8", type: "smoothstep" },
        { id: "e2-9", source: "2", target: "9", type: "smoothstep" },
        { id: "e2-10", source: "2", target: "10", type: "smoothstep" },
        { id: "e3-11", source: "3", target: "11", type: "smoothstep" },
        { id: "e3-12", source: "3", target: "12", type: "smoothstep" },
      ],
    },
  },
};
