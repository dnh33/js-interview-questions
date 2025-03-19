import { Question } from "@/types/questions";
import { varLetConst } from "./var-let-const";
import { hoisting } from "./hoisting";
import { thisKeyword } from "./this-keyword";
import { promises } from "./promises";
import { eventLoop } from "./event-loop";
import { closures } from "./closures";
import { dataTypes } from "./data-types";
import { nullUndefined } from "./null-undefined";
import { callbackFunctions } from "./callback-functions";
import { errorHandling } from "./error-handling";

export const questions: Question[] = [
  varLetConst,
  hoisting,
  thisKeyword,
  promises,
  eventLoop,
  closures,
  dataTypes,
  nullUndefined,
  callbackFunctions,
  errorHandling,
];
