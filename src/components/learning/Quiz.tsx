import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, RotateCcw, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";
import type { QuizQuestion } from "@/data/learningModules";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
}

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const question = questions[currentIndex];
  const progress = ((currentIndex + (showExplanation ? 1 : 0)) / questions.length) * 100;

  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#000000", "#333333", "#666666", "#999999", "#ffffff"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#000000", "#333333", "#666666", "#999999", "#ffffff"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      const finalScore = correctCount + (selectedAnswer === question.correctIndex ? 0 : 0);
      // correctCount already updated
      setCompleted(true);
      onComplete(correctCount, questions.length);
      if (correctCount / questions.length >= 0.6) {
        fireConfetti();
      }
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setCompleted(false);
    setAnswers(new Array(questions.length).fill(null));
  };

  if (completed) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const passed = percentage >= 60;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-minimal text-muted-foreground">Quiz Results</h3>
        </div>
        <Card className="p-6 sm:p-8 text-center space-y-4 border-2 border-border">
          {passed ? (
            <PartyPopper className="h-12 w-12 mx-auto text-foreground" />
          ) : (
            <RotateCcw className="h-12 w-12 mx-auto text-muted-foreground" />
          )}
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{percentage}%</h3>
          <p className="text-muted-foreground">
            You answered {correctCount} out of {questions.length} correctly.
          </p>

          {/* Score bar */}
          <div className="w-full max-w-md mx-auto space-y-2">
            <Progress value={percentage} className="h-3" />
            <p className="text-sm text-muted-foreground">
              {passed ? "🎉 Congratulations! You passed!" : "Keep studying and try again."}
            </p>
          </div>

          <Button onClick={handleRetry} variant={passed ? "outline" : "default"} className="mt-4">
            <RotateCcw className="h-4 w-4 mr-2" /> Retry Quiz
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-minimal text-muted-foreground">Quiz</h3>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <Progress value={progress} className="h-2" />

      <Card className="p-5 sm:p-6 border-2 border-border space-y-5">
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          {question.question}
        </p>

        <div className="space-y-3">
          {question.options.map((option, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrect = i === question.correctIndex;
            let borderClass = "border-border hover:border-foreground/30";
            if (showExplanation) {
              if (isCorrect) borderClass = "border-foreground bg-accent";
              else if (isSelected && !isCorrect) borderClass = "border-destructive/50 bg-destructive/5";
              else borderClass = "border-border opacity-50";
            } else if (isSelected) {
              borderClass = "border-foreground";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={showExplanation}
                className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${borderClass}`}
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm sm:text-base text-foreground">{option}</span>
                {showExplanation && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-foreground ml-auto flex-shrink-0" />
                )}
                {showExplanation && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-destructive ml-auto flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="p-4 rounded-lg bg-muted border border-border animate-fade-in">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}

        {showExplanation && (
          <div className="flex justify-end">
            <Button onClick={handleNext}>
              {currentIndex === questions.length - 1 ? "See Results" : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Quiz;
