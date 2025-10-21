import Navigation from "@/components/Navigation";
import VideoPlayer from "@/components/VideoPlayer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Play, Clock, BookOpen, Star, Download, Youtube } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const videos = [
    {
      id: "countries-intro",
      title: "Countries and Nationalities Introduction",
      duration: "8:30",
      lesson: "Lesson 1",
      description: "Елдер мен ұлттар туралы кіріспе видео. Елдердің атаулары мен ұлттықтарын үйрену.",
      src: "/videos/lesson1-countries-intro.mp4",
      youtubeId: "qyZH4U7_oEk", // Countries and Nationalities
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Easy",
      rating: 4.8,
      type: "youtube"
    },
    {
      id: "where-are-you-from",
      title: "How to Ask 'Where are you from?'",
      duration: "5:45",
      lesson: "Lesson 1",
      description: "Шыққан жері туралы сұрақ қою және жауап беру. Диалогтар мен мысалдар.",
      src: "/videos/lesson1-where-are-you-from.mp4",
      youtubeId: "c_JjRk1L4Q", // Where are you from
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Easy",
      rating: 4.9,
      type: "youtube"
    },
    {
      id: "languages-world",
      title: "Languages Around the World",
      duration: "10:20",
      lesson: "Lesson 2",
      description: "Әлемдегі тілдер туралы видео. Тілдердің таралуы мен маңызы.",
      src: "/videos/lesson2-languages-around-world.mp4",
      youtubeId: "V16oh3eJ620", // Languages Around the World
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Medium",
      rating: 4.7,
      type: "youtube"
    },
    {
      id: "present-simple-grammar",
      title: "Present Simple Grammar Rules",
      duration: "12:15",
      lesson: "Lesson 3",
      description: "Present Simple шағының ережелері. Аффирматив, негатив және сұраулы формалар.",
      src: "/videos/lesson3-present-simple-grammar.mp4",
      youtubeId: "nvVdIJ0las0", // Present Simple Grammar
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Medium",
      rating: 4.6,
      type: "youtube"
    },
    {
      id: "present-simple-questions",
      title: "Present Simple: Questions and Negatives",
      duration: "9:40",
      lesson: "Lesson 3",
      description: "Сұраулы және болымсыз формалар. Do/Does қолдану ережелері.",
      src: "/videos/lesson3-present-simple-questions.mp4",
      youtubeId: "htX6frsv1Wc", // Present Simple Questions
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Medium",
      rating: 4.5,
      type: "youtube"
    },
    {
      id: "cosmopolitan-city",
      title: "A Tour of a Cosmopolitan City",
      duration: "7:30",
      lesson: "Lesson 4",
      description: "Космополитикалық қала туралы видео тур. Әртүрлі мәдениеттердің қосылуы.",
      src: "/videos/lesson4-cosmopolitan-city-tour.mp4",
      youtubeId: "GBAPw25_J5E", // Cosmopolitan City
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Easy",
      rating: 4.8,
      type: "youtube"
    },
    {
      id: "non-verbal-language",
      title: "Non verbal language",
      duration: "6:15",
      lesson: "Additional",
      description: "Сөзсіз коммуникация туралы видео. Жесттер, мимика және дене тілі.",
      src: "/videos/non-verbal-language.mp4",
      youtubeId: "kipIJ3gpcbg", // Non verbal language
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Medium",
      rating: 4.7,
      type: "youtube"
    },
    {
      id: "teacher-sholpan-video",
      title: "Teacher Sholpan Video Lesson",
      duration: "8:30",
      lesson: "Additional",
      description: "Teacher Sholpan-ның ағылшын тілі сабағы. Тіл дағдыларын дамыту.",
      src: "/videos/teacher-sholpan-lesson.mp4",
      youtubeId: "XAy2wrPIIB8", // Teacher Sholpan Video
      thumbnail: "/assets/hero-background.jpg",
      difficulty: "Medium",
      rating: 4.8,
      type: "youtube"
    }
  ];

  const toggleFavorite = (videoId: string) => {
    setFavorites(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
              Видео сабақтар
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unit 2 бойынша барлық видео материалдар - интерактивті оқу тәжірибесі
            </p>
          </div>

          {/* Selected Video Player */}
          {selectedVideo && (
            <div className="mb-8">
              {(() => {
                const video = videos.find(v => v.id === selectedVideo);
                return video ? (
                  video.type === "youtube" ? (
                    <YouTubePlayer
                      videoId={video.youtubeId}
                      title={video.title}
                      description={video.description}
                      duration={video.duration}
                      lesson={video.lesson}
                      className="mb-4"
                    />
                  ) : (
                    <VideoPlayer
                      src={video.src}
                      title={video.title}
                      description={video.description}
                      duration={video.duration}
                      lesson={video.lesson}
                      thumbnail={video.thumbnail}
                      className="mb-4"
                    />
                  )
                ) : null;
              })()}
              <Button 
                variant="outline" 
                onClick={() => setSelectedVideo(null)}
                className="gap-2"
              >
                <Video className="w-4 h-4" />
                Барлық видеоларды көру
              </Button>
            </div>
          )}

          {/* Video Grid */}
          {!selectedVideo && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="group hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card cursor-pointer">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <BookOpen className="w-3 h-3" />
                          {video.lesson}
                        </Badge>
                        <Badge className={getDifficultyColor(video.difficulty)}>
                          {video.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{video.rating}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(video.id);
                        }}
                        className={favorites.includes(video.id) ? "text-yellow-500" : ""}
                      >
                        <Star className={`w-4 h-4 ${favorites.includes(video.id) ? "fill-current" : ""}`} />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 flex-1"
                        onClick={() => setSelectedVideo(video.id)}
                      >
                        {video.type === "youtube" ? (
                          <Youtube className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                        Көру
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          if (video.type === "youtube") {
                            window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
                          } else {
                            // Create a download link for the video
                            const link = document.createElement('a');
                            link.href = video.src;
                            link.download = `${video.title}.mp4`;
                            link.click();
                          }
                        }}
                      >
                        {video.type === "youtube" ? (
                          <Youtube className="w-4 h-4" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Favorites Section */}
          {favorites.length > 0 && (
            <Card className="mt-8 p-6 bg-gradient-card">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Таңдаулы видеолар
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favorites.map(favoriteId => {
                  const video = videos.find(v => v.id === favoriteId);
                  return video ? (
                    <div key={video.id} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{video.title}</h4>
                        <p className="text-xs text-muted-foreground">{video.lesson} • {video.duration}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setSelectedVideo(video.id)}
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : null;
                })}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
