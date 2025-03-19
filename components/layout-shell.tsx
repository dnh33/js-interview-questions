"use client";

import {
  CommandMenuProvider,
  triggerCommandMenu,
} from "@/components/command-menu";
import Link from "next/link";
import { CodeIcon, SearchIcon } from "lucide-react";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <CommandMenuProvider>
      <div className="relative flex h-screen">
        <header className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
              <CodeIcon className="h-6 w-6" />
              <span className="font-semibold">JS Questions</span>
            </div>
          </Link>

          <button
            onClick={() => triggerCommandMenu()}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <SearchIcon className="h-4 w-4" />
            <span>Quick Navigation</span>
            <kbd className="ml-1 text-xs px-1.5 py-0.5 bg-muted-foreground/20 rounded">
              Ctrl+K
            </kbd>
          </button>
        </header>
        <main className="flex-1 overflow-y-auto pt-14">{children}</main>
      </div>
    </CommandMenuProvider>
  );
}
