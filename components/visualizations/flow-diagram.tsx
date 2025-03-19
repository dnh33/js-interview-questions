"use client";

import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  Background,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

interface FlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
}

export function FlowDiagram({ nodes, edges }: FlowDiagramProps) {
  return (
    <div className="h-[300px] border rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
