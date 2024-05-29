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
    transition: { duration: 0.65, delay: 0.065 * i }
  }),
  closed: {
    y: '100%'
  }
}