import { useLocation } from 'react-router-dom'
import ArrowButtom from './ArrowButtom'

export default function Footer({ className, pages }) {
  const location = useLocation();

  let nextPath = "/chapter3/page1";
  let andoPath = "/chapter3";
  const currentPath = location.pathname;
  const match = currentPath.match(/^\/chapter3\/page(\d+)$/);

  if ( !match ){
    nextPath = "/chapter3/page1";
  }else if( match[1] == pages.length ){
    nextPath = '/chapter3';
  }else if(match){
    const currentPageNum = parseInt(match[1], 10);
    const nextPageNum = currentPageNum + 1;
    nextPath = `/chapter3/page${nextPageNum}`;
    if(currentPageNum > 1){
      const andoPageNum = currentPageNum - 1;
      andoPath = `/chapter3/page${andoPageNum}`;
    }
  } else {
    nextPath = '/';
  }

  return (
    <div className={`flex mb-10 mx-10 ${className}`}>
      <ArrowButtom to={andoPath} className="transform scale-x-[-1]" />
      <ArrowButtom to={nextPath} className='mr-0 ml-auto'/>
    </div>
  )
}