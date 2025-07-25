import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ChapterClass = "block px-4 py-2 hover:bg-gray-700";
  const chapters = [
    {id:1, to:"/",value:"トップ"},
    {id:2, to:"/chapter1",value:"第一回",},
    {id:3, to:"/chapter2",value:"第二回",},
    {id:4, to:"/chapter3",value:"第三回",},
    {id:5, to:"/chapter4",value:"第四回",},
    {id:6, to:"/chapter5",value:"第五回(6)",},
    {id:7, to:"/chapter6",value:"第六回(7)",},
    {id:8, to:"/chapter7",value:"第七回(5)",},
  ]

  return (
    <nav className="bg-gray-800 text-white w-7 relative -mb-7.5 z-10">
      {/* ハンバーガーメニューアイコン */}
      <button
        className="focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* メニュー */}
      <div
        className={`absolute bg-gray-800 top-full left-0 w-40 mt-2 rounded shadow-md transition-opacity duration-200 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {chapters.map((chapter)=>(
          <Link
            key={chapter.id}
            to={chapter.to}
            className={`${ChapterClass}`}
            onClick={() => setIsOpen(false)}
          >
            {chapter.value}
          </Link>
        ))}
      </div>
    </nav>
  )
}
