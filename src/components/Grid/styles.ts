import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  background: ${(props) => props.theme['gray-700']};
  margin-top: 4rem;
  flex-grow: 1;
`
export const Title = styled.div`
  width: 51rem;
  height: auto;
  margin: 4rem 0 ;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  >h1 {
    font-size: 6rem;
    position: relative;
    z-index: 1;

    >span {
      background: linear-gradient(90deg,rgb(240, 67, 139) 0%, #8b5cf6 100%);
      background-clip: text;
      -webkit-background-clip: text; /* Aplica o gradiente apenas ao texto mas tem que usar a função em baixo tambem */
      -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 600px) {
    padding: 0 5rem;
    > h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 450px) {
    > h1 {
      font-size: 4rem;
    }
  }

  >h1::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35rem;
    height: 35rem;
    background: rgba(255, 255, 255, 0.09);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: blur(4rem);
    z-index: 0;
  }
`
export const Grid = styled.div`
  max-width: 100rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  padding: 1.6rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CardBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 1.6rem;
  border-radius: 8px;
  background: transparent;
  border: 1px solid #ccc;
  overflow: hidden;
  >img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 4px;
    transition: transform 0.3s ease-in-out;
  }

  >strong {
    margin: 1.2rem 0 .8rem;
    font-size: 1.6rem;
  }

  >p {
    font-size: 1.4rem;
    color: #ccc;
  }

  >strong, p, img {
    transition: transform 0.3s ease-in-out;
    display: block;
  }

  &:hover strong {
    transform: translateX(1rem);
  }
  &:hover p {
    transform: translateX(1rem);
  }
  &:hover img {
    transform: scale(1.05);
  }
`
export const Card1 = styled(CardBase)`
  grid-column: span 1;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`
export const Card2 = styled(CardBase)`
  grid-column: span 1;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`
export const Card3 = styled(CardBase)`
  grid-column: span 1;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`
export const Card4 = styled(CardBase)`
  grid-column: span 2;
  grid-row: 2;

  &:hover img {
    transform: scale(1.02);
  }
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`
export const Card5 = styled(CardBase)`
  grid-column: span 1;
  grid-row: 1;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`