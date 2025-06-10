import React from 'react'
import Thitle from '../../../ThitleLabel/Thitle'

export default function Top() {
  return (
    <div
      className='flex items-center justify-center h-full'
    >
        <Thitle
          className="text-[#174C61] text-[80px] xl:text-[150px]"
        >
          サーバーについて
        </Thitle>
    </div>
  )
}