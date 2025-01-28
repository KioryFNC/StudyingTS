import styled from "styled-components";

export const Root = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  width: 120rem;
  height: 70rem;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  `
export const Aside = styled.div`
  grid-column: 1; 
  grid-row: 1 / 3; 
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px 0 0 8px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  justify-content: center;
  padding: 2rem;
  
  img {
    width: 25rem;
    height: 25rem;
    border: 8px solid ${(props) => props.theme['wine-500']};
    object-fit: cover;
    border-radius: 9999px;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    color: white;
  }
  
  span {
    font-size: 1.6rem;
    background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 2rem;
  background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
`

export const Navigation = styled.ul`
  width: 30rem;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.4rem;
  list-style: none;
  
  >li {
    font-size: 2rem;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
    cursor: pointer;
    
    &:hover {
      box-shadow: 0px 6px 8px rgba(255, 255, 255, 0.3);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(1);
    }
    svg {
      color: ${(props) => props.theme['white']};
      transition: color 0.3s;
    }

    &.active {
      svg {
        color: ${(props) => props.theme['wine-700']}; /* Cor do ícone ativo */
      }

      a {
        color: ${(props) => props.theme['wine-700']}; /* Cor do texto ativo */
      }
    }

    
    a {
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${(props) => props.theme['white']} ;
      transition: color 0.3s;
    }
  }
`


export const Header = styled.div`
  grid-column: 2;
  grid-row: 1; 
  padding: 1rem;
  border-radius: 0 8px 0 0;
  background: ${(props) => props.theme['gray-700']};

  `

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    color: yellow;
  }

  > h1 {
    font-size: 2.4rem;
    color: white;
    text-transform: uppercase;
  }
`

export const Table = styled.div`
  grid-column: 2; 
  grid-row: 2; 
  background: ${(props) => props.theme['gray-500']};
  padding: 1rem;
  overflow-y: auto;
  border-radius: 0 0 8px 0;
`

export const Dashboard = styled.div`
  > svg {
    fill: red;
  }

`

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    background: ${(props) => props.theme['wine-500']};

    &:hover {
      transform: scale(1.05);
    }
    
    img {
      width: 100%;
      max-width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
      margin: 0 auto 0.5rem;
    }
    span {
      font-size: 1.6rem;
      color: white;
    }
  }
`