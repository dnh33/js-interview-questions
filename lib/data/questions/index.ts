import { Question, Category } from "@/types/questions";
import * as CoreJavaScript from "./core-javascript";
import * as AsyncJavaScript from "./async-javascript";
import * as FancyFeatures from "./fancy-features";
import * as ObjectsArrays from "./objects-arrays";
import * as SpecialTheory from "./special-theory";
import * as Frontend from "./frontend-development";

// Combine all questions
export const questions: Question[] = [
  ...CoreJavaScript.questions,
  ...(AsyncJavaScript.questions || []),
  ...(FancyFeatures.questions || []),
  ...(ObjectsArrays.questions || []),
  ...(SpecialTheory.questions || []),
  ...(Frontend.questions || []),
];

// Function to get all questions
export function getAllQuestions(): Question[] {
  return questions;
}

// Create categories
export const categories: Category[] = [
  {
    id: "core-javascript",
    name: "Core JavaScript",
    icon: "⚡",
    description: "Fundamental JavaScript concepts and features",
    questions: CoreJavaScript.questions,
  },
  {
    id: "async-javascript",
    name: "Async JavaScript",
    icon: "🔄",
    description: "Asynchronous programming patterns and concepts",
    questions: AsyncJavaScript.questions || [],
  },
  {
    id: "fancy-features",
    name: "Fancy Features",
    icon: "✨",
    description: "Modern JavaScript features and patterns",
    questions: FancyFeatures.questions || [],
  },
  {
    id: "objects-arrays",
    name: "Objects and Arrays",
    icon: "📦",
    description: "Working with objects and arrays in JavaScript",
    questions: ObjectsArrays.questions || [],
  },
  {
    id: "special-theory",
    name: "Special Theory",
    icon: "🎯",
    description: "Advanced JavaScript concepts and theory",
    questions: SpecialTheory.questions || [],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "🎨",
    description: "Frontend-specific JavaScript concepts",
    questions: Frontend.questions || [],
  },
];
