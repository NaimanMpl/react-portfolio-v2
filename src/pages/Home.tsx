import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import evylBg from '../assets/evyl.png';
import githubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';
import minecraftBg from '../assets/minecraft_bg.jpg';
import Header from '../components/Header';
import HorizontalBar from '../components/HorizontalBar';
import WorkCard from '../components/WorkCard';
import AnimatedParagraph from '../ui/AnimatedParagraph';
import AnimatedTitle from '../ui/AnimatedTitle';
import Globe from '../ui/Globe';
import MagneticWrapper from '../ui/MagneticWrapper';
import PageTitle from '../ui/PageTitle';

const Home = () => {

  const worksContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: worksContainer,
    offset: ["start end", "end start"]
  });
  const circleHeight = useTransform(scrollYProgress, [0, 0.8], [80, 0]);
  const globeRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLSpanElement>(null);

  return (
    <div ref={worksContainer} className='overflow-hidden'>
      <div className="relative h-screen">
        <Header />
        <section className='px-header'>
          <div className='mt-52 flex flex-col items-center'>
            <span className='text-gray font-medium pb-6'>Naïman's Porfolio</span>
            <PageTitle color='text-black'>Hello, World! My name is Naïman a Software Developer</PageTitle>
          </div>
          <div className='mt-32 relative flex justify-end pr-24'>
            <HorizontalBar className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full' color='bg-gray' />
            <MagneticWrapper content={globeRef}>
              <div className='bg-primary p-14 rounded-full w-40 h-40 z-50'>
                <Globe ref={globeRef} />
              </div>
            </MagneticWrapper>
          </div>
        </section>
        <p className='font-medium absolute bottom-12 left-1/2 -translate-x-1/2'>Scroll for more</p>
      </div>
      <section className='bg-primary pt-52 pb-24 px-header text-white'>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
            <AnimatedTitle className='text-9xl'>Lorem ipsum asit</AnimatedTitle>
            <div className='bg-pink-200 rounded-full px-24 py-8'>
              <AnimatedTitle color='text-black text-9xl' serif>dolor sit</AnimatedTitle>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='bg-green-550 rounded-full px-24 py-8'>
              <AnimatedTitle className='text-9xl' color='text-black' serif>dolor sit</AnimatedTitle>
            </div>
            <AnimatedTitle className='text-9xl'>amet consectetur</AnimatedTitle>
          </div>
        </div>
        <div className='mt-32'>
          <h4 className='uppercase text-sm pb-2'>Selected Works</h4>
          <HorizontalBar color='bg-gray' />
          <div className='grid grid-cols-2 mt-6 gap-20 justify-between'>
            <WorkCard
              href='/works/minecraft-clone'
              img={minecraftBg}
              title='Minecraft Clone'
              description='A Minecraft Clone made with love.'
            />
            <WorkCard
              href='/works/evyl'
              img={evylBg}
              title='Evyl'
              description='A 2D Java Adventure game.'
            />
          </div>
        </div>
        <motion.div className='relative h-[80px] z-10' style={{ height: circleHeight }}>
          <div className='absolute h-[1550%] w-[120%] left-[-10%] bg-primary ' style={{ borderRadius: '0 0 50% 50%' }}>
          
          </div>
        </motion.div>
      </section>
      <section className='relative px-header h-screen py-60'>
        <div className='absolute right-0 top-0 flex gap-4 py-24 px-20'>
          <img src={linkedInIcon} alt='Linked In' />
          <Link to='https://github.com/NaimanMpl'>
            <img src={githubIcon} alt='Github' />
          </Link>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='uppercase text-gray'>Contact me</span>
          <AnimatedTitle className='text-7xl font-semibold'>
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
          <button className='border border-solid border-gray rounded-full px-16 py-5 font-semibold mt-8 text-xl'>
            <span ref={mailRef}>naimanmpl@gmail.com</span>
          </button>
        </MagneticWrapper>
      </section>
    </div>
  )
}

export default Home