import { ReactNode } from 'react'

interface WorkAnnotationTitleProps {
  id?: string,
  className?: string,
  children: ReactNode
}

const WorkAnnotationTitle = ({ className, id, children }: WorkAnnotationTitleProps) => {
  return (
    <h2 id={id} className={`text-4xl font-medium max-w-5xl dxl:text-3xl ${className}`}>{children}</h2>
  )
}

export default WorkAnnotationTitle