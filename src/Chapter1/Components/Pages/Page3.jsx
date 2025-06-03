import React from 'react'
import Imege from '../../../assets/PcImage/pc.png'

export default function Page3() {
  return (
    <>
      <div className='grid place-items-center h-[80%]'>
        <div className='mt-[5rem] flex items-center justify-center'>
            <img className='h-40 w-50 rounded-xl overflow-hidde' src={`${Imege}`} alt="サーバー画像" />
        </div>
        <div className='flex justify-center'>
            <div className='text-[#333] text-[5rem] font-bold border-b-[5px] border-b-[tomato]'>A:コンピューターです。</div>
        </div>
      </div>
    </>
  )
}