"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Book,
  Code2,
  Clock,
  Sparkles,
  Database,
  Brain,
  Layout as LayoutIcon,
} from "lucide-react";
import { categories as dataCategories } from "@/lib/data";
import { Question } from "@/types/questions";
import { questions } from "@/lib/data/questions/index";

// Function to get question ID by its number
function getQuestionIdByNumber(num: number): string {
  const question = questions.find((q: Question) => q.number === num);
  return question ? question.id : `q${num}`;
}

// Map category IDs to icons
const categoryIcons = {
  "core-javascript": <Code2 className="h-4 w-4" />,
  "async-javascript": <Clock className="h-4 w-4" />,
  "fancy-features": <Sparkles className="h-4 w-4" />,
  "objects-arrays": <Database className="h-4 w-4" />,
  "special-theory": <Brain className="h-4 w-4" />,
  frontend: <LayoutIcon className="h-4 w-4" />,
};

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm rounded-lg border shadow-lg p-4 w-64 hidden lg:block"
    >
      <div className="flex items-center gap-2 mb-4 px-2">
        <Book className="h-5 w-5" />
        <span className="font-semibold">Quick Navigation</span>
      </div>
      <div className="space-y-4">
        {dataCategories.map((category) => (
          <div key={category.id} className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-2">
              {categoryIcons[category.id as keyof typeof categoryIcons]}
              {category.name}
            </div>
            <div className="space-y-1">
              {category.questions.map((question) => (
                <a
                  key={question.id}
                  href={`#${question.id}`}
                  className={cn(
                    "block text-sm py-1 px-4 rounded-md transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    activeSection === question.id &&
                      "bg-accent text-accent-foreground"
                  )}
                >
                  {question.number}.{" "}
                  {question.title.length > 30
                    ? question.title.substring(0, 30) + "..."
                    : question.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.nav>
  );
}
