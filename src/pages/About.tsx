import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Біз туралы</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Жоба туралы
            </h1>
            <p className="text-xl text-muted-foreground">
              6-сынып оқушыларына арналған интерактивті үй оқулығы
            </p>
          </div>

          {/* Mission */}
          <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Біздің миссиямыз</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Бұл жоба 6-сынып оқушыларына арналған қосымша оқу ресурсы ретінде жасалған. 
                  Біз English Plus оқулығының Unit 2 "Helping and Heroes" модулін 
                  интерактивті, қызықты және оңай қолжетімді етуді мақсат етеміз.
                </p>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center bg-gradient-card hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">5</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Сабақ</h3>
              <p className="text-sm text-muted-foreground">Толық құрылымды интерактивті сабақтар</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-card hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">50+</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Ойындар</h3>
              <p className="text-sm text-muted-foreground">Білімді бекітуге арналған тапсырмалар</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-card hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">10+</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Видео</h3>
              <p className="text-sm text-muted-foreground">Түсіндірме видео материалдар</p>
            </Card>
          </div>

          {/* Team */}
          <Card className="p-8 mb-8 bg-muted/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Команда</h2>
                <p className="text-muted-foreground mb-4">
                  Бұл жобаны бес оқушы бірлесіп жасады. Әрбір мүше өз үлесін қосты:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-semibold">Lesson 1 & 10 games</p>
                  <p className="text-sm text-muted-foreground">Участник 1</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-secondary">2</span>
                </div>
                <div>
                  <p className="font-semibold">Lesson 2 & 10 games</p>
                  <p className="text-sm text-muted-foreground">Участник 2</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-accent">3</span>
                </div>
                <div>
                  <p className="font-semibold">Lesson 3 & 10 games</p>
                  <p className="text-sm text-muted-foreground">Участник 3</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-success">4</span>
                </div>
                <div>
                  <p className="font-semibold">Lesson 4 & 10 games</p>
                  <p className="text-sm text-muted-foreground">Участник 4</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">5</span>
                </div>
                <div>
                  <p className="font-semibold">Lesson 5 & 10 games</p>
                  <p className="text-sm text-muted-foreground">Участник 5</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-8 bg-gradient-hero text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Байланыс</h2>
                  <p className="text-white/90 mb-4">
                    Сұрақтарыңыз бар ма? Бізге хабарласыңыз:
                  </p>
                  <p className="text-white/90">
                    <strong>Email:</strong> contact@englishplus.kz
                  </p>
                  <p className="text-white/90">
                    <strong>Кабинет сағаты:</strong> Сейсенбі/Бейсенбі 16:00-17:00
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mb-24" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
