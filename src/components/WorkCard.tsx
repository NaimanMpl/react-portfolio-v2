import React from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.svg';

interface WorkCardProps {
  href: string,
  img: string,
  title: string,
  description: string
}

const WorkCard = ({ href, img, title, description }: WorkCardProps) => {
  return (
    <div>
      <Link to={href}>
        <img className='w-full max-h-[22rem] object-cover rounded-lg' src={img} alt={title} />
      </Link>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-4'>
          <p className='font-serif text-3xl'>{title}</p>
          <a href={href}>
            <div className='border border-solid border-white rounded-full p-2'>
              <img className='w-3' src={arrowIcon} alt='Go' />
            </div>
          </a>
        </div>
        <p className='max-w-36'>{description}</p>
      </div>
    </div>
  )
}

export default WorkCard;