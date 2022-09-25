import React from 'react'
import Home from "./Pages/Home"
import Trains from './Pages/Trains'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/trains" element={<Trains/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App