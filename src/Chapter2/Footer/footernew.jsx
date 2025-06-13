import { useLocation } from 'react-router-dom'
import ArrowButtom from './ArrowButtom'

export default function Footer({ className, pages }) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  let match = currentPath.match(/^\/chapter(\d+).*$/);
  const chapter = match[1];
  let nextPath = `/chapter${chapter}/page1`;
  let andoPath = `/chapter${chapter}/page${pages.length}`
  
  if ( currentPath.match(/^\/chapter(\d+)\/page(\d+)$/) ){
    const match = currentPath.match(/^\/chapter(\d+)\/page(\d+)$/);
    const currentPageNum = parseInt(match[2], 10);
    const nextPageNum = currentPageNum + 1;
    const andoPageNum = currentPageNum - 1;
    nextPath = `/chapter${chapter}/page${nextPageNum}`;
    andoPath = `/chapter${chapter}/page${andoPageNum}`;
    if( nextPageNum == pages.length + 1 ){
      nextPath = `/chapter${chapter}`;
    }else if( andoPageNum == 0 ){
      andoPath = `/chapter${chapter}`;
    }
  }


  // if ( !chapter && !page ){
  //   nextPath = `!`;
  // } else if ( match[1] == pages.length ){
  //   nextPath = `length`;
  // } else if ( chapter && page ){
  //   nextPath = `/`
  // } else {
  //   nextPath = '/';
  // }

  // if ( !match ){
  //   nextPath = `/chapter${chapter}/page${page}`;
  // }else if( match[1] == pages.length ){
  //   nextPath = `/chapter${chapter}`;
  // }else if(match){
  //   const currentPageNum = parseInt(match[1], 10);
  //   const nextPageNum = currentPageNum + 1;
  //   nextPath = `/chapter${chapter}/page${nextPageNum}`;
  //   if(currentPageNum > 1){
  //     const andoPageNum = currentPageNum - 1;
  //     andoPath = `/chapter${chapter}/page${andoPageNum}`;
  //   }
  // } else {
  //   nextPath = '/';
  // }

  return (
    <div className={`flex mb-10 mx-10 ${className}`}>
      <ArrowButtom
       to={andoPath} 
       className="transform scale-x-[-1]" />
      <ArrowButtom
       to={nextPath} 
       className='mr-0 ml-auto'/>
    </div>
  )
}