import gsap from "gsap";
import { MouseEventHandler, useEffect, useRef } from "react";
import MagneticWrapper from "./MagneticWrapper";

interface ButtonProps {
  children: string,
  backgroundColor?: string
}

const Button = ({ children, backgroundColor = 'bg-black' }: ButtonProps) => {

  const buttonRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  let timeline: gsap.core.Timeline | null = null;
  let timeoutId: number | null = null;
  useEffect(() => {
    timeline = gsap.timeline({ paused: true });
    timeline
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit');
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (!timeline) return;
    timeline.tweenFromTo('enter', 'exit');
    
  }

  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = () => {
    timeoutId = setTimeout(() => {
      if (!timeline) return;
      timeline.play();
    }, 300);
  }

  return (
    <MagneticWrapper content={labelRef}>
      <button 
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${backgroundColor} cursor-pointer relative overflow-hidden flex items-center justify-center w-40 h-40 rounded-full`}
      >
        <span className="text-white font-medium z-10" ref={labelRef}>{children}</span>
        <div ref={circle} className="w-full absolute rounded-full top-full h-[150%] bg-red-500"></div>
      </button>
    </MagneticWrapper>
  )
}

export default Button