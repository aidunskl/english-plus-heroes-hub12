import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, CheckCircle2, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Lesson1 = () => {
  const vocabulary = [
    { country: "Germany", nationality: "German", flag: "🇩🇪" },
    { country: "France", nationality: "French", flag: "🇫🇷" },
    { country: "Poland", nationality: "Polish", flag: "🇵🇱" },
    { country: "Kazakhstan", nationality: "Kazakh", flag: "🇰🇿" },
    { country: "China", nationality: "Chinese", flag: "🇨🇳" },
    { country: "Brazil", nationality: "Brazilian", flag: "🇧🇷" },
    { country: "Japan", nationality: "Japanese", flag: "🇯🇵" },
    { country: "Spain", nationality: "Spanish", flag: "🇪🇸" },
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
            <Badge className="mb-4" variant="secondary">Lesson 1</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Countries & Nationalities
            </h1>
            <p className="text-xl text-muted-foreground">
              Елдер мен ұлттар. "Where are you from?" сұрағын үйрену
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="p-6 mb-8 bg-gradient-card shadow-soft">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              Сабақтың мақсаттары
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Елдер мен ұлттарды атау",
                "'Where are you from?' сұрағын қою",
                "'I'm from...' жауабын беру",
                "8+ елдер мен ұлттарды білу"
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Vocabulary Cards */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">📚 Key Vocabulary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {vocabulary.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card group cursor-pointer">
                  <div className="text-4xl mb-2 text-center group-hover:scale-110 transition-transform">
                    {item.flag}
                  </div>
                  <h3 className="font-bold text-center mb-1">{item.country}</h3>
                  <p className="text-sm text-muted-foreground text-center">{item.nationality}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Phrases */}
          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">💬 Key Phrases</h2>
            <div className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-primary mb-1">Question:</p>
                <p className="text-lg">"Where are you from?"</p>
                <p className="text-sm text-muted-foreground mt-1">Сіз қайдансыз?</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-secondary mb-1">Answer:</p>
                <p className="text-lg">"I'm from Kazakhstan. I'm Kazakh."</p>
                <p className="text-sm text-muted-foreground mt-1">Мен Қазақстаннанмын. Мен қазақпын.</p>
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
                    <h3 className="font-bold text-lg mb-2">Matching Exercise</h3>
                    <p className="text-muted-foreground mb-4">Елдерді ұлттармен сәйкестендір</p>
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Жаттығуды бастау
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
                    <h3 className="font-bold text-lg mb-2">Fill in the Blanks</h3>
                    <p className="text-muted-foreground mb-4">I'm from ___ (country) → I'm ___ (nationality)</p>
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Жаттығуды бастау
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
                    <h3 className="font-bold text-lg mb-2">Speaking Practice</h3>
                    <p className="text-muted-foreground mb-4">"Find someone who..." - pair work activity</p>
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Нұсқаулықты көру
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
              Worksheet 1: Countries & Nationalities matching + 5-sentence mini-writing
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Worksheet жүктеу (PDF)
            </Button>
          </Card>

          {/* Next Lesson */}
          <Card className="p-6 bg-gradient-hero text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm text-white/80 mb-2">Келесі сабақ</p>
              <h3 className="text-2xl font-bold mb-4">Lesson 2: Languages & Guessing</h3>
              <Link to="/lessons/2">
                <Button variant="secondary" size="lg" className="gap-2">
                  Келесі сабаққа өту
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mb-24 group-hover:scale-125 transition-transform duration-500" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
