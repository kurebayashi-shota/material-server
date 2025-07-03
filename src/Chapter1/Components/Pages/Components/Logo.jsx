import React from 'react'

export default function Logo({ className, children, src}) {
  return (
    <>
        <figure>
            <img className={`h-15 w-auto mx-10 ${className}`} src={`${src}`} alt="Apacheロゴ" />
            <figcaption className='mx-auto'>{children}</figcaption>
        </figure>
    </>
  )
}