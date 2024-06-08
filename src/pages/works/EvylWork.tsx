import { motion } from 'framer-motion';
import WorkAnnotationContainer from '../../components/work/WorkAnnotationContainer';
import { CursorProvider } from '../../contexts/CursorContext';
import { getProject } from '../../projects';
import Work from './Work';
import SonicQuote from '../../components/SonicQuote';

const EvylWork = () => {

  const work = getProject('Evyl')!;

  return (
    <CursorProvider>
      <Work
        title={work.name}
        background={work.background}
        description=''
        link={work.link}
        quote={
          <SonicQuote {...work.quote} />
        }
      >
        <WorkAnnotationContainer>
          <h2 id='work-subtitle' className='text-4xl font-medium max-w-5xl'>Born to be the <span className='text-green-550'>Game Of The Year</span> forced to be in the Hall Of Fame</h2>
          <p id='work-description' className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quia enim esse dolor aspernatur soluta eius possimus, nam commodi!</p>
        </WorkAnnotationContainer>
      </Work>
    </CursorProvider>
  )
}

export default EvylWork