import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import HorizontalBar from '../components/HorizontalBar';
import AnimatedTitle from '../ui/AnimatedTitle';
import Globe from '../ui/Globe';
import PageTitle from '../ui/PageTitle';
import WorkCard from '../components/WorkCard';
import minecraftBg from '../assets/minecraft_bg.jpg';
import evylBg from '../assets/evyl.png';
import AnimatedParagraph from '../ui/AnimatedParagraph';

const Home = () => {

  const worksContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: worksContainer,
    offset: ["start end", "end start"]
  });
  const circleHeight = useTransform(scrollYProgress, [0, 0.8], [80, 0]);

  return (
    <div ref={worksContainer} className='overflow-hidden'>
      <div className="relative h-screen">
        <Header />
        <section className='px-header'>
          <div className='mt-52 flex flex-col items-center'>
            <span className='text-gray font-medium pb-6'>Naïman's Porfolio</span>
            <PageTitle color='text-black'>Hello, World! My name is Naïman a Software Developer</PageTitle>
          </div>
          <div className='mt-20 relative flex justify-end pr-24'>
            <HorizontalBar className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full' color='bg-gray' />
            <div className='bg-primary p-14 rounded-full w-40 h-40 z-50'>
              <Globe />
            </div>
          </div>
        </section>
        <p className='font-medium absolute bottom-8 left-1/2 -translate-x-1/2'>Scroll for more</p>
      </div>
      <section className='pt-52 pb-24 px-header bg-primary text-white'>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
            <AnimatedTitle>Lorem ipsum asit</AnimatedTitle>
            <div className='bg-pink-200 rounded-full px-24 py-8'>
              <AnimatedTitle color='text-black' serif>dolor sit</AnimatedTitle>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='bg-green-550 rounded-full px-24 py-8'>
              <AnimatedTitle color='text-black' serif>dolor sit</AnimatedTitle>
            </div>
            <AnimatedTitle>amet consectetur</AnimatedTitle>
          </div>
        </div>
        <div className='mt-32'>
          <h4 className='uppercase text-sm pb-2'>Selected Works</h4>
          <HorizontalBar color='bg-gray' />
          <div className='grid grid-cols-2 mt-6 gap-16'>
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
        <motion.div className='relative h-[80px]' style={{ height: circleHeight }}>
          <div className='absolute h-[1550%] w-[120%] left-[-10%] bg-primary ' style={{ borderRadius: '0 0 50% 50%' }}>
          
          </div>
        </motion.div>
      </section>
      <section className='px-header h-screen py-44'>
        <span className='uppercase text-gray pb-6'>Contact me</span>
        <h2 className='text-7xl font-semibold'>Let's Work Together</h2>
        <div className='max-w-36 py-4'>
          <HorizontalBar color='bg-gray' />
        </div>
        <AnimatedParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero quas nisi officiis rem asperiores dolor blanditiis quae dolorem, ipsam neque. Eos excepturi repellendus nisi et, vel hic debitis adipisci.
        </AnimatedParagraph>
      </section>
    </div>
  )
}

export default Home