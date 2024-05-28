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
            <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>Ambiente Familiar</p>
            <p className='text-xl'>Desde el momento en que cruzas nuestras puertas, te sentirás como en casa gracias a nuestra decoración cuidada y nuestro personal amable y atento.</p>
          </li>
          <li className='flex flex-col items-center mt-8 md:mt-0'>
            <img src={TacoIcon} alt="" className='w-1/2'/>
            <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>Atencion Personalizada</p>
            <p className='text-xl'>En nuestro restaurante, la atención personalizada es una prioridad. Nos esforzamos por conocer las preferencias y necesidades de cada cliente, asegurándonos de que cada visita sea una experiencia única y memorable.</p>
          </li>
          <li className='flex flex-col items-center mt-8 md:mt-0'>
            <img src={TacoIcon} alt="" className='w-1/2'/>
            <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>Comida elaborada al momento</p>
            <p className='text-xl'>La comida que preparamos es hecha al momento al 100% por lo que no te debes preocupar por la frescura.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Diferencias
