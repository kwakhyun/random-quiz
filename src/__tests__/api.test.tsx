import { fetchQuiz } from '../shared/api';

test('fetch quiz test 1', () => {
  fetchQuiz(10)
    .then((res) => res.json())
    .then((data) => {
      expect(data.length).toBe(10);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});

test('fetch quiz test 2', () => {
  fetchQuiz(20)
    .then((res) => res.json())
    .then((data) => {
      expect(data.length).not.toBe(10);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});
