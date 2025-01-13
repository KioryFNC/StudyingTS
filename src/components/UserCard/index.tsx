import { useState } from 'react';
import * as Element from './styles';

interface UserCardProps {
  id: number;
  name: string;
  nickName: string;
  profession: string;
  age: number;
  balance: number;
  phone: string;
  imageUrl?: string;
}

export function UserCard({ id, name, nickName, profession, age, balance, phone, imageUrl }: UserCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Element.Root $isOpen={isOpen}>
      <Element.CardHeader onClick={!isOpen ? handleToggleCard : undefined}>
        <Element.ProfileImage src={imageUrl || 'https://via.placeholder.com/150'} />
        <h2>{nickName}</h2>
        {isOpen && (
          <Element.CloseButton onClick={handleToggleCard}>X</Element.CloseButton>
        )}
      </Element.CardHeader>

      {isOpen && (
        <Element.CardBody>
          <Element.CardItem><strong>ID:</strong> {id}</Element.CardItem>
          <Element.CardItem><strong>Profissão:</strong> {profession}</Element.CardItem>
          <Element.CardItem><strong>Nome:</strong> {name}</Element.CardItem>
          <Element.CardItem><strong>Telefone:</strong> {phone}</Element.CardItem>
          <Element.CardItem><strong>Idade:</strong> {age}</Element.CardItem>
          <Element.CardItem><strong>Saldo:</strong> {balance}</Element.CardItem>
        </Element.CardBody>
      )}
    </Element.Root>
  );
}
