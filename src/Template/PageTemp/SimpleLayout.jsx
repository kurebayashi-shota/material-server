import React from 'react';
import { useAddData } from '../Hooks/useAddData'
import { useAddArrow } from '../Hooks/useAddArrow'
import TitleLabel from '../Title/TitleLabel';
import Logo from '../../Chapter1/Components/Pages/Components/Logo'

export default function SimpleLayout({ adjustmentClass, className, dataNum, chapter }) {
  let data = useAddData({chapter});
  let arrow = useAddArrow(data[dataNum].Arrow);
  
  return (
    <div className={className}>
      <TitleLabel
        className="mt-10"
      >
        {data[dataNum].Label}
      </TitleLabel>

      <div
        className={`mt-[3rem] ${adjustmentClass} grid place-items-center min-h-[100%]`}
      >
        <section className='text-center'>
          {data[dataNum].ImagesOver?.map((over, index)=>(
            <Logo
              key={index}
              className={`${over.class}`}
              src={over.src}
              alt={over.alt}
            >{over.value}</Logo>
          ))}
          <h2
            key={data[dataNum].Title}
            className={`font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem] ${data[dataNum].TitleClass}`}
          >
            {data[dataNum].Title}
          </h2>
          <div
            key={data[dataNum].Value}
            className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'
          >
            {data[dataNum].TitleDetail}
          </div>
        </section>
        <section className='flex'>
          {data[dataNum].ImagesUnder?.map((under, index)=>(
            <React.Fragment key={index}>
              <Logo
                key={index}
                className={`${under.class}`}
                src={under.src}
                alt={under.alt}
              >
                {under.value}
              </Logo>
              {index === 0 && data[dataNum].ImagesUnder.length > 1 && arrow}
            </React.Fragment>
          ))}
        </section>
      </div>
    </div>
  )
}