import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ButtonChildrenContext } from './ButtonContext';

export default function Button({ page, children, className }) {
  // const children = useContext(ButtonChildrenContext);

  return (
    <div className='bg-white rounded-full h-[4rem] w-[3.8rem] text-center -mt-[32px]'>
      <Link to={`/${page}`} className={`px-[14px] pb-[7px] pt-[22px] text-white bg-[#737883] rounded-full font-bold hover:bg-[#666] ${className}`}>
        <button className="text-[2.5rem]">{children}</button>
      </Link>
    </div>
  )
}
