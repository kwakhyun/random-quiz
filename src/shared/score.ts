export const scoreboard = (users_answer: string[], real_answer: string[]) => {
  let counter = 0;
  for (let i = 0; i < real_answer.length; i++) {
    if (users_answer[i] === real_answer[i]) {
      counter += 1;
    }
  }
  return counter;
};

export const numberToTime = (number: number) => {
  const time = Math.floor(number / 1000);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes > 0 ? `${minutes}분 ` : ''}${seconds}초`;
};
