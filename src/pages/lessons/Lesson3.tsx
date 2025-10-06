import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BookOpen, CheckCircle2, Download, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Lesson3 = () => {
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
            <Badge className="mb-4" variant="secondary">Lesson 3</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Present Simple
            </h1>
            <p className="text-xl text-muted-foreground">
              Affirmative, Negative, Questions
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="p-6 mb-8 bg-gradient-card shadow-soft">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              Сабақтың мақсаттары
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Present Simple affirmative формасын қолдану",
                "Present Simple negative формасын құру",
                "Present Simple questions қою",
                "I/You/We/They және He/She/It айырмашылығын білу"
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Grammar Rules - Affirmative */}
          <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">✅ Affirmative (Болымды)</h2>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-3">I / You / We / They:</p>
                <div className="space-y-2">
                  <p>• I <strong>live</strong> in Almaty.</p>
                  <p>• You <strong>speak</strong> English.</p>
                  <p>• We <strong>study</strong> hard.</p>
                  <p>• They <strong>like</strong> pizza.</p>
                </div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-secondary mb-3">He / She / It:</p>
                <div className="space-y-2">
                  <p>• He <strong>lives</strong> in Astana. <span className="text-accent">(+s)</span></p>
                  <p>• She <strong>works</strong> in a hospital. <span className="text-accent">(+s)</span></p>
                  <p>• It <strong>rains</strong> a lot. <span className="text-accent">(+s)</span></p>
                </div>
              </div>
            </div>
          </Card>

          {/* Grammar Rules - Negative */}
          <Card className="p-6 mb-6 bg-destructive/5 border-destructive/20">
            <h2 className="text-2xl font-bold mb-4">❌ Negative (Болымсыз)</h2>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-3">I / You / We / They:</p>
                <div className="space-y-2">
                  <p>• I <strong>don't like</strong> coffee.</p>
                  <p>• You <strong>don't speak</strong> French.</p>
                  <p>• We <strong>don't play</strong> football.</p>
                  <p>• They <strong>don't live</strong> here.</p>
                </div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-secondary mb-3">He / She / It:</p>
                <div className="space-y-2">
                  <p>• He <strong>doesn't like</strong> music. <span className="text-accent">(doesn't)</span></p>
                  <p>• She <strong>doesn't work</strong> on Sundays.</p>
                  <p>• It <strong>doesn't rain</strong> much.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Grammar Rules - Questions */}
          <Card className="p-6 mb-8 bg-secondary/5 border-secondary/20">
            <h2 className="text-2xl font-bold mb-4">❓ Questions (Сұраулы)</h2>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-primary mb-3">I / You / We / They:</p>
                <div className="space-y-2">
                  <p>• <strong>Do</strong> you like pizza? — Yes, I do. / No, I don't.</p>
                  <p>• <strong>Do</strong> they speak English?</p>
                  <p>• <strong>Do</strong> we have homework?</p>
                </div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-secondary mb-3">He / She / It:</p>
                <div className="space-y-2">
                  <p>• <strong>Does</strong> he live in Almaty? <span className="text-accent">(Does)</span></p>
                  <p>• <strong>Does</strong> she work here?</p>
                  <p>• <strong>Does</strong> it rain often?</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Common Mistakes */}
          <Card className="p-6 mb-8 bg-accent/5 border-accent/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-accent" />
              Common Mistakes (Жиі қателер)
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-2xl">❌</span>
                <div>
                  <p className="line-through text-muted-foreground">He live in Almaty.</p>
                  <p className="text-success font-semibold">✓ He lives in Almaty.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-2xl">❌</span>
                <div>
                  <p className="line-through text-muted-foreground">She don't speak French.</p>
                  <p className="text-success font-semibold">✓ She doesn't speak French.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-2xl">❌</span>
                <div>
                  <p className="line-through text-muted-foreground">Does you like pizza?</p>
                  <p className="text-success font-semibold">✓ Do you like pizza?</p>
                </div>
              </div>
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
                    <h3 className="font-bold text-lg mb-2">Fill in the Blanks</h3>
                    <p className="text-muted-foreground mb-4">Дұрыс формаларды толтыр (do/does, don't/doesn't)</p>
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Жаттығуды бастау
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
                    <h3 className="font-bold text-lg mb-2">Correct the Mistakes</h3>
                    <p className="text-muted-foreground mb-4">Қателерді түзет</p>
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Жаттығуды бастау
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Pair Work</h3>
                    <p className="text-muted-foreground mb-4">Сыныптасыңмен күнделікті іс-әрекеттер туралы сұрақ-жауап</p>
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
              8 short exercises: Fill in, correct mistakes, make questions
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Worksheet жүктеу (PDF)
            </Button>
          </Card>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/lessons/2">
              <Card className="p-6 hover:shadow-medium transition-all group cursor-pointer h-full">
                <p className="text-sm text-muted-foreground mb-2">← Алдыңғы сабақ</p>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  Lesson 2: Languages & Guessing
                </h3>
              </Card>
            </Link>
            <Link to="/lessons/4">
              <Card className="p-6 bg-gradient-hero text-white relative overflow-hidden group cursor-pointer h-full">
                <div className="relative z-10">
                  <p className="text-sm text-white/80 mb-2">Келесі сабақ →</p>
                  <h3 className="text-lg font-bold">Lesson 4: A Cosmopolitan City</h3>
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

export default Lesson3;
