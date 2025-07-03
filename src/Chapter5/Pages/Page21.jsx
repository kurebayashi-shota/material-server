import { useOutletContext } from 'react-router-dom';
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create from '../../assets/Tutorial/OsSetup/osSet10.png'

export default function Page21() {
  const { detailClass, frameClass } = useOutletContext();

    const stepContents = [
      {
        id:7,
        text:"日本語入力したい場合は下記のように操作して下さい",
        image:Create,
        imageClass:'h-60 w-auto xl:h-100',
        nextClass:"",
        redFrameClass:"",
        liElements : [
          { id:1, class:`w-[13rem] xl:w-[20rem] ${detailClass}`,value:"①右上の文字入力をクリック" },
          { id:2, class:`w-[11rem] xl:w-[16rem] ${detailClass}`,value:"②日本語(Mozc)を選択" },
          { id:3, class:`w-[15rem] xl:w-[23rem] ${detailClass}`,value:"③入力モードを[ひらがな]に変更" },
        ]
      },
    ]
  
  return (
    <div className="h-[70%]">
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        補足:日本語入力について
      </Thitle>
      <StepRayout stepContents={stepContents} />
    </div>
  )
}