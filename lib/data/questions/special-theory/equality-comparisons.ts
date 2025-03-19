import { Question } from "@/types/questions";

export const equalityComparisons: Question = {
  id: "equality-comparisons",
  category: "Special Theory",
  number: 30,
  title: "What is the difference between == and === in JavaScript?",
  description:
    "JavaScript provides two different operators for equality comparison: the equality operator (==) and the strict equality operator (===). The main difference is that == performs type coercion before comparison if the operands have different types, while === compares both value and type without coercion. Understanding when to use each is crucial for writing predictable JavaScript code and avoiding unexpected bugs related to type conversion.",
  example: `// Strict Equality (===) - Compares value AND type
console.log(5 === 5);         // true - same value and type
console.log('5' === 5);       // false - different types
console.log(true === true);   // true - same value and type
console.log(null === null);   // true - same value and type
console.log(undefined === undefined); // true - same value and type
console.log(NaN === NaN);     // false - NaN is never equal to itself!

// Loose Equality (==) - Performs type coercion
console.log(5 == 5);          // true - same value and type
console.log('5' == 5);        // true - string '5' is coerced to number 5
console.log(0 == false);      // true - false is coerced to number 0
console.log(0 == '');         // true - empty string is coerced to number 0
console.log(1 == true);       // true - true is coerced to number 1
console.log(null == undefined); // true - special case in the coercion rules
console.log(null == 0);       // false - null is only loosely equal to undefined
console.log(NaN == NaN);      // false - NaN is never equal to itself, even with coercion

// Understanding type coercion rules with ==
console.log([] == 0);         // true - empty array is coerced to empty string, then to 0
console.log([1] == 1);        // true - array with a single element is coerced to that element 
console.log(['1'] == 1);      // true - string '1' is coerced to number 1
console.log([1,2] == '1,2');  // true - array is coerced to comma-separated string

// Object comparisons
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 == obj2);    // false - different objects/references
console.log(obj1 === obj2);   // false - different objects/references
console.log(obj1 == obj3);    // true - same object/reference
console.log(obj1 === obj3);   // true - same object/reference

// Common pitfalls with ==
console.log('' == '0');       // false - no type coercion needed, different strings
console.log(0 == '');         // true - '' is coerced to 0
console.log(0 == '0');        // true - '0' is coerced to 0
console.log(false == 'false'); // false - 'false' doesn't coerce to boolean false
console.log(false == '0');    // true - '0' is coerced to 0, which is coerced to false
console.log(" \\t\\r\\n" == 0);  // true - whitespace is coerced to empty string, then to 0

// The == algorithm (simplified):
// 1. If operands have same type, compare with ===
// 2. If null == undefined, return true
// 3. If comparing number with string, convert string to number
// 4. If one operand is boolean, convert to number (true → 1, false → 0)
// 5. If comparing object with primitive, convert object using toString() or valueOf()

// Practical examples and best practices
function getValue() {
  // Could return 0, false, '', null, undefined, or a truthy value
  return document.getElementById('some-input').value;
}

// Avoiding common issues with null/undefined checks
const value = getValue();

// Bad - doesn't distinguish between 0, '', false, null, and undefined
if (value) {
  console.log('Value exists');
}

// Better - explicitly checking for null or undefined
if (value !== null && value !== undefined) {
  console.log('Value exists (even if 0, empty string, or false)');
}

// Or using == to check against both null and undefined at once
if (value != null) { // same as: value !== null && value !== undefined
  console.log('Value exists (even if 0, empty string, or false)');
}

// Testing for "emptiness" in different ways
function isEmpty(value) {
  // For null/undefined
  if (value == null) return true;
  
  // For strings and arrays
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  
  // For objects
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  
  // For numbers
  if (typeof value === 'number') {
    return value === 0;
  }
  
  // For booleans
  if (typeof value === 'boolean') {
    return value === false;
  }
  
  return false;
}

// When to use == vs. ===
function processInput(input) {
  // === is preferred in most cases for predictability
  if (input === null || input === undefined) {
    return 'No input provided';
  }
  
  // One legitimate use of == is to check for null/undefined
  if (input == null) { // checks for both null and undefined
    return 'No input provided';
  }
  
  // Another example where === is clearer
  if (typeof input === 'string' && input.length === 0) {
    return 'Empty string';
  }
  
  return 'Valid input';
}`,
  bestPractices: [
    "Use === as the default equality operator to avoid unexpected type coercion issues",
    "Use == only when you explicitly want type coercion (e.g., checking if a value is null or undefined with value == null)",
    "When checking if a value exists (not null or undefined), use value != null instead of the longer value !== null && value !== undefined",
    "Always be explicit about type conversions instead of relying on implicit coercion",
    "Be careful when comparing objects - they are compared by reference, not by content",
    "Remember that NaN is not equal to anything, including itself - use Number.isNaN() to check for NaN",
  ],
  commonMistakes: [
    "Assuming == will behave intuitively - it follows complex coercion rules that can be surprising",
    "Using == when checking for truthiness (use Boolean(value) or !!value instead)",
    "Using == with complex objects and expecting deep equality comparison",
    "Forgetting that 0, empty strings, and false are all loosely equal to each other",
    "Using == with strings that contain numbers and expecting string comparison",
    "Not accounting for NaN's special behavior with equality operators",
  ],
  tips: [
    "When your code seems to work inconsistently, check if == is causing unexpected type coercion",
    "If you need to compare objects by value, use a deep equality function or JSON.stringify()",
    "For array equality, either compare each element or convert both to strings if appropriate",
    "The pattern value != null is a useful shorthand for checking if a value exists (not null or undefined)",
    "For deep equality comparisons, consider using libraries like lodash's isEqual() or writing custom comparison logic",
    "Read the ECMAScript specification if you need to understand the exact rules of the Abstract Equality Comparison Algorithm",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Equality Comparison" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "=== (Strict Equality)" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "== (Loose Equality)" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Compares Value and Type" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "Performs Type Coercion" },
          position: { x: 400, y: 200 },
        },
        {
          id: "6",
          data: { label: "5 === 5 (true)" },
          position: { x: 50, y: 300 },
        },
        {
          id: "7",
          data: { label: "'5' === 5 (false)" },
          position: { x: 150, y: 300 },
        },
        {
          id: "8",
          data: { label: "Coercion Rules" },
          position: { x: 400, y: 300 },
        },
        {
          id: "9",
          data: { label: "String to Number" },
          position: { x: 300, y: 400 },
        },
        {
          id: "10",
          data: { label: "Boolean to Number" },
          position: { x: 400, y: 400 },
        },
        {
          id: "11",
          data: { label: "Object to Primitive" },
          position: { x: 500, y: 400 },
        },
        {
          id: "12",
          data: { label: "'5' == 5 (true)" },
          position: { x: 300, y: 500 },
        },
        {
          id: "13",
          data: { label: "true == 1 (true)" },
          position: { x: 400, y: 500 },
        },
        {
          id: "14",
          data: { label: "[] == '' (true)" },
          position: { x: 500, y: 500 },
        },
        {
          id: "15",
          data: { label: "null == undefined (true)" },
          position: { x: 600, y: 400 },
        },
        {
          id: "16",
          data: { label: "Recommended Usage" },
          position: { x: 250, y: 600 },
        },
        {
          id: "17",
          data: { label: "Use === by default" },
          position: { x: 100, y: 700 },
        },
        {
          id: "18",
          data: { label: "Use == for null/undefined checks" },
          position: { x: 400, y: 700 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e5-8", source: "5", target: "8", type: "smoothstep" },
        { id: "e8-9", source: "8", target: "9", type: "smoothstep" },
        { id: "e8-10", source: "8", target: "10", type: "smoothstep" },
        { id: "e8-11", source: "8", target: "11", type: "smoothstep" },
        { id: "e8-15", source: "8", target: "15", type: "smoothstep" },
        { id: "e9-12", source: "9", target: "12", type: "smoothstep" },
        { id: "e10-13", source: "10", target: "13", type: "smoothstep" },
        { id: "e11-14", source: "11", target: "14", type: "smoothstep" },
        { id: "e1-16", source: "1", target: "16", type: "smoothstep" },
        { id: "e16-17", source: "16", target: "17", type: "smoothstep" },
        { id: "e16-18", source: "16", target: "18", type: "smoothstep" },
      ],
    },
  },
};
