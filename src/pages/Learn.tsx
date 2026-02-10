import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Trophy,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { learningModules } from "@/data/learningModules";
import ChapterView from "@/components/learning/ChapterView";

type QuizResults = Record<string, { score: number; total: number }>;

const Learn = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number>(0);
  const [quizResults, setQuizResults] = useState<QuizResults>({});

  const handleQuizComplete = (chapterId: string, score: number, total: number) => {
    setQuizResults((prev) => ({ ...prev, [chapterId]: { score, total } }));
  };

  const getModuleProgress = (moduleId: string) => {
    const mod = learningModules.find((m) => m.id === moduleId);
    if (!mod) return 0;
    const completed = mod.chapters.filter(
      (ch) => quizResults[ch.id] && quizResults[ch.id].score / quizResults[ch.id].total >= 0.6
    ).length;
    return Math.round((completed / mod.chapters.length) * 100);
  };

  const activeModule = learningModules.find((m) => m.id === selectedModule);

  // --- Module overview ---
  if (!activeModule) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-20">
          {/* Hero */}
          <section className="container mx-auto px-4 sm:px-6 mb-16">
            <div className="max-w-3xl mx-auto text-center space-y-4 reveal">
              <p className="text-minimal text-muted-foreground">SwissCoast Academy</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-architectural">
                Learn. Understand. Build.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Master the Hedera ecosystem through interactive modules with flashcards, quizzes, and
                bite-sized chapters designed for effective learning.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" /> 3 Modules
                </span>
                <span className="flex items-center gap-1.5">
                  <Trophy className="h-4 w-4" /> 15 Chapters
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4" /> 75 Quiz Questions
                </span>
              </div>
            </div>
          </section>

          {/* Didactic pillars */}
          <section className="container mx-auto px-4 sm:px-6 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🧠", title: "Microlearning", desc: "Bite-sized chapters you can complete in 10-15 minutes for better retention." },
                { icon: "🔄", title: "Spaced Repetition", desc: "Flashcards reinforce key concepts through active recall." },
                { icon: "🎮", title: "Gamification", desc: "Quizzes with instant feedback and confetti celebrations motivate progress." },
              ].map((p) => (
                <Card key={p.title} className="p-5 border-border text-center">
                  <p className="text-2xl mb-2">{p.icon}</p>
                  <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Module cards */}
          <section className="container mx-auto px-4 sm:px-6">
            <h2 className="text-minimal text-muted-foreground text-center mb-8">Choose a Module</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {learningModules.map((mod, i) => {
                const progress = getModuleProgress(mod.id);
                return (
                  <Card
                    key={mod.id}
                    className="group cursor-pointer border-2 border-border hover:border-foreground/30 transition-all duration-300 overflow-hidden"
                    onClick={() => {
                      setSelectedModule(mod.id);
                      setSelectedChapter(0);
                    }}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <span className="text-3xl">{mod.icon}</span>
                        <span className="text-minimal text-muted-foreground">Module {i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:underline decoration-1 underline-offset-4">
                          {mod.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{mod.subtitle}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{mod.chapters.length} Chapters</span>
                          <span>{progress}% complete</span>
                        </div>
                        <Progress value={progress} className="h-1.5" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} SwissCoast AG. All rights reserved.</p>
            <Link to="/privacypolicy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    );
  }

  // --- Active module view ---
  const chapter = activeModule.chapters[selectedChapter];
  const moduleProgress = getModuleProgress(activeModule.id);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedModule(null)}
              className="text-muted-foreground hover:text-foreground -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> All Modules
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Sidebar / chapter nav */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div>
                  <span className="text-2xl">{activeModule.icon}</span>
                  <h2 className="text-lg font-bold text-foreground mt-1">{activeModule.title}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress value={moduleProgress} className="h-1.5 flex-1" />
                    <span className="text-xs text-muted-foreground">{moduleProgress}%</span>
                  </div>
                </div>

                <nav className="space-y-1">
                  {activeModule.chapters.map((ch, i) => {
                    const result = quizResults[ch.id];
                    const passed = result && result.score / result.total >= 0.6;
                    const isActive = i === selectedChapter;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => setSelectedChapter(i)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                          isActive
                            ? "bg-accent text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {passed ? (
                          <CheckCircle className="h-4 w-4 text-foreground flex-shrink-0" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-border flex items-center justify-center text-[10px] flex-shrink-0">
                            {i + 1}
                          </span>
                        )}
                        <span className="truncate">{ch.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <ChapterView
                key={chapter.id}
                chapter={chapter}
                onQuizComplete={handleQuizComplete}
              />

              {/* Chapter navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedChapter((i) => i - 1)}
                  disabled={selectedChapter === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Chapter {selectedChapter + 1} of {activeModule.chapters.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedChapter((i) => i + 1)}
                  disabled={selectedChapter === activeModule.chapters.length - 1}
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
