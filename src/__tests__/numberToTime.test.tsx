import { numberToTime } from '../shared/score';

test('numberToTime test 1', () => {
  expect(numberToTime(3000)).toBe('3초');
});
test('numberToTime test 2', () => {
  expect(numberToTime(4000)).not.toBe('5초');
});
test('numberToTime test 3', () => {
  expect(numberToTime(60012)).toBe('1분 0초');
});
