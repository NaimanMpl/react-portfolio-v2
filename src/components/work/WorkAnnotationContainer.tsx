import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface WorkAnnotationContainerProps {
  children: ReactNode,
  className?: string
}

const WorkAnnotationContainer = ({ children, className }: WorkAnnotationContainerProps) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: .2 }}} 
      className={`px-header py-12 mt-44 gap-20 flex justify-between dxl:flex-col dxl:gap-8 dxl:mt-0 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default WorkAnnotationContainer