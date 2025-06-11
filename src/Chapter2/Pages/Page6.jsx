import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import primergy from '../../assets/PcImage/Server/primergy.jpg'
import virtualbox from '../../assets/PcImage/Server/virtualbox.png'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Page6({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61]  inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        仮想マシンとは
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='-mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            仮想マシンについて
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'>
          仮想化ソフトウェアは簡単に言うとパソコンの中にパソコンを作れ
          るソフトウェアです。物理パソコンはスペックが固定なので必要以
          上のリソースを割く事になると非常にもったいなかったり複数サー
          バーを起動する場合にはそれぞれのリソース配分を明確にする事で
          全体が落ちてしまうという事も防げます。
          </div>
        </section>
        <section className='flex justify-center'>
          <div className='my-auto flex flex-col items-center'>
            <img className='h-20 w-20' src={`${primergy}`} alt="クライアント画像" />
            <span>コンピューター</span>
          </div>
          <div className='text-20 my-auto'>100%</div>
          <DoubleArrowIcon className='my-auto mx-[2rem]' sx={{ fontSize:80 }} />
          <div className='my-auto flex flex-col items-center'>
            <img className='h-20 w-20' src={`${virtualbox}`} alt="サーバー画像" />
            <span className='justify-center'>仮想化ソフトウェア</span>
          </div>
          <DoubleArrowIcon className='my-auto mx-[2rem]' sx={{ fontSize:80 }} />
          <div className='flex flex-col items-center border-[black] border-[2px] rounded-xl p-3'>
            <div className='flex'>
              <img className='h-15 w-15 opacity-60' src={`${primergy}`} alt="クライアント画像" />
              <div className='text-20 my-auto'>50%</div>
            </div>
            <span>仮想コンピューター</span>
            <div className='flex'>
              <img className='h-15 w-15 opacity-60' src={`${primergy}`} alt="クライアント画像" />
              <div className='text-20 my-auto'>50%</div>
            </div>
            <span>仮想コンピューター</span>
          </div>
        </section>
        <span className='w-150'>
          上記の図は分かりにくいかもしれませんが、パソコンの中に仮想化ソフトウェアを入れて物理マシンのリソースを50%づつ割り当てて運用するイメージです。
        </span>
      </div>
    </div>
  )
}