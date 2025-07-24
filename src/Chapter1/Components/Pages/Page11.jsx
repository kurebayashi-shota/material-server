import React from 'react';
import Thitle from '../../../ThitleLabel/Thitle';
import Logo from './Components/Logo';
import Apache from '../../../assets/Software/apache.png'
import Nginx from '../../../assets/Software/nginx.png'
import Chrome from '../../../assets/Software/chrome.png'
import Edge from '../../../assets/Software/edge.png'
import clickHandlerNum from '../../../Template/Hooks/Handlers/clickHandlerNum';

export default function Page11() {
  const isHidden = clickHandlerNum();
  return (
    <>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        クライアントサーバー方式について
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section  className={`${isHidden == 0 ? "opacity-100" : "opacity-0"} text-center`}>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block'>
          問題
          </h2>
          <div className='text-[1.5rem]'>Webアプリのサーバーソフトとクライアントソフトはご存じですか?</div>
          <div className="font-bold text-[tomato] mt-[5rem] text-center">
            答えは画面をクリックして下さい
          </div>
        </section>
        
        <section className={`${isHidden < 1 ? "opacity-0" : "opacity-500"} transform duration-1000 -mt-[9rem] text-center`}>
          <div className='flex'>
            <span>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                Webサーバー
              </h3>
              <div className='flex'>
                <Logo src={`${Apache}`}>Apache</Logo>
                <Logo src={`${Nginx}`}>NginX</Logo>
              </div>
              <div>etc...</div>
            </span>
            <span className='ml-40'>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                クライアント
              </h3>
              <div className='flex'>
                <Logo src={`${Chrome}`}>GoogleChrome</Logo>
                <Logo src={`${Edge}`}>MicrosoftEdge</Logo>
              </div>
              <div>etc...</div>
            </span>
          </div>
        </section>
        <section className='justify-center'>
          {/* <h2 className='font-bold text-[1.5rem] text-center'>サービス業をイメージして下さい</h2>
          <div className='my-2 w-[30rem] mx-auto'>飲食店はサービス業なので料理を提供する人がサーバー<br/>で食べている人たちがクライアントです。</div>
          <img className='h-30 w-70 mx-auto' src={`${FoodService}`} alt="飲食画像" /> */}
        </section>
     </div>
    </>
  )
}