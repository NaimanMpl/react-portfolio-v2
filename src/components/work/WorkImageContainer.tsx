import React, { ReactNode } from 'react'

interface WorkImageContainerProps {
  children: ReactNode
}

const WorkImageContainer = ({ children }: WorkImageContainerProps) => {
  return (
    <div className='mt-32 relative h-[60vh] w-full'>
      {children}
    </div>
  )
}

export default WorkImageContainer