import React from 'react';
import './styles/Globe.scss';

const Circle = () => {
  return (
    <div 
      className='circle absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full'
    >
    </div>
  )
}

const Globe = React.forwardRef((ref: any) => {
  return (
    <div ref={ref} className='glob-wrap relative w-full h-full'>
      <div className="glob-container block w-full h-full overflow-hidden">
        <Circle />
        <Circle />
        <Circle />
        <div className="circle-horizontal"></div>
        <div className="circle-horizontal-middle"></div>
      </div>
    </div>
  )
});

export default Globe