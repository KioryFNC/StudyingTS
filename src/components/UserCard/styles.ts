import styled from 'styled-components';

interface RootProps {
  $isOpen: boolean;
}

export const Root = styled.div<RootProps>`
  position: absolute;
  max-width: ${({ $isOpen }) => ($isOpen ? '60rem' : '20rem')};
  width: 100%;
  height: auto;
  display: flex;
  top: 50%;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '1rem')}; 
  flex-direction: ${({ $isOpen }) => ($isOpen ? 'row' : 'column')};
  transform: translateY(-50%);
  margin: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  z-index: 3;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  transition: all 0.3s ease-in-out;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
  cursor: pointer;

  > h2 {
    display: flex;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const ProfileImage = styled.img`
  width: 12rem;
  height: 12rem;
  border: 4px solid #000;
  border-radius: 8px;
  object-fit: cover;
  margin-top: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(90deg, #8b5cf6 0%, rgba(240, 67, 139) 100%);
  border-radius: 0 8px 8px 0;
`;

export const CardItem = styled.p`
  font-size: 1.6rem;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;

  > strong {
    color: #000;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: .8rem;
  right: .8rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
