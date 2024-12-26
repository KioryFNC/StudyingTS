import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  background: ${(props) => props.theme['gray-700']};
  width: 100%;
  height: 70rem;

  >h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3.5rem;
    color: #FFF;
    font-weight: 400;
  }
`

export const Buttons = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 9999px;
  background: ${(props) => props.theme['gray-500']};
  margin: 2rem 0;
  
  >button {
    background: ${(props) => props.theme['gray-500']};
    color: #FFF;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 9999px;
    font-size: 1.8rem;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover {
      opacity: 0.9;
    }

    &.active {
      background: #FFF;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 80%;
  max-width: 120rem;
  justify-content: center;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const Card = styled.div`
  background: ${(props) => props.theme['gray-500']};
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    
    >img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}

  >h3 {
    margin: 0%.5rem 0;
    font-size: 1.4rem;
    color: #FFF;
  }
`