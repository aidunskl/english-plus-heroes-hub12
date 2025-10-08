import Navigation from "@/components/Navigation";
import SpeechPlayer from "@/components/SpeechPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, HeartHandshake, CheckCircle2, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const Lesson7 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to="/lessons">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Сабақтарға қайту
            </Button>
          </Link>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Lesson 7: Everyday Heroes</h1>
          <p className="text-lg text-muted-foreground">Күнделікті батырлар туралы</p>
        </div>

        <Card className="p-6 mb-6 bg-gradient-card">
          <div className="flex items-start gap-4">
            <HeartHandshake className="w-8 h-8 text-primary mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">Learning Objectives</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Адамдарды сипаттау (describing people)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Adjectives: brave, kind, helpful, strong</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Question formation: What does he/she do?</span>
                </li>
              </ul>
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
            text="Dr. Sarah is a brave doctor. She helps sick children. She works in a hospital. She is kind and helpful. She is a hero."
            title="Reading Comprehension - Pronunciation"
            className="mb-4"
          />
          <p className="text-sm text-muted-foreground">
            Тыңдап, оқу мәтінінің дұрыс айтылуын үйреніңіз
          </p>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Vocabulary: Character Adjectives</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { word: "brave", translation: "батыл", emoji: "🦁" },
              { word: "kind", translation: "мейірімді", emoji: "💝" },
              { word: "helpful", translation: "көмектесуші", emoji: "🤝" },
              { word: "strong", translation: "күшті", emoji: "💪" },
              { word: "caring", translation: "қамқор", emoji: "🤗" },
              { word: "smart", translation: "ақылды", emoji: "🧠" },
              { word: "generous", translation: "жомарт", emoji: "🎁" },
              { word: "honest", translation: "адал", emoji: "✨" },
              { word: "patient", translation: "шыдамды", emoji: "⏰" }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="font-bold text-primary">{item.word}</div>
                <div className="text-sm text-muted-foreground">{item.translation}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Reading: Real-Life Heroes</h3>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-primary bg-muted/30 rounded">
              <h4 className="font-bold text-lg mb-2 text-primary">Dr. Emma Wilson - Doctor</h4>
              <p className="text-muted-foreground">
                Dr. Emma is a doctor in a small village. She helps sick people every day. 
                She is very kind and caring. People say she is a hero because she works 
                long hours and never complains.
              </p>
            </div>

            <div className="p-4 border-l-4 border-secondary bg-muted/30 rounded">
              <h4 className="font-bold text-lg mb-2 text-secondary">Mr. Khan - Teacher</h4>
              <p className="text-muted-foreground">
                Mr. Khan teaches children in a refugee camp. He is patient and helpful. 
                He believes education can change lives. His students think he is a hero 
                because he gives them hope for the future.
              </p>
            </div>

            <div className="p-4 border-l-4 border-accent bg-muted/30 rounded">
              <h4 className="font-bold text-lg mb-2 text-accent">Lisa Chen - Firefighter</h4>
              <p className="text-muted-foreground">
                Lisa is a firefighter. She is brave and strong. She saves people from fires 
                and dangerous situations. Everyone in her town knows she is a real hero.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Grammar: Questions with "do/does"</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold mb-2">Structure:</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• What <span className="font-bold">does</span> she do? - She is a doctor.</li>
                <li>• Where <span className="font-bold">does</span> he work? - He works in a school.</li>
                <li>• Why <span className="font-bold">do</span> you like him? - Because he is kind.</li>
              </ul>
            </div>

            <div className="p-4 bg-secondary/10 rounded-lg">
              <p className="font-semibold mb-2">Remember:</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Use "does" with he/she/it</li>
                <li>• Use "do" with I/you/we/they</li>
                <li>• Main verb returns to base form (not -s)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6 bg-accent/10">
          <h3 className="text-xl font-bold mb-4 text-foreground">Speaking Activity</h3>
          <p className="mb-4 text-muted-foreground">Think about a hero in your life. Answer these questions:</p>
          <div className="space-y-2 text-muted-foreground">
            <p>1. Who is your hero?</p>
            <p>2. What does he/she do?</p>
            <p>3. Where does he/she work?</p>
            <p>4. Why is he/she a hero? (Use adjectives: brave, kind, etc.)</p>
            <p>5. How does he/she help people?</p>
          </div>
        </Card>

        <Card className="p-6 mb-8 bg-gradient-to-r from-success/20 to-primary/20">
          <h3 className="text-xl font-bold mb-3 text-foreground">Homework</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📝 Write a paragraph about your everyday hero (50-80 words)</li>
            <li>📖 Learn all character adjectives</li>
            <li>🎯 Interview a family member: "Who is your hero and why?"</li>
          </ul>
        </Card>

        <div className="flex justify-between items-center">
          <Link to="/lessons/6">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Lesson 6
            </Button>
          </Link>
          <Link to="/lessons/8">
            <Button className="gap-2">
              Lesson 8
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson7;