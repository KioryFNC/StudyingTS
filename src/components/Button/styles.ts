import styled from "styled-components" 

export const Button = styled.button`
 background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
  background-clip: text;
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
  
  font-size: 3rem;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-transform: uppercase;

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