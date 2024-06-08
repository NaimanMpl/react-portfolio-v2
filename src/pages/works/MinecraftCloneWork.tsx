import { motion } from 'framer-motion';
import WorkAnnotationContainer from '../../components/work/WorkAnnotationContainer';
import { CursorProvider } from '../../contexts/CursorContext';
import { getProject } from '../../projects';
import Work from './Work';
import SonicQuote from '../../components/SonicQuote';

const MinecraftCloneWork = () => {
  const work = getProject('Minecraft Clone')!;

  return (
    <CursorProvider>
      <Work 
        title={work.name} 
        description='A Minecraft Clone made with love' 
        background={work.background}
        link={work.link}
        quote={
          <SonicQuote {...work.quote} />
        }
      >
        <WorkAnnotationContainer>
          <h2 id='work-subtitle' className='text-4xl font-medium max-w-5xl dxl:text-3xl'>Let's go to a place where everything is made of <span className='text-green-550'>blocks</span></h2>
          <p id='work-description' className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quia enim esse dolor aspernatur soluta eius possimus, nam commodi!</p>
        </WorkAnnotationContainer>
      </Work>
    </CursorProvider>
  )
}

export default MinecraftCloneWork