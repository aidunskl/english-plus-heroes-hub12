import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Trophy, Timer, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AdverbPair {
  id: number;
  english: string;
  kazakh: string;
}

const adverbPairs: AdverbPair[] = [
  { id: 1, english: "always", kazakh: "әрқашан" },
  { id: 2, english: "usually", kazakh: "әдетте" },
  { id: 3, english: "often", kazakh: "жиі" },
  { id: 4, english: "sometimes", kazakh: "кейде" },
  { id: 5, english: "rarely", kazakh: "сирек" },
  { id: 6, english: "never", kazakh: "ешқашан" },
];

type GameCard = {
  id: string;
  value: string;
  pairId: number;
  type: "english" | "kazakh";
  isMatched: boolean;
};

const EducaplayAdverbs = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<GameCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [matches, setMatches] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGameActive && !isComplete) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, isComplete]);

  const initializeGame = () => {
    const gameCards: GameCard[] = [];
    adverbPairs.forEach((pair) => {
      gameCards.push({
        id: `en-${pair.id}`,
        value: pair.english,
        pairId: pair.id,
        type: "english",
        isMatched: false,
      });
      gameCards.push({
        id: `kz-${pair.id}`,
        value: pair.kazakh,
        pairId: pair.id,
        type: "kazakh",
        isMatched: false,
      });
    });
    
    const shuffled = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setMatches(0);
    setAttempts(0);
    setTime(0);
    setIsComplete(false);
    setSelectedCards([]);
    setIsGameActive(false);
  };

  const handleCardClick = (cardId: string) => {
    if (!isGameActive) setIsGameActive(true);

    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isMatched || selectedCards.includes(cardId)) return;
    if (selectedCards.length >= 2) return;

    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setAttempts((prev) => prev + 1);
      checkMatch(newSelected);
    }
  };

  const checkMatch = (selected: string[]) => {
    const [firstId, secondId] = selected;
    const firstCard = cards.find((c) => c.id === firstId);
    const secondCard = cards.find((c) => c.id === secondId);

    if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatches((prev) => prev + 1);
        setSelectedCards([]);
        toast.success("Дұрыс! 🎉");

        if (matches + 1 === adverbPairs.length) {
          setIsComplete(true);
          setIsGameActive(false);
          toast.success(`Құттықтаймын! Уақыт: ${formatTime(time)}`);
        }
      }, 600);
    } else {
      setTimeout(() => {
        setSelectedCards([]);
        toast.error("Қате, тағы көріңіз");
      }, 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getCardStyle = (card: GameCard) => {
    if (card.isMatched) return "bg-success/20 border-success text-success";
    if (selectedCards.includes(card.id)) return "bg-primary/20 border-primary";
    return "bg-card hover:bg-accent/50 border-border";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
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
                  Adverbs of Frequency - Қазақша сәйкестендіру
                </h1>
                <p className="text-muted-foreground">
                  Ағылшын тіліндегі жиілік үстеулерін қазақша аудармасымен сәйкестендіріңіз
                </p>
              </div>
              <Button onClick={initializeGame} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Қайта бастау
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Trophy className="w-4 h-4 text-success" />
                <span>Табылды: {matches}/{adverbPairs.length}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span>Уақыт: {formatTime(time)}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <span>Әрекет: {attempts}</span>
              </Badge>
            </div>
          </Card>

          {isComplete && (
            <Card className="p-6 mb-6 text-center bg-success/10 border-success">
              <Trophy className="w-12 h-12 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Тамаша! 🎉</h2>
              <p className="text-lg mb-4">
                Сіз барлық жұптарды {formatTime(time)} ішінде {attempts} әрекетпен таптыңыз!
              </p>
              <Button onClick={initializeGame} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Қайта ойнау
              </Button>
            </Card>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cards.map((card) => (
              <Card
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  p-6 cursor-pointer transition-all duration-300
                  flex items-center justify-center text-center
                  min-h-[100px] border-2
                  ${getCardStyle(card)}
                  ${card.isMatched ? "pointer-events-none" : "hover:scale-105"}
                  ${selectedCards.includes(card.id) ? "scale-105" : ""}
                `}
              >
                <span className="font-semibold text-lg">{card.value}</span>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Ойын ережелері:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Карточкаларды басып, ағылшын сөзін қазақша аудармасымен сәйкестендіріңіз</li>
              <li>• Әр рет екі карточканы таңдай аласыз</li>
              <li>• Дұрыс жұп тапсаңыз, олар жасыл түске боялады</li>
              <li>• Барлық жұптарды табу үшін мүмкіндігінше аз әрекет жасаңыз</li>
              <li>• Жақсы нәтижеге жету үшін уақытты қадағалаңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducaplayAdverbs;