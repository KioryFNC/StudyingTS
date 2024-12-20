import { createGlobalStyle } from "styled-components";
import background from '../assets/background.jpg'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  body { 
    width: 100vw;
    height: 100vh;
    background: url(${background}) no-repeat center;
    background-size: cover;
    line-height: 1.6;
    overflow: hidden;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`