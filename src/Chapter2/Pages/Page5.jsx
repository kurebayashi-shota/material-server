import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import primergy from '../../assets/Pcimage/Server/primergy.jpg'
import virtualbox from '../../assets/Pcimage/Server/virtualbox.png'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Page5({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        仮想マシンとは
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
            仮想マシンとは
          </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'>
            さらに分かづらくしているのが仮想マシンだと思います。皆様が
            普段お使いのパソコンは物理マシンがありその中にOSが入ってい
            ると思いますが、小規模アプリケーションやクラウドでは必要な
            リソースが極端に少なかったり、スケーラビリティが求められま
            す。そういった場面では物理マシンのリソースを仮想化という
            技術でリソースを分離し、これを解決しています。
          </div>
        </section>
        <section className='mt-[3rem] flex justify-center'>
          <div className='flex flex-col items-center'>
            <img className='h-30 w-30' src={`${virtualbox}`} alt="サーバー画像" />
            <span className='justify-center'>仮想化ソフトウェア</span>
          </div>
          <DoubleArrowIcon className='my-auto mx-[2rem]' sx={{ fontSize:100 }} />
          <div className='flex flex-col items-center'>
            <img className='h-30 w-30' src={`${primergy}`} alt="クライアント画像" />
            <span>コンピューター</span>
          </div>
        </section>
      </div>
    </div>
  )
}