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
      <h1>Random Quiz 🔔</h1>
      <div className="info-box">
        <p>퀴즈는 총 10문제입니다.</p>
        <p>4지 선다형 무작위 영문 퀴즈입니다.</p>
        <p>퀴즈 풀기를 시작하려면 아래 버튼을 눌러주세요.</p>
      </div>
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

  .info-box {
    text-align: center;
    margin-top: 10px;

    p {
      margin-bottom: 20px;
    }
  }
`;
