import { css } from '@emotion/react';

export const global = css`
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'IBMPlexSansKR-Regular';
    color: #1a1a1a;
  }

  main {
    background-color: hsl(240, 11%, 98%);
  }
`;
