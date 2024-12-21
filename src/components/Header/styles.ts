import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 10rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-500']};
  overflow: hidden; 
  `;

export const Links = styled.ul`
  min-width: 100rem;
  max-width: 100rem;
  display: flex; 
  align-items: center; 
  justify-content: flex-start;
  color: ${(props) => props.theme['wine-500']};
  margin-bottom: 5rem;
  gap: 2rem;
  
  li {
    list-style: none;
    font-size: 3rem;
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme['wine-300']};
    }
  }

  li:last-child {
    justify-content: flex-end;
    right: 0;
    top: 0;
  }
  
  li:last-child svg {

  }
`;
