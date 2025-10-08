import Navigation from "@/components/Navigation";
import SpeechPlayer from "@/components/SpeechPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle2, Download, Building2, Volume2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Lesson4 = () => {
  const navigate = useNavigate();
  
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
            <Badge className="mb-4" variant="secondary">Lesson 4</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              A Cosmopolitan City
            </h1>
            <p className="text-xl text-muted-foreground">
              Reading & Writing: Космополитикалық қалалар туралы
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="p-6 mb-8 bg-gradient-card shadow-soft">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-success" />
              Сабақтың мақсаттары
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Космополитикалық қала туралы мәтінді оқу",
                "Негізгі ақпаратты табу",
                "True/False сұрақтарға жауап беру",
                "Өз қалаңды сипаттап жазу"
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
              text="New York is a cosmopolitan city. London has many international students. Tokyo is very modern. Paris is beautiful. Almaty is growing fast."
              title="Cosmopolitan Cities - Pronunciation"
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Тыңдап, қалалар туралы мәтіннің дұрыс айтылуын үйреніңіз
            </p>
          </Card>

          {/* Reading Text */}
          <Card className="p-8 mb-8 bg-gradient-card shadow-medium">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Reading: A Cosmopolitan City
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-background p-6 rounded-lg leading-relaxed text-foreground">
                <p className="mb-4">
                  A cosmopolitan city has people from many countries. You can hear different 
                  languages in the streets. There are many restaurants with food from all 
                  over the world. People celebrate different festivals and holidays.
                </p>
                <p className="mb-4">
                  In a cosmopolitan city, people are usually friendly and open-minded. 
                  They like to learn about different cultures. You can visit museums, 
                  galleries, and cultural centers.
                </p>
                <p>
                  Living in a cosmopolitan city is exciting because you meet people 
                  from different backgrounds. You can learn new languages and try 
                  new things every day!
                </p>
              </div>
            </div>
          </Card>

          {/* Vocabulary */}
          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">📚 Key Vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-1">cosmopolitan</p>
                <p className="text-sm text-muted-foreground">көп ұлтты, халықаралық</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-1">celebrate</p>
                <p className="text-sm text-muted-foreground">мерекелеу</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-1">festival</p>
                <p className="text-sm text-muted-foreground">фестиваль, мереке</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-1">open-minded</p>
                <p className="text-sm text-muted-foreground">ашық ойлы</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-1">background</p>
                <p className="text-sm text-muted-foreground">шығу тегі, өткені</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-1">culture</p>
                <p className="text-sm text-muted-foreground">мәдениет</p>
              </div>
            </div>
          </Card>

          {/* Comprehension Questions */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <h2 className="text-2xl font-bold mb-6">❓ Comprehension Questions</h2>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold mb-2">1. True or False:</p>
                <div className="space-y-2 ml-4">
                  <p>• "A cosmopolitan city has only one language." <span className="text-muted-foreground">(False)</span></p>
                  <p>• "You can find restaurants with food from different countries." <span className="text-muted-foreground">(True)</span></p>
                  <p>• "People in cosmopolitan cities don't like other cultures." <span className="text-muted-foreground">(False)</span></p>
                </div>
              </div>

              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold mb-2">2. Answer the questions:</p>
                <div className="space-y-2 ml-4">
                  <p>• What can you hear in the streets of a cosmopolitan city?</p>
                  <p>• What do people celebrate?</p>
                  <p>• Why is living in a cosmopolitan city exciting?</p>
                </div>
              </div>

              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold mb-2">3. Find in the text:</p>
                <div className="space-y-2 ml-4">
                  <p>• Two adjectives that describe people</p>
                  <p>• Three places you can visit</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Writing Project */}
          <Card className="p-6 mb-8 bg-success/5 border-success/20">
            <h2 className="text-2xl font-bold mb-4">✍️ Writing Project</h2>
            <p className="text-muted-foreground mb-4">
              Өз қалаңды сипаттап 6-8 сөйлем жаз. Келесі сұрақтарды қолдан:
            </p>
            <div className="bg-background p-4 rounded-lg mb-4">
              <ul className="space-y-2">
                <li>• What is your city like?</li>
                <li>• Is it cosmopolitan?</li>
                <li>• What languages do people speak?</li>
                <li>• What can you do there?</li>
                <li>• Do you like living there? Why?</li>
              </ul>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="font-semibold mb-2">Example:</p>
              <p className="text-sm">
                "I live in Almaty. It is a big cosmopolitan city. People speak Kazakh, 
                Russian, and English. There are many restaurants and museums. I like 
                living here because it is exciting and beautiful."
              </p>
            </div>
          </Card>

          {/* Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">🎯 Practice Activities</h2>
            
            <div className="space-y-4">
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Reading Comprehension Quiz</h3>
                    <p className="text-muted-foreground mb-4">Мәтін бойынша интерактивті тест</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => navigate('/games/city-description-builder?from=lesson4')}
                    >
                      <BookOpen className="w-4 h-4" />
                      Тестті бастау
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-secondary">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Vocabulary Matching</h3>
                    <p className="text-muted-foreground mb-4">Сөздерді аудармаларымен сәйкестендір</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => navigate('/games/vocabulary-flashcards?from=lesson4')}
                    >
                      <BookOpen className="w-4 h-4" />
                      Жаттығуды бастау
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
              Write 6-8 sentences about your city. Use vocabulary from the lesson.
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Worksheet жүктеу (PDF)
            </Button>
          </Card>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/lessons/3">
              <Card className="p-6 hover:shadow-medium transition-all group cursor-pointer h-full">
                <p className="text-sm text-muted-foreground mb-2">← Алдыңғы сабақ</p>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  Lesson 3: Present Simple
                </h3>
              </Card>
            </Link>
            <Link to="/lessons/5">
              <Card className="p-6 bg-gradient-hero text-white relative overflow-hidden group cursor-pointer h-full">
                <div className="relative z-10">
                  <p className="text-sm text-white/80 mb-2">Келесі сабақ →</p>
                  <h3 className="text-lg font-bold">Lesson 5: Review & Project</h3>
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

export default Lesson4;
