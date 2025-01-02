import styled from "styled-components" 

export const Button = styled.button`
  font-size: 3rem;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
  background-clip: text;
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4); 
  }

  &:active {
    transform: scale(0.98); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(240, 67, 139, 0.6);
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(.5rem);
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

export const ModalContent = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 40rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: white;
  display: flex;
  flex-direction: column;

  >h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #8b5cf6;
  }

  >p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    color: #8b5cf6;
  }

  >button {
    margin:  auto 0 0 auto;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 1.2rem 2.4rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
    background-clip: text;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;

    &:hover {
      transform: scale(1.05); 
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4); 
    }

    &:active {
      transform: scale(0.98); 
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 8px rgba(240, 67, 139, 0.6);
    }
  }
`