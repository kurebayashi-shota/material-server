import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Server from '../../assets/PcImage/server.png';
import Client from '../../assets/PcImage/pc.png';

export default function Page10({ className }) {
  const contentsClass = "border-[3px] border-[#333] rounded-lg text-[1rem]";
  const contentsClassunder = "pl-15 border-[3px] border-[#333] text-[1rem] w-100 rounded-lg text-center xl:w-130";

  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        ホスト型の構成
      </Thitle>

      <div className='flex items-center justify-center'>
        <div>
          <div className='flex'>
            <section className='mt-[2rem] text-center ml-0'>
              <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
                VM1
              </h2>
              <img className='mt-5 mb-5 h-30 w-60 xl:h-40 xl:w-80 rounded-xl' src={`${Server}`} alt="" />
              <div className={`${contentsClass}`}>ファイル管理用<br/>ソフトウェア</div>
              <div className={`${contentsClass}`}>ゲストOS</div>
            </section>
            <section className='mt-[2rem] text-center mr-0'>
              <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
                VM2
              </h2>
              <img className='mt-5 mb-5 h-30 w-40 xl:h-40 xl:w-50' src={`${Client}`} alt="" />
              <div className={`${contentsClass}`}>Webアプリ用<br/>ソフトウェア</div>
              <div className={`${contentsClass}`}>ゲストOS</div>
            </section>
          </div>
          <div className={`${contentsClassunder}`}>VirtualBox(仮想マシン)</div>
          <div className={`${contentsClassunder}`}>ホストOS</div>
          <div className={`${contentsClassunder}`}>物理マシン(パソコン本体)</div>
        </div>
        <div className='ml-10 w-130 xl:w-200'>
          ホスト型は通常のパソコンにホスト型の仮想化ソフトウェア
          (例:VirtualBox)で仮想マシンを作ってその中にもう一台のパソコンを動かすイメージです。
          <br/>windowsOSを入れればwindowsPCになりますし、MacOSをいれればMacPCになります。
          <br/>ハードウェアはホストの物理マシンのどれくらいのリソースを割り振るか設定してスペックが決まります。
        </div>
      </div>
    </div>
  )
}