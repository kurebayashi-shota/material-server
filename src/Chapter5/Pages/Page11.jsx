import { useOutletContext} from 'react-router-dom';
import Thitle from '../../ThitleLabel/Thitle'
import Create1 from '../../assets/Tutorial/OsInstall/osIns3.png'
import Create2 from '../../assets/Tutorial/OsInstall/osIns4.png'
import StepRayout from './StepRayout'

export default function Page11() {
  const { detailClass, frameClass } = useOutletContext();

  return (
  <div className="h-[70%]">
    <Thitle
      className="bg-white text-[2.5rem] text-[#174C61] inline-block border-[5px] border-[#333] mt-[1rem] rounded-xl xl:ml-[10rem]"
    >
      OSのインストール
    </Thitle>
    <div className='flex h-[100%]'>
      <StepRayout
        stepContents = {[
          {
            id:10,
            text:"[次]",
            image:Create1,
            imageClass:'h-60 w-auto xl:h-100 rounded-md',
            nextClass:`h-[0.8rem] w-[3rem] -mt-[1.3rem] ml-[17.8rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2.2rem] xl:ml-[29.7rem] rounded-sm ${frameClass}`,
            redFrameClass:``,
            liElements : []
          },
        ]}
      />
      <div className="border-l-[1px] border-cyan-600 h-[90%]"></div>
      <StepRayout
        stepContents = {[
          {
            id:11,
            text:"[次]",
            image:Create2,
            imageClass:'h-60 w-auto xl:h-100 rounded-md',
            nextClass:`h-[0.8rem] w-[3rem] -mt-[1.3rem] ml-[17.8rem] xl:h-[1.4rem] xl:w-[5rem] xl:-mt-[2.2rem] xl:ml-[29.7rem] rounded-sm ${frameClass}`,
            redFrameClass:``,
            liElements : []
          },
        ]}
      />
    </div>
  </div>
  )
}