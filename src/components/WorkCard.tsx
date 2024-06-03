import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWorkCardData } from '../contexts/WorkCardContext';

interface WorkCardProps {
  index: number,
  href: string,
  title: string,
  description: string
}

const transition = {
  duration: .6, 
  ease: [.43, .13, 0.23, .96]
}

const opacityExitFadeOut: Variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: .6,
      ease: [.43, .13, .23, .96]
    }
  }
}

const WorkCard = ({ index, href, title, description }: WorkCardProps) => {

  const background = useRef<HTMLImageElement>(null);
  const [ hovered, setHovered ] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const { setCurrentWorkIndex } = useWorkCardData();
  
  return (
    <motion.div 
      ref={container}
      className={`relative h-[90vh] border-y border-solid py-44 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} border-t-gray border-b-gray`} 
      initial='initial' 
      animate='animate' 
      exit={ hovered ? { opacity: 1 } : { opacity: 0 }}
      transition={transition}
      onHoverStart={ () => { setCurrentWorkIndex(index) }}
    >
      <motion.div 
        className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} w-[24rem] h-[36rem] overflow-hidden`}
      >
        
      </motion.div>
      <motion.div
        className={`relative flex flex-col gap-4 text-sm ${index % 2 === 0 ? 'items-start' : 'items-end'} justify-end w-1/2 h-full`}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <Link to={href}>
          <motion.p variants={opacityExitFadeOut} className='font-serif text-6xl'>{title}</motion.p>
        </Link>
        <motion.p variants={opacityExitFadeOut}>{description}</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default WorkCard;