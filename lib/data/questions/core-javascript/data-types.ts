import { Question } from "@/types/questions";

export const dataTypes: Question = {
  id: "data-types",
  category: "Core JavaScript",
  number: 7,
  title:
    "What are JavaScript data types, and how do you check the type of a variable?",
  description:
    "JavaScript has eight built-in data types, including seven primitive types and objects. Understanding these types and how to check them is fundamental to working with JavaScript effectively.",
  example: `// Primitive data types
const numberExample = 42;
const stringExample = "Hello, world!";
const booleanExample = true;
const nullExample = null;
const undefinedExample = undefined;
const symbolExample = Symbol('unique');
const bigIntExample = 9007199254740991n;

// Object type (non-primitive)
const objectExample = { name: 'John', age: 30 };
const arrayExample = [1, 2, 3]; // Arrays are objects
const functionExample = function() { return 'Hello'; }; // Functions are objects
const dateExample = new Date(); // Dates are objects
const regexExample = /abc/; // Regular expressions are objects

// Checking types with typeof
console.log(typeof numberExample);    // "number"
console.log(typeof stringExample);    // "string"
console.log(typeof booleanExample);   // "boolean"
console.log(typeof nullExample);      // "object" (this is a known JavaScript quirk)
console.log(typeof undefinedExample); // "undefined"
console.log(typeof symbolExample);    // "symbol"
console.log(typeof bigIntExample);    // "bigint"
console.log(typeof objectExample);    // "object"
console.log(typeof arrayExample);     // "object"
console.log(typeof functionExample);  // "function"

// Better way to check for arrays
console.log(Array.isArray(arrayExample)); // true
console.log(Array.isArray(objectExample)); // false

// Checking for null
console.log(nullExample === null); // true

// Instance checking with instanceof
console.log(objectExample instanceof Object); // true
console.log(arrayExample instanceof Array);   // true
console.log(dateExample instanceof Date);     // true

// Object.prototype.toString for more specific type checking
console.log(Object.prototype.toString.call(numberExample));  // "[object Number]"
console.log(Object.prototype.toString.call(stringExample));  // "[object String]"
console.log(Object.prototype.toString.call(arrayExample));   // "[object Array]"
console.log(Object.prototype.toString.call(nullExample));    // "[object Null]"
console.log(Object.prototype.toString.call(dateExample));    // "[object Date]"`,
  bestPractices: [
    "Use === (strict equality) instead of == to avoid type coercion",
    "Be aware that typeof null returns 'object' instead of 'null'",
    "Use Array.isArray() to check for arrays instead of typeof",
    "Remember that NaN is a number type but represents 'Not a Number'",
    "For complex type checking, use Object.prototype.toString.call()",
  ],
  commonMistakes: [
    "Confusing null and undefined",
    "Using == for comparison which performs type coercion",
    "Assuming typeof will correctly identify all types (e.g., arrays, null)",
    "Not handling NaN correctly (NaN !== NaN)",
    "Confusion around primitive wrappers (String, Number, Boolean objects)",
  ],
  tips: [
    "Primitive types are immutable and passed by value",
    "Objects (including arrays and functions) are passed by reference",
    "Use Number.isNaN() instead of global isNaN() for more accurate checks",
    "Symbol values are guaranteed to be unique",
    "BigInt was added to handle integers larger than Number.MAX_SAFE_INTEGER",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "JavaScript Data Types" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Primitive Types" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Objects (Reference Type)" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Number" },
          position: { x: 0, y: 200 },
        },
        {
          id: "5",
          data: { label: "String" },
          position: { x: 50, y: 250 },
        },
        {
          id: "6",
          data: { label: "Boolean" },
          position: { x: 100, y: 200 },
        },
        {
          id: "7",
          data: { label: "Undefined" },
          position: { x: 150, y: 250 },
        },
        {
          id: "8",
          data: { label: "Null" },
          position: { x: 200, y: 200 },
        },
        {
          id: "9",
          data: { label: "Symbol" },
          position: { x: 250, y: 250 },
        },
        {
          id: "10",
          data: { label: "BigInt" },
          position: { x: 300, y: 200 },
        },
        {
          id: "11",
          data: { label: "Plain Objects" },
          position: { x: 350, y: 250 },
        },
        {
          id: "12",
          data: { label: "Arrays" },
          position: { x: 400, y: 200 },
        },
        {
          id: "13",
          data: { label: "Functions" },
          position: { x: 450, y: 250 },
        },
        {
          id: "14",
          data: { label: "Dates" },
          position: { x: 500, y: 200 },
        },
        {
          id: "15",
          data: { label: "RegExp" },
          position: { x: 550, y: 250 },
        },
        {
          id: "16",
          data: { label: "typeof Operator" },
          position: { x: 150, y: 350 },
        },
        {
          id: "17",
          data: { label: "instanceof Operator" },
          position: { x: 350, y: 350 },
        },
        {
          id: "18",
          data: { label: "Object.prototype.toString" },
          position: { x: 250, y: 450 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e2-7", source: "2", target: "7", type: "smoothstep" },
        { id: "e2-8", source: "2", target: "8", type: "smoothstep" },
        { id: "e2-9", source: "2", target: "9", type: "smoothstep" },
        { id: "e2-10", source: "2", target: "10", type: "smoothstep" },
        { id: "e3-11", source: "3", target: "11", type: "smoothstep" },
        { id: "e3-12", source: "3", target: "12", type: "smoothstep" },
        { id: "e3-13", source: "3", target: "13", type: "smoothstep" },
        { id: "e3-14", source: "3", target: "14", type: "smoothstep" },
        { id: "e3-15", source: "3", target: "15", type: "smoothstep" },
        {
          id: "e1-16",
          source: "1",
          target: "16",
          type: "smoothstep",
          label: "Check Type",
        },
        {
          id: "e1-17",
          source: "1",
          target: "17",
          type: "smoothstep",
          label: "Check Inheritance",
        },
        {
          id: "e1-18",
          source: "1",
          target: "18",
          type: "smoothstep",
          label: "Advanced Type Checking",
        },
      ],
    },
  },
};
