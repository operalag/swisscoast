import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import type { FlashCard as FlashCardType } from "@/data/learningModules";

interface FlashCardsProps {
  cards: FlashCardType[];
}

const FlashCards = ({ cards }: FlashCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = cards[currentIndex];

  const next = () => {
    setIsFlipped(false);
    setCurrentIndex((i) => Math.min(i + 1, cards.length - 1));
  };

  const prev = () => {
    setIsFlipped(false);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-minimal text-muted-foreground">Flash Cards</h3>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <div
        className="perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            minHeight: "200px",
          }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 border-2 border-border bg-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Question</p>
              <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">{card.front}</p>
              <p className="text-xs text-muted-foreground mt-4">Tap to reveal answer</p>
            </div>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 border-2 border-primary/30 bg-accent"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Answer</p>
              <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">{card.back}</p>
              <p className="text-xs text-muted-foreground mt-4">Tap to flip back</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <Button variant="outline" size="sm" onClick={prev} disabled={currentIndex === 0}>
          <ChevronLeft className="h-4 w-4 mr-1" /> Previous
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
        >
          <RotateCcw className="h-4 w-4 mr-1" /> Reset
        </Button>
        <Button variant="outline" size="sm" onClick={next} disabled={currentIndex === cards.length - 1}>
          Next <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default FlashCards;
