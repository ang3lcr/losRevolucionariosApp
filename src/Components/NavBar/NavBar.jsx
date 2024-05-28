import React, { useState } from 'react';
import Logo from "/logoLetters.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 bg-opacity-90 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="block lg:hidden h-12 w-auto" src={Logo} alt="Logo" />
            <img className="hidden lg:block h-14 w-auto" src={Logo} alt="Logo" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 justify-end">
              <Link to="/" className="bg-red-900 rounded-full w-36 flex justify-center items-center hover:text-amber-200 uppercase text-white h-10">
                Quienes Somos
              </Link>
              <Link to="/menu" className="bg-red-900 rounded-full w-36 flex justify-center items-center hover:text-amber-200 uppercase text-white h-10">
                Menu
              </Link>
              <Link to="/location" className="bg-red-900 rounded-full w-36 flex justify-center items-center hover:text-amber-200 uppercase text-white h-10">
                Ubicacion
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="bg-red-900 block rounded-full w-full text-center py-2 hover:text-amber-200 uppercase text-white">
            Quienes Somos
          </Link>
          <Link to="/menu" className="bg-red-900 block rounded-full w-full text-center py-2 hover:text-amber-200 uppercase text-white">
            Menu
          </Link>
          <Link to="/location" className="bg-red-900 block rounded-full w-full text-center py-2 hover:text-amber-200 uppercase text-white">
            Ubicacion
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
