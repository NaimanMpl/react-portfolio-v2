import React, { ReactNode } from 'react'
import { Variants, animate, motion } from 'framer-motion'

interface MarqueeProps {
  children: ReactNode
}

const translateVariants: Variants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear'
      }
    }
  }
}

const Marquee = ({ children }: MarqueeProps) => {
  return (
    <div className='relative w-screen max-w-full h-[206px] select-none overflow-x-hidden'>
      <motion.div
        className='absolute flex gap-4 flex-shrink-0 min-w-full'
        variants={translateVariants}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Marquee