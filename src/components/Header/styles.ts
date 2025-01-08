import styled from "styled-components";

// ROOT - Estrutura principal do Header
export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  background: ${(props) => props.theme['gray-500']};
  font-family: 'Roboto', sans-serif;

  @media (min-width: 950px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1rem;

  @media (min-width: 950px) {
    gap: 3rem;
    max-width: 1300px;
  }
`

// LOGO
export const Logo = styled.img`
  margin: 1rem;
  z-index: 2;
  
  @media (min-width: 950px) {
    width: 10rem;
    height: 10rem;
    margin-right: 2rem;
  }
`

export const NavSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

// NAVIGATION - Ícones sociais
export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;
  color: ${(props) => props.theme['wine-500']};

  li {
    font-size: 2.8rem;
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
  margin-right: auto;

  @media (min-width: 600px) {
    right: 0;
  }
`

// MENU DESKTOP
export const Menu = styled.ul`
  width: 100%;
  display: none;
  justify-content: space-between;
  gap: 1.5rem;
  color: #FFF;

  li {
    cursor: pointer;
    font-size: 1.5rem;
    position: relative;
    transition: transform 0.3s ease-in-out;
    border-bottom: 4px solid transparent;

    &:hover {
      transform: scale(1.1);
      border-bottom: 4px solid ${(props) => props.theme['wine-500']};
    }
  }
  
  @media (min-width: 950px) {
    display: flex;
  }
`

// HAMBURGER MENU
export const Hamburger = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 3;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: auto;
  color: ${(props) => props.theme['wine-500']};
  

  @media (min-width: 950px) {
    display: none;
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
