const BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuiz = (numOfQuiz: number) => {
  return fetch(`${BASE_URL}?amount=${numOfQuiz}`);
};
