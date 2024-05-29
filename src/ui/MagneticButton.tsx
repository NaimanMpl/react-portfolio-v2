import { ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode,
  backgroundColor: string
}

const MagneticButton = ({ children, backgroundColor = 'bg-black' }: MagneticButtonProps) => {
  return (
    <button className={`${backgroundColor} cursor-pointer relative flex items-center justify-center px-4 py-16 rounded-[3em]`}>
      {children}
      <div className="w-full absolute rounded-full top-full h-[150%]"></div>
    </button>
  )
}

export default MagneticButton