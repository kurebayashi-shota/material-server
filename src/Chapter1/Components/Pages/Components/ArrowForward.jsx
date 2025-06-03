import React from 'react'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

export default function ArrowForward({children}) {
  return (
    <>
        <div className='flex flex-col items-center mx-4 my-auto w-[5rem]'>
            <ArrowForwardSharpIcon
              className=''
              sx={{
                fontSize:{
                xs: 10,
                sm: 20,
                md: 30,
                lg: 40,
                xl: 50,
                },
              }}
            />
            <span
              className='text-[10px] text-center xl:text-[13px]'
            >
              {children}
            </span>
        </div>
    </>
  )
}
