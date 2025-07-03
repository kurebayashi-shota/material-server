import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsSetup/osSet3.png'
import Create2 from '../../assets/Tutorial/OsSetup/osSet4.png'

export default function Page19() {
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
            id:3,
            text:"[次へ(N)]",
            image:Create1,
            imageClass:"h-30 w-auto xl:h-50",
            nextClass:`mb-[7.6rem] h-[1.1rem] w-[2.1rem] -mt-[7.6rem] ml-[15.9rem] xl:mb-[12.7rem] xl:h-[1.5rem] xl:w-[2.9rem] xl:-mt-[12.7rem] xl:ml-[26.7rem] rounded-sm border-cyan-600 ${frameClass}`,
            redFrameClass:"",
            liElements : []
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:4,
            text:"[skip for now]を選択して[次へ(N)]",
            image:Create2,
            imageClass:"h-30 w-auto xl:h-50",
            nextClass:`h-[1.1rem] w-[2.1rem] -mt-[7.6rem] ml-[17.1rem] xl:mb-[12.7rem] xl:h-[1.5rem] xl:w-[3rem] xl:-mt-[12.6rem] xl:ml-[28.7rem] rounded-sm border-cyan-600 ${frameClass}`,
            redFrameClass:`h-[0.7rem] w-[3rem] mt-[5.9rem] ml-[0.5rem] xl:h-[1rem] xl:w-[4rem] xl:-mt-[2.5rem] xl:ml-[1.2rem] rounded-sm border-cyan-600 ${frameClass}`,
            liElements : []
          },
        ]} />
    </div>
  )
}