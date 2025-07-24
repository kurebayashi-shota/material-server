import { Link } from 'react-router-dom'

export default function Navigation({ pages, home }) {
  return (
    <div className="ml-10 -mt-[1rem] w-[4rem] relative group items-center">
        {/* 通常表示：・・・ */}
        <div className="text-xl border-black border-[2px] rounded hover:hidden">
        ・・・
        </div>

        {/* ホバー時に表示されるナビゲーションバー */}
        <div className="text-black absolute -mt-[4rem] opacity-0 transition duration-300 flex w-[31rem] overflow-auto group-hover:opacity-100 bg-white shadow-md border rounded p-2">
          <Link className='w-[3rem] my-auto flex-shrink-0' to={home}>トップ</Link>
          {pages.map((page)=>(
            <Link
            key={page.id}
            to={page.path}
            className="px-4 py-2 hover:bg-gray-100"
            >
            {page.id}
            </Link>
        ))}
        </div>
    </div>
  )
}
