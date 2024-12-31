import { Games } from "../components/Games"
import { Grid } from "../components/Grid"
import { Header } from "../components/Header"
import * as Element from "./styles"

export function Home() {
  return (
    <Element.Root>
      <Header />
      <Games />
      <Grid />
    </Element.Root>
  )
}