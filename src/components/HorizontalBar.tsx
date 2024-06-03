interface HorizontalBarProps {
  className?: string,
  color: string
}

const HorizontalBar = ({ color, className }: HorizontalBarProps) => {
  return (
    <div className={`w-full h-px ${color} ${className} -z-[1]`}>

    </div>
  )
}

export default HorizontalBar