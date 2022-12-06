import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export interface QuizInterface {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  options?: string[];
  difficulty: string;
  question: string;
  type: string;
}

type QuizState = {
  score: string[];
  quiz: QuizInterface[];
  time: number;
};

type QuizAction =
  | { type: 'SET_SCOREBOARD'; count: number }
  | {
      type: 'SET_SCORE';
      quiz: { number: number; question: string };
    }
  | {
      type: 'SET_QUIZ';
      quiz: QuizInterface[];
    }
  | {
      type: 'RESET_QUIZ';
    };

const initialState = {
  score: [],
  quiz: [],
  time: 0,
};

const reducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'SET_SCOREBOARD':
      return {
        ...state,
        score: Array(action.count).fill(''),
        time: Date.now(),
      };
    case 'SET_SCORE':
      state.score[action.quiz.number - 1] = action.quiz.question;
      return {
        ...state,
        score: state.score,
      };
    case 'SET_QUIZ':
      return {
        ...state,
        quiz: action.quiz.map((quiz) => {
          return {
            ...quiz,
            options: [quiz.correct_answer, ...quiz.incorrect_answers].sort(() => Math.random() - 0.5),
          };
        }),
      };
    case 'RESET_QUIZ':
      return { score: [], quiz: [], time: 0 };
    default:
      throw new Error('Unhandled action');
  }
};

type QuizDispatch = Dispatch<QuizAction>;

// Context
const QuizStateContext = createContext<QuizState | null>(null);
const QuizDispatchContext = createContext<QuizDispatch | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>{children}</QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  );
}

// Context Hook
export function useQuizState() {
  const state = useContext(QuizStateContext);
  if (!state) throw new Error('Cannot find QuizProvider');
  return state;
}

export function useQuizDispatch() {
  const dispatch = useContext(QuizDispatchContext);
  if (!dispatch) throw new Error('Cannot find QuizProvider');
  return dispatch;
}
