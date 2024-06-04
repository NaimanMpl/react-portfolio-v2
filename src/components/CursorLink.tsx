import { animate, motion, Variants } from 'framer-motion'
import React, { EventHandler, MouseEventHandler, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { smoothEase } from '../anim'
import { useCursor } from '../contexts/CursorContext'

interface CursorLinkProps {
  href: string,
  title: string
}

const cursorVariants: Variants = {
  animate: {
    scale: 1.1
  },
  stop: {
    scale: 0
  }
}

const CursorLink = ({ href, title }: CursorLinkProps) => {

  const [ coordinates, setCoordinates ] = useState({ x: 0, y: 0});
  const { cursorVisible } = useCursor();

  useEffect(() => {
    const updatePosition= (e: MouseEvent) => {
      setCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className='fixed w-24 h-24 z-40'
      style={{
        left: `${coordinates.x}px`,
        top: `${coordinates.y}px`,
        translateX: '-50%',
        translateY: '-50%',
        opacity: cursorVisible ? 1 : 0
      }}
      transition={{ ...smoothEase, duration: .4 }}
    >
      <Link
        to={href}
        className='text-black font-medium w-full h-full rounded-full flex items-center justify-center bg-white z-50'
      >
        {title}
      </Link>
    </motion.div>
  )
}

export default CursorLink