import { scoreboard } from '../shared/score';

test('scoreboard test 1', () => {
  expect(scoreboard([], [])).toBe(0);
});
test('scoreboard test 2', () => {
  const myAnswer = ['True', 'False', 'True', 'False', 'True', 'False', 'True', 'False', 'True', 'False'];
  const realAnswer = ['True', 'False', 'True', 'False', 'True', 'False', 'True', 'False', 'True', 'False'];
  expect(scoreboard(myAnswer, realAnswer)).toBe(10);
});
test('scoreboard test 3', () => {
  const myAnswer = ['True', 'False', 'True', 'False', 'True', 'False', 'True', 'False', 'True', 'False'];
  const realAnswer = ['True', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'True'];
  expect(scoreboard(myAnswer, realAnswer)).toBe(5);
});
