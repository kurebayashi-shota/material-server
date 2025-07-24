import React from 'react'
import Title from './Title/Title'
import { TitleData } from '../Data/TitleData'

export default function Index({ className, chapter }) {
  return (
        <Title
          className={`flex justify-center items-center text-[#174C61] text-[5rem] xl:text-[150px] ml-[2rem] ${className}`}
        >
          {TitleData[chapter].index}
        </Title>
  )
}