import { Games } from "../../components/Games"
import { Grid } from "../../components/Grid"
import { UserCard } from "../../components/UserCard"
import * as Element from "./styles"

export function Home() {
  return (
    <Element.Root>
      <UserCard 
        id={55555}
        nickName="KioryFNC"
        name="Yuri Barros"
        profession="Desenvolvedor"
        age={23}
        balance={10000}
        phone="(11)91234-5678"
        imageUrl="https://github.com/KioryFNC.png"
      />
      <Games />
      <Grid />
    </Element.Root>
  )
}