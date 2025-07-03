import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ArrowButton from './Button/ArrowButton'
import Button from './Button/Button';

export default function SelectFooter({ className, routes }) {

  const buttonStyles = '-mt-[30px] bg-white rounded-full';
  return (
    <nav className={`mt-[1rem] transform duration-200 flex justify-between bg-[#174C61] opacity-40 hover:mt-0 hover:opacity-100 ${className}`}>

        <Link
          className=''
          to="/chapter1"
        >
          <HomeIcon
            className={`ml-[20px] transform scale-x-[-1] sm:ml-[50px] ${buttonStyles} text-[#737883] hover:text-[#666]`}
            sx={{ fontSize: 80 }}
          />
        </Link>

        {/* <HomeButton className={`xl:ml-[50px] -mt-[30px] bg-white rounded-full`} /> */}

        {/* オブジェクトはChapter1.jsxから受け取ってる */}
        {routes.map((route) =>(
        <Button
          key={route.id}
          page={route.page}
          className={route.class}
        >
          {route.value}
        </Button>
        ))}

        <ArrowButton className={`ml-auto mr-[20px] sm:mr-[50px] ${buttonStyles}`} />
    </nav>
  )
}