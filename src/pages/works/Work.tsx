import { motion, Variants } from 'framer-motion'
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

  const location = useLocation();
  const workData = location.state;

  console.log(workData)

  return (
    <motion.div 
      initial='initial'
      animate='animate'
      exit='exit' 
      className='bg-primary text-white overflow-hidden'
    >
      <div className='relative h-screen flex flex-col justify-between'>
        <Header className='text-white' />
        <section className='px-header'>
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
                          className='inline-block text-9xl font-serif text-white'
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
          initial={{ x: workData.x, y: `50px`, width: '60rem', height: '24rem' }}
          animate={{ x: 0, y: 0, width: '100%', transition: { duration: 1.4, ease: transition, delay: .2 }}}
        >
          <motion.img 
            initial={{ scale: 1.1 }} 
            className='w-full object-cover h-[28rem]' 
            src={background} 
            alt={title} 
          />
        </motion.div>
      </div>
      
    </motion.div>
  )
}

export default Work