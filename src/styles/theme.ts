import '@emotion/react';
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      gray: string;
      black: string;
      green: {
        '100': string;
        '300': string;
        '500': string;
        '700': string;
      };
      red: {
        '100': string;
        '200': string;
        '400': string;
        '700': string;
      };
    };
    screen: {
      web: string;
    };
  }
}

const colors = {
  white: '#FFFFFF',
  gray: '#EBEDEF',
  black: '#17202A',
  green: {
    '100': 'rgb(199, 240, 221)',
    '300': 'rgb(98, 241, 189)',
    '500': 'rgb(0, 200, 150)',
    '700': 'rgb(23, 162, 126)',
  },
  red: {
    '100': '#ff8a80',
    '200': '#ff5252',
    '400': '#ff1744',
    '700': '#d50000',
  },
};

const screen = {
  web: '@media only screen and (max-width: 900px)',
};

const theme: Theme = {
  colors,
  screen,
};

export default theme;
