import { Question } from "@/types/questions";
import { destructuring } from "./destructuring";
import { objectVsArray } from "./object-vs-array";
import { cloning } from "./cloning";
import { objectMethods } from "./object-methods";
import { mapMethod } from "./map-method";
import { mapVsForEach } from "./map-vs-foreach";

export const questions: Question[] = [
  destructuring,
  objectVsArray,
  cloning,
  objectMethods,
  mapMethod,
  mapVsForEach,
];

export const objectsArraysQuestions = questions;
