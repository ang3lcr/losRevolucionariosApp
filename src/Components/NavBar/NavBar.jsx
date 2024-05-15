import React from 'react'
import Logo from "/logoHero.png"


const NavBar = () => {
  return (
    <section className='flex justify-between items-center bg-neutral-950 bg-opacity-50 fixed top-0 w-full z-50'>
    <img src={Logo} alt="" className='pl-10 w-40' />
    <ul className='flex justify-between pr-10 gap-10'>
        <li className='bg-red-900 p-3 rounded-full text-white uppercase hover:bg-transparent'>Quienes Somos</li>
        <li className='bg-red-900 p-3 rounded-full text-white uppercase'>Menu</li>
        <li className='bg-red-900 p-3 rounded-full text-white uppercase'>Ubicacion</li>
    </ul>
    </section>

  )
}

export default NavBar