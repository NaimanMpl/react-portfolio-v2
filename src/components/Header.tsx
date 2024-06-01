import React from 'react'
import { Link } from 'react-router-dom'
import MagneticWrapper from '../ui/MagneticWrapper'

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`text-black px-header py-10 flex justify-between ${className}`}>
      <MagneticWrapper>
        <Link to='/' className='text-md font-medium'>Naïman</Link>
      </MagneticWrapper>
      <nav>
        <ul>
          <li>
            <MagneticWrapper>
              <Link to='/about' className='text-md font-medium'>About</Link>
            </MagneticWrapper>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header