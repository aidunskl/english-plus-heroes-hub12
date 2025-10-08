import Navigation from "@/components/Navigation";
import SpeechPlayer from "@/components/SpeechPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, CheckCircle2, Download, Trophy, Star, Users, Volume2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Lesson5 = () => {
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
            <Badge className="mb-4" variant="secondary">Lesson 5</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Review & Project
            </h1>
            <p className="text-xl text-muted-foreground">
              Қорытынды қайталау және "My Hero" жобасы
            </p>
          </div>

          {/* Congratulations Card */}
          <Card className="p-8 mb-8 bg-gradient-hero text-white relative overflow-hidden">
            <div className="relative z-10 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 animate-float" />
              <h2 className="text-3xl font-bold mb-4">Құттықтаймыз! 🎉</h2>
              <p className="text-xl text-white/90">
                Сіз Unit 2 "Helping and Heroes" модулінің соңғы сабағына жеттіңіз!
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mt-24" />
          </Card>

          {/* Review Topics */}
          <Card className="p-6 mb-8 bg-gradient-card shadow-soft">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-success" />
              Не үйрендік? (What we learned)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Lesson 1:</h3>
                <p className="text-sm text-muted-foreground">Countries & Nationalities</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2">Lesson 2:</h3>
                <p className="text-sm text-muted-foreground">Languages & Guessing phrases</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-bold text-accent mb-2">Lesson 3:</h3>
                <p className="text-sm text-muted-foreground">Present Simple grammar</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h3 className="font-bold text-success mb-2">Lesson 4:</h3>
                <p className="text-sm text-muted-foreground">Cosmopolitan city reading</p>
              </div>
            </div>
          </Card>

          {/* Review Game */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">🎮 Review Quiz</h3>
                <p className="text-muted-foreground mb-4">
                  Барлық тақырыптар бойынша интерактивті квиз. 20 сұрақ, 30 минут.
                </p>
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => navigate('/games')}
                >
                  <Target className="w-5 h-5" />
                  Квизді бастау
                </Button>
              </div>
            </div>
          </Card>

          {/* Audio Section */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-primary" />
              Аудио материал
            </h2>
            <SpeechPlayer 
              text="Countries, nationalities, languages, cities, grammar, vocabulary, conversation, reading, writing, heroes"
              title="Vocabulary Review - Pronunciation"
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Тыңдап, сөздік қорының дұрыс айтылуын қайталаңыз
            </p>
          </Card>

          {/* Final Project */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-8 h-8 text-primary" />
              Final Project: "My Hero"
            </h2>

            <Card className="p-8 bg-success/5 border-success/20 mb-6">
              <h3 className="text-2xl font-bold mb-4">Project Description</h3>
              <p className="text-muted-foreground mb-4">
                Өз қаһарманыңыз немесе көмекшіңіз туралы презентация жасаңыз. 
                Бұл дәрігер, мұғалім, өртсөндіруші немесе қоғамда көмектесетін адам болуы мүмкін.
              </p>
              
              <div className="bg-background p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Project Requirements:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Постер немесе презентация жасау</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>6-8 мақсатты сөздерді қолдану</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>40+ сөзден тұратын мәтін</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Present Simple қолдану</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Сыныпта презентация жасау (2-3 минут)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold mb-2">Example:</p>
                <p className="text-sm">
                  "My hero is Dr. Aizhan. She is a doctor. She works in a hospital in Almaty. 
                  She speaks Kazakh, Russian, and English. She helps many people every day. 
                  She is very kind and friendly. She doesn't work on Sundays. 
                  I think she is a real hero!"
                </p>
              </div>
            </Card>

            {/* Rubric */}
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-xl font-bold mb-4">📊 Grading Rubric (Бағалау критерийлері)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded">
                  <span className="font-medium">Vocabulary (6-8 words)</span>
                  <Badge>25%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded">
                  <span className="font-medium">Grammar (Present Simple)</span>
                  <Badge>25%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded">
                  <span className="font-medium">Creativity (Design/Ideas)</span>
                  <Badge>25%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded">
                  <span className="font-medium">Presentation (Speaking)</span>
                  <Badge>25%</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Resources */}
          <Card className="p-6 mb-8 bg-accent/5 border-accent/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Download className="w-6 h-6 text-accent" />
              Project Resources
            </h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="w-4 h-4" />
                Project Template (PDF)
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="w-4 h-4" />
                Vocabulary List (PDF)
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="w-4 h-4" />
                Example Projects (PDF)
              </Button>
            </div>
          </Card>

          {/* Final Test */}
          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">📝 Final Test</h2>
            <p className="text-muted-foreground mb-4">
              Unit 2 бойынша қорытынды тест. Барлық материалды қамтиды.
            </p>
            <Link to="/tests">
              <Button size="lg" className="gap-2">
                <Trophy className="w-5 h-5" />
                Қорытынды тестке өту
              </Button>
            </Link>
          </Card>

          {/* Completion Card */}
          <Card className="p-8 text-center bg-gradient-card shadow-strong">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Great Job! Жарайсың!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Сіз Unit 2 "Helping and Heroes" модулін аяқтадыңыз! 
              Енді барлық материалдарды қайталап, жобаңызды жасаңыз.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/games">
                <Button variant="outline" size="lg">
                  Ойындарды ойнау
                </Button>
              </Link>
              <Link to="/tests">
                <Button variant="default" size="lg">
                  Тест тапсыру
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lesson5;
