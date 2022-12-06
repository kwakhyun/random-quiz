import { QuizProvider } from './context/QuizContext';
import { Global, ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { global } from './styles';
import Router from './router';

const App = () => {
  return (
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Router />
      </ThemeProvider>
    </QuizProvider>
  );
};

export default App;
