import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsSetup/Osset21.png'

export default function Page35() {
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
            id:13,
            text:"まずは下記の操作をして本人から接続してみましょう",
            image:Create1,
            imageClass:"h-40 w-auto xl:h-60",
            nextClass:"",
            redFrameClass:"",
            liElements : [
              { id:1, class:`w-[11rem] xl:w-[17rem] ${detailClass}`, value:"①[windows]キーを押下"},
              { id:2, class:`w-[18rem] xl:w-[26rem] ${detailClass}`, value:"②そのまま[firefox]or[ブラウザ]と入力"},
              { id:3, class:`w-[12rem] xl:w-[18rem] ${detailClass}`, value:"③[enter]->FireFoxが起動"},
            ]
          },
        ]} />
    </div>
  )
}