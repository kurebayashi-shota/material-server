import React from 'react'
import Thitle from '../../ThitleLabel/Thitle'

export default function Page7({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        クラウドの種類
      </Thitle>

      <div className='-mt-[3rem] grid place-items-center h-[80%]'>
        <h2 className='text-center font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
          クラウドにはいくつか<br/>種類があり今回は3種類のサービスを紹介します。
        </h2>
        <ul className=''>
          <li>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              IaaS
            </span>
            <p className='w-170'>
              「<strong className='text-[tomato]'>Infrastructure</strong> as a Service」の略です。
              <br/>「オンプレだとハードウェアに当たる部分」と「インフラ回り」を提供してもらいます。
            </p>
          </li>
          <li>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              PaaS
            </span>
            <p className='w-150'>
              「<strong className='text-[tomato]'>Platform</strong> as a Service」の略です。
              <br/>サーバー用ソフトウェアまで提供してくれるのでアプリケーションを入れるだけ。
            </p>
          </li>
          <li>
            <span className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl px-5 py-2 font-bold bg-white inline-block'>
              SaaS
            </span>
            <p className='w-150'>
              「<strong className='text-[tomato]'>Software</strong> as a Service」の略です。
              <br/>アプリケーションの導入までやってくれるので運用ルールや中身のデータ等を用意する必要があります。
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}