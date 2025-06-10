import React from 'react'
import Thitle from '../ThitleLabel/Thitle'

export default function Index({ className }) {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
    >
        <Thitle
          className="text-[#174C61] text-[80px] xl:text-[150px]"
        >
          構成について
        </Thitle>
    </div>
  )
}