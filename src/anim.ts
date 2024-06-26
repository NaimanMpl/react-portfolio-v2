import { Variants } from "framer-motion"

export const opacity = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5
    },
    closed: {
      opacity: 0
    }
  }
}

export const slideUp: Variants = {
  initial: {
    opacity: 0
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.01 * i }
  }),
  closed: {
    y: '100%'
  }
}

export const slideUpTitle: Variants = {
  initial: {
    opacity: 0
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.85, delay: 0.045 * i, ease: [.43, .13, 0.23, .96] }
  }),
  closed: {
    y: '200%'
  }
}

export const smoothEase = {
  duration: .6, 
  ease: [.43, .13, 0.23, .96]
}