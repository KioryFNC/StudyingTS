import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 10rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-500']};
 
  >img {
    width: 7rem;
    height: 7rem;
    margin-right: 6rem;
    z-index: 1;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

export const Navigation = styled.ul`
  justify-content: flex-start;
  display: flex;
  color: ${(props) => props.theme['wine-500']};
  gap: 2rem;
  
  li {
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
  margin-left: auto;
  align-items: center;
`

export const Menu = styled.ul`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  >li {
    position: relative;
    color: #FFF;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: .5rem 0;
    overflow: hidden;
  }

  >li::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${(props) => props.theme['wine-500']};
    transform: translateY(100%);
    transition: width 0.3 ease-in-out;
  }

  >li:hover::after {
    width: 100%;
    transform: translateY(0);
  }

  `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  :last-child{
    bottom: 0;
  }
`