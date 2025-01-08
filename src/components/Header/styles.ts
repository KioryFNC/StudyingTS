import styled from "styled-components";

// ROOT - Estrutura principal do Header
export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${(props) => props.theme['gray-500']};
  font-family: 'Roboto', sans-serif;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
  }
`

export const HeaderContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

`

// LOGO
export const Logo = styled.img`
  width: 7rem;
  height: 7rem;
  margin: 1rem;
  z-index: 2;
`

// CONTAINER GERAL
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`

// NAVIGATION - Ícones sociais
export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;
  color: ${(props) => props.theme['wine-500']};

  li {
    font-size: 2.5rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(0.9);
    }
  }

  
`

// SEARCH
export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (min-width: 600px) {
  }
`

// MENU DESKTOP
export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #FFF;
  margin-top: 1rem;

  li {
    cursor: pointer;
    font-size: 1.5rem;
    position: relative;
    padding: .5rem 0;
  }

  @media (max-width: 1000px) {
    display: none; /* Some em telas médias e menores */
  }
`

// HAMBURGER MENU
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 3;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: auto;
  
  color: ${(props) => props.theme['wine-500']};

  @media (max-width: 1000px) {
    display: flex;
  }
`

// MOBILE MENU
interface MobileMenuProps {
  $isOpen: boolean;
}

export const MobileMenu = styled.ul<MobileMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme['gray-800']};
  padding: 4rem 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 10;

  li {
    color: #FFF;
    font-size: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme['wine-500']};

    &:last-child {
      border: none;
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;

    li {
      font-size: 1.3rem;
    }
  }
`

// FUNDO CINZA AO ABRIR MOBILE MENU
interface BackdropProps {
  $isOpen: boolean;
}

export const Backdrop = styled.div<BackdropProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`
