import React from 'react';
import Thitle from '../Thitle';
import Server from '../../assets/server.png'
import Client from '../../assets/pc.png'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Page4() {
  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        コンピューターとは
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            パソコンについて
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'>
            パソコンと言われて想像される物で合っていると思います。
            言葉としてはパーソナルコンピューターの略ですが、誤解を恐れずに言うとサーバーもパソコンです。
          </div>
        </section>
        <section className='mt-[3rem] flex justify-center'>
          <div className='flex flex-col items-center'>
            <img className='h-30 w-30' src={`${Server}`} alt="サーバー画像" />
            <span className='justify-center'>コンピューター(サーバー)</span>
          </div>
          <DoubleArrowIcon className='my-auto mx-[2rem]' sx={{ fontSize:100 }} />
          <ul className='text-center my-auto'>
            <li>OS</li>
            <li>CPU</li>
            <li>メモリ</li>
            <li>etc...</li>
          </ul>
          <DoubleArrowIcon className='my-auto mx-[2rem] transform scale-x-[-1]' sx={{ fontSize:100 }} />
          <div className='flex flex-col items-center'>
            <img className='h-30 w-30' src={`${Client}`} alt="クライアント画像" />
            <span>コンピューター(パソコン)</span>
          </div>
        </section>
      </div>
    </>
  )
}