import { motion } from 'framer-motion'
import { smoothEase } from '../../anim'
import { useWorkCardData } from '../../contexts/WorkCardContext'
import projects from '../../projects'

const WorkImage = () => {
  const { currentWorkIndex } = useWorkCardData();

  return (
    <>
      <motion.div
        id='work-image'
        className='opacity-0 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[36rem] overflow-hidden scale-[.6] dxl:w-[18rem] dxl:h-[30rem]'
      >
        <motion.div 
          animate={{ translateY: `-${(currentWorkIndex - 1) * 36}rem`, transition: {...smoothEase, duration: .8 }}}
        >
          {projects.map(project => {
            return (
              <motion.img
                src={project.background}
                className='w-[24rem] h-[36rem] object-cover dxl:w-[18rem] dxl:h-[30rem]'
                alt={'currentWork'}
              />
            )
          })}
        </motion.div>
      </motion.div>
    </>
)
}

export default WorkImage