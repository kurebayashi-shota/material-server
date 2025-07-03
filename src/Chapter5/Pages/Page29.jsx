import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/SoftIns/softIns1.png'
import Create2 from '../../assets/Tutorial/SoftIns/softIns2.png'

export default function Page29() {
  const { detailClass, frameClass } = useOutletContext();
  return (
    <div className="h-[70%]">
      <Thitle
        className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
      >
        ソフトウェアのインストール
      </Thitle>
      <StepRayout
        stepContents={[
          {
            id:3,
            text:"[windows]キーを入力後にそのまま[terminal]or[端末]と入力して[enter]",
            image:Create1,
            imageClass:"h-20 w-auto xl:h-50 rounded-sm",
            nextClass:"",
            redFrameClass:"",
            liElements : []
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:4,
            text:"下の画像のようなウィンドウが表示されたらそのまま次以降の入力をして下さい",
            image:Create2,
            imageClass:"h-30 w-auto xl:h-50 rounded-sm",
            nextClass:"",
            redFrameClass:"",
            liElements : []
          },
        ]} />
    </div>
  )
}