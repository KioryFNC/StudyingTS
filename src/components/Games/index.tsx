import * as Element from './styles'
import { useState } from 'react'
import back from '../../assets/background2.jpeg'

type TabOptions = 'news' | 'shortly'

export function Games() {
  const [selectedTab, setSelectedTab] = useState<TabOptions>('news')

  const games: Record<TabOptions, { id: number; name:string; img: string; link: string}[]> = {
    news: [
      {
        id: 1,
        name: 'Dark Souls', 
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 2,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 3,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 4,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 5,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 6,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 7,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
    ],
    shortly: [
      {
        id: 1,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 2,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 3,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 4,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 5,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
      {
        id: 6,
        name: 'Dark Souls',
        img: back,
        link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/'
      },
    ]
  }

  return (
    <Element.Root>
      <h1>Jogos incríveis de PS4 e PS5 já disponíveis ou chegando em breve</h1>
      <Element.Buttons>
        <button
          onClick={() => setSelectedTab('news')}
          className={selectedTab === 'news' ? 'active' : ''}
        >
          Novos lançamentos
        </button>
        <button
          onClick={() => setSelectedTab('shortly')}
          className={selectedTab === 'shortly' ? 'active' : ''}
        >
          Em breve
        </button>
      </Element.Buttons>
      <Element.Main>
        {games[selectedTab].map((game) => (
          <Element.Card key={game.id}>
            <a href={game.link} target='_blank' rel='noopener noreferrer'>
              <img src={game.img} alt={game.name}/>
            </a>
            <h3>{game.name}</h3>
          </Element.Card>
        ))}
      </Element.Main>
    </Element.Root>
  )
}