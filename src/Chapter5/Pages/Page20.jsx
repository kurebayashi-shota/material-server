import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsSetup/osSet5.png'
import Create2 from '../../assets/Tutorial/OsSetup/osSet6.png'

export default function Page20() {
  const { detailClass, frameClass } = useOutletContext();
  return (
    <div className="h-[70%]">
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        OSのセットアップ
      </Thitle>
      <StepRayout
        stepContents={[
          {
            id:5,
            text:"今回は[いいえ~]を選択して[次へ(N)]",
            image:Create1,
            imageClass:"h-40 w-auto xl:h-50 rounded-sm",
            nextClass:`mb-[10.1rem] h-[1rem] w-[2rem] -mt-[10.1rem] ml-[14.2rem] xl:mb-[12.7rem] xl:h-[1.2rem] xl:w-[2rem] xl:-mt-[12.7rem] xl:ml-[17.9rem] rounded-sm border-cyan-600 ${frameClass}`,
            redFrameClass:"",
            liElements : []
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:6,
            text:"そのまま[次へ(N)]",
            image:Create2,
            imageClass:"h-30 w-auto xl:h-50 rounded-sm",
            nextClass:`h-[1rem] w-[2rem] -mt-[7.6rem] ml-[15.2rem] xl:mb-[12.7rem] xl:h-[1.5rem] xl:w-[2.8rem] xl:-mt-[12.7rem] xl:ml-[25.5rem] rounded-sm border-cyan-600 ${frameClass}`,
            redFrameClass:"",
            liElements : []
          },
        ]} />
    </div>
  )
}