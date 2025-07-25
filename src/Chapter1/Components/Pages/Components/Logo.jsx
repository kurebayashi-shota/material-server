import React from 'react'

export default function Logo({ className, children, src}) {
  return (
    <>
        <figure className='mx-[2rem] xl:mx-[4rem] text-center'>
            <img className={`h-15 xl:h-25 w-auto mx-auto ${className}`} src={`${src}`} alt="Apacheロゴ" />
            <figcaption className=''>{children}</figcaption>
        </figure>
    </>
  )
}