import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LayoutContainer } from "./styles"
import * as Element from "./styles"

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Element.Content>
        <Outlet />
      </Element.Content>
    </LayoutContainer>
  )
}