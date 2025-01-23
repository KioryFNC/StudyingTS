import { Search } from '../Search'
import * as Element from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo, List } from '@phosphor-icons/react'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Element.Root>
        <Element.Logo src={logo} alt="Logo" />
        <Element.HeaderContent>

        <Element.Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <List size={32} />
        </Element.Hamburger>

        <Element.NavSearch>
          <Element.Search>
            <Search />
          </Element.Search>
          <Element.Navigation>
            <li><YoutubeLogo /></li>
            <li><FacebookLogo /></li>
            <li><WhatsappLogo /></li>
            <li><InstagramLogo /></li>
            <li><TwitterLogo /></li>
          </Element.Navigation>
        </Element.NavSearch>


        <Element.Menu>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/tabela" onClick={() => setMenuOpen(false)}>Tabela</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Games</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Esports</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Cultura pop</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Low games</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Especiais</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Flow cards</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Flow store</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Flow ping</NavLink>
          </li>
        </Element.Menu>

        <Element.Backdrop $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

        <Element.MobileMenu $isOpen={menuOpen}>
        <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/tabela" onClick={() => setMenuOpen(false)}>Tabela</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Games</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Esports</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Cultura pop</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Low games</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Especiais</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Flow cards</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Flow store</NavLink>
          </li>
          <li>
            <NavLink to="/none" onClick={() => setMenuOpen(false)}>Flow ping</NavLink>
          </li>
        </Element.MobileMenu>
        </Element.HeaderContent>
    </Element.Root>
  )
}
