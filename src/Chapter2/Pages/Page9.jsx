import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Logo from '../../Chapter1/Components/Pages/Components/Logo';
import virtualbox from '../../assets/PcImage/Server/virtualbox.png'
import hyperv from '../../assets/PcImage/Server/hyper-v.png'

export default function Page9({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        仮想化ソフトウェアについて
      </Thitle>

      <div className='flex items-center justify-center'>
        <div className='grid place-items-center h-[80%]'>
          <section className='mt-[2rem] text-center'>
            <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block'>
              仮想化ソフトウェアの種類
            </h2>
            <div className='flex'>
              <span>
                <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                  ホスト型
                </h3>
                <div className='flex'>
                  <Logo src={`${virtualbox}`}>Oracle<br/>VirtualBox</Logo>
                </div>
              </span>
              <span className='ml-20'>
                <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                  ハイパーバイザー型
                </h3>
                <div className='flex'>
                  <Logo src={`${hyperv}`}>Microsoft<br/>Hyper-V</Logo>
                </div>
              </span>
            </div>
          </section>
        </div>
        <section className='m-10'>
          <span>
            <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              ホスト型
            </h3>
            <div className='w-100'>
              これが一番イメージしやすいと思いますが、デスクトップアイコンから起動してVMを管理します。
              通常起動するOSをホストOSと呼びVM内で起動するOSをゲストOSと呼びます。設定はGUIで比較的簡単です。
            </div>
          </span>
          <span className=''>
            <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              ハイパーバイザー型
            </h3>
            <div className='w-100'>
              ホストを必要としないのでリソースを最大限活用できる仮想化ソフトです。
              設定が比較的難しいので玄人向け。
            </div>
          </span>
        </section>
      </div>
    </div>
  )
}