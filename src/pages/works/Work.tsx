import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import CursorLink from '../../components/CursorLink'
import Header from '../../components/Header'
import Marquee from '../../components/marquee/Marquee'
import MarqueeItem from '../../components/marquee/MarqueeItem'
import WorkImageContainer from '../../components/work/WorkImageContainer'
import { CursorProvider, useCursor } from '../../contexts/CursorContext'
import { useWorkCardData } from '../../contexts/WorkCardContext'
import { getProject } from '../../projects'
import AnimatedTitle from '../../ui/AnimatedTitle'
import Annotation from '../../ui/Annotation'
import Button from '../../ui/Button'
import MagneticWrapper from '../../ui/MagneticWrapper'

interface WorkProps {
  children: ReactNode,
  title: string,
  description: string,
  background: string,
  link: string | null,
}

const transition = [0.6, 0.01, -0.05, 0.9]
gsap.registerPlugin(ScrollTrigger);

const titleAnimation: Variants = {
  initial: {
    y: 0
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .04,
      staggerDirection: -1 // Right to left
    }
  }
}

const letterAnimation: Variants = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: { duration: 1, ease: transition }
  }
}

const Work = ({ link, children, title, description, background }: WorkProps) => {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [ 1, 1.15]);
  const work = getProject(title);
  const container = useRef(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const { setCursorVisible } = useCursor();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline(({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }));

      tl.to('#work-subtitle', { y: -50 }, 0);
      tl.to('#work-description', { y: -50 }, 0);
      tl.to(images.current[0], { y: -100 }, 0);
      tl.to(images.current[1], { y: -150 }, 0);
      tl.to(images.current[2], { y: -225 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <motion.div 
        initial='initial'
        animate='animate'
        exit='exit' 
        className='bg-primary text-white overflow-hidden'
      >
        {link !== null && <CursorLink title='See Github' href={link} />}
        <motion.div className='relative h-screen flex flex-col'>
          <Header className='text-white' />
          <section className='px-header mt-44'>
            <div className='flex flex-col gap-6 items-center'>
              <Annotation color='text-light-green'>
                Project
              </Annotation>
              <div className='flex gap-8 justify-center items-center'>
                {title.split(' ').map((word) => {
                  return (
                    <motion.h2 variants={titleAnimation} className='pb-4 overflow-hidden'>
                      {word.split('').map((letter, index) => {
                        return (
                          <motion.span
                            key={index} 
                            variants={letterAnimation}
                            className='inline-block text-8xl font-serif text-white'
                          >
                            {letter}
                          </motion.span>
                        )
                      })}
                    </motion.h2>
                  )
                })}
              </div>
            </div>
          </section>
          <motion.div 
            className='px-header' 
          >
            <motion.div
              className='overflow-hidden'
              initial={{ position: 'absolute', left: '50%', top: '50%', translateX: '-50%', translateY: '-50%',  width: '24rem', height: '36rem' }}
              animate={{ top: '90%', width: '100%', height: '30rem', transition: { duration: 1.4, ease: transition, delay: .2 }}}
            >
              <motion.img
                style={{ scale: scale }}
                className='w-full h-full object-cover'
                src={background}
                alt={title}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        {children}
        <div 
          ref={container}
          className='border border-solid border-red-50'
          onMouseEnter={() => setCursorVisible(true) } 
          onMouseLeave={() => setCursorVisible(false) }
        >
          <WorkImageContainer>
            {work!.images.map((image, index) => {
              switch (index) {
                case 0:
                  return <img ref={ref => images.current[index] = ref} className='absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[28rem] object-cover z-20' src={image} alt={'image'} />
                case 1:
                  return <img ref={ref => images.current[index] = ref} className='absolute left-3/4 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] object-cover z-10' src={image} alt={'image'} />
                case 2:
                  return <img ref={ref => images.current[index] = ref} className='absolute left-[35%] top-[70%] -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[18rem] object-cover' src={image} alt={'image'} />
              }
            })}
          </WorkImageContainer>
        </div>
      </motion.div>
    </>
  )
}

export default Work