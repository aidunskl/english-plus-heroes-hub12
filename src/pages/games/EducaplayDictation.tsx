import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, RotateCcw, Trophy, Timer, Volume2, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface DictationSentence {
  id: number;
  text: string;
  audioText: string;
  hint: string;
}

const dictationSentences: DictationSentence[] = [
  {
    id: 1,
    text: "I always eat breakfast at 7 AM.",
    audioText: "I always eat breakfast at seven AM",
    hint: "Әрқашан таңғы асты жеу"
  },
  {
    id: 2,
    text: "She usually goes to school by bus.",
    audioText: "She usually goes to school by bus",
    hint: "Әдетте автобуспен мектепке бару"
  },
  {
    id: 3,
    text: "We often play football on weekends.",
    audioText: "We often play football on weekends",
    hint: "Демалыс күндері жиі футбол ойнау"
  },
  {
    id: 4,
    text: "They sometimes visit their grandparents.",
    audioText: "They sometimes visit their grandparents",
    hint: "Кейде ата-аналарын көру"
  },
  {
    id: 5,
    text: "He rarely watches TV in the evening.",
    audioText: "He rarely watches TV in the evening",
    hint: "Кешке сирек теледидар көру"
  },
  {
    id: 6,
    text: "I never forget to do my homework.",
    audioText: "I never forget to do my homework",
    hint: "Үй жұмысын жасауды ешқашан ұмытпау"
  }
];

const EducaplayDictation = () => {
  const navigate = useNavigate();
  const [currentSentence, setCurrentSentence] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isGameActive && !isComplete) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, isComplete]);

  const startGame = () => {
    setCurrentSentence(0);
    setUserInput("");
    setScore(0);
    setTime(0);
    setIsGameActive(true);
    setIsComplete(false);
    setShowHint(false);
    setAttempts(0);
    toast.success("Ойын басталды! 🎮");
  };

  const playAudio = () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    const sentence = dictationSentences[currentSentence];
    
    // Создаем синтезированную речь
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(sentence.audioText);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
    } else {
      toast.error("Браузер аудио қолдамайды");
      setIsPlaying(false);
    }
  };

  const checkAnswer = () => {
    if (!userInput.trim()) {
      toast.error("Сөйлемді жазыңыз!");
      return;
    }

    setAttempts(prev => prev + 1);
    const correctAnswer = dictationSentences[currentSentence].text.toLowerCase();
    const userAnswer = userInput.toLowerCase().trim();
    
    // Проверяем точность (80% совпадений)
    const similarity = calculateSimilarity(correctAnswer, userAnswer);
    
    if (similarity >= 0.8) {
      setScore(prev => prev + 1);
      toast.success("Дұрыс! 🎉");
      
      if (currentSentence < dictationSentences.length - 1) {
        setTimeout(() => {
          setCurrentSentence(prev => prev + 1);
          setUserInput("");
          setShowHint(false);
        }, 1500);
      } else {
        setIsComplete(true);
        setIsGameActive(false);
        toast.success(`Ойын аяқталды! Ұпай: ${score + 1}/${dictationSentences.length}`);
      }
    } else {
      toast.error("Қате, тағы көріңіз");
      setShowHint(true);
    }
  };

  const calculateSimilarity = (str1: string, str2: string) => {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    let matches = 0;
    
    words1.forEach(word1 => {
      if (words2.some(word2 => word1.includes(word2) || word2.includes(word1))) {
        matches++;
      }
    });
    
    return matches / words1.length;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const resetGame = () => {
    startGame();
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
                <Badge className="mb-4" variant="secondary">Интерактивті диктант</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  Adverbs of Frequency - Диктант
                </h1>
                <p className="text-muted-foreground">
                  Тыңдап, жиілік үстеулері бар сөйлемдерді жазыңыз
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
                <span>Ұпай: {score}/{dictationSentences.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Сөйлем: {currentSentence + 1}/{dictationSentences.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Әрекет: {attempts}</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Диктант ойыны</h2>
              <p className="text-muted-foreground mb-6">
                Тыңдап, жиілік үстеулері бар сөйлемдерді жазыңыз
              </p>
              <Button onClick={startGame} size="lg" className="gap-2">
                <Volume2 className="w-5 h-5" />
                Ойынды бастау
              </Button>
            </Card>
          )}

          {isGameActive && !isComplete && (
            <Card className="p-8 mb-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-4">
                  Сөйлем {currentSentence + 1}/{dictationSentences.length}
                </h2>
                <p className="text-muted-foreground mb-4">
                  Тыңдап, сөйлемді жазыңыз
                </p>
                
                <div className="flex gap-4 justify-center mb-6">
                  <Button 
                    onClick={playAudio} 
                    disabled={isPlaying}
                    className="gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    {isPlaying ? "Тыңдалуда..." : "Тыңдау"}
                  </Button>
                  
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
                      <strong>Көмек:</strong> {dictationSentences[currentSentence].hint}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сөйлемді жазыңыз:
                  </label>
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Сөйлемді осы жерге жазыңыз..."
                    className="text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  />
                </div>
                
                <div className="flex gap-2 justify-center">
                  <Button onClick={checkAnswer} className="gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Тексеру
                  </Button>
                  
                  <Button 
                    onClick={() => setUserInput("")} 
                    variant="outline"
                    className="gap-2"
                  >
                    <XCircle className="w-4 h-4" />
                    Тазалау
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {isComplete && (
            <Card className="p-8 text-center bg-success/10 border-success">
              <Trophy className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Тамаша! 🎉</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-success">{score}/{dictationSentences.length}</div>
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
              <li>• "Тыңдау" батырмасын басып, сөйлемді тыңдаңыз</li>
              <li>• Тыңдаған сөйлемді дұрыс жазыңыз</li>
              <li>• Көмек керек болса, "Көмек" батырмасын басыңыз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Барлық сөйлемдерді дұрыс жазуға тырысыңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducaplayDictation;