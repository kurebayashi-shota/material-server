import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ArrowButton from './Button/ArrowButton'
import Button from './Button/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function SelectFooter({ className, routes }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const match = currentPath.match(/^\/chapter1\/page(\d+)$/);
  const pathNum = match ? parseInt(match[1]) : 1;
  const andoPath = pathNum-1;
  const buttonStyles = '-mt-[30px] bg-white rounded-full';
  
  return (
    <nav className={`mt-[1rem] transform duration-200 flex justify-between bg-[#174C61] opacity-40 hover:mt-0 hover:opacity-100 ${className}`}>
        <Link to={pathNum == 1 ? "/chapter1" : `/chapter1/page${andoPath}`}>
          <ArrowCircleLeftIcon />
        </Link>

        <Link
          className=''
          to="/chapter1"
        >
          <HomeIcon
            className={`ml-[1.5rem] transform scale-x-[-1] ${buttonStyles} text-[#737883] hover:text-[#666]`}
            sx={{ fontSize: 80 }}
          />
        </Link>

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