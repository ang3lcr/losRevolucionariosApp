import React from 'react'
import SpecialText from '../SpecialText/SpecialText'
import TacoIcon from "./taco.png"

const Diferencias = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-20'> 
      <SpecialText text="¿QUÉ NOS HACE DIFERENTES?"/>
      <div className='w-full md:w-2/3 bg-slate-100 rounded-3xl text-center p-5'>
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <li className='flex flex-col items-center'>
            <img src={TacoIcon} alt="" className='w-1/2'/>
            <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>Frescura en cada plato</p>
            <p className='text-xl'>La comida que preparamos es hecha al momento al 100% por lo que no te debes preocupar por la frescura.</p>
          </li>
          <li className='flex flex-col items-center mt-8 md:mt-0'>
            <img src={TacoIcon} alt="" className='w-1/2'/>
            <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>LOREM IPSUM LOREM IPSUM</p>
            <p className='text-xl'>La comida que preparamos es hecha al momento al 100% por lo que no te debes preocupar por la frescura.</p>
          </li>
          <li className='flex flex-col items-center mt-8 md:mt-0'>
            <img src={TacoIcon} alt="" className='w-1/2'/>
            <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>LOREM IPSUM LOREM IPSUM</p>
            <p className='text-xl'>La comida que preparamos es hecha al momento al 100% por lo que no te debes preocupar por la frescura.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Diferencias
