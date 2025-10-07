import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, BookOpen, ExternalLink } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  description?: string;
  duration?: string;
  lesson?: string;
  className?: string;
}

const YouTubePlayer = ({ 
  videoId, 
  title, 
  description, 
  duration, 
  lesson,
  className = "" 
}: YouTubePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleBack = () => {
    setIsPlaying(false);
  };

  return (
    <Card className={`bg-card border rounded-lg overflow-hidden ${className}`}>
      {!isPlaying ? (
        <div className="relative">
          <div 
            className="aspect-video bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center cursor-pointer group"
            onClick={handlePlay}
          >
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 ml-1" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/80">YouTube видео</p>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{title}</h3>
              {lesson && (
                <Badge variant="secondary" className="gap-1">
                  <BookOpen className="w-3 h-3" />
                  {lesson}
                </Badge>
              )}
            </div>
            
            {description && (
              <p className="text-muted-foreground text-sm mb-3">{description}</p>
            )}
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {duration && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {duration}
                </div>
              )}
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                YouTube-да ашу
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
          
          <div className="p-4">
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Барлық видеоларды көру
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default YouTubePlayer;
