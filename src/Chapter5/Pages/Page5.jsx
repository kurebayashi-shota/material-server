import { useOutletContext} from 'react-router-dom';
import Title from '../../Template/Title/TitleLabel';
import Create from '../../assets/Tutorial/VmCreate/vmCreate2.png'
import StepRayout from './StepRayout'

export default function Page5() {
  const { detailClass, frameClass } = useOutletContext();

  const stepContents = [
    {
      id:4,
      text:"各項目を入力or選択後に[次へ(N)]",
      image:Create,
      imageClass:'h-60 w-auto xl:h-100',
      nextClass:`h-[0.8rem] w-[3rem] -mt-[1.3rem] ml-[26.7rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2.2rem] xl:ml-[44.5rem] ${frameClass}`,
      redFrameClass:`h-[3.2rem] w-[7.2rem] -mt-[8.9rem] ml-[11.5rem] xl:h-[5rem] xl:w-[12rem] xl:-mt-[14.7rem] xl:ml-[19.3rem] ${frameClass}`,
      liElements : [
        { id:1, class:`w-[9rem] xl:w-[13rem] ${detailClass}`,value:"・ユーザー名:任意" },
        { id:2, class:`w-[9rem] xl:w-[13rem] ${detailClass}`,value:"・パスワード:任意" },
        { id:3, class:`w-[13rem] xl:w-[19rem] ${detailClass}`,value:"・パスワードの再入力:任意" },
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