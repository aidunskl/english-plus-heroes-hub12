import Navigation from "@/components/Navigation";
import LessonCard from "@/components/LessonCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Globe,
  Languages,
  MessageCircle,
  Gamepad2,
  Target,
  ArrowRight,
  Star,
  Users,
  HeartHandshake,
  Trophy,
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.85), rgba(59, 130, 246, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">6-сынып | Unit 2</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Helping and Heroes
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Ағылшын тілі | English Plus Grade 6
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Бұл модульде біз елдерді, ұлттарды, тілдерді үйренеміз және космополитикалық қалаларды сипаттауды үйренеміз.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 shadow-medium" asChild>
                <a href="#lessons">
                  <BookOpen className="w-5 h-5" />
                  Сабақтарды бастау
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/games">
                  <Gamepad2 className="w-5 h-5" />
                  Ойындарға өту
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Елдер мен ұлттар</h3>
              <p className="text-sm text-muted-foreground">50+ елдер және ұлттықтар</p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Languages className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Тілдер</h3>
              <p className="text-sm text-muted-foreground">Әлемдік тілдерді үйрену</p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Сөйлесу дағдылары</h3>
              <p className="text-sm text-muted-foreground">Guessing фразалары</p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-bold text-lg mb-2">Present Simple</h3>
              <p className="text-sm text-muted-foreground">Грамматикалық құрылымдар</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              8 интерактивті сабақ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Әр сабақта жаңа білім, тапсырмалар және интерактивті жаттығулар бар
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <LessonCard
              title="Lesson 1: Countries & Nationalities"
              description="Елдер мен ұлттарды үйрену. 'Where are you from?' сұрағына жауап беруді үйрену."
              icon={Globe}
              href="/lessons/1"
              color="primary"
            />
            <LessonCard
              title="Lesson 2: Languages & Guessing"
              description="Әлемдік тілдер және болжау фразалары: 'Maybe...', 'I think...'"
              icon={Languages}
              href="/lessons/2"
              color="secondary"
            />
            <LessonCard
              title="Lesson 3: Present Simple"
              description="Present Simple шағы: affirmative, negative, questions"
              icon={MessageCircle}
              href="/lessons/3"
              color="accent"
            />
            <LessonCard
              title="Lesson 4: A Cosmopolitan City"
              description="Космополитикалық қала туралы мәтінді оқу және түсіну"
              icon={BookOpen}
              href="/lessons/4"
              color="success"
            />
            <LessonCard
              title="Lesson 5: Review & Project"
              description="Барлық материалды қайталау және 'My Hero' жобасын жасау"
              icon={Target}
              href="/lessons/5"
              color="primary"
            />
            <LessonCard
              title="Lesson 6: Volunteers"
              description="Волонтерлік қызмет және Present Continuous tense"
              icon={Users}
              href="/lessons/6"
              color="secondary"
            />
            <LessonCard
              title="Lesson 7: Everyday Heroes"
              description="Күнделікті батырлар туралы оқу және айту"
              icon={HeartHandshake}
              href="/lessons/7"
              color="accent"
            />
            <LessonCard
              title="Lesson 8: Final Presentation"
              description="Қорытынды жоба презентациясы және бағалау"
              icon={Trophy}
              href="/lessons/8"
              color="success"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-hero p-8 md:p-12">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Дайынсың ба?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Бірінші сабақты бастап, жаңа білімді игеруді қазір бастаймыз!
              </p>
              <Button size="lg" variant="secondary" className="gap-2 shadow-strong" asChild>
                <Link to="/lessons/1">
                  Lesson 1-ді бастау
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">English Plus Grade 6 | Unit 2: Helping and Heroes</p>
          <p className="text-sm">6-сынып оқушыларына арналған үй оқулығы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
