import { useState } from 'react';
import * as Element from './styles'


export function Button() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <Element.Button onClick={toggleModal}>
        {isOpen ? 'Close' : 'Open'}
      </Element.Button>

      {isOpen && (
        <Element.ModalOverlay onClick={toggleModal} aria-hidden={!isOpen}>
          <Element.ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Conteúdo da Div</h2>
            <p>Texto ou outros componentes dentro da div</p>
            <button onClick={toggleModal}>Fechar</button>
          </Element.ModalContent>
        </Element.ModalOverlay>
      )}
    </>
  )
}