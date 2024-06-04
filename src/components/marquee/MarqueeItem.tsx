import React from 'react'

interface MarqueeItemProps {
  text: string
}

const MarqueeItem = ({ text }: MarqueeItemProps) => {
  return (
    <span className='text-[6vw] whitespace-nowrap'>
      {text}
    </span>
  )
}

export default MarqueeItem