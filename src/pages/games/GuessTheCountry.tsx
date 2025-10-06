import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, RotateCcw, Trophy, Timer, MapPin, CheckCircle, XCircle, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CountryRiddle {
  id: number;
  hints: string[];
  correctAnswer: string;
  flag: string;
  capital: string;
  continent: string;
  explanation: string;
}

const countryRiddles: CountryRiddle[] = [
  {
    id: 1,
    hints: [
      "Бұл ел Азияда орналасқан",
      "Ең көп халқы бар ел",
      "Үнді мұхитының жағасында",
      "Қытай тілі сөйлейді"
    ],
    correctAnswer: "China",
    flag: "🇨🇳",
    capital: "Beijing",
    continent: "Asia",
    explanation: "Қытай - дүниежүзіндегі ең көп халқы бар ел"
  },
  {
    id: 2,
    hints: [
      "Бұл ел Еуропада орналасқан",
      "Пицца мен пастаның отаны",
      "Рим қаласы осы елде",
      "Итальян тілі сөйлейді"
    ],
    correctAnswer: "Italy",
    flag: "🇮🇹",
    capital: "Rome",
    continent: "Europe",
    explanation: "Италия - пицца мен пастаның отаны"
  },
  {
    id: 3,
    hints: [
      "Бұл ел Солтүстік Америкада",
      "Ең көп халқы бар ел",
      "Вашингтон астанасы",
      "Ағылшын тілі сөйлейді"
    ],
    correctAnswer: "United States",
    flag: "🇺🇸",
    capital: "Washington",
    continent: "North America",
    explanation: "АҚШ - Солтүстік Америкадағы ең көп халқы бар ел"
  },
  {
    id: 4,
    hints: [
      "Бұл ел Оңтүстік Америкада",
      "Португал тілі сөйлейді",
      "Рио-де-Жанейро қаласы",
      "Футболның отаны"
    ],
    correctAnswer: "Brazil",
    flag: "🇧🇷",
    capital: "Brasilia",
    continent: "South America",
    explanation: "Бразилия - футболның отаны және Оңтүстік Америкадағы ең үлкен ел"
  },
  {
    id: 5,
    hints: [
      "Бұл ел Азияда орналасқан",
      "Самурайлардың отаны",
      "Токио астанасы",
      "Жапон тілі сөйлейді"
    ],
    correctAnswer: "Japan",
    flag: "🇯🇵",
    capital: "Tokyo",
    continent: "Asia",
    explanation: "Жапония - самурайлардың отаны және технологиялық дамыған ел"
  },
  {
    id: 6,
    hints: [
      "Бұл ел Еуропада орналасқан",
      "Пицца мен пастаның отаны",
      "Мадрид астанасы",
      "Испан тілі сөйлейді"
    ],
    correctAnswer: "Spain",
    flag: "🇪🇸",
    capital: "Madrid",
    continent: "Europe",
    explanation: "Испания - фламенко мен корриданың отаны"
  },
  {
    id: 7,
    hints: [
      "Бұл ел Африкада орналасқан",
      "Пирамидалардың отаны",
      "Каир астанасы",
      "Араб тілі сөйлейді"
    ],
    correctAnswer: "Egypt",
    flag: "🇪🇬",
    capital: "Cairo",
    continent: "Africa",
    explanation: "Мысыр - пирамидалардың отаны және ежелгі цивилизация"
  },
  {
    id: 8,
    hints: [
      "Бұл ел Еуропада орналасқан",
      "Берлин астанасы",
      "Неміс тілі сөйлейді",
      "Автомобильдердің отаны"
    ],
    correctAnswer: "Germany",
    flag: "🇩🇪",
    capital: "Berlin",
    continent: "Europe",
    explanation: "Германия - BMW, Mercedes және басқа автомобильдердің отаны"
  }
];

