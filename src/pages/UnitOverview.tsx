import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Globe, MessageSquare, BookOpen, Target } from "lucide-react";

const UnitOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">Unit 2</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Helping and Heroes
            </h1>
            <p className="text-xl text-muted-foreground">
              Біз елдерді, ұлттарды, тілдерді үйренеміз және космополитикалық қалаларды сипаттауды үйренеміз.
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="p-8 mb-8 bg-gradient-card shadow-soft">
            <div className="flex items-start gap-3 mb-6">
              <Target className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Оқу мақсаттары</h2>
                <p className="text-muted-foreground">Бұл модульді аяқтағанда оқушылар:</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Елдер мен ұлттарды атай алады",
                "Әлемдік негізгі тілдерді біледі",
                "Present Simple шағын дұрыс қолданады",
                "Космополитикалық қалалар туралы сипаттай алады",
                "'Where are you from?' сұрағына жауап бере алады",
                "Болжау фразаларын (Maybe, I think) қолданады"
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground">{objective}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Key Topics */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover:shadow-medium transition-all bg-gradient-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vocabulary</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Countries & Nationalities</li>
                <li>• Languages</li>
                <li>• Irregular plurals</li>
                <li>• City descriptions</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all bg-gradient-card">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grammar</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Present Simple: affirmative</li>
                <li>• Present Simple: negative</li>
                <li>• Present Simple: questions</li>
                <li>• I/You/We/They vs He/She/It</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all bg-gradient-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reading & Writing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cosmopolitan city description</li>
                <li>• Short paragraphs</li>
                <li>• Personal information</li>
                <li>• Hero descriptions</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all bg-gradient-card">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speaking & Listening</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Asking about origins</li>
                <li>• Guessing phrases</li>
                <li>• Pair work activities</li>
                <li>• Presentations</li>
              </ul>
            </Card>
          </div>

          {/* Materials */}
          <Card className="p-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-6">Материалдар</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Оқулықтар:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Student's Book: Pages 20-23</li>
                  <li>• Workbook: Unit 2 exercises</li>
                  <li>• Audio tracks: 1.17 - 1.22</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Қосымша:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Презентациялар (PPT)</li>
                  <li>• Worksheets (PDF)</li>
                  <li>• Интерактивті ойындар</li>
                  <li>• Видео материалдар</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UnitOverview;
