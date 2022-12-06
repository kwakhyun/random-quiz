import styled from '@emotion/styled';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Graph from '../../components/Graph';
import Modal from '../../components/Modal';
import Review from '../../components/Review';
import { Button } from '../../components/Button';
import { QuizInterface, useQuizDispatch, useQuizState } from '../../context/QuizContext';
import { numberToTime, scoreboard } from '../../shared/score';

const ScorePage = () => {
  const { quiz, score, time } = useQuizState();
  const dispatch = useQuizDispatch();
  const navigate = useNavigate();

  const [isReview, setIsReview] = useState<boolean>(false);

  const counter = scoreboard(
    quiz.map((answer: QuizInterface) => answer.correct_answer),
    score
  );

  const handleRestart = () => {
    dispatch({ type: 'RESET_QUIZ' });
    navigate('/');
  };

  const handleReview = () => {
    setIsReview(true);
  };

  const finishTime = Date.now() - time;

  return (
    <>
      {quiz.length > 0 ? (
        <StyledScorePage>
          <div className="score-container">
            <div className="info-container">
              <table className="info-table">
                <tr>
                  <th className="report-title" colSpan={2}>
                    수고하셨습니다!
                  </th>
                </tr>
                <tr>
                  <th>맞춘 문제</th>
                  <td data-test-id="correct-count">{counter}개</td>
                </tr>
                <tr>
                  <th>틀린 문제</th>
                  <td data-test-id="incorrect-count">{score.length - counter}개</td>
                </tr>
                <tr>
                  <th>소요 시간</th>
                  <td data-test-id="time-count">{numberToTime(finishTime)}</td>
                </tr>
              </table>
              <div className="graph-wrapper">
                <Graph correct={counter} incorrect={score.length - counter} />
              </div>
            </div>
            <div className="button-box">
              <Button handleClick={handleRestart}>처음으로</Button>
              <Button handleClick={handleReview}>오답 노트</Button>
            </div>
          </div>
          <Modal opened={isReview} setOpened={setIsReview}>
            <Review answer={score} quiz={quiz} />
          </Modal>
        </StyledScorePage>
      ) : (
        <Navigate to="/start" />
      )}
    </>
  );
};

export default ScorePage;

const StyledScorePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;

  .score-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    height: 100%;
    padding: 0 20px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .info-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 20px;
  }

  .info-table th {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;

    &.report-title {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .info-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
  }

  .graph-wrapper {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
  }

  .button-box {
    display: flex;

    button {
      margin: 10px;
    }
  }

  @media (min-width: 768px) {
    .score-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .info-container {
      width: 50%;
      height: 100%;
      padding: 40px;
    }

    .info-table {
      margin-bottom: 40px;
    }

    .graph-wrapper {
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 400px;
    }

    .button-box {
      width: 50%;
      height: 100%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
