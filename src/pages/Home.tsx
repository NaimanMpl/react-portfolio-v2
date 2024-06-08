import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { smoothEase } from '../anim';
import arrowDown from '../assets/arrowdown.svg';
import eggmanBg from '../assets/sonic-frontiers-eggman.png';
import Header from '../components/Header';
import HorizontalBar from '../components/HorizontalBar';
import SonicQuote from '../components/SonicQuote';
import WorkCard from '../components/work/WorkCard';
import WorkImage from '../components/work/WorkImage';
import projects from '../projects';
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const createScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: worksContainer.current,
        start: 'top+=300 bottom',
        end: `bottom+=${window.innerWidth < 768 ? 350 : 200} bottom`,
        scrub: true,
        onEnterBack: () => {
          gsap.to('#work-image', { scale: 1, display: 'block' });
          gsap.to('#work-image', { opacity: 1, duration: .4, ease: "power1.out" });
        },
        onEnter: () => {
          gsap.to('#work-image', { scale: 1, display: 'block' });
          gsap.to('#work-image', { opacity: 1, duration: .4, ease: "power1.out" });
        },
        onLeave: () => {
          gsap.to('#work-image', { scale: .6 });
          gsap.to('#work-image', { opacity: 0, duration: .4, ease: "power1.out", onComplete: () => { gsap.to('#work-image', { display: 'none' }) } });
        },
        onLeaveBack: () => {
          gsap.to('#work-image', { scale: .6 });
          gsap.to('#work-image', { opacity: 0, duration: .4, ease: "power1.out", onComplete: () => { gsap.to('#work-image', { display: 'none' }) } });
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
      <div className="bg-white relative h-screen">
        <Header />
        <section className='px-header'>
          <div className='mt-52 flex flex-col items-center dxl:mt-16'>
            <span className='text-gray font-medium pb-6 dxl:pb-2'>Naïman's Porfolio</span>
            <PageTitle color='text-black'>Hello, World! My name is Naïman a Software Developer</PageTitle>
          </div>
          <div className='mt-28 relative flex justify-end pr-24 dxl:pr-4 dxl:mt-40'>
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
            <AnimatedTitle className='text-[6vw] dxl:text-[5vw]'>Embark on a</AnimatedTitle>
            <div className='bg-pink-200 rounded-full px-24 py-8 dxl:px-8 dxl:py-1'>
              <AnimatedTitle color='text-black text-[6vw] dxl:text-[3.8vw]' serif>Journey</AnimatedTitle>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='bg-green-550 rounded-full px-52 py-12 dxl:px-8 dxl:py-2'>
              <img src={arrowDown} className='dxl:max-w-5 dxl:max-h-5' alt="Scroll" />
            </div>
            <AnimatedTitle className='text-[6vw] dxl:text-[5vw]'>Through My Projects</AnimatedTitle>
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
      <section className='px-header flex flex-col items-center bg-white py-12 gap-6'>
        <h2 className='font-medium text-5xl dxl:text-3xl'>Let's Work Together</h2>
        <p className='text-center max-w-[70%] dxl:max-w-full'>Let's create something awesome together, whether you have a project idea or simply want to connect. Connect with me to discuss how we can make magic happen! I'm currently seeking an apprenticeship opportunity</p>
        <Link to='/contact' className='bg-black text-white px-6 py-3 rounded-lg'>
            Get in touch
        </Link>
      </section>
      <section className='py-12 bg-white text-black'>
        <SonicQuote
          theme='light'
          background={eggmanBg}
          description="There are very few games that humanize Dr. Eggman, Sonic Frontiers chose to not be one of them and i kinda respect that. In many Sonic games Eggman has always be treaten as a vilain before a human. We finally see him concede to his true feelings."
          game='Sonic Frontiers'
          author='Eggman'
          quote='Be careful... Dear Daugther'
        />
      </section>
    </div>
  )
}

export default Home