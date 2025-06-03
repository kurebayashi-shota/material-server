import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function LeftButton({className}) {
  return (
    <>
      <a href="/">
        <ArrowCircleRightIcon className={`text-[#174C61] ${className}`} />
      </a>
    </>
  )
}