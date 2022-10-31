import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.svg'
import Menu from './icons/Menu'
import MenuClose from './icons/MenuClose'

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <header className='flex justify-between items-center py-8 w-11/12 max-w-7xl mx-auto'>
      <div>
        <img src={logo} alt='Logo' />
      </div>
      <nav
        className={`${
          isNavExpanded ? 'navbar-collapse right-0' : 'right-[-100%] '
        } flex absolute md:static top-0 pt-48 md:pt-0 w-3/5 md:w-auto h-screen md:h-auto px-4 transition-all duration-300 ease-in-out bg-white`}
      >
        <ul className='flex flex-col md:flex-row gap-4 text-secondary md:text-gray-600 font-bold'>
          <li>
            <a href='#' className=' hover:text-primary-light'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className=' hover:text-primary-light'>
              New
            </a>
          </li>
          <li>
            <a href='#' className=' hover:text-primary-light'>
              Popular
            </a>
          </li>
          <li>
            <a href='#' className=' hover:text-primary-light'>
              Trending
            </a>
          </li>
          <li>
            <a href='#' className=' hover:text-primary-light'>
              Categories
            </a>
          </li>
        </ul>
      </nav>
      <div
        className='md:hidden z-10'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <div className={isNavExpanded ? 'hidden' : 'block'}>
          <Menu />
        </div>
        <div className={isNavExpanded ? 'block' : 'hidden'}>
          <MenuClose />
        </div>
      </div>
    </header>
  )
}

export default NavBar
