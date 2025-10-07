import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Trophy, Timer, CheckCircle, XCircle, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Choose the correct present simple question form for 'You like coffee'.",
    options: [
      "Are you like coffee?",
      "Do you like coffee?",
      "Does you like coffee?"
    ],
    correctAnswer: 1,
    explanation: "Дұрыс жауап: 'Do you like coffee?' - 2-ші және 3-ші тұлға үшін 'do' қолданылады"
  },
  {
    id: 2,
    question: "What is the correct question form for 'He goes to school'?",
    options: [
      "Does he go to school?",
      "Do he goes to school?",
      "Do he go to school?"
    ],
    correctAnswer: 0,
    explanation: "Дұрыс жауап: 'Does he go to school?' - 3-ші тұлға үшін 'does' қолданылады, бас сөйлемде 'go' қалдырылады"
  },
  {
    id: 3,
    question: "Turn into a question: 'They study every evening'.",
    options: [
      "Do they study every evening?",
      "Does they study every evening?",
      "They do study every evening?"
    ],
    correctAnswer: 0,
    explanation: "Дұрыс жауап: 'Do they study every evening?' - Көпше тұлға үшін 'do' қолданылады"
  },
  {
    id: 4,
    question: "Form a present simple question using a modal: 'Mary can swim'.",
    options: [
      "Can Mary swim?",
      "Can swim Mary?",
      "Mary can swim?"
    ],
    correctAnswer: 0,
    explanation: "Дұрыс жауап: 'Can Mary swim?' - Модальді етістіктер үшін ерекше ереже: can + subject + verb"
  },
  {
    id: 5,
    question: "Convert to a present simple question: 'They play tennis on Sundays'.",
    options: [
      "Does they play tennis on Sundays?",
      "Do they play tennis on Sundays?",
      "Do they plays tennis on Sundays?"
    ],
    correctAnswer: 1,
    explanation: "Дұрыс жауап: 'Do they play tennis on Sundays?' - Көпше тұлға үшін 'do' қолданылады"
  },
  {
    id: 6,
    question: "Choose the correct question form for 'She runs fast'.",
    options: [
      "She does run fast?",
      "Do she run fast?",
      "Does she run fast?"
    ],
    correctAnswer: 2,
    explanation: "Дұрыс жауап: 'Does she run fast?' - 3-ші тұлға үшін 'does' қолданылады"
  },
  {
    id: 7,
    question: "What is the question form for 'We live in London'?",
    options: [
      "Are we live in London?",
      "Do we lives in London?",
      "Do we live in London?"
    ],
    correctAnswer: 2,
    explanation: "Дұрыс жауап: 'Do we live in London?' - Бірінші тұлға көпше үшін 'do' қолданылады"
  },
  {
    id: 8,
    question: "Which is the inverted form for 'The cat sleeps'?",
    options: [
      "Does the cat sleep?",
      "Do cat sleep?",
      "Do the cat sleep?"
    ],
    correctAnswer: 0,
    explanation: "Дұрыс жауап: 'Does the cat sleep?' - 3-ші тұлға үшін 'does' қолданылады, бас сөйлемде 'sleep' қалдырылады"
  },
  {
    id: 9,
    question: "Make a question with 'where' for 'They work in a hospital'.",
    options: [
      "Where does they work?",
      "Where they work?",
      "Where do they work?"
    ],
    correctAnswer: 2,
    explanation: "Дұрыс жауап: 'Where do they work?' - Сұрақ сөздерімен де 'do/does' қолданылады"
  },
  {
    id: 10,
    question: "Which sentence is a correct present simple question?",
    options: [
      "Do you like coffee?",
      "Are you like coffee?",
      "Are you liking coffee?"
    ],
    correctAnswer: 0,
    explanation: "Дұрыс жауап: 'Do you like coffee?' - Present Simple сұрақтарында 'do/does' қолданылады"
  }
];

const EducaplayPresentSimpleQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    if (isGameActive && !isComplete) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, isComplete]);

  const startGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTime(0);
    setIsGameActive(true);
    setIsComplete(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setStreak(0);
    setMaxStreak(0);
    toast.success("Ойын басталды! 🎮");
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const question = quizQuestions[currentQuestion];
    const isCorrect = answerIndex === question.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(prevMax => Math.max(prevMax, newStreak));
        return newStreak;
      });
      toast.success("Дұрыс! 🎉");
    } else {
      setStreak(0);
      toast.error("Қате! 😔");
    }
    
    setShowExplanation(true);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setIsComplete(true);
        setIsGameActive(false);
        toast.success(`Ойын аяқталды! Ұпай: ${score + (isCorrect ? 1 : 0)}/${quizQuestions.length}`);
      }
    }, 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const resetGame = () => {
    startGame();
  };

  const getAccuracy = () => {
    return Math.round((score / (currentQuestion + 1)) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/games")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Артқа
          </Button>

          <Card className="p-8 mb-6 bg-gradient-card">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <Badge className="mb-4" variant="secondary">Интерактивті тест</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  Present Simple Question Form Quiz
                </h1>
                <p className="text-muted-foreground">
                  Present Simple сұрақ формаларын дұрыс құруды үйреніңіз
                </p>
              </div>
              <Button onClick={resetGame} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Қайта бастау
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Trophy className="w-4 h-4 text-success" />
                <span>Ұпай: {score}/{quizQuestions.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Zap className="w-4 h-4 text-orange-500" />
                <span>Үздік серия: {maxStreak}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Дәлдік: {getAccuracy()}%</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Present Simple Quiz</h2>
              <p className="text-muted-foreground mb-6">
                Present Simple сұрақ формаларын дұрыс таңдаңыз
              </p>
              <Button onClick={startGame} size="lg" className="gap-2">
                <Zap className="w-5 h-5" />
                Ойынды бастау
              </Button>
            </Card>
          )}

          {isGameActive && !isComplete && (
            <Card className="p-8 mb-6">
              <div className="text-center mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Сұрақ {currentQuestion + 1}/{quizQuestions.length}
                  </span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Zap className="w-3 h-3" />
                      Серия: {streak}
                    </Badge>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6 leading-relaxed">
                  {quizQuestions[currentQuestion].question}
                </h2>
              </div>

              <div className="space-y-3 mb-8">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left justify-start gap-3 p-4 h-auto ${
                      selectedAnswer === index 
                        ? (index === quizQuestions[currentQuestion].correctAnswer 
                            ? "bg-success text-success-foreground" 
                            : "bg-destructive text-destructive-foreground")
                        : selectedAnswer !== null && index === quizQuestions[currentQuestion].correctAnswer
                        ? "bg-success text-success-foreground"
                        : ""
                    }`}
                  >
                    <span className="font-semibold">{String.fromCharCode(65 + index)}.</span>
                    <span>{option}</span>
                    {selectedAnswer === index && index === quizQuestions[currentQuestion].correctAnswer && (
                      <CheckCircle className="w-5 h-5 ml-auto" />
                    )}
                    {selectedAnswer === index && index !== quizQuestions[currentQuestion].correctAnswer && (
                      <XCircle className="w-5 h-5 ml-auto" />
                    )}
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Түсініктеме:</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    {quizQuestions[currentQuestion].explanation}
                  </p>
                </div>
              )}
            </Card>
          )}

          {isComplete && (
            <Card className="p-8 text-center bg-success/10 border-success">
              <Trophy className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Тамаша! 🎉</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-success">{score}/{quizQuestions.length}</div>
                  <div className="text-sm text-muted-foreground">Дұрыс жауап</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{formatTime(time)}</div>
                  <div className="text-sm text-muted-foreground">Уақыт</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">{maxStreak}</div>
                  <div className="text-sm text-muted-foreground">Үздік серия</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-500">{getAccuracy()}%</div>
                  <div className="text-sm text-muted-foreground">Дәлдік</div>
                </div>
              </div>
              <Button onClick={resetGame} size="lg" className="gap-2">
                <RotateCcw className="w-5 h-5" />
                Қайта ойнау
              </Button>
            </Card>
          )}

          <Card className="p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Ойын ережелері:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Әр сұраққа дұрыс жауапты таңдаңыз</li>
              <li>• Present Simple сұрақ формаларын дұрыс құруды үйреніңіз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Үздік серия жасауға тырысыңыз</li>
              <li>• Түсініктемелерді оқып, грамматиканы үйреніңіз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducaplayPresentSimpleQuiz;
