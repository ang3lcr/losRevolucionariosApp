import React from 'react'
import Logo from "/logoLetters.png"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <section className='flex justify-between items-center bg-neutral-950 bg-opacity-50 top-0 w-full z-50'>
    <img src={Logo} alt="" className='pl-10 w-96' />
    <ul className='flex justify-between pr-10 gap-10'>
        <li className='bg-red-900 rounded-full w-36 flex justify-center items-center hover:text-amber-200 uppercase text-white h-10'>
          <Link to="/">
            Quienes Somos
          </Link>
        </li>
        <li className='bg-red-900 rounded-full w-36 flex justify-center items-center hover:text-amber-200 uppercase text-white h-10'>
          <Link to="/menu">
            Menu
          </Link>
        </li>
        <li className='bg-red-900 rounded-full w-36 flex justify-center items-center hover:text-amber-200 uppercase text-white h-10'>
          <Link to="/location">
            Ubicacion
          </Link>
        </li>
    </ul>
    </section>

  )
}

export default NavBar
