import React from 'react'
import Logo from "/logoLetters.png"

const Footer = () => {
  return (
    <div className='flex justify-between items-center bottom-0 w-full bg-zinc-900 p-5'>
      <img src={Logo} alt="" className='w-1/4 ml-5'/>
      <div className='flex flex-col justify-center items-center'>
        <p className='font-sancreek text-white text-center text-lg mt-2 mb-10'>Contacto: 4432324326</p>
        <div className='flex justify-center items-center'>
          <div className='bg-orange-400 w-10 h-10 rounded-full mx-1'></div>
          <div className='bg-orange-400 w-10 h-10 rounded-full mx-1'></div>
          <div className='bg-orange-400 w-10 h-10 rounded-full mx-1'></div>
          <div className='bg-orange-400 w-10 h-10 rounded-full mx-1'></div>
          <div className='bg-orange-400 w-10 h-10 rounded-full mx-1'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
