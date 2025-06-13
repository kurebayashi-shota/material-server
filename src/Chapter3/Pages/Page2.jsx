import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Comparison from '../../assets/Other/comparison.png'

export default function Page2({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] inline-block xl:text-[3rem] rounded-xl'>
            普段使っているパソコンとサーバーは<br />ソフトウェアだけが違うと説明しました
          </h2>
          <img className='mt-4 h-60 w-80 mx-auto' src={`${Comparison}`} alt="CUI画像" />
          <div className='mt-5 text-[1.5rem]'>ではOSはどうでしょうか?</div>
        </section>
      </div>
    </div>
  )
}