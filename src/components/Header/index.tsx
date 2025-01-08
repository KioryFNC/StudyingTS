import { Search } from '../Search'
import * as Element from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo, List } from '@phosphor-icons/react'
import logo from '../../assets/logo.png'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Element.Root>
      <Element.HeaderContent>

      
      {/* LOGO */}
      <Element.Logo src={logo} alt="Logo" />

      {/* HAMBURGER */}
      <Element.Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <List size={32} />
      </Element.Hamburger>

      <Element.Search>
        <Search />
      </Element.Search>
      {/* NAVIGATION - Ícones sociais */}
      <Element.Navigation>
        <li><YoutubeLogo /></li>
        <li><FacebookLogo /></li>
        <li><WhatsappLogo /></li>
        <li><InstagramLogo /></li>
        <li><TwitterLogo /></li>
      </Element.Navigation>

      {/* SEARCH */}

      {/* MENU DESKTOP */}
      <Element.Menu>
        <li>Noticias</li>
        <li>Reviews</li>
        <li>Games</li>
        <li>Esports</li>
        <li>Cultura pop</li>
        <li>Low games</li>
        <li>Especiais</li>
        <li>Flow cards</li>
        <li>Flow store</li>
        <li>Flow ping</li>
      </Element.Menu>

      {/* FUNDO AO ABRIR MOBILE MENU */}
      <Element.Backdrop $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      {/* MOBILE MENU */}
      <Element.MobileMenu $isOpen={menuOpen}>
      <li>Noticias</li>
        <li>Reviews</li>
        <li>Games</li>
        <li>Esports</li>
        <li>Cultura pop</li>
        <li>Low games</li>
        <li>Especiais</li>
        <li>Flow cards</li>
        <li>Flow store</li>
        <li>Flow ping</li>
      </Element.MobileMenu>
      </Element.HeaderContent>
    </Element.Root>
  )
}
