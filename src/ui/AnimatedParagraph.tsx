import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from '../anim';

interface AnimatedParagraphProps {
  className?: string,
  children: string
}

const AnimatedParagraph = ({ children, className }: AnimatedParagraphProps) => {

  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.p ref={container} className={`m-0 max-w-5xl text-2xl ${className} dxl:text-xl`}>
      {
        children.split(' ').map((word, index) => {
          return (
            <motion.span key={index} className='px-1 inline-flex overflow-hidden'>
              <motion.span variants={slideUp} animate={isInView ? 'open' : 'closed'} custom={index}>
                {word}
              </motion.span>
            </motion.span>
          )
        })
      }
    </motion.p>
  )
}

export default AnimatedParagraph