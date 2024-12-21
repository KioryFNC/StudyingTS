import { Search } from '../Search'
import * as Element from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export function Header() {
  return (
    <Element.Root>

      <Element.Content>

        <Element.Navigation>
          <li><YoutubeLogo /></li>
          <li><FacebookLogo /></li>
          <li><WhatsappLogo /></li>
          <li><InstagramLogo /></li>
          <li><TwitterLogo /></li>
        </Element.Navigation>    
              
        <Element.Links>
          <li><Search /></li>
        </Element.Links>

      </Element.Content>

    </Element.Root>
  )
}