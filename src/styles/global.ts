import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background-dark: #383737;
    --color-primary-dark: #786247;
    --color-primary-normal: #f49a4b;
    --color-primary-light: #fedcac;
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