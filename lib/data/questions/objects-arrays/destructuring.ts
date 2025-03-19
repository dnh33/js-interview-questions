import { Question } from "@/types/questions";

export const destructuring: Question = {
  id: "destructuring",
  category: "Objects and Arrays",
  number: 17,
  title:
    "How does destructuring work in JavaScript and what problems does it solve?",
  description:
    "Destructuring is a JavaScript expression that allows extracting values from arrays or properties from objects into distinct variables. It simplifies code, improves readability, and provides more concise ways to work with complex data structures.",
  example: `// Array Destructuring
// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor);  // 'blue'

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

// Rest pattern with arrays
const [head, ...tail] = colors;
console.log(head); // 'red'
console.log(tail); // ['green', 'blue']

// Default values with arrays
const incomplete = ['red'];
const [primaryColor, secondaryColor = 'yellow'] = incomplete;
console.log(primaryColor);   // 'red'
console.log(secondaryColor); // 'yellow' (default value)

// Swapping variables without a temporary variable
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [first, [second, third], fourth] = nestedArray;
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
console.log(fourth); // 4

// Object Destructuring
// Basic object destructuring
const user = {
  name: 'John',
  age: 30,
  location: 'New York'
};

const { name, age, location } = user;
console.log(name);     // 'John'
console.log(age);      // 30
console.log(location); // 'New York'

// Assigning to different variable names
const { name: userName, age: userAge } = user;
console.log(userName); // 'John'
console.log(userAge);  // 30

// Default values with objects
const incompleteUser = { name: 'Jane' };
const { name: fullName, age: userYears = 25 } = incompleteUser;
console.log(fullName);  // 'Jane'
console.log(userYears); // 25 (default value)

// Nested object destructuring
const customer = {
  id: 1,
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
};

const { 
  name: customerName, 
  address: { city, state } 
} = customer;

console.log(customerName); // 'Alice'
console.log(city);        // 'Boston'
console.log(state);       // 'MA'

// Rest pattern with objects
const { id, ...customerDetails } = customer;
console.log(id);               // 1
console.log(customerDetails); // { name: 'Alice', address: { street: '123 Main St', city: 'Boston', state: 'MA' } }

// Function parameter destructuring
function printUserInfo({ name, age, location = 'Unknown' }) {
  console.log(\`\${name} is \${age} years old and lives in \${location}\`);
}

printUserInfo(user); // 'John is 30 years old and lives in New York'
printUserInfo({ name: 'Bob', age: 25 }); // 'Bob is 25 years old and lives in Unknown'

// Destructuring from function returns
function getCoordinates() {
  return { x: 10, y: 20 };
}

const { x, y } = getCoordinates();
console.log(x); // 10
console.log(y); // 20

// Combining array and object destructuring
const people = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Manager' }
];

const [, { name: secondPersonName, role: secondPersonRole }] = people;
console.log(secondPersonName);  // 'Bob'
console.log(secondPersonRole);  // 'Designer'

// Practical example: working with complex API responses
const apiResponse = {
  status: 'success',
  code: 200,
  data: {
    users: [
      { id: 1, username: 'user1', email: 'user1@example.com' },
      { id: 2, username: 'user2', email: 'user2@example.com' }
    ],
    pagination: {
      currentPage: 1,
      totalPages: 5
    }
  }
};

const { 
  status, 
  data: { 
    users: [firstUser, secondUser],
    pagination: { currentPage }
  } 
} = apiResponse;

console.log(status);      // 'success'
console.log(firstUser);   // { id: 1, username: 'user1', email: 'user1@example.com' }
console.log(secondUser.username); // 'user2'
console.log(currentPage); // 1

// Use with dynamic property names
const propName = 'title';
const book = { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' };

const { [propName]: bookTitle } = book;
console.log(bookTitle); // 'JavaScript: The Good Parts'

// Destructuring with computed properties
const key = 'dynamic';
const obj = { dynamic: 'value' };

const { [key]: dynamicValue } = obj;
console.log(dynamicValue); // 'value'`,
  bestPractices: [
    "Use destructuring in function parameters to make APIs more flexible and cleaner",
    "Apply default values when destructuring to handle missing properties gracefully",
    "Combine the rest operator with destructuring to collect remaining values",
    "Use destructuring for multiple return values instead of returning objects and accessing properties separately",
    "Destructure only what you need from large objects or arrays",
    "Use array destructuring for swapping variables without temporary variables",
  ],
  commonMistakes: [
    "Forgetting to provide default values when destructuring potentially undefined properties",
    "Not using parentheses when destructuring in a statement context (without assignment)",
    "Attempting to destructure null or undefined, which will throw an error",
    "Overusing nested destructuring which can make code harder to read",
    "Destructuring without checking object shape, potentially causing runtime errors",
    "Confusion between the rest operator (...) in destructuring and the spread operator in other contexts",
  ],
  tips: [
    "You can use destructuring to pick specific properties from an object when passing it to a function",
    "To rename properties during destructuring, use the syntax { originalName: newName }",
    "For TypeScript users, you can also add type annotations during destructuring",
    "Array destructuring works with any iterable, not just arrays (strings, Maps, Sets, etc.)",
    "Use destructuring in for...of loops to work with entries from Maps or Object.entries()",
    "Combine destructuring with optional chaining (?.) to safely access nested properties",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Destructuring" },
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
          data: { label: "Basic Pattern\n[a, b] = array" },
          position: { x: 25, y: 200 },
        },
        {
          id: "5",
          data: { label: "Skip Elements\n[a, , c] = array" },
          position: { x: 125, y: 200 },
        },
        {
          id: "6",
          data: { label: "Rest Pattern\n[a, ...rest] = array" },
          position: { x: 25, y: 300 },
        },
        {
          id: "7",
          data: { label: "Default Values\n[a = 'default'] = array" },
          position: { x: 125, y: 300 },
        },
        {
          id: "8",
          data: { label: "Basic Pattern\n{a, b} = object" },
          position: { x: 325, y: 200 },
        },
        {
          id: "9",
          data: { label: "Rename Properties\n{a: newName} = object" },
          position: { x: 425, y: 200 },
        },
        {
          id: "10",
          data: { label: "Nested Objects\n{a, b: {c}} = object" },
          position: { x: 325, y: 300 },
        },
        {
          id: "11",
          data: { label: "Rest Pattern\n{a, ...rest} = object" },
          position: { x: 425, y: 300 },
        },
        {
          id: "12",
          data: { label: "Function Parameters\nfunction fn({a, b}) {}" },
          position: { x: 175, y: 400 },
        },
        {
          id: "13",
          data: { label: "Return Values\nconst {a, b} = fn()" },
          position: { x: 325, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e2-7", source: "2", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
        { id: "e3-10", source: "3", target: "10", type: "smoothstep" },
        { id: "e3-11", source: "3", target: "11", type: "smoothstep" },
        { id: "e1-12", source: "1", target: "12", type: "smoothstep" },
        { id: "e1-13", source: "1", target: "13", type: "smoothstep" },
      ],
    },
  },
};
