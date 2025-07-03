import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Server from '../../assets/PcImage/server2.png'
import HyperV from '../../assets/PcImage/Server/hyper-v.png'
import Logo from '../../Chapter1/Components/Pages/Components/Logo';

export default function Page2({ className }) {
  const LogoClass = "h-25 w-25";
  const liClass = "mx-17";
  const ArrowClass = "mx-20";
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        クラウドの種類
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block -mt-10'>
            クラウドサーバーはこんな感じ
          </h2>
          <div className='justify-center'>
            <span className='ml-50'>
              <ul className='flex justify-center'>
                <li className={liClass}>会社A</li>
                <li className={liClass}>会社B</li>
                <li className={liClass}>会社C</li>
                <li className={liClass}>会社D</li>
              </ul>
              <ul className='flex justify-center'>
                <li className={ArrowClass}>↓</li>
                <li className={ArrowClass}>↓</li>
                <li className={ArrowClass}>↓</li>
                <li className={ArrowClass}>↓</li>
              </ul>
              <div className='flex'>
                <Logo className={LogoClass} src={HyperV} alt="hyper-v" />
                <Logo className={LogoClass} src={HyperV} alt="hyper-v" />
                <Logo className={LogoClass} src={HyperV} alt="hyper-v" />
                <Logo className={LogoClass} src={HyperV} alt="hyper-v" />
              </div>
              <img className='h-50 w-150 mx-auto' src={`${Server}`} alt="Server" />
            </span>
          </div>
        </section>
     </div>
    </div>
  )
}