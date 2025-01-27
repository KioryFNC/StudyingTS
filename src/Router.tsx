import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/LayoutDefault";
import { Home } from "./Pages/Home";
import { Table } from "./Pages/Table"

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/tabela" element={<Table />}/>
        <Route path="/tabela/dashboard" element={<Table />}/>
        <Route path="/tabela/filmes" element={<Table />}/>
      </Route>
    </Routes>
  )
}