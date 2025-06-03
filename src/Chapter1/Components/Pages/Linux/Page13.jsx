import React from 'react';
import Thitle from '../Thitle';
import Comparison from '../../assets/comparison.png'

export default function Page13() {
  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-[3px] border-black inline-block xl:text-[3rem] rounded-xl'>
            ここまでで、普段使っているパソコンとサーバーは<br />ソフトウェアだけが違うと説明してきました
          </h2>
          <img className='mt-2 h-60 w-80 mx-auto' src={`${Comparison}`} alt="CUI画像" />
          </section>
      </div>
    </>
  )
}