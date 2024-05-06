import React from 'react'
import Logo from "/logoLetters.png"
const Footer = () => {
  return (
    <div className='flex justify-between items-center absolute bottom-100 w-full border-solid bg-zinc-900 mt-10'>
      <img src={Logo} alt="" className='size-1/4 ml-20 p-2'/>
      <div className='flex justify-center items-center mr-20 flex-col'>
          <p className='font-sancreek text-white text-center mt-5 text-2xl'>Contacto: 4432324326</p>
          <ul className='flex justify-between gap-5 mt-5 mb-5'>
            <li className='bg-orange-400 w-16 h-16 rounded-full'></li>
            <li className='bg-orange-400 w-16 h-16 rounded-full'></li>
            <li className='bg-orange-400 w-16 h-16 rounded-full'></li>
            <li className='bg-orange-400 w-16 h-16 rounded-full'></li>
            <li className='bg-orange-400 w-16 h-16 rounded-full'></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
