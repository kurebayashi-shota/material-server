import React from 'react'
import { Link } from 'react-router-dom'

export default function Sideber({className}) {
  return (
    <div
        className={`bg-[#81D1E3] ${className}`}
    >
        <div
            className='border-[5px] border-[#E94F33] text-[3rem] text-[#333] ml-[2rem] whitespace-nowrap inline-block'
        >
            {/* 勉強会資料 */}
        </div>
        <ul>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/">Main</Link>
        </li>
      </ul>

    </div>
  )
}
