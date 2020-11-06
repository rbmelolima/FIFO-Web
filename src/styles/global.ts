import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    --color-background-dark: #383737;
    --color-primary-dark: #786247;
    --color-primary-normal: #F49A4B;
    --color-primary-light: #FEDCAC;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }  
`
export { GlobalStyle };