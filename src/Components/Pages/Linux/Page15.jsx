import React from 'react';
import Thitle from '../Thitle';
import Logo from './Components/Logo';
import Windows from '../../assets/windows.png'
import Apple from '../../assets/apple.png'
import Linux from '../../assets/linux.png'

export default function Page15() {
  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block'>
            パソコンでよく使われるOS
          </h2>
          <div className='mt-5 flex'>
            <span>
              <div className='flex'>
                <Logo src={`${Windows}`}>Windows</Logo>
                <Logo src={`${Apple}`}>Mac</Logo>
                <Logo src={`${Linux}`}>Linux<br/>ディストリビューション</Logo>
              </div>
              <div className='-mt-3'>etc...</div>
            </span>
          </div>
        </section>
     </div>
    </>
  )
}