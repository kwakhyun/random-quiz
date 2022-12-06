import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('시작 페이지 테스트', () => {
  const appElement = render(<App />);
  expect(appElement).toMatchSnapshot();

  const titleElement = screen.getByText(/Random Quiz!/i);
  expect(titleElement).toBeInTheDocument();

  const contentElement = screen.getByText(/아래 버튼을 누르면 퀴즈 풀기를 시작합니다./i);
  expect(contentElement).toBeInTheDocument();
});
