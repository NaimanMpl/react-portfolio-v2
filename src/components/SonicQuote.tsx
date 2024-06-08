import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WorkAnnotationParagraph from '../ui/WorkAnnotationParagraph'
import WorkAnnotationTitle from '../ui/WorkAnnotationTitle'
import WorkAnnotationContainer from './work/WorkAnnotationContainer'

interface SonicQuoteProps {
  theme?: 'dark' | 'light',
  background: string,
  quote: string,
  author?: string,
  description: string,
  game: string
}

const SonicQuote = ({ theme = 'dark', background, quote, author = 'Sonic The Hedhehog', description, game }: SonicQuoteProps) => {
  
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
      <WorkAnnotationContainer className={`mt-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className='flex flex-col gap-4'>
          <WorkAnnotationTitle className='max-w-5xl'>
            {quote}
          </WorkAnnotationTitle>
          <span className={`font-serif ${theme === 'dark' ? 'text-light-green' : 'text-gray'} text-base`}>- {author}, {game}</span>
        </div>
        <WorkAnnotationParagraph className='max-w-2xl'>
          {description}
        </WorkAnnotationParagraph>
      </WorkAnnotationContainer>
    </div>
  )
}

export default SonicQuote