import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Lessons from "./pages/Lessons";
import UnitOverview from "./pages/UnitOverview";
import Games from "./pages/Games";
import Tests from "./pages/Tests";
import Videos from "./pages/Videos";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Materials from "./pages/Materials";
import PresentationView from "./pages/PresentationView";
import Homework from "./pages/Homework";
// import StudentHomework from "./pages/StudentHomework";
// import TeacherHomework from "./pages/TeacherHomework";
import Lesson1 from "./pages/lessons/Lesson1";
import Lesson2 from "./pages/lessons/Lesson2";
import Lesson3 from "./pages/lessons/Lesson3";
import Lesson4 from "./pages/lessons/Lesson4";
import Lesson5 from "./pages/lessons/Lesson5";
import Lesson6 from "./pages/lessons/Lesson6";
import Lesson7 from "./pages/lessons/Lesson7";
import Lesson8 from "./pages/lessons/Lesson8";
import AdverbsMatch from "./pages/games/AdverbsMatch";
import EducaplayAdverbs from "./pages/games/EducaplayAdverbs";
import EducaplayDictation from "./pages/games/EducaplayDictation";
import EducaplayTrueFalse from "./pages/games/EducaplayTrueFalse";
import EducaplayYesNo from "./pages/games/EducaplayYesNo";
import EducaplayPresentSimpleQuiz from "./pages/games/EducaplayPresentSimpleQuiz";
import CountriesMatching from "./pages/games/CountriesMatching";
import LanguageQuiz from "./pages/games/LanguageQuiz";
import PresentSimpleChallenge from "./pages/games/PresentSimpleChallenge";
import GuessTheCountry from "./pages/games/GuessTheCountry";
import VocabularyFlashcards from "./pages/games/VocabularyFlashcards";
import CityDescriptionBuilder from "./pages/games/CityDescriptionBuilder";
// Anel games
import AnelFyrebox from "./pages/games/AnelFyrebox";
import AnelPuzzelFill from "./pages/games/AnelPuzzelFill";
import AnelPuzzelBoard from "./pages/games/AnelPuzzelBoard";
import AnelEducandy from "./pages/games/AnelEducandy";
// Gulzhanat games
import GulzhanatEducaplay from "./pages/games/GulzhanatEducaplay";
import GulzhanatInteractyEasy from "./pages/games/GulzhanatInteractyEasy";
import GulzhanatInteractyMedium from "./pages/games/GulzhanatInteractyMedium";
import GulzhanatPuzzelCrossword from "./pages/games/GulzhanatPuzzelCrossword";
import JoytekaTest from "./pages/games/JoytekaTest";
import WordwallGuessCountry from "./pages/games/WordwallGuessCountry";
import BlooketGame2 from "./pages/games/BlooketGame2";
import EducaplayYesNoCountries from "./pages/games/EducaplayYesNoCountries";
// Sholpan games
import SholpanEducaplayLTI from "./pages/games/SholpanEducaplayLTI";
import SholpanInteractyMap from "./pages/games/SholpanInteractyMap";
import SholpanInteractyProject from "./pages/games/SholpanInteractyProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/unit-overview" element={<UnitOverview />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/1" element={<Lesson1 />} />
          <Route path="/lessons/2" element={<Lesson2 />} />
          <Route path="/lessons/3" element={<Lesson3 />} />
          <Route path="/lessons/4" element={<Lesson4 />} />
          <Route path="/lessons/5" element={<Lesson5 />} />
          <Route path="/lessons/6" element={<Lesson6 />} />
          <Route path="/lessons/7" element={<Lesson7 />} />
          <Route path="/lessons/8" element={<Lesson8 />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/adverbs-match" element={<AdverbsMatch />} />
          <Route path="/games/educaplay-adverbs" element={<EducaplayAdverbs />} />
          <Route path="/games/educaplay-dictation" element={<EducaplayDictation />} />
          <Route path="/games/educaplay-true-false" element={<EducaplayTrueFalse />} />
          <Route path="/games/educaplay-yes-no" element={<EducaplayYesNo />} />
          <Route path="/games/educaplay-present-simple-quiz" element={<EducaplayPresentSimpleQuiz />} />
          <Route path="/games/countries-matching" element={<CountriesMatching />} />
          <Route path="/games/language-quiz" element={<LanguageQuiz />} />
          <Route path="/games/present-simple-challenge" element={<PresentSimpleChallenge />} />
          <Route path="/games/guess-the-country" element={<GuessTheCountry />} />
          <Route path="/games/vocabulary-flashcards" element={<VocabularyFlashcards />} />
          <Route path="/games/city-description-builder" element={<CityDescriptionBuilder />} />
          {/* Anel games */}
          <Route path="/games/anel-fyrebox" element={<AnelFyrebox />} />
          <Route path="/games/anel-puzzel-fill" element={<AnelPuzzelFill />} />
          <Route path="/games/anel-puzzel-board" element={<AnelPuzzelBoard />} />
          <Route path="/games/anel-educandy" element={<AnelEducandy />} />
          {/* Gulzhanat games */}
          <Route path="/games/gulzhanat-educaplay" element={<GulzhanatEducaplay />} />
          <Route path="/games/gulzhanat-interacty-easy" element={<GulzhanatInteractyEasy />} />
          <Route path="/games/gulzhanat-interacty-medium" element={<GulzhanatInteractyMedium />} />
          <Route path="/games/gulzhanat-puzzel-crossword" element={<GulzhanatPuzzelCrossword />} />
          <Route path="/games/joyteka-test" element={<JoytekaTest />} />
          <Route path="/games/wordwall-guess-country" element={<WordwallGuessCountry />} />
          <Route path="/games/blooket-game2" element={<BlooketGame2 />} />
          <Route path="/games/educaplay-yesno-countries" element={<EducaplayYesNoCountries />} />
          {/* Sholpan games */}
          <Route path="/games/sholpan-educaplay-lti" element={<SholpanEducaplayLTI />} />
          <Route path="/games/sholpan-interacty-map" element={<SholpanInteractyMap />} />
          <Route path="/games/sholpan-interacty-project" element={<SholpanInteractyProject />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/presentation" element={<PresentationView />} />
          <Route path="/homework" element={<Homework />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
