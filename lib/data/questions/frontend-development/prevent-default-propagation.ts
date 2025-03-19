import { Question } from "@/types/questions";

export const preventDefaultPropagation: Question = {
  id: "prevent-default-propagation",
  category: "Frontend Development",
  number: 32,
  title:
    "How do you prevent default actions and stop event propagation in JavaScript?",
  description:
    "JavaScript provides methods to control event behavior: preventDefault() stops the default browser action, while stopPropagation() and stopImmediatePropagation() control how events bubble up the DOM tree. Understanding these methods is crucial for effective event handling in web applications.",
  example: `// Prevent form submission
document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Form validation logic here
  const isValid = validateForm();
  
  if (isValid) {
    // Custom submission handling
    submitFormWithAjax();
  }
});

// Stop event propagation
document.querySelector('.child').addEventListener('click', function(event) {
  // Stop the event from bubbling up to parent elements
  event.stopPropagation();
  
  console.log('Child clicked, parent handlers will not execute');
});

// Both together in a practical example
document.querySelector('a.special-link').addEventListener('click', function(event) {
  // Prevent navigation
  event.preventDefault();
  
  // Stop event bubbling
  event.stopPropagation();
  
  // Custom action instead
  showModal(this.getAttribute('href'));
});`,
  bestPractices: [
    "Use preventDefault() when you need to override a default browser behavior",
    "Use stopPropagation() sparingly and only when necessary",
    "Consider event delegation for better performance instead of stopping propagation",
    "Be aware of passive event listeners for performance in scroll/touch events",
    "Use return false with caution as it combines preventDefault and stopPropagation",
  ],
  commonMistakes: [
    "Overusing stopPropagation() which can break event delegation patterns",
    "Confusing preventDefault() and stopPropagation() functionality",
    "Forgetting that stopImmediatePropagation() also prevents other handlers on the same element",
    "Not considering the capture phase of event propagation",
    "Returning false in inline event handlers without understanding the implications",
  ],
  tips: [
    "Use the event.target property to determine the actual element that triggered the event",
    "Remember that preventDefault() only stops the default action, not event propagation",
    "Consider e.stopImmediatePropagation() when you need to prevent other handlers on the same element",
    "Verify browser support for newer event methods",
    "Use event delegation (attaching listeners to parent elements) for better performance with many elements",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Event Triggered" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Event Capturing" },
          position: { x: 250, y: 75 },
        },
        {
          id: "3",
          data: { label: "Target Element" },
          position: { x: 250, y: 150 },
        },
        {
          id: "4",
          data: { label: "Event Bubbling" },
          position: { x: 250, y: 225 },
        },
        {
          id: "5",
          data: { label: "preventDefault()" },
          position: { x: 100, y: 150 },
        },
        {
          id: "6",
          data: { label: "stopPropagation()" },
          position: { x: 400, y: 150 },
        },
        {
          id: "7",
          data: { label: "Default Action" },
          position: { x: 100, y: 300 },
        },
        {
          id: "8",
          data: { label: "Parent Handlers" },
          position: { x: 400, y: 300 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
        { id: "e3-6", source: "3", target: "6", type: "smoothstep" },
        { id: "e5-7", source: "5", target: "7", type: "smoothstep" },
        { id: "e6-8", source: "6", target: "8", type: "smoothstep" },
      ],
    },
  },
};
