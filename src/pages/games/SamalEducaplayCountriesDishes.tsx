import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SamalEducaplayCountriesDishes = () => {
  const navigate = useNavigate();

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
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Matching Pairs</Badge>
                  <Badge variant="accent">Medium</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Countries and Traditional Dishes Match
                </h1>
                <p className="text-muted-foreground mb-4">
                  Елдерді олардың дәстүрлі тағамдарымен сәйкестендіріңіз
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Автор: Teacher Samal</span>
                </div>
              </div>
              <Button 
                onClick={() => window.open("https://www.educaplay.com/learning-resources/26481378-countries_and_traditional_dishes_match.html", "_blank")}
                variant="outline"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Толық экранда ашу
              </Button>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="w-full" style={{ minHeight: "690px" }}>
              <iframe
                allow="fullscreen; autoplay; allow-top-navigation-by-user-activation"
                allowFullScreen
                width="100%"
                height="690"
                frameBorder="0"
                src="https://www.educaplay.com/game/26481378-countries_and_traditional_dishes_match.html"
                className="rounded-lg"
                style={{ minHeight: "690px" }}
              />
            </div>
          </Card>

          <Card className="mt-8 p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Ойын туралы:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Әр елді оның дәстүрлі тағамымен сәйкестендіріңіз</li>
              <li>• Елдер мен тағамдар туралы білімдеріңізді тексеріңіз</li>
              <li>• Интерактивті ойын тәжірибесі</li>
              <li>• Мәдениеттер мен дәстүрлер туралы үйреніңіз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SamalEducaplayCountriesDishes;

