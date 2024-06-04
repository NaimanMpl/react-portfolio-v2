import { motion } from 'framer-motion';
import { getProject } from '../../projects';
import Work from './Work';

const EvylWork = () => {

  const work = getProject('Evyl');

  return (
    <Work
      title={work!.name}
      background={work!.background}
      description=''
    >
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: .2 }}} 
        className='px-header py-12 mt-44 gap-20 flex justify-between'
      >
        <h2 className='text-4xl font-medium max-w-5xl'>Born to be the <span className='text-green-550'>Game Of The Year</span> forced to be in the Hall Of Fame</h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quia enim esse dolor aspernatur soluta eius possimus, nam commodi!</p>
      </motion.section>
    </Work>
  )
}

export default EvylWork