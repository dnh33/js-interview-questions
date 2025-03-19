import { Question } from "@/types/questions";
import { eventDelegation } from "./event-delegation";
import { jsModules } from "./js-modules";
import { prototypeChain } from "./prototype-chain";
import { bindCallApply } from "./bind-call-apply";
import { equalityComparisons } from "./equality-comparisons";

// Export all questions in the "Special Theory" category
export const questions: Question[] = [
  eventDelegation,
  jsModules,
  prototypeChain,
  bindCallApply,
  equalityComparisons,
];
