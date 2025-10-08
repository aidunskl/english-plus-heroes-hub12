import Navigation from "@/components/Navigation";
import SpeechPlayer from "@/components/SpeechPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, CheckCircle2, Download, ArrowRight, Volume2, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Lesson1 = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const vocabulary = [
    { country: "Germany", nationality: "German", flag: "🇩🇪", pronunciation: "/ˈdʒɜːrməni/" },
    { country: "France", nationality: "French", flag: "🇫🇷", pronunciation: "/fræns/" },
    { country: "Poland", nationality: "Polish", flag: "🇵🇱", pronunciation: "/ˈpoʊlənd/" },
    { country: "Kazakhstan", nationality: "Kazakh", flag: "🇰🇿", pronunciation: "/kəˈzɑːkstæn/" },
    { country: "China", nationality: "Chinese", flag: "🇨🇳", pronunciation: "/ˈtʃaɪnə/" },
    { country: "Brazil", nationality: "Brazilian", flag: "🇧🇷", pronunciation: "/brəˈzɪl/" },
    { country: "Japan", nationality: "Japanese", flag: "🇯🇵", pronunciation: "/dʒəˈpæn/" },
    { country: "Spain", nationality: "Spanish", flag: "🇪🇸", pronunciation: "/speɪn/" },
  ];

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const checkAnswer = () => {
    if (selectedCountry && userAnswer) {
      const correctNationality = vocabulary.find(v => v.country === selectedCountry)?.nationality;
      const isAnswerCorrect = userAnswer.toLowerCase() === correctNationality?.toLowerCase();
      setIsCorrect(isAnswerCorrect);
      setShowAnswer(true);
    }
  };

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

          {/* Audio Section */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-primary" />
              Аудио материал
            </h2>
            <SpeechPlayer 
              text="Germany - German, France - French, Poland - Polish, Kazakhstan - Kazakh, China - Chinese, Brazil - Brazilian, Japan - Japanese, Spain - Spanish"
              title="Countries and Nationalities - Pronunciation"
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Тыңдап, елдер мен ұлттардың дұрыс айтылуын үйреніңіз
            </p>
          </Card>

          {/* Vocabulary Cards */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">📚 Key Vocabulary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {vocabulary.map((item, index) => (
                <Card 
                  key={index} 
                  className={`p-4 hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card group cursor-pointer ${
                    selectedCountry === item.country ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedCountry(item.country)}
                >
                  <div className="text-4xl mb-2 text-center group-hover:scale-110 transition-transform">
                    {item.flag}
                  </div>
                  <h3 className="font-bold text-center mb-1">{item.country}</h3>
                  <p className="text-sm text-muted-foreground text-center">{item.nationality}</p>
                  <p className="text-xs text-muted-foreground text-center mt-1">{item.pronunciation}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-full mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(`${item.country} - ${item.nationality}`);
                    }}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Айту
                  </Button>
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

          {/* Interactive Exercise */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <h2 className="text-2xl font-bold mb-4">🎯 Interactive Exercise</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Елді таңдап, оның ұлтын жазыңыз:
              </p>
              
              {selectedCountry && (
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-semibold mb-2">Таңдалған ел: {selectedCountry}</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Ұлтты жазыңыз..."
                      className="flex-1 px-3 py-2 border rounded-md"
                    />
                    <Button onClick={checkAnswer} disabled={!userAnswer}>
                      Тексеру
                    </Button>
                  </div>
                  
                  {showAnswer && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {isCorrect ? (
                        <p className="font-semibold">✅ Дұрыс! Тамаша!</p>
                      ) : (
                        <p className="font-semibold">
                          ❌ Қате. Дұрыс жауап: {vocabulary.find(v => v.country === selectedCountry)?.nationality}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
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
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => navigate('/games/countries-matching?from=lesson1')}
                    >
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
                    <h3 className="font-bold text-lg mb-2">Pronunciation Practice</h3>
                    <p className="text-muted-foreground mb-4">Елдер мен ұлттардың дұрыс айтылуын үйреніңіз</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => {
                        const randomCountry = vocabulary[Math.floor(Math.random() * vocabulary.length)];
                        speakText(`I'm from ${randomCountry.country}. I'm ${randomCountry.nationality}.`);
                      }}
                    >
                      <Volume2 className="w-4 h-4" />
                      Айтуды тыңдау
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
                    <p className="text-muted-foreground mb-4">"Where are you from?" сұрағын тәжірибелеңіз</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => {
                        const randomCountry = vocabulary[Math.floor(Math.random() * vocabulary.length)];
                        speakText(`Where are you from? I'm from ${randomCountry.country}. I'm ${randomCountry.nationality}.`);
                      }}
                    >
                      <Play className="w-4 h-4" />
                      Диалогты тыңдау
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
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Worksheet 1: Countries & Nationalities matching + 5-sentence mini-writing
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="gap-2 h-auto p-4 flex-col"
                  onClick={() => {
                    // Create a simple worksheet content
                    const worksheetContent = `
Countries & Nationalities Worksheet

Exercise 1: Match the countries with nationalities
1. Germany - ___
2. France - ___
3. Japan - ___
4. Brazil - ___
5. Spain - ___

Exercise 2: Write 5 sentences about different countries
Example: I'm from Kazakhstan. I'm Kazakh.

1. ________________________________
2. ________________________________
3. ________________________________
4. ________________________________
5. ________________________________
                    `;
                    
                    const blob = new Blob([worksheetContent], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'lesson1-worksheet.txt';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Worksheet жүктеу
                </Button>
                
                <Button 
                  variant="outline" 
                  className="gap-2 h-auto p-4 flex-col"
                  onClick={() => {
                    const homeworkContent = `
Homework Assignment - Lesson 1

Task 1: Practice pronunciation
- Say each country and nationality 3 times
- Record yourself if possible

Task 2: Write a short paragraph
"My country is Kazakhstan. I'm Kazakh. I speak Kazakh and English. 
My friend is from Germany. He's German. He speaks German and English."

Task 3: Practice with family
- Ask family members: "Where are you from?"
- Practice the conversation
                    `;
                    
                    const blob = new Blob([homeworkContent], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'lesson1-homework.txt';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  Үй тапсырмасы
                </Button>
              </div>
            </div>
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
