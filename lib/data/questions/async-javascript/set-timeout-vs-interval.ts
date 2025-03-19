import { Question } from "@/types/questions";

export const setTimeoutVsInterval: Question = {
  id: "set-timeout-vs-interval",
  category: "Async JavaScript",
  number: 11,
  title: "What is the difference between setTimeout() and setInterval()?",
  description:
    "setTimeout() and setInterval() are timer functions in JavaScript used for executing code after a specified delay. setTimeout() executes a function once after a set delay, while setInterval() repeatedly executes a function at specified intervals until cleared. Both methods return an ID that can be used to cancel the timer with clearTimeout() or clearInterval().",
  example: `// setTimeout - executes once after a delay
console.log("Starting setTimeout example...");

const timeoutId = setTimeout(() => {
  console.log("This runs once after 2 seconds");
}, 2000);

// If needed, you can cancel the timeout before it executes
// clearTimeout(timeoutId);

// setInterval - executes repeatedly at regular intervals
console.log("Starting setInterval example...");

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(\`This has run \${counter} times at 1 second intervals\`);
  
  // Stop after 5 executions
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log("Interval cleared after 5 executions");
  }
}, 1000);

// Implementing setTimeout using setInterval (one way to show the difference)
function customSetTimeout(callback, delay) {
  const intervalId = setInterval(() => {
    clearInterval(intervalId);
    callback();
  }, delay);
  
  return intervalId; // Can still be cleared with clearInterval
}

customSetTimeout(() => {
  console.log("Custom setTimeout executed after 3 seconds");
}, 3000);

// Implementing setInterval using setTimeout (recursive approach)
function customSetInterval(callback, delay) {
  const execute = () => {
    callback();
    timeoutId = setTimeout(execute, delay);
  };
  
  let timeoutId = setTimeout(execute, delay);
  
  // Return an object with a method to clear the interval
  return {
    clear: () => clearTimeout(timeoutId)
  };
}

const customInterval = customSetInterval(() => {
  console.log("Custom interval execution");
}, 1500);

// Clear after 7.5 seconds (allowing 5 executions)
setTimeout(() => {
  customInterval.clear();
  console.log("Custom interval cleared");
}, 7500);

// Handling drift with setInterval
function accurateInterval(callback, interval) {
  let expected = Date.now() + interval;
  
  function step() {
    const drift = Date.now() - expected;
    callback();
    expected += interval;
    
    // Account for drift to maintain accurate timing
    const adjustedDelay = Math.max(0, interval - drift);
    setTimeout(step, adjustedDelay);
  }
  
  setTimeout(step, interval);
}

// Using accurateInterval to maintain consistent timing
let count = 0;
accurateInterval(() => {
  count++;
  console.log(\`Accurate interval executed \${count} times\`);
  
  if (count >= 3) {
    console.log("Stopping demonstration");
    // Note: This implementation doesn't provide a way to stop
  }
}, 1000);`,
  bestPractices: [
    "Use setTimeout for one-time delayed execution and setInterval for repeated executions",
    "Always store and clear timer IDs to prevent memory leaks, especially in components that may unmount",
    "Be cautious with setInterval when the execution time might exceed the interval time",
    "Consider recursive setTimeout for tasks that require variable timing between executions",
    "Use requestAnimationFrame instead of timers for animations that need to sync with the browser's rendering cycle",
  ],
  commonMistakes: [
    "Not clearing intervals when they're no longer needed, causing memory leaks",
    "Assuming precise timing with setTimeout or setInterval, which isn't guaranteed in JavaScript",
    "Overestimating the accuracy of JavaScript timers in browser environments",
    "Creating nested setTimeouts or intervals without proper cleanup",
    "Using setInterval for functions that take longer to execute than the interval itself, causing overlapping executions",
  ],
  tips: [
    "If the execution time of a function varies, recursive setTimeout may be better than setInterval",
    "The minimum delay for nested timeouts is capped at 4ms in most browsers",
    "Timer functions are throttled in inactive tabs to save resources",
    "Use clearTimeout and clearInterval to prevent callback execution when no longer needed",
    "For more accurate timing in Node.js, consider using the performance hooks API",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Timer Functions" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "setTimeout()" },
          position: { x: 100, y: 100 },
        },
        {
          id: "3",
          data: { label: "setInterval()" },
          position: { x: 400, y: 100 },
        },
        {
          id: "4",
          data: { label: "Single\nExecution" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "clearTimeout()" },
          position: { x: 100, y: 300 },
        },
        {
          id: "6",
          data: { label: "Repeated\nExecution" },
          position: { x: 400, y: 200 },
        },
        {
          id: "7",
          data: { label: "clearInterval()" },
          position: { x: 400, y: 300 },
        },
        {
          id: "8",
          data: { label: "After\nDelay" },
          position: { x: 0, y: 200 },
        },
        {
          id: "9",
          data: { label: "At Regular\nIntervals" },
          position: { x: 520, y: 200 },
        },
        {
          id: "10",
          data: { label: "Possible\nDrift" },
          position: { x: 520, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e2-8", source: "2", target: "8", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
        { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
        { id: "e9-10", source: "9", target: "10", type: "smoothstep" },
      ],
    },
  },
};
