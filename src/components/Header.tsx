import React from 'react'

const Header = () => {
  return (
    <header className='text-black px-header py-6 flex justify-between'>
      <span className='text-md font-medium'>Naïman</span>
      <nav>
        <ul>
          <li><a href="/about" className='text-md font-medium'>About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header