interface HorizontalBarProps {
  className?: string,
  color: string
}

const HorizontalBar = ({ color, className }: HorizontalBarProps) => {
  return (
    <div className={`w-full h-px ${color} ${className}`}>

    </div>
  )
}

export default HorizontalBar