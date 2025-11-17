import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, User, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TINYTAP_URL = "https://www.tinytap.com/activities/gu0x/play/tiny-tap?srsltid=AfmBOopwbVdRnpLLTGB-b71OJ2ABJnEwPrU79i-71KXjKzgbiYMDUIWb";

const GulzhanatTinyTap = () => {
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
                  <Badge variant="secondary">TinyTap</Badge>
                  <Badge variant="accent" className="gap-1">
                    <Star className="w-3 h-3" />
                    Easy
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Tiny Tap! Head to Toe
                </h1>
                <p className="text-muted-foreground mb-4">
                  TinyTap платформасындағы ойын арқылы сөздік қорын дамыту
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Автор: Teacher Gulzhanat</span>
                </div>
              </div>
              <Button
                onClick={() => window.open(TINYTAP_URL, "_blank")}
                variant="outline"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                TinyTap-те ашу
              </Button>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="w-full">
              <iframe
                src={TINYTAP_URL}
                title="TinyTap - Head to Toe"
                className="w-full rounded-lg border h-[700px]"
                allow="fullscreen; autoplay"
              />
            </div>
          </Card>

          <Card className="mt-8 p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Ойын туралы:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• TinyTap платформасындағы интерактивті тапсырмалар</li>
              <li>• Сөздік қорын көбейту және тыңдау дағдысын дамыту</li>
              <li>• Ерте жастағы оқушыларға арналған қарапайым интерфейс</li>
              <li>• Планшет немесе смартфоннан ойнауға ыңғайлы</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GulzhanatTinyTap;

