import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: lightgray; 
    height: 100vh;
    width: 100vw;
  }
`;
