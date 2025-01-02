import { useState } from 'react';
import * as Element from './styles'


export function Button() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Element.Button onClick={handleButtonClick}>
        open
      </Element.Button>

      {isOpen && (
        <Element.ModalOverlay>
          <Element.ModalContent>
            <h2>Conteúdo da Div</h2>
            <p>Texto ou outros componentes dentro da div</p>
            <button onClick={handleClose}>Fechar</button>
          </Element.ModalContent>
        </Element.ModalOverlay>
      )}
    </>
  )
}