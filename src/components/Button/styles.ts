import styled from "styled-components" 

export const Button = styled.button`
  button {
  background: linear-gradient(
    90deg,
    ${(props) => props.theme['wine-300']} 0%,
    ${(props) => props.theme['wine-700']} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 6rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

`