"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { getAllQuestions } from "@/lib/data/questions";

// Create a context to manage the command menu state
type CommandMenuContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CommandMenuContext = createContext<CommandMenuContextType | undefined>(
  undefined
);

// Provider component
export function CommandMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandMenuDialog />
    </CommandMenuContext.Provider>
  );
}

// Hook to use the command menu
export function useCommandMenu() {
  const context = useContext(CommandMenuContext);
  if (context === undefined) {
    throw new Error("useCommandMenu must be used within a CommandMenuProvider");
  }
  return context;
}

// Utility function to trigger the command menu
export function triggerCommandMenu() {
  const event = new KeyboardEvent("keydown", {
    key: "k",
    ctrlKey: true,
    bubbles: true,
  });
  document.dispatchEvent(event);
}

// The actual dialog component
function CommandMenuDialog() {
  const { open, setOpen } = useCommandMenu();
  const router = useRouter();
  const allQuestions = getAllQuestions();

  const navigateToQuestion = (id: string) => {
    router.push(`/#${id}`);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onKeyDown={handleKeyDown}
    >
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative bg-popover text-popover-foreground shadow-lg rounded-lg w-[90vw] max-w-[750px] max-h-[85vh] overflow-hidden">
        <div className="flex items-center border-b px-3">
          <Search className="h-4 w-4 shrink-0 opacity-50" />
          <Command.Input
            placeholder="Search concepts (Ctrl+K)..."
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <Command.List className="max-h-[500px] overflow-y-auto p-2">
          <Command.Empty>No results found.</Command.Empty>

          {/* Group questions by category */}
          {Object.entries(
            allQuestions.reduce((acc, question) => {
              const category = question.category;
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(question);
              return acc;
            }, {} as Record<string, typeof allQuestions>)
          ).map(([category, questions]) => (
            <Command.Group key={category} heading={category}>
              {questions.map((question) => (
                <Command.Item
                  key={question.id}
                  value={`${question.title} ${question.id}`}
                  onSelect={() => navigateToQuestion(question.id)}
                  className="flex items-center px-2 py-1.5 cursor-pointer rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="text-sm font-medium mr-2 opacity-70">
                    {question.number}.
                  </span>
                  {question.title}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </div>
    </Command.Dialog>
  );
}

// For backward compatibility, keep the original export
export function CommandMenu() {
  return null; // This is just a placeholder, the actual component is rendered by the provider
}
