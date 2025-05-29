import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';

export default function Client() {
  return (
    <>
        <div className='flex flex-col'>
            <ComputerIcon
              className=''
              sx={{
                fontSize:{
                xs: 10,
                sm: 30,
                md: 50,
                lg: 70,
                xl: 80,
                },
              }}
            />
            <span
              className='text-[0.5rem] text-center xl:text-[1rem]'
            >
                クライアント
            </span>
        </div>
    </>
  )
}
