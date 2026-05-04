import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import Layout from "./Layouts/Layout"

const FavoritePage = lazy(() => import("./views/FavoritePage"))

export default function Approuter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element = {<Layout/>}>
            <Route
                path="/"
                element = {<IndexPage/>}
                index
            />
            <Route
                path="/favorite"
                element = {<Suspense fallback="Loading..."><FavoritePage/></Suspense>}
            />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}