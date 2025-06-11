import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Logo from '../../Chapter1/Components/Pages/Components/Logo';
import blade from '../../assets/PcImage/Server/blade.jpg'
import tower from '../../assets/PcImage/Server/tower.jpg'
import rack from '../../assets/PcImage/Server/rack.jpg'
import primergy from '../../assets/PcImage/Server/primergy.jpg'
import endeavor from '../../assets/PcImage/Server/endeavor.jpg'
import virtualbox from '../../assets/PcImage/Server/virtualbox.png'
import hyperv from '../../assets/PcImage/Server/hyper-v.png'

export default function Page3({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        ハードについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block'>
            ハードウェアの違い
          </h2>
          <div className='flex'>
            <span>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                大規模(データセンター等)
              </h3>
              <div className='flex'>
                <Logo src={`${tower}`}>タワー型</Logo>
                <Logo src={`${rack}`}>ラック型</Logo>
                <Logo src={`${blade}`}>ブレード型</Logo>
              </div>
              <div>etc...</div>
            </span>
            <span className='ml-20'>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                小規模(個人や小規模な商用)
              </h3>
              <div className='flex'>
                <Logo src={`${primergy}`}>富士通<br/>PRIMERGY</Logo>
                <Logo src={`${endeavor}`}>EPSON<br/>Endeavor</Logo>
              </div>
              <div>etc...</div>
            </span>
            <span className='ml-20'>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                極小規模やクラウド
              </h3>
              <div className='flex'>
                <Logo src={`${virtualbox}`}>Oracle<br/>VirtualBox</Logo>
                <Logo src={`${hyperv}`}>Microsoft<br/>Hyper-V</Logo>
              </div>
              <div>etc...</div>
            </span>
          </div>
        </section>
     </div>
    </div>
  )
}