import * as Element from './styles'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.jpg'
import card5 from '../../assets/card5.jpg'
import { Button } from '../../components/Button'


export function Grid() {
  return (
    <Element.Root>
      <Element.Title>
        <h1>Recursos que funcionam para o <span>seu futuro</span></h1>
      </Element.Title>
      <Button />
      <Element.Grid>
        <Element.Card1>
          <img src={card1} />
          <strong>Aplicativos com IA</strong>
          <p>Sua empresa precisa de um sistema baseado em inteligencia artificial?</p>
        </Element.Card1>
        <Element.Card2>
          <img src={card2} />
          <strong>Revisão especializada</strong>
          <p>Já tem um projeto? Contrate profissionais para analisar seu projeto.</p>
        </Element.Card2>
        <Element.Card3>
          <img src={card3} />
          <strong>Team as Service</strong>
          <p>Disponibilizamos equipes para sua empresa até a finalização do projeto.</p>
        </Element.Card3>
        <Element.Card4>
          <img src={card4} />
          <strong>Profissionais</strong>
          <p>Um time não só de pessoas capacitadas mas também com amor pelo que fazem. Seu projeto estará em boas mãos.</p>
        </Element.Card4>
        <Element.Card5>
          <img src={card5} />
          <strong>Suas escolhas</strong>
          <p>Versatilidade da o nome a varsel. Você nos diz o que precisa, nós fazemos acontecer.</p>
        </Element.Card5>
      </Element.Grid>
    </Element.Root>
  )
}