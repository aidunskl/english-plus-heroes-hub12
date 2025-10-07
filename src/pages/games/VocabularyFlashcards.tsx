import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Trophy, Timer, BookOpen, CheckCircle, XCircle, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface VocabularyCard {
  id: number;
  english: string;
  kazakh: string;
  pronunciation: string;
  example: string;
  category: string;
}

const vocabularyCards: VocabularyCard[] = [
  {
    id: 1,
    english: "Beautiful",
    kazakh: "Әдемі",
    pronunciation: "/ˈbjuːtɪfəl/",
    example: "She is beautiful - Ол әдемі",
    category: "Adjectives"
  },
  {
    id: 2,
    english: "Happy",
    kazakh: "Бақытты",
    pronunciation: "/ˈhæpi/",
    example: "I am happy - Мен бақыттымын",
    category: "Adjectives"
  },
  {
    id: 3,
    english: "School",
    kazakh: "Мектеп",
    pronunciation: "/skuːl/",
    example: "I go to school - Мен мектепке барамын",
    category: "Nouns"
  },
  {
    id: 4,
    english: "Friend",
    kazakh: "Дос",
    pronunciation: "/frend/",
    example: "My friend is kind - Менің досым мейірімді",
    category: "Nouns"
  },
  {
    id: 5,
    english: "Run",
    kazakh: "Жүгіру",
    pronunciation: "/rʌn/",
    example: "I run every morning - Мен әр таңертең жүгіремін",
    category: "Verbs"
  },
  {
    id: 6,
    english: "Eat",
    kazakh: "Жеу",
    pronunciation: "/iːt/",
    example: "We eat dinner together - Біз кешкі асты бірге жейміз",
    category: "Verbs"
  },
  {
    id: 7,
    english: "Big",
    kazakh: "Үлкен",
    pronunciation: "/bɪɡ/",
    example: "This house is big - Бұл үй үлкен",
    category: "Adjectives"
  },
  {
    id: 8,
    english: "Book",
    kazakh: "Кітап",
    pronunciation: "/bʊk/",
    example: "I read a book - Мен кітап оқимын",
    category: "Nouns"
  },
  {
    id: 9,
    english: "Sleep",
    kazakh: "Ұйықтау",
    pronunciation: "/sliːp/",
    example: "I sleep at night - Мен түнде ұйықтаймын",
    category: "Verbs"
  },
  {
    id: 10,
    english: "Small",
    kazakh: "Кішкентай",
    pronunciation: "/smɔːl/",
    example: "The cat is small - Мысық кішкентай",
    category: "Adjectives"
  },
  {
    id: 11,
    english: "Water",
    kazakh: "Су",
    pronunciation: "/ˈwɔːtər/",
    example: "I drink water - Мен су ішемін",
    category: "Nouns"
  },
  {
    id: 12,
    english: "Play",
    kazakh: "Ойнау",
    pronunciation: "/pleɪ/",
    example: "Children play games - Балалар ойын ойнайды",
    category: "Verbs"
  }
];

const VocabularyFlashcards = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [studiedCards, setStudiedCards] = useState<number[]>([]);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [studyMode, setStudyMode] = useState<'learning' | 'review'>('learning');

  useEffect(() => {
    if (isGameActive && !isComplete) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, isComplete]);

  const startGame = () => {
    setCurrentCard(0);
    setShowTranslation(false);
    setStudiedCards([]);
    setTime(0);
    setIsGameActive(true);
    setIsComplete(false);
    setStudyMode('learning');
    toast.success("Ойын басталды! 🎮");
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const markAsStudied = () => {
    if (!studiedCards.includes(currentCard)) {
      setStudiedCards(prev => [...prev, currentCard]);
      toast.success("Жақсы! Сөзді үйрендіңіз! 🎉");
    }
    
    if (currentCard < vocabularyCards.length - 1) {
      setCurrentCard(prev => prev + 1);
      setShowTranslation(false);
    } else {
      setIsComplete(true);
      setIsGameActive(false);
      toast.success(`Ойын аяқталды! ${studiedCards.length + 1}/${vocabularyCards.length} сөзді үйрендіңіз!`);
    }
  };

  const skipCard = () => {
    if (currentCard < vocabularyCards.length - 1) {
      setCurrentCard(prev => prev + 1);
      setShowTranslation(false);
    } else {
      setIsComplete(true);
      setIsGameActive(false);
      toast.success(`Ойын аяқталды! ${studiedCards.length}/${vocabularyCards.length} сөзді үйрендіңіз!`);
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

  const getProgress = () => {
    return Math.round((studiedCards.length / vocabularyCards.length) * 100);
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
                <Badge className="mb-4" variant="secondary">Интерактивті карточкалар</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  Vocabulary Flashcards - Жаңа сөздерді есте сақтау
                </h1>
                <p className="text-muted-foreground">
                  Сөздік қорыңызды кеңейтіңіз
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
                <span>Үйренді: {studiedCards.length}/{vocabularyCards.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Карточка: {currentCard + 1}/{vocabularyCards.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Прогресс: {getProgress()}%</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Сөздік карточкалары</h2>
              <p className="text-muted-foreground mb-6">
                Жаңа сөздерді үйреніңіз және есте сақтаңыз
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Карточка {currentCard + 1}/{vocabularyCards.length}
                  </span>
                  <Badge variant="outline" className="gap-1">
                    {vocabularyCards[currentCard].category}
                  </Badge>
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="p-8 mb-6 min-h-[300px] flex flex-col justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">
                      {vocabularyCards[currentCard].english}
                    </h2>
                    
                    <div className="text-lg text-muted-foreground mb-4">
                      {vocabularyCards[currentCard].pronunciation}
                    </div>

                    {showTranslation && (
                      <div className="space-y-4">
                        <div className="text-3xl font-bold text-primary">
                          {vocabularyCards[currentCard].kazakh}
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-2">Мысал:</p>
                          <p className="font-medium">
                            {vocabularyCards[currentCard].example}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>

                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={toggleTranslation}
                    variant="outline"
                    className="gap-2"
                  >
                    {showTranslation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {showTranslation ? "Жасыру" : "Аударманы көрсету"}
                  </Button>
                </div>

                {showTranslation && (
                  <div className="flex gap-4 justify-center mt-6">
                    <Button 
                      onClick={markAsStudied}
                      className="gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Үйрендім
                    </Button>
                    
                    <Button 
                      onClick={skipCard}
                      variant="outline"
                      className="gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Өткізу
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}

          {isComplete && (
            <Card className="p-8 text-center bg-success/10 border-success">
              <Trophy className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Тамаша! 🎉</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-success">{studiedCards.length}/{vocabularyCards.length}</div>
                  <div className="text-sm text-muted-foreground">Үйренген сөздер</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{formatTime(time)}</div>
                  <div className="text-sm text-muted-foreground">Уақыт</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-500">{getProgress()}%</div>
                  <div className="text-sm text-muted-foreground">Прогресс</div>
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
              <li>• Карточканы көріп, сөзді есте сақтаңыз</li>
              <li>• "Аударманы көрсету" батырмасын басып, жауапты тексеріңіз</li>
              <li>• Сөзді үйренсеңіз, "Үйрендім" батырмасын басыңыз</li>
              <li>• Керек болмаса, "Өткізу" батырмасын басыңыз</li>
              <li>• Барлық карточкаларды аяқтағанда ойын аяқталады</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VocabularyFlashcards;



