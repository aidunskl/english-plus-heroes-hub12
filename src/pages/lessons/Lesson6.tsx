import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Lesson6 = () => {
  const volunteers = [
    { name: "Sarah", activity: "teaches English", country: "Kenya" },
    { name: "Tom", activity: "builds houses", country: "Peru" },
    { name: "Maria", activity: "helps animals", country: "Thailand" },
    { name: "David", activity: "works with children", country: "India" }
  ];

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
          <h1 className="text-4xl font-bold mb-4 text-foreground">Lesson 6: Volunteers Around the World</h1>
          <p className="text-lg text-muted-foreground">Әлем бойынша волонтерлік қызмет</p>
        </div>

        <Card className="p-6 mb-6 bg-gradient-card">
          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-primary mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">Learning Objectives</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Волонтерлік қызмет туралы сөйлеу</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Present Continuous tense үйрену</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Helping verbs: help, teach, build, work</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Vocabulary: Volunteer Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { word: "teach", translation: "оқыту", example: "She teaches children" },
              { word: "help", translation: "көмектесу", example: "He helps animals" },
              { word: "build", translation: "салу", example: "They build houses" },
              { word: "work with", translation: "жұмыс істеу", example: "I work with people" },
              { word: "volunteer", translation: "волонтер", example: "She's a volunteer" },
              { word: "make a difference", translation: "өзгеріс енгізу", example: "We make a difference" }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50">
                <div className="font-bold text-primary">{item.word}</div>
                <div className="text-sm text-muted-foreground mb-1">{item.translation}</div>
                <div className="text-sm italic">{item.example}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Grammar: Present Continuous</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold mb-2">Structure: am/is/are + verb-ing</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• I am helping children in Africa</li>
                <li>• She is teaching English in Japan</li>
                <li>• They are building houses in Peru</li>
              </ul>
            </div>
            
            <div className="p-4 bg-secondary/10 rounded-lg">
              <p className="font-semibold mb-2">Spelling rules:</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• help → helping (add -ing)</li>
                <li>• make → making (remove e, add -ing)</li>
                <li>• sit → sitting (double consonant + -ing)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-foreground">Reading: Meet the Volunteers</h3>
          <div className="space-y-4">
            {volunteers.map((vol, index) => (
              <div key={index} className="p-4 border-l-4 border-primary bg-muted/30 rounded">
                <p className="text-lg">
                  <span className="font-bold text-primary">{vol.name}</span> is a volunteer.
                  Right now, {vol.name.toLowerCase() === 'maria' || vol.name.toLowerCase() === 'sarah' ? 'she' : 'he'} is {vol.activity} in {vol.country}.
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-6 bg-accent/10">
          <h3 className="text-xl font-bold mb-4 text-foreground">Practice Activity</h3>
          <p className="mb-4 text-muted-foreground">Write about your dream volunteer project:</p>
          <div className="space-y-2 text-muted-foreground">
            <p>1. Where are you working? (country)</p>
            <p>2. What are you doing? (activity)</p>
            <p>3. Who are you helping? (people/animals)</p>
            <p>4. Why is it important?</p>
          </div>
        </Card>

        <Card className="p-6 mb-8 bg-gradient-to-r from-success/20 to-primary/20">
          <h3 className="text-xl font-bold mb-3 text-foreground">Homework</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📝 Write 5 sentences using Present Continuous about volunteers</li>
            <li>📖 Learn new vocabulary words</li>
            <li>🎯 Think about: How can you help your community?</li>
          </ul>
        </Card>

        <div className="flex justify-between items-center">
          <Link to="/lessons/5">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Lesson 5
            </Button>
          </Link>
          <Link to="/lessons/7">
            <Button className="gap-2">
              Lesson 7
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson6;