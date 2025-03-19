"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CodePlayground } from "./code-playground";
import { FlowDiagram } from "./visualizations/flow-diagram";
import { MermaidDiagram } from "./visualizations/mermaid-diagram";
import { Timeline } from "./visualizations/timeline";
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Question } from "@/types/questions";

type ConceptCardProps = Question;

export function ConceptCard({
  id,
  number,
  title,
  description,
  example,
  bestPractices,
  commonMistakes,
  tips,
  visualization,
}: ConceptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderVisualization = () => {
    if (!visualization) return null;

    switch (visualization.type) {
      case "flow":
        if (!visualization.data.nodes || !visualization.data.edges) return null;
        return (
          <FlowDiagram
            nodes={visualization.data.nodes}
            edges={visualization.data.edges}
          />
        );
      case "mermaid":
        if (!visualization.data.chart) return null;
        return <MermaidDiagram chart={visualization.data.chart} />;
      case "timeline":
        if (!visualization.data.events) return null;
        return <Timeline events={visualization.data.events} />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-8"
    >
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              Question {number}
            </span>
            <h2 className="text-2xl font-bold mt-1">{title}</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="mt-4 space-y-6">
          <div className="prose dark:prose-invert">
            <p>{description}</p>
          </div>

          {visualization && <div className="mb-6">{renderVisualization()}</div>}

          <CodePlayground initialCode={example} />

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-4"
            >
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Best Practices
                </h3>
                <ul className="space-y-2">
                  {bestPractices.map((practice, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Common Mistakes
                </h3>
                <ul className="space-y-2">
                  {commonMistakes.map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                  Pro Tips
                </h3>
                <ul className="space-y-2">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.section>
  );
}
