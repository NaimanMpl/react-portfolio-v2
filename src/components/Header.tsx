import React from 'react'
import { Link } from 'react-router-dom'
import MagneticWrapper from '../ui/MagneticWrapper'

const Header = () => {
  return (
    <header className='text-black px-header py-6 flex justify-between'>
      <MagneticWrapper>
        <Link to='/' className='text-md font-medium'>Naïman</Link>
      </MagneticWrapper>
      <nav>
        <ul>
          <li><a href="/about" className='text-md font-medium'>About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header