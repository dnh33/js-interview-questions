import { Question } from "@/types/questions";

export const prototypeChain: Question = {
  id: "prototype-chain",
  category: "Special Theory",
  number: 28,
  title: "What is the prototype chain in JavaScript?",
  description:
    "The prototype chain is JavaScript's inheritance mechanism. Each object has an internal link to another object called its prototype, which has its own prototype, forming a chain that ends with the base Object.prototype. When a property is accessed on an object, JavaScript first checks if the object itself has that property; if not, it looks up the prototype chain until it finds it or reaches the end of the chain. This allows objects to inherit methods and properties from other objects, enabling prototypal inheritance.",
  example: `// Creating objects with prototypes

// 1. Using Object.create()
const animal = {
  eat: function() {
    return \`\${this.name} is eating.\`;
  },
  sleep: function() {
    return \`\${this.name} is sleeping.\`;
  }
};

const dog = Object.create(animal);
dog.name = "Rex";
dog.bark = function() {
  return "Woof! Woof!";
};

console.log(dog.eat());  // "Rex is eating." - inherited from animal
console.log(dog.bark()); // "Woof! Woof!" - defined on dog

// 2. Using constructor functions
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.drive = function() {
  return \`The \${this.type} is moving.\`;
};

function Car(make, model) {
  // Call parent constructor
  Vehicle.call(this, "car");
  this.make = make;
  this.model = model;
}

// Set up prototype chain: Car -> Vehicle -> Object
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // Fix constructor property

// Add method to Car.prototype
Car.prototype.honk = function() {
  return "Beep!";
};

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.drive()); // "The car is moving." - inherited from Vehicle
console.log(myCar.honk());  // "Beep!" - defined on Car.prototype
console.log(myCar instanceof Car);     // true
console.log(myCar instanceof Vehicle); // true

// 3. Using ES6 classes (syntactic sugar over prototype-based inheritance)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a noise.\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks.\`;
  }
  
  fetch() {
    return \`\${this.name} fetches the ball.\`;
  }
}

const fido = new Dog("Fido");
console.log(fido.speak()); // "Fido barks." - overridden method
console.log(fido.fetch()); // "Fido fetches the ball." - defined in Dog

// Exploring the prototype chain
function inspect(obj) {
  let current = obj;
  let count = 0;
  const chain = [];
  
  while (current) {
    chain.push({
      level: count,
      constructor: current.constructor ? current.constructor.name : "none",
      ownProps: Object.getOwnPropertyNames(current)
    });
    
    current = Object.getPrototypeOf(current);
    count++;
  }
  
  return chain;
}

// Inspect the prototype chain of our dog instance
console.log(JSON.stringify(inspect(fido), null, 2));
/* Output:
[
  {
    "level": 0,
    "constructor": "Dog",
    "ownProps": ["name"]
  },
  {
    "level": 1,
    "constructor": "Dog",
    "ownProps": ["constructor", "speak", "fetch"]
  },
  {
    "level": 2,
    "constructor": "Animal",
    "ownProps": ["constructor", "speak"]
  },
  {
    "level": 3,
    "constructor": "Object",
    "ownProps": [many Object.prototype methods]
  }
]
*/

// ---- Practical examples of prototype chain usage ----

// Extending built-in objects (be careful with this!)
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log("hello".capitalize()); // "Hello"

// Polyfilling methods for older browsers
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    // Implementation details...
    return index > -1;
  };
}

// Using prototype for memory efficiency
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

// Methods shared among all instances go on the prototype
Employee.prototype.getDetails = function() {
  return \`\${this.name} works as a \${this.position}\`;
};

// This way, 1000 employees will share one copy of getDetails
// instead of each having their own
const employees = [];
for (let i = 0; i < 1000; i++) {
  employees.push(new Employee(\`Employee \${i}\`, "Developer"));
}`,
  bestPractices: [
    "Understand that JavaScript uses prototypal inheritance, not classical inheritance",
    "Use Object.create() to create objects with specific prototypes",
    "Avoid modifying built-in object prototypes in production code",
    "Use ES6 classes for cleaner syntax when working with inheritance",
    "Remember to restore the constructor property when setting up inheritance with constructor functions",
    "Place shared methods on the prototype for memory efficiency, not in constructors",
  ],
  commonMistakes: [
    "Confusing JavaScript's prototypal inheritance with classical inheritance from languages like Java",
    "Modifying Object.prototype or other built-in prototypes, which can cause unexpected behavior in your code and libraries",
    "Forgetting to fix the constructor property when setting up inheritance manually",
    "Not understanding that __proto__ is a legacy feature and should be avoided in favor of Object.getPrototypeOf()",
    "Creating deep prototype chains that can lead to performance issues when looking up properties",
  ],
  tips: [
    "Use Object.getPrototypeOf() instead of the deprecated __proto__ property to access an object's prototype",
    "Use Object.hasOwnProperty() to check if a property exists on the object itself, not its prototype chain",
    "Remember that ES6 classes are just syntactic sugar over JavaScript's prototype-based inheritance",
    "instanceof operator checks if an object's prototype chain contains the prototype property of a constructor",
    "Use object composition over inheritance when appropriate to avoid deep prototype chains",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Object Instance" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Instance Properties" },
          position: { x: 100, y: 75 },
        },
        {
          id: "3",
          data: { label: "[[Prototype]]" },
          position: { x: 250, y: 150 },
        },
        {
          id: "4",
          data: { label: "Constructor.prototype" },
          position: { x: 250, y: 225 },
        },
        {
          id: "5",
          data: { label: "Prototype Methods" },
          position: { x: 100, y: 225 },
        },
        {
          id: "6",
          data: { label: "[[Prototype]]" },
          position: { x: 250, y: 300 },
        },
        {
          id: "7",
          data: { label: "Parent.prototype" },
          position: { x: 250, y: 375 },
        },
        {
          id: "8",
          data: { label: "Parent Methods" },
          position: { x: 100, y: 375 },
        },
        {
          id: "9",
          data: { label: "[[Prototype]]" },
          position: { x: 250, y: 450 },
        },
        {
          id: "10",
          data: { label: "Object.prototype" },
          position: { x: 250, y: 525 },
        },
        {
          id: "11",
          data: { label: "Object Methods" },
          position: { x: 100, y: 525 },
        },
        {
          id: "12",
          data: { label: "[[Prototype]]" },
          position: { x: 250, y: 600 },
        },
        {
          id: "13",
          data: { label: "null" },
          position: { x: 250, y: 675 },
        },
        {
          id: "14",
          data: { label: "new" },
          position: { x: 400, y: 75 },
        },
        {
          id: "15",
          data: { label: "Constructor Function" },
          position: { x: 400, y: 150 },
        },
        {
          id: "16",
          data: { label: "prototype" },
          position: { x: 400, y: 225 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
        { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
        { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        { id: "e7-8", source: "7", target: "8", type: "smoothstep" },
        { id: "e7-9", source: "7", target: "9", type: "smoothstep" },
        { id: "e9-10", source: "9", target: "10", type: "smoothstep" },
        { id: "e10-11", source: "10", target: "11", type: "smoothstep" },
        { id: "e10-12", source: "10", target: "12", type: "smoothstep" },
        { id: "e12-13", source: "12", target: "13", type: "smoothstep" },
        { id: "e14-1", source: "14", target: "1", type: "smoothstep" },
        { id: "e14-15", source: "14", target: "15", type: "smoothstep" },
        { id: "e15-16", source: "15", target: "16", type: "smoothstep" },
        { id: "e16-4", source: "16", target: "4", type: "smoothstep" },
      ],
    },
  },
};
