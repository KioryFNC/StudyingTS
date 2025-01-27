import * as Element from "./styles"
import Interestelar from "../../assets/Interestelar.jpg"
import { NavLink } from "react-router-dom"

export function Table() {
  return (
    <Element.Root>
      <Element.Aside>
        <Element.Profile>
          <img src={Interestelar} />
          <h1>Amelia Brand</h1>
          <span>Anne Hathaway</span>
          <Element.Line />
        </Element.Profile>
        <Element.Navigation>
          <li>
            <NavLink to='/tabela/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/tabela/filmes'>Filmes</NavLink>
          </li>
        </Element.Navigation>
      </Element.Aside>

      <Element.Header>
        <h1>header</h1>
      </Element.Header>

      <Element.Table>
        <h1>table</h1>
      </Element.Table>
    </Element.Root>
  )
}