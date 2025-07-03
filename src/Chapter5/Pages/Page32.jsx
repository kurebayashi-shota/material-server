import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/SoftIns/softIns5.png'
import Create2 from '../../assets/Tutorial/SoftIns/softIns6.png'

export default function Page32() {
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
            id:8,
            text:"#sudo apt upgrade",
            image:Create1,
            imageClass:"h-30 w-auto xl:h-50 rounded-sm",
            nextClass:"",
            redFrameClass:"",
            liElements : [
              { id:1, class:`w-[19rem] xl:w-[26rem] ${detailClass}`, value:"画像のようになったら[y]入力後に[enter]"}
            ]
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:9,
            text:"画像のようになればOK",
            image:Create2,
            imageClass:"h-30 w-auto xl:h-50 rounded-sm",
            nextClass:"",
            redFrameClass:"",
            liElements :[]
          },
        ]} />
    </div>
  )
}