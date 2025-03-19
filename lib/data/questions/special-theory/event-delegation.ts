import { Question } from "@/types/questions";

export const eventDelegation: Question = {
  id: "event-delegation",
  category: "Special Theory",
  number: 26,
  title: "What is event delegation in JavaScript, and why is it useful?",
  description:
    "Event delegation is a technique where a single event listener is attached to a parent element to handle events for multiple child elements, rather than attaching listeners to each child. This approach leverages event bubbling to efficiently manage events, especially for dynamically created elements, resulting in better performance and easier maintenance.",
  example: `// Instead of attaching click handlers to each button
// Multiple handlers (not using event delegation)
const buttons = document.querySelectorAll('.action-btn');
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    console.log('Button clicked:', this.textContent);
  });
});

// Using event delegation - single handler on parent
document.querySelector('.button-container').addEventListener('click', function(event) {
  // Check if the clicked element is a button
  if (event.target.matches('.action-btn')) {
    console.log('Button clicked:', event.target.textContent);
  }
});

// Practical example - managing a todo list
const todoList = document.querySelector('#todo-list');

// Single event listener for all todos (including future ones)
todoList.addEventListener('click', function(event) {
  // Check what was clicked
  if (event.target.matches('.delete-btn')) {
    // Delete todo item
    event.target.closest('.todo-item').remove();
  } else if (event.target.matches('.edit-btn')) {
    // Edit todo item
    const todoItem = event.target.closest('.todo-item');
    const todoText = todoItem.querySelector('.todo-text');
    const newText = prompt('Edit todo:', todoText.textContent);
    if (newText) {
      todoText.textContent = newText;
    }
  } else if (event.target.matches('.checkbox')) {
    // Toggle completed state
    const todoItem = event.target.closest('.todo-item');
    todoItem.classList.toggle('completed');
  }
});

// Adding a new todo - the event delegation ensures it works immediately
function addTodo(text) {
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';
  todoItem.innerHTML = \`
    <input type="checkbox" class="checkbox">
    <span class="todo-text">\${text}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  \`;
  todoList.appendChild(todoItem);
}

// Add some todos
addTodo('Learn event delegation');
addTodo('Build a todo app');`,
  bestPractices: [
    "Use event delegation for collections of similar elements that share behavior",
    "Attach event listeners to the closest stable parent element",
    "Use event.target and methods like matches() or closest() to identify specific elements",
    "Remember that not all events bubble (like focus/blur), so delegation won't work for them",
    "Consider using a more specific selector in the event handler to improve performance",
  ],
  commonMistakes: [
    "Attaching too many individual event listeners instead of using delegation",
    "Trying to use event delegation with events that don't bubble",
    "Not checking if the event target is the intended element type",
    "Attaching event delegation handlers too high in the DOM tree (like document)",
    "Forgetting to handle dynamically added elements in the delegation logic",
  ],
  tips: [
    "Use event.currentTarget to reference the element with the listener",
    "For better performance, use the closest common ancestor as the delegation point",
    "The matches() method is useful for checking if an element matches a CSS selector",
    "closest() helps find the nearest ancestor matching a selector",
    "Consider using data attributes for more complex delegation scenarios",
  ],
  visualization: {
    type: "flow",
    data: {
      nodes: [
        {
          id: "1",
          type: "input",
          data: { label: "Click Event" },
          position: { x: 250, y: 0 },
        },
        {
          id: "2",
          data: { label: "Child Element" },
          position: { x: 250, y: 100 },
        },
        {
          id: "3",
          data: { label: "Event Bubbling" },
          position: { x: 250, y: 200 },
        },
        {
          id: "4",
          data: { label: "Parent Container\nwith Event Listener" },
          position: { x: 250, y: 300 },
        },
        {
          id: "5",
          data: { label: "event.target Check" },
          position: { x: 250, y: 400 },
        },
        {
          id: "6",
          data: { label: "Handle Event\nif Target Matches" },
          position: { x: 250, y: 500 },
        },
        {
          id: "7",
          data: { label: "Without Delegation:\nMultiple Listeners" },
          position: { x: 100, y: 200 },
        },
        {
          id: "8",
          data: { label: "With Delegation:\nSingle Listener" },
          position: { x: 400, y: 200 },
        },
      ],
      edges: [
        { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
        { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
        { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
        { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
        { id: "e5-6", source: "5", target: "6", type: "smoothstep" },
        { id: "e1-7", source: "1", target: "7", type: "smoothstep" },
        { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
      ],
    },
  },
};
