import { motion, useScroll } from 'framer-motion';
import { ReactNode } from 'react';

interface MarqueeProps {
  direction: 'left' | 'right',
  children: ReactNode
}

const Marquee = ({ direction, children }: MarqueeProps) => {

  return (
    <div className='flex gap-5 overflow-hidden whitespace-nowrap'>
      <MarqueeContainer direction={direction}>
        {children}
      </MarqueeContainer>
      <MarqueeContainer direction={direction}>
        {children}
      </MarqueeContainer>
    </div>
  )
}

const MarqueeContainer = ({ children, direction }: { children: ReactNode, direction: string }) => {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
        animate='animate' 
        variants={{
          animate: {
            x: direction === 'left' ? [0, '-100%'] : ['-100%', 0],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear'
              }
            }
          }
        }} 
        className='inline-block'
      >
        {children}
      </motion.div>
  );
}

export default Marquee