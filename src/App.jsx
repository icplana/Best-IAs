import { Route, Routes } from "react-router-dom";
import { NavBar } from "./layouts/navBar";
import { Categories } from "./pages/Categories";
import { Lastest } from "./pages/Lastest";
import { Popular } from "./pages/Popular";
import { categoriesData } from "./data/IAsData";
import { Category } from "./pages/Category";


export function App() {

  return (
    <div className="bg-gradient-to-br from-indigo-700 to-indigo-400 min-h-screen ">
      <NavBar />
      <Routes>
        <Route path="/categories/" element = { <Categories /> }/>
        <Route path="/lastest/" element = { <Lastest /> }/>
        <Route path="/popular/" element = { <Popular /> }/>
        {
          categoriesData.map( cat => {
            return(
              <Route path={ `/categories/${ cat.category }`} element={ <Category category = { cat.category } />}  />
            )
          })
        }

      </Routes>
    </div>
  )
}

