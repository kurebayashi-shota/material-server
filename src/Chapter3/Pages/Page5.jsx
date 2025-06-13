import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Linux from '../../assets/Os/linux.png'

export default function Page({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
        <img className='h-40 mx-auto' src={`${Linux}`} alt="CUI画像" />
        <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            そこで安価で使用できるLinuxが採用される事が殆どです。
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
            でもLinuxって名前は聞いたことがあるけどなにか分からないという人もいると思うのでLinuxについて見ていきましょう!
          </div>
        </section>
      </div>
    </div>
  )
}