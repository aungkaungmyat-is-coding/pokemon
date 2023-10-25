import React from "react"
import NavBar from "./sections/nav-bar/NavBar"
import Wrapper from "./sections/wrapper/Wrapper"
import Footer from "./sections/footer/Footer"
import Background from "./components/background/Background"
import "./scss/index.scss"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Search from "./pages/search/Search"
import MyList from "./pages/my-lists/MyList"
import About from "./pages/about/About"
import Compare from "./pages/compare/Compare"
import Pokemon from "./pages/pokemon/Pokemon"

const App = () => {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
