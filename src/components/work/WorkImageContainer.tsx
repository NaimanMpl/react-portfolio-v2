import React, { ReactNode } from 'react'

interface WorkImageContainerProps {
  children: ReactNode
}

const WorkImageContainer = ({ children }: WorkImageContainerProps) => {
  return (
    <div className='mt-40 relative h-[60vh] w-full dxl:mt-10'>
      {children}
    </div>
  )
}

export default WorkImageContainer