import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 10rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-500']};
  overflow: hidden; 
 
  >img {
    width: 7rem;
    height: 7rem;
    margin-right: 6rem;
  }
  `

export const Content = styled.div`
  width: 50rem;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.ul`
  justify-content: flex-start;
  display: flex;
  color: ${(props) => props.theme['wine-500']};
  gap: 2rem;
  
  li {
    list-style: none;
    font-size: 3rem;
    display: flex;
    align-items: center;
    transition: transform 0.3s, ease-in-out;
    &:hover {
      transform: scale(0.9);
    }
  }
  
  svg {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme['wine-300']};
    }
  }
`;

export const Search = styled.div`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Menu = styled.ul`
  li{
    list-style: none;

  }
`