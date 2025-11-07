import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, RotateCcw, Trophy, Timer, Building, CheckCircle, Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CityTemplate {
  id: number;
  name: string;
  country: string;
  flag: string;
  description: string;
  keyWords: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const cityTemplates: CityTemplate[] = [
  {
    id: 1,
    name: "Almaty",
    country: "Kazakhstan",
    flag: "🇰🇿",
    description: "Almaty is a beautiful city in Kazakhstan. It is located at the foot of the mountains. The city has many parks and gardens. People love to visit the Big Almaty Lake. The weather is usually pleasant. There are many universities and schools. The city is famous for its apples.",
    keyWords: ["beautiful", "mountains", "parks", "gardens", "lake", "weather", "universities", "apples"],
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    description: "London is the capital of the United Kingdom. It is a very old city with a rich history. The city has many famous landmarks like Big Ben and the Tower of London. The River Thames flows through the city. There are many museums and theaters. The weather is often rainy. London is a multicultural city with people from all over the world.",
    keyWords: ["capital", "history", "landmarks", "Big Ben", "Tower", "Thames", "museums", "theaters", "rainy", "multicultural"],
    difficulty: "Medium"
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    description: "Tokyo is the capital of Japan and one of the largest cities in the world. It is a modern city with advanced technology. The city has many skyscrapers and neon lights. Tokyo is famous for its efficient public transportation. There are many temples and gardens. The city is very crowded but organized. Tokyo is known for its delicious food and unique culture.",
    keyWords: ["capital", "largest", "modern", "technology", "skyscrapers", "neon", "transportation", "temples", "crowded", "organized", "food", "culture"],
    difficulty: "Hard"
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    description: "Paris is the capital of France and is known as the City of Light. It is famous for the Eiffel Tower and the Louvre Museum. The city has beautiful architecture and wide boulevards. Paris is located on the Seine River. The city is famous for its fashion and cuisine. There are many cafes and restaurants. Paris is a romantic city that attracts millions of tourists every year.",
    keyWords: ["capital", "City of Light", "Eiffel Tower", "Louvre", "architecture", "boulevards", "Seine", "fashion", "cuisine", "cafes", "romantic", "tourists"],
    difficulty: "Medium"
  },
  {
    id: 5,
    name: "New York",
    country: "United States",
    flag: "🇺🇸",
    description: "New York is the largest city in the United States. It is often called the Big Apple. The city has many famous landmarks like the Statue of Liberty and Central Park. New York is a financial center with many banks and businesses. The city has a diverse population. There are many theaters on Broadway. New York is known for its fast pace and energy.",
    keyWords: ["largest", "Big Apple", "Statue of Liberty", "Central Park", "financial", "banks", "businesses", "diverse", "Broadway", "theaters", "fast pace", "energy"],
    difficulty: "Hard"
  }
];

const CityDescriptionBuilder = () => {
  const navigate = useNavigate();
  const [currentCity, setCurrentCity] = useState(0);
  const [userDescription, setUserDescription] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (isGameActive && !isComplete) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, isComplete]);

  const startGame = () => {
    setCurrentCity(0);
    setUserDescription("");
    setScore(0);
    setTime(0);
    setIsGameActive(true);
    setIsComplete(false);
    setShowResults(false);
    setAttempts(0);
    toast.success("Ойын басталды! 🎮");
  };

  const checkDescription = () => {
    if (!userDescription.trim()) {
      toast.error("Сипаттаманы жазыңыз!");
      return;
    }

    setAttempts(prev => prev + 1);
    const city = cityTemplates[currentCity];
    const userText = userDescription.toLowerCase();
    
    // Подсчитываем количество найденных ключевых слов
    const foundWords = city.keyWords.filter(word => 
      userText.includes(word.toLowerCase())
    );
    
    const accuracy = Math.round((foundWords.length / city.keyWords.length) * 100);
    const points = Math.round(accuracy / 10); // 0-10 баллов
    
    setScore(prev => prev + points);
    
    if (accuracy >= 70) {
      toast.success(`Жақсы! ${accuracy}% дәлдік! 🎉`);
    } else if (accuracy >= 50) {
      toast.info(`Жақсы! ${accuracy}% дәлдік! 👍`);
    } else {
      toast.error(`Тағы дамыту керек! ${accuracy}% дәлдік! 😔`);
    }
    
    setShowResults(true);
    
    setTimeout(() => {
      if (currentCity < cityTemplates.length - 1) {
        setCurrentCity(prev => prev + 1);
        setUserDescription("");
        setShowResults(false);
      } else {
        setIsComplete(true);
        setIsGameActive(false);
        toast.success(`Ойын аяқталды! Жалпы ұпай: ${score + points}`);
      }
    }, 5000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const resetGame = () => {
    startGame();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDifficultyBg = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-50 border-green-200';
      case 'Medium': return 'bg-yellow-50 border-yellow-200';
      case 'Hard': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
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
                  City Description Builder - Қала сипаттамасын жазу
                </h1>
                <p className="text-muted-foreground">
                  Қалалар туралы ағылшын тілінде сипаттама жазыңыз
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
                <span>Ұпай: {score}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Қала: {currentCity + 1}/{cityTemplates.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Әрекет: {attempts}</span>
              </Badge>
            </div>
          </Card>

          {!isGameActive && !isComplete && (
            <Card className="p-8 text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Қала сипаттамасын жазу ойыны</h2>
              <p className="text-muted-foreground mb-6">
                Қалалар туралы ағылшын тілінде сипаттама жазыңыз
              </p>
              <Button onClick={startGame} size="lg" className="gap-2">
                <Building className="w-5 h-5" />
                Ойынды бастау
              </Button>
            </Card>
          )}

          {isGameActive && !isComplete && (
            <Card className="p-8 mb-6">
              <div className="text-center mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Қала {currentCity + 1}/{cityTemplates.length}
                  </span>
                  <Badge 
                    variant="outline" 
                    className={`gap-1 ${getDifficultyBg(cityTemplates[currentCity].difficulty)}`}
                  >
                    <span className={getDifficultyColor(cityTemplates[currentCity].difficulty)}>
                      {cityTemplates[currentCity].difficulty}
                    </span>
                  </Badge>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-4xl">
                    {cityTemplates[currentCity].flag}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">
                      {cityTemplates[currentCity].name}
                    </h2>
                    <p className="text-muted-foreground">
                      {cityTemplates[currentCity].country}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  Бұл қала туралы ағылшын тілінде сипаттама жазыңыз
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Қала сипаттамасы:
                  </label>
                  <Textarea
                    value={userDescription}
                    onChange={(e) => setUserDescription(e.target.value)}
                    placeholder="Қала туралы сипаттаманы осы жерге жазыңыз..."
                    rows={6}
                    className="text-lg"
                  />
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button onClick={checkDescription} className="gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Тексеру
                  </Button>
                </div>
              </div>

              {showResults && (
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mt-6">
                  <h3 className="font-bold text-lg mb-4">Дұрыс жауап:</h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    {cityTemplates[currentCity].description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Кілт сөздер:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cityTemplates[currentCity].keyWords.map((word, index) => (
                        <Badge key={index} variant="outline" className="gap-1">
                          <Star className="w-3 h-3" />
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Кілт сөздерді пайдалануға тырысыңыз!
                  </p>
                </div>
              )}
            </Card>
          )}

          {isComplete && (
            <Card className="p-8 text-center bg-success/10 border-success">
              <Trophy className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Тамаша! 🎉</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-success">{score}</div>
                  <div className="text-sm text-muted-foreground">Жалпы ұпай</div>
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
              <li>• Әр қала туралы ағылшын тілінде сипаттама жазыңыз</li>
              <li>• Кілт сөздерді пайдалануға тырысыңыз</li>
              <li>• Дұрыс жауап үшін ұпай аласыз</li>
              <li>• Кілт сөздерді көп пайдалансаңыз, көп ұпай аласыз</li>
              <li>• Әр жауаптан кейін дұрыс жауапты көре аласыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CityDescriptionBuilder;













