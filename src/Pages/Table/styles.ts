import styled from "styled-components";

export const Root = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  width: 60rem;
  height: 60rem;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  background: #CCC;
  border-radius: 8px;
`
export const Aside = styled.div`
  grid-column: 1; 
  grid-row: 1 / 3; 
  background: #e0e0e0;
  padding: 1rem;
`;

export const Header = styled.div`
  grid-column: 2;
  grid-row: 1; 
  background: #f5f5f5;
  padding: 1rem;
`;

export const Table = styled.div`
  grid-column: 2; 
  grid-row: 2; 
  background: #ffffff;
  padding: 1rem;
  overflow-y: auto;
`;