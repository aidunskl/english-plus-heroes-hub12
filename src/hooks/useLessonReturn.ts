import { useSearchParams } from "react-router-dom";

export const useLessonReturn = () => {
  const [searchParams] = useSearchParams();
  const fromLesson = searchParams.get('from');
  
  const getReturnPath = () => {
    if (fromLesson) {
      return `/lessons/${fromLesson}`;
    }
    return '/lessons';
  };
  
  const getReturnText = () => {
    if (fromLesson) {
      return `Сабақ ${fromLesson} қайту`;
    }
    return 'Сабақтарға қайту';
  };
  
  return {
    fromLesson,
    getReturnPath,
    getReturnText
  };
};
