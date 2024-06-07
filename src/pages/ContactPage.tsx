import React from 'react';
import { Link } from 'react-router-dom';
import sonicBg from '../assets/sonic-bg-2.jpg';
import Header from '../components/Header';
import SonicQuote from '../components/SonicQuote';
import AnimatedTitle from '../ui/AnimatedTitle';

const ContactPage = () => {
  return (
    <>
      <div className='h-[80vh] bg-primary'>
        <section>
          <Header className='text-white' />
          <div className='px-header mt-20'>
            <AnimatedTitle weight='medium' className= 'text-9xl text-white'>Say Hello.</AnimatedTitle>
            <AnimatedTitle serif color='text-light-green text-2xl pr-2'>Send me an email</AnimatedTitle>
          </div>
          <div className='text-white px-header flex flex-col gap-6 items-end w-full mt-44'>
            <button 
              className='cursor-pointer text-5xl text-white' 
              onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:naimanmpl@gmail.com' }}
            >
              naimanmpl@gmail.com
            </button>
            <div className='flex items-end flex-col gap-3	text-lg'>
              <Link to='https://github.com/NaimanMpl'>
                Github
              </Link>
              <Link to='https://github.com/NaimanMpl'>
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
        <section className='px-header mt-24'>
          <SonicQuote 
            background={sonicBg}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat.'
            game='Sonic 2006'
            quote='If you have tome to worry, then you have time to run.'
          />
        </section>
      </div>
    </>
  )
}

export default ContactPage