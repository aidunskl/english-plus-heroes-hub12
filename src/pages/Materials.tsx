import Navigation from "@/components/Navigation";
import PresentationViewer from "@/components/PresentationViewer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, BookOpen, Users, Calendar, File, Presentation } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      title: "Languages around the world",
      description: "Интерактивті презентация Canva платформасында",
      type: "Canva",
      size: "Онлайн",
      pages: "Интерактивті слайдтар",
      author: "Teacher Samal",
      date: "2025",
      icon: BookOpen,
      color: "primary",
      downloadUrl: "https://www.canva.com/design/DAG0t-dCGHU/-BaLmowDJvC-uYHbDSUE0Q/edit"
    },
    {
      title: "Countries and Nationalities - Презентация",
      description: "Елдер мен ұлттар туралы толық презентация",
      type: "PDF",
      size: "338 KB",
      pages: "Мультимедиа слайдтар",
      author: "Teacher Samal",
      date: "2025",
      icon: Presentation,
      color: "primary",
      downloadUrl: "https://english-plus-heroes-hub12.vercel.app/countries-nationalities.pdf",
      isPresentation: true
    },
    {
      title: "Teacher Gulek's English Class - Презентация",
      description: "Ағылшын тілі сабағының толық презентациясы",
      type: "PDF",
      size: "7.6 MB",
      pages: "Көпмедиа слайдтар",
      author: "Teacher Samal",
      date: "2025",
      icon: Presentation,
      color: "secondary",
      downloadUrl: "https://english-plus-heroes-hub12.vercel.app/teacher-gulek-english-class.pdf",
      isPresentation: true
    },
    {
      title: "Present Tense Writing - Презентация",
      description: "Present tense жазу ережелері мен жаттығулары",
      type: "PDF",
      size: "2.1 MB",
      pages: "Грамматика слайдтар",
      author: "Teacher Samal",
      date: "2025",
      icon: Presentation,
      color: "success",
      downloadUrl: "https://english-plus-heroes-hub12.vercel.app/present-tense-writing.pdf",
      isPresentation: true
    }
  ];

  const typeColors = {
    PDF: "bg-red-100 text-red-800",
    DOC: "bg-blue-100 text-blue-800",
    PPT: "bg-orange-100 text-orange-800",
    Canva: "bg-purple-100 text-purple-800"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Оқу материалдары</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Материалдар
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unit 2 бойынша барлық қажетті материалдар мен қосымша ресурстар
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {materials.map((material, index) => {
              const Icon = material.icon;
              
              // Если это презентация, используем PresentationViewer
              if (material.isPresentation) {
                return (
                  <PresentationViewer
                    key={index}
                    title={material.title}
                    description={material.description}
                    author={material.author}
                    date={material.date}
                    filePath={material.downloadUrl}
                    lesson={material.type}
                    pages={parseInt(material.pages?.split(' ')[0] || '0')}
                    size={material.size}
                    className="group relative overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
                  />
                );
              }
              
              // Обычные материалы
              return (
                <Card key={index} className="group relative overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${material.color} to-${material.color}-glow flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Badge className={typeColors[material.type as keyof typeof typeColors]}>
                          {material.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {material.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{material.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Автор: {material.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Жылы: {material.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <File className="w-4 h-4" />
                        <span>{material.pages} • {material.size}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full gap-2" 
                      variant="outline"
                      onClick={() => {
                        if (material.downloadUrl && material.downloadUrl !== "#") {
                          if (material.downloadUrl.startsWith('http')) {
                            // Внешние ссылки (Canva, Educaplay и т.д.)
                            window.open(material.downloadUrl, '_blank');
                          } else {
                            // Локальные файлы (PDF)
                            window.open(material.downloadUrl, '_blank');
                          }
                        } else {
                          // Показываем сообщение, что файл недоступен
                          alert(`${material.title} файлы әлі дайындалмаған. Жақында қосылады!`);
                        }
                      }}
                    >
                      <Download className="w-4 h-4" />
                      {material.downloadUrl.startsWith('http') ? 'Ашу' : 'Жүктеу'}
                    </Button>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                </Card>
              );
            })}
          </div>

          {/* Instructions */}
          <Card className="mt-12 p-8 bg-muted/30">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Материалдарды қолдану туралы
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Қалай жүктеу керек:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• "Жүктеу" батырмасын басыңыз</li>
                  <li>• PDF файл автоматты түрде жүктеледі</li>
                  <li>• Браузерде ашу немесе сақтау</li>
                  <li>• Мобильді құрылғыларда да жұмыс істейді</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Ұсыныстар:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Материалдарды сабақ алдында оқыңыз</li>
                  <li>• Жаттығуларды дәптерге жазыңыз</li>
                  <li>• Қиын сөздерді сөздікте іздеңіз</li>
                  <li>• Мұғаліммен бөлісіңіз</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Materials;
