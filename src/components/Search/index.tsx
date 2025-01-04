import { useState } from 'react'
import * as Element from './styles'
import { MagnifyingGlass, X } from '@phosphor-icons/react'

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  function handleToggleSearch() {
    if (searchTerm === '') {
      setIsOpen((prev) => !prev)
    } else {
      setSearchTerm('')
      setIsOpen(false)
    }
  }
  return (
    <Element.Root>

      <Element.SearchModal $isOpen={isOpen}>
        <input
          type='text'
          placeholder='Digite sua pesquisa...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Element.SearchModal>
     
      <Element.Icon onClick={handleToggleSearch}>
        {searchTerm !== '' ? <MagnifyingGlass size={28} /> : isOpen ? <X size={28}/> : <MagnifyingGlass size={28} />}
      </Element.Icon>
    </Element.Root>
  )
}