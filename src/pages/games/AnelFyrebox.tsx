import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, User, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnelFyrebox = () => {
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
                  <Badge variant="secondary">Интерактивті ойын</Badge>
                  <Badge variant="destructive" className="gap-1">
                    <Star className="w-3 h-3" />
                    Hard
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Fyrebox Game - Ағылшын тілі ойыны
                </h1>
                <p className="text-muted-foreground mb-4">
                  Күрделі тапсырмалармен ағылшын тілін дамыту
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Автор: Teacher Anel</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Ойынды бастау</h3>
              <p className="text-muted-foreground mb-6">
                Төмендегі батырманы басып, Fyrebox платформасындағы ойынды ашыңыз
              </p>
              <Button 
                onClick={() => window.open("https://www.fyrebox.com/play/yxg2ylzmvodzn736rw/", "_blank")}
                size="lg"
                className="gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Ойынды ашу
              </Button>
            </div>
          </Card>

          <Card className="mt-8 p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Ойын туралы:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Күрделі деңгейдегі ағылшын тілі тапсырмалары</li>
              <li>• Интерактивті элементтер мен анимациялар</li>
              <li>• Тіл дағдыларын дамытуға арналған арнайы тапсырмалар</li>
              <li>• Жақсы нәтижеге жету үшін назар аударыңыз</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnelFyrebox;
