import React from 'react'
import EspecialText from "../SpecialText/SpecialText"
import Logo from "/logoHero.png"

const Entrada = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <EspecialText text="Los revolucionarios"/>
      <img src={Logo} alt="" className='w-2/3 md:w-1/3 lg:w-1/4 mt-8'/>
      <EspecialText text='"EL SAZÓN ES LA MEJOR ARMA"'/>
    </div>
  )
}

export default Entrada
