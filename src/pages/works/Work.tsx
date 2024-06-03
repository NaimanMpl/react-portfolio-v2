import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import { useWorkCardData } from '../../contexts/WorkCardContext'
import Annotation from '../../ui/Annotation'
import { getWork } from '../../utils'

interface WorkProps {
  title: string,
  description: string,
  background: string,
}

const transition = [0.6, 0.01, -0.05, 0.9]

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

const Work = ({ title, description, background }: WorkProps) => {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [ 1, 1.15]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <motion.div 
      initial='initial'
      animate='animate'
      exit='exit' 
      className='bg-primary text-white overflow-hidden'
    >
      <motion.div className='relative h-screen flex flex-col'>
        <Header className='text-white' />
        <section className='px-header mt-40'>
          <div className='flex flex-col gap-6 items-center'>
            <Annotation color='text-light-green'>
              Project
            </Annotation>
            <div className='flex gap-8 justify-center items-center'>
              {title.split(' ').map((word) => {
                return (
                  <motion.h2 variants={titleAnimation} className='overflow-hidden'>
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
        <motion.div className='px-header'>
          <motion.div
            className='overflow-hidden'
            initial={{ position: 'absolute', left: '50%', top: '50%', translateX: '-50%', translateY: '-50%',  width: '24rem', height: '36rem' }}
            animate={{ top: '100%', width: '100%', height: '36rem', transition: { duration: 1.4, ease: transition, delay: .2 }}}
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
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .2 }}} className='px-header mt-96 gap-24 flex justify-between'>
        <h2 className='text-5xl font-semibold max-w-5xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, incidunt.</h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quia enim esse dolor aspernatur soluta eius possimus, nam commodi!</p>
      </motion.section>
    </motion.div>
  )
}

export default Work