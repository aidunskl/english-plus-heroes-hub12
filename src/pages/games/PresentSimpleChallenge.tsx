import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, RotateCcw, Trophy, Timer, BookOpen, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface GrammarExercise {
  id: number;
  sentence: string;
  correctAnswer: string;
  hint: string;
  explanation: string;
}

const grammarExercises: GrammarExercise[] = [
  {
    id: 1,
    sentence: "I _____ to school every day.",
    correctAnswer: "go",
    hint: "Әр күн мектепке бару",
    explanation: "Present Simple - әр күн жасалатын іс-әрекет"
  },
  {
    id: 2,
    sentence: "She _____ English very well.",
    correctAnswer: "speaks",
    hint: "Ол ағылшын тілін жақсы біледі",
    explanation: "3-ші жеке тұлға (he/she/it) үшін -s/-es қосылады"
  },
  {
    id: 3,
    sentence: "We _____ football on weekends.",
    correctAnswer: "play",
    hint: "Демалыс күндері футбол ойнау",
    explanation: "Present Simple - дұрыс форма"
  },
  {
    id: 4,
    sentence: "He _____ his homework every evening.",
    correctAnswer: "does",
    hint: "Әр кешке үй жұмысын жасау",
    explanation: "3-ші жеке тұлға үшін 'does' қолданылады"
  },
  {
    id: 5,
    sentence: "They _____ to the cinema on Saturdays.",
    correctAnswer: "go",
    hint: "Сенбі күндері киноға бару",
    explanation: "Present Simple - көпше тұлға үшін дұрыс форма"
  },
  {
    id: 6,
    sentence: "My mother _____ delicious food.",
    correctAnswer: "cooks",
    hint: "Анам дәмді тамақ дайындайды",
    explanation: "3-ші жеке тұлға үшін -s қосылады"
  },
  {
    id: 7,
    sentence: "I _____ coffee in the morning.",
    correctAnswer: "drink",
    hint: "Таңертең кофе ішу",
    explanation: "1-ші жеке тұлға үшін дұрыс форма"
  },
  {
    id: 8,
    sentence: "The sun _____ in the east.",
    correctAnswer: "rises",
    hint: "Күн шығыстан шығады",
    explanation: "Жалпы ақиқат - Present Simple"
  },
  {
    id: 9,
    sentence: "We _____ our friends every week.",
    correctAnswer: "visit",
    hint: "Әр апта досымызды көреміз",
    explanation: "Present Simple - көпше тұлға үшін дұрыс форма"
  },
  {
    id: 10,
    sentence: "She _____ her teeth twice a day.",
    correctAnswer: "brushes",
    hint: "Күніне екі рет тістерін тазалау",
    explanation: "3-ші жеке тұлға үшін -es қосылады (brush → brushes)"
  }
];

const PresentSimpleChallenge = () => {
  const navigate = useNavigate();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (isGameActive && !isComplete) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, isComplete]);

  const startGame = () => {
    setCurrentExercise(0);
    setUserAnswer("");
    setScore(0);
    setTime(0);
    setIsGameActive(true);
    setIsComplete(false);
    setShowHint(false);
    setAttempts(0);
    setShowExplanation(false);
    toast.success("Ойын басталды! 🎮");
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) {
      toast.error("Жауапты жазыңыз!");
      return;
    }

    setAttempts(prev => prev + 1);
    const correctAnswer = grammarExercises[currentExercise].correctAnswer.toLowerCase();
    const userInput = userAnswer.toLowerCase().trim();
    
    if (userInput === correctAnswer) {
      setScore(prev => prev + 1);
      toast.success("Дұрыс! 🎉");
      setShowExplanation(true);
      
      setTimeout(() => {
        if (currentExercise < grammarExercises.length - 1) {
          setCurrentExercise(prev => prev + 1);
          setUserAnswer("");
          setShowHint(false);
          setShowExplanation(false);
        } else {
          setIsComplete(true);
          setIsGameActive(false);
          toast.success(`Ойын аяқталды! Ұпай: ${score + 1}/${grammarExercises.length}`);
        }
      }, 3000);
    } else {
      toast.error("Қате, тағы көріңіз");
      setShowHint(true);
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
    return Math.round((score / (currentExercise + 1)) * 100);
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
                <Badge className="mb-4" variant="secondary">Грамматикалық ойын</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  Present Simple Challenge - Грамматикалық формаларды толтыр
                </h1>
                <p className="text-muted-foreground">
                  Present Simple грамматикасын үйреніңіз
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
                <span>Ұпай: {score}/{grammarExercises.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Жаттығу: {currentExercise + 1}/{grammarExercises.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Дәлдік: {getAccuracy()}%</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Грамматикалық сынақ</h2>
              <p className="text-muted-foreground mb-6">
                Present Simple грамматикасын үйреніңіз
              </p>
              <Button onClick={startGame} size="lg" className="gap-2">
                <BookOpen className="w-5 h-5" />
                Ойынды бастау
              </Button>
            </Card>
          )}

          {isGameActive && !isComplete && (
            <Card className="p-8 mb-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Жаттығу {currentExercise + 1}/{grammarExercises.length}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Сөйлемді толтырыңыз
                </p>
                
                <div className="flex gap-4 justify-center mb-6">
                  <Button 
                    onClick={() => setShowHint(!showHint)} 
                    variant="outline"
                    className="gap-2"
                  >
                    💡 Көмек
                  </Button>
                </div>

                {showHint && (
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Көмек:</strong> {grammarExercises[currentExercise].hint}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-2xl font-semibold mb-4">
                    {grammarExercises[currentExercise].sentence}
                  </p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Жауапты осы жерге жазыңыз..."
                    className="text-lg max-w-xs"
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  />
                  
                  <Button onClick={checkAnswer} className="gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Тексеру
                  </Button>
                </div>
              </div>

              {showExplanation && (
                <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg mt-6">
                  <h3 className="font-bold text-lg mb-2">Түсініктеме:</h3>
                  <p className="text-green-800 dark:text-green-200">
                    {grammarExercises[currentExercise].explanation}
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
                  <div className="text-2xl font-bold text-success">{score}/{grammarExercises.length}</div>
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
              <li>• Сөйлемдегі бос орынды толтырыңыз</li>
              <li>• Present Simple грамматикасын пайдаланыңыз</li>
              <li>• Көмек керек болса, "Көмек" батырмасын басыңыз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Әр жауаптан кейін түсініктеме оқыңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PresentSimpleChallenge;














