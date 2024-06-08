import { ReactNode } from 'react';

interface WorkAnnotationParagraphProps {
  id?: string,
  className?: string;
  children: ReactNode
}

const WorkAnnotationParagraph = ({ id, children, className }: WorkAnnotationParagraphProps) => {
  return (
    <p className={`text-lg ${className}`} id={id}>{children}</p>
  )
}

export default WorkAnnotationParagraph