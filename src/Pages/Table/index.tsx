import * as Element from "./styles"
import Interestelar from "../../assets/Interestelar.jpg"
import { NavLink, useLocation } from "react-router-dom"
import { FilmSlate, House, Star } from "phosphor-react"


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
            <House />
            <NavLink to='/tabela/dashboard'>Dashboard</NavLink>
          </li>
          <li className={isMoviesActive ? "active" : ""}>
            <FilmSlate />
            <NavLink to='/tabela/filmes'>Filmes</NavLink>
          </li>
        </Element.Navigation>
      </Element.Aside>

      <Element.Header>
        <Element.HeaderTitle>
          <Star />
          <h1>Interestelar</h1>
        </Element.HeaderTitle>
        
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