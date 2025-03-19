import { Question } from "@/types/questions";

export const setTimeoutInterval: Question = {
  id: "setTimeout-setInterval",
  category: "Async JavaScript",
  number: 11,
  title: "What is the difference between setTimeout() and setInterval()?",
  description:
    "setTimeout() and setInterval() are two built-in JavaScript functions that allow code execution after a specified delay, but they differ in how they handle repetition. Understanding these timer functions is essential for scheduling tasks in JavaScript applications.",
  example: `// setTimeout - executes once after a delay
console.log('Start');

// Executes callback once after 2 seconds
const timeoutId = setTimeout(() => {
  console.log('This executes once after 2 seconds');
}, 2000);

// Clear timeout if needed (prevents execution)
// clearTimeout(timeoutId);

// setInterval - executes repeatedly at specified intervals
// Executes callback every 3 seconds
const intervalId = setInterval(() => {
  console.log('This executes every 3 seconds');
}, 3000);

// Stop interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped after 10 seconds');
}, 10000);

// Implementing setInterval using setTimeout for more control
function customInterval(callback, delay) {
  let id;
  
  function start() {
    callback();
    id = setTimeout(start, delay);
  }
  
  id = setTimeout(start, delay);
  
  return {
    clear: () => clearTimeout(id)
  };
}

const custom = customInterval(() => {
  console.log('Custom interval implementation');
}, 2000);

// Later: custom.clear();

// Real-world example: a countdown timer
function countdown(seconds) {
  let counter = seconds;
  
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    
    if (counter < 0) {
      clearInterval(interval);
      console.log('Countdown finished!');
    }
  }, 1000);
}

countdown(5);`,
  bestPractices: [
    "Use setTimeout for operations that should happen once after a delay",
    "Use setInterval for operations that need to repeat at regular intervals",
    "Always store timer IDs so you can cancel them when needed",
    "Clear intervals when they're no longer needed to avoid memory leaks",
    "Be aware that nested setTimeout can be a better alternative to setInterval for certain use cases",
  ],
  commonMistakes: [
    "Forgetting to clear intervals, causing memory leaks or unexpected behavior",
    "Not accounting for the execution time of the callback in setInterval",
    "Using very small timeout values (< 10ms) which may not work as expected",
    "Not considering that setTimeout/setInterval timing is not exact in JavaScript",
    "Using setTimeout(fn, 0) and expecting immediate execution (it still goes through the event loop)",
  ],
  tips: [
    "setTimeout with recursive calls provides more predictable timing than setInterval",
    "Browser throttles timeouts in inactive tabs, usually to a minimum of 1000ms",
    "The minimum delay value is usually capped (typically 4ms) even if you specify 0",
    "Use requestAnimationFrame instead of timers for animations",
    "In Node.js, timer functions return objects with additional methods rather than numeric IDs",
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
          data: { label: "Execute Once\nAfter Delay" },
          position: { x: 100, y: 200 },
        },
        {
          id: "5",
          data: { label: "Execute Repeatedly\nAt Fixed Intervals" },
          position: { x: 400, y: 200 },
        },
        {
          id: "6",
          data: { label: "clearTimeout()" },
          position: { x: 100, y: 300 },
        },
        {
          id: "7",
          data: { label: "clearInterval()" },
          position: { x: 400, y: 300 },
        },
        {
          id: "8",
          data: { label: "Event Loop" },
          position: { x: 250, y: 400 },
        },
        {
          id: "9",
          data: { label: "Time Passes" },
          position: { x: 250, y: 180 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        {
          id: "e2-6",
          source: "2",
          target: "6",
          type: "smoothstep",
          label: "Cancel",
        },
        {
          id: "e3-7",
          source: "3",
          target: "7",
          type: "smoothstep",
          label: "Cancel",
        },
        { id: "e4-8", source: "4", target: "8", type: "smoothstep" },
        { id: "e5-8", source: "5", target: "8", type: "smoothstep" },
        {
          id: "e2-9",
          source: "2",
          target: "9",
          type: "smoothstep",
          label: "Wait",
        },
        {
          id: "e3-9",
          source: "3",
          target: "9",
          type: "smoothstep",
          label: "Wait",
        },
        {
          id: "e5-3",
          source: "5",
          target: "3",
          type: "smoothstep",
          label: "Repeats",
        },
      ],
    },
  },
};
