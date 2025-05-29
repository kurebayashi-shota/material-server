import React from 'react'
import FlatwareSharpIcon from '@mui/icons-material/FlatwareSharp';

export default function Restaurant() {
  return (
    <>
        <div className='flex flex-col'>
            <FlatwareSharpIcon
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
              サーバー
            </span>
        </div>
    </>
  )
}
