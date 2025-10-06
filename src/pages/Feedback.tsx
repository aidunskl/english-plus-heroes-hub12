import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send, Star } from "lucide-react";

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Кері байланыс</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Пікір қалдыру
            </h1>
            <p className="text-xl text-muted-foreground">
              Сіздің пікіріңіз бізге өте маңызды!
            </p>
          </div>

          <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Аты-жөніңіз</Label>
                <Input 
                  id="name" 
                  placeholder="Мысалы: Айгерім Нұрланқызы"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="class">Сыныбыңыз</Label>
                <Input 
                  id="class" 
                  placeholder="Мысалы: 6А"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label>Сайтты қалай бағалайсыз?</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Star className="w-8 h-8" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lesson">Қай сабақ туралы пікір?</Label>
                <Input 
                  id="lesson" 
                  placeholder="Мысалы: Lesson 1"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сіздің пікіріңіз</Label>
                <Textarea 
                  id="message"
                  placeholder="Не ұнады? Не жақсартуға болады?"
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-5 h-5" />
                Жіберу
              </Button>
            </form>
          </Card>

          {/* Student Feedback Examples */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Оқушылардың пікірлері</h2>
            
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">АН</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Айдана Нұрланқызы</span>
                    <span className="text-sm text-muted-foreground">6Б сынып</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    Өте ыңғайлы сайт! Ойындар арқылы үйрену қызық. Lesson 1 өте түсінікті болды.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-secondary">ДА</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Даулет Асанұлы</span>
                    <span className="text-sm text-muted-foreground">6А сынып</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    Видеолар өте көмектесті. Present Simple енді жақсы түсінемін. Рақмет!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
