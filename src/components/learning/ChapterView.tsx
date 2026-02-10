import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Layers, HelpCircle } from "lucide-react";
import FlashCards from "./FlashCards";
import Quiz from "./Quiz";
import type { Chapter } from "@/data/learningModules";

interface ChapterViewProps {
  chapter: Chapter;
  onQuizComplete: (chapterId: string, score: number, total: number) => void;
}

const ChapterView = ({ chapter, onQuizComplete }: ChapterViewProps) => {
  const [activeTab, setActiveTab] = useState("content");

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      // Headers
      if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
        return (
          <h3 key={i} className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-3">
            {block.replace(/\*\*/g, "")}
          </h3>
        );
      }
      // Bold section headers within paragraphs
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      const hasBullets = block.includes("•");

      if (hasBullets) {
        const lines = block.split("\n");
        return (
          <div key={i} className="space-y-2 my-4">
            {lines.map((line, j) => {
              const trimmed = line.trim();
              if (trimmed.startsWith("•")) {
                const bulletContent = trimmed.substring(1).trim();
                return (
                  <div key={j} className="flex gap-2 text-sm sm:text-base text-muted-foreground leading-relaxed pl-2">
                    <span className="text-foreground mt-0.5">•</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: bulletContent
                          .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          .replace(/\*([^*]+)\*/g, '<em>$1</em>'),
                      }}
                    />
                  </div>
                );
              }
              if (trimmed) {
                return (
                  <p
                    key={j}
                    className="text-sm sm:text-base text-foreground font-semibold mt-4 mb-1"
                    dangerouslySetInnerHTML={{
                      __html: trimmed.replace(/\*\*([^*]+)\*\*/g, "$1"),
                    }}
                  />
                );
              }
              return null;
            })}
          </div>
        );
      }

      // Numbered lists
      if (/^\d+\./.test(block.trim())) {
        const lines = block.split("\n");
        return (
          <ol key={i} className="space-y-2 my-4 pl-4">
            {lines.map((line, j) => (
              <li
                key={j}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
                    .replace(/\*([^*]+)\*/g, "<em>$1</em>"),
                }}
              />
            ))}
          </ol>
        );
      }

      // Regular paragraph
      return (
        <p
          key={i}
          className="text-sm sm:text-base text-muted-foreground leading-relaxed my-3"
          dangerouslySetInnerHTML={{
            __html: block
              .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
              .replace(/\*([^*]+)\*/g, "<em>$1</em>"),
          }}
        />
      );
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground text-architectural">{chapter.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">⏱ {chapter.duration} reading time</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="content" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Learn</span>
            <span className="sm:hidden">📖</span>
          </TabsTrigger>
          <TabsTrigger value="flashcards" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <Layers className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Flash Cards</span>
            <span className="sm:hidden">🃏</span>
          </TabsTrigger>
          <TabsTrigger value="quiz" className="flex items-center gap-1.5 text-xs sm:text-sm">
            <HelpCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Quiz</span>
            <span className="sm:hidden">❓</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="mt-6">
          <div className="prose prose-sm max-w-none">{renderContent(chapter.content)}</div>
        </TabsContent>

        <TabsContent value="flashcards" className="mt-6">
          <FlashCards cards={chapter.flashCards} />
        </TabsContent>

        <TabsContent value="quiz" className="mt-6">
          <Quiz
            questions={chapter.quiz}
            onComplete={(score, total) => onQuizComplete(chapter.id, score, total)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChapterView;
