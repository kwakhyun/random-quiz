import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FallbackPage, QuizPage, ScorePage, StartPage } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
