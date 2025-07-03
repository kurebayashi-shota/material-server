import React from 'react';
import Thitle from '../../ThitleLabel/Thitle'
import ServerIcon from '../../assets/PcImage/Server/servericon.png'
import CompanyIcon from '../../assets/Other/companyicon.png'

export default function Page3({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        オンプレ&クラウド
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            オンプレとは?
          </h2>
          <div className='xl:text-[1.5rem]'>
            オンプレは「自分の会社やお店の建物の中に、サーバーやパソコンを置いて使うこと」です。
          </div>
        </section>
        <section className='text-center flex'>
            <div className='border-[#3D5BDB] border-[2px] rounded-xl mt-10 mr-10'>
              <img className='h-15 w-15 -mt-5 -ml-5' src={`${CompanyIcon}`} alt="ServerIcon" />
              <img className='h-30 w-30' src={`${ServerIcon}`} alt="ServerIcon" />
            </div>
            <div>
              <h3 className='mt-5 text-[2rem] text-[tomato] text-shadow-lg border-black border-[2px] rounded-xl'>ポイント</h3>
              <ul className='text-left'>
                <li className='border-b-[tomato] border-b-[2px] mt-2'>・設備は自分たちの場所にある</li>
                <li className='border-b-[tomato] border-b-[2px] mt-2'>・ネットワークも社内でつながっていることが多い</li>
                <li className='border-b-[tomato] border-b-[2px] mt-2'>・自分たちで管理やメンテナンスをする必要がある<br/>(委託している場合を除く)</li>
              </ul>
            </div>
        </section>
        <section className=''>
          <h2 className='text-[2rem] mt-10'>オンプレ=オンプレミス</h2>
        </section>
      </div>
    </div>
  )
}
