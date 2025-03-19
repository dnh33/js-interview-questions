"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Play, Copy } from "lucide-react";
import { toast } from "sonner";

interface CodePlaygroundProps {
  initialCode: string;
  language?: string;
}

export function CodePlayground({
  initialCode,
  language = "javascript",
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = new Function(code)();
      setOutput(String(result));
      toast.success("Code executed successfully!");
    } catch (error) {
      setOutput(String(error));
      toast.error("Error executing code");
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  return (
    <Card className="overflow-hidden max-w-full">
      <div className="border-b bg-muted p-2 flex justify-between items-center">
        <span className="text-sm font-medium">Interactive Example</span>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={copyCode}>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button size="sm" onClick={runCode}>
            <Play className="h-4 w-4 mr-1" />
            Run
          </Button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Editor
          height="200px"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: "on",
            wrappingStrategy: "advanced",
            scrollbar: {
              horizontal: "auto",
              vertical: "auto",
            },
          }}
        />
      </div>
      {output && (
        <div className="p-4 border-t bg-muted overflow-x-auto">
          <div className="font-mono text-sm whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </Card>
  );
}