const GuessTheCountry = () => {
  const navigate = useNavigate();
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (isGameActive && !isComplete) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, isComplete]);

  const startGame = () => {
    setCurrentRiddle(0);
    setUserAnswer("");
    setScore(0);
    setTime(0);
    setIsGameActive(true);
    setIsComplete(false);
    setCurrentHint(0);
    setAttempts(0);
    setShowAnswer(false);
    toast.success("Ойын басталды! 🎮");
  };

  const showNextHint = () => {
    if (currentHint < countryRiddles[currentRiddle].hints.length - 1) {
      setCurrentHint(prev => prev + 1);
    } else {
      toast.info("Барлық көмек көрсетілді!");
    }
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) {
      toast.error("Жауапты жазыңыз!");
      return;
    }

    setAttempts(prev => prev + 1);
    const correctAnswer = countryRiddles[currentRiddle].correctAnswer.toLowerCase();
    const userInput = userAnswer.toLowerCase().trim();
    
    if (userInput === correctAnswer) {
      setScore(prev => prev + 1);
      toast.success("Дұрыс! 🎉");
      setShowAnswer(true);
      
      setTimeout(() => {
        if (currentRiddle < countryRiddles.length - 1) {
          setCurrentRiddle(prev => prev + 1);
          setUserAnswer("");
          setCurrentHint(0);
          setShowAnswer(false);
        } else {
          setIsComplete(true);
          setIsGameActive(false);
          toast.success(`Ойын аяқталды! Ұпай: ${score + 1}/${countryRiddles.length}`);
        }
      }, 3000);
    } else {
      toast.error("Қате, тағы көріңіз");
      if (currentHint < countryRiddles[currentRiddle].hints.length - 1) {
        setCurrentHint(prev => prev + 1);
      }
    }
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
    return Math.round((score / (currentRiddle + 1)) * 100);
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
                <Badge className="mb-4" variant="secondary">Интерактивті ойын</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  Guess the Country - Жасырын елді табу ойыны
                </h1>
                <p className="text-muted-foreground">
                  Көмектер бойынша елдерді табыңыз
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
                <span>Ұпай: {score}/{countryRiddles.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Жасырын: {currentRiddle + 1}/{countryRiddles.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Дәлдік: {getAccuracy()}%</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Жасырын елді табу ойыны</h2>
              <p className="text-muted-foreground mb-6">
                Көмектер бойынша елдерді табыңыз
              </p>
              <Button onClick={startGame} size="lg" className="gap-2">
                <MapPin className="w-5 h-5" />
                Ойынды бастау
              </Button>
            </Card>
          )}

          {isGameActive && !isComplete && (
            <Card className="p-8 mb-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Жасырын {currentRiddle + 1}/{countryRiddles.length}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Көмектер бойынша елді табыңыз
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Көмек {currentHint + 1}/{countryRiddles[currentRiddle].hints.length}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-lg">
                    {countryRiddles[currentRiddle].hints[currentHint]}
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={showNextHint}
                    variant="outline"
                    className="gap-2"
                    disabled={currentHint >= countryRiddles[currentRiddle].hints.length - 1}
                  >
                    <Lightbulb className="w-4 h-4" />
                    Келесі көмек
                  </Button>
                </div>

                <div className="flex gap-4 justify-center">
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Елдің атын осы жерге жазыңыз..."
                    className="text-lg max-w-xs"
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  />
                  
                  <Button onClick={checkAnswer} className="gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Тексеру
                  </Button>
                </div>
              </div>

              {showAnswer && (
                <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg mt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{countryRiddles[currentRiddle].flag}</div>
                    <div>
                      <h3 className="font-bold text-xl">{countryRiddles[currentRiddle].correctAnswer}</h3>
                      <p className="text-green-800 dark:text-green-200">
                        Астана: {countryRiddles[currentRiddle].capital}
                      </p>
                      <p className="text-green-800 dark:text-green-200">
                        Құрлық: {countryRiddles[currentRiddle].continent}
                      </p>
                    </div>
                  </div>
                  <p className="text-green-800 dark:text-green-200">
                    <strong>Түсініктеме:</strong> {countryRiddles[currentRiddle].explanation}
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
                  <div className="text-2xl font-bold text-success">{score}/{countryRiddles.length}</div>
                  <div className="text-sm text-muted-foreground">Дұрыс жауап</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{formatTime(time)}</div>
                  <div className="text-sm text-muted-foreground">Уақыт</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">{attempts}</div>
                  <div className="text-sm text-muted-foreground">Жалпы әрекет</div>
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
              <li>• Көмектер бойынша елді табыңыз</li>
              <li>• Көмек керек болса, "Келесі көмек" батырмасын басыңыз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Ағылшын тілінде жауап беріңіз</li>
              <li>• Әр жауаптан кейін түсініктеме оқыңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuessTheCountry;

