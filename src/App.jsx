import { useState } from 'react'
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Location from './Pages/Location'
import NavBar from './Components/NavBar/NavBar'
import CategoryForm from './Components/Form/CategoryForm'
import FoodForm from './Components/Form/FoodForm'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'




function App() {


  return (
    <HashRouter>
      <NavBar />
      {/* {isLoading && <LoacingScreen />} */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/location" element={<Location />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<Admin />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path="/food" element={<FoodForm />}/>
          <Route path="/categories" element={<CategoryForm />}/>
        </Route>
      </Routes>
    </HashRouter>




  )
}

export default App
