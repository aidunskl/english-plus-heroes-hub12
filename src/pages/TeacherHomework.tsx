import { useState, useCallback, memo, useMemo } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, CheckCircle, Clock, Star, User, Calendar, Download, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Homework {
  id: string;
  studentName: string;
  title: string;
  description: string;
  file?: File;
  fileName?: string;
  submittedAt: Date;
  status: 'pending' | 'reviewed' | 'graded';
  grade?: number;
  feedback?: string;
  reviewedBy?: string;
  reviewedAt?: Date;
}

const TeacherHomework = () => {
  const [homeworks, setHomeworks] = useState<Homework[]>([
    {
      id: '1',
      studentName: 'Айдар Нұрлан',
      title: 'Unit 2 - Grammar Exercise',
      description: 'Complete the grammar exercises from pages 15-20',
      fileName: 'grammar_exercise.pdf',
      submittedAt: new Date('2024-01-15'),
      status: 'graded',
      grade: 85,
      feedback: 'Отличная работа! Обратите внимание на использование времен.',
      reviewedBy: 'Гүләк Мұхтарқызы',
      reviewedAt: new Date('2024-01-16')
    },
    {
      id: '2',
      studentName: 'Айша Қасымова',
      title: 'Vocabulary Cards',
      description: 'Create vocabulary cards for new words',
      fileName: 'vocabulary_cards.docx',
      submittedAt: new Date('2024-01-14'),
      status: 'reviewed',
      grade: 92,
      feedback: 'Очень креативный подход к изучению слов!',
      reviewedBy: 'Гүләк Мұхтарқызы',
      reviewedAt: new Date('2024-01-15')
    },
    {
      id: '3',
      studentName: 'Ерлан Төлеуов',
      title: 'Reading Comprehension',
      description: 'Answer questions about the text',
      submittedAt: new Date('2024-01-13'),
      status: 'pending'
    }
  ]);

  const [isGradeDialogOpen, setIsGradeDialogOpen] = useState(false);
  const [selectedHomeworkId, setSelectedHomeworkId] = useState<string | null>(null);
  const [gradeForm, setGradeForm] = useState({ grade: 85, feedback: '' });
  const { toast } = useToast();

  const handleGradeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGradeForm(prev => ({ ...prev, grade: parseInt(e.target.value) || 0 }));
  }, []);

  const handleFeedbackChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGradeForm(prev => ({ ...prev, feedback: e.target.value }));
  }, []);

  const handleOpenGradeDialog = useCallback((id: string) => {
    setSelectedHomeworkId(id);
    setGradeForm({ grade: 85, feedback: '' });
    setIsGradeDialogOpen(true);
  }, []);

  const handleGradeHomework = useCallback(() => {
    if (!selectedHomeworkId) return;

    setHomeworks(prev => prev.map(hw => 
      hw.id === selectedHomeworkId 
        ? { 
            ...hw, 
            status: 'graded' as const,
            grade: gradeForm.grade, 
            feedback: gradeForm.feedback,
            reviewedBy: 'Гүләк Мұхтарқызы',
            reviewedAt: new Date()
          }
        : hw
    ));

    setIsGradeDialogOpen(false);
    setSelectedHomeworkId(null);
    setGradeForm({ grade: 85, feedback: '' });

    toast({
      title: "Оценка поставлена",
      description: `Задание оценено на ${gradeForm.grade} баллов`
    });
  }, [selectedHomeworkId, gradeForm.grade, gradeForm.feedback, toast]);

  const getStatusBadge = useCallback((status: Homework['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="gap-1"><Clock className="w-3 h-3" />Ожидает проверки</Badge>;
      case 'reviewed':
        return <Badge variant="default" className="gap-1"><CheckCircle className="w-3 h-3" />Проверено</Badge>;
      case 'graded':
        return <Badge variant="outline" className="gap-1"><Star className="w-3 h-3" />Оценено</Badge>;
    }
  }, []);

  const handleCloseGradeDialog = useCallback(() => {
    setIsGradeDialogOpen(false);
  }, []);

  // Мемоизируем содержимое диалога оценки
  const GradeDialog = memo(({ 
    isGradeDialogOpen, 
    setIsGradeDialogOpen,
    gradeForm,
    handleGradeChange,
    handleFeedbackChange,
    handleGradeHomework,
    handleCloseGradeDialog
  }: {
    isGradeDialogOpen: boolean;
    setIsGradeDialogOpen: (open: boolean) => void;
    gradeForm: { grade: number; feedback: string };
    handleGradeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFeedbackChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleGradeHomework: () => void;
    handleCloseGradeDialog: () => void;
  }) => {
    const dialogContent = useMemo(() => (
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Оценить домашнее задание</DialogTitle>
          <DialogDescription>
            Поставьте оценку и напишите комментарий
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="grade">Оценка (0-100)</Label>
            <Input
              id="grade"
              type="number"
              min="0"
              max="100"
              value={gradeForm.grade}
              onChange={handleGradeChange}
            />
          </div>
          <div>
            <Label htmlFor="feedback">Комментарий</Label>
            <Textarea
              id="feedback"
              value={gradeForm.feedback}
              onChange={handleFeedbackChange}
              placeholder="Напишите комментарий к работе..."
              rows={3}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleGradeHomework} className="flex-1">
              Поставить оценку
            </Button>
            <Button variant="outline" onClick={handleCloseGradeDialog}>
              Отмена
            </Button>
          </div>
        </div>
      </DialogContent>
    ), [gradeForm.grade, gradeForm.feedback, handleGradeChange, handleFeedbackChange, handleGradeHomework, handleCloseGradeDialog]);

    return (
      <Dialog open={isGradeDialogOpen} onOpenChange={setIsGradeDialogOpen}>
        {dialogContent}
      </Dialog>
    );
  });

  // Мемоизируем список домашних заданий для преподавателя
  const homeworkList = useMemo(() => (
    <div className="grid gap-4">
      {homeworks.map((homework) => (
        <Card key={homework.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{homework.title}</CardTitle>
                <CardDescription className="mt-1">
                  {homework.description}
                </CardDescription>
              </div>
              {getStatusBadge(homework.status)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {homework.studentName}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {homework.submittedAt.toLocaleDateString('ru-RU')}
                </div>
                {homework.fileName && (
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {homework.fileName}
                  </div>
                )}
              </div>

              {homework.status === 'pending' && (
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleOpenGradeDialog(homework.id)}
                    size="sm"
                  >
                    Оценить
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Скачать
                  </Button>
                </div>
              )}

              {homework.status === 'graded' && (
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold">Оценка: {homework.grade}/100</span>
                  </div>
                  {homework.feedback && (
                    <p className="text-sm text-muted-foreground">{homework.feedback}</p>
                  )}
                  <div className="text-xs text-muted-foreground mt-2">
                    Проверено: {homework.reviewedBy} • {homework.reviewedAt?.toLocaleDateString('ru-RU')}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ), [homeworks, handleOpenGradeDialog, getStatusBadge]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Проверка домашних заданий</h1>
          <p className="text-muted-foreground">Проверяйте и оценивайте работы учеников</p>
          <p className="text-sm text-blue-600 mt-2">Режим преподавателя активен</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Проверка домашних заданий</h2>
            <p className="text-muted-foreground">Проверяйте и оценивайте работы учеников</p>
            <p className="text-sm text-blue-600">Режим преподавателя активен</p>
          </div>
          {homeworkList}
        </div>

        {/* Диалог оценки */}
        <GradeDialog 
          isGradeDialogOpen={isGradeDialogOpen}
          setIsGradeDialogOpen={setIsGradeDialogOpen}
          gradeForm={gradeForm}
          handleGradeChange={handleGradeChange}
          handleFeedbackChange={handleFeedbackChange}
          handleGradeHomework={handleGradeHomework}
          handleCloseGradeDialog={handleCloseGradeDialog}
        />
      </div>
    </div>
  );
};

export default TeacherHomework;
