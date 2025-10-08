import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface SpeechPlayerProps {
  text: string;
  title?: string;
  className?: string;
  language?: string;
}

const SpeechPlayer = ({ 
  text, 
  title = "Аудио", 
  className = "",
  language = "en-US"
}: SpeechPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  // Проверяем поддержку синтезатора речи
  useState(() => {
    setIsSupported('speechSynthesis' in window);
  });

  const speak = () => {
    if (!isSupported) {
      alert('Браузер синтезатор речи қолдамайды');
      return;
    }

    // Останавливаем предыдущую речь
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = isMuted ? 0 : 1;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      speak();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isPlaying) {
      // Перезапускаем с новым уровнем громкости
      stop();
      setTimeout(() => speak(), 100);
    }
  };

  if (!isSupported) {
    return (
      <div className={`bg-card border rounded-lg p-4 ${className}`}>
        <div className="text-center text-muted-foreground">
          <VolumeX className="w-8 h-8 mx-auto mb-2" />
          <p>Синтезатор речи қолдамайды</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card border rounded-lg p-4 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <Button
          onClick={togglePlay}
          size="sm"
          variant={isPlaying ? "default" : "outline"}
          className="gap-2"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? "Тоқтату" : "Ойнату"}
        </Button>

        <Button
          onClick={toggleMute}
          size="sm"
          variant="ghost"
          className="gap-2"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>

        <div className="flex-1">
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-muted-foreground">
            Синтезатор речи
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <strong>Мәтін:</strong> {text}
      </div>
    </div>
  );
};

export default SpeechPlayer;
