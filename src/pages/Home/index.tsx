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
      <h1>Random Quiz π</h1>
      <div className="info-box">
        <p>ν΄μ¦λ μ΄ 10λ¬Έμ μλλ€.</p>
        <p>4μ§ μ λ€ν λ¬΄μμ μλ¬Έ ν΄μ¦μλλ€.</p>
        <p>ν΄μ¦ νκΈ°λ₯Ό μμνλ €λ©΄ μλ λ²νΌμ λλ¬μ£ΌμΈμ.</p>
      </div>
      <Button className="start-button" handleClick={handleButtonClick}>
        ν΄μ¦ νκΈ°
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
