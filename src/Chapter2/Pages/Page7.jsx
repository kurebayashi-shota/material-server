import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Server from '../../assets/PcImage/server.png';
import Client from '../../assets/PcImage/pc.png';

export default function Page7({ className }) {
  const contentsClass = "border-[3px] border-[#333] rounded-lg text-[1rem]";
  const contentsClassunder = "pl-15 border-[3px] border-[#333] text-[1rem] w-100 rounded-lg text-center xl:w-130";

  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        仮想マシンとは
      </Thitle>

      <div className='flex items-center justify-center'>
        <div>
          <div className='flex'>
            <section className='mt-[2rem] text-center ml-0'>
              <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
                VM1
              </h2>
              <div className={`w-60 ${contentsClass}`}>ファイル管理用<br/>ソフトウェア</div>
              <div className={`${contentsClass}`}>OS(Linux)</div>
            </section>
            <section className='mt-[2rem] text-center mr-0'>
              <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
                VM2
              </h2>
              <div className={`w-40 ${contentsClass}`}>Webアプリ用<br/>ソフトウェア</div>
              <div className={`${contentsClass}`}>OS(Windows)</div>
            </section>
          </div>
          <div className={`${contentsClassunder}`}>仮想化ソフトウェア</div>
          <div className={`${contentsClassunder}`}>物理マシン(パソコン本体)</div>
        </div>
        <div className='ml-10 w-130 xl:w-200'>
          仮想化ソフトウェアを使用して物理マシンの中にVM(仮想マシン)を
          <br/>作成して仮想パソコンを起動します。左記の例では1台のパソコンで
          <br/>2つのサーバーを稼働する例です。
          <br/>スペックはサーバーの規模に依存するので説明出来ませんが、小規模
          <br/>であれば検討できる構成です。
        </div>
      </div>
    </div>
  )
}