import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import CloudKinds from '../../assets/PcImage/Server/cloudkinds.png'

export default function Page8({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        クラウドの種類
      </Thitle>

      <div className='grid place-items-center h-[85%]'>
        <img className='h-80 w-160 xl:h-100 xl:w-200' src={`${CloudKinds}`} alt="クライアント画像" />
        <section className='bg-white p-3 text-center border-[3px] rounded-xl mb-10'>
          <h2 className='font-bold text-[2rem] inline-block xl:text-[3rem]'>
            上図は初見ではよく分からないかもしれませんが<br/>それぞれのサービスの違いを示したよくある図です。
          </h2>
        </section>
      </div>
    </div>
  )
}