import React from 'react'
import image from "./desarrolloImg.jpeg"
import SpecialText from '../SpecialText/SpecialText'

const Desarrollo = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={image} alt="" className='w-full md:w-1/3 h-auto max-h-96'/>
      <SpecialText text="Desde 20-NOV-1999"/>
      <p className='w-full md:w-2/3 text-lg md:text-xl text-center md:text-justify font-akshar'>
        Primer restaurante revolucionario en el norte de Morelia. <br></br>
        Un restaurante con comida tradicional, con alambres, cortes americanos, hamburguesas, tacos, etc.
      </p>
    </div>
  )
}

export default Desarrollo
