import primergy from '../../../assets/PcImage/Server/primergy.jpg'
import virtualbox from '../../../assets/PcImage/Server/virtualbox.png'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Component5() {
  return (
    <>
        <section className='-mt-[2rem] -mb-[7rem] flex justify-center'>
          <div className='flex flex-col items-center'>
            <img className='h-30 w-30' src={`${virtualbox}`} alt="サーバー画像" />
            <span className='justify-center'>仮想化ソフトウェア</span>
          </div>
          <DoubleArrowIcon className='my-auto mx-[2rem]' sx={{ fontSize:100 }} />
          <div className='flex flex-col items-center'>
            <img className='h-30 w-30' src={`${primergy}`} alt="クライアント画像" />
            <span>仮想コンピューター</span>
          </div>
        </section>
    </>
  )
}
