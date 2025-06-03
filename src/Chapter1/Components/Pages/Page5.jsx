import React from 'react';
import Thitle from '../../../ThitleLabel/Thitle';
import Server from '../../../assets/PcImage/server2.png'
import Client from '../../../assets/PcImage/pc.png'

export default function Page4() {

  const contentsClass="border-[3px] border-[#333] rounded-lg text-[1rem] ml:text-[2rem]";

  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        サーバーについて
      </Thitle>

      <div className='flex items-center h-[70%]'>
        <section className='mt-[2rem] text-center mx-auto'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            サーバー
          </h2>
          <img className='mt-5 mb-5 h-30 w-60 xl:h-40 xl:w-80' src={`${Server}`} alt="" />
          <div className={`${contentsClass}`}>サーバー用<br/>ソフトウェア</div>
          <div className={`${contentsClass}`}>OS</div>
          <div className={`${contentsClass}`}>メモリ</div>
          <div className={`${contentsClass}`}>CPU</div>
        </section>
        <section className='mt-[2rem] text-center mx-auto xl:ml-[-200px]'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            クライアント
          </h2>
          <img className='mt-5 mb-5 h-30 w-40 xl:h-40 xl:w-50' src={`${Client}`} alt="" />
          <div className={`${contentsClass}`}>クライアント用<br/>ソフトウェア</div>
          <div className={`${contentsClass}`}>OS</div>
          <div className={`${contentsClass}`}>メモリ</div>
          <div className={`${contentsClass}`}>CPU</div>
        </section>
      </div>
    </>
  )
}