import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Logo from '../../Chapter1/Components/Pages/Components/Logo';
import redhat from '../../assets/Os/redhat.png'
import centos from '../../assets/Os/centos.png'
import alma from '../../assets/Os/alma.png'
import debian from '../../assets/Os/debian.png'
import ubuntu from '../../assets/Os/ubuntu.png'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Page8({ className }) {
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        Linuxとは
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block -mt-10'>
            Linuxの種類
          </h2>
          <div className='flex'>
            <span>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                RHEL系
              </h3>
              <div className='flex'>
                <Logo src={`${redhat}`}>RedHat</Logo>
                <Logo src={`${centos}`}>CentOS</Logo>
                <Logo src={`${alma}`}>AlmaLinux</Logo>
              </div>
              <div>etc...</div>
            </span>
            <span className='ml-20'>
              <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                Debian系
              </h3>
              <div className='flex'>
                <Logo src={`${debian}`}>Debian</Logo>
                <Logo src={`${ubuntu}`}>Ubuntu</Logo>
              </div>
              <div>etc...</div>
            </span>
          </div>
        </section>
        <section className='w-full text-center'>
          <ArrowDownwardIcon className='mx-[200px]' sx={{fontSize:80}} />
          <ArrowDownwardIcon className='mx-[200px]' sx={{fontSize:80}} />
        </section>
        <section className='text-center'>
          <div className='flex'>
            <span>
              <h3 className='mx-[150px] text-[1.5rem] xl:text-[2rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                CUI
              </h3>
              <p className='mt-3'>使いにくい...</p>
            </span>
            <span className='ml-20'>
              <h3 className='mx-[150px] text-[1.5rem] xl:text-[2rem] border-[3px] rounded-xl inline-block px-5 py-2 font-bold bg-white'>
                GUI
              </h3>
              <p className='mt-3'>使いやすい!!!</p>
            </span>
          </div>
        </section>
     </div>
    </div>
  )
}