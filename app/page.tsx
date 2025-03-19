import { FloatingNav } from "@/components/floating-nav";
import { ConceptCard } from "@/components/concept-card";
import { categories } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      <div className="container mx-auto px-4 py-8 lg:pl-72">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              JavaScript Interview Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Master JavaScript concepts through interactive examples and visual
              explanations
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
                <div className="space-y-8">
                  {category.questions.map((question) => (
                    <ConceptCard key={question.id} {...question} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
