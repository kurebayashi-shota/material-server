import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';

export default function Page2({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        ハードについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            サーバーのハードウェア
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'>
            サーバーのハードはサーバーの規模により様々あるのでそこも取っつきづらく感じるポイントかと思います。
            ただGoogleのサーバーと個人用サーバーで同じ規模のハードを使用するのは無理があるというのは想像がつくと思います。
            <br/>ここでは、代表的なハードを紹介します。
          </div>
        </section>
      </div>
    </div>
  )
}