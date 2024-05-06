import React from 'react'
import Hero from "../assets/heroMain.jpeg"
import Entrada from "../Components/Entrada/Entrada"
import Desarrollo from '../Components/Desarrollo/Desarrollo'
import Diferencias from '../Components/Diferencias/Diferencias'

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <img src={Hero} alt="" className='object-none object-left w-screen h-screen'/>
        <Entrada />
        <Desarrollo />
        <Diferencias />
    </div>
  )
}

export default Home