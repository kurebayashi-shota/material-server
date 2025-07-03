import React from 'react'
import Thitle from '../../ThitleLabel/Thitle'
import CloudKinds from '../../assets/PcImage/Server/cloudkinds.png'

export default function Page9({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        クラウドの種類
      </Thitle>

      <div className='grid place-items-center h-[80%] -mt-30'>
        <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
          ざっくりと
        </h2>
        <ul className='flex -mt-30 text-center'>
          <li className='w-60 xl:w-70'>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              オンプレ
            </span>
            <p className='xl:text-[1.5rem]'>
              全部やらないといけない
            </p>
          </li>
          <li  className='w-60 xl:w-70'>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              IaaS
            </span>
            <p className='xl:text-[1.5rem]'>
              ハードウェアまで
            </p>
          </li>
          <li  className='w-60 xl:w-70'>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              PaaS
            </span>
            <p className='xl:text-[1.5rem]'>
              ミドルウェアまで
            </p>
          </li>
          <li  className='w-60 xl:w-70'>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              SaaS
            </span>
            <p className='xl:text-[1.5rem]'>
              使うだけ
            </p>
          </li>
        </ul>
      </div>
      <img className='mx-auto -mt-15 h-80 w-230 xl:h-100 xl:w-280' src={`${CloudKinds}`} alt="クライアント画像" />
    </div>
  )
}