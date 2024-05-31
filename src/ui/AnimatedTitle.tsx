import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, slideUpTitle } from '../anim';

interface AnimatedTitleProps {
  className?: string,
  color?: string,
  serif?: boolean,
  children: string,

}

const AnimatedTitle = ({ children, color, serif = false, className }: AnimatedTitleProps) => {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.h2 ref={container} >
      {children.split(' ').map((word, index) => 
        <span 
          className={`text-9xl inline-flex pr-4 overflow-hidden ${color} ${className}`}
        >
          <motion.span 
            variants={slideUpTitle} 
            animate={isInView ? 'open' : 'closed'} 
            custom={index}
            className={`${serif ? '' : 'font-semibold'} ${serif ? 'font-serif' : ''} `}
          >
            {word}
          </motion.span>
        </span>
      )}
    </motion.h2>
  )
}

export default AnimatedTitle