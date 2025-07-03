import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import ServerIcon from '../../assets/PcImage/Server/ServerIcon.png'
import CompanyIcon from '../../assets/Other/companyicon.png'
import CloudIcon from '../../assets/PcImage/Server/cloudicon.png'

export default function Page2({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        オンプレ&クラウド
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block -mt-10'>
            サーバーの種類
          </h2>
          <div className='my-4 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
            サーバーは大雑把に2つに分けると下記の2種類に大別出来ます。
          </div>
          <div className='flex justify-center'>
            <span className='flex'>
              <h3 className='h-13 my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                オンプレ
              </h3>
              <div className='border-[#3D5BDB] border-[2px] rounded-xl mt-30 -ml-30'>
                <img className='h-15 w-15 -mt-5 -ml-5' src={`${CompanyIcon}`} alt="ServerIcon" />
                <img className='h-30 w-30' src={`${ServerIcon}`} alt="ServerIcon" />
              </div>
            </span>
            <span className='ml-50'>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                クラウド
              </h3>
              <div className='flex'>
                <img className='h-30 w-30 mt-20' src={`${CloudIcon}`} alt="CloudIcon" />
              </div>
            </span>
          </div>
        </section>
     </div>
    </div>
  )
}