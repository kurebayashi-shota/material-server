import React from 'react';
import Thitle from '../../ThitleLabel/Thitle';
import Logo from '../../Chapter1/Components/Pages/Components/Logo';
import Aws from '../../assets/Service/aws.png'
import Azure from '../../assets/Service/azure.png'
import Gcp from '../../assets/Service/gcp.png'

export default function Page6({ className }) {
  const Logosize = "h-30 w-30"
  return (
    <div className={`${className}`}>
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        クラウドの種類
      </Thitle>

      <div className='grid place-items-center h-[80%]'>
        <section className='mt-[2rem] text-center'>
          <h2 className='font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block'>
            3大クラウドプロバイダー
          </h2>
          <div className='mt-5 flex'>
            <span>
              <div className='flex'>
                <Logo className={Logosize} src={`${Aws}`}>Amazon Web Services</Logo>
                <Logo className={Logosize} src={`${Azure}`}>Microsoft Azure</Logo>
                <Logo className={Logosize} src={`${Gcp}`}>Google Cloud Platform</Logo>
              </div>
            </span>
          </div>
        </section>
     </div>
    </div>
  )
}