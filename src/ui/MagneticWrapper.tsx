import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

interface MagneticWrapperProps {
  content?: React.RefObject<HTMLElement> | React.MutableRefObject<HTMLElement>,
  children: any
}

const MagneticWrapper = ({ children, content }: MagneticWrapperProps) => {

  const magnetic = useRef<HTMLElement>(null);
  useEffect(() => {

    if (!magnetic.current) return;

    const moveXTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)"});
    const moveYTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)"});
    let moveContentXTo = null, moveContentYTo = null;

    if (content) {
      moveContentXTo = gsap.quickTo(content.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)"});
      moveContentYTo = gsap.quickTo(content.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)"});
    }

    magnetic.current.addEventListener('mousemove', (e) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      moveXTo(x * 0.5);
      moveYTo(y * 0.5);

      if (moveContentXTo && moveContentYTo) {
        moveContentXTo(x * 0.55);
        moveContentYTo(y * 0.55);
      }
    });

    magnetic.current.addEventListener('mouseleave', (e) => {
      moveXTo(0);
      moveYTo(0);

      if (moveContentXTo && moveContentYTo) {
        moveContentXTo(0);
        moveContentYTo(0);
      }
    });

  }, []);

  return (
    React.cloneElement(children, { ref: magnetic })
  )
}

export default MagneticWrapper