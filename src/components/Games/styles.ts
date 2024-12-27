import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 65rem;
  margin-top: 4rem;
  gap: 2rem;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme['gray-700']};

  >h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3.5rem;
    color: #FFF;
    font-weight: 400;
    margin-top: 2rem;
  }
`

export const Buttons = styled.button`
  width: fit-content;
  display: flex;
  margin-bottom: 2rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 9999px;
  background: ${(props) => props.theme['gray-500']};
  
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
  margin-bottom: 4rem;
  flex-grow: 0;

  &:has(div:hover) > div:not(:hover) {
    filter: blur(4px);
    transition: filter 0.2s ease-in-out;
  }
  
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
  
  transition: filter 0.3s ease-in-out;
  
  &:hover {
    filter:blur(0);
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
    margin: .5rem 0;
    font-size: 1.4rem;
    color: #FFF;
  }
`