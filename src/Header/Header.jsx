import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
        <Link
          to="/"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          トップ
        </Link>
        <Link
          to="/chapter1"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          第一回
        </Link>
        <Link
          to="/chapter2"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          第二回
        </Link>
        <Link
          to="/chapter3"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          第三回
        </Link>
      </div>
    </nav>
  )
}
