import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Trophy, Timer, Globe, Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CountryPair {
  id: number;
  country: string;
  nationality: string;
  flag: string;
}

const countryPairs: CountryPair[] = [
  { id: 1, country: "Kazakhstan", nationality: "Kazakh", flag: "🇰🇿" },
  { id: 2, country: "United States", nationality: "American", flag: "🇺🇸" },
  { id: 3, country: "United Kingdom", nationality: "British", flag: "🇬🇧" },
  { id: 4, country: "Germany", nationality: "German", flag: "🇩🇪" },
  { id: 5, country: "France", nationality: "French", flag: "🇫🇷" },
  { id: 6, country: "Japan", nationality: "Japanese", flag: "🇯🇵" },
  { id: 7, country: "China", nationality: "Chinese", flag: "🇨🇳" },
  { id: 8, country: "Russia", nationality: "Russian", flag: "🇷🇺" },
  { id: 9, country: "Turkey", nationality: "Turkish", flag: "🇹🇷" },
  { id: 10, country: "Brazil", nationality: "Brazilian", flag: "🇧🇷" },
  { id: 11, country: "Italy", nationality: "Italian", flag: "🇮🇹" },
  { id: 12, country: "Spain", nationality: "Spanish", flag: "🇪🇸" }
];

type GameCard = {
  id: string;
  value: string;
  pairId: number;
  type: "country" | "nationality";
  isMatched: boolean;
  flag?: string;
};

const CountriesMatching = () => {
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
    countryPairs.forEach((pair) => {
      gameCards.push({
        id: `country-${pair.id}`,
        value: pair.country,
        pairId: pair.id,
        type: "country",
        isMatched: false,
        flag: pair.flag,
      });
      gameCards.push({
        id: `nationality-${pair.id}`,
        value: pair.nationality,
        pairId: pair.id,
        type: "nationality",
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

        if (matches + 1 === countryPairs.length) {
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
        <div className="max-w-6xl mx-auto">
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
                  Countries Matching - Елді ұлттықпен сәйкестендір
                </h1>
                <p className="text-muted-foreground">
                  Елдерді олардың ұлттықтарымен сәйкестендіріңіз
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
                <span>Табылды: {matches}/{countryPairs.length}</span>
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cards.map((card) => (
              <Card
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  p-4 cursor-pointer transition-all duration-300
                  flex flex-col items-center justify-center text-center
                  min-h-[120px] border-2
                  ${getCardStyle(card)}
                  ${card.isMatched ? "pointer-events-none" : "hover:scale-105"}
                  ${selectedCards.includes(card.id) ? "scale-105" : ""}
                `}
              >
                {card.type === "country" && card.flag && (
                  <div className="text-2xl mb-2">{card.flag}</div>
                )}
                <span className="font-semibold text-sm leading-tight">
                  {card.value}
                </span>
                {card.type === "country" && (
                  <div className="text-xs text-muted-foreground mt-1">Ел</div>
                )}
                {card.type === "nationality" && (
                  <div className="text-xs text-muted-foreground mt-1">Ұлттық</div>
                )}
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Ойын ережелері:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Карточкаларды басып, елді оның ұлттығымен сәйкестендіріңіз</li>
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

export default CountriesMatching;




