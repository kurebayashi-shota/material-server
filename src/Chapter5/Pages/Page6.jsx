import { useOutletContext} from 'react-router-dom';
import Title from '../../Template/Title/TitleLabel';
import Create from '../../assets/Tutorial/VmCreate/vmCreate3.png'
import StepRayout from './StepRayout'

export default function Page6() {
  const { detailClass, frameClass } = useOutletContext();

  const stepContents = [
    {
      id:5,
      step:5,
      text:"メモリを変更後に[次へ(N)]",
      image:Create,
      imageClass:'h-60 w-auto xl:h-100',
      nextClass:`h-[0.8rem] w-[3rem] -mt-[1.3rem] ml-[26.7rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2.2rem] xl:ml-[44.5rem] ${frameClass}`,
      redFrameClass:`h-[1rem] w-[2.5rem] -mt-[11rem] ml-[30rem] xl:h-[1.5rem] xl:w-[4rem] xl:-mt-[18.3rem] xl:ml-[50.2rem] ${frameClass}`,
      liElements : [
        { id:1, class:`inline-block ${detailClass}`,value:"・メインメモリを一応[4000MBにする]" },
      ]
    },
  ]
  
  return (
  <div className="h-[70%]">
    <Title
      className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
    >
      VMの作成
    </Title>
    <StepRayout stepContents={stepContents} />
  </div>
  )
}