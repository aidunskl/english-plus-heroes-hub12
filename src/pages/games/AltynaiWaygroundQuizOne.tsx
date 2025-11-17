import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WAYGROUND_URL = "https://wayground.com/join/quiz/6911ddb4c6ffa905cea26644/start?studentShare=true";

const AltynaiWaygroundQuizOne = () => {
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
                  <Badge variant="secondary">Wayground</Badge>
                  <Badge variant="accent">Medium</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Wayground Quiz 1
                </h1>
                <p className="text-muted-foreground mb-4">
                  Wayground платформасындағы интерактивті ағылшын тілі викторинасы
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Автор: Teacher Altynai</span>
                </div>
              </div>
              <Button
                onClick={() => window.open(WAYGROUND_URL, "_blank")}
                variant="outline"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Wayground-қа өту
              </Button>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <iframe
              src={WAYGROUND_URL}
              title="Wayground Quiz 1"
              className="w-full rounded-lg border h-[700px]"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AltynaiWaygroundQuizOne;

