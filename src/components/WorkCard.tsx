import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.svg';

interface WorkCardProps {
  href: string,
  img: string,
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

const WorkCard = ({ href, img, title, description }: WorkCardProps) => {

  const background = useRef<HTMLImageElement>(null);
  const [ coordinates, setCoordinates ] = useState({ x: 0, y: 0 });

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
    <motion.div className='w-[52rem]' initial='initial' animate='animate' exit='exit'>
      <div className='overflow-hidden'>
        <Link to={href} state={coordinates}>
          <motion.img
            ref={background}
            transition={transition}
            className='w-[52rem] h-[24rem] object-cover' 
            src={img}
            alt={title} 
          />
        </Link>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-4'>
          <motion.p variants={opacityExitFadeOut} className='font-serif text-3xl'>{title}</motion.p>
          <Link to={href} state={coordinates}>
            <motion.div variants={opacityExitFadeOut} className='border border-solid border-white rounded-full p-2'>
              <motion.img className='w-3' src={arrowIcon} alt='Go' />
            </motion.div>
          </Link>
        </div>
        <motion.p variants={opacityExitFadeOut} className='max-w-36'>{description}</motion.p>
      </div>
      <span>{coordinates.x} {coordinates.y}</span>
    </motion.div>
  )
}

export default WorkCard;