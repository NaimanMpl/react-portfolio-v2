import React, { ReactNode } from 'react'

interface AnnotationProps {
  children: ReactNode,
  color: string
}

const Annotation = ({ children, color }: AnnotationProps) => {
  return (
    <span className={`text-sm uppercase ${color}`}>{children}</span>
  )
}

export default Annotation