import React from 'react'
import SpecialText from '../SpecialText/SpecialText'
import TacoIcon from "./taco.png"

const Diferencias = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <SpecialText text="¿QUE NOS HACE DIFERENTES?"/>
        <div className='w-2/3 bg-slate-100 flex justify-center items-center rounded-3xl text-center p-5'>
            <ul className='w-full flex justify-around flex-row gap-5 flex-wrap'>
                <li className='flex justify-center items-center flex-col w-72'>
                    <img src={TacoIcon} alt="" className='w-1/2'/>
                    <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>Frescura en cada plato</p>
                    <p className='text-xl'>La comida que preparamos 
                       es hecha al momento al
                       100 % por lo que no te debes
                       de preocupar por la frecura
                       de los alimentos que consumes</p>
                </li>
                <li className='flex justify-center items-center flex-col w-72 text-center'>
                    <img src={TacoIcon} alt="" className='w-1/2'/>
                    <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>LOREM IPSUM LOREM IPSUM</p>
                    <p className='text-xl'>La comida que preparamos 
                       es hecha al momento al
                       100 % por lo que no te debes
                       de preocupar por la frecura
                       de los alimentos que consumes</p>
                </li>
                <li className='flex justify-center items-center flex-col w-72 text-center'>
                    <img src={TacoIcon} alt="" className='w-1/2'/>
                    <p className='mt-5 uppercase text-orange-400 text-2xl font-akshar'>LOREM IPSUM LOREM IPSUM</p>
                    <p className='text-xl'>La comida que preparamos 
                       es hecha al momento al
                       100 % por lo que no te debes
                       de preocupar por la frecura
                       de los alimentos que consumes</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Diferencias