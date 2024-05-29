import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import HorizontalBar from '../components/HorizontalBar';
import AnimatedParagraph from '../ui/AnimatedParagraph';
import AnimatedTitle from '../ui/AnimatedTitle';
import Globe from '../ui/Globe';
import PageTitle from '../ui/PageTitle';

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
          <div className='mt-52 relative flex justify-end pr-24'>
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quia velit sit officia soluta, fugit natus voluptatem quas dolor placeat nobis nihil in qui consectetur voluptatibus delectus. Ea enim aliquam nulla harum! Quasi nam nostrum incidunt quas numquam, dolorem exercitationem nihil, nobis culpa ex esse accusantium quae quis molestias delectus, tempore enim saepe. Totam et id expedita, reprehenderit voluptatum earum rerum sint magni. Laboriosam voluptatibus, magnam deleniti asperiores alias voluptatem odit nulla eos adipisci saepe? Inventore perferendis voluptatem, iusto error porro numquam, doloribus quisquam quos fuga laborum amet beatae placeat accusamus voluptatibus veniam unde, quo incidunt? Maxime nam exercitationem optio.</p>
        </div>
        <motion.div className='relative h-[80px]' style={{ height: circleHeight }}>
          <div className='absolute h-[1550%] w-[120%] left-[-10%] bg-primary ' style={{ borderRadius: '0 0 50% 50%' }}>
          
          </div>
        </motion.div>
      </section>
      <section className='px-header h-screen py-8'>
        <h2 className='text-7xl font-semibold'>Let's Work Together</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem in mollitia praesentium enim sint harum officia et molestias consequuntur. Dicta reiciendis totam veritatis atque temporibus, vitae possimus laborum aliquid optio dolorem quasi, dolor aliquam architecto sed vel beatae qui quaerat sit consectetur. Minima illum nobis quibusdam, quisquam saepe voluptas tenetur illo, similique veritatis eligendi distinctio earum ipsa ea omnis nemo sed placeat consequuntur libero optio explicabo rem sit qui? Quos, iste! Illo quia, nesciunt veritatis quos mollitia similique! At quae tenetur illum dolor, quam dolore vel eveniet eaque laborum? Dolorem pariatur sit blanditiis laboriosam! Distinctio provident fuga culpa debitis nisi.</p>
      </section>
    </div>
  )
}

export default Home