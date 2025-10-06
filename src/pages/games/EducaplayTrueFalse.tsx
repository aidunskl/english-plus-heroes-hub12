import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Trophy, Timer, CheckCircle, XCircle, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: "I always eat breakfast at 7 AM.",
    isTrue: true,
    explanation: "Әрқашан таңғы асты жеу - бұл дұрыс сөйлем"
  },
  {
    id: 2,
    statement: "She never goes to school.",
    isTrue: false,
    explanation: "Мектепке ешқашан бармау - бұл дұрыс емес"
  },
  {
    id: 3,
    statement: "We often play football on weekends.",
    isTrue: true,
    explanation: "Демалыс күндері жиі футбол ойнау - дұрыс"
  },
  {
    id: 4,
    statement: "He rarely watches TV.",
    isTrue: true,
    explanation: "Сирек теледидар көру - дұрыс сөйлем"
  },
  {
    id: 5,
    statement: "They sometimes visit their grandparents.",
    isTrue: true,
    explanation: "Кейде ата-аналарын көру - дұрыс"
  },
  {
    id: 6,
    statement: "I usually never do my homework.",
    isTrue: false,
    explanation: "Әдетте ешқашан үй жұмысын жасамау - бұл қайшылық"
  },
  {
    id: 7,
    statement: "She always forgets her keys.",
    isTrue: true,
    explanation: "Әрқашан кілттерін ұмыту - дұрыс сөйлем"
  },
  {
    id: 8,
    statement: "We never sometimes go to the cinema.",
    isTrue: false,
    explanation: "Ешқашан кейде киноға бару - бұл қайшылық"
  },
  {
    id: 9,
    statement: "He often reads books in the evening.",
    isTrue: true,
    explanation: "Кешке жиі кітап оқу - дұрыс"
  },
  {
    id: 10,
    statement: "They usually always arrive on time.",
    isTrue: false,
    explanation: "Әдетте әрқашан уақытында келу - бұл қайшылық"
  }
];

const EducaplayTrueFalse = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
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

  const handleAnswer = (answer: boolean) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const question = trueFalseQuestions[currentQuestion];
    const isCorrect = answer === question.isTrue;
    
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
      if (currentQuestion < trueFalseQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setIsComplete(true);
        setIsGameActive(false);
        toast.success(`Ойын аяқталды! Ұпай: ${score + (isCorrect ? 1 : 0)}/${trueFalseQuestions.length}`);
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
                  Adverbs of Frequency - Дұрыс/Қате
                </h1>
                <p className="text-muted-foreground">
                  Жиілік үстеулері: әр сөйлемнің дұрыс екенін анықтаңыз
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
                <span>Ұпай: {score}/{trueFalseQuestions.length}</span>
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
              <h2 className="text-2xl font-bold mb-4">Дұрыс/Қате ойыны</h2>
              <p className="text-muted-foreground mb-6">
                Жиілік үстеулері бар сөйлемдердің дұрыстығын тексеріңіз
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
                    Сұрақ {currentQuestion + 1}/{trueFalseQuestions.length}
                  </span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Zap className="w-3 h-3" />
                      Серия: {streak}
                    </Badge>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6 leading-relaxed">
                  "{trueFalseQuestions[currentQuestion].statement}"
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  Бұл сөйлем дұрыс па?
                </p>
              </div>

              <div className="flex gap-4 justify-center mb-8">
                <Button
                  onClick={() => handleAnswer(true)}
                  disabled={selectedAnswer !== null}
                  className={`gap-2 text-lg px-8 py-4 ${
                    selectedAnswer === true 
                      ? (trueFalseQuestions[currentQuestion].isTrue 
                          ? "bg-success text-success-foreground" 
                          : "bg-destructive text-destructive-foreground")
                      : selectedAnswer === false && trueFalseQuestions[currentQuestion].isTrue
                      ? "bg-success text-success-foreground"
                      : ""
                  }`}
                >
                  <CheckCircle className="w-6 h-6" />
                  Дұрыс
                </Button>
                
                <Button
                  onClick={() => handleAnswer(false)}
                  disabled={selectedAnswer !== null}
                  className={`gap-2 text-lg px-8 py-4 ${
                    selectedAnswer === false 
                      ? (!trueFalseQuestions[currentQuestion].isTrue 
                          ? "bg-success text-success-foreground" 
                          : "bg-destructive text-destructive-foreground")
                      : selectedAnswer === true && !trueFalseQuestions[currentQuestion].isTrue
                      ? "bg-success text-success-foreground"
                      : ""
                  }`}
                >
                  <XCircle className="w-6 h-6" />
                  Қате
                </Button>
              </div>

              {showExplanation && (
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Түсініктеме:</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    {trueFalseQuestions[currentQuestion].explanation}
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
                  <div className="text-2xl font-bold text-success">{score}/{trueFalseQuestions.length}</div>
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
              <li>• Әр сөйлемді оқып, оның дұрыстығын анықтаңыз</li>
              <li>• "Дұрыс" немесе "Қате" батырмасын басыңыз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Үздік серия жасауға тырысыңыз</li>
              <li>• Жылдам және дұрыс жауап беруге тырысыңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducaplayTrueFalse;