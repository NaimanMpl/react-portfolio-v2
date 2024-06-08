import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import { useWorkCardData } from '../../contexts/WorkCardContext';

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

  const [ hovered, setHovered ] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const { setCurrentWorkIndex } = useWorkCardData();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const context = gsap.context(() => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: container.current,
    //       start: 'top+=400 bottom',
    //       end: 'bottom+=200 top',
    //       markers: true,
    //       onEnter: () => {
    //         setCurrentWorkIndex(index)
    //       },
    //       onEnterBack: () => {
    //         setCurrentWorkIndex(index)
    //       }
    //     }
    //   })
    // });

    const checkVisibility = () => {
      if (!container.current) return;
      const rect = container.current.getBoundingClientRect();
      const visibility = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      
      if (visibility > 200) setCurrentWorkIndex(index);
    }

    window.addEventListener('scroll', checkVisibility);

    return () => { window.removeEventListener('scroll', checkVisibility) }
  }, []);
  
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
        className={`relative flex flex-col gap-4 text-sm ${index % 2 === 0 ? 'items-start' : 'items-end'} justify-end w-1/2 h-full dxl:w-2/3`}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <Link to={href} className='flex items-center gap-4'>
          <motion.p variants={opacityExitFadeOut} className='font-serif text-6xl dxl:text-4xl'>{title}</motion.p>
          <div className='w-12 h-12 border-[2px] border-solid border-white rounded-full p-1 dxl:w-8 dxl:h-8'>
            <img className='w-full h-full' src={arrow} alt="Go" />
          </div>
        </Link>
        <motion.p className='text-lg' variants={opacityExitFadeOut}>{description}</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default WorkCard;