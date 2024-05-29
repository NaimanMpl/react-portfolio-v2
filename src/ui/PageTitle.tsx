import { color } from "framer-motion"

interface PageTitleProps {
  color: string,
  children: string
}

const PageTitle = ({ children, color }: PageTitleProps) => {
  return (
    <div className="flex justify-center">
      <h1 className={`${color} text-6xl text-center font-bold max-w-screen-lg`}>{children}</h1>
    </div>
  )
}

export default PageTitle