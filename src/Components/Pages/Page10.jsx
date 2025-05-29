import React from 'react';
import Thitle from '../Thitle';
import Server from './Components/Server';
import Client from './Components/Client'
import Restaurant from './Components/Restaurant';
import Customer from './Components/Customer';
import ArrowBack from './Components/ArrowBack';
import ArrowForward from './Components/ArrowForward';

export default function Page10() {
  return (
    <>
      <Thitle className="bg-white text-[2.5rem] text-[#174C61] w-[40.5rem] border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]">クライアントサーバー方式について</Thitle>
      <span className='border-b-[3px] border-b-[tomato] text-xl flex justify-center mt-10'>
        あなたがお店にハンバーガーを注文して受け取るように<br/>ブラウザから検索してHPを閲覧するのも一緒です。
      </span>
      <div className='flex justify-center items-center h-[50%]'>
        <section className='mt-[1rem] justify-center mx-auto'>

          <h2 className='font-bold text-[1.5rem] text-center'>
            飲食店
          </h2>

          <div className='flex mt-[1rem]'>
            <Restaurant />
            <ArrowBack>ハンバーガー下さい</ArrowBack>
            <Customer />
          </div>

          <div className='flex mt-[1rem]'>
            <Restaurant />
            <ArrowForward>ハンバーガーです</ArrowForward>
            <Customer />
          </div>

        </section>
        <section className='mt-[1rem] justify-center mr-auto ml-[-100px] xl:-ml-[500px]'>

          <h2 className='font-bold text-[1.5rem] text-center'>
            パソコン
          </h2>

          <div className='flex mt-[1rem]'>
            <Server />
            <ArrowBack>あなたのホームページ見せて下さい</ArrowBack>
            <Client />
          </div>

          <div className='flex mt-[1rem]'>
            <Server />
            <ArrowForward>ホームページです。</ArrowForward>
            <Client />
          </div>

        </section>
      </div>
    </>
  )
}