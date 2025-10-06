import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, Trophy, FileText, Target } from "lucide-react";

const Tests = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Білімді тексеру</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Тесттер
            </h1>
            <p className="text-xl text-muted-foreground">
              Өз білімді тексер және дағдыларыңды жақсарт
            </p>
          </div>

          {/* Final Test */}
          <Card className="p-8 mb-8 bg-gradient-hero text-white relative overflow-hidden group hover:shadow-strong transition-all">
            <div className="relative z-10">
              <Badge className="mb-4 bg-white/20">Негізгі тест</Badge>
              <h2 className="text-3xl font-bold mb-4">Unit 2 Final Test</h2>
              <p className="text-white/90 mb-6">
                Модуль бойынша толық тест: 10 сұрақ, 30 минут
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>10 сұрақ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>70% өту балы</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="gap-2 shadow-medium">
                <ClipboardCheck className="w-5 h-5" />
                Тестті бастау
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-500" />
          </Card>

          {/* Quick Tests */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Жылдам тексеру тесттері</h2>
            
            {[
              {
                title: "Lesson 1 Quiz: Countries & Nationalities",
                questions: 5,
                time: "5 мин",
                icon: FileText
              },
              {
                title: "Lesson 2 Quiz: Languages",
                questions: 5,
                time: "5 мин",
                icon: FileText
              },
              {
                title: "Lesson 3 Quiz: Present Simple",
                questions: 8,
                time: "10 мин",
                icon: FileText
              },
              {
                title: "Lesson 4 Quiz: Reading Comprehension",
                questions: 6,
                time: "8 мин",
                icon: FileText
              }
            ].map((quiz, index) => {
              const Icon = quiz.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-medium transition-all bg-gradient-card group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{quiz.questions} сұрақ</span>
                          <span>•</span>
                          <span>{quiz.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Бастау</Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Test Tips */}
          <Card className="mt-12 p-8 bg-muted/30">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Тест тапсыру кеңестері
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Барлық нұсқауларды мұқият оқы</li>
              <li>✓ Жауабыңды тексеріп алуды ұмытпа</li>
              <li>✓ Қиын сұрақтарды соңға қалдыр</li>
              <li>✓ Уақытты дұрыс бөл</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tests;
