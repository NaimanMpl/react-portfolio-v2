import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { smoothEase } from '../anim';
import githubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';
import Header from '../components/Header';
import HorizontalBar from '../components/HorizontalBar';
import WorkCard from '../components/work/WorkCard';
import WorkImage from '../components/work/WorkImage';
import projects from '../projects';
import AnimatedParagraph from '../ui/AnimatedParagraph';
import AnimatedTitle from '../ui/AnimatedTitle';
import Globe from '../ui/Globe';
import MagneticWrapper from '../ui/MagneticWrapper';
import PageTitle from '../ui/PageTitle';

const Home = () => {

  const container = useRef(null);
  const worksContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  const circleHeight = useTransform(scrollYProgress, [0, 0.8], [80, 0]);
  const globeRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const createScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: worksContainer.current,
        start: 'top+=300 bottom',
        end: `bottom+=${window.innerWidth < 768 ? 350 : 200} bottom`,
        invalidateOnRefresh: true,
        markers: true,
        scrub: true,
        onEnterBack: () => {
          gsap.to('#work-image', { scale: 1 });
          gsap.to('#work-image', { opacity: 1, duration: .4, ease: "power1.out" });
        },
        onEnter: () => {
          gsap.to('#work-image', { scale: 1 });
          gsap.to('#work-image', { opacity: 1, duration: .4, ease: "power1.out" });
        },
        onLeave: () => {
          gsap.to('#work-image', { scale: .6 });
          gsap.to('#work-image', { opacity: 0, duration: .4, ease: "power1.out" });
        },
        onLeaveBack: () => {
          gsap.to('#work-image', { scale: .6 });
          gsap.to('#work-image', { opacity: 0, duration: .4, ease: "power1.out" });
        }
      });
    }

    const context = gsap.context(() => {
      createScrollTrigger();
    });


    return () => { context.revert(); }
  }, []);

  return (
    <div ref={container} className='overflow-hidden'>
      <div className="relative h-screen">
        <Header />
        <section className='px-header'>
          <div className='mt-52 flex flex-col items-center dxl:mt-16'>
            <span className='text-gray font-medium pb-6 dxl:pb-2'>Naïman's Porfolio</span>
            <PageTitle color='text-black'>Hello, World! My name is Naïman a Software Developer</PageTitle>
          </div>
          <div className='mt-32 relative flex justify-end pr-24 dxl:pr-4 dxl:mt-40'>
            <HorizontalBar className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full' color='bg-gray' />
            <MagneticWrapper content={globeRef}>
              <div className='bg-primary p-14 rounded-full w-40 h-40 z-50 dxl:w-28 dxl:h-28 dxl:p-8'>
                <Globe ref={globeRef} />
              </div>
            </MagneticWrapper>
          </div>
        </section>
        <p className='font-medium absolute bottom-12 left-1/2 -translate-x-1/2'>Scroll for more</p>
      </div>
      <section className='bg-primary pt-52 pb-24 px-header text-white dxl:pt-28'>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
            <AnimatedTitle className='text-[6vw] dxl:text-[4.8vw]'>Lorem ipsum asit</AnimatedTitle>
            <div className='bg-pink-200 rounded-full px-24 py-8 dxl:px-5 dxl:py-2'>
              <AnimatedTitle color='text-black text-[6vw] dxl:text-[4.8vw]' serif>dolor sit</AnimatedTitle>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='bg-green-550 rounded-full px-24 py-8 dxl:px-5 dxl:py-2'>
              <AnimatedTitle className='text-[6vw] dxl:text-[4.8vw]' color='text-black' serif>dolor sit</AnimatedTitle>
            </div>
            <AnimatedTitle className='text-[6vw] dxl:text-[4.8vw]'>amet consectetur</AnimatedTitle>
          </div>
        </div>
        <motion.div 
          ref={worksContainer} 
          className='mt-32'
        >
          <WorkImage />
          <motion.div exit={{ opacity: 0 }} transition={smoothEase}>
            <h4 className='uppercase text-sm pb-2'>Selected Works</h4>
            <HorizontalBar color='bg-gray' />
          </motion.div>
          <div className='flex flex-col'>
            {projects.map((project, index) => {
              return (
                <WorkCard
                  index={index + 1}
                  key={project.name}
                  href={project.path}
                  title={project.name}
                  description={project.description}
                />
              )
            })}
          </div>
        </motion.div>
        <motion.div className='relative h-[200px] -z-[1]' style={{ height: circleHeight }}>
          <div className='absolute h-[2050%] w-[150%] left-[-25%] bg-primary dxl:h-[2150%]' style={{ borderRadius: '0 0 50% 50%' }}>
          
          </div>
        </motion.div>
      </section>
      <section className='relative px-header h-screen py-60 dxl:py-32'>
        <div className='absolute right-0 top-0 flex gap-4 py-24 px-20 dxl:px-10 dxl:py-12'>
          <img src={linkedInIcon} alt='Linked In' />
          <Link to='https://github.com/NaimanMpl'>
            <img src={githubIcon} alt='Github' />
          </Link>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='uppercase text-gray'>Contact me</span>
          <AnimatedTitle className='text-7xl font-semibold dxl:text-4xl'>
            Let's Work Together
          </AnimatedTitle>
          <div className='max-w-36 py-4'>
            <HorizontalBar color='bg-gray' />
          </div>
        </div>
        <AnimatedParagraph
          className='font-medium mt-4'
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero quas nisi officiis rem asperiores dolor blanditiis quae dolorem, ipsam neque. Eos excepturi repellendus nisi et, vel hic debitis adipisci.
        </AnimatedParagraph>
        <MagneticWrapper content={mailRef}>
          <button className='border border-solid border-gray rounded-full px-16 py-5 font-semibold mt-8 text-xl dxl:text-lg dxl:px-12 dxl:py-4'>
            <span ref={mailRef}>naimanmpl@gmail.com</span>
          </button>
        </MagneticWrapper>
      </section>
    </div>
  )
}

export default Home