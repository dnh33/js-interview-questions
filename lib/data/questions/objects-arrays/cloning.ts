import { Question } from "@/types/questions";

export const cloning: Question = {
  id: "cloning",
  category: "Objects and Arrays",
  number: 22,
  title: "How do you clone an object or array in JavaScript?",
  description:
    "Cloning objects and arrays in JavaScript can be done through various methods, each with different implications for performance and depth of copying. Shallow copying creates a new object but maintains references to nested objects, while deep copying creates entirely new copies of all nested objects. Understanding how to properly clone data structures is crucial for avoiding unintended side effects in your code.",
  example: `// ARRAY CLONING

// 1. Shallow Clone Methods for Arrays
const originalArray = [1, 2, 3, {a: 4}];

// Slice method
const sliceClone = originalArray.slice();

// Spread operator (ES6+)
const spreadClone = [...originalArray];

// Array.from
const fromClone = Array.from(originalArray);

// Concat with empty array
const concatClone = [].concat(originalArray);

// Demonstration of shallow copying issue
originalArray[3].a = 5; // Modify nested object
console.log(spreadClone[3].a); // 5 - nested object is shared!

// OBJECT CLONING

// 1. Shallow Clone Methods for Objects
const originalObject = { 
  name: "John", 
  age: 30, 
  address: { city: "New York", zip: "10001" }
};

// Object.assign
const assignClone = Object.assign({}, originalObject);

// Spread operator (ES6+)
const objectSpreadClone = { ...originalObject };

// Demonstration of shallow copying issue
originalObject.address.city = "Boston"; // Modify nested object
console.log(objectSpreadClone.address.city); // "Boston" - nested object is shared!

// 2. Deep Clone Methods

// 2.1 JSON method (with limitations)
const jsonClone = JSON.parse(JSON.stringify(originalObject));

// Modify original after deep clone
originalObject.address.city = "Chicago";
console.log(jsonClone.address.city); // Still "Boston" - totally independent

// Limitations of JSON method
const objectWithSpecialTypes = {
  func: function() { return 'Hello'; },
  symbol: Symbol("id"),
  undefined: undefined,
  date: new Date(),
  regExp: /pattern/,
  infinityVal: Infinity,
  nanVal: NaN,
  circular: null // Will create circular reference below
};

// Create circular reference
objectWithSpecialTypes.circular = objectWithSpecialTypes;

// This will throw an error due to circular reference:
try {
  const jsonDeepClone = JSON.parse(JSON.stringify(objectWithSpecialTypes));
  console.log(jsonDeepClone);
} catch (e) {
  console.log("JSON.stringify failed:", e.message);
}

// Even without the circular reference, these are lost or changed:
const incompleteClone = JSON.parse(JSON.stringify({
  func: function() { return 'Hello'; },
  symbol: Symbol("id"),
  undefined: undefined,
  date: new Date(),
  regExp: /pattern/
}));

console.log(incompleteClone);
// { date: "2023-01-01T00:00:00.000Z" } - (date as string)
// Function, Symbol, undefined are missing, RegExp converted to {}

// 2.2 Custom Deep Clone Function
function deepClone(obj, hash = new WeakMap()) {
  // Handle null, undefined, and non-object types
  if (obj === null || typeof obj !== 'object') return obj;
  
  // Handle Date
  if (obj instanceof Date) return new Date(obj);
  
  // Handle Array
  if (Array.isArray(obj)) return obj.map(item => deepClone(item, hash));
  
  // Handle RegExp
  if (obj instanceof RegExp) return new RegExp(obj);
  
  // Handle Set
  if (obj instanceof Set) {
    const clonedSet = new Set();
    obj.forEach(value => clonedSet.add(deepClone(value, hash)));
    return clonedSet;
  }
  
  // Handle Map
  if (obj instanceof Map) {
    const clonedMap = new Map();
    obj.forEach((value, key) => clonedMap.set(key, deepClone(value, hash)));
    return clonedMap;
  }
  
  // Check circular references
  if (hash.has(obj)) return hash.get(obj);
  
  // Create new object
  const clonedObj = {};
  
  // Cache the clone to handle circular references
  hash.set(obj, clonedObj);
  
  // Clone each property
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key], hash);
    }
  }
  
  return clonedObj;
}

// Test deep clone with circular reference
const complex = {
  a: 1,
  b: { c: 3 },
  d: [1, 2, 3]
};
complex.circular = complex;

const deepCloned = deepClone(complex);
complex.b.c = 4;
console.log(deepCloned.b.c); // Still 3
console.log(deepCloned.circular === deepCloned); // true - circular reference preserved

// 2.3 Using Libraries
// Many libraries provide deep cloning functionality:
// - lodash: _.cloneDeep(obj)
// - Ramda: R.clone(obj)
// - structuredClone: new browser API
// Example with structuredClone (modern browsers and Node.js 17+)
try {
  const structClone = structuredClone(complex);
  complex.b.c = 5;
  console.log(structClone.b.c); // Still 4
} catch (e) {
  console.log("structuredClone not available in this environment");
}`,
  bestPractices: [
    "Use spread syntax or Object.assign() for simple, fast shallow cloning",
    "Consider structuredClone() (in modern environments) for built-in deep cloning",
    "Understand the differences between shallow and deep cloning based on your needs",
    "Be cautious with JSON.parse/stringify for deep cloning due to its limitations",
    "Use a well-tested library like Lodash for complex deep cloning in production code",
  ],
  commonMistakes: [
    "Assuming assignment (=) creates a copy of objects or arrays",
    "Using shallow copy methods but expecting deep copy behavior",
    "Not handling circular references when implementing custom deep cloning",
    "Forgetting that JSON.parse/stringify can't handle functions, undefined, symbols, etc.",
    "Over-optimizing by trying to write your own deep clone function for complex scenarios",
  ],
  tips: [
    "For simple objects without nested structures, shallow cloning is faster and sufficient",
    "Use the new structuredClone() browser API for simple deep cloning when available",
    "Remember that shallow copying creates a new object but shares nested references",
    "Consider immutable data patterns to avoid the need for defensive copying",
    "When performance matters, be strategic about what and when you clone",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Cloning in JavaScript" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Shallow Clone" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Deep Clone" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Array Methods" },
          position: { x: 0, y: 200 },
        },
        {
          id: "5",
          data: { label: "Object Methods" },
          position: { x: 200, y: 200 },
        },
        {
          id: "6",
          data: { label: "JSON Method" },
          position: { x: 350, y: 200 },
        },
        {
          id: "7",
          data: { label: "Recursive Function" },
          position: { x: 450, y: 200 },
        },
        {
          id: "8",
          data: { label: "Library Functions" },
          position: { x: 550, y: 200 },
        },
        {
          id: "9",
          data: { label: "slice()" },
          position: { x: -50, y: 300 },
        },
        {
          id: "10",
          data: { label: "[...array]" },
          position: { x: 50, y: 300 },
        },
        {
          id: "11",
          data: { label: "Object.assign()" },
          position: { x: 150, y: 300 },
        },
        {
          id: "12",
          data: { label: "{...object}" },
          position: { x: 250, y: 300 },
        },
        {
          id: "13",
          data: { label: "JSON.parse\nJSON.stringify" },
          position: { x: 350, y: 300 },
        },
        {
          id: "14",
          data: { label: "Custom\ndeepClone()" },
          position: { x: 450, y: 300 },
        },
        {
          id: "15",
          data: { label: "lodash\ncloneDeep()" },
          position: { x: 525, y: 300 },
        },
        {
          id: "16",
          data: { label: "structuredClone()" },
          position: { x: 625, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e4-9", source: "4", target: "9", type: "smoothstep" },
        { id: "e4-10", source: "4", target: "10", type: "smoothstep" },
        { id: "e5-11", source: "5", target: "11", type: "smoothstep" },
        { id: "e5-12", source: "5", target: "12", type: "smoothstep" },
        { id: "e6-13", source: "6", target: "13", type: "smoothstep" },
        { id: "e7-14", source: "7", target: "14", type: "smoothstep" },
        { id: "e8-15", source: "8", target: "15", type: "smoothstep" },
        { id: "e8-16", source: "8", target: "16", type: "smoothstep" },
      ],
    },
  },
};
