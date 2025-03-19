import { Question } from "@/types/questions";
import { asyncVsCallbacks } from "./async-vs-callbacks";
import { promisesExplained } from "./promises-explained";
import { eventLoop } from "./event-loop";
import { setTimeoutVsInterval } from "./set-timeout-vs-interval";
import { handlingMultiplePromises } from "./handling-multiple-promises";

export const questions: Question[] = [
  setTimeoutVsInterval,
  promisesExplained,
  asyncVsCallbacks,
  eventLoop,
  handlingMultiplePromises,
];

export const asyncJavaScriptQuestions = questions;
