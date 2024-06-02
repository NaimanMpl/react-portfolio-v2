import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { smoothEase } from '../anim'
import { useWorkCardData } from '../contexts/WorkCardContext'
import { getWorkBackground, minecraftBg } from '../utils'

interface WorkImageProps {

}

const WorkImage = () => {
  const { currentWork } = useWorkCardData();

  return (
    <motion.div
      id='work-image'
      className='opacity-0 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[36rem] overflow-hidden'
      transition={smoothEase}
    >
      <motion.img
        src={getWorkBackground(currentWork)}
        className='w-full h-full object-cover'
        alt={currentWork}
      />
    </motion.div>
)
}

export default WorkImage