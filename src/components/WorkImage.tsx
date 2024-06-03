import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { smoothEase } from '../anim'
import { useWorkCardData } from '../contexts/WorkCardContext'
import { getWorkBackground, minecraftBg } from '../utils'

interface WorkImageProps {

}

const WorkImage = () => {
  const { currentWorkIndex } = useWorkCardData();

  return (
    <>
      <motion.div
        id='work-image'
        className='opacity-0 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[36rem] overflow-hidden scale-[.6]'
      >
        <motion.div animate={{ translateY: `-${(currentWorkIndex - 1) * 36}rem`, transition: {...smoothEase, duration: 1 }}}>
          <motion.img
            src={getWorkBackground('Minecraft Clone')}
            className='w-[24rem] h-[36rem] object-cover'
            alt={'currentWork'}
          />
          <motion.img
            src={getWorkBackground('Evyl')}
            className='w-[24rem] h-[36rem] object-cover'
            alt='Evyl'
          />
        </motion.div>
      </motion.div>
    </>
)
}

export default WorkImage