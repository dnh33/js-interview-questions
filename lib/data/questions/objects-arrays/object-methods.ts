import { Question } from "@/types/questions";

export const objectMethods: Question = {
  id: "object-methods",
  category: "Objects and Arrays",
  number: 23,
  title:
    "What are object methods like Object.keys(), Object.values(), and Object.entries()?",
  description:
    "JavaScript provides several static methods on the Object constructor to help work with object properties. Object.keys() returns an array of a given object's own enumerable property names. Object.values() returns an array of the object's own enumerable property values. Object.entries() returns an array of arrays, each containing a key-value pair. These methods provide powerful ways to transform and iterate over object data.",
  example: `// Creating a sample object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john@example.com'
};

// Object.keys()
// Returns an array of the object's own enumerable property names
const keys = Object.keys(person);
console.log(keys);
// ["firstName", "lastName", "age", "email"]

// Using keys for iteration
keys.forEach(key => {
  console.log(\`\${key}: \${person[key]}\`);
});
// "firstName: John"
// "lastName: Doe"
// "age: 30"
// "email: john@example.com"

// Object.values()
// Returns an array of the object's own enumerable property values
const values = Object.values(person);
console.log(values);
// ["John", "Doe", 30, "john@example.com"]

// Using values for calculations
const numbers = { a: 10, b: 20, c: 30 };
const sum = Object.values(numbers).reduce((total, num) => total + num, 0);
console.log(sum); // 60

// Object.entries()
// Returns an array of [key, value] pairs
const entries = Object.entries(person);
console.log(entries);
// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["age", 30],
//   ["email", "john@example.com"]
// ]

// Using entries for more complex transformations
// 1. Convert to Map
const personMap = new Map(entries);
console.log(personMap.get("firstName")); // "John"

// 2. Filtering properties
const adultProperties = Object.entries(person)
  .filter(([key, value]) => typeof value === 'number' && value >= 18)
  .map(([key]) => key);
console.log(adultProperties); // ["age"]

// 3. Creating a transformed object
const upperCasedPerson = Object.entries(person).reduce((obj, [key, value]) => {
  obj[key] = typeof value === 'string' ? value.toUpperCase() : value;
  return obj;
}, {});

console.log(upperCasedPerson);
// { firstName: "JOHN", lastName: "DOE", age: 30, email: "JOHN@EXAMPLE.COM" }

// Object.fromEntries() (ES2019)
// Creates an object from an array of key-value pairs
const modifiedEntries = entries.map(([key, value]) => {
  if (key === 'age') return [key, value + 1];
  return [key, value];
});

const updatedPerson = Object.fromEntries(modifiedEntries);
console.log(updatedPerson);
// { firstName: "John", lastName: "Doe", age: 31, email: "john@example.com" }

// Practical Use Cases:

// 1. Filtering object properties
function filterObject(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(value, key))
  );
}

const onlyStrings = filterObject(person, value => typeof value === 'string');
console.log(onlyStrings);
// { firstName: "John", lastName: "Doe", email: "john@example.com" }

// 2. Mapping object values
function mapValues(obj, mapFn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, mapFn(value, key)])
  );
}

const doubled = mapValues(numbers, n => n * 2);
console.log(doubled); // { a: 20, b: 40, c: 60 }

// 3. Converting array to object
const fruits = ['apple', 'banana', 'cherry'];
const fruitLengths = Object.fromEntries(
  fruits.map(fruit => [fruit, fruit.length])
);
console.log(fruitLengths);
// { apple: 5, banana: 6, cherry: 6 }

// 4. Merging objects with transformations
const defaults = { theme: 'light', fontSize: 12, showSidebar: true };
const userPrefs = { theme: 'dark', fontSize: 14 };

const mergedPrefs = {
  ...defaults,
  ...userPrefs
};
console.log(mergedPrefs);
// { theme: "dark", fontSize: 14, showSidebar: true }`,
  bestPractices: [
    "Use Object.keys() when you only need property names or need to iterate over properties",
    "Use Object.values() when you only care about the values, not the keys",
    "Use Object.entries() for transformations that require both keys and values",
    "Combine Object.entries() with Object.fromEntries() for filtering and mapping objects",
    "Remember that these methods only return own enumerable properties",
  ],
  commonMistakes: [
    "Forgetting that these methods only work with enumerable properties",
    "Not accounting for prototype chain properties (these methods ignore inherited properties)",
    "Treating objects as ordered collections (property order is not always guaranteed)",
    "Using these methods on non-object values without proper checks",
    "Not considering performance for very large objects",
  ],
  tips: [
    "Use array destructuring with Object.entries() for more readable code",
    "Combine with array methods like map(), filter(), and reduce() for powerful data transformations",
    "Object.fromEntries() is perfect for converting back to an object after manipulating entries",
    "These methods are useful in functional programming approaches with objects",
    "For older browsers, use polyfills or transpilers as these methods are relatively recent additions",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "JavaScript Object" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Object.keys()" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Object.values()" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Object.entries()" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Array of\nProperty Names" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Array of\nProperty Values" },
          position: { x: 250, y: 200 },
        },
        {
          id: "7",
          data: { label: "Array of\n[key, value]\nPairs" },
          position: { x: 400, y: 200 },
        },
        {
          id: "8",
          data: { label: "Iterate over\nProperties" },
          position: { x: 100, y: 300 },
        },
        {
          id: "9",
          data: { label: "Process Values\nCollectively" },
          position: { x: 250, y: 300 },
        },
        {
          id: "10",
          data: { label: "Transform\nObject" },
          position: { x: 400, y: 300 },
        },
        {
          id: "11",
          data: { label: "Object.fromEntries()" },
          position: { x: 400, y: 400 },
        },
        {
          id: "12",
          data: { label: "Original\nObject" },
          position: { x: 250, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e5-8", source: "5", target: "8", type: "smoothstep" },
        { id: "e6-9", source: "6", target: "9", type: "smoothstep" },
        { id: "e7-10", source: "7", target: "10", type: "smoothstep" },
        { id: "e10-11", source: "10", target: "11", type: "smoothstep" },
        { id: "e11-12", source: "11", target: "12", type: "smoothstep" },
      ],
    },
  },
};
