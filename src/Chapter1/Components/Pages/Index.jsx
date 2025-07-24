import React from 'react'
import Title from '../../../Template/Title/Title'
import { TitleData } from '../../../Data/TitleData'

export default function Index({ className }) {
  return (
    <div className={`flex justify-center items-center h-full w-full ${className}`}>
      <Title className="text-[#174C61] text-[5rem] xl:text-[150px]">
        {TitleData[1].index}
      </Title>
    </div>
  )
}
