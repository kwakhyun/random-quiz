import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { useQuizDispatch } from '../../context/QuizContext';
import { fetchQuiz } from '../../shared/api';

const QUIZ_COUNT = 10;

const StartPage = () => {
  const navigate = useNavigate();
  const dispatch = useQuizDispatch();

  const handleButtonClick = () => {
    fetchQuiz(QUIZ_COUNT)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_SCOREBOARD', count: QUIZ_COUNT });
        dispatch({ type: 'SET_QUIZ', quiz: data.results });
        navigate('/quiz');
      });
  };

  return (
    <StyledStartPage>
      <h1>Random Quiz!</h1>
      <p>아래 버튼을 누르면 퀴즈 풀기를 시작합니다.</p>
      <Button className="start-button" handleClick={handleButtonClick}>
        퀴즈 풀기
      </Button>
    </StyledStartPage>
  );
};

export default StartPage;

const StyledStartPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  p {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
