import Navigation from "@/components/Navigation";
import LessonCard from "@/components/LessonCard";
import { Globe, Languages, MessageCircle, BookOpen, Target, Users, HeartHandshake, Trophy } from "lucide-react";

const Lessons = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Сабақтар
          </h1>
          <p className="text-xl text-muted-foreground">
            Unit 2: Helping and Heroes - 8 интерактивті сабақ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <LessonCard
            title="Lesson 1: Countries & Nationalities"
            description="Елдер мен ұлттарды үйрену. Vocabulary: Germany-German, France-French, т.б."
            icon={Globe}
            href="/lessons/1"
            color="primary"
          />
          <LessonCard
            title="Lesson 2: Languages & Guessing"
            description="Тілдер және болжау дағдылары. Phrases: Maybe..., I think..."
            icon={Languages}
            href="/lessons/2"
            color="secondary"
          />
          <LessonCard
            title="Lesson 3: Present Simple"
            description="Грамматика: Present Simple (affirmative, negative, questions)"
            icon={MessageCircle}
            href="/lessons/3"
            color="accent"
          />
          <LessonCard
            title="Lesson 4: Reading"
            description="'A Cosmopolitan City' мәтінін оқу және талдау"
            icon={BookOpen}
            href="/lessons/4"
            color="success"
          />
          <LessonCard
            title="Lesson 5: Review & Project"
            description="Қорытынды қайталау және 'My Hero' жобасын жасау"
            icon={Target}
            href="/lessons/5"
            color="primary"
          />
          <LessonCard
            title="Lesson 6: Volunteers"
            description="Волонтерлік қызмет және Present Continuous tense"
            icon={Users}
            href="/lessons/6"
            color="secondary"
          />
          <LessonCard
            title="Lesson 7: Everyday Heroes"
            description="Күнделікті батырлар туралы оқу және айту"
            icon={HeartHandshake}
            href="/lessons/7"
            color="accent"
          />
          <LessonCard
            title="Lesson 8: Final Presentation"
            description="Қорытынды жоба презентациясы және бағалау"
            icon={Trophy}
            href="/lessons/8"
            color="success"
          />
        </div>
      </div>
    </div>
  );
};

export default Lessons;
