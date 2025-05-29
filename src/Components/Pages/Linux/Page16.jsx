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
            選ばれ方が違う!
          </h2>
          <div className='mt-5 flex'>
            <span>
              <div className='flex mx-10'>
                <Logo src={`${Windows}`}>Windows</Logo>
                <Logo src={`${Apple}`}>Mac</Logo>
              </div>
              <h3 className='mt-9 my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                家庭用コンピューター
              </h3>
            </span>
            <span>
              <div className='flex mx-10'>
                <Logo src={`${Linux}`}>Linux<br/>ディストリビューション</Logo>
              </div>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                業務用コンピューター
              </h3>
            </span>
          </div>
        </section>
     </div>
    </>
  )
}