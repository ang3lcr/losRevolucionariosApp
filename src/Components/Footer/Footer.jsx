import React from 'react'
import Logo from "/logoLetters.png"
const Footer = () => {
  return (
    <div className='flex justify-between items-center absolute bottom-100 w-full border-solid bg-black mt-10'>
      <img src={Logo} alt="" className='w-1/3 ml-20'/>
      <div className='flex justify-center items-center mr-20 flex-col'>
          <p className='font-sancreek text-white text-center mt-5 text-2xl'>Contacto: 4432324326</p>
          <ul className='flex justify-between gap-5 mt-5 mb-5'>
            <li className='bg-red-800 w-16 h-16 rounded-full'>1</li>
            <li className='bg-red-800 w-16 h-16 rounded-full'>2</li>
            <li className='bg-red-800 w-16 h-16 rounded-full'>3</li>
            <li className='bg-red-800 w-16 h-16 rounded-full'>4</li>
            <li className='bg-red-800 w-16 h-16 rounded-full'>5</li>
          </ul>
      </div>
    </div>
  )
}

export default Footer