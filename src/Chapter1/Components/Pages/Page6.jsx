import React from 'react';
import Thitle from '../../../ThitleLabel/Thitle';

export default function Page4() {
  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        サーバーについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            サーバーはサーバー用のソフトウェアを動かしているだけ
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
            サーバー用のソフトウェアが動いていればリクエストを受け付けてくれて処理をしてくれます。
          </div>
        </section>
        <section className='text-center'>
          <h2 className='font-bold text-[1.5rem] w-[40rem] flex-wrap mx-auto xl:text-[2rem] xl:w-[60rem]'>
            つまりあなたのパソコンもサーバー用ソフトウェアさえ入っていればサーバーになります。
          </h2>
          <div className='mt-[1rem] w-[30rem] mx-auto xl:text-[1.5rem]'>
            ※規模によってハードウェアは異なります。
          </div>
        </section>
      </div>
    </>
  )
}