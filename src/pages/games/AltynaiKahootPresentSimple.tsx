import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const KAHOOT_URL = "https://create.kahoot.it/share/present-simple/34d57ad5-7e41-4400-9c50-66d667b17b49";

const AltynaiKahootPresentSimple = () => {
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
                  <Badge variant="secondary">Kahoot!</Badge>
                  <Badge variant="accent">Medium</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Present Simple Kahoot Quiz
                </h1>
                <p className="text-muted-foreground mb-4">
                  Present Simple тақырыбы бойынша интерактивті Kahoot сұрақтары
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Автор: Teacher Altynai</span>
                </div>
              </div>
              <Button
                onClick={() => window.open(KAHOOT_URL, "_blank")}
                variant="outline"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Kahoot-та ашу
              </Button>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              Kahoot ойынын бастау үшін жоғарыдағы батырманы басып, Kahoot есептік жазбаңызбен кіріңіз.
              Бұл викторинада Present Simple tense бойынша сұрақтар бар.
            </p>
            <div className="aspect-video w-full bg-muted rounded-lg border flex items-center justify-center text-muted-foreground">
              Kahoot ойыны бөлек терезеде ашылады
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AltynaiKahootPresentSimple;

