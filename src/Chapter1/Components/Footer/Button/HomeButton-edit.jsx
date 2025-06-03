import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export default function HomeButton({buttonStyles, className}) {
  return (
    <div className={`mb-[1%] ${className}`}>
        <Link
            // className='rounded-full bg-[#737883] hover:bg-[#666]'
            to="/"
        >
            <HomeIcon
                className={`m-1 rounded-full bg-[#737883] hover:bg-[#666] text-white`}
                sx={{ fontSize: 80 }}
            />
        </Link>
    </div>
  )
}