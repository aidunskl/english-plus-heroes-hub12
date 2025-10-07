import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Eye, FileText, User, Clock } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PresentationView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [presentation, setPresentation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const title = searchParams.get('title');
    const file = searchParams.get('file');
    const author = searchParams.get('author');
    const date = searchParams.get('date');
    const size = searchParams.get('size');

    if (title && file) {
      setPresentation({
        title,
        file,
        author: author || "Teacher Samal",
        date: date || "2025",
        size: size || "Unknown"
      });
    }
    setLoading(false);
  }, [searchParams]);

  const handleDownload = () => {
    if (presentation?.file) {
      const link = document.createElement('a');
      link.href = presentation.file;
      link.download = `${presentation.title}.pdf`;
      link.click();
    }
  };

  const handleView = () => {
    if (presentation?.file) {
      window.open(presentation.file, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Жүктелуде...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!presentation) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Презентация табылмады</h1>
              <p className="text-muted-foreground mb-6">
                Көрсетілген презентация жоқ немесе жол қате
              </p>
              <Button onClick={() => navigate('/materials')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Материалдарға оралу
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/materials")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Артқа
          </Button>

          <Card className="p-8 mb-6 bg-gradient-card">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <Badge className="mb-4" variant="secondary">PDF Презентация</Badge>
                <h1 className="text-3xl font-bold mb-2">
                  {presentation.title}
                </h1>
                <p className="text-muted-foreground">
                  Презентацияны көру немесе жүктеу
                </p>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleView} className="gap-2">
                  <Eye className="w-4 h-4" />
                  Көру
                </Button>
                <Button onClick={handleDownload} variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Жүктеу
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>Автор: {presentation.author}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Жылы: {presentation.date}</span>
              </Badge>
              <Badge variant="outline" className="p-3 justify-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Өлшемі: {presentation.size}</span>
              </Badge>
            </div>
          </Card>

          <Card className="p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">PDF Презентация</h2>
              <p className="text-muted-foreground mb-6">
                Презентацияны көру үшін "Көру" батырмасын басыңыз немесе "Жүктеу" батырмасын басып, файлды компьютерге сақтаңыз
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleView} size="lg" className="gap-2">
                <Eye className="w-5 h-5" />
                Презентацияны ашу
              </Button>
              <Button onClick={handleDownload} variant="outline" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Файлды жүктеу
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-muted/30">
            <h3 className="font-bold text-lg mb-3">📖 Презентацияны қолдану туралы:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• "Көру" батырмасын басып, презентацияны браузерде ашыңыз</li>
              <li>• "Жүктеу" батырмасын басып, файлды компьютерге сақтаңыз</li>
              <li>• PDF файлды Adobe Reader немесе басқа PDF оқырманмен ашыңыз</li>
              <li>• Мобильді құрылғыларда да жұмыс істейді</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PresentationView;
