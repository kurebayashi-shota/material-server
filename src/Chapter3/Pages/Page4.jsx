import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Cui from '../../assets/Pcimage/cui.png'
import Gui from '../../assets/Pcimage/gui.png';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ClearIcon from '@mui/icons-material/Clear';

export default function Page4({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSについて
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <div className='flex'>
            <img className='h-40 mx-auto' src={`${Cui}`} alt="CUI画像" />
            <DoubleArrowIcon className='my-auto mx-[2rem] transform scale-x-[-1]' sx={{ fontSize:100 }} />
            <ClearIcon className='-mr-55 -mt-5 text-[tomato] z-2' sx={{ fontSize:200 }}/>
            <img className='h-40 mx-auto' src={`${Gui}`} alt="CUI画像" />
          </div>
        <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]'>
          改めて整理させて頂きます。
        </h2>
          <div className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[40rem]'>
          サーバーは普通のパソコンですが、クライアントからの要求に対して人間が操作してレスポンスを返すわけではなくソフトウェアが勝手に受け取って勝手にレスポンスを返してくれるので起動しているだけで仕事をしてくれます。なので人間が操作しやすいGUIはいらない機能という事です。
          </div>
        </section>
      </div>
    </div>
  )
}