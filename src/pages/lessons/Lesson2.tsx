import Navigation from "@/components/Navigation";
import SpeechPlayer from "@/components/SpeechPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages, BookOpen, CheckCircle2, Download, ArrowRight, Volume2, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Lesson2 = () => {
  const navigate = useNavigate();
  
  const languages = [
    { country: "Spain", language: "Spanish", flag: "🇪🇸" },
    { country: "Germany", language: "German", flag: "🇩🇪" },
    { country: "France", language: "French", flag: "🇫🇷" },
    { country: "China", language: "Chinese", flag: "🇨🇳" },
    { country: "Japan", language: "Japanese", flag: "🇯🇵" },
    { country: "Kazakhstan", language: "Kazakh/Russian", flag: "🇰🇿" },
    { country: "Brazil", language: "Portuguese", flag: "🇧🇷" },
    { country: "Italy", language: "Italian", flag: "🇮🇹" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <Link to="/lessons">
              <Button variant="ghost" size="sm" className="mb-4">
                ← Барлық сабақтарға қайту
              </Button>
            </Link>
            <Badge className="mb-4" variant="secondary">Lesson 2</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Languages & Guessing
            </h1>
            <p className="text-xl text-muted-foreground">
              Әлемдік тілдер және болжау фразалары
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="p-6 mb-8 bg-gradient-card shadow-soft">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Languages className="w-6 h-6 text-secondary" />
              Сабақтың мақсаттары
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Әлемдік тілдерді атау",
                "Болжау фразаларын қолдану (Maybe, I think)",
                "'Do you speak...?' сұрағын қою",
                "Тілдер туралы диалог құру"
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Audio Section */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-primary" />
              Аудио материал
            </h2>
            <SpeechPlayer 
              text="Spanish, German, French, Chinese, Japanese, Kazakh, Russian, Portuguese, Italian"
              title="Languages around the world - Pronunciation"
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Тыңдап, әлемдік тілдердің дұрыс айтылуын үйреніңіз
            </p>
          </Card>

          {/* Languages Cards */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">🌍 World Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {languages.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card group">
                  <div className="text-4xl mb-2 text-center group-hover:scale-110 transition-transform">
                    {item.flag}
                  </div>
                  <h3 className="font-bold text-center mb-1">{item.country}</h3>
                  <p className="text-sm text-secondary text-center font-medium mb-3">{item.language}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-1 text-xs"
                    onClick={() => {
                      const utterance = new SpeechSynthesisUtterance(item.language);
                      utterance.lang = 'en-US';
                      utterance.rate = 0.8;
                      utterance.pitch = 1;
                      speechSynthesis.speak(utterance);
                    }}
                  >
                    <Play className="w-3 h-3" />
                    Айту
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Guessing Phrases */}
          <Card className="p-6 mb-8 bg-secondary/5 border-secondary/20">
            <h2 className="text-2xl font-bold mb-4">💭 Guessing Phrases</h2>
            <div className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-secondary mb-2">When you're not sure:</p>
                <div className="space-y-2">
                  <p className="text-lg">• "Maybe it's English."</p>
                  <p className="text-lg">• "I think it's Spanish."</p>
                  <p className="text-lg">• "Is it French?"</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Listening Activity */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">🎧 Listening Activity</h3>
                <div className="bg-background p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Dialogue:</p>
                  <p className="mb-2"><strong>A:</strong> "I'm from Spain."</p>
                  <p className="mb-2"><strong>B:</strong> "So, do you speak Spanish?"</p>
                  <p><strong>A:</strong> "Yes, a little."</p>
                </div>
                <SpeechPlayer 
                  text="I'm from Spain. So, do you speak Spanish? Yes, a little."
                  title="Listening Dialogue - Pronunciation"
                  className="mb-4"
                />
              </div>
            </div>
          </Card>

          {/* Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">🎯 Practice Activities</h2>
            
            <div className="space-y-4">
              {/* Activity 1 */}
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Language Quiz</h3>
                    <p className="text-muted-foreground mb-4">Қай елде қай тілде сөйлейді?</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => navigate('/games/language-quiz')}
                    >
                      <BookOpen className="w-4 h-4" />
                      Квизді бастау
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Activity 2 */}
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-secondary">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Guessing Game</h3>
                    <p className="text-muted-foreground mb-4">"Who am I?" - жасырын елді табу ойыны</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => navigate('/games/guess-the-country')}
                    >
                      <BookOpen className="w-4 h-4" />
                      Ойынды бастау
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Activity 3 */}
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Writing Practice</h3>
                    <p className="text-muted-foreground mb-4">Сыныптасыңыз туралы қысқа параграф жазу</p>
                    <div className="bg-muted/30 p-3 rounded text-sm mb-4">
                      "My classmate Maria is from Brazil. She speaks Portuguese and a little English."
                    </div>
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Тапсырманы көру
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Homework */}
          <Card className="p-6 mb-8 bg-accent/5 border-accent/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Download className="w-6 h-6 text-accent" />
              Үй тапсырмасы
            </h2>
            <p className="text-muted-foreground mb-4">
              Interactive worksheet: Languages matching + writing about a classmate
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Worksheet жүктеу
            </Button>
          </Card>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/lessons/1">
              <Card className="p-6 hover:shadow-medium transition-all group cursor-pointer h-full">
                <p className="text-sm text-muted-foreground mb-2">← Алдыңғы сабақ</p>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  Lesson 1: Countries & Nationalities
                </h3>
              </Card>
            </Link>
            <Link to="/lessons/3">
              <Card className="p-6 bg-gradient-hero text-white relative overflow-hidden group cursor-pointer h-full">
                <div className="relative z-10">
                  <p className="text-sm text-white/80 mb-2">Келесі сабақ →</p>
                  <h3 className="text-lg font-bold">Lesson 3: Present Simple</h3>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 group-hover:scale-125 transition-transform duration-500" />
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson2;
