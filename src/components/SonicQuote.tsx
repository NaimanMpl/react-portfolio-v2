import { motion, useScroll, useTransform } from 'framer-motion'
import React, { ReactNode, useRef } from 'react'
import WorkAnnotationContainer from './work/WorkAnnotationContainer'

interface SonicQuoteProps {
  background: string,
  quote: string,
  author?: string,
  description: string,
  game: string
}

const SonicQuote = ({ background, quote, author = 'Sonic The Hedhehog', description, game }: SonicQuoteProps) => {
  
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={container}>
      <div className="px-header">
        <div className='w-full overflow-hidden'>
          <motion.img
            style={{ scale: scale }}
            className='w-full max-h-[55vw] object-cover' 
            src={background} 
            alt={game} 
          />
        </div>
      </div>
      <WorkAnnotationContainer className='mt-6 text-white'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-medium max-w-5xl dxl:text-3xl'>{quote}</h2>
          <span className='font-serif text-light-green text-base'>- {author}, {game}</span>
        </div>
        <p className='text-lg'>{description}</p>
      </WorkAnnotationContainer>
    </div>
  )
}

export default SonicQuote