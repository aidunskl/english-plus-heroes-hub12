import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Eye, BookOpen, Clock, User } from "lucide-react";

interface PresentationViewerProps {
  title: string;
  description?: string;
  author?: string;
  date?: string;
  filePath: string;
  lesson?: string;
  pages?: number;
  size?: string;
  className?: string;
}

const PresentationViewer = ({ 
  title, 
  description, 
  author, 
  date,
  filePath, 
  lesson,
  pages,
  size,
  className = "" 
}: PresentationViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
    <Card className={`group hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                {title}
              </h3>
              {lesson && (
                <Badge variant="secondary" className="gap-1 mt-1">
                  <BookOpen className="w-3 h-3" />
                  {lesson}
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
        )}

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          {author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {author}
            </div>
          )}
          {date && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {date}
            </div>
          )}
          {pages && (
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {pages} слайд
            </div>
          )}
          {size && (
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {size}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 flex-1">
                <Eye className="w-4 h-4" />
                Көру
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={filePath}
                  className="w-full h-[70vh] border rounded"
                  title={title}
                />
              </div>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PresentationViewer;
