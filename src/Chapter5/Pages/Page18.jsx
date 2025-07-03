import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsSetup/osSet1.png'
import Create2 from '../../assets/Tutorial/OsSetup/osSet2.png'

export default function Page18() {
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
            id:1,
            text:"再起動が完了すると下記の表示になります。",
            image:Create1,
            imageClass:"h-30 w-auto xl:h-50",
            nextClass:"",
            redFrameClass:"",
            liElements : []
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:2,
            text:"作成したアカウントを選択して普通にログインして下さい",
            image:Create2,
            imageClass:"h-30 w-auto xl:h-50",
            nextClass:"",
            redFrameClass:"",
            liElements : []
          },
        ]} />
    </div>
  )
}