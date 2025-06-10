import React from 'react'

export default function Thitle({className , children}) {
  return (
    <h1 
        className={`ml-[2rem] font-bold ${className}`}
    >
      { children }
    </h1>
  )
}