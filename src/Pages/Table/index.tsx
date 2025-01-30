import * as Element from "./styles"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { FilmSlate, GameController, HeartStraight, House, MusicNotes, Star } from "phosphor-react"
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
import { useEffect } from "react"

interface Movie {
  id: number;
  name: string;
  img: string;
}

const userInfo = {
  name: "Yuri",
  profession: "Web Developer",
  img: MySelf,
}

export function Table() {
  const location = useLocation()
  const navigate = useNavigate()

  const isDashboardActive = location.pathname === "/tabela/dashboard"
  const isMoviesActive = location.pathname === "/tabela/filmes"
  const isGamesActive = location.pathname === "/tabela/jogos"
  const isMusicsActive = location.pathname === "/tabela/musicas"

  useEffect(() => {
    if (location.pathname === "/tabela") {
      navigate("/tabela/dashboard")
    }
  }, [location.pathname, navigate])

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
        <Element.Profile {...userInfo}>
          <img src={userInfo.img} />
          <h1>{userInfo.name}</h1>
          <span>{userInfo.profession}</span>
          <Element.Line />
        </Element.Profile>
        <Element.Navigation>
          <li className={isDashboardActive ? "active" : ""}>
            <House />
            <NavLink to='/tabela/dashboard'>Dashboard</NavLink>
          </li>
          <li className={isMoviesActive ? "active" : ""}>
            <GameController />
            <NavLink to='/tabela/filmes'>Movies</NavLink>
          </li>
          <li className={isGamesActive ? "active" : ""}>
            <FilmSlate />
            <NavLink to='/tabela/jogos'>Games</NavLink>
          </li>
          <li className={isMusicsActive ? "active" : ""}>
            <MusicNotes />
            <NavLink to='/tabela/musicas'>Musics</NavLink>
          </li>
        </Element.Navigation>
      </Element.Aside>

      <Element.Header>
        <Element.HeaderTitle>
          <Star weight="fill"/>
          <h1>Favorites</h1>
        </Element.HeaderTitle>
        
      </Element.Header>

      <Element.Table>
        {isDashboardActive && (
          <Element.Dashboard>
            <HeartStraight weight="fill"/>
            <h2>Select a category to see <span>favorite hobbies</span></h2>
            <HeartStraight weight="fill"/>
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