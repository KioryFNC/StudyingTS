import styled from "styled-components";

export const Root = styled.div`
  width: 60rem;
  height: 25rem;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #FFF;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);

  >h2{
    display: flex;
    font-size: 1.8rem;
    margin-bottom: .5rem;
  }
`
export const ProfileImage = styled.img`
  width: 12rem;
  height: 12rem;
  border: 4px solid #000;
  border-radius: 8px;
  object-fit: cover;
  margin-top: 1rem;
`
export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .8rem;
  padding: 2rem;
  background: linear-gradient( 90deg,  #8b5cf6 0%, rgba(240, 67, 139) 100%);
  border-radius: 0 8px 8px 0;
`

export const CardItem = styled.p`
  font-size: 1.4rem;
  color: #FFF;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: .5rem;
  margin-bottom: .5rem;
  >strong {
    color: #000;
  }
`