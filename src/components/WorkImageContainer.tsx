import React, { ReactNode } from 'react'

interface WorkImageContainerProps {
  children: ReactNode
}

const WorkImageContainer = ({ children }: WorkImageContainerProps) => {
  return (
    <div className='relative h-screen w-full'>
      {children}
    </div>
  )
}

export default WorkImageContainer