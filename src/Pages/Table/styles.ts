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
  background: #CCC;
  `
export const Aside = styled.div`
  grid-column: 1; 
  grid-row: 1 / 3; 
  background: #e0e0e0;
  padding: 1rem;
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


export const Header = styled.div`
  grid-column: 2;
  grid-row: 1; 
  background:rgb(184, 30, 30);
  padding: 1rem;
`;

export const Table = styled.div`
  grid-column: 2; 
  grid-row: 2; 
  background: #ffffff;
  padding: 1rem;
  overflow-y: auto;
`;