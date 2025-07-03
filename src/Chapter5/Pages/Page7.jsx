import { useOutletContext} from 'react-router-dom';
import Thitle from '../../ThitleLabel/Thitle'
import Create from '../../assets/Tutorial/VmCreate/vmCreate4.png'
import StepRayout from './StepRayout'

export default function Page7() {
  const { detailClass, frameClass } = useOutletContext();

  const stepContents = [
    {
      id:6,
      step:6,
      text:"変更せずに[次へ(N)]",
      image:Create,
      imageClass:'h-60 w-auto xl:h-100',
      nextClass:`h-[1rem] w-[3rem] -mt-[1.3rem] ml-[27rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2rem] xl:ml-[45rem] ${frameClass}`,
      redFrameClass:``,
      liElements : []
    },
  ]
  
  return (
  <div className="h-[70%] justify-center">
    <Thitle
      className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
    >
      VMの作成
    </Thitle>
    <StepRayout stepContents={stepContents} />
  </div>
  )
}