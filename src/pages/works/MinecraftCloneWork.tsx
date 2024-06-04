import { motion } from 'framer-motion';
import { CursorProvider } from '../../contexts/CursorContext';
import { getProject } from '../../projects';
import Work from './Work';

const MinecraftCloneWork = () => {
  const work = getProject('Minecraft Clone');

  return (
    <CursorProvider>
      <Work 
        title={work!.name} 
        description='A Minecraft Clone made with love' 
        background={work!.background}
        link={work!.link}
      >
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { delay: .2 }}} 
          className='px-header py-12 mt-44 gap-20 flex justify-between'
        >
          <h2 id='work-subtitle' className='text-4xl font-medium max-w-5xl'>Let's go to a place where everything is made of <span className='text-green-550'>blocks</span></h2>
          <p id='work-description' className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quia enim esse dolor aspernatur soluta eius possimus, nam commodi!</p>
        </motion.section>
      </Work>
    </CursorProvider>
  )
}

export default MinecraftCloneWork