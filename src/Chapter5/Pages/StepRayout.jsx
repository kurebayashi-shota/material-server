import React from 'react';

export default function StepRayout({ stepContents ,className }) {
  const textClass = "text-[1.5rem] xl:text-[2rem]";
  return (
    <>
        {stepContents.map((stepContent)=>(  
            <div key={stepContent.id} className={`w-fit mx-auto ${className}`}>
                <section className=''>
                    <h3 className='my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white'>
                        STEP{stepContent.id}
                    </h3>
                    <div className='-mt-10 ml-30'>
                    <p className={textClass}>
                        {stepContent.text}
                    </p>
                    <ul>
                        {stepContent.liElements.map((liElement)=>(
                        <li key={liElement.id} className={liElement.class}>
                            {liElement.value}
                        </li>
                        ))}
                    </ul>
                    <img className={stepContent.imageClass} src={stepContent.image} />
                    <div className={stepContent.nextClass}></div>
                    <div className={stepContent.redFrameClass}></div>
                    </div>
                </section>
            </div>
        ))}
    </>    
  )
}