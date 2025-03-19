"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Book,
  Clock,
  Code2,
  Brain,
  Database,
  Layout as LayoutIcon,
  Sparkles,
  MenuIcon,
  X,
} from "lucide-react";
import { categories } from "@/lib/data";

// Map category IDs to icons
const categoryIcons = {
  "core-javascript": <Code2 className="h-5 w-5" />,
  "async-javascript": <Clock className="h-5 w-5" />,
  "fancy-features": <Sparkles className="h-5 w-5" />,
  "objects-arrays": <Database className="h-5 w-5" />,
  "special-theory": <Brain className="h-5 w-5" />,
  frontend: <LayoutIcon className="h-5 w-5" />,
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("");

  // Listen for hash changes to update active state
  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", () => {
      setActiveId(window.location.hash.replace("#", ""));
    });
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-72 bg-background border-r",
          "transform transition-transform duration-200 ease-in-out md:translate-x-0",
          "overflow-y-auto"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Book className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">JS Learning</h1>
        </div>

        <nav className="space-y-2 p-4">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2 mb-6">
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-semibold border-b pb-2">
                {categoryIcons[category.id as keyof typeof categoryIcons]}
                {category.name}
              </div>
              <div className="space-y-1 pl-2">
                {category.questions.map((question) => (
                  <Link
                    key={question.id}
                    href={`#${question.id}`}
                    className={cn(
                      "flex items-start gap-2 rounded-lg px-3 py-2 text-sm",
                      "transition-colors hover:bg-accent hover:text-accent-foreground",
                      activeId === question.id &&
                        "bg-accent text-accent-foreground"
                    )}
                    onClick={() => setActiveId(question.id)}
                  >
                    <span className="inline-block min-w-[20px] text-muted-foreground">
                      {question.number}.
                    </span>
                    <span className="line-clamp-2">{question.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}
