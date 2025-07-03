import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsSetup/osSet7.png'

export default function Page26() {
  const { detailClass, frameClass } = useOutletContext();
  return (
    <div className="h-[70%]">
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        VMの設定
      </Thitle>
      <StepRayout
        stepContents={[
          {
            id:12,
            text:"起動をクリック",
            image:Create1,
            imageClass:"h-10 w-auto xl:h-30",
            nextClass:"",
            redFrameClass:`h-[2rem] w-[2rem] -mt-[2rem] ml-[18.5rem] xl:-mt-[6rem] xl:ml-[55rem] xl:h-[6rem] xl:w-[6rem] ${frameClass}`,
            liElements : []
          },
        ]} />
    </div>
  )
}