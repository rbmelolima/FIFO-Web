import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #212121;
    --color-primary: #FE662E;
    --color-primary-light: #E69250;
    --color-secundary: #36357E;
    --color-secundary-light: #A8A8D0;
  }

  html {
    font-size: 16px;
  }

  * {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  *,
  input,
  button {
    font-family: "Roboto", sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
    font-size: 100%;
  }  
`;