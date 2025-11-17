import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BLOOKET_URL = "https://dashboard.blooket.com/set/691304f9ade2e3b964a035d1";

const SamalBlooketSet = () => {
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
                  <Badge variant="secondary">Blooket</Badge>
                  <Badge variant="accent">Medium</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Blooket Vocabulary Set
                </h1>
                <p className="text-muted-foreground mb-4">
                  Blooket платформасындағы интерактивті сөздік ойыны
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Автор: Teacher Samal</span>
                </div>
              </div>
              <Button
                onClick={() => window.open(BLOOKET_URL, "_blank")}
                variant="outline"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Blooket-те ашу
              </Button>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <p className="text-muted-foreground">
              Бұл ойын Blooket платформасында бөлек терезеде ашылады. Мұғалім ойынды іске қосып,
              оқушыларға Game ID немесе сілтеме береді. Blooket интерактивті режимдері арқылы
              сөздік қорын және грамматиканы қызықты форматта бекітіңіз.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SamalBlooketSet;

