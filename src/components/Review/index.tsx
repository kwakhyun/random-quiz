import React from 'react';
import { QuizInterface } from '../../context/QuizContext';
import styled from '@emotion/styled';

interface ReviewProps {
  answer: string[];
  quiz: QuizInterface[];
}

const Review: React.FC<ReviewProps> = ({ answer, quiz }) => {
  return (
    <>
      {quiz.map((question: QuizInterface, idx: number) => (
        <StyledReview key={idx}>
          <div className="top-box">
            <span className="quiz-number">{`Quiz ${idx + 1} - ${question.difficulty}`}</span>
            <span className={`is-correct ${answer[idx] === question.correct_answer ? 'correct' : 'incorrect'}`}>
              {answer[idx] === question.correct_answer ? '정답' : '오답'}
            </span>
          </div>

          <p className="question">{question.question}</p>

          <div className="answer-box">
            {answer[idx] === question.correct_answer ? (
              <p className="correct-answer">👍 {question.correct_answer}</p>
            ) : (
              <>
                <p className="incorrect-answer">❌ {answer[idx]}</p>
                <p className="correct-answer">👉 {question.correct_answer}</p>
              </>
            )}
          </div>
        </StyledReview>
      ))}
    </>
  );
};

export default Review;

const StyledReview = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  .top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .quiz-number {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .is-correct {
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.2rem 0.5rem;
      border-radius: 8px;

      &.correct {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.green[500]};

        &::before {
          content: '✔';
          margin-right: 0.5rem;
        }
      }

      &.incorrect {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.red[200]};

        &::before {
          content: '✖';
          margin-right: 0.5rem;
        }
      }
    }
  }

  .correct {
    color: ${({ theme }) => theme.colors.green[500]};
  }

  .incorrect {
    color: ${({ theme }) => theme.colors.red[200]};
  }

  .question {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  .answer-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .correct-answer {
    font-size: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.green[500]};
  }

  .incorrect-answer {
    font-size: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.red[200]};
  }

  .correct-answer,
  .incorrect-answer {
    margin-bottom: 1rem;
  }

  .correct-answer:last-child,
  .incorrect-answer:last-child {
    margin-bottom: 0;
  }

  .correct-answer:first-child,
  .incorrect-answer:first-child {
    margin-bottom: 0;
  }
`;
