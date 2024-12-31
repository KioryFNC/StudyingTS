import * as Element from './styles'

export function Grid() {
  return (
    <Element.Root>
      <Element.Title>
        <h1>Recursos que funcionam para o <span>seu futuro</span></h1>
      </Element.Title>
      <Element.Grid>
        <Element.Card1>
          <img src="" alt="" />
          <strong>Aplicativos com IA</strong>
          <p>Sua empresa precisa de um sistema baseado em inteligencia artificial?</p>
        </Element.Card1>
        <Element.Card2>
          <img src="" alt="" />
          <strong>Revisão especializada</strong>
          <p>Já tem um projeto? Contrate profissionais para analisar seu projeto.</p>
        </Element.Card2>
        <Element.Card3>
          <img src="" alt="" />
          <strong>Team as Service</strong>
          <p>Disponibilizamos equipes para sua empresa até a finalização do projeto.</p>
        </Element.Card3>
        <Element.Card4>
          <img src="" alt="" />
          <strong>Profissionais</strong>
          <p>Um time não só de pessoas capacitadas mas também com amor pelo que fazem. Seu projeto estará em boas mãos.</p>
        </Element.Card4>
        <Element.Card5>
          <img src="" alt="" />
          <strong>Suas escolhas</strong>
          <p>Versatilidade da o nome a varsel. Você nos diz o que precisa, nós fazemos acontecer.</p>
        </Element.Card5>
      </Element.Grid>
    </Element.Root>
  )
}