import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactNode, useLayoutEffect, useRef } from 'react'
import { smoothEase } from '../../anim'
import Header from '../../components/Header'
import WorkImageContainer from '../../components/work/WorkImageContainer'
import { getProject } from '../../projects'
import Annotation from '../../ui/Annotation'

interface WorkProps {
  children: ReactNode,
  title: string,
  description: string,
  background: string,
  link: string | null,
  quote: ReactNode
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

const Work = ({ children, title, background, quote }: WorkProps) => {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [ 1, 1.15]);
  const work = getProject(title);
  const container = useRef(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
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
        <motion.div className='relative h-screen flex flex-col'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {...smoothEase, duration: 1 }}}>
            <Header className='text-white' />
          </motion.div>
          <section className='px-header mt-44'>
            <div className='flex flex-col gap-6 items-center'>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {...smoothEase, duration: 1}}}>
                <Annotation color='text-light-green'>
                  Project
                </Annotation>
              </motion.div>
              <div className='flex gap-8 justify-center items-center dxl:gap-2'>
                {title.split(' ').map((word) => {
                  return (
                    <motion.h2 key={`title-${word}`} variants={titleAnimation} className='pb-4 overflow-hidden'>
                      {word.split('').map((letter, index) => {
                        return (
                          <motion.span
                            key={index} 
                            variants={letterAnimation}
                            className='inline-block text-8xl font-serif text-white dxl:text-[9vw]'
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
              className={`overflow-hidden ${window.innerWidth < 768 ? 'w-[18rem]' : 'w-[24rem]'} ${window.innerWidth < 768 ? 'h-[30rem]' : 'h-[36rem]'}`}
              initial={{ 
                position: 'absolute', 
                left: '50%', 
                top: '50%', 
                translateX: '-50%', 
                translateY: '-50%',
              }}
              animate={{ 
                top: window.innerWidth < 768 ? '75%' : '90%', 
                width: '100%', 
                height: window.innerWidth < 768 ? '20rem' : '30rem', 
                transition: { duration: 1.4, ease: transition, delay: .2 }
              }}
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
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: {...smoothEase}}}
        >
          {children}
          <div 
            ref={container}
          >
            <WorkImageContainer>
              {work!.images.map((image, index) => {
                switch (index) {
                  case 0:
                    return <img key={`work-img-${index}`} ref={ref => images.current[index] = ref} className='absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[28rem] object-cover z-20 dxl:w-[20rem] dxl:h-[16rem]' src={image} alt={title} />
                  case 1:
                    return <img key={`work-img-${index}`} ref={ref => images.current[index] = ref} className='absolute left-3/4 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] object-cover z-10 dxl:w-[18rem] dxl:h-[12rem]' src={image} alt={title} />
                  case 2:
                    return <img key={`work-img-${index}`} ref={ref => images.current[index] = ref} className='absolute left-[35%] top-[70%] -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[18rem] object-cover' src={image} alt={title} />
                }
              })}
            </WorkImageContainer>
          </div>
          {quote}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Work