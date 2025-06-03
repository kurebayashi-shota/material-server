import React from 'react'
import Button from './Button'

export default function FooterButton({ children }) {
  return (
    <div
      className='bg-white rounded-full h-[4rem] w-[3.8rem] text-center -mt-[32px]'
    >
        <Button>{children}</Button>
    </div>
  )
}