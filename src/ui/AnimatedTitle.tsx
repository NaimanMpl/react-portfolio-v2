import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, slideUpTitle } from '../anim';

interface AnimatedTitleProps {
  color?: string,
  serif?: boolean,
  children: string,

}

const AnimatedTitle = ({ children, color, serif = false }: AnimatedTitleProps) => {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.h2 className='flex gap-6 overflow-hidden' ref={container} >
      {children.split(' ').map((word, index) => 
        <motion.span 
          variants={slideUpTitle} 
          animate={isInView ? 'open' : 'closed'} 
          className={`text-9xl ${serif ? '' : 'font-semibold'} ${serif ? 'font-serif' : ''} ${color}`} 
          custom={index}
        >
          {word}
        </motion.span>
      )}
    </motion.h2>
  )
}

export default AnimatedTitle