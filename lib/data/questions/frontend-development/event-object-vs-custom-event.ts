import { Question } from "@/types/questions";

export const eventObjectVsCustomEvent: Question = {
  id: "event-object-vs-custom-event",
  category: "Frontend Development",
  number: 34,
  title:
    "What is the difference between an event object and a custom event in JavaScript?",
  description:
    "Standard event objects are created by the browser when built-in events occur (like clicks or keyboard input), containing information about the event. Custom events are developer-created events that can be dispatched programmatically, allowing for custom application-specific event communication. Understanding both types enables building robust event-driven architectures.",
  example: `// Standard Event Object
document.querySelector('button').addEventListener('click', function(event) {
  // 'event' is the standard Event object created by the browser
  console.log(event.type); // "click"
  console.log(event.target); // the button element
  console.log(event.clientX, event.clientY); // mouse coordinates
  
  // Preventing default behavior
  event.preventDefault();
});

// Custom Event
// Creating a custom event
const productAddedEvent = new CustomEvent('productAdded', {
  detail: {
    productId: '12345',
    productName: 'Premium Widget',
    price: 49.99
  },
  bubbles: true,
  cancelable: true
});

// Dispatching the custom event
document.dispatchEvent(productAddedEvent);

// Listening for the custom event
document.addEventListener('productAdded', function(event) {
  // Access the custom data
  const product = event.detail;
  console.log(\`Product \${product.productName} was added, price: \$\${product.price}\`);
  
  // Add to cart functionality
  updateCart(product);
});

// A more practical example - communication between components
class ShoppingCart {
  constructor() {
    this.items = [];
    
    // Listen for product additions
    document.addEventListener('productAdded', this.handleProductAdded.bind(this));
    
    // Listen for product removals
    document.addEventListener('productRemoved', this.handleProductRemoved.bind(this));
  }
  
  handleProductAdded(event) {
    this.items.push(event.detail);
    this.updateCartUI();
  }
  
  handleProductRemoved(event) {
    const productId = event.detail.productId;
    this.items = this.items.filter(item => item.productId !== productId);
    this.updateCartUI();
  }
  
  updateCartUI() {
    // Update cart display
    console.log('Cart updated, items:', this.items.length);
  }
}

// Initialize cart
const cart = new ShoppingCart();

// In product component
function addToCart(product) {
  // Dispatch custom event when a product is added
  const event = new CustomEvent('productAdded', {
    detail: product,
    bubbles: true
  });
  
  document.dispatchEvent(event);
}`,
  bestPractices: [
    "Use the 'detail' property to pass data with custom events",
    "Set 'bubbles: true' if you want the event to propagate up the DOM tree",
    "Use event namespacing (e.g., 'app:feature:action') to avoid collisions",
    "Consider using a central event bus for application-wide events",
    "Document your custom events clearly for team communication",
  ],
  commonMistakes: [
    "Forgetting to set 'bubbles: true' when you need the event to propagate",
    "Not handling event cleanup, causing memory leaks",
    "Overusing events instead of direct function calls for simple component interactions",
    "Creating overly complex event data structures",
    "Not checking browser support for CustomEvent (some older browsers need polyfills)",
  ],
  tips: [
    "Use standard events when possible for better browser optimization",
    "Custom events are great for decoupling components in large applications",
    "Consider using libraries for more complex event handling needs",
    "The Event constructor can be used for simpler events without custom data",
    "TypeScript can help ensure type safety when working with custom event data",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "JavaScript Events" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Standard Events" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Custom Events" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Browser\nGenerated" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "Standard\nProperties" },
          position: { x: 100, y: 300 },
        },
        {
          id: "6",
          data: { label: "Developer\nCreated" },
          position: { x: 400, y: 200 },
        },
        {
          id: "7",
          data: { label: "Custom\nData (detail)" },
          position: { x: 400, y: 300 },
        },
        {
          id: "8",
          data: { label: "Event\nListeners" },
          position: { x: 250, y: 400 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        { id: "e2-8", source: "2", target: "8", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
      ],
    },
  },
};
