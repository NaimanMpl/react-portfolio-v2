import { ReactNode } from 'react'

interface PrimaryBackgroundProps {
  children: ReactNode
}

const PrimaryBackground = ({ children }: PrimaryBackgroundProps) => {
  return (
    <div className='bg-primary'>
      <div
        style={{
          background: 'linear-gradient(90deg, var(--primary) calc(100% - 2px), rgba(255, 255, 255, 0.1) 0)',
          backgroundSize: 'calc((100% - 2*2px) / 6 + 2px) 100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default PrimaryBackground