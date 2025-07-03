import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/SoftIns/softIns10.png'

export default function Page34() {
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
            id:12,
            text:"#sudo systemctl status apache2",
            image:Create1,
            imageClass:"h-80 w-auto xl:h-120",
            nextClass:"",
            redFrameClass:"",
            liElements : [
              { id:1, class:`w-[25rem] xl:w-[38rem] ${detailClass}`, value:"画像のように[active]と表示されれば動いているのでOK"},
              { id:2, class:`w-[13rem] xl:w-[19rem] ${detailClass}`, value:"元画面に戻るには[q]を入力"}
            ]
          },
        ]} />
    </div>
  )
}