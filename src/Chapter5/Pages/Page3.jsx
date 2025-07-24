import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Title from '../../Template/Title/TitleLabel';
import Create from '../../assets/Download/Virtual/vstep10.png'

export default function Page3() {
  const { detailClass, frameClass } = useOutletContext();
  return (
    <div className="h-[70%]">
      <Title
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        VMの作成
      </Title>
      <StepRayout
        stepContents={[
          {
            id:1,
            text:"VirtualBoxを起動",
            image:Create,
            imageClass:"h-30 w-auto xl:h-50",
            nextClass:"",
            redFrameClass:``,
            liElements : []
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:2,
            text:"新規をクリック",
            image:Create,
            imageClass:"h-30 w-auto xl:h-50",
            nextClass:"",
            redFrameClass:`h-[2rem] w-[2rem] -mt-[6rem] ml-[11.8rem] xl:-mt-[9.8rem] xl:ml-[20rem] xl:h-[3rem] xl:w-[3rem] ${frameClass}`,
            liElements : []
          },
        ]} />
    </div>
  )
}