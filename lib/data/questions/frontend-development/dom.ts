import { Question } from "@/types/questions";

export const dom: Question = {
  id: "dom",
  category: "Frontend Development",
  number: 31,
  title:
    "What is the Document Object Model (DOM), and how does JavaScript interact with it?",
  description:
    "The Document Object Model (DOM) is a programming interface for HTML and XML documents that represents the page structure as a tree of objects. JavaScript can interact with the DOM to dynamically access and update content, structure, and styles of a document.",
  example: `// Placeholder example code
// This will be filled with comprehensive examples later
const element = document.getElementById('example');
if (element) {
  element.innerHTML = 'Changed via DOM manipulation';
  element.style.color = 'blue';
}`,
  bestPractices: [
    "Use appropriate selectors like getElementById or querySelector",
    "Minimize DOM manipulations for better performance",
    "Consider using DocumentFragment for batch changes",
    "Cache DOM references when using them multiple times",
    "Use event delegation for efficient event handling",
  ],
  commonMistakes: [
    "Manipulating the DOM before it's fully loaded",
    "Creating unnecessary DOM elements",
    "Not cleaning up event listeners leading to memory leaks",
    "Using innerHTML when textContent would be safer and faster",
    "Excessive reflows and repaints by frequent DOM changes",
  ],
  tips: [
    "Use querySelector/querySelectorAll for complex selections",
    "Consider libraries or frameworks for complex DOM manipulation",
    "Use classList API for manipulating classes",
    "Understand event bubbling and capturing for event management",
    "Use MutationObserver to react to DOM changes",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Document" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "HTML Element" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "JavaScript" },
          position: { x: 100, y: 200 },
        },
        {
          id: "4",
          data: { label: "DOM API" },
          position: { x: 250, y: 200 },
        },
        {
          id: "5",
          data: { label: "Events" },
          position: { x: 400, y: 200 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
      ],
    },
  },
};
