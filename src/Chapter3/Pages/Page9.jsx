import React from 'react';
import Thitle from '../../ThitleLabel/Thitle'
import Ubuntu from '../../assets/Os/ubuntu.png'

export default function Page9({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        Linuxとは
      </Thitle>

      <div className='grid place-items-center h-[80%] -mt-10'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            つまりどれを使えばいいの?
          </h2>
        </section>
        <section className='text-center'>
          <div className='flex'>
            <h3 className='text-[4rem]'>初心者は=</h3>
            <img className='h-20 w-20 my-auto ml-5' src={`${Ubuntu}`} alt="Linuxロゴ" />
          </div>
        </section>
        <section className='text-[1.5rem]'>
          GUI操作が出来て、初心者でも使いやすくシェアもかなり高い!
        </section>
      </div>
    </div>
  )
}