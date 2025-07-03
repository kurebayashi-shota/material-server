import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/SoftIns/softIns22.png'

export default function Page37() {
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
            id:15,
            text:"自分のIPアドレスを調べよう",
            image:Create1,
            imageClass:"h-60 w-auto xl:h-80",
            nextClass:"",
            redFrameClass:`h-[1rem] w-[5.5rem] -mt-[5.3rem] ml-[3rem] xl:h-[1rem] xl:w-[7rem] xl:-mt-[7rem] xl:ml-[4rem] rounded-sm ${frameClass}`,
            liElements : [
              { id:1, class:`w-[11rem] xl:w-[17rem] ${detailClass}`, value:"①[windows]キーを押下"},
              { id:2, class:`w-[22rem] xl:w-[33rem] ${detailClass}`, value:"②そのまま[terminal]or[端末]と入力して[enter]"},
              { id:3, class:`w-[5rem] xl:w-[8rem] ${detailClass}`, value:"③#ip addr"},
              { id:4, class:`w-[13rem] xl:w-[20rem] ${detailClass}`, value:"④画像のように表示されたら"},
              { id:5, class:`w-[21rem] xl:w-[31rem] ${detailClass}`, value:"④2:enp0s3内のinet～/24間の数字をメモする"},
            ]
          },
        ]}
      />
    </div>
  )
}