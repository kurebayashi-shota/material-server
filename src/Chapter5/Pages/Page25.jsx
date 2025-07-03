import { useOutletContext} from 'react-router-dom';
import Thitle from '../../ThitleLabel/Thitle'
import Create from '../../assets/Tutorial/OsSetup/osSet20.png'
import StepRayout from './StepRayout'

export default function Page25() {
  const { detailClass, frameClass } = useOutletContext();

  const stepContents = [
    {
      id:11,
      text:"設定ウィンドウが表示されたら下記のように操作",
      image:Create,
      imageClass:'h-70 w-auto xl:h-100',
      nextClass:`h-[0.8rem] w-[2.7rem] -mt-[1.2rem] ml-[19.4rem] xl:h-[1.1rem] xl:w-[3.9rem] xl:-mt-[1.6rem] xl:ml-[27.7rem] ${frameClass}`,
      redFrameClass:`h-[1.5rem] w-[5.8rem] -mt-[10rem] ml-[0.2rem] xl:h-[1.7rem] xl:w-[8rem] xl:-mt-[14rem] xl:ml-[0.5rem] ${frameClass}`,
      liElements : [
        { id:1, class:`w-[12rem] xl:w-[18rem] ${detailClass}`,value:"①左のネットワークを選択" },
        { id:2, class:`w-[15rem] xl:w-[22rem] ${detailClass}`,value:"②割り当て:ブリッジアダプター" },
        { id:3, class:`w-[3rem] xl:w-[5rem] ${detailClass}`,value:"③[OK]" },
      ]
    },
  ]
  
  return (
  <div className="h-[70%]">
    <Thitle
      className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
    >
      VMの設定
    </Thitle>
    <StepRayout stepContents={stepContents} />
  </div>
  )
}