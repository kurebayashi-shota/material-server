import React from 'react';
import Thitle from '../../../ThitleLabel/Thitle';
import Button from '../Footer/Button/Button';

export default function Page1() {
  const listClass = "display: table border-b-[2px] border-b-[tomato]";
  const olClass = "text-[2rem] mt-[0.5rem] mx-auto xl:text-[3rem]"
  return (
    <>
      <Thitle
        className="bg-white text-[3rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        目次
      </Thitle>
      <div className='flex'>
        <ol className={`${olClass}`}>
          <li className={`${listClass}`}>1:サーバーとは</li>
          <li className={`${listClass}`}>2:コンピューターとは</li>
          <li className={`${listClass}`}>3:サーバーについて</li>
          <li className={`${listClass}`}>4:C/S方式について</li>
          <li className={`${listClass}`}>5:総括</li>
        </ol>
        {/* <ol className={`${olClass}`}>
          <li className={`${listClass}`}>5:OSについて</li>
          <li className={`${listClass}`}>6:Linuxとは</li>
          <li className={`${listClass}`}>4:Webサービスの仕組みについて</li>
          <li className={`${listClass}`}>5・サーバーの操作について</li>
          <li className={`${listClass}`}>3:Webアプリケーションとは</li>
          <li className={`${listClass}`}>4:Webサービスの仕組みについて</li>
          <li className={`${listClass}`}>5・サーバーの操作について</li>
        </ol> */}
      </div>
    </>
  )
}
