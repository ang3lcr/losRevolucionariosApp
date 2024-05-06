import React from 'react'
import EspecialText from "../SpecialText/SpecialText"
import Logo from "/logoHero.png"



const Entrada = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <EspecialText text="Los revolucionarios"/>
        <img src={Logo} alt="" className='w-3/12'/>
        <EspecialText text='"EL SAZÓN ES LA MEJOR ARMA"'/>
    </div>
  )
}

export default Entrada