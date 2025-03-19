import { Question } from "@/types/questions";
import { dom } from "./dom";
import { preventDefaultPropagation } from "./prevent-default-propagation";
import { syncVsAsync } from "./sync-vs-async";
import { eventObjectVsCustomEvent } from "./event-object-vs-custom-event";
import { optimizingPerformance } from "./optimizing-performance";

// Import files when they are created
// import { dom } from "./dom";
// import { preventDefaultPropagation } from "./prevent-default-propagation";
// import { syncVsAsync } from "./sync-vs-async";
// import { eventObjectVsCustomEvent } from "./event-object-vs-custom-event";
// import { optimizingPerformance } from "./optimizing-performance";

// Export empty array for now - these questions will be implemented later
export const questions: Question[] = [
  dom,
  preventDefaultPropagation,
  syncVsAsync,
  eventObjectVsCustomEvent,
  optimizingPerformance,
];
