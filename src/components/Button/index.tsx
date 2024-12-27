import { useState } from 'react'
import * as Element from './styles'

const [isOpen, setIsOpen] = useState(false)
export function Button() {
  return (
    <Element.Button>
      <button>open</button>
    </Element.Button>
  )
}