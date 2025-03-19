export interface Node {
  id: string;
  type?: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
  label?: string;
}

export interface Visualization {
  type: "flow" | "mermaid" | "timeline";
  data: {
    nodes?: Node[];
    edges?: Edge[];
    chart?: string;
    events?: any[];
  };
}

export interface Question {
  id: string;
  category: string;
  number: number;
  title: string;
  description: string;
  example: string;
  bestPractices: string[];
  commonMistakes: string[];
  tips: string[];
  visualization?: Visualization;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}
