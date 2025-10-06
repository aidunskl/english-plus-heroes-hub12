import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Trophy, Timer, Globe, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface LanguageQuestion {
  id: number;
  country: string;
  flag: string;
  correctLanguage: string;
  options: string[];
  explanation: string;
}

const languageQuestions: LanguageQuestion[] = [
  {
    id: 1,
    country: "Kazakhstan",
    flag: "🇰🇿",
    correctLanguage: "Kazakh",
    options: ["Kazakh", "Russian", "English", "Chinese"],
    explanation: "Қазақстанда негізгі тіл қазақ тілі"
  },
  {
    id: 2,
    country: "Japan",
    flag: "🇯🇵",
    correctLanguage: "Japanese",
    options: ["Japanese", "Chinese", "Korean", "English"],
    explanation: "Жапонияда негізгі тіл жапон тілі"
  },
  {
    id: 3,
    country: "Brazil",
    flag: "🇧🇷",
    correctLanguage: "Portuguese",
    options: ["Portuguese", "Spanish", "English", "French"],
    explanation: "Бразилияда негізгі тіл португал тілі"
  },
  {
    id: 4,
    country: "Germany",
    flag: "🇩🇪",
    correctLanguage: "German",
    options: ["German", "French", "English", "Dutch"],
    explanation: "Германияда негізгі тіл неміс тілі"
  },
  {
    id: 5,
    country: "Egypt",
    flag: "🇪🇬",
    correctLanguage: "Arabic",
    options: ["Arabic", "English", "French", "German"],
    explanation: "Мысырда негізгі тіл араб тілі"
  },
  {
    id: 6,
    country: "India",
    flag: "🇮🇳",
    correctLanguage: "Hindi",
    options: ["Hindi", "English", "Bengali", "Tamil"],
    explanation: "Үндістанда ең көп сөйлейтін тіл хинди"
  },
  {
    id: 7,
    country: "South Korea",
    flag: "🇰🇷",
    correctLanguage: "Korean",
    options: ["Korean", "Chinese", "Japanese", "English"],
    explanation: "Оңтүстік Кореяда негізгі тіл корей тілі"
  },
  {
    id: 8,
    country: "Turkey",
    flag: "🇹🇷",
    correctLanguage: "Turkish",
    options: ["Turkish", "Arabic", "Greek", "English"],
    explanation: "Түркияда негізгі тіл түрік тілі"
  },
  {
    id: 9,
    country: "Russia",
    flag: "🇷🇺",
    correctLanguage: "Russian",
    options: ["Russian", "Ukrainian", "Belarusian", "Kazakh"],
    explanation: "Ресейде негізгі тіл орыс тілі"
  },
  {
    id: 10,
    country: "Thailand",
    flag: "🇹🇭",
    correctLanguage: "Thai",
    options: ["Thai", "English", "Chinese", "Vietnamese"],
    explanation: "Тайландта негізгі тіл тай тілі"
  }
];

const LanguageQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
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

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const question = languageQuestions[currentQuestion];
    const isCorrect = answer === question.correctLanguage;
    
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
      if (currentQuestion < languageQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setIsComplete(true);
        setIsGameActive(false);
        toast.success(`Ойын аяқталды! Ұпай: ${score + (isCorrect ? 1 : 0)}/${languageQuestions.length}`);
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

  const getButtonStyle = (option: string) => {
    if (selectedAnswer === null) return "";
    
    const question = languageQuestions[currentQuestion];
    const isCorrect = option === question.correctLanguage;
    const isSelected = option === selectedAnswer;
    
    if (isCorrect) return "bg-success text-success-foreground";
    if (isSelected && !isCorrect) return "bg-destructive text-destructive-foreground";
    return "";
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
                <Badge className="mb-4" variant="secondary">Интерактивті викторина</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  Language Quiz - Қай елде қай тілде сөйлейді?
                </h1>
                <p className="text-muted-foreground">
                  Елдерді олардың негізгі тілдерімен сәйкестендіріңіз
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
                <span>Ұпай: {score}/{languageQuestions.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Сұрақ: {currentQuestion + 1}/{languageQuestions.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Дәлдік: {getAccuracy()}%</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Тілдер туралы викторина</h2>
              <p className="text-muted-foreground mb-6">
                Елдерді олардың негізгі тілдерімен сәйкестендіріңіз
              </p>
              <Button onClick={startGame} size="lg" className="gap-2">
                <Globe className="w-5 h-5" />
                Ойынды бастау
              </Button>
            </Card>
          )}

          {isGameActive && !isComplete && (
            <Card className="p-8 mb-6">
              <div className="text-center mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Сұрақ {currentQuestion + 1}/{languageQuestions.length}
                  </span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="gap-1">
                      <span>Серия: {streak}</span>
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-4xl">
                    {languageQuestions[currentQuestion].flag}
                  </div>
                  <h2 className="text-3xl font-bold">
                    {languageQuestions[currentQuestion].country}
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  Бұл елде негізгі тіл қандай?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {languageQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                    className={`gap-2 text-lg py-6 ${getButtonStyle(option)}`}
                    variant={selectedAnswer === null ? "outline" : "default"}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Түсініктеме:</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    {languageQuestions[currentQuestion].explanation}
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
                  <div className="text-2xl font-bold text-success">{score}/{languageQuestions.length}</div>
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
              <li>• Әр елді оның негізгі тілімен сәйкестендіріңіз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Үздік серия жасауға тырысыңыз</li>
              <li>• Жылдам және дұрыс жауап беруге тырысыңыз</li>
              <li>• Әр сұрақтан кейін түсініктеме оқыңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LanguageQuiz;

