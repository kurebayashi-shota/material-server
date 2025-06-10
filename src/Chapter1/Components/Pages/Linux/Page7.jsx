import React from 'react';
import Thitle from '../../../../ThitleLabel/Thitle';
import Cui from '../../assets/Pcimage/cui.png'

export default function Page7({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
        <img className='h-40 mx-auto' src={`${Cui}`} alt="CUI画像" />
        <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            でもサーバーの画面っていつも見ているGUIの画面じゃない!
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
            A:それはOSが違うからです。
          </div>
        </section>
      </div>
    </div>
  )
}