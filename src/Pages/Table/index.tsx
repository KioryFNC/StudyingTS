import * as Element from "./styles"
import Interestelar from "../../assets/Interestelar.jpg"
import { NavLink, useLocation } from "react-router-dom"

export function Table() {
  const location = useLocation()

  const isDashboardActive = location.pathname === "/tabela/dashboard"
  const isMoviesActive = location.pathname === "/tabela/filmes"

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
          <li className={isDashboardActive ? "active" : ""}>
            <NavLink to='/tabela/dashboard'>Dashboard</NavLink>
          </li>
          <li className={isMoviesActive ? "active" : ""}>
            <NavLink to='/tabela/filmes'>Filmes</NavLink>
          </li>
        </Element.Navigation>
      </Element.Aside>

      <Element.Header>
        <h1>header</h1>
      </Element.Header>

      <Element.Table>
        {isDashboardActive && (
          <Element.Dashboard>
            <h2>dashboard</h2>
            <p>Bem-vindo à página de Dashboard!</p>
          </Element.Dashboard>
        )}
        {isMoviesActive && (
          <Element.Movies>
            <h2>Filmes</h2>
            <p>welcome to the movies page</p>
          </Element.Movies>          
        )}
      </Element.Table>
    </Element.Root>
  )
}