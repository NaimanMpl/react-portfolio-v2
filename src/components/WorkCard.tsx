import { motion, Variants } from 'framer-motion';
import React, { EventHandler, ReactEventHandler, ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.svg';
import { useWorkCardData, WorkCardData, Works } from '../contexts/WorkCardContext';
import { getWork } from '../utils';

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
    opacity: 0
  }
}

const WorkCard = ({ href, img, title, description }: WorkCardProps) => {

  const works = useWorkCardData();
  const background = useRef<HTMLImageElement>(null);
  const [ coordinates, setCoordinates ] = useState<WorkCardData | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!background.current) return;
      const rect = background.current.getBoundingClientRect();
      console.log(background.current.height)
      setCoordinates({ x: rect.left, y: rect.top });
    }

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  
  return (
    <div>
      <div className='overflow-hidden'>
        <Link to={href} state={coordinates}>
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={transition}
            className='w-full h-[24rem] object-cover' 
            src={img}
            alt={title} 
          />
        </Link>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-4'>
          <motion.p {...opacityExitFadeOut} transition={transition} className='font-serif text-3xl'>{title}</motion.p>
          <Link to={href} state={coordinates}>
            <motion.div {...opacityExitFadeOut} transition={transition} className='border border-solid border-white rounded-full p-2'>
              <motion.img ref={background} className='w-3' src={arrowIcon} alt='Go' />
            </motion.div>
          </Link>
        </div>
        <motion.p {...opacityExitFadeOut} transition={transition} className='max-w-36'>{description}</motion.p>
      </div>
      <span>{coordinates?.x} {coordinates?.y} {window.innerWidth} {window.innerHeight}</span>
    </div>
  )
}

export default WorkCard;