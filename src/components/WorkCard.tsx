import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.svg';
import { getWorkBackground } from '../utils';

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
  const [ coordinates, setCoordinates ] = useState({ x: 0, y: 0 });
  const [ hovered, setHovered ] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container);

  useEffect(() => {
    
    const updateCoordinates = () => {
      if (!background.current) return;
  
      const { left, top } = background.current.getBoundingClientRect();
      setCoordinates({ x: left, y: top });
    }

    window.addEventListener('scroll', updateCoordinates);

    return () => window.removeEventListener('scroll', updateCoordinates);

  }, []);
  
  return (
    <motion.div 
      ref={container}
      className={`relative  h-[90vh] border-solid py-12 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} border-t-gray border-b-gray`} 
      initial='initial' 
      animate='animate' 
      exit={ hovered ? { opacity: 1 } : { opacity: 0 }}
      transition={transition}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={() => setHovered(true)}
    >
      <motion.div 
        className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} w-[24rem] h-[36rem] overflow-hidden`}
        transition={transition}
        exit={hovered ? { position: 'fixed', left: '50%', top: '50%', translateX: '-50%', translateY: '-50%', width: '24rem' } : {}}
      >
        <Link
         to={href} 
         state={coordinates}
        >
          <motion.img
            ref={background}
            transition={transition}
            className='w-full h-full object-cover' 
            src={getWorkBackground(title)}
            alt={title}
          />
        </Link>
      </motion.div>
      <motion.div 
        className={`relative flex flex-col gap-4 text-sm ${index % 2 === 0 ? 'items-start' : 'items-end'} justify-end w-1/2 h-full`}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <span className={`absolute top-0 ${index % 2 === 1 ? 'right-0' : 'left-0'} text-lg font-semibold`}>{index < 10 ? `0${index}` : index}.</span>
        <motion.p variants={opacityExitFadeOut} className='font-serif text-6xl'>{title}</motion.p>
        <motion.p variants={opacityExitFadeOut}>{description}</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default WorkCard;