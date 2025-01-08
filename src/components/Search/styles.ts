import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['wine-500']};

  &:hover {
    color: ${(props) => props.theme['wine-300']};
  }
`

export const SearchModal = styled.div<{ $isOpen:boolean }>`
  position: absolute;
  background: transparent;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  z-index: 3;
  left: 0; /* Alinha à direita */
  top: 50%; /* Centraliza verticalmente, se necessário */
  transform: translateY(-50%); /* Ajusta o alinhamento vertical */
  margin-left: 3rem; /* Ajuste de distância da borda direita */

  

  input {
    width: 18rem;
    padding: .8rem;
    font-size: 1.2rem;
    border-radius: .8rem;
    outline: none;
    background: transparent;
    border: none;

    &:focus {
      border-color: ${(props) => props.theme['wine-500']};
      color: #fff;
    }

    &::placeholder {
      color: ${(props) => props.theme['wine-300']};
    }
  }
`