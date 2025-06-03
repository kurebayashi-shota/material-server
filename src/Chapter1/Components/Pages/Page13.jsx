import React from 'react';
import Thitle from '../../../ThitleLabel/Thitle';

export default function Page13() {
  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        総括
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            サーバーはただのコンピューターです。
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
            皆さんもパソコンに必要なソフトをインストールして使っていると思いますが、サーバーもサーバー用のソフトウェアをインストールして必要なサービス時間の間に稼働し続けているだけです。
          </div>
        </section>
        <section className='mt-[1rem] text-center'>
          <h2 className='font-bold text-[1.5rem] w-[40rem] flex-wrap mx-auto xl:text-[2rem] xl:w-[60rem]'>
            ただサービス時間内稼働しているという事はWebサービスであれば基本的に24時間365日稼働し続けます。
          </h2>
          <div className='mt-5 w-[50rem] mx-auto xl:text-[1.5rem] mb-10'>
            パソコンにとってそれはかなりの負担であり普通のパソコンでは起こりえない障害が発生する可能性があり、そ
            れらを予測して必要であれば調査するのはかなり難しいですがただのパソコンと思えば少しはとっつきやすいと
            思いこの勉強会を企画しました。ご清聴頂きありがとうございました。
          </div>
        </section>
      </div>
    </>
  )
}