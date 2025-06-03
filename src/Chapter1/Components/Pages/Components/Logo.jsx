import React from 'react'

export default function Logo({ children, src}) {
  return (
    <>
        <figure>
            <img className='w-15 h-15 mx-10' src={`${src}`} alt="Apacheロゴ" />
            <figcaption className='mx-auto'>{children}</figcaption>
        </figure>
    </>
  )
}