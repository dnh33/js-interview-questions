import { Question } from "@/types/questions";

export const optimizingPerformance: Question = {
  id: "optimizing-performance",
  category: "Frontend Development",
  number: 35,
  title: "How do you optimize performance in JavaScript applications?",
  description:
    "Performance optimization in JavaScript applications involves various techniques across loading, rendering, and runtime execution. Key strategies include minimizing asset size, reducing DOM operations, efficient memory management, and optimizing algorithms. A comprehensive approach to performance leads to better user experience and higher engagement.",
  example: `// 1. Code Splitting and Lazy Loading
// Instead of loading the entire application at once
import("./heavyModule.js").then(module => {
  // Use module only when needed
  module.doSomething();
});

// 2. Debouncing event handlers
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Apply debounce to expensive handlers
window.addEventListener('resize', debounce(() => {
  // Heavy calculation that shouldn't run on every resize event
  recalculateLayout();
}, 250));

// 3. Optimizing DOM operations
// Bad: Causes multiple reflows/repaints
function inefficientDOMManipulation() {
  const container = document.getElementById('container');
  for (let i = 0; i < 100; i++) {
    container.innerHTML += '<div>' + i + '</div>'; // Triggers reflow each time
  }
}

// Good: Batch DOM operations
function efficientDOMManipulation() {
  const container = document.getElementById('container');
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    fragment.appendChild(div);
  }
  
  // Single reflow/repaint
  container.appendChild(fragment);
}

// 4. Memoization for expensive calculations
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalculation = memoize((n) => {
  console.log('Computing...');
  // Simulate expensive calculation
  let result = 0;
  for (let i = 0; i < n * 1000; i++) {
    result += Math.random();
  }
  return result;
});

// First call computes the result
console.log(expensiveCalculation(500));
// Second call with same argument retrieves from cache
console.log(expensiveCalculation(500));

// 5. Virtualization for large lists
class VirtualList {
  constructor(container, itemHeight, totalItems, renderItem) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.totalItems = totalItems;
    this.renderItem = renderItem;
    this.visibleItems = Math.ceil(container.clientHeight / itemHeight) + 2;
    this.scrollTop = 0;
    this.startIndex = 0;
    
    // Set container height to accommodate all items
    container.style.height = \`\${totalItems * itemHeight}px\`;
    
    // Create viewport for visible items only
    this.viewport = document.createElement('div');
    this.viewport.style.position = 'relative';
    container.appendChild(this.viewport);
    
    // Handle scrolling
    container.addEventListener('scroll', this.handleScroll.bind(this));
    
    // Initial render
    this.render();
  }
  
  handleScroll() {
    this.scrollTop = this.container.scrollTop;
    this.startIndex = Math.floor(this.scrollTop / this.itemHeight);
    this.render();
  }
  
  render() {
    this.viewport.innerHTML = '';
    this.viewport.style.transform = \`translateY(\${this.startIndex * this.itemHeight}px)\`;
    
    for (let i = 0; i < this.visibleItems; i++) {
      const index = this.startIndex + i;
      if (index >= this.totalItems) break;
      
      const item = this.renderItem(index);
      item.style.position = 'absolute';
      item.style.top = \`\${i * this.itemHeight}px\`;
      item.style.height = \`\${this.itemHeight}px\`;
      this.viewport.appendChild(item);
    }
  }
}

// Usage example (commented out as it requires DOM)
/*
const listContainer = document.getElementById('list-container');
const virtualList = new VirtualList(
  listContainer,
  40, // item height in pixels
  10000, // total number of items
  (index) => {
    const div = document.createElement('div');
    div.textContent = \`Item \${index}\`;
    return div;
  }
);
*/`,
  bestPractices: [
    "Minimize and bundle JavaScript to reduce loading time",
    "Implement code splitting and lazy loading for large applications",
    "Use debouncing/throttling for frequent events (scroll, resize, input)",
    "Batch DOM operations to reduce reflows and repaints",
    "Virtualize large lists and tables to render only visible elements",
  ],
  commonMistakes: [
    "Blocking the main thread with long-running operations",
    "Ignoring memory leaks from event listeners or closures",
    "Creating unnecessarily complex DOM structures",
    "Using inefficient selectors or querying the DOM repeatedly",
    "Not measuring performance or testing on lower-end devices",
  ],
  tips: [
    "Use the Performance tab in DevTools to identify bottlenecks",
    "Consider Web Workers for CPU-intensive tasks",
    "Implement tree-shaking with modern bundlers to eliminate unused code",
    "Optimize images and use responsive loading techniques",
    "Adopt modern features like Intersection Observer for efficient scroll handlers",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Performance\nOptimization" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Loading\nOptimizations" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "Runtime\nOptimizations" },
          position: { x: 250, y: 100 },
        },
        {
          id: "4",
          data: { label: "Rendering\nOptimizations" },
          position: { x: 400, y: 100 },
        },
        {
          id: "5",
          data: { label: "Code Splitting" },
          position: { x: 50, y: 200 },
        },
        {
          id: "6",
          data: { label: "Asset Minification" },
          position: { x: 150, y: 200 },
        },
        {
          id: "7",
          data: { label: "Efficient\nAlgorithms" },
          position: { x: 250, y: 200 },
        },
        {
          id: "8",
          data: { label: "Memory\nManagement" },
          position: { x: 250, y: 300 },
        },
        {
          id: "9",
          data: { label: "Minimal DOM\nOperations" },
          position: { x: 400, y: 200 },
        },
        {
          id: "10",
          data: { label: "Virtualization" },
          position: { x: 400, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
        { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
        { id: "e2-6", source: "2", target: "6", type: "smoothstep" },
        { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
        { id: "e4-9", source: "4", target: "9", type: "smoothstep" },
        { id: "e4-10", source: "4", target: "10", type: "smoothstep" },
      ],
    },
  },
};
