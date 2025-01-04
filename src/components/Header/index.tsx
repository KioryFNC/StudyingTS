import { Search } from '../Search'
import * as Element from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <Element.Root>
      <img src={logo} alt="" />
      <Element.Container>
        
        <Element.Content>
          <Element.Navigation>
            <li><YoutubeLogo /></li>
            <li><FacebookLogo /></li>
            <li><WhatsappLogo /></li>
            <li><InstagramLogo /></li>
            <li><TwitterLogo /></li>
          </Element.Navigation>    
                
          <Element.Search>
            <li><Search /></li>
          </Element.Search>
        </Element.Content>

        <Element.Menu>
          <li>Noticias</li>
          <li>Reviews</li>
          <li>Games</li>
          <li>Esports</li>
          <li>Cultura pop</li>
          <li>Low games</li>
          <li>especias</li>
          <li>flow cards</li>
          <li>flow store</li>
          <li>flow ping</li>
        </Element.Menu>
      </Element.Container>

    </Element.Root>
  )
}