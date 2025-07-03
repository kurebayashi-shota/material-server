import { useOutletContext } from 'react-router-dom'
import StepRayout from './StepRayout'
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsSetup/osSet8.png'
import Create2 from '../../assets/Tutorial/OsSetup/osSet9.png'

export default function Page22() {
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
            id:8,
            text:"右上の[✕]をクリック",
            image:Create1,
            imageClass:"h-20 w-auto xl:h-50 rounded-sm",
            nextClass:`mb-[4.6rem] h-[2rem] w-[2.6rem] -mt-[4.6rem] ml-[0.5rem] xl:mb-[12.7rem] xl:h-[4rem] xl:w-[5.9rem] xl:-mt-[10.9rem] xl:ml-[1.4rem] rounded-sm border-cyan-600 ${frameClass}`,
            redFrameClass:"",
            liElements : []
          },
        ]} />
      <div className='mx-auto border-t-[2px] border-cyan-600 w-[80%] my-3'></div>
      <StepRayout
        stepContents={[
          {
            id:9,
            text:"[仮想マシンの電源オフ(P)]を選択して[OK]",
            image:Create2,
            imageClass:"h-30 w-auto xl:h-50 rounded-sm",
            nextClass:`h-[1rem] w-[3.5rem] -mt-[1.5rem] ml-[0.5rem] xl:mb-[12.7rem] xl:h-[1.7rem] xl:w-[13rem] xl:-mt-[5rem] xl:ml-[3.8rem] rounded-sm border-cyan-600 ${frameClass}`,
            redFrameClass:`h-[1rem] w-[8rem] -mt-[2.5rem] ml-[2.2rem] xl:mb-[12.7rem] xl:h-[1.6rem] xl:w-[5.7rem] xl:-mt-[12rem] xl:ml-[0.8rem] rounded-sm border-cyan-600 ${frameClass}`,
            liElements : []
          },
        ]} />
    </div>
  )
}