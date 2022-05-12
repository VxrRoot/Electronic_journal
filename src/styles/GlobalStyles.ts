import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;