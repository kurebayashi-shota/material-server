import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';

export default function Server() {
  return (
    <>
        <div className='flex flex-col'>
            <StorageIcon
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
