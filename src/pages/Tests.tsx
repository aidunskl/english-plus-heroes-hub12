import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Clock, Trophy, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Where are you from?",
    options: ["I'm from Kazakhstan", "I'm Kazakh", "I speak English", "I'm fine"],
    correctAnswer: 0,
    explanation: "The correct answer is 'I'm from Kazakhstan' because we answer with the country name.",
    category: "Countries & Nationalities"
  },
  {
    id: 2,
    question: "What nationality is someone from Germany?",
    options: ["German", "Germany", "Germans", "Germanic"],
    correctAnswer: 0,
    explanation: "Someone from Germany is German.",
    category: "Countries & Nationalities"
  },
  {
    id: 3,
    question: "Complete: I'm from France. I'm _____.",
    options: ["France", "French", "Français", "Francais"],
    correctAnswer: 1,
    explanation: "The correct nationality for France is French.",
    category: "Countries & Nationalities"
  },
  {
    id: 4,
    question: "Which question asks about origin?",
    options: ["How are you?", "Where are you from?", "What's your name?", "How old are you?"],
    correctAnswer: 1,
    explanation: "'Where are you from?' asks about someone's country of origin.",
    category: "Countries & Nationalities"
  },
  {
    id: 5,
    question: "What's the nationality for Japan?",
    options: ["Japan", "Japanese", "Japonese", "Japanian"],
    correctAnswer: 1,
    explanation: "The nationality for Japan is Japanese.",
    category: "Countries & Nationalities"
  }
];

const Tests = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! 🎉");
    } else {
      toast.error("Incorrect! Try again next time.");
    }

    setAnswers([...answers, selectedAnswer]);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setIsCompleted(false);
    setTimeLeft(300);
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "Excellent! 🏆";
    if (percentage >= 60) return "Good job! 👍";
    return "Keep practicing! 💪";
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-gradient-card">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4">Test Completed! 🎉</h1>
              
              <div className="mb-6">
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(score, questions.length)}`}>
                  {score}/{questions.length}
                </div>
                <div className="text-xl mb-4">{getScoreMessage(score, questions.length)}</div>
                <Progress value={(score / questions.length) * 100} className="w-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Your Score</h3>
                  <div className="text-2xl font-bold text-primary">{score}</div>
                  <div className="text-sm text-muted-foreground">out of {questions.length}</div>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Percentage</h3>
                  <div className="text-2xl font-bold text-primary">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">accuracy</div>
                </Card>
              </div>

              <div className="space-y-4">
                <Button onClick={handleRestart} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/lessons'}>
                  Back to Lessons
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-6 bg-gradient-card">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">Unit 2 Test</Badge>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Progress value={(currentQuestion / questions.length) * 100} className="w-full mb-2" />
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-2">{currentQ.category}</h1>
            <p className="text-muted-foreground">Score: {score}/{questions.length}</p>
          </Card>

          <Card className="p-8 mb-6">
            <h2 className="text-xl font-bold mb-6">{currentQ.question}</h2>
            
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <Card
                  key={index}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQ.correctAnswer
                          ? "bg-green-100 border-green-500 text-green-800"
                          : "bg-red-100 border-red-500 text-red-800"
                        : "bg-primary/10 border-primary"
                      : "hover:bg-accent/50"
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                      {selectedAnswer === index && (
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      )}
                    </div>
                    <span>{option}</span>
                    {showResult && index === currentQ.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                    {showResult && selectedAnswer === index && index !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {showResult && (
              <Card className="p-4 mt-4 bg-muted/50">
                <h3 className="font-semibold mb-2">Explanation:</h3>
                <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
              </Card>
            )}

            <div className="flex gap-3 mt-6">
              {!showResult ? (
                <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNextQuestion}>
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Test"}
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tests;