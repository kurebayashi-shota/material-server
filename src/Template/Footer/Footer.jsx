import ArrowButtom from './ArrowButtom'
import Navigation from './Navigation';

export default function Footer({ currentPath, chapter, className, pages }) {
  let nextPath = `/chapter${chapter}/page1`;
  let andoPath = `/chapter${chapter}/page${pages.length}`

  if ( currentPath.match(/^\/chapter(\d+)\/page(\d+)$/) ){
    const match = currentPath.match(/^\/chapter(\d+)\/page(\d+)$/);

    const nextPageNum = (parseInt(match[2], 10) + 1);
    const andoPageNum = (parseInt(match[2], 10) - 1);

    nextPath = `/chapter${chapter}/page${nextPageNum}`;
    andoPath = `/chapter${chapter}/page${andoPageNum}`;

    if( nextPageNum == pages.length + 1 ){
      nextPath = `/chapter${chapter}`;
    }else if( andoPageNum == 0 ){
      andoPath = `/chapter${chapter}`;
    }
  }

  const homePath = `/chapter${chapter}`;

  return (
    <>
    <div className={`items-center flex mb-10 mx-10 ${className}`}>
      <ArrowButtom
        to={andoPath}
        className="transform scale-x-[-1]"
      />
      <ArrowButtom
        to={nextPath}
        className='mr-0 ml-auto'
      />
    </div>
    <Navigation home={homePath} pages={pages} />
    </>  )
}