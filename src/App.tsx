import React from "react"
import NavBar from "./sections/nav-bar/NavBar"
import Wrapper from "./sections/wrapper/Wrapper"
import Footer from "./sections/footer/Footer"

const App = () => {
  return (
    <div className="main-container">
      <div className="app">
        <NavBar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  )
}

export default App
