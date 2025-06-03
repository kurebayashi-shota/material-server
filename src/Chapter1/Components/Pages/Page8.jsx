import React from 'react';
import Thitle from '../../../ThitleLabel/Thitle';
import Server from '../../../assets/PcImage/server.png'
import Client from '../../../assets/PcImage/pc.png'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

export default function Page8() {
  return (
    <>
      <Thitle className="bg-white text-[2.5rem] text-[#174C61] w-[40.5rem] border-[5px] border-[#333] mt-[1rem] rounded-xl">クライアントサーバー方式について</Thitle>

      <div className='grid place-items-center h-[85%]'>
        <section className='mt-[1rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block'>クライアントサーバー方式とは</h2>
          <div className='mt-1 w-[30rem] mx-auto'>クライアントとサーバーという2つの役割を持つコンピュータが通信し、サービスや情報を共有する方式</div>
        </section>
        <section className='flex justify-center'>
          <div className='flex flex-col items-center'>
            <img className='h-20 w-20' src={`${Server}`} alt="サーバー画像" />
            <span className='justify-center'>サーバー</span>
          </div>
          <SettingsEthernetIcon className='my-auto mx-[2rem]' sx={{ fontSize:100 }} />
          <div className='flex flex-col items-center'>
            <img className='h-20 w-20' src={`${Client}`} alt="クライアント画像" />
            <span>クライアント</span>
          </div>
        </section>
        <section className='bg-white p-3 text-center border-[3px] rounded-xl mb-10'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            クライアントとサーバーに処理を分散させる方式
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
            <strong>
              ですが！
            </strong>
            分かりずらければサーバーが提供しているシステムをクライアントで操作するというイメージでも大丈夫です。
          </div>
        </section>
      </div>
    </>
  )
}