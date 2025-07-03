import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/SoftIns/softIns13.png'

export default function Page36() {
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
            id:14,
            text:"アドレスバーに[localhost]と入力後に[Enter]",
            image:Create1,
            imageClass:"h-60 w-auto xl:h-80",
            nextClass:"",
            redFrameClass:"",
            liElements : [
              { id:1, class:`w-[19rem] xl:w-[28rem] ${detailClass}`, value:"下の画像のように表示されたらOKです。"},
            ]
          },
        ]} />
    </div>
  )
}