import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUpTitle } from '../anim';

interface AnimatedTitleProps {
  className?: string,
  color?: string,
  serif?: boolean,
  children: string,
  gap?: string | null,
  weight?: 'semibold' | 'medium'
}

const AnimatedTitle = ({ children, color, serif = false, className, weight = 'semibold', gap = null, }: AnimatedTitleProps) => {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.h2 ref={container} >
      {children.split(' ').map((word, index) => 
        <span
          key={index} 
          className={`inline-flex ${index === children.split(' ').length - 1 ? '' : gap == null ? 'pr-4' : gap} py-2 overflow-hidden ${color} ${className}`}
        >
          <motion.span 
            variants={slideUpTitle} 
            animate={isInView ? 'open' : 'closed'} 
            custom={index}
            className={`${serif ? '' : (weight === 'semibold' ? 'font-semibold' : 'font-medium')} ${serif ? 'font-serif' : ''} `}
          >
            {word}
          </motion.span>
        </span>
      )}
    </motion.h2>
  )
}

export default AnimatedTitle