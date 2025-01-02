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

    ::-webkit-scrollbar {
      width: 10px; 
      height: 10px; 
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['gray-700']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['wine-500']}; /* Cor da barra */
      border-radius: 10px; /* Cantos arredondados */
    }

    ::-webkit-scrollbar-thumb:hover {
      background:rgba(133, 35, 82, 0.86); 
    }

  }

  body { 
    width: 100vw;
    height: 100vh;
    background: url(${background}) no-repeat center;
    background-size: cover;
    line-height: 1.6;
    overflow-x: hidden;
    
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  li{
    list-style: none;
  }
`