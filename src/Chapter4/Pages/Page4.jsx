import React from 'react';
import Thitle from '../../ThitleLabel/Thitle'
import CloudIcon from '../../assets/PcImage/Server/cloudicon.png'

export default function Page4({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        オンプレ&クラウド
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            クラウドとは?
          </h2>
          <div className='xl:text-[1.5rem]'>
            クラウドは「他社が提供するサーバーやサービスをインターネット経由で利用すること」です。
          </div>
        </section>
        <section className='text-center flex'>
            <img className='h-30 w-30 my-auto' src={`${CloudIcon}`} alt="CloudIcon" />
            <div className='ml-10'>
              <h3 className='mt-5 text-[2rem] text-[tomato] text-shadow-lg border-black border-[2px] rounded-xl'>ポイント</h3>
              <ul className='text-left'>
                <li className='border-b-[tomato] border-b-[2px] mt-2'>・設備は契約先が管理するので用意する必要がない</li>
                <li className='border-b-[tomato] border-b-[2px] mt-2'>・基本的にはWAN経由でアクセスする必要がある</li>
                <li className='border-b-[tomato] border-b-[2px] mt-2'>・管理やメンテナンスは契約の範囲内では不要、それ以外は必要</li>
              </ul>
            </div>
        </section>
        <section className=''>
          <h2 className='text-[2rem] mt-10'>今回は遠隔地にオンプレで用意するケースは<br/>含まれていません。</h2>
        </section>
      </div>
    </div>
  )
}