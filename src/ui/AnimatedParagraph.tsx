import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from '../anim';

interface AnimatedParagraphProps {
  children: string
}

const AnimatedParagraph = ({ children }: AnimatedParagraphProps) => {

  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.p ref={container} className='m-0 flex gap-2 text-2xl overflow-hidden'>
      {
        children.split(' ').map((word, index) => {
          return <motion.span key={index} variants={slideUp} animate={isInView ? 'open' : 'closed'} custom={index}>{word}</motion.span>
        })
      }
    </motion.p>
  )
}

export default AnimatedParagraph