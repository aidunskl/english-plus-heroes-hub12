import Navigation from "@/components/Navigation";
import SpeechPlayer from "@/components/SpeechPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Trophy, CheckCircle2, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const Lesson8 = () => {
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
          <h1 className="text-4xl font-bold mb-4 text-foreground">Lesson 8: Final Review & Presentation</h1>
          <p className="text-lg text-muted-foreground">Қорытынды қайталау және презентация</p>
        </div>

        <Card className="p-6 mb-6 bg-gradient-card">
          <div className="flex items-start gap-4">
            <Trophy className="w-8 h-8 text-primary mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">Learning Objectives</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Бүкіл бөлімді қайталау</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Презентация жасау дағдыларын дамыту</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>"Heroes in My Community" жобасын аяқтау</span>
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
            text="My hero is my teacher. She is kind and helpful. She teaches us English. She helps us learn. She is brave and strong. I want to be like her."
            title="Writing Skills - Pronunciation"
            className="mb-4"
          />
          <p className="text-sm text-muted-foreground">
            Тыңдап, жазу дағдыларының дұрыс айтылуын үйреніңіз
          </p>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Grammar Review Checklist</h3>
          <div className="space-y-3">
            {[
              { topic: "Present Simple", examples: "I help people. She works in a hospital." },
              { topic: "Present Continuous", examples: "I am helping now. They are working." },
              { topic: "Questions with do/does", examples: "What does he do? Where do you work?" },
              { topic: "Countries & Nationalities", examples: "Germany → German, France → French" },
              { topic: "Adjectives", examples: "brave, kind, helpful, strong, caring" }
            ].map((item, index) => (
              <div key={index} className="p-4 border-l-4 border-primary bg-muted/30 rounded">
                <div className="font-bold text-primary mb-1">{item.topic}</div>
                <div className="text-sm text-muted-foreground italic">{item.examples}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Vocabulary Categories Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <h4 className="font-bold mb-2">Countries & Languages</h4>
              <p className="text-sm text-muted-foreground">
                China-Chinese, Japan-Japanese, Spain-Spanish, Russia-Russian
              </p>
            </div>
            
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h4 className="font-bold mb-2">Volunteer Activities</h4>
              <p className="text-sm text-muted-foreground">
                teach, help, build, work with, make a difference
              </p>
            </div>
            
            <div className="p-4 bg-accent/10 rounded-lg">
              <h4 className="font-bold mb-2">Character Traits</h4>
              <p className="text-sm text-muted-foreground">
                brave, kind, helpful, strong, caring, patient
              </p>
            </div>
            
            <div className="p-4 bg-success/10 rounded-lg">
              <h4 className="font-bold mb-2">Professions</h4>
              <p className="text-sm text-muted-foreground">
                doctor, teacher, firefighter, police officer, nurse
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/20 to-secondary/20">
          <h3 className="text-xl font-bold mb-4 text-foreground">Final Project: "Heroes in My Community"</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Create a presentation about heroes in your community. Include:
            </p>
            
            <div className="space-y-3">
              <div className="p-3 bg-background/50 rounded">
                <span className="font-bold text-primary">1. Introduction</span>
                <p className="text-sm text-muted-foreground ml-4">
                  • Introduce yourself and your topic
                </p>
              </div>
              
              <div className="p-3 bg-background/50 rounded">
                <span className="font-bold text-primary">2. Main Hero</span>
                <p className="text-sm text-muted-foreground ml-4">
                  • Name, profession, what they do<br/>
                  • Personal qualities (adjectives)<br/>
                  • Why they are important
                </p>
              </div>
              
              <div className="p-3 bg-background/50 rounded">
                <span className="font-bold text-primary">3. Their Impact</span>
                <p className="text-sm text-muted-foreground ml-4">
                  • How they help the community<br/>
                  • Examples of their work<br/>
                  • What we can learn from them
                </p>
              </div>
              
              <div className="p-3 bg-background/50 rounded">
                <span className="font-bold text-primary">4. Conclusion</span>
                <p className="text-sm text-muted-foreground ml-4">
                  • Summary of main points<br/>
                  • Your personal message
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Presentation Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-success">✅ Do:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Speak clearly and slowly</li>
                <li>• Make eye contact</li>
                <li>• Use pictures or photos</li>
                <li>• Practice before presenting</li>
                <li>• Smile and be confident</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-destructive">❌ Don't:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Read from paper all the time</li>
                <li>• Speak too fast</li>
                <li>• Turn your back to audience</li>
                <li>• Use too many words on slides</li>
                <li>• Be afraid of pauses</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6 bg-accent/10">
          <h3 className="text-xl font-bold mb-4 text-foreground">Assessment Criteria</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 border-b">
              <span>Content (information about hero)</span>
              <span className="font-bold">25 points</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b">
              <span>Language (grammar & vocabulary)</span>
              <span className="font-bold">25 points</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b">
              <span>Delivery (speaking clearly)</span>
              <span className="font-bold">25 points</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b">
              <span>Visual aids (pictures, design)</span>
              <span className="font-bold">15 points</span>
            </div>
            <div className="flex justify-between items-center p-2">
              <span>Creativity & effort</span>
              <span className="font-bold">10 points</span>
            </div>
            <div className="flex justify-between items-center p-2 pt-4 border-t-2 border-primary">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg text-primary">100 points</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8 bg-gradient-to-r from-success/20 to-primary/20">
          <h3 className="text-xl font-bold mb-3 text-foreground">Homework</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📝 Prepare your presentation slides or poster</li>
            <li>🎤 Practice your presentation (3-5 minutes)</li>
            <li>📸 Find or draw pictures for your hero</li>
            <li>✍️ Write notes (don't write full sentences to read!)</li>
          </ul>
        </Card>

        <div className="p-6 bg-gradient-to-r from-primary to-primary-glow text-white rounded-lg text-center mb-8">
          <Trophy className="w-12 h-12 mx-auto mb-3" />
          <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
          <p className="text-lg">You completed Unit 2: Helping and Heroes!</p>
          <p className="mt-2 text-white/90">Good luck with your presentation! 🌟</p>
        </div>

        <div className="flex justify-start items-center">
          <Link to="/lessons/7">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Lesson 7
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson8;