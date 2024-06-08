interface PageTitleProps {
  color: string,
  children: string
}

const PageTitle = ({ children, color }: PageTitleProps) => {
  return (
    <div className="flex justify-center">
      <h1 className={`${color} text-6xl text-center font-bold max-w-screen-lg dxl:text-4xl`}>{children}</h1>
    </div>
  )
}

export default PageTitle