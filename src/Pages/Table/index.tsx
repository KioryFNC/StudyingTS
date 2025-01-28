import * as Element from "./styles"
import { NavLink, useLocation } from "react-router-dom"
import { FilmSlate, HeartStraight, House, Star } from "phosphor-react"
import MySelf from "../../assets/myself.jpg"
import InterestelarMovie from "../../assets/InterestelarMovie.jpg"
import SignsMovie from "../../assets/signsMovie.jpg"
import SawMovie from "../../assets/SawMovie.jpg"
import Avengers from "../../assets/Avengers.jpg"
import HP4 from "../../assets/HP4.jpg"
import TwelveAngryMen from "../../assets/12HomensEUmaSentença.jpg"
import SchindelersList from "../../assets/Schindler'sList.jpg"
import SevenMovie from "../../assets/SevenMovie.jpg"
import SixiemeSens from "../../assets/sixismeSens.webp"

interface Movie {
  id: number;
  name: string;
  img: string;
}
export function Table() {
  const location = useLocation()

  const isDashboardActive = location.pathname === "/tabela/dashboard"
  const isMoviesActive = location.pathname === "/tabela/filmes"

  const movies: Movie[] = [
    {
      id: 1,
      name: "Interestelar",
      img: InterestelarMovie,
    },
    {
      id: 2,
      name: "Signs",
      img: SignsMovie,
    },
    {
      id: 3,
      name: "Saw",
      img: SawMovie,
    },
    {
      id: 4,
      name: "Avengers: Endgame",
      img: Avengers,
    },
    {
      id: 5,
      name: "Harry Potter and the goblet of fire",
      img: HP4,
    },
    {
      id: 6,
      name: "12 Angry Men",
      img: TwelveAngryMen,
    },
    {
      id: 7,
      name: "Seven",
      img: SevenMovie,
    },
    {
      id: 8,
      name: "Schindeler's List",
      img: SchindelersList,
    },
    {
      id: 9,
      name: "Sixieme Sens",
      img: SixiemeSens,
    }
  ]

  return (
    <Element.Root>
      <Element.Aside>
        <Element.Profile>
            <img src={MySelf} />
          <h1>Yuri</h1>
          <span>Web Developer</span>
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
          <h1>Favorites</h1>
        </Element.HeaderTitle>
        
      </Element.Header>

      <Element.Table>
        {isDashboardActive && (
          <Element.Dashboard>
            <HeartStraight />
            <h2>Select a category to see <span>favorite hobbies</span></h2>
          </Element.Dashboard>
        )}
        {isMoviesActive && (
         
            <Element.Movies>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <img src={movie.img} alt={movie.name} />
                  <span>{movie.name}</span>
                </div>
              ))}
            </Element.Movies>
        )}
      </Element.Table>
    </Element.Root>
  )
}