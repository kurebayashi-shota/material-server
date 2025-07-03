import React from 'react'
import { Link, } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function ArrowButtom({ className, to }) {
  return (
    <Link to={to}
    //  onClick={handleClick} 
     className={`bg-[#1E2939] rounded-xl transition duration-200 opacity-30 hover:opacity-100 ${className}`}>
      <DoubleArrowIcon className='text-white' sx={{fontSize:80}} />
    </Link>
  )
}
