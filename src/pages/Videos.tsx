import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Play, Clock } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      title: "Countries and Nationalities Introduction",
      duration: "8:30",
      lesson: "Lesson 1",
      description: "Елдер мен ұлттар туралы кіріспе видео"
    },
    {
      title: "How to Ask 'Where are you from?'",
      duration: "5:45",
      lesson: "Lesson 1",
      description: "Шыққан жері туралы сұрақ қою"
    },
    {
      title: "Languages Around the World",
      duration: "10:20",
      lesson: "Lesson 2",
      description: "Әлемдегі тілдер туралы видео"
    },
    {
      title: "Present Simple Grammar Rules",
      duration: "12:15",
      lesson: "Lesson 3",
      description: "Present Simple шағының ережелері"
    },
    {
      title: "Present Simple: Questions and Negatives",
      duration: "9:40",
      lesson: "Lesson 3",
      description: "Сұраулы және болымсыз формалар"
    },
    {
      title: "A Tour of a Cosmopolitan City",
      duration: "7:30",
      lesson: "Lesson 4",
      description: "Космополитикалық қала туралы видео тур"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Видео материалдар</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Оқу видеолары
            </h1>
            <p className="text-xl text-muted-foreground">
              Әр сабаққа арналған түсіндірме видеолар
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <div className="aspect-video bg-gradient-hero relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                <div className="p-6">
                  <Badge className="mb-3" variant="secondary">{video.lesson}</Badge>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Coming Soon */}
          <Card className="mt-12 p-8 text-center bg-muted/30">
            <Video className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Жаңа видеолар жақында!</h2>
            <p className="text-muted-foreground">
              Қосымша түсіндірме видеолар мен интерактивті сабақтар
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Videos;
