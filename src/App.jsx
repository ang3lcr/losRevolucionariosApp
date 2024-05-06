import { useState } from 'react'
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Location from './Pages/Location'
import NavBar from './Components/NavBar/NavBar'




function App() {


  return (
    <HashRouter>
      <NavBar />
      {/* {isLoading && <LoacingScreen />} */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/location" element={<Location />}/>
      </Routes>
    </HashRouter>




  )
}

export default App
