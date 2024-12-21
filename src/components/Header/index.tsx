import { Search } from '../Search'
import * as Element from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export function Header() {
  return (
    <Element.Root>
      <Element.Links>
          <li><YoutubeLogo /></li>
          <li><FacebookLogo /></li>
          <li><WhatsappLogo /></li>
          <li><InstagramLogo /></li>
          <li><TwitterLogo /></li>
          <li><Search /></li>
      </Element.Links>
    </Element.Root>
  )
}