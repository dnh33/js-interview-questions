import { Question } from "@/types/questions";

export const bindCallApply: Question = {
  id: "bind-call-apply",
  category: "Special Theory",
  number: 29,
  title: "What are bind(), call(), and apply() methods in JavaScript?",
  description:
    "The bind(), call(), and apply() methods are function methods in JavaScript that allow you to control the value of 'this' within a function and optionally pass arguments. They are crucial for understanding how function context works in JavaScript and are often used to borrow methods from other objects, create partially applied functions, or invoke functions with a specific context. While all three methods serve similar purposes, they differ in how they're invoked and how arguments are passed to the target function.",
  example: `// Basic function for demonstrations
function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

const person = { name: "John" };
const car = { name: "Tesla" };

// ------ call() method ------
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Immediately invokes the function with the specified 'this' value and arguments

// Using call() to set 'this' to the person object
console.log(greet.call(person, "Hello", "!")); // "Hello, John!"

// Using call() with a different object
console.log(greet.call(car, "Hi", ".")); // "Hi, Tesla."

// ------ apply() method ------
// Syntax: function.apply(thisArg, [argsArray])
// Same as call() but takes arguments as an array

// Using apply() with the person object and arguments as an array
console.log(greet.apply(person, ["Welcome", "!!"])); // "Welcome, John!!"

// Useful when you already have arguments in an array
const args = ["Goodbye", "..."];
console.log(greet.apply(car, args)); // "Goodbye, Tesla..."

// ------ bind() method ------
// Syntax: function.bind(thisArg[, arg1[, arg2[, ...]]])
// Returns a new function with 'this' bound to the specified value
// Does NOT immediately invoke the function

// Create a new function with 'this' bound to person
const greetJohn = greet.bind(person);
console.log(greetJohn("Hey", "?")); // "Hey, John?"

// Bind with some arguments pre-set (partial application)
const sayHelloToJohn = greet.bind(person, "Hello");
console.log(sayHelloToJohn("!!")); // "Hello, John!!"

// ------ Real-world examples ------

// 1. Using bind() for event handlers to preserve 'this'
class Button {
  constructor(label) {
    this.label = label;
    this.onClick = this.onClick.bind(this); // Bind in constructor
  }
  
  onClick(event) {
    console.log(\`\${this.label} button was clicked!\`);
  }
  
  render() {
    // When passed as a callback, 'this' is preserved
    return {
      addClickListener: this.onClick
    };
  }
}

const button = new Button("Submit");
const rendered = button.render();
// No loss of 'this' when onClick is called
rendered.addClickListener(); // "Submit button was clicked!"

// Alternative using arrow function (lexical 'this')
class ButtonWithArrow {
  constructor(label) {
    this.label = label;
  }
  
  // Arrow function captures 'this' lexically
  onClick = (event) => {
    console.log(\`\${this.label} button was clicked!\`);
  }
  
  render() {
    return {
      addClickListener: this.onClick
    };
  }
}

// 2. Using call() to chain constructors
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price, category) {
  // Chain to Product constructor
  Product.call(this, name, price);
  this.category = category;
}

const cheese = new Food("Cheese", 5, "Dairy");
console.log(cheese); // { name: "Cheese", price: 5, category: "Dairy" }

// 3. Using apply() with Math functions
const numbers = [5, 6, 2, 3, 7];
// Math.max() normally doesn't accept arrays
const max = Math.max.apply(null, numbers); // Same as Math.max(5, 6, 2, 3, 7)
console.log(max); // 7

// Modern alternative using spread syntax
console.log(Math.max(...numbers)); // 7

// 4. Borrowing methods from other objects
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

// Borrow Array.prototype.slice to convert array-like to array
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // ["a", "b", "c"]

// Modern alternative
console.log(Array.from(arrayLike)); // ["a", "b", "c"]

// 5. Function with custom context
const calculator = {
  multiply: function(x, y) {
    return x * y;
  },
  
  calculate: function(operation, x, y) {
    return operation.call(this, x, y);
  }
};

function add(x, y) {
  return x + y;
}

console.log(calculator.calculate(add, 5, 3)); // 8
console.log(calculator.calculate(calculator.multiply, 5, 3)); // 15

// 6. Partial application (currying)
function multiply(x, y) {
  return x * y;
}

// Create functions with pre-set first argument
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5)); // 10 (2*5)
console.log(triple(5)); // 15 (3*5)`,
  bestPractices: [
    "Use bind() when you need to preserve 'this' context in callbacks, particularly for event handlers",
    "Prefer arrow functions over bind() for simple context preservation, as they're more concise and capture 'this' lexically",
    "Use call() when you need to invoke a function immediately with a specific 'this' value and individual arguments",
    "Use apply() when you have arguments in an array format or when borrowing methods that operate on array-like objects",
    "When using apply() with methods that don't depend on 'this' context (like Math.max), use null or undefined as the first argument",
    "Be cautious when using these methods with arrow functions, as arrow functions have lexical 'this' binding that cannot be changed",
  ],
  commonMistakes: [
    "Forgetting that bind() returns a new function and doesn't invoke the original function immediately",
    "Using call() or apply() when you actually need bind() (especially with callbacks that should run later)",
    "Unnecessarily using bind(), call(), or apply() when an arrow function would be cleaner",
    "Not understanding that these methods cannot override the lexical binding of arrow functions",
    "Using apply() when spread syntax would be more readable (in modern JavaScript)",
    "Accidentally creating memory leaks by repeatedly binding event handlers in component renders",
  ],
  tips: [
    "Modern JavaScript features like spread syntax (...args) and arrow functions can often replace apply() and bind() with more readable code",
    "bind() can be used for partial application to create specialized versions of functions with pre-set arguments",
    "For class methods that will be used as callbacks, bind them in the constructor or use class fields with arrow functions",
    "When working with DOM event handlers, bind 'this' if you need access to the component or use arrow functions",
    "Use Function.prototype.bind to create 'bound' functions for consistent behavior regardless of how they're called",
    "Remember that subsequent calls to bind() on an already-bound function won't change its 'this' value",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Function Methods" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: ".bind()" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: ".call()" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: ".apply()" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Returns new function" },
          position: { x: 100, y: 200 },
        },
        {
          id: "6",
          data: { label: "Invokes immediately" },
          position: { x: 325, y: 200 },
        },
        {
          id: "7",
          data: { label: "Sets 'this' value" },
          position: { x: 250, y: 300 },
        },
        {
          id: "8",
          data: { label: "Individual arguments" },
          position: { x: 250, y: 400 },
        },
        {
          id: "9",
          data: { label: "Array of arguments" },
          position: { x: 400, y: 400 },
        },
        {
          id: "10",
          data: { label: "Partial application" },
          position: { x: 100, y: 400 },
        },
        {
          id: "11",
          data: { label: "Event handlers" },
          position: { x: 100, y: 500 },
        },
        {
          id: "12",
          data: { label: "Constructor chaining" },
          position: { x: 250, y: 500 },
        },
        {
          id: "13",
          data: { label: "Method borrowing" },
          position: { x: 400, y: 500 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
        { id: "e2-7", source: "2", target: "7", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e4-7", source: "4", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e4-9", source: "4", target: "9", type: "smoothstep" },
        { id: "e2-10", source: "2", target: "10", type: "smoothstep" },
        { id: "e10-11", source: "10", target: "11", type: "smoothstep" },
        { id: "e7-12", source: "7", target: "12", type: "smoothstep" },
        { id: "e7-13", source: "7", target: "13", type: "smoothstep" },
      ],
    },
  },
};
