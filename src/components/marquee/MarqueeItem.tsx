interface MarqueeItemProps {
  text: string
}

const MarqueeItem = ({ text }: MarqueeItemProps) => {
  return (
    <span className='text-[6vw] mx-5'>
      {text}
    </span>
  )
}

export default MarqueeItem