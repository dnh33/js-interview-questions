import { Question } from "@/types/questions";

export const higherOrderFunctions: Question = {
  id: "higher-order-functions",
  category: "Fancy Features in JavaScript",
  number: 16,
  title:
    "What are higher-order functions in JavaScript, and can you provide an example?",
  description:
    "Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. This functional programming concept enables powerful patterns like function composition, abstraction, and callback-based programming in JavaScript.",
  example: `// Example 1: Function taking another function as an argument
const numbers = [1, 2, 3, 4, 5];

// filter is a higher-order function that takes a predicate function
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// Example 2: Function returning another function
function multiplyBy(factor) {
  // Returns a new function
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Example 3: Function composition using higher-order functions
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const add1 = x => x + 1;
const square = x => x * x;

const squareAndAdd1 = compose(add1, square);
const add1AndSquare = compose(square, add1);

console.log(squareAndAdd1(5)); // 26 (5^2 + 1)
console.log(add1AndSquare(5)); // 36 ((5+1)^2)

// Example 4: Array methods as higher-order functions
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 }
];

// Using higher-order functions for data transformation
const expensiveProducts = products
  .filter(product => product.price > 700)
  .map(product => product.name)
  .join(', ');

console.log(expensiveProducts); // "Laptop, Phone"

// Example 5: Implementing a custom higher-order function
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // Logs 0, 1, 2`,
  bestPractices: [
    "Use arrow functions for shorter, more concise callback functions",
    "Leverage built-in higher-order functions like map, filter, reduce, and forEach",
    "Use function composition to create reusable function pipelines",
    "Avoid excessive nesting of higher-order functions that could reduce readability",
    "Consider using libraries like Lodash for advanced functional programming patterns",
  ],
  commonMistakes: [
    "Forgetting that array methods like map, filter, reduce are higher-order functions",
    "Misunderstanding the scope and 'this' binding in callback functions",
    "Overlooking the importance of function purity when working with higher-order functions",
    "Creating overly complex nested function structures that are difficult to debug",
    "Not handling edge cases in custom higher-order functions",
  ],
  tips: [
    "Higher-order functions promote code reusability and composability",
    "They are fundamental to functional programming in JavaScript",
    "Many browser APIs use higher-order functions (like setTimeout, addEventListener)",
    "Use method chaining with array methods for elegant data transformations",
    "Higher-order functions can help reduce mutable state in your applications",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Higher-Order Function" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Takes Functions\nas Arguments" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Returns Functions\nas Results" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Array Methods\n(map, filter, reduce)" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "Function Factories" },
          position: { x: 400, y: 200 },
        },
        {
          id: "6",
          data: { label: "Event Handlers" },
          position: { x: 0, y: 200 },
        },
        {
          id: "7",
          data: { label: "Function Composition" },
          position: { x: 550, y: 200 },
        },
        {
          id: "8",
          data: { label: "Functional Programming\nParadigm" },
          position: { x: 250, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e4-8", source: "4", target: "8", type: "smoothstep" },
        { id: "e5-8", source: "5", target: "8", type: "smoothstep" },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
        { id: "e7-8", source: "7", target: "8", type: "smoothstep" },
      ],
    },
  },
};
