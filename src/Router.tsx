import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/LayoutDefault";
import { Home } from "./Home";
import { Table } from "./Table";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/tabela" element={<Table />}/>
      </Route>
    </Routes>
  )
}