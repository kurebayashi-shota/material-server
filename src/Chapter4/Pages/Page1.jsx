import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';

export default function Page1({ className }) {
  const listClass = "display: table border-b-[2px] border-b-[tomato]";
  const olClass = "text-[2rem] mt-[0.5rem] mx-auto xl:text-[3rem]"
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[3rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        目次
      </Thitle>
      <div className='flex'>
        <ol className={`${olClass}`}>
          <li className={`${listClass}`}>1:オンプレ&クラウド</li>
          <li className={`${listClass}`}>2:クラウドの種類</li>
          {/* <li className={`${listClass}`}>3:Ubuntuとは</li> */}
        </ol>
      </div>
    </div>
  )
}
