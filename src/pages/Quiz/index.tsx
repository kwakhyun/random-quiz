import styled from '@emotion/styled';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import Radio from '../../components/Radio';
import { useQuizDispatch, useQuizState } from '../../context/QuizContext';

const QuizPage = () => {
  const { quiz, score } = useQuizState();
  const dispatch = useQuizDispatch();

  const [selected, setSelected] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);
  const currentQuiz = quiz[counter - 1];

  const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(true);
    dispatch({
      type: 'SET_SCORE',
      quiz: { question: e.target.value, number: counter },
    });
  };

  const handleNextButton = () => {
    setSelected(false);
    setCounter((counter) => counter + 1);
  };

  const isCorrect = (option: string, correct_answer: string, my_answer: string) => {
    return option === correct_answer && correct_answer === my_answer && option === my_answer;
  };

  return (
    <>
      {counter > quiz.length ? (
        <Navigate to="/score" />
      ) : (
        <StyledQuizPage>
          <div className="quiz-content">
            <h2
              className="quiz-title"
              dangerouslySetInnerHTML={{
                __html: `[Quiz ${counter}] ${currentQuiz.question}`,
              }}></h2>
            <div className="quiz-options">
              {currentQuiz !== undefined &&
                currentQuiz.options?.map((option: string, idx: number) => (
                  <Radio
                    key={idx}
                    id={`option-${idx + 1}`}
                    name="quiz"
                    value={option}
                    checked={score[counter - 1] === option}
                    handleChange={!selected ? handleRadioButton : undefined}
                    className={`quiz-title ${
                      selected && isCorrect(option, currentQuiz.correct_answer, score[counter - 1]) && 'correct'
                    } ${
                      selected &&
                      !isCorrect(option, currentQuiz.correct_answer, score[counter - 1]) &&
                      option === currentQuiz.correct_answer &&
                      'real-answer'
                    }`}
                  />
                ))}
            </div>
            <div className="button-box">
              {selected && (
                <>
                  {score[counter - 1] === currentQuiz.correct_answer ? (
                    <span className="correct-message">👍 정답</span>
                  ) : (
                    <span className="incorrect-message">❌ 오답</span>
                  )}
                  <Button className="next-button" handleClick={handleNextButton}>
                    다음 문제
                  </Button>
                </>
              )}
            </div>
          </div>
        </StyledQuizPage>
      )}
    </>
  );
};

export default QuizPage;

const StyledQuizPage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .quiz-content {
    background-color: ${({ theme }) => theme.colors.white};
    width: 60%;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    .quiz-title {
      font-size: 1.5rem;
      font-weight: 600;
    }
    .quiz-options {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .button-box {
      margin: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      .correct-message {
        color: ${({ theme }) => theme.colors.green[500]};
      }
      .incorrect-message {
        color: ${({ theme }) => theme.colors.red[400]};
      }
      .next-button {
        margin-top: 1rem;
      }
    }

    @media (max-width: 768px) {
      width: 90vw;
      .quiz-title {
        font-size: 1.2rem;
      }
      .quiz-options {
        margin-top: 1rem;
        gap: 0.5rem;
      }
      .button-box {
        margin: 0.5rem;
        font-size: 1rem;
        .next-button {
          margin-top: 0.5rem;
        }
      }
    }
  }
`;
