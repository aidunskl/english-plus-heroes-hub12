import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Star, Clock, Users, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Games = () => {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  
  const games = [
    {
      title: "Adverbs of Frequency Match",
      description: "Жиілік үстеулерін сәйкестендіру",
      difficulty: "Medium",
      time: "5 мин",
      players: "1",
      color: "primary",
      path: "/games/adverbs-match"
    },
    {
      title: "Educaplay Adverbs Match",
      description: "Educaplay платформасындағы жиілік үстеулері ойыны",
      difficulty: "Medium",
      time: "8 мин",
      players: "1",
      color: "secondary",
      path: "/games/educaplay-adverbs"
    },
    {
      title: "Educaplay Dictation",
      description: "Тыңдап, жиілік үстеулері бар сөйлемдерді жазу",
      difficulty: "Hard",
      time: "10 мин",
      players: "1",
      color: "accent",
      path: "/games/educaplay-dictation"
    },
    {
      title: "Educaplay True/False",
      description: "Жиілік үстеулері бар сөйлемдердің дұрыстығын тексеру",
      difficulty: "Easy",
      time: "5 мин",
      players: "1",
      color: "success",
      path: "/games/educaplay-true-false"
    },
    {
      title: "Educaplay Yes/No",
      description: "Present Simple сұрақтарына Иә/Жоқ деп жауап беру",
      difficulty: "Easy",
      time: "5 мин",
      players: "1",
      color: "primary",
      path: "/games/educaplay-yes-no"
    },
    {
      title: "Educaplay Present Simple Quiz",
      description: "Present Simple сұрақ формаларын дұрыс құру",
      difficulty: "Medium",
      time: "8 мин",
      players: "1",
      color: "secondary",
      path: "/games/educaplay-present-simple-quiz"
    },
    {
      title: "Countries Matching",
      description: "Елді ұлттықпен сәйкестендір",
      difficulty: "Easy",
      time: "5 мин",
      players: "1",
      color: "primary",
      path: "/games/countries-matching"
    },
    {
      title: "Language Quiz",
      description: "Қай елде қай тілде сөйлейді?",
      difficulty: "Medium",
      time: "10 мин",
      players: "1",
      color: "secondary",
      path: "/games/language-quiz"
    },
    {
      title: "Present Simple Challenge",
      description: "Грамматикалық формаларды толтыр",
      difficulty: "Medium",
      time: "15 мин",
      players: "1",
      color: "accent",
      path: "/games/present-simple-challenge"
    },
    {
      title: "Guess the Country",
      description: "Жасырын елді табу ойыны",
      difficulty: "Easy",
      time: "8 мин",
      players: "2+",
      color: "success",
      path: "/games/guess-the-country"
    },
    {
      title: "Vocabulary Flashcards",
      description: "Жаңа сөздерді есте сақтау",
      difficulty: "Easy",
      time: "10 мин",
      players: "1",
      color: "primary",
      path: "/games/vocabulary-flashcards"
    },
    {
      title: "City Description Builder",
      description: "Қаланы сипаттау құрастырушысы",
      difficulty: "Hard",
      time: "20 мин",
      players: "1",
      color: "secondary",
      path: "/games/city-description-builder"
    }
  ];

  const difficultyColors = {
    Easy: "bg-success/10 text-success",
    Medium: "bg-accent/10 text-accent",
    Hard: "bg-destructive/10 text-destructive"
  };

  const difficulties = ["All", "Easy", "Medium", "Hard"];
  
  const filteredGames = selectedDifficulty === "All" 
    ? games 
    : games.filter(game => game.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Gamepad2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Интерактивті оқу</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ойындар
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ойын арқылы үйрену – ең жақсы үйрену! 50+ интерактивті тапсырмалар
            </p>
          </div>

          {/* Difficulty Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-lg font-semibold">Сложность:</span>
              <div className="flex gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className="gap-2"
                  >
                    {difficulty === "All" ? "Барлығы" : difficulty}
                    {difficulty !== "All" && (
                      <Badge variant="secondary" className="ml-1">
                        {games.filter(game => game.difficulty === difficulty).length}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Games Count */}
            <div className="text-center text-muted-foreground">
              {selectedDifficulty === "All" 
                ? `Барлығы ${games.length} ойын`
                : `${filteredGames.length} ойын (${selectedDifficulty} деңгейі)`
              }
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${game.color} to-${game.color}-glow flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={difficultyColors[game.difficulty as keyof typeof difficultyColors]}>
                      {game.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{game.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{game.players}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full gap-2" 
                    variant="outline"
                    onClick={() => game.path ? navigate(game.path) : null}
                    disabled={!game.path}
                  >
                    <Star className="w-4 h-4" />
                    {game.path ? "Ойнау" : "Жақында"}
                  </Button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <Card className="mt-12 p-8 text-center bg-muted/30">
            <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Көп ойындар жақында!</h2>
            <p className="text-muted-foreground">
              Жаңа интерактивті тапсырмалар мен ойындар үнемі қосылып тұрады
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;
