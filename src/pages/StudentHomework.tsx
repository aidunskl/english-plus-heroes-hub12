import { useState, useCallback, memo, useMemo } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload, FileText, CheckCircle, Clock, Star, Calendar, Download } from "lucide-react";
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

const StudentHomework = () => {
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

  const [newHomework, setNewHomework] = useState({
    title: '',
    description: '',
    file: null as File | null
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setNewHomework(prev => ({ ...prev, file }));
    }
  }, []);

  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHomework(prev => ({ ...prev, title: e.target.value }));
  }, []);

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewHomework(prev => ({ ...prev, description: e.target.value }));
  }, []);

  const handleSubmitHomework = useCallback(() => {
    if (!newHomework.title || !newHomework.description) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    const homework: Homework = {
      id: Date.now().toString(),
      studentName: 'Текущий ученик',
      title: newHomework.title,
      description: newHomework.description,
      file: newHomework.file || undefined,
      fileName: newHomework.file?.name,
      submittedAt: new Date(),
      status: 'pending'
    };

    setHomeworks(prev => [homework, ...prev]);
    setNewHomework({ title: '', description: '', file: null });
    setSelectedFile(null);
    setIsUploadDialogOpen(false);

    toast({
      title: "Успешно",
      description: "Домашнее задание отправлено на проверку"
    });
  }, [newHomework.title, newHomework.description, newHomework.file, toast]);

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

  const handleCloseUploadDialog = useCallback(() => {
    setIsUploadDialogOpen(false);
  }, []);

  // Отдельный компонент для формы загрузки
  const UploadForm = memo(({ 
    newHomework, 
    selectedFile,
    handleTitleChange,
    handleDescriptionChange,
    handleFileUpload,
    handleSubmitHomework,
    handleCloseUploadDialog
  }: {
    newHomework: { title: string; description: string; file: File | null };
    selectedFile: File | null;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitHomework: () => void;
    handleCloseUploadDialog: () => void;
  }) => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Название задания *</Label>
        <Input
          id="title"
          value={newHomework.title}
          onChange={handleTitleChange}
          placeholder="Например: Unit 2 - Grammar Exercise"
        />
      </div>
      <div>
        <Label htmlFor="description">Описание *</Label>
        <Textarea
          id="description"
          value={newHomework.description}
          onChange={handleDescriptionChange}
          placeholder="Опишите, что вы выполнили..."
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="file">Прикрепить файл</Label>
        <Input
          id="file"
          type="file"
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx,.txt,.jpg,.png"
        />
        {selectedFile && (
          <p className="text-sm text-muted-foreground mt-1">
            Выбран: {selectedFile.name}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <Button onClick={handleSubmitHomework} className="flex-1">
          Отправить
        </Button>
        <Button variant="outline" onClick={handleCloseUploadDialog}>
          Отмена
        </Button>
      </div>
    </div>
  ));

  const UploadDialog = memo(({ 
    newHomework, 
    selectedFile, 
    isUploadDialogOpen, 
    setIsUploadDialogOpen,
    handleTitleChange,
    handleDescriptionChange,
    handleFileUpload,
    handleSubmitHomework,
    handleCloseUploadDialog
  }: {
    newHomework: { title: string; description: string; file: File | null };
    selectedFile: File | null;
    isUploadDialogOpen: boolean;
    setIsUploadDialogOpen: (open: boolean) => void;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitHomework: () => void;
    handleCloseUploadDialog: () => void;
  }) => (
    <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Upload className="w-4 h-4" />
          Загрузить задание
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Загрузить домашнее задание</DialogTitle>
          <DialogDescription>
            Заполните информацию о задании и прикрепите файл
          </DialogDescription>
        </DialogHeader>
        <UploadForm 
          newHomework={newHomework}
          selectedFile={selectedFile}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handleFileUpload={handleFileUpload}
          handleSubmitHomework={handleSubmitHomework}
          handleCloseUploadDialog={handleCloseUploadDialog}
        />
      </DialogContent>
    </Dialog>
  ));

  // Мемоизируем список домашних заданий
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
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

              {homework.status === 'reviewed' && (
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border">
                  <p className="text-sm">Задание проверено, ожидается оценка</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ), [homeworks, getStatusBadge]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Мои домашние задания</h1>
          <p className="text-muted-foreground">Загружайте и отслеживайте свои задания</p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Мои домашние задания</h2>
              <p className="text-muted-foreground">Загружайте и отслеживайте свои задания</p>
            </div>
            <UploadDialog 
              newHomework={newHomework}
              selectedFile={selectedFile}
              isUploadDialogOpen={isUploadDialogOpen}
              setIsUploadDialogOpen={setIsUploadDialogOpen}
              handleTitleChange={handleTitleChange}
              handleDescriptionChange={handleDescriptionChange}
              handleFileUpload={handleFileUpload}
              handleSubmitHomework={handleSubmitHomework}
              handleCloseUploadDialog={handleCloseUploadDialog}
            />
          </div>
          {homeworkList}
        </div>
      </div>
    </div>
  );
};

export default StudentHomework;
