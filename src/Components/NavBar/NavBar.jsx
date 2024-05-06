import React from 'react'
import Logo from "/logoHero.png"


const NavBar = () => {
  return (
    <section className='flex justify-between items-center bg-neutral-950 bg-opacity-50 absolute w-full'>
      <img src={Logo} alt="" className='pl-10 w-40'/>
        <ul className='flex justify-between w-4/12 pr-10'>
          <li className='bg-red-900 p-3 rounded-full text-white w-3/12 text-center items-center uppercase'>Quienes Somos</li>
          <li className='bg-red-900 p-3 rounded-full text-white w-3/12 text-center items-center uppercase'>Menu</li>
          <li className='bg-red-900 p-3 rounded-full text-white w-3/12 text-center items-center uppercase'>Ubicacion</li>
        </ul>
    </section>
  )
}

export default NavBar