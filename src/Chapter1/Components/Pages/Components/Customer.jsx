import React from 'react'
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';

export default function Customer() {
  return (
    <>
        <div className='flex flex-col'>
            <EmojiPeopleSharpIcon
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
